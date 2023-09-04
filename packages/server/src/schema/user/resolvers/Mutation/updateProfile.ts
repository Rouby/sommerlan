import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import { User } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const updateProfile: NonNullable<
  MutationResolvers["updateProfile"]
> = async (_parent, { input: { id, ...input } }, ctx) => {
  const user = await User.findById(id ?? ctx.jwt.user.id);

  if (!user) {
    throw createGraphQLError("User not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("update", user);

  user.name = input.name;
  user.displayName = input.displayName;
  user.email = input.email;
  user.avatarUrl = input.avatarUrl ?? "";

  await user.save();

  return user;
};
