import { AbilityBuilder, type AbilityClass } from "@casl/ability";
import { PrismaAbility, type Subjects } from "@casl/prisma";
import { createContextualCan } from "@casl/react";
import type {
  ParticipantOfParty,
  Party,
  Password,
  User,
  Workload,
} from "@prisma/client";
import { createContext } from "react";
import { getUserById } from "./models/user.server";

export const AbilityContext = createContext<SommerlanAbility>(null!);
export const Can = createContextualCan(AbilityContext.Consumer);

export type SommerlanAbility = PrismaAbility<
  [
    string,
    Subjects<{
      User: User;
      Party: Party;
      ParticipantOfParty: ParticipantOfParty;
      Password: Password;
      Workload: Workload;
    }>
  ]
>;

export async function defineAbilityForUser(userId?: string | null) {
  const AppAbility = PrismaAbility as AbilityClass<SommerlanAbility>;
  const { can, build } = new AbilityBuilder(AppAbility);

  const user = userId ? await getUserById(userId) : null;

  if (user?.role === "ADMIN") {
    can("manage", "User");
    can("manage", "Party");
    can("manage", "ParticipantOfParty");
    can("manage", "Workload");
  }

  can("read", "Party");
  can("read", "ParticipantOfParty");

  if (userId) {
    switch (user?.role) {
      case "ORGANIZER":
        can("manage", "Party");
        can("manage", "ParticipantOfParty");
        can("manage", "User", ["role"], { role: "USER" });
        can("manage", "User", ["role"], { role: "TRUSTED_USER" });
      case "TRUSTED_USER":
        can("read", "User");
        can("update", "User", { id: userId });
      default:
        can("update", "User", { id: userId });
        break;
    }
  }

  return build();
}
