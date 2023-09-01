import { createGraphQLError } from "graphql-yoga";
import { User } from "../../../../data";
import { logger } from "../../../../logger";
import { signToken } from "../../../../signToken";
import type { MutationResolvers } from "./../../../types.generated";

export const register: NonNullable<MutationResolvers["register"]> = async (
  _parent,
  { userName, email, password },
  _ctx
) => {
  if (await User.findByEmail(email)) {
    throw createGraphQLError("User already exists");
  }

  const user = new User({
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
  };
};
