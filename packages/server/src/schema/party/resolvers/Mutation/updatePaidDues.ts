import { ForbiddenError } from "@casl/ability";
import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";
export const updatePaidDues: NonNullable<
  MutationResolvers["updatePaidDues"]
> = async (_parent, { attendingId, paidDues }, ctx) => {
  /* Implement Mutation.updatePaidDues resolver logic here */
  const attending = await ctx.data.Attending.findById(attendingId);

  if (!attending) {
    throw createGraphQLError("Attending not found");
  }

  ForbiddenError.from(ctx.ability).throwUnlessCan(
    "update",
    attending,
    "paidDues",
  );

  attending.paidDues = Math.max(0, paidDues);

  await attending.save();

  return attending;
};
