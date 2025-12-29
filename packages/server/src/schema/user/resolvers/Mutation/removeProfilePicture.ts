import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "@graphql-tools/utils";
import type { MutationResolvers } from "./../../../types.generated";
export const removeProfilePicture: NonNullable<MutationResolvers['removeProfilePicture']> = async (_parent, _arg, ctx) => {
  const user = await ctx.data.User.findById(ctx.jwt.user.id);

  if (!user) {
    throw createGraphQLError("User not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("update", user);

  user.avatarUrl = "";

  await user.save();

  return user;
};
