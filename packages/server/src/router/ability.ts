import {
  AbilityBuilder,
  MongoAbility,
  createMongoAbility,
} from "@casl/ability";
import { Attending, Event, Party, User } from "../data";
import { Values } from "../data/$base";

export type AbilityTuple = [
  string,
  (
    | Values<User>
    | "User"
    | Values<Party>
    | "Party"
    | Values<Attending>
    | "Attending"
    | Values<Event>
    | "Event"
    | "Cache"
  )
];
export type AppAbility = MongoAbility<AbilityTuple>;

export async function createAbility(user?: User | null) {
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

  return build();
}
