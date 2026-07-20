import {
  Box,
  Card,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import {
  IconDoorEnter,
  IconDoorExit,
  IconSnowflake,
  IconArmchair,
  IconDoor,
} from "@tabler/icons-react";
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
            width
            height
            elements {
              id
              type
              x
              y
              width
              height
              label
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
  const hasPc = myAttending.withPc === true;

  function handleSeatClick(seatId: string) {
    if (!registrationOpen || saving || !hasPc) return;
    const newSeat = myCurrentSeat === seatId ? "" : seatId;
    updateAttending({ partyId: nextParty.id, input: { seatNumber: newSeat } });
  }

  const gridWidth =
    seatPlan.width * SEAT_SIZE + (seatPlan.width - 1) * SEAT_GAP;
  const gridHeight =
    seatPlan.height * SEAT_SIZE + (seatPlan.height - 1) * SEAT_GAP;

  return (
    <Card withBorder mt="md" p="md" radius="md">
      <Title order={4} mb="xs">
        Sitzplan
      </Title>
      <Text size="sm" c={hasPc ? "dimmed" : "red"} mb="md" fw={hasPc ? undefined : "bold"}>
        {hasPc
          ? "Wähle deinen Wunschplatz. Klicke auf einen freien Platz, um ihn zu reservieren. Dein Platz ist blau markiert."
          : "Nur Teilnehmer mit einem PC können einen Sitzplatz reservieren."}
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
          {seatPlan.elements.map((element) => {
            const left = element.x * (SEAT_SIZE + SEAT_GAP);
            const top = element.y * (SEAT_SIZE + SEAT_GAP);
            const width = element.width * (SEAT_SIZE + SEAT_GAP) - SEAT_GAP;
            const height = element.height * (SEAT_SIZE + SEAT_GAP) - SEAT_GAP;

            // If the element is a TABLE, render it as a selectable seat
            if (element.type === "TABLE") {
              const occupant = attendingBySeat.get(element.id);
              const isMySeat = myCurrentSeat === element.id;
              const isTaken = !!occupant && occupant.user.id !== user.id;

              return (
                <Tooltip
                  key={element.id}
                  label={
                    occupant
                      ? false
                      : `Platz ${element.label || element.id} (frei)`
                  }
                  withArrow
                  hidden={Boolean(occupant)}
                >
                  <Card
                    withBorder
                    p={4}
                    radius="sm"
                    style={{
                      position: "absolute",
                      left,
                      top,
                      width,
                      height,
                      cursor:
                        isTaken || (!registrationOpen && !isMySeat) || !hasPc
                          ? "default"
                          : "pointer",
                      opacity: saving ? 0.6 : 1,
                      backgroundColor: occupant ? "var(--mantine-color-gray-7)" : "var(--mantine-color-body)",
                      borderColor: isMySeat
                        ? "var(--mantine-color-blue-5)"
                        : undefined,
                      borderWidth: isMySeat ? 4 : undefined,
                      transition: "background-color 0.15s, border-color 0.15s",
                      zIndex: 3,
                    }}
                    onClick={() => !isTaken && handleSeatClick(element.id)}
                  >
                    <Stack align="center" justify="center" gap={2} h="100%">
                      <Text size="xs" fw="bold" c={occupant ? "red" : "dimmed"} lh={1}>
                        {element.label || element.id}
                      </Text>
                      {occupant ? (
                        <UserAvatar user={occupant.user} size={32} />
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
            }

            // Static/decorative room elements
            let bg = "var(--mantine-color-gray-1)";
            let border = "1px solid var(--mantine-color-gray-3)";
            let borderRadius = "md";
            let icon = null;
            let textColor = "var(--mantine-color-text)";

            switch (element.type) {
              case "COLUMN":
                bg = "var(--mantine-color-gray-5)";
                border = "2px solid var(--mantine-color-gray-7)";
                borderRadius = "50%";
                break;
              case "FRIDGE":
                bg = "var(--mantine-color-cyan-0)";
                border = "2px solid var(--mantine-color-cyan-2)";
                borderRadius = "sm";
                icon = <IconSnowflake size={18} style={{ color: "var(--mantine-color-cyan-6)" }} />;
                break;
              case "ENTRANCE":
                bg = "var(--mantine-color-green-0)";
                border = "2px dashed var(--mantine-color-green-3)";
                borderRadius = "sm";
                icon = <IconDoorEnter size={18} style={{ color: "var(--mantine-color-green-6)" }} />;
                break;
              case "EXIT":
                bg = "var(--mantine-color-red-0)";
                border = "2px dashed var(--mantine-color-red-3)";
                borderRadius = "sm";
                icon = <IconDoorExit size={18} style={{ color: "var(--mantine-color-red-6)" }} />;
                break;
              case "COUCH":
                bg = "var(--mantine-color-grape-0)";
                border = "2px solid var(--mantine-color-grape-2)";
                borderRadius = "md";
                icon = <IconArmchair size={18} style={{ color: "var(--mantine-color-grape-6)" }} />;
                break;
              case "DOOR":
                bg = "var(--mantine-color-gray-2)";
                border = "2px solid var(--mantine-color-gray-4)";
                borderRadius = "none";
                icon = <IconDoor size={18} style={{ color: "var(--mantine-color-gray-6)" }} />;
                break;
              default:
                break;
            }

            return (
              <Tooltip key={element.id} label={element.label || element.type} withArrow>
                <Box
                  style={{
                    position: "absolute",
                    left,
                    top,
                    width,
                    height,
                    backgroundColor: bg,
                    border,
                    borderRadius,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 4,
                    zIndex: 2,
                  }}
                >
                  {icon}
                  {element.label && element.type !== "COLUMN" && (
                    <Text
                      size="xs"
                      fw="bold"
                      c={textColor}
                      style={{
                        textAlign: "center",
                        lineHeight: 1.1,
                        marginTop: icon ? 2 : 0,
                        fontSize: "11px",
                      }}
                    >
                      {element.label}
                    </Text>
                  )}
                </Box>
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
              backgroundColor: "var(--mantine-color-body)",
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
      </Group>
    </Card>
  );
}
