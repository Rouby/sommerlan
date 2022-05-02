import { AbilityBuilder, type AbilityClass } from "@casl/ability";
import { PrismaAbility, type Subjects } from "@casl/prisma";
import {
  Can as CaslCan,
  useAbility as useCaslAbility,
  type CanProps,
} from "@casl/react";
import type {
  News,
  ParticipantOfParty,
  Party,
  Password,
  User,
  Workload,
} from "@prisma/client";
import { createContext } from "react";
import { getUserById } from "./models/user.server";

export const AbilityContext = createContext<SommerlanAbility>(null!);

export function useAbility() {
  return useCaslAbility(AbilityContext);
}

export function Can(props: Omit<CanProps<SommerlanAbility>, "ability">) {
  const ability = useAbility();
  return <CaslCan ability={ability} {...(props as any)} />;
}

export type SommerlanAbility = PrismaAbility<
  [
    string,
    Subjects<{
      User: User;
      Party: Party;
      ParticipantOfParty: ParticipantOfParty;
      Password: Password;
      Workload: Workload;
      News: News;
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
    can("manage", "News");
  }

  can("read", "Party");
  can("read", "ParticipantOfParty");
  can("read", "News");

  if (userId) {
    switch (user?.role) {
      case "ORGANIZER":
        can("manage", "Party");
        can("manage", "ParticipantOfParty");
        can("manage", "User", ["role"], { role: "USER" });
        can("manage", "User", ["role"], { role: "TRUSTED_USER" });
        can("manage", "News");
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
