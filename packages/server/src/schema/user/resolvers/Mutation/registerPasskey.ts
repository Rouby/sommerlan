import { ForbiddenError } from "@casl/ability";
import { verifyRegistrationResponse } from "@simplewebauthn/server";
import { createGraphQLError } from "graphql-yoga";
import { issuedChallenges } from "../../../../auth";
import { User } from "../../../../data";
import { expectedOrigin } from "../../../../env";
import { logger } from "../../../../logger";
import { signToken } from "../../../../signToken";
import type { MutationResolvers } from "./../../../types.generated";

export const registerPasskey: NonNullable<
  MutationResolvers["registerPasskey"]
> = async (_parent, { userId, name, response }, ctx) => {
  const expectedChallenge = ctx.req.cookies.challenge;

  if (!expectedChallenge) {
    throw createGraphQLError("Challenge not found");
  }

  const user = await User.findById(userId);

  if (!user) {
    throw createGraphQLError("User not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("update", user, "devices");

  try {
    logger.trace(
      { expectedChallenge, issuedChallenges },
      "Received registration request"
    );

    const verification = await verifyRegistrationResponse({
      expectedChallenge,
      expectedOrigin,
      response,
      requireUserVerification: true,
    });

    if (verification.verified && verification.registrationInfo) {
      const { credentialPublicKey, credentialID, counter } =
        verification.registrationInfo;

      const device = {
        name,
        createdAt: new Date().toISOString(),
        credentialPublicKey: Array.from(credentialPublicKey),
        credentialID: Array.from(credentialID),
        counter,
        transports: response.response.transports,
      };
      user.devices.push(device);
      await user.save();

      return {
        device,
        token: await signToken(user),
      };
    }

    throw createGraphQLError("Registration failed");
  } finally {
    issuedChallenges.delete(expectedChallenge);
  }
};
