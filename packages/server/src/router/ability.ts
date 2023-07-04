import {
  AbilityBuilder,
  MongoAbility,
  createMongoAbility,
} from "@casl/ability";
import { User } from "../data";

export type AbilityTuple = [string, User | "User"];
export type AppAbility = MongoAbility<AbilityTuple>;

export async function createAbility(user?: User) {
  const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

  if (user) {
    can("read", "User", { id: user.id });

    if (user.roles.includes(User.Role.Admin)) {
      can("manage", "User");
    }
  }

  return build();
}
