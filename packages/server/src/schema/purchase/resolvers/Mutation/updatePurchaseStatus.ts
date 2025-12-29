import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const updatePurchaseStatus: NonNullable<MutationResolvers['updatePurchaseStatus']> = async (_parent, { purchaseId, status }, ctx) => {
  const purchase = await ctx.data.Purchase.findById(purchaseId);

  if (!purchase) {
    throw createGraphQLError("Purchase not found");
  }

  if (!ctx.ability.can("update", purchase)) {
    throw createGraphQLError("Not authorized to update this purchase");
  }

  purchase.status = status.toLowerCase() as Lowercase<typeof status>;
  await purchase.save();

  return purchase as any;
};
