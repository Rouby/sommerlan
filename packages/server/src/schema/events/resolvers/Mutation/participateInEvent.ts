import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const participateInEvent: NonNullable<
  MutationResolvers["participateInEvent"]
> = async (_parent, { id }, ctx) => {
  const event = await ctx.data.Event.findById(id);

  if (!event) {
    throw createGraphQLError("Event not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan("participate", event);

  if (!event.participantIds.includes(ctx.jwt.user.id)) {
    event.participantIds.push(ctx.jwt.user.id);

    await event.save();
  }

  return event;
};
