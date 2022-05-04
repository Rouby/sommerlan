import { PrismaAbility } from "@casl/prisma";
import {
  Can as CaslCan,
  useAbility as useCaslAbility,
  type BoundCanProps,
} from "@casl/react";
import { createContext } from "react";
import type { SommerlanAbility } from "~/utils/ability.server";

const AbilityContext = createContext<SommerlanAbility>(null!);

export function useAbility() {
  return useCaslAbility(AbilityContext);
}

export function Can(
  props: BoundCanProps<SommerlanAbility> & { children: React.ReactNode }
) {
  const ability = useAbility();

  return <CaslCan ability={ability} {...(props as any)} />;
}

export function AbilityProvider({
  rules,
  children,
}: {
  rules: SommerlanAbility["rules"];
  children: React.ReactNode;
}) {
  const ability = new PrismaAbility(rules) as SommerlanAbility;
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
}
