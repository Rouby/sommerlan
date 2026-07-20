import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";
// @ts-ignore
import dayjs = require("dayjs");

export const updateParty: NonNullable<MutationResolvers['updateParty']> = async (_parent, { input: { id, locationWidgetSrc, ...input } }, ctx) => {
  const party = id
    ? await ctx.data.Party.findById(id)
    : new ctx.data.Party();

  if (!party) {
    throw createGraphQLError("Party not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan(
    id ? "update" : "create",
    party,
  );

  party.location = input.location;
  party.iframeSrc = locationWidgetSrc ?? "";
  party.roomsAvailable = input.roomsAvailable;
  party.startDate = input.startDate
    ? dayjs(input.startDate).format("YYYY-MM-DD")
    : "";
  party.endDate = input.endDate
    ? dayjs(input.endDate).format("YYYY-MM-DD")
    : "";

  if (input.tentative !== undefined && input.tentative !== null) {
    party.tentative = input.tentative;
  }
  if (input.rentalCosts !== undefined && input.rentalCosts !== null) {
    party.rentalCosts = input.rentalCosts;
  }
  if (input.feedingCosts !== undefined && input.feedingCosts !== null) {
    party.feedingCosts = input.feedingCosts;
  }
  if (input.registrationDeadline !== undefined) {
    party.registrationDeadline = input.registrationDeadline
      ? dayjs(input.registrationDeadline).format("YYYY-MM-DD")
      : "";
  }
  if (input.payday !== undefined) {
    party.payday = input.payday
      ? dayjs(input.payday).format("YYYY-MM-DD")
      : "";
  }

  await party.save();

  return party;
};
