import { generateRegistrationOptions } from "@simplewebauthn/server";
import { createGraphQLError } from "graphql-yoga";
import { issuedChallenges } from "../../../../auth";
import { rpID } from "../../../../env";
import type { MutationResolvers } from "./../../../types.generated";

export const generatePasskeyRegisterOptions: NonNullable<
  MutationResolvers["generatePasskeyRegisterOptions"]
> = async (_parent, { userId }, ctx) => {
  const user = await ctx.data.User.findById(userId);

  if (!user) {
    throw createGraphQLError("User not found");
  }

  const options = generateRegistrationOptions({
    rpID,
    rpName: "SommerLAN",
    userID: userId,
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
  ctx.reply.cookie("challenge", options.challenge, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60000,
  });

  return options;
};
