import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";
// @ts-ignore
import dayjs = require("dayjs");

export const updateParty: NonNullable<
  MutationResolvers["updateParty"]
> = async (_parent, { input: { id, ...input } }, ctx) => {
  const party = id
    ? await ctx.data.Party.findById(id)
    : new ctx.data.Party({
        ...input,
        startDate: input.startDate
          ? dayjs(input.startDate).format("YYYY-MM-DD")
          : "",
        endDate: input.endDate ? dayjs(input.endDate).format("YYYY-MM-DD") : "",
      });

  if (!party) {
    throw createGraphQLError("Party not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan(
    id ? "update" : "create",
    party
  );

  if (id) {
    party.location = input.location;
    party.iframeSrc = input.locationWidgetSrc ?? "";
    party.roomsAvailable = input.roomsAvailable;
    party.startDate = input.startDate
      ? dayjs(input.startDate).format("YYYY-MM-DD")
      : "";
    party.endDate = input.endDate
      ? dayjs(input.endDate).format("YYYY-MM-DD")
      : "";
  }

  await party.save();

  return party;
};
