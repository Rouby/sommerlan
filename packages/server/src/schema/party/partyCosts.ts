import * as dayjs from "dayjs";
import { Attending, Donation, Party } from "../../data";

export interface CalculatedDues {
  rentDues: number;
  feedingDues: number;
  totalDues: number;
  rentDonationSum: number;
  otherDonationSum: number;
  totalDonations: number;
}

export interface DayBreakdown {
  date: string;
  isBillable: boolean;
  rentalCost: number;
  participantsCount: number;
  costPerParticipant: number;
}

export function calculatePartyCosts(
  party: Party,
  attendings: Attending[],
  donations: Donation[],
) {
  // 1. Get all dates of the party
  const start = dayjs(party.startDate);
  const end = dayjs(party.endDate);
  const daysCount = end.diff(start, "day") + 1;
  const allDates: string[] = [];
  if (party.startDate && party.endDate && daysCount > 0) {
    for (let i = 0; i < daysCount; i++) {
      allDates.push(start.add(i, "day").format("YYYY-MM-DD"));
    }
  }

  // 2. Identify billable days (exclude first and last day)
  const firstDay = allDates[0];
  const lastDay = allDates[allDates.length - 1];
  const billableDates = allDates.slice(1, -1);

  // 3. Calculate rental costs
  const donationsForRent = donations
    .filter((donation) => donation.dedication === "rent")
    .reduce((acc, donation) => acc + donation.amount, 0);

  const netRentalCosts = Math.max(0, party.rentalCosts - donationsForRent);
  const rentalCostPerDay =
    billableDates.length > 0 ? netRentalCosts / billableDates.length : 0;

  // 4. Calculate participants per day for billable days
  const participantsCountPerDay: Record<string, number> = {};
  for (const date of billableDates) {
    participantsCountPerDay[date] = attendings.filter((attending) =>
      attending.dates.includes(date),
    ).length;
  }

  // 5. Generate daily breakdown
  const dayBreakdown: DayBreakdown[] = allDates.map((date) => {
    const isBillable = date !== firstDay && date !== lastDay;
    const participantsCount = isBillable ? participantsCountPerDay[date] : 0;
    const rentalCost = isBillable ? rentalCostPerDay : 0;
    const costPerParticipant =
      isBillable && participantsCount > 0 ? rentalCost / participantsCount : 0;

    return {
      date,
      isBillable,
      rentalCost,
      participantsCount,
      costPerParticipant,
    };
  });

  // 6. Calculate feeding costs proportion
  // Each attending has a count of billable days they attend
  const attendingBillableDays = attendings.map((attending) => {
    const count = attending.dates.filter((date) =>
      billableDates.includes(date),
    ).length;
    return { attendingId: attending.id, count };
  });

  const totalBillableDaysAttendedByAll = attendingBillableDays.reduce(
    (acc, item) => acc + item.count,
    0,
  );

  // 7. Calculate dues for each attending
  const duesByAttendingId: Record<string, CalculatedDues> = {};
  for (const attending of attendings) {
    // Rent dues: sum of dayBreakdown costPerParticipant for each billable day they attend
    let rentDues = 0;
    for (const day of dayBreakdown) {
      if (day.isBillable && attending.dates.includes(day.date)) {
        rentDues += day.costPerParticipant;
      }
    }

    // Feeding dues
    const userBillableDays = attendingBillableDays.find(
      (item) => item.attendingId === attending.id,
    )?.count ?? 0;

    const feedingDues =
      totalBillableDaysAttendedByAll > 0
        ? (party.feedingCosts * userBillableDays) /
          totalBillableDaysAttendedByAll
        : 0;

    // Donations
    const userDonations = donations.filter((d) => d.userId === attending.userId);
    const rentDonationSum = userDonations
      .filter((d) => d.dedication === "rent")
      .reduce((acc, d) => acc + d.amount, 0);
    const otherDonationSum = userDonations
      .filter((d) => d.dedication !== "rent")
      .reduce((acc, d) => acc + d.amount, 0);
    const totalDonations = rentDonationSum + otherDonationSum;

    // Total dues = rentDues + feedingDues + totalDonations
    const totalDues = rentDues + feedingDues + totalDonations;

    duesByAttendingId[attending.id] = {
      rentDues: Math.round(rentDues * 100) / 100,
      feedingDues: Math.round(feedingDues * 100) / 100,
      totalDues: Math.round(totalDues * 100) / 100,
      rentDonationSum,
      otherDonationSum,
      totalDonations,
    };
  }

  return {
    rentalCostPerDay: Math.round(rentalCostPerDay * 100) / 100,
    billableDaysCount: billableDates.length,
    dayBreakdown,
    duesByAttendingId,
  };
}
