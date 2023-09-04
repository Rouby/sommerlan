import { createGraphQLError } from "graphql-yoga";
import { User } from "../../../data";
import type { PictureTagResolvers } from "./../../types.generated";

export const PictureTag: PictureTagResolvers = {
  user: async (parent) => {
    const user = await User.findById(parent.userId);
    if (!user) throw createGraphQLError("User not found");
    return user;
  }
};
