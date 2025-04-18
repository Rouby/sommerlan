import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const participateInEvent: NonNullable<
  MutationResolvers["participateInEvent"]
> = async (_parent, { id, userId }, ctx) => {
  const event = await ctx.data.Event.findById(id);

  if (!event) {
    throw createGraphQLError("Event not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan(
    userId ? "participateOthers" : "participate",
    event,
  );

  const userIdToUse = userId ?? ctx.jwt.user.id;

  if (!event.participantIds.includes(userIdToUse)) {
    event.participantIds.push(userIdToUse);

    await event.save();
  }

  return event;
};
