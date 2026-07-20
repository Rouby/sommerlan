import { Box, Progress, Table, Text, Card, Group, Badge, Stack, Divider, Tooltip } from "@mantine/core";
import { IconInfoCircle, IconTools, IconCalendar, IconUser, IconCheck, IconX } from "@tabler/icons-react";
import { useAtomValue } from "jotai";
import { useQuery } from "urql";
import dayjs from "dayjs";
import { graphql } from "../../gql";
import { DonationDedication } from "../../gql/graphql";
import { userAtom } from "../../state";
import { formatCurrency, formatDate } from "../../utils";
import classes from "./styles.module.css";

const WEEKDAYS = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

function formatGermanDay(dateStr: string) {
  const d = dayjs(dateStr);
  const weekday = WEEKDAYS[d.day()];
  return `${weekday}, ${d.format("DD.MM.")}`;
}

export function PartyCosts() {
  const user = useAtomValue(userAtom)!;

  const [{ data }] = useQuery({
    query: graphql(`
      query nextPartyCosts {
        nextParty {
          id
          tentative
          rentalCosts
          feedingCosts
          paidDues
          payday
          rentalCostPerDay
          billableDaysCount
          dayBreakdown {
            date
            isBillable
            rentalCost
            participantsCount
            costPerParticipant
          }
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
            rentDues
            feedingDues
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

  const donationsForRent = party.donations
    .filter((donation) => donation.dedication === DonationDedication.Rent)
    .reduce((acc, donation) => acc + donation.amount, 0);

  const myAttending = party.attendings.find((attending) => attending.user.id === user.id);
  
  const myDaysAttending = myAttending?.dates.length ?? 0;
  const myBillableDays = myAttending?.dates.filter((date) => 
    party.dayBreakdown.find((day) => day.date === date)?.isBillable
  ).length ?? 0;

  const myRentDues = toFixed(myAttending?.rentDues ?? 0);
  const myFeedingDues = toFixed(myAttending?.feedingDues ?? 0);

  const myDonations = party.donations
    .filter((donation) => donation.donator?.id === user.id)
    .reduce((acc, donation) => acc + donation.amount, 0);

  const myTotalDues = toFixed(myRentDues + myFeedingDues + myDonations);
  const myPaidDues = toFixed(myAttending?.paidDues ?? 0);
  const amountToPay = Math.max(0, myTotalDues - myPaidDues);

  // Total billable days count by all participants
  const totalBillableDaysAll = party.attendings.reduce((acc, attending) => {
    const billableCount = attending.dates.filter((date) => 
      party.dayBreakdown.find((day) => day.date === date)?.isBillable
    ).length;
    return acc + billableCount;
  }, 0);

  return (
    <Stack gap="lg" mt="md">
      <Card withBorder radius="md" p="md">
        <Card.Section withBorder inheritPadding py="xs">
          <Group justify="space-between">
            <Text fw="bold">Kostenübersicht</Text>
            <Badge color="blue" variant="light">
              Prognose
            </Badge>
          </Group>
        </Card.Section>

        <Box className={classes.costs} mt="md">
          <Text fw="bold">Gesamte Mietkosten:</Text>
          <Text>{formatCurrency(party.rentalCosts)}</Text>
          <Text fw="bold">Mietspenden:</Text>
          <Text c="green">-{formatCurrency(donationsForRent)}</Text>
          <Text fw="bold">Zu deckende Miete:</Text>
          <Text fw="bold">{formatCurrency(party.rentalCosts - donationsForRent)}</Text>
          <Text fw="bold">Verpflegungskosten:</Text>
          <Text>{formatCurrency(party.feedingCosts)}</Text>
        </Box>

        <Divider my="md" />

        {myDaysAttending > 0 && (
          <Stack gap="xs">
            <Text size="sm" fw="bold" c="blue">Dein Anteil:</Text>
            <Group justify="space-between">
              <Text size="sm">Miete ({myBillableDays} abrechenbare Tage):</Text>
              <Text size="sm">{formatCurrency(myRentDues)}</Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm">Verpflegung:</Text>
              <Text size="sm">{formatCurrency(myFeedingDues)}</Text>
            </Group>
            {myDonations > 0 && (
              <Group justify="space-between">
                <Text size="sm">Eigene Spende:</Text>
                <Text size="sm">{formatCurrency(myDonations)}</Text>
              </Group>
            )}
            <Divider variant="dashed" />
            <Group justify="space-between" fw="bold">
              <Text>Gesamtbeitrag:</Text>
              <Text>{formatCurrency(myTotalDues)}</Text>
            </Group>
            <Group justify="space-between" c="dimmed">
              <Text size="xs">Bereits bezahlt:</Text>
              <Text size="xs">{formatCurrency(myPaidDues)}</Text>
            </Group>
            {amountToPay > 0 ? (
              <Group justify="space-between" c="orange" fw="bold">
                <Text>Noch offen:</Text>
                <Text>{formatCurrency(amountToPay)}</Text>
              </Group>
            ) : (
              <Text c="green" size="sm" fw="bold" mt="xs">Du hast bereits alles bezahlt! Vielen Dank!</Text>
            )}
          </Stack>
        )}
      </Card>

      <Card withBorder radius="md" p="md">
        <Card.Section withBorder inheritPadding py="xs">
          <Group justify="space-between">
            <Group gap="xs">
              <IconCalendar size="18" />
              <Text fw="bold">Täglicher Mietkosten-Split</Text>
            </Group>
            <Tooltip label="Der erste und letzte Tag sind für Aufbau & Abbau kostenlos. Jeder andere Tag wird taggenau aufgeteilt.">
              <IconInfoCircle size="18" style={{ cursor: "pointer", color: "gray" }} />
            </Tooltip>
          </Group>
        </Card.Section>

        <Table striped highlightOnHover mt="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Tag</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th ta="right">Mietpreis Tag</Table.Th>
              <Table.Th ta="right">Teilnehmer</Table.Th>
              <Table.Th ta="right">Kosten/Person</Table.Th>
              <Table.Th ta="center">Dabei?</Table.Th>
              <Table.Th ta="right">Dein Anteil</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {party.dayBreakdown.map((day) => {
              const amAttending = myAttending?.dates.includes(day.date) ?? false;
              const isExcluded = !day.isBillable;
              const rentShare = amAttending && day.isBillable ? day.costPerParticipant : 0;

              return (
                <Table.Tr key={day.date}>
                  <Table.Td style={{ whiteSpace: "nowrap" }}>
                    {formatGermanDay(day.date)}
                  </Table.Td>
                  <Table.Td>
                    {isExcluded ? (
                      <Badge color="teal" variant="light" size="xs" leftSection={<IconTools size="10" />}>
                        Auf-/Abbau
                      </Badge>
                    ) : (
                      <Badge color="blue" variant="dot" size="xs">
                        Abrechenbar
                      </Badge>
                    )}
                  </Table.Td>
                  <Table.Td ta="right">
                    {isExcluded ? "0.00 €" : formatCurrency(day.rentalCost)}
                  </Table.Td>
                  <Table.Td ta="right">
                    {day.participantsCount}
                  </Table.Td>
                  <Table.Td ta="right">
                    {isExcluded ? "0.00 €" : formatCurrency(day.costPerParticipant)}
                  </Table.Td>
                  <Table.Td ta="center">
                    {amAttending ? (
                      <IconCheck color="green" size="16" />
                    ) : (
                      <IconX color="red" size="16" />
                    )}
                  </Table.Td>
                  <Table.Td ta="right" fw={amAttending && !isExcluded ? "bold" : "normal"}>
                    {formatCurrency(rentShare)}
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Card>

      <Card withBorder radius="md" p="md">
        <Card.Section withBorder inheritPadding py="xs">
          <Group gap="xs">
            <IconUser size="18" />
            <Text fw="bold">Verpflegungskosten-Split</Text>
          </Group>
        </Card.Section>

        <Stack gap="sm" mt="sm">
          <Text size="sm">
            Essen & Getränke werden proportional nach deinen tatsächlich teilgenommenen abrechenbaren Tagen verteilt:
          </Text>
          <Box className={classes.costs}>
            <Text size="sm">Gesamtkosten Essen:</Text>
            <Text size="sm">{formatCurrency(party.feedingCosts)}</Text>
            <Text size="sm">Abrechenbare Tage (Alle):</Text>
            <Text size="sm">{totalBillableDaysAll} Personentage</Text>
            <Text size="sm">Kosten pro Tag & Person:</Text>
            <Text size="sm">
              {totalBillableDaysAll > 0
                ? formatCurrency(party.feedingCosts / totalBillableDaysAll)
                : "0.00 €"}
            </Text>
            <Text size="sm" fw="bold">Deine abrechenbaren Tage:</Text>
            <Text size="sm" fw="bold">{myBillableDays} Tage</Text>
            <Text size="sm" fw="bold" c="blue">Dein Anteil Verpflegung:</Text>
            <Text size="sm" fw="bold" c="blue">{formatCurrency(myFeedingDues)}</Text>
          </Box>
        </Stack>
      </Card>

      {party.payday ? (
        myPaidDues >= myTotalDues ? (
          <Text ta="center" c="green" fw="bold">
            Vielen Dank! Du hast bereits alles bezahlt.
          </Text>
        ) : (
          <Text ta="center" fw="bold">
            Bezahle deinen Beitrag bitte bis zum{" "}
            {formatDate(new Date(party.payday))}.
          </Text>
        )
      ) : (
        <Text size="xs" c="dimmed" ta="center">
          Die Kosten sind Prognosen, basierend auf der aktuellen Anzahl an
          angemeldeten Personen & Tagen. Sie können sich bis zur Festlegung ändern.
        </Text>
      )}

      {party.payday ? (
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
    </Stack>
  );
}

function toFixed<TNum extends number | undefined>(num: TNum): TNum {
  return typeof num === "number"
    ? ((Math.round(num * 100) / 100) as TNum)
    : num;
}
