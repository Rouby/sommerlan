import { Box, Text } from "@mantine/core";
import { IconCheckbox, IconClockDollar } from "@tabler/icons-react";
import { useQuery } from "urql";
import { CardWithHeader, UserAvatar } from "../components";
import { graphql } from "../gql";
import { formatCurrency } from "../utils";

export function Budget() {
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

  return (
    <CardWithHeader header="Budget">
      <Box p="sm">
        <Text mb="md">
          Kosten pro Tag:{" "}
          {formatCurrency(data?.nextParty?.finalCostPerDay ?? 0)}, erster Tag
          umsonst.
        </Text>
        {data?.nextParty?.attendings
          .filter(
            (attending) =>
              attending.dates.length > 0 ||
              data.nextParty?.donations.some(
                (donation) => donation.donator?.id === attending.user.id,
              ),
          )
          .map((attending, idx, arr) => {
            const donations = data.nextParty?.donations.filter(
              (donation) => donation.donator?.id === attending.user.id,
            );

            const rentDues =
              (attending.dates.length - 1) *
              (data.nextParty?.finalCostPerDay ?? 0);

            const rentDonationSum =
              donations
                ?.filter((donation) => donation.dedication === "RENT")
                ?.reduce((acc, donation) => acc + donation.amount, 0) ?? 0;

            const otherDonationSum =
              donations
                ?.filter((donation) => donation.dedication !== "RENT")
                ?.reduce((acc, donation) => acc + donation.amount, 0) ?? 0;

            return (
              <Box
                key={attending.id}
                sx={(theme) => ({
                  display: "grid",
                  alignItems: "center",
                  gap: theme.spacing.md,
                  gridTemplateColumns: "auto 1fr",
                  ...(idx < arr.length - 1
                    ? {
                        marginBottom: theme.spacing.sm,
                        paddingBottom: theme.spacing.sm,
                        borderBottom: `1px solid ${theme.colors.gray[8]}`,
                      }
                    : {}),
                })}
              >
                <UserAvatar user={attending.user} />{" "}
                <div>
                  <Text>
                    {attending.user.displayName}, {attending.dates.length} Tage
                  </Text>
                  <Text weight="bold">{formatCurrency(rentDues)} Miete</Text>
                  {rentDonationSum > 0 && (
                    <Text>
                      {formatCurrency(rentDonationSum)} Spenden für die Miete.
                    </Text>
                  )}
                  {otherDonationSum > 0 && (
                    <Text>
                      {formatCurrency(otherDonationSum)} andere Spenden.
                    </Text>
                  )}
                  <Text
                    sx={(theme) => ({
                      display: "grid",
                      gridAutoFlow: "column",
                      gridTemplateColumns: "auto",
                      gridAutoColumns: "1fr",
                      gap: theme.spacing.xs,
                      alignItems: "center",
                    })}
                  >
                    {attending.paidDues >= rentDues + rentDonationSum ? (
                      <IconCheckbox color="green" size="18" />
                    ) : (
                      <IconClockDollar size="18" />
                    )}
                    Bereits {formatCurrency(attending.paidDues)} bezahlt.
                  </Text>
                </div>
              </Box>
            );
          })}

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
    </CardWithHeader>
  );
}
