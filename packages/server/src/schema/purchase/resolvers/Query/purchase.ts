import { createGraphQLError } from "graphql-yoga";
import type { QueryResolvers } from "./../../../types.generated";

export const purchase: NonNullable<QueryResolvers["purchase"]> = async (
  _parent,
  { id },
  ctx,
) => {
  const purchase = await ctx.data.Purchase.findById(id);

  if (!purchase) {
    return null;
  }

  if (!ctx.ability.can("read", purchase)) {
    throw createGraphQLError("Not authorized to view this purchase");
  }

  return purchase;
};
