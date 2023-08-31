import { BoundCanProps, createCanBoundTo } from "@casl/react";
import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { AppAbility, abilityAtom } from "../state";

export function Can({
  otherwise,
  ...props
}: BoundCanProps<AppAbility> & { otherwise?: React.ReactNode }) {
  const ability = useAtomValue(abilityAtom);

  const CaslCan = useMemo(() => createCanBoundTo(ability), [ability]);

  return (
    <CaslCan {...props} passThrough>
      {(allowed) => <>{allowed ? props.children : otherwise}</>}
    </CaslCan>
  );
}
