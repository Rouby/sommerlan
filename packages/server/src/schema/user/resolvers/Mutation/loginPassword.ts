import { createGraphQLError } from "graphql-yoga";
import { logger } from "../../../../logger";
import { signRefreshToken, signToken } from "../../../../signToken";
import type { MutationResolvers } from "./../../../types.generated";

export const loginPassword: NonNullable<MutationResolvers['loginPassword']> = async (_parent, { email, password }, ctx) => {
  const user = await ctx.data.User.findByEmail(email);

  if (user?.password !== password) {
    logger.warn({ email }, "Invalid login");
    throw createGraphQLError("Invalid login");
  }

  return {
    token: await signToken(user),
    refreshToken: await signRefreshToken(user),
  };
};
