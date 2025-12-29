import { ForbiddenError } from "@casl/ability";
import * as dayjs from "dayjs";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const checkIn: NonNullable<MutationResolvers['checkIn']> = async (
  _parent,
  { userId },
  ctx,
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("checkIn", "User");

  const party = await ctx.data.Party.findCurrentParty();

  if (!party) {
    throw createGraphQLError("Party not found");
  }

  const attending = await ctx.data.Attending.findByPartyIdAndUserId(
    party.id,
    userId,
  );

  if (attending) {
    attending.checkIn = dayjs().toISOString();

    await attending.save();
  }

  return attending;
};
