import {
  AbilityBuilder,
  MongoAbility,
  createMongoAbility,
} from "@casl/ability";
import dayjs from "dayjs";
import { atom } from "jotai";
import { jwtPayloadAtom } from ".";

export type AppAbility = MongoAbility<
  [
    string,
    (
      | { __typename: "User" }
      | "User"
      | { __typename: "Party"; startDate?: Date; endDate?: Date }
      | "Party"
      | { __typename: "Attending" }
      | "Attending"
      | { __typename: "Game" }
      | "Game"
      | { __typename: "Event" }
      | "Event"
      | "Cache"
      | { __typename: "Picture" }
      | "Picture"
      | { __typename: "Donation" }
      | "Donation"
      | "Budget"
    ),
  ]
>;

export const abilityAtom = atom((get) => {
  const jwtPayload = get(jwtPayloadAtom);

  const { rules, can, build } = new AbilityBuilder<AppAbility>(
    createMongoAbility,
  );

  // inject rules from jwt
  rules.splice(0, 0, ...(jwtPayload?.abilityRules ?? []));

  // add dynamic rules
  can("checkIn", "Party", {
    startDate: { $lte: dayjs().toDate() },
    endDate: { $gte: dayjs().toDate() },
  });

  return build({
    detectSubjectType(subject) {
      return subject.__typename;
    },
  }) as AppAbility;
});
