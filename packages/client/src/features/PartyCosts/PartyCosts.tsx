import { Box, Progress, Text } from "@mantine/core";
import { useAtomValue } from "jotai";
import { useQuery } from "urql";
import { graphql } from "../../gql";
import { DonationDedication } from "../../gql/graphql";
import { userAtom } from "../../state";
import { formatCurrency, formatDate } from "../../utils";
import classes from "./styles.module.css";

export function PartyCosts() {
  const user = useAtomValue(userAtom)!;

  const [{ data }] = useQuery({
    query: graphql(`
      query nextPartyCosts {
        nextParty {
          id
          tentative
          rentalCosts
          paidDues
          finalCostPerDay
          payday
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
            paidDues
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

  if (data.nextParty.tentative) {
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

  const costPerDay = party.finalCostPerDay
    ? party.finalCostPerDay
    : (party.rentalCosts - donationsForRent) / daysWithAttending;

  const myDaysAttending = Math.max(
    0,
    (party.attendings.find((attending) => attending.user.id === user.id)?.dates
      .length ?? 0) - 1,
  );

  const myCosts =
    myDaysAttending * costPerDay +
    party.donations
      .filter((donation) => donation.donator?.id === user.id)
      .reduce((acc, donation) => acc + donation.amount, 0);

  const myPaidDues = party.attendings.find(
    (attending) => attending.user.id === user.id,
  )?.paidDues;

  return (
    <>
      <Box className={classes.costs}>
        <Text fw="bold">Mietkosten:</Text>
        <Text>{formatCurrency(party.rentalCosts)}</Text>
        <Text fw="bold">Spendenbeitrag:</Text>
        <Text>{formatCurrency(donationsForRent)}</Text>
        <Text fw="bold">Kosten pro Tag:</Text>
        <Text>{formatCurrency(costPerDay)}</Text>
        {myDaysAttending > 0 && (
          <>
            <Text fw="bold">Meine Kosten:</Text>
            <Text>{formatCurrency(myCosts)}</Text>
          </>
        )}
      </Box>
      {party.finalCostPerDay && party.payday ? (
        (myPaidDues ?? 0) >= myCosts ? (
          <Text>Du hast bereits alles bezahlt!</Text>
        ) : (
          <Text>
            Bezahle deinen Beitrag bitte bis zum{" "}
            {formatDate(new Date(party.payday))}.
          </Text>
        )
      ) : (
        <Text size="xs">
          Kosten sind Prognosen, basierend auf der aktuellen Anzahl an
          angemeldeten Personen & Tagen.
          <br />
          Die Kosten werden gerecht auf die Tage verteilt. Der erste Tag ist
          immer gratis.
        </Text>
      )}
      {party.finalCostPerDay && party.payday ? (
        <>
          <Text ta="center" mt="sm">
            Mietkosten Fortschritt
          </Text>
          <Progress
            size="xl"
            value={
              ((data.nextParty.paidDues ?? 0) / data.nextParty.rentalCosts) *
              100
            }
          />
          <Text ta="center">
            {formatCurrency(data.nextParty.paidDues ?? 0)} /{" "}
            {formatCurrency(data.nextParty.rentalCosts)}
          </Text>
        </>
      ) : null}
    </>
  );
}
