import { AbilityBuilder, type AbilityClass } from "@casl/ability";
import { PrismaAbility, type Subjects } from "@casl/prisma";
import type {
  ParticipantOfParty,
  Party,
  Password,
  User,
  Workload,
} from "@prisma/client";
import { useMatches } from "@remix-run/react";
import { useMemo } from "react";
import { getUserById } from "./models/user.server";

const DEFAULT_REDIRECT = "/";

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT
) {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }

  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }

  return to;
}

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(
  id: string
): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}

function isUser(user: any): user is User {
  return user && typeof user === "object" && typeof user.email === "string";
}

export function useOptionalUser(): User | undefined {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return undefined;
  }
  return data.user;
}

export function useUser(): User {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  }
  return maybeUser;
}

export function validateEmail(email: unknown): email is string {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

export type SommerlanAbility = PrismaAbility<
  [
    string,
    Subjects<{
      // all: any;
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
