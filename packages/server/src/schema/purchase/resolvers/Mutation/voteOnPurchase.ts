import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const voteOnPurchase: NonNullable<MutationResolvers['voteOnPurchase']> = async (_parent, { purchaseId, vote }, ctx) => {
  const purchase = await ctx.data.Purchase.findById(purchaseId);

  if (!purchase) {
    throw createGraphQLError("Purchase not found");
  }

  if (!ctx.ability.can("vote", purchase)) {
    throw createGraphQLError("Not authorized to vote on this purchase");
  }

  // Add or update the vote in the purchase's votes array
  purchase.addOrUpdateVote(
    ctx.jwt.user.id,
    vote.toLowerCase() as Lowercase<typeof vote>,
  );

  await purchase.save();

  return purchase as any;
};
