import {
  AbilityBuilder,
  MongoAbility,
  createMongoAbility,
} from "@casl/ability";
import dayjs from "dayjs";
import { atom } from "jotai";
import { jwtPayloadAtom } from ".";
import { agent } from "../newrelic";

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
      | { __typename: "MoneyTransfer" }
      | "MoneyTransfer"
      | { __typename: "Purchase" }
      | "Purchase"
      | { __typename: "Vote" }
      | "Vote"
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

  if ((jwtPayload?.abilityRules.length ?? 0) > 0) {
    can("checkIn", "Party", {
      startDate: { $lte: dayjs().add(1, "day").toDate() },
      endDate: { $gte: dayjs().toDate() },
    });
  }

  agent?.setUserId(jwtPayload?.user.id as string);

  return build({
    detectSubjectType(subject) {
      return subject.__typename;
    },
  }) as AppAbility;
});
