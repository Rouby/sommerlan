import { AbilityBuilder, type AbilityClass } from "@casl/ability";
import { PrismaAbility, type Subjects } from "@casl/prisma";
import type {
  News,
  ParticipantOfParty,
  Party,
  Password,
  PushNotification,
  User,
  Workload,
  WorkloadDependency,
} from "@prisma/client";
import { getUserById } from "~/models/user.server";

export type SommerlanAbility = PrismaAbility<
  [
    string,
    Subjects<{
      User: User;
      Party: Party;
      ParticipantOfParty: ParticipantOfParty;
      Password: Password;
      Workload: Workload;
      WorkloadDependency: WorkloadDependency;
      News: News;
      PushNotification: PushNotification;
    }>
  ]
>;

export async function defineAbilityForUser(userId?: string | null) {
  const AppAbility = PrismaAbility as AbilityClass<SommerlanAbility>;
  const { can, cannot, build } = new AbilityBuilder(AppAbility);

  const user = userId ? await getUserById(userId) : null;

  can("read", "Party");
  can("read", "ParticipantOfParty");
  can("read", "News");
  can("read", "Workload");
  cannot("read", "Workload", "assignees");
  cannot("read", "User", "email");

  if (userId) {
    switch (user?.role) {
      case "DISABLED":
        cannot("read", "Party");
        cannot("read", "ParticipantOfParty");
        cannot("read", "News");
        cannot("read", "Workload");
        break;
      case "ADMIN":
        can("manage", "User");
        can("manage", "Party");
        can("manage", "ParticipantOfParty");
        can("manage", "Workload");
        can("manage", "News");
        can("create", "PushNotification");
        break;
      case "ORGANIZER":
        can("manage", "Party");
        can("manage", "ParticipantOfParty");
        can("manage", "User", "role", {
          role: { in: ["USER", "TRUSTED_USER"] },
        });
        can("manage", "Workload");
        can("manage", "News");
        can("create", "PushNotification");
      case "TRUSTED_USER":
        can("read", "User");
        can("update", "User", { id: userId });
        can("read", "Workload", "assignees");
        can("update", "Workload", "assignees", {
          OR: [
            { assignees: { some: { id: userId } } },
            { assignees: { none: {} } },
            { maxAssignees: { gt: 1 } },
          ],
        });
      default:
        can("read", "User", { id: userId });
        can("update", "User", { id: userId });
        can("create", "ParticipantOfParty");
        can("update", "ParticipantOfParty", "pendingPayment", { userId });
        break;
    }
  }

  return build();
}
