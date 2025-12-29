import { updateUserLocation } from "../../../../services";
import type { MutationResolvers } from "./../../../types.generated";
export const updateLocation: NonNullable<MutationResolvers['updateLocation']> = async (_parent, { latitude, longitude }, ctx) => {
  if (!ctx.jwt.user) {
    throw new Error("Unauthorized");
  }

  const user = await ctx.data.User.findById(ctx.jwt.user.id);

  if (!user) {
    throw new Error("User not found");
  }

  updateUserLocation(ctx.jwt.user.id, latitude, longitude);

  return user;
};
