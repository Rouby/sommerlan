import { createContextualCan } from "@casl/react";
import { createContext } from "react";
import type { SommerlanAbility } from "./utils";

export const AbilityContext = createContext<SommerlanAbility>(null!);
export const Can = createContextualCan(AbilityContext.Consumer);
