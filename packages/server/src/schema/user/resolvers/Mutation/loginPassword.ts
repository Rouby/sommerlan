import { createGraphQLError } from "graphql-yoga";
import { User } from "../../../../data";
import { logger } from "../../../../logger";
import { signRefreshToken, signToken } from "../../../../signToken";
import type { MutationResolvers } from "./../../../types.generated";

export const loginPassword: NonNullable<
  MutationResolvers["loginPassword"]
> = async (_parent, { email, password }, _ctx) => {
  const user = await User.findByEmail(email);

  if (user?.password !== password) {
    logger.warn(
      { email, password, expectedPassword: user?.password },
      "Invalid login"
    );
    throw createGraphQLError("Invalid login");
  }

  return {
    token: await signToken(user),
    refreshToken: await signRefreshToken(user),
  };
};
