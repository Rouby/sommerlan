import {
  AbilityBuilder,
  MongoAbility,
  createMongoAbility,
} from "@casl/ability";
import { Attending, Event, Party, User } from "../data";

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
      | Event
      | "Event"
      | "Cache"
    )
  ]
>;

export async function createAbility(
  user?: { id: User["id"]; roles: User["roles"] } | null
) {
  const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

  if (user) {
    can("read", "User", { id: user.id });
    can("update", "User", { id: user.id });
    can("update", "Attending", { userId: user.id });
    can("update", "Event", { organizerId: user.id });

    if (user.roles.includes(User.Role.Admin)) {
      can("manage", "Party");
      can("manage", "User");
      can("update", "Attending");
      can("grantRoom", "Attending");
      can("update", "Event");
      can("manage", "Cache");
    }
  }

  return build({
    detectSubjectType(subject) {
      return subject.kind;
    },
  });
}
