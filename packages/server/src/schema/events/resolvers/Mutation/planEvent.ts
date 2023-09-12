import { ForbiddenError } from "@casl/ability";
import dayjs from "dayjs";
import { createGraphQLError } from "graphql-yoga";
import { Event } from "../../../../data";
import { storeFile } from "../../../../storeFile";
import type { MutationResolvers } from "./../../../types.generated";

export const planEvent: NonNullable<MutationResolvers["planEvent"]> = async (
  _parent,
  { input: { id, image, ...input } },
  ctx
) => {
  const event = id
    ? await Event.findById(id)
    : new Event({
        ...input,
        organizerId: ctx.jwt.user.id,
        participantIds: [ctx.jwt.user.id],
        date: input.date ? dayjs(input.date).format("YYYY-MM-DD") : "",
        startTime: input.startTime
          ? dayjs(input.startTime).format("HH:mm:ssZ")
          : "",
        endTime: input.endTime ? dayjs(input.endTime).format("HH:mm:ssZ") : "",
        description: input.description ?? "",
      });

  if (!event) {
    throw createGraphQLError("Event not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan(
    id ? "update" : "create",
    event
  );

  if (id) {
    event.name = input.name;
    event.date = input.date ? dayjs(input.date).format("YYYY-MM-DD") : "";
    event.startTime = input.startTime
      ? dayjs(input.startTime).format("HH:mm:ssZ")
      : "";
    event.endTime = input.endTime
      ? dayjs(input.endTime).format("HH:mm:ssZ")
      : "";
    event.description = input.description ?? "";
    event.partyId = input.partyId;
  }

  const { url } = await storeFile(image);
  event.imageUrl = url;

  await event.save();

  return event;
};
