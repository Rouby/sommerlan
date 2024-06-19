import { Group } from "@mantine/core";
import { useEffect } from "react";
import { UserAvatar } from "../../components";
import { useQRCodeScanner } from "../../hooks";

export function UserCheckIn() {
  const { startScanning, stopScanning, video, data, error } =
    useQRCodeScanner();

  useEffect(() => {
    startScanning();

    return () => {
      stopScanning();
    };
  }, []);

  const scannedUser =
    data && data.__type === "SommerLAN-CheckIn"
      ? {
          id: data.id as string,
          displayName: data.displayName as string,
          avatar: data.avatar as string,
        }
      : null;

  return (
    <>
      {error ? <div>{error}</div> : <video ref={video} />}
      {scannedUser && (
        <Group>
          <UserAvatar user={scannedUser} />
          {scannedUser.displayName}
        </Group>
      )}
    </>
  );
}
