import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import { storeFile } from "../../../../storeFile";
import type { MutationResolvers } from "./../../../types.generated";

export const updateProfile: NonNullable<
  MutationResolvers["updateProfile"]
> = async (_parent, { input: { id, ...input } }, ctx) => {
  const user = await ctx.data.User.findById(id ?? ctx.jwt.user.id);

  if (!user) {
    throw createGraphQLError("User not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("update", user);

  user.name = input.name;
  user.displayName = input.displayName;
  user.email = input.email;
  user.password = input.password ?? "";
  if (input.avatar) {
    const { url } = await storeFile(input.avatar);
    user.avatarUrl = url;
  }

  await user.save();

  return user;
};
