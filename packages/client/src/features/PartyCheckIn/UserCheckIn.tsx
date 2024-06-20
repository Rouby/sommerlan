import { Button, Group, Image } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useEffect } from "react";
import { useMutation, useQuery } from "urql";
import { UserAvatar } from "../../components";
import { graphql } from "../../gql";
import { useQRCodeScanner } from "../../hooks";

export function UserCheckIn() {
  const { startScanning, stopScanning, video, data, error } =
    useQRCodeScanner();

  useEffect(() => {
    if (video.current) {
      startScanning();

      return () => {
        stopScanning();
      };
    }
  }, []);

  const scannedUser =
    data && data.__type === "SommerLAN-CheckIn"
      ? {
          id: data.id as string,
          displayName: data.displayName as string,
          avatar: data.avatar as string,
        }
      : null;

  const [{ fetching }, checkIn] = useMutation(
    graphql(`
      mutation checkIn($userId: ID!) {
        checkIn(userId: $userId) {
          id
          checkIn
          checkOut
        }
      }
    `),
  );
  const [{ fetching: fetchingCheckOut }, checkOut] = useMutation(
    graphql(`
      mutation checkOut($userId: ID!) {
        checkOut(userId: $userId) {
          id
          checkIn
          checkOut
        }
      }
    `),
  );

  const [{ data: scannedUserData }] = useQuery({
    query: graphql(`
      query checkInDateOfUser($userId: ID!) {
        nextParty {
          id
          attending(userId: $userId) {
            id
            dates
            checkIn
            checkOut
            room
          }
        }
      }
    `),
    variables: {
      userId: scannedUser?.id ?? "",
    },
    pause: !scannedUser,
  });

  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <Image component="video" ref={video} radius="md" />
      )}
      {scannedUser && (
        <Group mt="md">
          <UserAvatar user={scannedUser} />
          {scannedUser.displayName}
          <Button
            loading={fetching}
            leftSection={
              scannedUserData?.nextParty?.attending?.checkIn ? (
                <IconCheck />
              ) : null
            }
            disabled={!!scannedUserData?.nextParty?.attending?.checkIn}
            onClick={() => checkIn({ userId: scannedUser.id })}
          >
            Check in
          </Button>

          <Button
            loading={fetchingCheckOut}
            leftSection={
              scannedUserData?.nextParty?.attending?.checkOut ? (
                <IconCheck />
              ) : null
            }
            disabled={!scannedUserData?.nextParty?.attending?.checkIn}
            onClick={() => checkOut({ userId: scannedUser.id })}
          >
            Check out
          </Button>
        </Group>
      )}
    </>
  );
}
