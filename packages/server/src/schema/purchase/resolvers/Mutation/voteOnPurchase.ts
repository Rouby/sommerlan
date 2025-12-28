import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const voteOnPurchase: NonNullable<
  MutationResolvers["voteOnPurchase"]
> = async (_parent, { purchaseId, vote }, ctx) => {
  const purchase = await ctx.data.Purchase.findById(purchaseId);

  if (!purchase) {
    throw createGraphQLError("Purchase not found");
  }

  if (!ctx.ability.can("vote", purchase)) {
    throw createGraphQLError("Not authorized to vote on this purchase");
  }

  // Check if user already voted, update if exists
  const existingVote = await ctx.data.Vote.findByUserAndPurchase(
    ctx.jwt.user.id,
    purchaseId,
  );

  if (existingVote) {
    existingVote.vote = vote.toLowerCase() as Lowercase<typeof vote>;
    await existingVote.save();
    return existingVote;
  }

  const newVote = new ctx.data.Vote({
    purchaseId,
    userId: ctx.jwt.user.id,
    vote: vote.toLowerCase() as Lowercase<typeof vote>,
  });

  await newVote.save();

  return newVote;
};
