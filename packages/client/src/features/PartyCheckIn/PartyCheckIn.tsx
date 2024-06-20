import { Card, Center, Group, Loader, Stack, Text } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { IconBed, IconCheck } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useQuery } from "urql";
import { QRCode } from "../../components/QRCode";
import { graphql } from "../../gql";
import { RoomStatus } from "../../gql/graphql";
import { userAtom } from "../../state";
import { formatRange } from "../../utils";

export function PartyCheckIn() {
  const user = useAtomValue(userAtom);

  const [{ data, fetching }, refetch] = useQuery({
    query: graphql(`
      query checkInDate {
        nextParty {
          id
          attending {
            id
            dates
            checkIn
            checkOut
            room
          }
        }
      }
    `),
  });

  const { start, stop } = useInterval(() => {
    refetch();
  }, 1000);

  useEffect(() => {
    start();
    return () => stop();
  }, []);

  if (fetching || !data?.nextParty) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (!data.nextParty.attending) {
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
                dayjs(data.nextParty.attending.dates.at(0)).toDate(),
                dayjs(data.nextParty.attending.dates.at(-1)).toDate(),
              )}
            </div>
            {data.nextParty.attending.room === RoomStatus.Granted && (
              <Group>
                <IconBed /> Du hast einen Raum gebucht
              </Group>
            )}
            {!data.nextParty.attending.checkOut &&
            data.nextParty.attending.checkIn ? (
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
              checkIn: data.nextParty.attending.checkIn,
              checkOut: data.nextParty.attending.checkOut,
              room: data.nextParty.attending.room,
            }}
          />
        </Group>
      </Card>
    </>
  );
}
