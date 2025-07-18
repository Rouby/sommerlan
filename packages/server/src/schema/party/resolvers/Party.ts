import type { PartyResolvers } from "./../../types.generated";
export const Party: Pick<
  PartyResolvers,
  | "attending"
  | "attendings"
  | "costPerDay"
  | "endDate"
  | "feedingCosts"
  | "id"
  | "latitude"
  | "location"
  | "locationWidgetSrc"
  | "longitude"
  | "paidDues"
  | "payday"
  | "pictures"
  | "registrationDeadline"
  | "rentalCosts"
  | "roomsAvailable"
  | "seatsAvailable"
  | "startDate"
  | "tentative"
  | "__isTypeOf"
> = {
  attendings: async (parent, _arg, ctx) => {
    return ctx.data.Attending.filterByPartyId(parent.id);
  },
  locationWidgetSrc: (parent) => {
    return parent.iframeSrc;
  },
  pictures: (parent, _, ctx) => {
    return ctx.data.Picture.filterByPartyId(parent.id);
  },
  registrationDeadline: (parent) => {
    return parent.registrationDeadline ? parent.registrationDeadline : null;
  },
  payday: (parent) => {
    return parent.payday ? parent.payday : null;
  },
  paidDues: async (parent, _, ctx) => {
    const attendings = await ctx.data.Attending.filterByPartyId(parent.id);
    return attendings.reduce((acc, attending) => acc + attending.paidDues, 0);
  },
  attending: (parent, { userId }, ctx) => {
    return ctx.data.Attending.findByPartyIdAndUserId(
      parent.id,
      userId ?? ctx.jwt.user.id,
    );
  },
  costPerDay: async (parent, _arg, ctx) => {
    const attendings = await ctx.data.Attending.filterByPartyId(parent.id);
    const daysWithAttending = attendings.reduce(
      (acc, attending) => acc + Math.max(attending.dates.length - 1, 0),
      0,
    );
    const donations = await ctx.data.Donation.filterByPartyId(parent.id);
    const donationsForRent = donations
      .filter((donation) => donation.dedication === "rent")
      .reduce((acc, donation) => acc + donation.amount, 0);

    return (
      (parent.rentalCosts + parent.feedingCosts - donationsForRent) /
      daysWithAttending
    );
  },
};
