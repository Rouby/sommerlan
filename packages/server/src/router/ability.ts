import {
  AbilityBuilder,
  MongoAbility,
  createMongoAbility,
} from "@casl/ability";
import { Attending, User } from "../data";

export type AbilityTuple = [string, User | "User" | Attending | "Attending"];
export type AppAbility = MongoAbility<AbilityTuple>;

export async function createAbility(user?: User) {
  const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

  if (user) {
    can("manage", "User", { id: user.id });
    can("update", "Attending", { userId: user.id });

    if (user.roles.includes(User.Role.Admin)) {
      can("manage", "User");
      can("update", "Attending");
    }
  }

  return build();
}
