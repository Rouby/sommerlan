import { ForbiddenError } from "@casl/ability";
import { createPayPalOrder as createOrder } from "../../../../services";
import type { MutationResolvers } from "./../../../types.generated";
export const createPayPalOrder: NonNullable<
  MutationResolvers["createPayPalOrder"]
> = async (_parent, _arg, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("payWithPayPal", "Party");

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

  const donations = await ctx.data.Donation.filter(
    (d) => d.partyId === party.id && d.userId === ctx.jwt.user.id,
  );

  // Calculate costs
  const daysAttending = Math.max(0, attending.dates.length - 1); // First day is free
  const rentDues = daysAttending * (party.finalCostPerDay || 0);

  // Calculate donations made by this user
  const donationSum = donations.reduce(
    (acc, donation) => acc + donation.amount,
    0,
  );

  // Total amount to pay
  const totalDues = rentDues + donationSum;

  const order = await createOrder(totalDues);

  return order.id;
};
