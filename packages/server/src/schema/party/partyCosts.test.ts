import { describe, expect, it } from "vitest";
import { Attending, Donation, Party } from "../../data";
import { calculatePartyCosts } from "./partyCosts";

const UUID_A = "00000000-0000-0000-0000-000000000001";
const UUID_B = "00000000-0000-0000-0000-000000000002";
const UUID_DON = "00000000-0000-0000-0000-000000000003";

describe("calculatePartyCosts", () => {
  it("correctly calculates costs and excludes first and last days", () => {
    // 7 days party: 2026-07-20 to 2026-07-26
    // First day: 2026-07-20 (excluded)
    // Last day: 2026-07-26 (excluded)
    // Billable days: 21, 22, 23, 24, 25 (5 days)
    const party = new Party({
      startDate: "2026-07-20",
      endDate: "2026-07-26",
      rentalCosts: 500,
      feedingCosts: 100,
    });

    const attendingA = new Attending({
      id: UUID_A,
      userId: "user-a",
      dates: ["2026-07-20", "2026-07-21", "2026-07-22"], // attends first day + 2 billable days
    });

    const attendingB = new Attending({
      id: UUID_B,
      userId: "user-b",
      dates: ["2026-07-21", "2026-07-22", "2026-07-23", "2026-07-26"], // attends 3 billable days + last day
    });

    const attendings = [attendingA, attendingB];
    const donations: Donation[] = [];

    const result = calculatePartyCosts(party, attendings, donations);

    // Billable days count should be 5
    expect(result.billableDaysCount).toBe(5);
    // rentalCostPerDay: 500 / 5 = 100
    expect(result.rentalCostPerDay).toBe(100);

    // Let's check day breakdown:
    // 2026-07-20 (first day): isBillable=false, rentalCost=0, participantsCount=0, costPerParticipant=0
    // 2026-07-21: isBillable=true, rentalCost=100, participantsCount=2 (A & B), costPerParticipant=50
    // 2026-07-22: isBillable=true, rentalCost=100, participantsCount=2 (A & B), costPerParticipant=50
    // 2026-07-23: isBillable=true, rentalCost=100, participantsCount=1 (B), costPerParticipant=100
    // 2026-07-24: isBillable=true, rentalCost=100, participantsCount=0, costPerParticipant=0
    // 2026-07-25: isBillable=true, rentalCost=100, participantsCount=0, costPerParticipant=0
    // 2026-07-26 (last day): isBillable=false, rentalCost=0, participantsCount=0, costPerParticipant=0
    expect(result.dayBreakdown[0]).toEqual({
      date: "2026-07-20",
      isBillable: false,
      rentalCost: 0,
      participantsCount: 0,
      costPerParticipant: 0,
    });
    expect(result.dayBreakdown[1]).toEqual({
      date: "2026-07-21",
      isBillable: true,
      rentalCost: 100,
      participantsCount: 2,
      costPerParticipant: 50,
    });
    expect(result.dayBreakdown[2]).toEqual({
      date: "2026-07-22",
      isBillable: true,
      rentalCost: 100,
      participantsCount: 2,
      costPerParticipant: 50,
    });
    expect(result.dayBreakdown[3]).toEqual({
      date: "2026-07-23",
      isBillable: true,
      rentalCost: 100,
      participantsCount: 1,
      costPerParticipant: 100,
    });

    // A attended billable days: 2026-07-21 (50) and 2026-07-22 (50). Total rent dues: 100.
    // B attended billable days: 2026-07-21 (50), 2026-07-22 (50), 2026-07-23 (100). Total rent dues: 200.
    expect(result.duesByAttendingId[UUID_A]?.rentDues).toBe(100);
    expect(result.duesByAttendingId[UUID_B]?.rentDues).toBe(200);

    // Feeding dues:
    // Total billable days attended by all = A (2 days) + B (3 days) = 5 days.
    // Total feeding costs = 100
    // A feeding dues: 100 * 2 / 5 = 40
    // B feeding dues: 100 * 3 / 5 = 60
    expect(result.duesByAttendingId[UUID_A]?.feedingDues).toBe(40);
    expect(result.duesByAttendingId[UUID_B]?.feedingDues).toBe(60);

    expect(result.duesByAttendingId[UUID_A]?.totalDues).toBe(140);
    expect(result.duesByAttendingId[UUID_B]?.totalDues).toBe(260);
  });

  it("correctly handles donations for rent", () => {
    const party = new Party({
      startDate: "2026-07-20",
      endDate: "2026-07-26",
      rentalCosts: 500,
      feedingCosts: 100,
    });

    const attendingA = new Attending({
      id: UUID_A,
      userId: "user-a",
      dates: ["2026-07-21"],
    });

    const donation = new Donation({
      id: UUID_DON,
      partyId: party.id,
      userId: "user-a",
      amount: 100,
      dedication: "rent",
    });

    const result = calculatePartyCosts(party, [attendingA], [donation]);

    // netRentalCosts: 500 - 100 = 400
    // rentalCostPerDay: 400 / 5 = 80
    expect(result.rentalCostPerDay).toBe(80);
    expect(result.duesByAttendingId[UUID_A]?.rentDues).toBe(80);
    expect(result.duesByAttendingId[UUID_A]?.totalDues).toBe(80 + 100 + 100); // rent (80) + feeding (100) + donation (100)
  });
});
