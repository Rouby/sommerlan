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

export function PartySeatPlan() {
  const user = useAtomValue(userAtom)!;

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query partySeatPlan {
        nextParty {
          id
          seatsAvailable
          tentative
          registrationDeadline
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

  if (!nextParty.seatsAvailable || nextParty.tentative) return null;

  const myAttending = nextParty.attendings.find(
    (attending) => attending.user.id === user.id,
  );

  if (!myAttending || myAttending.dates.length === 0) return null;

  const registrationOpen = nextParty.registrationDeadline
    ? new Date() <= new Date(nextParty.registrationDeadline)
    : true;

  const seats = Array.from({ length: nextParty.seatsAvailable }, (_, i) =>
    String(i + 1),
  );

  const attendingBySeat = new Map(
    nextParty.attendings
      .filter((a) => a.seatNumber)
      .map((a) => [a.seatNumber!, a]),
  );

  const myCurrentSeat = myAttending.seatNumber || null;

  function handleSeatClick(seatNumber: string) {
    if (!registrationOpen || saving) return;

    const newSeat = myCurrentSeat === seatNumber ? "" : seatNumber;

    updateAttending({
      partyId: nextParty.id,
      input: { seatNumber: newSeat },
    });
  }

  return (
    <Card withBorder mt="md" p="md" radius="md">
      <Title order={4} mb="md">
        Sitzplan
      </Title>
      <Text size="sm" c="dimmed" mb="md">
        Wähle deinen Wunschplatz. Klicke auf einen freien Platz, um ihn zu
        reservieren. Deine aktuelle Auswahl ist blau markiert.
      </Text>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          gap: "var(--mantine-spacing-sm)",
        }}
      >
        {seats.map((seatNumber) => {
          const occupant = attendingBySeat.get(seatNumber);
          const isMyseat = myCurrentSeat === seatNumber;
          const isTaken = !!occupant && occupant.user.id !== user.id;

          return (
            <Tooltip
              key={seatNumber}
              label={
                occupant
                  ? `${occupant.user.displayName}${occupant.withPc === true ? " (mit PC)" : occupant.withPc === false ? " (ohne PC)" : ""}`
                  : `Platz ${seatNumber} (frei)`
              }
              withArrow
            >
              <Card
                withBorder
                p="xs"
                radius="sm"
                style={{
                  cursor:
                    isTaken || (!registrationOpen && !isMyseat)
                      ? "default"
                      : "pointer",
                  opacity: saving ? 0.6 : 1,
                  backgroundColor: isMyseat
                    ? "var(--mantine-color-blue-1)"
                    : isTaken
                      ? "var(--mantine-color-gray-1)"
                      : undefined,
                  borderColor: isMyseat
                    ? "var(--mantine-color-blue-5)"
                    : undefined,
                }}
                onClick={() => !isTaken && handleSeatClick(seatNumber)}
              >
                <Stack align="center" gap={4}>
                  <Text size="xs" fw="bold" c="dimmed">
                    {seatNumber}
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
      <Group mt="md" gap="md">
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
