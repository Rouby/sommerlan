import "@fastify/cookie";
import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import { TRPCError } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import base64url from "base64url";
import { EventEmitter } from "events";
import { z } from "zod";
import { User } from "../../data";
import { findDiscordUserId, sendDiscordMessage } from "../../discord";
import { expectedOrigin } from "../../env";
import { logger } from "../../logger";
import { getTokenFromMagicLink, issueMagicLink } from "../../magicLinks";
import { sendMail } from "../../mail";
import { signToken } from "../../signToken";
import { protectedProcedure, publicProcedure, router } from "../trpc";

const issuedChallenges = new Set<string>();

const rpID =
  expectedOrigin.match(/^https?:\/\/(.*?)\/?(:\d+)?$/)?.[1] ?? "localhost";

const authEvents = new EventEmitter();

export const authRouter = router({
  register: publicProcedure
    .input(z.object({ userName: z.string(), email: z.string() }))
    .mutation(async (req) => {
      const { userName, email } = req.input;

      if (await User.findByEmail(email)) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists",
        });
      }

      const user = new User({
        name: userName,
        displayName: userName,
        email,
      });
      await user.save();

      logger.trace({ user }, "Registered user");

      return {
        user,
        token: await signToken(user),
      };
    }),

  registerPasskey: publicProcedure
    .input(
      z.object({
        userID: z.string(),
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

      const user = await User.findById(req.input.userID);

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      try {
        logger.trace(
          { expectedChallenge, issuedChallenges },
          "Received registration request"
        );

        const verification = await verifyRegistrationResponse({
          expectedChallenge,
          expectedOrigin,
          response: req.input.response,
          requireUserVerification: true,
        });

        if (verification.verified && verification.registrationInfo) {
          const { credentialPublicKey, credentialID, counter } =
            verification.registrationInfo;

          user.devices.push({
            credentialPublicKey: Array.from(credentialPublicKey),
            credentialID: Array.from(credentialID),
            counter,
            transports: req.input.response.response.transports,
          });
          await user.save();

          return signToken(user);
        }
      } finally {
        issuedChallenges.delete(expectedChallenge);
      }
    }),

  generateRegistrationOptions: publicProcedure
    .input(z.object({ userID: z.string() }))
    .mutation(async (req) => {
      const user = await User.findById(req.input.userID);

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      const options = generateRegistrationOptions({
        rpID,
        rpName: "SommerLAN",
        userID: req.input.userID,
        userName: user.name,
        timeout: 60000,
        attestationType: "direct",
        excludeCredentials: user.devices.map((device) => ({
          id: Uint8Array.from(device.credentialID),
          type: "public-key",
          transports: device.transports,
        })),
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
    .input(z.object({ userID: z.string().nullish() }))
    .mutation(async (req) => {
      const user = req.input.userID
        ? await User.findById(req.input.userID)
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

      return { userID: user?.id, options };
    }),

  loginFromOtherDevice: publicProcedure
    .input(z.object({ requestId: z.string() }))
    .subscription((req) =>
      observable<{ userId: string; token: string }>((emit) => {
        logger.trace("Subscribing");

        authEvents.on("signInFromDevice", handleSignIn);

        return () => {
          logger.trace("Stop Subscribing");
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

  sendMagicLink: publicProcedure
    .input(
      z
        .object({
          email: z.string().optional(),
          discordUsername: z.string().optional(),
        })
        .and(
          z.union([
            z.object({ email: z.undefined(), discordUsername: z.string() }),
            z.object({ email: z.string(), discordUsername: z.undefined() }),
          ])
        )
    )
    .mutation(async (req) => {
      if (req.input.email) {
        const user = await User.findByEmail(req.input.email);

        if (!user) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }

        const magicLink = await issueMagicLink(user);

        await sendMail({
          to: req.input.email,
          subject: "SommerLAN Login Link",
          html: `Du kannst dich mit folgendem Link einloggen: <a href="${magicLink}">${magicLink}</a>. Der Link ist 15 Minuten gültig.`,
        });
      }

      if (req.input.discordUsername) {
        const userId = await findDiscordUserId(req.input.discordUsername);

        if (!userId) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }

        const user = await User.findByDiscordId(userId);

        if (!user) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not connected",
          });
        }

        const magicLink = await issueMagicLink(user);

        await sendDiscordMessage(
          userId,
          `Login with this link: <a href="${magicLink}">${magicLink}</a>`,
          { ttl: "15m" }
        );
      }
    }),

  loginWithMagicLink: publicProcedure
    .input(z.object({ magicLinkId: z.string() }))
    .mutation(async (req) => {
      const token = getTokenFromMagicLink(req.input.magicLinkId);

      if (!token) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Magic link not found",
        });
      }

      return token;
    }),
});
