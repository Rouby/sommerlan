import { ForbiddenError } from "@casl/ability";
import dayjs from "dayjs";
import { createGraphQLError } from "graphql-yoga";
import { Attending, Party } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const checkOut: NonNullable<MutationResolvers["checkOut"]> = async (
  _parent,
  { userId },
  ctx,
) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("checkIn", "User");

  const party = await Party.findLatest();

  if (!party) {
    throw createGraphQLError("Party not found");
  }

  const attending = await Attending.findByPartyIdAndUserId(party.id, userId);

  if (attending) {
    attending.checkIn = dayjs().toISOString();

    await attending.save();
  }

  return attending;
};
