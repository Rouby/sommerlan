import {
  AbilityBuilder,
  MongoAbility,
  createMongoAbility,
} from "@casl/ability";
import {
  Attending,
  Donation,
  Event,
  Game,
  MoneyTransfer,
  Party,
  Picture,
  User,
} from "./data";

export type AppAbility = MongoAbility<
  [
    string,
    (
      | User
      | "User"
      | Party
      | "Party"
      | Attending
      | "Attending"
      | Game
      | "Game"
      | Event
      | "Event"
      | "Cache"
      | Picture
      | "Picture"
      | Donation
      | "Donation"
      | "Budget"
      | MoneyTransfer
      | "MoneyTransfer"
    ),
  ]
>;

export async function createAbility(
  user?: { id: User["id"]; roles: User["roles"] } | null,
) {
  const { can, cannot, build } = new AbilityBuilder<AppAbility>(
    createMongoAbility,
  );

  if (user) {
    can("read", "Party");
    can("read", "User", { id: user.id });
    can("update", "User", { id: user.id });
    can("read", "Attending", "paidDues", { userId: user.id });
    can("update", "Attending", { userId: user.id });
    can("read", "Event");
    can("read", "Game");
    can("participate", "Event");

    can("rescind", "Donation", { userId: user.id });
    cannot("rescind", "Donation", { received: true }).because(
      "Die Spende wurde bereits entgegengenommen.",
    );
    cannot("read", "Donation", "userId", {
      incognito: true,
      userId: { $ne: user.id },
    });

    if (user.roles.includes(User.Role.Trusted)) {
      can("read", "User", ["displayName", "avatar", "avatarUrl", "email"]);
      can("create", "Event", { organizerId: user.id });
      can("update", "Event", { organizerId: user.id }); // TODO ids?
      can("create", "Game");
      can("create", "Picture");
    }

    if (user.roles.includes(User.Role.Admin)) {
      can(["create", "update", "delete"], "Party");
      can(["create", "update", "delete"], "User");
      can("update", "Attending");
      can("grantRoom", "Attending");
      can(["create", "read", "update", "delete"], "Event");
      can(["create", "read", "update", "delete"], "Cache");
      can(["create", "read", "update", "delete"], "Picture");
    }

    if (user.roles.includes(User.Role.Doorkeeper)) {
      can(["checkIn", "checkOut"], "User");
    }

    if (user.roles.includes(User.Role.Bookkeeper)) {
      can(["create", "read", "update", "delete"], "Budget");
      can(["read", "update"], "Attending", "paidDues");
      can("rescind", "Donation");
      can("read", "Donation", "userId");
      can(["create", "read"], "MoneyTransfer");
    }

    cannot("participate", "Event", { organizerId: user.id }).because(
      "Als Organisator kannst du deine Teilnahme nicht ändern.",
    );
  }

  return build({
    detectSubjectType(subject) {
      return subject.kind;
    },
  });
}

export const AbilityVersion = 5 as const;
