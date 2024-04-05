import { Box, Text } from "@mantine/core";
import { useAtomValue } from "jotai";
import { useQuery } from "urql";
import { graphql } from "../gql";
import { DonationDedication } from "../gql/graphql";
import { userAtom } from "../state";
import { formatCurrency } from "../utils";

export function NextPartyCosts() {
  const user = useAtomValue(userAtom)!;

  const [{ data }] = useQuery({
    query: graphql(`
      query nextPartyCosts {
        nextParty {
          id
          rentalCosts
          donations {
            id
            amount
            donator {
              id
              displayName
              avatar
            }
            dedication
          }
          attendings {
            id
            dates
            user {
              id
            }
          }
        }
      }
    `),
  });

  if (!data?.nextParty?.rentalCosts) {
    return null;
  }

  const party = data.nextParty;

  const daysWithAttending = party.attendings.reduce(
    (acc, attending) => acc + Math.max(attending.dates.length - 1, 0),
    0,
  );

  const donationsForRent = party.donations
    .filter((donation) => donation.dedication === DonationDedication.Rent)
    .reduce((acc, donation) => acc + donation.amount, 0);

  const costPerDay = (party.rentalCosts - donationsForRent) / daysWithAttending;

  const myDaysAttending = Math.max(
    0,
    (party.attendings.find((attending) => attending.user.id === user.id)?.dates
      .length ?? 0) - 1,
  );

  return (
    <>
      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "max-content max-content",
          gap: `0 ${theme.spacing.xs}`,
          justifyItems: "end",
        })}
      >
        <Text fw="bold">Mietkosten:</Text>
        <Text>{formatCurrency(party.rentalCosts)}</Text>
        <Text fw="bold">Spendenbeitrag:</Text>
        <Text>{formatCurrency(donationsForRent)}</Text>
        <Text fw="bold">Kosten pro Tag:</Text>
        <Text>{formatCurrency(costPerDay)}</Text>
        {myDaysAttending > 0 && (
          <>
            <Text fw="bold">Meine Kosten:</Text>
            <Text>{formatCurrency(myDaysAttending * costPerDay)}</Text>
          </>
        )}
      </Box>
      <Text size="xs">
        Kosten sind Prognosen, basierend auf der aktuellen Anzahl an
        angemeldeten Personen & Tagen.
        <br />
        Die Kosten werden gerecht auf die Tage verteilt. Der erste Tag ist immer
        gratis.
      </Text>
    </>
  );
}
