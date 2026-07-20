import {
  Badge,
  Box,
  Card,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconDeviceDesktop, IconUser } from "@tabler/icons-react";
import { useAtomValue } from "jotai";
import { useMutation, useQuery } from "urql";
import { UserAvatar } from "../../components";
import { graphql } from "../../gql";
import { userAtom } from "../../state";

const SEAT_SIZE = 80;
const SEAT_GAP = 8;

export function PartySeatPlan() {
  const user = useAtomValue(userAtom)!;

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query partySeatPlan {
        nextParty {
          id
          tentative
          registrationDeadline
          seatPlan {
            numRows
            numCols
            seats {
              id
              label
              row
              col
              section
            }
          }
          attendings {
            id
            seatNumber
            withPc
            dates
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

  const [{ fetching: saving }, updateAttending] = useMutation(
    graphql(`
      mutation setSeatPreference($partyId: ID!, $input: UpdateAttendingInput!) {
        updateAttending(partyId: $partyId, input: $input) {
          id
          seatNumber
        }
      }
    `),
  );

  if (fetching || !data?.nextParty) return null;

  const { nextParty } = data;

  if (nextParty.tentative) return null;

  const myAttending = nextParty.attendings.find(
    (attending) => attending.user.id === user.id,
  );

  if (!myAttending || myAttending.dates.length === 0) return null;

  const registrationOpen = nextParty.registrationDeadline
    ? new Date() <= new Date(nextParty.registrationDeadline)
    : true;

  const { seatPlan } = nextParty;

  const attendingBySeat = new Map(
    nextParty.attendings
      .filter((a) => a.seatNumber)
      .map((a) => [a.seatNumber!, a]),
  );

  const myCurrentSeat = myAttending.seatNumber || null;

  function handleSeatClick(seatId: string) {
    if (!registrationOpen || saving) return;
    const newSeat = myCurrentSeat === seatId ? "" : seatId;
    updateAttending({ partyId: nextParty.id, input: { seatNumber: newSeat } });
  }

  const gridWidth =
    seatPlan.numCols * SEAT_SIZE + (seatPlan.numCols - 1) * SEAT_GAP;
  const gridHeight =
    seatPlan.numRows * SEAT_SIZE + (seatPlan.numRows - 1) * SEAT_GAP;

  return (
    <Card withBorder mt="md" p="md" radius="md">
      <Title order={4} mb="xs">
        Sitzplan
      </Title>
      <Text size="sm" c="dimmed" mb="md">
        Wähle deinen Wunschplatz. Klicke auf einen freien Platz, um ihn zu
        reservieren. Dein Platz ist blau markiert.
      </Text>

      <Box style={{ overflowX: "auto" }}>
        <Box
          style={{
            position: "relative",
            width: gridWidth,
            height: gridHeight,
            margin: "0 auto",
          }}
        >
          {seatPlan.seats.map((seat) => {
            const left = seat.col * (SEAT_SIZE + SEAT_GAP);
            const top = seat.row * (SEAT_SIZE + SEAT_GAP);
            const occupant = attendingBySeat.get(seat.id);
            const isMySeat = myCurrentSeat === seat.id;
            const isTaken = !!occupant && occupant.user.id !== user.id;
            const isIsland = seat.section === "ISLAND";

            return (
              <Tooltip
                key={seat.id}
                label={
                  occupant
                    ? `${occupant.user.displayName}${occupant.withPc === true ? " (mit PC)" : occupant.withPc === false ? " (ohne PC)" : ""}`
                    : `Platz ${seat.label} (frei)`
                }
                withArrow
              >
                <Card
                  withBorder
                  p={4}
                  radius="sm"
                  style={{
                    position: "absolute",
                    left,
                    top,
                    width: SEAT_SIZE,
                    height: SEAT_SIZE,
                    cursor:
                      isTaken || (!registrationOpen && !isMySeat)
                        ? "default"
                        : "pointer",
                    opacity: saving ? 0.6 : 1,
                    backgroundColor: isMySeat
                      ? "var(--mantine-color-blue-1)"
                      : isIsland
                        ? "var(--mantine-color-violet-0)"
                        : undefined,
                    borderColor: isMySeat
                      ? "var(--mantine-color-blue-5)"
                      : isIsland
                        ? "var(--mantine-color-violet-4)"
                        : undefined,
                    transition: "background-color 0.15s, border-color 0.15s",
                  }}
                  onClick={() => !isTaken && handleSeatClick(seat.id)}
                >
                  <Stack align="center" justify="center" gap={2} h="100%">
                    <Text size="xs" fw="bold" c="dimmed" lh={1}>
                      {seat.label}
                    </Text>
                    {occupant ? (
                      <>
                        <UserAvatar user={occupant.user} size={32} />
                        {occupant.withPc === true ? (
                          <IconDeviceDesktop size={14} />
                        ) : occupant.withPc === false ? (
                          <IconUser size={14} />
                        ) : null}
                      </>
                    ) : (
                      <Box
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          border: "2px dashed var(--mantine-color-gray-4)",
                        }}
                      />
                    )}
                  </Stack>
                </Card>
              </Tooltip>
            );
          })}
        </Box>
      </Box>

      <Group mt="md" gap="md" wrap="wrap">
        <Group gap="xs">
          <Box
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              backgroundColor: "var(--mantine-color-blue-1)",
              border: "2px solid var(--mantine-color-blue-5)",
            }}
          />
          <Text size="sm">Mein Platz</Text>
        </Group>
        <Group gap="xs">
          <Box
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              backgroundColor: "var(--mantine-color-gray-1)",
            }}
          />
          <Text size="sm">Belegt</Text>
        </Group>
        <Group gap="xs">
          <Box
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              border: "2px dashed var(--mantine-color-gray-4)",
            }}
          />
          <Text size="sm">Frei</Text>
        </Group>
        <Group gap="xs">
          <Box
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              backgroundColor: "var(--mantine-color-violet-0)",
              border: "2px solid var(--mantine-color-violet-4)",
            }}
          />
          <Text size="sm">Insel</Text>
        </Group>
        <Badge leftSection={<IconDeviceDesktop size={12} />} color="blue" variant="light">
          Mit PC
        </Badge>
        <Badge leftSection={<IconUser size={12} />} color="gray" variant="light">
          Ohne PC
        </Badge>
      </Group>
    </Card>
  );
}
