import { Skeleton, Text } from "@mantine/core";
import dayjs from "dayjs";
import { useQuery } from "urql";
import { graphql } from "../../gql";
import { formatDate, formatRange } from "../../utils";
import { PartyCountdown } from "./PartyCountdown";

export function PartyDateAndTime() {
  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query partyCountdown {
        nextParty {
          id
          startDate
          endDate
          tentative
          registrationDeadline
        }
      }
    `),
  });

  if (fetching) {
    return <Skeleton />;
  }

  if (!data?.nextParty) {
    return <Text>Es gibt keine kommende Party.</Text>;
  }

  const startDate = dayjs(data.nextParty.startDate, "YYYY-MM-DD").add(
    12,
    "hours",
  );
  const endDate = dayjs(data.nextParty.endDate, "YYYY-MM-DD").add(20, "hours");

  return (
    <>
      <Text>
        Die nächste Party ist{" "}
        <strong>vom {formatRange(startDate.toDate(), endDate.toDate())}</strong>
        {data?.nextParty?.tentative && " geplant."}
      </Text>
      <PartyCountdown date={startDate} />
      {data.nextParty.registrationDeadline && (
        <Text w="bold" size="lg" mt="xs">
          Anmeldefrist ist der{" "}
          {formatDate(new Date(data.nextParty.registrationDeadline))}
        </Text>
      )}
    </>
  );
}
