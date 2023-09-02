import { createGraphQLError } from "graphql-yoga";
import { Attending } from "../../../../data";
import type { MutationResolvers } from "./../../../types.generated";

export const denyRoom: NonNullable<MutationResolvers["denyRoom"]> = async (
  _parent,
  { attendingId },
  _ctx
) => {
  const attending = await Attending.findById(attendingId);

  if (!attending) {
    throw createGraphQLError("Attending not found");
  }

  attending.room = "granted";

  await attending.save();

  return attending;
};
