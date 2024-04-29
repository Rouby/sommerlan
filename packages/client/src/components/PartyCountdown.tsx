import { Skeleton, Text } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import dayjs from "dayjs";
import { useEffect, useReducer } from "react";
import { useQuery } from "urql";
import { graphql } from "../gql";
import { formatDate, formatRange } from "../utils";

export function PartyCountdown({ partyId }: { partyId?: string }) {
  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query partyCountdown($nextParty: Boolean!, $partyId: ID!) {
        nextParty @include(if: $nextParty) {
          id
          startDate
          endDate
          registrationDeadline
        }

        party(id: $partyId) @skip(if: $nextParty) {
          id
          startDate
          endDate
        }
      }
    `),
    variables: {
      nextParty: !partyId,
      partyId: partyId ?? "",
    },
  });

  const { nextParty, party: specificParty } = data ?? {};
  const party: typeof nextParty | typeof specificParty =
    nextParty ?? specificParty;

  const [, rerender] = useReducer((x) => x + 1, 0);
  const { start, stop } = useInterval(() => {
    rerender();
  }, 1000);

  useEffect(() => {
    if (!party) return;
    start();
    return () => stop();
  }, [party]);

  if (fetching || !party) {
    return <Skeleton />;
  }

  const startDate = dayjs(party.startDate, "YYYY-MM-DD").add(12, "hours");
  const endDate = dayjs(party.endDate, "YYYY-MM-DD").add(20, "hours");

  const numberFormat = new Intl.NumberFormat();

  const parts = [
    [startDate.diff(dayjs(), "months"), "Monate"] as const,
    [startDate.diff(dayjs(), "days"), "Tage"] as const,
    [startDate.diff(dayjs(), "hours"), "Stunden"] as const,
    [startDate.diff(dayjs(), "minutes"), "Minuten"] as const,
    [startDate.diff(dayjs(), "seconds"), "Sekunden"] as const,
  ].filter(([value]) => value > 0);

  return (
    <>
      <Text>
        Die nächste Party ist{" "}
        <strong>vom {formatRange(startDate.toDate(), endDate.toDate())}</strong>
      </Text>
      {parts.map(([value, unit], idx) => (
        <Text key={unit}>
          {idx === 0 ? "Das sind noch " : "... oder "}
          <strong>{numberFormat.format(value)}</strong> {unit}
        </Text>
      ))}
      {"registrationDeadline" in party && party.registrationDeadline && (
        <Text weight="bold" size="lg" mt="xs">
          Anmeldefrist ist der{" "}
          {formatDate(new Date(party.registrationDeadline))}
        </Text>
      )}
    </>
  );
}
