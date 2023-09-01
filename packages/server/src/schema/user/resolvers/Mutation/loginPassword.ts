import { createGraphQLError } from "graphql-yoga";
import { User } from "../../../../data";
import { signToken } from "../../../../signToken";
import type { MutationResolvers } from "./../../../types.generated";

export const loginPassword: NonNullable<
  MutationResolvers["loginPassword"]
> = async (_parent, { email, password }, _ctx) => {
  const user = await User.findByEmail(email);

  if (user?.password !== password) {
    throw createGraphQLError("Invalid login");
  }

  return signToken(user);
};
