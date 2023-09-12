import { createGraphQLError } from "graphql-yoga";
import { User } from "../../../../data";
import { issueMagicLink, sendMail } from "../../../../services";
import type { MutationResolvers } from "./../../../types.generated";

export const sendMagicLink: NonNullable<
  MutationResolvers["sendMagicLink"]
> = async (_parent, { email }, _ctx) => {
  const user = await User.findByEmail(email);

  if (!user) {
    throw createGraphQLError("User not found");
  }

  const magicLink = await issueMagicLink(user);

  await sendMail({
    to: email,
    subject: "SommerLAN Login Link",
    html: `Du kannst dich mit folgendem Link einloggen: <a href="${magicLink}">${magicLink}</a>. Der Link ist 15 Minuten gültig.`,
  });

  return true;
};
