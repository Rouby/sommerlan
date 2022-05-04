import { ForbiddenError, subject } from "@casl/ability";
import { accessibleBy } from "@casl/prisma";
import { prisma } from "~/db.server";
import { defineAbilityForUser } from "~/utils/ability.server";

export async function createWorkload(
  userId: string,
  partyId: string,
  title: string,
  description: string
) {
  const ability = await defineAbilityForUser(userId);

  ForbiddenError.from(ability).throwUnlessCan("create", "Workload");

  return prisma.workload.create({
    data: {
      party: { connect: { id: partyId } },
      title,
      description,
    },
  });
}

export async function getCurrentWorkloads(userId?: string) {
  const ability = await defineAbilityForUser(userId);

  return prisma.party
    .findFirst({
      where: {
        AND: [accessibleBy(ability).Party, { endDate: { gte: new Date() } }],
      },
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
        workloads: {
          orderBy: { order: "asc" },
          include: { assignee: ability.can("read", "Workload", "assignee") },
        },
      },
    })
    .then((party) => party?.workloads);
}

export async function updateWorkloadOrder(
  userId: string,
  workloadIds: string[],
  workloadOrders: number[]
) {
  const ability = await defineAbilityForUser(userId);

  const workloads = await prisma.workload.findMany({
    where: { id: { in: workloadIds } },
  });

  for (const workload of workloads) {
    ForbiddenError.from(ability).throwUnlessCan(
      "update",
      subject("Workload", workload),
      "order"
    );
  }

  return Promise.all(
    workloadIds.map((id, idx) =>
      prisma.workload.update({
        where: { id },
        data: { order: workloadOrders[idx] },
      })
    )
  );
}

export async function assignWorkload(userId: string, workloadId: string) {
  const ability = await defineAbilityForUser(userId);

  const workload = await prisma.workload.findFirst({
    where: { id: workloadId },
  });

  if (!workload) {
    throw new Error("Invalid workload");
  }

  ForbiddenError.from(ability).throwUnlessCan(
    "update",
    subject("Workload", workload),
    "assigneeId"
  );

  return prisma.workload.update({
    where: { id: workloadId },
    data: {
      assignee:
        workload.assigneeId === userId
          ? { disconnect: true }
          : { connect: { id: userId } },
    },
  });
}
