import { ForbiddenError } from "@casl/ability";
import { createPayPalOrder as createOrder } from "../../../../services";
import type { MutationResolvers } from "./../../../types.generated";
import { calculatePartyCosts } from "../../partyCosts";

export const createPayPalOrder: NonNullable<MutationResolvers['createPayPalOrder']> = async (_parent, _arg, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("payWithPayPal", "Party");

  const party = await ctx.data.Party.findLatestParty();

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

  const allDonations = await ctx.data.Donation.filterByPartyId(party.id);
  const attendings = await ctx.data.Attending.filterByPartyId(party.id);
  const costs = calculatePartyCosts(party, attendings, allDonations);
  const totalDues = costs.duesByAttendingId[attending.id]?.totalDues ?? 0;

  const order = await createOrder(totalDues);

  return order.id;
};
