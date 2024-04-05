import { createGraphQLError } from "graphql-yoga";
import type { PictureTagResolvers } from "./../../types.generated";

export const PictureTag: PictureTagResolvers = {
  user: async (parent, _, ctx) => {
    const user = await ctx.data.User.findById(parent.userId);
    if (!user) throw createGraphQLError("User not found");
    return user;
  },
};
