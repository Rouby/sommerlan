import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const updateEventServings: NonNullable<MutationResolvers['updateEventServings']> = async (
  _parent,
  { id, servings, userId },
  ctx,
) => {
  const event = await ctx.data.Event.findById(id);

  if (!event) {
    throw createGraphQLError("Event not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan(
    userId ? "participateOthers" : "participate",
    event,
  );

  const userIdToUse = userId ?? ctx.jwt.user.id;

  if (!event.participantServings) {
    event.participantServings = {};
  }

  if (servings <= 0) {
    event.participantIds = event.participantIds.filter((pId) => pId !== userIdToUse);
    delete event.participantServings[userIdToUse];
  } else {
    if (!event.participantIds.includes(userIdToUse)) {
      event.participantIds.push(userIdToUse);
    }
    event.participantServings[userIdToUse] = servings;
  }

  await event.save();

  return event;
};
