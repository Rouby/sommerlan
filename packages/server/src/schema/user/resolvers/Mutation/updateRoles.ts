import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";
export const updateRoles: NonNullable<
  MutationResolvers["updateRoles"]
> = async (_parent, { id, roles }, ctx) => {
  const user = await ctx.data.User.findById(id ?? ctx.jwt.user.id);

  if (!user) {
    throw createGraphQLError("User not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("update", user, "roles");

  user.roles = roles;

  await user.save();

  return user;
};
