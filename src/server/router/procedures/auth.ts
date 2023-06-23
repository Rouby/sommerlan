import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import { TRPCError } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import base64url from "base64url";
import { randomUUID } from "crypto";
import { EventEmitter } from "events";
import { sign } from "jsonwebtoken";
import { z } from "zod";
import { User } from "../../data";
import { createAbility } from "../ability";
import { protectedProcedure, publicProcedure, router } from "../trpc";

const issuedChallenges = new Set<string>();

const expectedOrigin = process.env.APP_ORIGIN ?? "http://localhost:5173";
const rpID =
  expectedOrigin.match(/^https?:\/\/(.*?)\/?(:\d+)?$/)?.[1] ?? "localhost";

const authEvents = new EventEmitter();

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
      const expectedChallenge = req.ctx.req.cookies.challenge;

      if (!expectedChallenge) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Challenge not found",
        });
      }

      try {
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

          return signToken(user);
        }
      } finally {
        issuedChallenges.delete(expectedChallenge);
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

      issuedChallenges.add(options.challenge);
      req.ctx.res.cookie("challenge", options.challenge, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60000,
      });

      return options;
    }),

  login: publicProcedure
    .input(
      z.object({
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
      const credId = Array.from(
        base64url.toBuffer(req.input.response.rawId)
      ).join(",");
      const user = (await User.all()).find((user) =>
        user.devices.find((dev) => dev.credentialID.join(",") === credId)
      );
      const authenticator = user?.devices.find(
        (dev) => dev.credentialID.join(",") === credId
      );

      if (!user || !authenticator) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Authenticator not found",
        });
      }

      const expectedChallenge = req.ctx.req.cookies.challenge;

      if (!expectedChallenge) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Challenge not found",
        });
      }

      try {
        const verification = await verifyAuthenticationResponse({
          expectedChallenge,
          expectedOrigin,
          response: req.input.response,
          expectedRPID: rpID,
          authenticator: {
            counter: authenticator.counter,
            credentialID: Uint8Array.from(authenticator.credentialID),
            credentialPublicKey: Uint8Array.from(
              authenticator.credentialPublicKey
            ),
            transports: authenticator.transports,
          },
          requireUserVerification: true,
        });

        if (verification.verified) {
          authenticator.counter = verification.authenticationInfo.newCounter;
          await user.save();

          return signToken(user);
        }
      } finally {
        issuedChallenges.delete(expectedChallenge);
      }
    }),

  generateLoginOptions: publicProcedure
    .input(z.object({ userId: z.string().nullish() }))
    .mutation(async (req) => {
      const user = req.input.userId
        ? await User.findById(req.input.userId)
        : null;

      const options = generateAuthenticationOptions({
        rpID,
        userVerification: "preferred",
        timeout: 60000,
        allowCredentials: user?.devices.map((dev) => ({
          id: Uint8Array.from(dev.credentialID),
          type: "public-key",
          transports: dev.transports,
        })),
      });

      issuedChallenges.add(options.challenge);
      req.ctx.res.cookie("challenge", options.challenge, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60000,
      });

      return { userId: user?.id, options };
    }),

  loginFromOtherDevice: publicProcedure
    .input(z.object({ requestId: z.string() }))
    .subscription((req) =>
      observable<{ userId: string; token: string }>((emit) => {
        console.log("Subscribing");

        authEvents.on("signInFromDevice", handleSignIn);

        return () => {
          console.log("Stop Subscribing");
          authEvents.off("signInFromDevice", handleSignIn);
        };

        function handleSignIn(data: {
          requestId: string;
          userId: string;
          token: string;
        }) {
          if (data.requestId === req.input.requestId) {
            emit.next(data);
            emit.complete();
          }
        }
      })
    ),

  authorizeLoginRequest: protectedProcedure
    .input(z.object({ requestId: z.string() }))
    .mutation(async (req) => {
      authEvents.emit("signInFromDevice", {
        requestId: req.input.requestId,
        userId: req.ctx.user.id,
        token: await signToken(req.ctx.user),
      });
    }),

  validateToken: protectedProcedure
    .input(z.string().nullish())
    .query((req) => signToken(req.ctx.user)),
});

async function tokenPayload(user: User) {
  return {
    user: {
      ...Object.fromEntries(
        Object.entries(Object.getOwnPropertyDescriptors(User.prototype))
          .filter(([key, value]) => !(key in { ...user }) && !value.writable)
          .map(([key, value]) => [key, value.get?.call(user)])
      ),
      ...user,
    } as User,
    abilityRules: (await createAbility(user)).rules,
  };
}

async function signToken(user: User) {
  return sign(
    await tokenPayload(user),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.env.SESSION_SECRET!,
    {
      algorithm: "HS256",
      subject: user.id,
      expiresIn: "1y",
    }
  );
}

export type JWTPayload = Awaited<ReturnType<typeof tokenPayload>>;
