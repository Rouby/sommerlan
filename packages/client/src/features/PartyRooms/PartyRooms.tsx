import { Box, Button } from "@mantine/core";
import { IconCheck, IconHourglassLow } from "@tabler/icons-react";
import { useAtomValue } from "jotai";
import { useMutation, useQuery } from "urql";
import { Can, UserAvatar } from "../../components";
import { graphql } from "../../gql";
import { userAtom } from "../../state";

export function PartyRooms() {
  const user = useAtomValue(userAtom)!;

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query nextPartyRooms {
        nextParty {
          id
          roomsAvailable
          attendings {
            id
            room
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

  const { nextParty } = data ?? {};

  const myAttending = nextParty?.attendings.find(
    (attending) => attending.user.id === user.id,
  );

  const [{ fetching: requesting }, requestRoom] = useMutation(
    graphql(`
      mutation requestRoom($partyId: ID!) {
        requestRoom(partyId: $partyId) {
          id
          dates
          room
          user {
            id
            displayName
            avatar
          }
        }
      }
    `),
  );
  const [{ fetching: recinding }, recindRoom] = useMutation(
    graphql(`
      mutation recindRoom($partyId: ID!) {
        recindRoom(partyId: $partyId) {
          id
          dates
          room
          user {
            id
            displayName
            avatar
          }
        }
      }
    `),
  );

  const isRequestingRoom = myAttending?.room === "REQUESTED";
  const isGrantedRoom = myAttending?.room === "GRANTED";

  if (!nextParty?.roomsAvailable) return null;

  return (
    <>
      <Button
        loading={fetching || requesting || recinding}
        variant={!isGrantedRoom ? "light" : "filled"}
        color={isGrantedRoom ? "green" : "blue"}
        fullWidth
        mt="md"
        radius="md"
        leftSection={
          isGrantedRoom ? (
            <IconCheck />
          ) : isRequestingRoom ? (
            <IconHourglassLow />
          ) : undefined
        }
        onClick={() =>
          (!myAttending?.room ? requestRoom : recindRoom)({
            partyId: nextParty.id,
          })
        }
      >
        {isGrantedRoom
          ? "Du hast einen Raum gebucht, Buchung stornieren?"
          : "Ich würde gerne einen Raum haben"}
      </Button>

      <Can I="grantRoom" an="Attending">
        {nextParty.attendings
          .filter((attending) => attending.room === "REQUESTED")
          .map((attending) => (
            <RoomRequest
              key={attending.id}
              attendingId={attending.id}
              user={attending.user}
            />
          ))}
      </Can>
    </>
  );
}

function RoomRequest({
  attendingId,
  user,
}: {
  attendingId: string;
  user: { id: string; displayName: string; avatar: string };
}) {
  const [{ fetching: granting }, grantRoom] = useMutation(
    graphql(`
      mutation grantRoom($attendingId: ID!) {
        grantRoom(attendingId: $attendingId) {
          id
          room
        }
      }
    `),
  );
  const [{ fetching: denying }, denyRoom] = useMutation(
    graphql(`
      mutation denyRoom($attendingId: ID!) {
        denyRoom(attendingId: $attendingId) {
          id
          room
        }
      }
    `),
  );

  return (
    <Box
      m="sm"
      style={{
        display: "grid",
        gridTemplateColumns: "max-content max-content auto auto",
        gap: "var(--mantine-spacing-sm)",
        alignItems: "center",
      }}
    >
      <UserAvatar user={user} />
      {user.displayName} will einen Raum
      <Button
        loading={granting}
        onClick={() => grantRoom({ attendingId })}
        disabled={denying}
      >
        Ok
      </Button>
      <Button
        loading={denying}
        onClick={() => denyRoom({ attendingId })}
        disabled={granting}
      >
        Ablehnen
      </Button>
    </Box>
  );
}
