import type { PartyResolvers, SeatSection } from "./../../types.generated";

/**
 * Hard-coded seat plan layout:
 *  - numCols = 4, numRows = 9
 *  - Island (ISLAND section): 2×2, above inner columns (rows 0-1, cols 1-2)
 *  - Row 2 is intentionally empty (visual gap between island and main area)
 *  - Outer left column (col 0): 6 seats (rows 3-8)
 *  - Inner left column (col 1): 3 seats (rows 3-5)
 *  - Inner right column (col 2): 3 seats (rows 3-5)
 *  - Outer right column (col 3): 6 seats (rows 3-8)
 */
const SEAT_PLAN = {
  numRows: 9,
  numCols: 4,
  seats: [
    // Island – 4 seats above the inner columns
    { id: "I1", label: "I1", row: 0, col: 1, section: "ISLAND" as SeatSection },
    { id: "I2", label: "I2", row: 0, col: 2, section: "ISLAND" as SeatSection },
    { id: "I3", label: "I3", row: 1, col: 1, section: "ISLAND" as SeatSection },
    { id: "I4", label: "I4", row: 1, col: 2, section: "ISLAND" as SeatSection },
    // Outer left column – 6 seats (rows 3-8)
    { id: "A1", label: "A1", row: 3, col: 0, section: "MAIN" as SeatSection },
    { id: "A2", label: "A2", row: 4, col: 0, section: "MAIN" as SeatSection },
    { id: "A3", label: "A3", row: 5, col: 0, section: "MAIN" as SeatSection },
    { id: "A4", label: "A4", row: 6, col: 0, section: "MAIN" as SeatSection },
    { id: "A5", label: "A5", row: 7, col: 0, section: "MAIN" as SeatSection },
    { id: "A6", label: "A6", row: 8, col: 0, section: "MAIN" as SeatSection },
    // Inner left column – 3 seats (rows 3-5)
    { id: "B1", label: "B1", row: 3, col: 1, section: "MAIN" as SeatSection },
    { id: "B2", label: "B2", row: 4, col: 1, section: "MAIN" as SeatSection },
    { id: "B3", label: "B3", row: 5, col: 1, section: "MAIN" as SeatSection },
    // Inner right column – 3 seats (rows 3-5)
    { id: "C1", label: "C1", row: 3, col: 2, section: "MAIN" as SeatSection },
    { id: "C2", label: "C2", row: 4, col: 2, section: "MAIN" as SeatSection },
    { id: "C3", label: "C3", row: 5, col: 2, section: "MAIN" as SeatSection },
    // Outer right column – 6 seats (rows 3-8)
    { id: "D1", label: "D1", row: 3, col: 3, section: "MAIN" as SeatSection },
    { id: "D2", label: "D2", row: 4, col: 3, section: "MAIN" as SeatSection },
    { id: "D3", label: "D3", row: 5, col: 3, section: "MAIN" as SeatSection },
    { id: "D4", label: "D4", row: 6, col: 3, section: "MAIN" as SeatSection },
    { id: "D5", label: "D5", row: 7, col: 3, section: "MAIN" as SeatSection },
    { id: "D6", label: "D6", row: 8, col: 3, section: "MAIN" as SeatSection },
  ],
};

export const Party: Pick<PartyResolvers, 'attending'|'attendings'|'costPerDay'|'endDate'|'feedingCosts'|'id'|'latitude'|'location'|'locationWidgetSrc'|'longitude'|'paidDues'|'payday'|'pictures'|'registrationDeadline'|'rentalCosts'|'roomsAvailable'|'seatPlan'|'seatsAvailable'|'startDate'|'tentative'|'__isTypeOf'> = {
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

    if (daysWithAttending === 0) {
      return 0;
    }

    return (
      (parent.rentalCosts + parent.feedingCosts - donationsForRent) /
      daysWithAttending
    );
  },
  seatPlan: () => SEAT_PLAN,
};
