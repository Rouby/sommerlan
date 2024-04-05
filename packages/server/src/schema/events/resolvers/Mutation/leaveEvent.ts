import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const leaveEvent: NonNullable<MutationResolvers["leaveEvent"]> = async (
  _parent,
  { id },
  ctx,
) => {
  const event = await ctx.data.Event.findById(id);

  if (!event) {
    throw createGraphQLError("Event not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("participate", event);

  if (event.participantIds.includes(ctx.jwt.user.id)) {
    event.participantIds = event.participantIds.filter(
      (id) => id !== ctx.jwt.user.id,
    );

    await event.save();
  }

  return event;
};
