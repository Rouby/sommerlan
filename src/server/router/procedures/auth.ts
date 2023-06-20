import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import base64url from "base64url";
import { randomUUID } from "crypto";
import { z } from "zod";
import { User } from "../../data";
import { publicProcedure, router } from "../trpc";

const issuedChallenges = new Map<string, string>();

const expectedOrigin = process.env.APP_ORIGIN ?? "http://localhost:5173";
const rpID =
  expectedOrigin.match(/^https?:\/\/(.*?)\/?(:\d+)?$/)?.[1] ?? "localhost";

export const authRouter = router({
  register: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        response: z.object({
          id: z.string(),
          rawId: z.string(),
          response: z.object({
            clientDataJSON: z.string(),
            attestationObject: z.string(),
            transports: z.array(z.any()).optional(),
          }),
          clientExtensionResults: z.object({}),
          type: z.enum(["public-key"]),
        }),
      })
    )
    .mutation(async (req) => {
      try {
        const expectedChallenge = issuedChallenges.get(req.input.userId);

        if (!expectedChallenge) {
          throw new Error("No challenge issued");
        }

        const verification = await verifyRegistrationResponse({
          expectedChallenge,
          expectedOrigin,
          response: req.input.response,
          requireUserVerification: true,
        });

        if (verification.verified && verification.registrationInfo) {
          const { credentialPublicKey, credentialID, counter } =
            verification.registrationInfo;

          const user = new User({
            id: req.input
              .userId as `${string}-${string}-${string}-${string}-${string}`,
            devices: [
              {
                credentialPublicKey: Array.from(credentialPublicKey),
                credentialID: Array.from(credentialID),
                counter,
                transports: req.input.response.response.transports,
              },
            ],
          });
          await user.save();
          console.log("save", user);
        }
      } finally {
        issuedChallenges.delete(req.input.userId);
      }
    }),

  generateRegistrationOptions: publicProcedure
    .input(z.object({ userName: z.string() }))
    .mutation(async (req) => {
      const id = randomUUID();

      const options = generateRegistrationOptions({
        rpID,
        rpName: "SommerLAN",
        userID: id,
        userName: req.input.userName,
        timeout: 60000,
        attestationType: "none",
        authenticatorSelection: {
          residentKey: "required",
          userVerification: "preferred",
        },
        supportedAlgorithmIDs: [-7, -257],
      });

      issuedChallenges.set(id, options.challenge);

      return options;
    }),

  login: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        response: z.object({
          id: z.string(),
          rawId: z.string(),
          response: z.object({
            clientDataJSON: z.string(),
            authenticatorData: z.string(),
            signature: z.string(),
            transports: z.array(z.any()).optional(),
          }),
          clientExtensionResults: z.object({}),
          type: z.enum(["public-key"]),
        }),
      })
    )
    .mutation(async (req) => {
      const user = await User.findById(req.input.userId);

      if (!user) {
        throw new Error("User not found");
      }

      const credId = Array.from(
        base64url.toBuffer(req.input.response.rawId)
      ).join(",");
      const dbAuthenticator = user.devices.find(
        (dev) => dev.credentialID.join(",") === credId
      );

      if (!dbAuthenticator) {
        throw new Error("Authenticator not found");
      }

      try {
        const expectedChallenge = issuedChallenges.get(req.input.userId);

        if (!expectedChallenge) {
          throw new Error("No challenge issued");
        }

        const verification = await verifyAuthenticationResponse({
          expectedChallenge,
          expectedOrigin,
          response: req.input.response,
          expectedRPID: rpID,
          authenticator: {
            counter: dbAuthenticator.counter,
            credentialID: Uint8Array.from(dbAuthenticator.credentialID),
            credentialPublicKey: Uint8Array.from(
              dbAuthenticator.credentialPublicKey
            ),
            transports: dbAuthenticator.transports,
          },
          requireUserVerification: true,
        });

        if (verification.verified) {
          dbAuthenticator.counter = verification.authenticationInfo.newCounter;
          await user.save();

          return user;
        }
      } finally {
        issuedChallenges.delete(req.input.userId);
      }
    }),

  generateLoginOptions: publicProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async (req) => {
      const user = await User.findById(req.input.userId);

      if (!user) {
        throw new Error("User not found");
      }

      const options = generateAuthenticationOptions({
        rpID,
        userVerification: "preferred",
        timeout: 60000,
        allowCredentials: user.devices.map((dev) => ({
          id: Uint8Array.from(dev.credentialID),
          type: "public-key",
          transports: dev.transports,
        })),
      });

      issuedChallenges.set(req.input.userId, options.challenge);

      return options;
    }),
});
