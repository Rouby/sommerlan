import { createGraphQLError } from "graphql-yoga";
import { Attending } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const recindRoom: NonNullable<MutationResolvers["recindRoom"]> = async (
  _parent,
  { partyId },
  ctx
) => {
  const attending = await Attending.findByPartyIdAndUserId(
    partyId,
    ctx.jwt.user.id
  );

  if (!attending) {
    throw createGraphQLError("Attending not found");
  }

  attending.room = "";

  await attending.save();

  return attending;
};
