import {
  Box,
  Button,
  Group,
  Loader,
  NumberInput,
  Table,
  Text,
} from "@mantine/core";
import { IconCheck, IconCheckbox, IconClockDollar } from "@tabler/icons-react";
import { useMutation, useQuery } from "urql";
import { UserAvatar } from "../../components";
import { graphql } from "../../gql";
import { formatCurrency } from "../../utils";

export function AdminPartyPayments() {
  const [{ data }] = useQuery({
    query: graphql(`
      query NextPartyBudget {
        nextParty {
          id
          donations {
            id
            donator {
              id
              displayName
              avatar
            }
            amount
            dedication
          }
          attendings {
            id
            dates
            rentDues
            feedingDues
            paidDues
            notificationSent
            user {
              id
              displayName
              avatar
            }
          }
        }
      }
    `),
  });

  const [{ fetching }, sendPaymentNotification] = useMutation(
    graphql(`
      mutation sendPaymentNotification($userId: ID!) {
        sendPaymentNotification(userId: $userId) {
          id
          notificationSent
        }
      }
    `),
  );
  const [{ fetching: sendingToAll }, sendPaymentNotificationToAll] =
    useMutation(
      graphql(`
        mutation sendPaymentNotificationToAll {
          sendPaymentNotificationToAll {
            id
            notificationSent
          }
        }
      `),
    );

  return (
    <Box p="sm">
      <Text mb="md">
        Mietkosten und Verpflegungskosten werden taggenau bzw. anteilig berechnet (der erste und letzte Tag sind kostenlos).
      </Text>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nutzer</Table.Th>
            <Table.Th>Miete</Table.Th>
            <Table.Th>Verpflegung</Table.Th>
            <Table.Th>Spenden</Table.Th>
            <Table.Th>Gesamt</Table.Th>
            <Table.Th>Bezahlt</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.nextParty?.attendings
            .filter(
              (attending) =>
                attending.dates.length > 0 ||
                data.nextParty?.donations.some(
                  (donation) => donation.donator?.id === attending.user.id,
                ),
            )
            .map((attending) => {
              const donations = data.nextParty?.donations.filter(
                (donation) => donation.donator?.id === attending.user.id,
              );
              return {
                ...attending,

                rentDues: attending.rentDues ?? 0,
                feedingDues: attending.feedingDues ?? 0,

                rentDonationSum:
                  donations
                    ?.filter((donation) => donation.dedication === "RENT")
                    ?.reduce((acc, donation) => acc + donation.amount, 0) ?? 0,

                otherDonationSum:
                  donations
                    ?.filter((donation) => donation.dedication !== "RENT")
                    ?.reduce((acc, donation) => acc + donation.amount, 0) ?? 0,
              };
            })
            .sort((a, b) => {
              const aTotal = a.rentDues + a.feedingDues + a.rentDonationSum + a.otherDonationSum;
              const bTotal = b.rentDues + b.feedingDues + b.rentDonationSum + b.otherDonationSum;
              const aPaid = a.paidDues >= a.rentDues + a.feedingDues + a.rentDonationSum;
              const bPaid = b.paidDues >= b.rentDues + b.feedingDues + b.rentDonationSum;

              if (aPaid && !bPaid) return -1;
              if (!aPaid && bPaid) return 1;

              const aOutstanding = aTotal - a.paidDues;
              const bOutstanding = bTotal - b.paidDues;
              return bOutstanding - aOutstanding;
            })
            .map((attending) => {
              const totalDues = attending.rentDues + attending.feedingDues + attending.rentDonationSum + attending.otherDonationSum;
              const paidUpLimit = attending.rentDues + attending.feedingDues + attending.rentDonationSum;
              return (
                <Table.Tr key={attending.id}>
                  <Table.Td>
                    <UserAvatar user={attending.user} showName />
                  </Table.Td>
                  <Table.Td>{formatCurrency(attending.rentDues)}</Table.Td>
                  <Table.Td>{formatCurrency(attending.feedingDues)}</Table.Td>
                  <Table.Td>
                    {formatCurrency(
                      attending.rentDonationSum + attending.otherDonationSum,
                    )}
                  </Table.Td>
                  <Table.Td>
                    {formatCurrency(totalDues)}
                  </Table.Td>
                  <Table.Td>
                    <Group>
                      <UserPaymentInput
                        id={attending.id}
                        paidDues={attending.paidDues}
                      />
                      {attending.paidDues >= paidUpLimit ? (
                        <IconCheckbox color="green" size="18" />
                      ) : (
                        <IconClockDollar size="18" />
                      )}
                      <Button
                        rightSection={
                          attending.notificationSent ? (
                            <IconCheck color="green" size="18" />
                          ) : null
                        }
                        variant="subtle"
                        onClick={() =>
                          sendPaymentNotification({ userId: attending.user.id })
                        }
                        loading={fetching}
                      >
                        Erinnern
                      </Button>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              );
            })}
        </Table.Tbody>
      </Table>

      <Group justify="end">
        <Button
          mt="md"
          onClick={() => sendPaymentNotificationToAll({})}
          loading={sendingToAll}
        >
          Alle erinnern
        </Button>
      </Group>

      <Text mt="md">
        Insgesamt wurden{" "}
        {formatCurrency(
          data?.nextParty?.donations.reduce(
            (acc, donation) => acc + donation.amount,
            0,
          ) ?? 0,
        )}{" "}
        gespendet.
      </Text>
    </Box>
  );
}

function UserPaymentInput({ id, paidDues }: { id: string; paidDues: number }) {
  const [{ fetching }, updatePaidDues] = useMutation(
    graphql(`
      mutation updatePaidDues($id: ID!, $paidDues: Float!) {
        updatePaidDues(attendingId: $id, paidDues: $paidDues) {
          id
          paidDues
        }
      }
    `),
  );

  return (
    <>
      <NumberInput
        size="xs"
        flex="0 0 80px"
        min={0}
        decimalScale={2}
        defaultValue={paidDues}
        onBlur={(evt) =>
          +evt.target.value !== paidDues &&
          updatePaidDues({ id, paidDues: +evt.target.value })
        }
        fixedDecimalScale
        rightSection="€"
      />
      {fetching && <Loader type="dots" size="xs" />}
    </>
  );
}
