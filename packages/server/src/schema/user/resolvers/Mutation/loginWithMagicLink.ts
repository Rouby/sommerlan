import { createGraphQLError } from "graphql-yoga";
import { getTokenFromMagicLink } from "../../../../magicLinks";
import type { MutationResolvers } from "./../../../types.generated";

export const loginWithMagicLink: NonNullable<
  MutationResolvers["loginWithMagicLink"]
> = async (_parent, { magicLinkId }, _ctx) => {
  const token = getTokenFromMagicLink(magicLinkId);

  if (!token) {
    throw createGraphQLError("Magic link not found");
  }

  return token;
};
