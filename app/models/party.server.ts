import { ForbiddenError } from "@casl/ability";
import { accessibleBy } from "@casl/prisma";
import { prisma } from "~/db.server";
import { defineAbilityForUser } from "~/utils/ability.server";

export type { User } from "@prisma/client";

export async function getCurrentParty(userId?: string) {
  const ability = await defineAbilityForUser(userId);

  return prisma.party.findFirst({
    where: {
      AND: [accessibleBy(ability).Party, { endDate: { gte: new Date() } }],
    },
    orderBy: { startDate: "asc" },
    include: {
      participants: {
        include: {
          user: ability.can("read", "User")
            ? {
                select: {
                  id: true,
                  name: ability.can("read", "User", "name"),
                  email: ability.can("read", "User", "email"),
                },
              }
            : false,
        },
        orderBy: {
          arrivingAt: "asc",
        },
      },
    },
  });
}

export async function getParties(userId?: string) {
  const ability = await defineAbilityForUser(userId);

  return prisma.party.findMany({
    where: accessibleBy(ability).Party,
    orderBy: { startDate: "desc" },
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

export async function createParty(
  userId: string,
  startDate: string,
  endDate: string,
  attributes: { name?: string }
) {
  const ability = await defineAbilityForUser(userId);

  ForbiddenError.from(ability).throwUnlessCan("create", "Party");

  return prisma.party.create({
    data: {
      startDate,
      endDate,
      ...attributes,
    },
  });
}

export async function joinParty(
  partyId: string,
  userId: string,
  arrivingAt?: string | Date | null,
  departingAt?: string | Date | null
) {
  const party = (await prisma.party.findFirst({ where: { id: partyId } }))!;
  return prisma.participantOfParty.create({
    data: {
      party: { connect: { id: partyId } },
      user: { connect: { id: userId } },
      arrivingAt: arrivingAt ?? party.startDate,
      departingAt: departingAt ?? party.endDate,
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

export async function updatePayments(
  partyId: string,
  userId: string,
  participantId: string,
  payment: number | null,
  donation: number | null
) {
  const ability = await defineAbilityForUser(userId);

  ForbiddenError.from(ability).throwUnlessCan("manage", "Party");

  return prisma.participantOfParty.update({
    where: {
      userId_partyId: {
        partyId,
        userId: participantId,
      },
    },
    data: {
      paidMoney: payment ? payment : null,
      donatedMoney: donation ? donation : null,
    },
  });
}
