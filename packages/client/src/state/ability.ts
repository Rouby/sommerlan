import { MongoAbility, createMongoAbility } from "@casl/ability";
import { atom } from "jotai";
import { jwtPayloadAtom } from ".";

export type AppAbility = MongoAbility<
  [
    string,
    (
      | { __typename: "User" }
      | "User"
      | { __typename: "Party" }
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
    ),
  ]
>;

export const abilityAtom = atom((get) => {
  const jwtPayload = get(jwtPayloadAtom);
  return createMongoAbility(jwtPayload?.abilityRules ?? [], {
    detectSubjectType(subject) {
      return subject.__typename;
    },
  }) as AppAbility;
});
