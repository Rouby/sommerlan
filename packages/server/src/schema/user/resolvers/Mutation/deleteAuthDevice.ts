import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const deleteAuthDevice: NonNullable<MutationResolvers['deleteAuthDevice']> = async (_parent, { id }, ctx) => {
  const user = await ctx.data.User.findById(ctx.jwt.user.id);

  if (!user) {
    throw createGraphQLError("User not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("update", user, "devices");

  const device = user.devices.find(
    (device) => device.credentialID.join(",") === id,
  );

  if (device) {
    user.devices.splice(user.devices.indexOf(device), 1);

    await user.save();

    return device;
  }

  throw createGraphQLError("Device not found");
};
