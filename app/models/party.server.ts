import { ForbiddenError, subject } from "@casl/ability";
import { accessibleBy } from "@casl/prisma";
import invariant from "tiny-invariant";
import { prisma } from "~/db.server";
import { defineAbilityForUser } from "~/utils/ability.server";

export type { User } from "@prisma/client";

export async function getCurrentParty(userId?: string) {
  const ability = await defineAbilityForUser(userId);

  const party = await prisma.party.findFirst({
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

  if (!party) {
    return party;
  }

  return {
    ...party,
    participants: party.participants?.map((p) => ({
      ...p,
      user: {
        ...p.user,
        name: ability.can("read", subject("User", p.user), "name")
          ? p.user.name
          : null,
        email: ability.can("read", subject("User", p.user), "email")
          ? p.user.email
          : null,
      },
    })),
  };
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

export async function updateParty(
  partyId: string,
  userId: string,
  attributes: {
    startDate?: string;
    endDate?: string;
    name?: string;
    entryFee?: number;
    entryDeposit?: number;
    workDeposit?: number;
  }
) {
  const ability = await defineAbilityForUser(userId);

  ForbiddenError.from(ability).throwUnlessCan("update", "Party");

  return prisma.party.update({
    where: { id: partyId },
    data: {
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

export async function setAwaitingPayment(
  partyId: string,
  userId: string,
  participantId: string
) {
  const ability = await defineAbilityForUser(userId);

  const participation = await prisma.participantOfParty.findUnique({
    where: {
      userId_partyId: {
        partyId,
        userId: participantId,
      },
    },
  });

  invariant(participation);

  ForbiddenError.from(ability).throwUnlessCan(
    "update",
    subject("ParticipantOfParty", participation),
    "pendingPayment"
  );

  return prisma.participantOfParty.update({
    where: {
      userId_partyId: {
        partyId,
        userId: participantId,
      },
    },
    data: {
      pendingPayment: true,
    },
  });
}

export async function updatePayments(
  partyId: string,
  userId: string | null,
  participantId: string,
  payment: number | null,
  donation?: number | null
) {
  if (userId) {
    const ability = await defineAbilityForUser(userId);

    const participation = await prisma.participantOfParty.findUnique({
      where: {
        userId_partyId: {
          partyId,
          userId: participantId,
        },
      },
    });

    invariant(participation);

    ForbiddenError.from(ability).throwUnlessCan(
      "update",
      subject("ParticipantOfParty", participation),
      "pendingPayment"
    );
  }

  return prisma.participantOfParty.update({
    where: {
      userId_partyId: {
        partyId,
        userId: participantId,
      },
    },
    data: {
      paidMoney: payment === 0 ? null : payment,
      donatedMoney: donation === 0 ? null : donation,
      pendingPayment: false,
    },
  });
}
