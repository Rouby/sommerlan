import { createMongoAbility } from "@casl/ability";
import { type AppAbility } from "@sommerlan-app/server/src/router/ability";
import { atom } from "jotai";
import { jwtPayloadAtom } from ".";

export const abilityAtom = atom((get) => {
  const jwtPayload = get(jwtPayloadAtom);
  return createMongoAbility(jwtPayload?.abilityRules ?? []) as AppAbility;
});
