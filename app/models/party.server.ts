import { prisma } from "~/db.server";
import { defineAbilityForUser } from "~/utils";

export type { User } from "@prisma/client";

export async function getCurrentParty(userId?: string) {
  const ability = await defineAbilityForUser(userId);

  return prisma.party.findFirst({
    where: { endDate: { gte: new Date() } },
    orderBy: { startDate: "asc" },
    include: {
      participants: {
        include: {
          user: ability.can("read", "User"),
        },
        orderBy: {
          arrivingAt: "asc",
        },
      },
    },
  });
}

export async function joinParty(partyId: string, userId: string) {
  const party = (await prisma.party.findFirst({ where: { id: partyId } }))!;
  return prisma.participantOfParty.create({
    data: {
      party: { connect: { id: partyId } },
      user: { connect: { id: userId } },
      arrivingAt: party.startDate,
      departingAt: party.endDate,
    },
  });
}

export async function leaveParty(partyId: string, userId: string) {
  return prisma.participantOfParty.delete({
    where: {
      userId_partyId: {
        partyId,
        userId,
      },
    },
  });
}

export async function updatePartyAttendance(
  partyId: string,
  userId: string,
  arrivingAt: string | Date,
  departingAt: string | Date
) {
  return prisma.participantOfParty.update({
    where: {
      userId_partyId: {
        partyId,
        userId,
      },
    },
    data: {
      arrivingAt,
      departingAt,
    },
  });
}
