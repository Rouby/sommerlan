import { Box, Text } from "@mantine/core";
import { IconCheckbox, IconClockDollar } from "@tabler/icons-react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "urql";
import { CardWithHeader, UserAvatar } from "../../components";
import { graphql } from "../../gql";
import { formatCurrency } from "../../utils";

export const Route = createLazyFileRoute("/admin/budget")({
  component: () => {
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
            .map((attending, idx, arr) => {
              return (
                <Box
                  key={attending.id}
                  style={{
                    display: "grid",
                    alignItems: "center",
                    gap: "var(--mantine-spacing-sm)",
                    gridTemplateColumns: "auto 1fr",
                    ...(idx < arr.length - 1
                      ? {
                          marginBottom: "var(--mantine-spacing-sm)",
                          paddingBottom: "var(--mantine-spacing-sm)",
                          borderBottom: "1px solid var(--mantine-color-dimmed)",
                        }
                      : {}),
                  }}
                >
                  <UserAvatar user={attending.user} />{" "}
                  <div>
                    <Text>
                      {attending.user.displayName}, {attending.dates.length}{" "}
                      Tage
                    </Text>
                    <Text w="bold">
                      {formatCurrency(attending.rentDues)} Miete
                    </Text>
                    {attending.rentDonationSum > 0 && (
                      <Text>
                        {formatCurrency(attending.rentDonationSum)} Spenden für
                        die Miete.
                      </Text>
                    )}
                    {attending.otherDonationSum > 0 && (
                      <Text>
                        {formatCurrency(attending.otherDonationSum)} andere
                        Spenden.
                      </Text>
                    )}
                    <Text
                      style={{
                        display: "grid",
                        gridAutoFlow: "column",
                        gridTemplateColumns: "auto",
                        gridAutoColumns: "1fr",
                        alignItems: "center",
                      }}
                    >
                      {attending.paidDues >=
                      attending.rentDues + attending.rentDonationSum ? (
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
  },
});
