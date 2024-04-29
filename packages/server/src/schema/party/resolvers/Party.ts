import type { PartyResolvers } from "./../../types.generated";
export const Party: Pick<
  PartyResolvers,
  | "attendings"
  | "endDate"
  | "finalCostPerDay"
  | "id"
  | "location"
  | "locationWidgetSrc"
  | "payday"
  | "pictures"
  | "registrationDeadline"
  | "rentalCosts"
  | "roomsAvailable"
  | "seatsAvailable"
  | "startDate"
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
};
