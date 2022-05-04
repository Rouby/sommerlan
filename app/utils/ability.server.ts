import { AbilityBuilder, type AbilityClass } from "@casl/ability";
import { PrismaAbility, type Subjects } from "@casl/prisma";
import type {
  News,
  ParticipantOfParty,
  Party,
  Password,
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
  cannot("read", "Workload", "assignee");

  if (userId) {
    switch (user?.role) {
      case "ADMIN":
        can("manage", "User");
        can("manage", "Party");
        can("manage", "ParticipantOfParty");
        can("manage", "Workload");
        can("manage", "News");
        break;
      case "ORGANIZER":
        can("manage", "Party");
        can("manage", "ParticipantOfParty");
        can("manage", "User", "role", {
          role: { in: ["USER", "TRUSTED_USER"] },
        });
        can("manage", "Workload");
        can("manage", "News");
      case "TRUSTED_USER":
        can("read", "User");
        can("update", "User", { id: userId });
        can("read", "Workload", "assignee");
        can("update", "Workload", "assigneeId", {
          OR: [{ assigneeId: userId }, { assigneeId: null }],
        });
      default:
        can("update", "User", { id: userId });
        break;
    }
  }

  return build();
}
