import { BoundCanProps, createCanBoundTo } from "@casl/react";
import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { type AppAbility } from "../../server/router/ability";
import { abilityAtom } from "../state";

export function Can(props: BoundCanProps<AppAbility>) {
  const ability = useAtomValue(abilityAtom);

  const CaslCan = useMemo(() => createCanBoundTo(ability), [ability]);

  return <CaslCan {...props} />;
}
