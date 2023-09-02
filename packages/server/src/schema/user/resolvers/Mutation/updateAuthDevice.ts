import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import { User } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const updateAuthDevice: NonNullable<
  MutationResolvers["updateAuthDevice"]
> = async (_parent, { id, name }, ctx) => {
  const user = await User.findById(ctx.jwt.user.id);

  if (!user) {
    throw createGraphQLError("User not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("update", user, "devices");

  const device = user.devices.find(
    (device) => device.credentialID.join(",") === id
  );

  if (device) {
    device.name = name;

    await user.save();

    return device;
  }

  throw createGraphQLError("Device not found");
};
