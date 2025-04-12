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
          finalCostPerDay
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
        Kosten pro Tag: {formatCurrency(data?.nextParty?.finalCostPerDay ?? 0)}{" "}
        (der erste Tag ist immer umsonst).
      </Text>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nutzer</Table.Th>
            <Table.Th>Miete</Table.Th>
            <Table.Th>Spenden</Table.Th>
            <Table.Th>Gesamt</Table.Th>
            <Table.Th>Bezahlt</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.nextParty?.attendings
            .filter(
              (attending) =>
                attending.dates.length > 1 ||
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

                rentDues:
                  (attending.dates.length - 1) *
                  (data.nextParty?.finalCostPerDay ?? 0),

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
            .sort((a, b) =>
              // sort first by who paid up, second by amount to be paid
              a.paidDues >= a.rentDues + a.rentDonationSum
                ? -1
                : b.paidDues >= b.rentDues + b.rentDonationSum
                  ? 1
                  : a.rentDues + a.rentDonationSum - a.paidDues >
                      b.rentDues + b.rentDonationSum - b.paidDues
                    ? -1
                    : 1,
            )
            .map((attending) => {
              return (
                <Table.Tr key={attending.id}>
                  <Table.Td>
                    <UserAvatar user={attending.user} showName />
                  </Table.Td>
                  <Table.Td>{formatCurrency(attending.rentDues)}</Table.Td>
                  <Table.Td>
                    {formatCurrency(
                      attending.rentDonationSum + attending.otherDonationSum,
                    )}
                  </Table.Td>
                  <Table.Td>
                    {formatCurrency(
                      attending.rentDues +
                        attending.rentDonationSum +
                        attending.otherDonationSum,
                    )}
                  </Table.Td>
                  <Table.Td>
                    <Group>
                      <UserPaymentInput
                        id={attending.id}
                        paidDues={attending.paidDues}
                      />
                      {attending.paidDues >=
                      attending.rentDues + attending.rentDonationSum ? (
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
