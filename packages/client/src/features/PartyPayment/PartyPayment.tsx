import {
  Alert,
  Box,
  Card,
  Group,
  Loader,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { IconAlertCircle } from "@tabler/icons-react";
import { useAtomValue } from "jotai";
import { useMutation, useQuery } from "urql";
import { graphql } from "../../gql";
import { userAtom } from "../../state";
import { formatCurrency, formatDate } from "../../utils";

export function PartyPayment() {
  const user = useAtomValue(userAtom)!;

  // Query to get the party and user attending information
  const [{ data, fetching, error }] = useQuery({
    query: graphql(`
      query PartyPaymentInfo {
        nextParty {
          id
          costPerDay
          payday
          attendings {
            id
            dates
            paidDues
            user {
              id
              displayName
            }
          }
          donations {
            id
            amount
            dedication
            donator {
              id
            }
          }
        }
      }
    `),
  });

  const [{}, createPayPalOrder] = useMutation(
    graphql(`
      mutation CreatePayPalOrder {
        createPayPalOrder
      }
    `),
  );

  const [{ data: paymentComplete }, capturePayPalOrder] = useMutation(
    graphql(`
      mutation CapturePayPalOrder($orderId: ID!) {
        capturePayPalOrder(orderId: $orderId) {
          id
          paidDues
        }
      }
    `),
  );

  if (fetching) {
    return (
      <Box
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <Loader />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert icon={<IconAlertCircle size="1rem" />} title="Error" color="red">
        Failed to load payment information. Please try again later.
      </Alert>
    );
  }

  if (!data?.nextParty || !data.nextParty.payday) {
    return (
      <Alert
        icon={<IconAlertCircle size="1rem" />}
        title="Information"
        color="blue"
      >
        No payment information available at this time.
      </Alert>
    );
  }

  const party = data.nextParty;

  // Find current user's attending record
  const myAttending = party.attendings.find(
    (attending) => attending.user.id === user.id,
  );

  if (!myAttending) {
    return (
      <Alert
        icon={<IconAlertCircle size="1rem" />}
        title="Information"
        color="blue"
      >
        You are not registered for the upcoming party.
      </Alert>
    );
  }

  // Calculate costs
  const myDaysAttending = Math.max(0, myAttending.dates.length - 1); // First day is free
  const myRentDues = myDaysAttending * party.costPerDay;

  // Calculate donations made by this user
  const myDonations = party.donations
    .filter((donation) => donation.donator?.id === user.id)
    .reduce((acc, donation) => acc + donation.amount, 0);

  // Total amount to pay
  const totalDues = myRentDues + myDonations;

  // Amount already paid
  const alreadyPaid = myAttending.paidDues || 0;

  // Amount still to pay
  const amountToPay = Math.max(0, totalDues - alreadyPaid);

  // If payment is complete, show success message
  if (paymentComplete) {
    return (
      <Alert title="Payment Successful" color="green">
        Your payment has been processed successfully. Thank you!
      </Alert>
    );
  }

  // If already paid in full
  if (alreadyPaid >= totalDues) {
    return (
      <Card withBorder p="md" radius="md">
        <Title order={3} mb="md">
          Party Payment
        </Title>
        <Alert title="Already Paid" color="green">
          You have already paid your dues for the upcoming party. Thank you!
        </Alert>
        <Box mt="md">
          <Text>Total amount: {formatCurrency(totalDues)}</Text>
          <Text>Amount paid: {formatCurrency(alreadyPaid)}</Text>
        </Box>
      </Card>
    );
  }

  return (
    <Card withBorder p="md" radius="md">
      <Title order={3} mb="md">
        Party Payment
      </Title>

      <Paper withBorder p="md" radius="sm" mb="md">
        <Stack>
          <Group justify="space-between">
            <Text fw="bold">Days attending:</Text>
            <Text>
              {myAttending.dates.length} days ({myDaysAttending} billable days)
            </Text>
          </Group>

          <Group justify="space-between">
            <Text fw="bold">Cost per day:</Text>
            <Text>{formatCurrency(party.costPerDay)}</Text>
          </Group>

          <Group justify="space-between">
            <Text fw="bold">Rental costs:</Text>
            <Text>{formatCurrency(myRentDues)}</Text>
          </Group>

          {myDonations > 0 && (
            <Group justify="space-between">
              <Text fw="bold">Your donations:</Text>
              <Text>{formatCurrency(myDonations)}</Text>
            </Group>
          )}

          <Group justify="space-between">
            <Text fw="bold">Total amount:</Text>
            <Text>{formatCurrency(totalDues)}</Text>
          </Group>

          <Group justify="space-between">
            <Text fw="bold">Already paid:</Text>
            <Text>{formatCurrency(alreadyPaid)}</Text>
          </Group>

          {party.payday && (
            <Text size="sm" c="dimmed" mt="xs">
              Please pay by {formatDate(new Date(party.payday))}.
            </Text>
          )}
        </Stack>
      </Paper>

      <Group justify="space-between" mt="xl">
        <Text fw="bold" size="lg" c="blue">
          Amount to pay: {formatCurrency(amountToPay)}
        </Text>

        <PayPalButtons
          disabled={amountToPay <= 0}
          style={{ layout: "horizontal" }}
          createOrder={() =>
            createPayPalOrder({}).then((res) => res.data?.createPayPalOrder!)
          }
          onApprove={(data) =>
            capturePayPalOrder({ orderId: data.orderID }).then(() => {})
          }
        />
      </Group>
    </Card>
  );
}
