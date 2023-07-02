import { BoundCanProps, createCanBoundTo } from "@casl/react";
import { type AppAbility } from "@sommerlan-app/server/src/router/ability";
import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { abilityAtom } from "../state";

export function Can(props: BoundCanProps<AppAbility>) {
  const ability = useAtomValue(abilityAtom);

  const CaslCan = useMemo(() => createCanBoundTo(ability), [ability]);

  return <CaslCan {...props} />;
}
