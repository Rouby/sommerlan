import { createGraphQLError } from "graphql-yoga";
import { User } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const deleteAuthDevice: NonNullable<
  MutationResolvers["deleteAuthDevice"]
> = async (_parent, { id }, ctx) => {
  const user = await User.findById(ctx.jwt.user.id);

  const device = user?.devices.find(
    (device) => device.credentialID.join(",") === id
  );

  if (device) {
    user?.devices.splice(user?.devices.indexOf(device), 1);

    await user?.save();

    return device;
  }

  throw createGraphQLError("Device not found");
};
