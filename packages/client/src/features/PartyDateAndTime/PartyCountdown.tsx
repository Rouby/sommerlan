import { Text } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import dayjs, { Dayjs } from "dayjs";
import { useReducer } from "react";

export function PartyCountdown({ date }: { date: Dayjs }) {
  const now = dayjs();

  const numberFormat = new Intl.NumberFormat();

  const parts = [
    [date.diff(now, "months"), "Monate"] as const,
    [date.diff(now, "days"), "Tage"] as const,
    [date.diff(now, "hours"), "Stunden"] as const,
    [date.diff(now, "minutes"), "Minuten"] as const,
    [date.diff(now, "seconds"), "Sekunden"] as const,
  ].filter(([value]) => value > 0);

  const [, rerender] = useReducer((x) => x + 1, 0);
  useInterval(rerender, 1000, { autoInvoke: true });

  return (
    <>
      {parts.map(([value, unit], idx) => (
        <Text key={unit}>
          {idx === 0 ? "Das sind noch " : "... oder "}
          <strong>{numberFormat.format(value)}</strong> {unit}
        </Text>
      ))}
    </>
  );
}
