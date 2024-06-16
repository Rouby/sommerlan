import { Skeleton, Text } from "@mantine/core";
import dayjs from "dayjs";
import { useQuery } from "urql";
import { graphql } from "../../gql";
import { formatDate, formatRange } from "../../utils";
import { PartyCountdown } from "./PartyCountdown";

export function PartyDateAndTime({ partyId }: { partyId?: string }) {
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

  if (fetching || !party) {
    return <Skeleton />;
  }

  const startDate = dayjs(party.startDate, "YYYY-MM-DD").add(12, "hours");
  const endDate = dayjs(party.endDate, "YYYY-MM-DD").add(20, "hours");

  return (
    <>
      <Text>
        Die nächste Party ist{" "}
        <strong>vom {formatRange(startDate.toDate(), endDate.toDate())}</strong>
      </Text>
      <PartyCountdown date={startDate} />
      {"registrationDeadline" in party && party.registrationDeadline && (
        <Text w="bold" size="lg" mt="xs">
          Anmeldefrist ist der{" "}
          {formatDate(new Date(party.registrationDeadline))}
        </Text>
      )}
    </>
  );
}
