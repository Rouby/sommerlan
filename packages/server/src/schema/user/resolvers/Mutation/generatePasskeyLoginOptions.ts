import { generateAuthenticationOptions } from "@simplewebauthn/server";
import { issuedChallenges } from "../../../../auth";
import { User } from "../../../../data";
import { rpID } from "../../../../env";
import type { MutationResolvers } from "./../../../types.generated";

export const generatePasskeyLoginOptions: NonNullable<
  MutationResolvers["generatePasskeyLoginOptions"]
> = async (_parent, { userId }, ctx) => {
  const user = userId ? await User.findById(userId) : null;

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
  ctx.reply.cookie("challenge", options.challenge, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60000,
  });

  return options;
};
