import { createGraphQLError } from "graphql-yoga";
import { logger } from "../../../../logger";
import { signRefreshToken, signToken } from "../../../../signToken";
import type { MutationResolvers } from "./../../../types.generated";

export const register: NonNullable<MutationResolvers["register"]> = async (
  _parent,
  { userName, email, password },
  ctx
) => {
  if (await ctx.data.User.findByEmail(email)) {
    throw createGraphQLError("User already exists");
  }

  const user = new ctx.data.User({
    name: userName,
    displayName: userName,
    email,
    ...(password && { password }),
  });
  await user.save();

  logger.trace({ user }, "Registered user");

  return {
    user,
    token: await signToken(user),
    refreshToken: await signRefreshToken(user),
  };
};
