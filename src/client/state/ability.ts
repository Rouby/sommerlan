import { createMongoAbility } from "@casl/ability";
import { atom } from "jotai";
import { jwtPayloadAtom } from ".";
import { type AppAbility } from "../../server/router/ability";

export const abilityAtom = atom((get) => {
  const jwtPayload = get(jwtPayloadAtom);

  console.log(jwtPayload?.abilityRules);

  return createMongoAbility(jwtPayload?.abilityRules ?? []) as AppAbility;
});
