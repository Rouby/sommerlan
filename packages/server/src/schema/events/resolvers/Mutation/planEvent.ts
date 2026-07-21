import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import { storeFile } from "../../../../storeFile";
import type { MutationResolvers } from "./../../../types.generated";
// @ts-ignore
import dayjs = require("dayjs");

export const planEvent: NonNullable<MutationResolvers['planEvent']> = async (
  _parent,
  { input: { id, image, ...input } },
  ctx,
) => {
  const eventType = input.eventType ?? "STANDARD";
  const pricingMode = input.pricingMode ?? undefined;
  const price = input.price != null ? Number(input.price) : undefined;
  const servingsUnit = input.servingsUnit ?? undefined;

  const event = id
    ? await ctx.data.Event.findById(id)
    : new ctx.data.Event({
        ...input,
        eventType,
        pricingMode,
        price,
        servingsUnit,
        organizerId: ctx.jwt.user.id,
        participantIds: [ctx.jwt.user.id],
        participantServings: { [ctx.jwt.user.id]: 1 },
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
    event,
  );

  if (id) {
    event.name = input.name;
    event.partyId = input.partyId;
    event.date = input.date ? dayjs(input.date).format("YYYY-MM-DD") : "";
    event.startTime = input.startTime ?? "";
    event.endTime = input.endTime ?? "";
    event.description = input.description ?? "";
    event.eventType = eventType;
    event.pricingMode = pricingMode;
    event.price = price;
    event.servingsUnit = servingsUnit;
  }

  if (image) {
    const { url } = await storeFile(image);
    event.imageUrl = url;
  }

  await event.save();

  return event;
};
