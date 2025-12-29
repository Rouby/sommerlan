import { verifyAuthenticationResponse } from "@simplewebauthn/server";
import base64url from "base64url";
import { createGraphQLError } from "graphql-yoga";
import { issuedChallenges } from "../../../../auth";
import { expectedOrigin, rpID } from "../../../../env";
import { signRefreshToken, signToken } from "../../../../signToken";
import type { MutationResolvers } from "./../../../types.generated";

export const loginPasskey: NonNullable<MutationResolvers['loginPasskey']> = async (_parent, { response }, ctx) => {
  const credId = Array.from(base64url.toBuffer(response.rawId)).join(",");
  const user = await ctx.data.User.find((user) =>
    user.devices.some((dev) => dev.credentialID.join(",") === credId),
  );
  const authenticator = user?.devices.find(
    (dev) => dev.credentialID.join(",") === credId,
  );

  if (!user || !authenticator) {
    throw createGraphQLError("Authenticator not found");
  }

  const expectedChallenge = ctx.req.cookies.challenge;

  if (!expectedChallenge) {
    throw createGraphQLError("Challenge not found");
  }

  try {
    const verification = await verifyAuthenticationResponse({
      expectedChallenge,
      expectedOrigin,
      response,
      expectedRPID: rpID,
      authenticator: {
        counter: authenticator.counter,
        credentialID: Uint8Array.from(authenticator.credentialID),
        credentialPublicKey: Uint8Array.from(authenticator.credentialPublicKey),
        transports: authenticator.transports,
      },
      requireUserVerification: true,
    });

    if (verification.verified) {
      authenticator.counter = verification.authenticationInfo.newCounter;
      authenticator.lastUsedAt = new Date().toISOString();
      await user.save();

      return {
        token: await signToken(user),
        refreshToken: await signRefreshToken(user),
        credentialID: authenticator.credentialID,
      };
    }
  } finally {
    issuedChallenges.delete(expectedChallenge);
  }

  throw createGraphQLError("Invalid response");
};
