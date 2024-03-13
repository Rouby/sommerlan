import {
  AbilityBuilder,
  MongoAbility,
  createMongoAbility,
} from "@casl/ability";
import { Attending, Donation, Event, Game, Party, Picture, User } from "./data";

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
    )
  ]
>;

export async function createAbility(
  user?: { id: User["id"]; roles: User["roles"] } | null
) {
  const { can, cannot, build } = new AbilityBuilder<AppAbility>(
    createMongoAbility
  );

  if (user) {
    can("read", "Party");
    can("read", "User", { id: user.id });
    can("update", "User", { id: user.id });
    can("update", "Attending", { userId: user.id });
    can("read", "Event");
    can("create", "Event", { organizerId: user.id });
    can("update", "Event", { organizerId: user.id }); // TODO ids?
    can("participate", "Event");
    can("read", "Game");
    can("create", "Game");
    can("create", "Picture");
    can("rescind", "Donation", { userId: user.id });

    if (user.roles.includes(User.Role.Admin)) {
      can("manage", "Party");
      can("manage", "User");
      can("update", "Attending");
      can("grantRoom", "Attending");
      can("manage", "Event");
      can("manage", "Cache");
      can("manage", "Picture");
      can("rescind", "Donation");
    }

    cannot("participate", "Event", { organizerId: user.id }).because(
      "Als Organisator kannst du deine Teilnahme nicht ändern."
    );
  }

  return build({
    detectSubjectType(subject) {
      return subject.kind;
    },
  });
}
