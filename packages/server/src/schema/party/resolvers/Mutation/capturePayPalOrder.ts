import { GraphQLError } from "graphql";
import { capturePayPalOrder as captureOrder } from "../../../../services";
import type { MutationResolvers } from "./../../../types.generated";
export const capturePayPalOrder: NonNullable<
  MutationResolvers["capturePayPalOrder"]
> = async (_parent, { orderId }, ctx) => {
  /* Implement Mutation.capturePayPalOrder resolver logic here */
  const response = await captureOrder(orderId);

  if (response.status !== "COMPLETED") {
    throw new GraphQLError("PayPal order not completed");
  }

  const party = await ctx.data.Party.findLatest();

  if (!party) {
    throw new Error("Party not found");
  }

  const attending = await ctx.data.Attending.findByPartyIdAndUserId(
    party.id,
    ctx.jwt.user.id,
  );

  if (!attending) {
    throw new Error("Attending not found");
  }

  attending.paidDues =
    +response.purchase_units[0].payments[0].captures[0].amount.value;

  await attending.save();

  return attending;
};
