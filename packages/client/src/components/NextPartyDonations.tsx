import {
  ActionIcon,
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  LoadingOverlay,
  NumberInput,
  Popover,
  SegmentedControl,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconCreditCardRefund,
  IconCurrencyEuro,
  IconHomeDollar,
  IconPigMoney,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import { Fragment, useState } from "react";
import { useMutation, useQuery } from "urql";
import { Can, UserAvatar } from ".";
import { graphql } from "../gql";
import { DonationDedication } from "../gql/graphql";
import { formatCurrency } from "../utils";

export function NextPartyDonations() {
  const [{ data }] = useQuery({
    query: graphql(`
      query nextPartyDonations {
        nextParty {
          id
          registrationDeadline
          donations {
            __typename
            id
            amount
            donator {
              id
              displayName
              avatar
            }
            dedication
          }
        }
      }
    `),
  });

  const [donateMenuOpen, setDonateMenuOpen] = useState(false);

  const party = data?.nextParty;

  if (!party) {
    return null;
  }

  const donationsAllowed = party?.registrationDeadline
    ? !dayjs().startOf("day").isAfter(party.registrationDeadline)
    : true;

  return (
    <>
      {party.donations.length > 0 && (
        <>
          <Text mb="xs">Bisherige Spenden:</Text>
          <Box
            sx={(theme) => ({
              display: "grid",
              gridTemplateColumns:
                "max-content max-content max-content max-content",
              gap: `${theme.spacing.xs}`,
              justifyItems: "end",
              alignItems: "center",
              marginBottom: theme.spacing.md,
            })}
          >
            {party.donations.map((donation) => (
              <Fragment key={donation.id}>
                <span>{formatCurrency(donation.amount)}</span>

                <DedicationIcon value={donation.dedication} />

                {donation.donator ? (
                  <UserAvatar user={donation.donator} />
                ) : (
                  <Avatar radius="xl">I</Avatar>
                )}

                {donationsAllowed ? (
                  <Can I="rescind" this={donation} otherwise={<div />}>
                    <RescindDonationButton donationId={donation.id} />
                  </Can>
                ) : (
                  <div />
                )}
              </Fragment>
            ))}
          </Box>
        </>
      )}
      <Popover opened={donateMenuOpen} onClose={() => setDonateMenuOpen(false)}>
        <Popover.Target>
          <Button
            onClick={() => setDonateMenuOpen(!donateMenuOpen)}
            disabled={!donationsAllowed}
          >
            Geld für die nächste Party spenden
          </Button>
        </Popover.Target>

        <Popover.Dropdown>
          <AddDonationForm onDonate={() => setDonateMenuOpen(false)} />
        </Popover.Dropdown>
      </Popover>
    </>
  );
}

function DedicationIcon({ value }: { value: DonationDedication }) {
  switch (value) {
    case DonationDedication.Rent:
      return <IconHomeDollar />;
    case DonationDedication.Warchest:
      return <IconPigMoney />;
  }
}

function AddDonationForm({ onDonate }: { onDonate: () => void }) {
  const [{ fetching, error }, donate] = useMutation(
    graphql(`
      mutation donateToParty(
        $amount: Float!
        $dedication: DonationDedication!
        $incognito: Boolean!
      ) {
        donate(
          amount: $amount
          dedication: $dedication
          incognito: $incognito
        ) {
          id
          amount
          dedication
          donator {
            id
            displayName
            avatar
          }
          party {
            id
          }
        }
      }
    `),
  );

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const amount = +form["amount"].value;
        const dedication = form["dedication"].value;
        const incognito = form["incognito"].checked;

        await donate({ amount, dedication, incognito });

        (event.target as HTMLFormElement).reset();

        onDonate();
      }}
    >
      <LoadingOverlay visible={fetching} />

      <Alert mb="md" hidden={!error} color="red">
        {error?.message}
      </Alert>

      <Stack>
        <NumberInput
          required
          name="amount"
          min={10}
          sx={{ textAlign: "right" }}
          rightSection={<IconCurrencyEuro />}
        />

        <SegmentedControl
          name="dedication"
          data={[
            { value: "RENT", label: "Miete" },
            { value: "WARCHEST", label: "Kriegskasse" },
          ]}
        />

        <Checkbox name="incognito" label="Anonym spenden" />

        <Button type="submit">Spenden</Button>
      </Stack>

      <Text size="xs" maw={300}>
        <p>
          Spenden werden auf vertrauensbasis getätigt und fließen entweder in
          die Gemeinschaftskasse ("Kriegskasse") oder werden auf die Miete
          angerechnet.
        </p>
        <p>
          Hier angegebene Spenden werden zum Stichtag der nächsten Party
          berücksichtigt und sind <strong>zusätzlich</strong> zu den normalen
          Kosten zu leisten, bitte beachte das bei deiner Planung.
        </p>
      </Text>
    </form>
  );
}

function RescindDonationButton({ donationId }: { donationId: string }) {
  const [{ fetching }, rescind] = useMutation(
    graphql(`
      mutation rescindDonation($id: ID!) {
        rescindDonation(id: $id) {
          id
          party {
            id
          }
        }
      }
    `),
  );

  return (
    <ActionIcon
      loading={fetching}
      onClick={async () => {
        await rescind({ id: donationId });
      }}
      title="Spende zurückziehen"
    >
      <IconCreditCardRefund />
    </ActionIcon>
  );
}
