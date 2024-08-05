import { ActionIcon, Avatar, Box, Button, Popover, Text } from "@mantine/core";
import {
  IconCreditCardRefund,
  IconHomeDollar,
  IconPigMoney,
} from "@tabler/icons-react";
import { Fragment, useState } from "react";
import { useMutation, useQuery } from "urql";
import { Can, UserAvatar } from "../../components";
import { graphql } from "../../gql";
import { DonationDedication } from "../../gql/graphql";
import { formatCurrency } from "../../utils";
import { AddDonationForm } from "./AddDonationForm";
import classes from "./styles.module.css";

export function PartyDonations() {
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
            received
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

  return (
    <>
      {party.donations.length > 0 && (
        <>
          <Text mb="xs">Bisherige Spenden:</Text>
          <Box className={classes.donations}>
            {party.donations.map((donation) => (
              <Fragment key={donation.id}>
                <span>{formatCurrency(donation.amount)}</span>

                <DedicationIcon value={donation.dedication} />

                {donation.donator ? (
                  <UserAvatar user={donation.donator} />
                ) : (
                  <Avatar radius="xl">I</Avatar>
                )}

                <Can I="rescind" this={donation} otherwise={<div />}>
                  <RescindDonationButton donationId={donation.id} />
                </Can>
              </Fragment>
            ))}
          </Box>
        </>
      )}
      <Popover opened={donateMenuOpen} onClose={() => setDonateMenuOpen(false)}>
        <Popover.Target>
          <Button onClick={() => setDonateMenuOpen(!donateMenuOpen)}>
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
