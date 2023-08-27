import {
  AbilityBuilder,
  MongoAbility,
  createMongoAbility,
} from "@casl/ability";
import { Attending, Event, User } from "../data";

export type AbilityTuple = [
  string,
  User | "User" | Attending | "Attending" | Event | "Event" | "Cache"
];
export type AppAbility = MongoAbility<AbilityTuple>;

export async function createAbility(user?: User) {
  const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

  if (user) {
    can("read", "User", { id: user.id });
    can("update", "User", { id: user.id });
    can("update", "Attending", { userId: user.id });
    can("update", "Event", { organizerId: user.id });

    if (user.roles.includes(User.Role.Admin)) {
      can("manage", "User");
      can("update", "Attending");
      can("grantRoom", "Attending");
      can("update", "Event");
      can("manage", "Cache");
    }
  }

  return build();
}
