import { createGraphQLError } from "graphql-yoga";
import type { MutationResolvers } from "./../../../types.generated";

export const createPurchase: NonNullable<MutationResolvers['createPurchase']> = async (_parent, { title, description, estimatedCost }, ctx) => {
  if (!ctx.ability.can("create", "Purchase")) {
    throw createGraphQLError("Not authorized to create purchases");
  }

  const purchase = new ctx.data.Purchase({
    title,
    description,
    estimatedCost,
    proposerId: ctx.jwt.user.id,
    status: "proposed",
  });

  await purchase.save();

  return purchase as any;
};
