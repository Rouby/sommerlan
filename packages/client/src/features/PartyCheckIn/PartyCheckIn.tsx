import { Card, Center, Group, Loader, Stack, Text } from "@mantine/core";
import { IconBed, IconCheck } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { useQuery } from "urql";
import { QRCode } from "../../components/QRCode";
import { graphql } from "../../gql";
import { RoomStatus } from "../../gql/graphql";
import { userAtom } from "../../state";
import { formatRange } from "../../utils";

export function PartyCheckIn() {
  const user = useAtomValue(userAtom);

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query checkInDate {
        nextParty {
          id
          attendings {
            id
            user {
              id
            }
            dates
            checkIn
            checkOut
            room
          }
        }
      }
    `),
  });

  if (fetching || !data?.nextParty) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  const myAttending = data.nextParty.attendings.find(
    (attending) => attending.user.id === user?.id,
  );

  if (!myAttending) {
    return <>Du nimmst nicht an der naechsten Party teil :(</>;
  }

  return (
    <>
      <Card>
        <Group justify="space-between" align="start">
          <Stack>
            <div>
              <Text fw="bold">Dein gebuchter Zeitraum:</Text>{" "}
              {formatRange(
                dayjs(myAttending.dates.at(0)).toDate(),
                dayjs(myAttending.dates.at(-1)).toDate(),
              )}
            </div>
            {myAttending.room === RoomStatus.Granted && (
              <Group>
                <IconBed /> Du hast einen Raum gebucht
              </Group>
            )}
            {!myAttending.checkOut && myAttending.checkIn ? (
              <Group>
                <IconCheck color="green" />
                <Text fs="italic">Checked in</Text>
              </Group>
            ) : (
              <div>Lass den QR Code beim Check-In scannen!</div>
            )}
          </Stack>

          <QRCode
            data={{
              __type: "SommerLAN-CheckIn",
              id: user?.id,
              displayName: user?.displayName,
              checkIn: myAttending.checkIn,
              checkOut: myAttending.checkOut,
              room: myAttending.room,
            }}
          />
        </Group>
      </Card>
    </>
  );
}
