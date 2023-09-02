import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import { Attending } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const denyRoom: NonNullable<MutationResolvers["denyRoom"]> = async (
  _parent,
  { attendingId },
  ctx
) => {
  const attending = await Attending.findById(attendingId);

  if (!attending) {
    throw createGraphQLError("Attending not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("grantRoom", attending);

  attending.room = "granted";

  await attending.save();

  return attending;
};
