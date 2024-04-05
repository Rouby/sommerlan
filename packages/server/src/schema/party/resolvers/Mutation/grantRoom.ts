import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const grantRoom: NonNullable<MutationResolvers["grantRoom"]> = async (
  _parent,
  { attendingId },
  ctx
) => {
  const attending = await ctx.data.Attending.findById(attendingId);

  if (!attending) {
    throw createGraphQLError("Attending not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("grantRoom", attending);

  attending.room = "granted";

  await attending.save();

  return attending;
};
