import { Group, LoadingOverlay, Stack, Text } from "@mantine/core";
import { useAtomValue } from "jotai";
import { useEffect, useMemo } from "react";
import { useQRCodeScanner } from "../hooks";
import { tokenAtom } from "../state";
import { trpc } from "../utils";
import { QRCode } from "./QRCode";

export function AuthorizeOtherDevice({
  active,
  onClose,
}: {
  active: boolean;
  onClose: () => void;
}) {
  const canScanQRCodes = "BarcodeDetector" in window;

  if (canScanQRCodes) {
    return <ScanQRCode active={active} onClose={onClose} />;
  }

  return <ProvideQRCode />;
}

function ProvideQRCode() {
  const token = useAtomValue(tokenAtom);
  const data = useMemo(
    () => ({ __$app: "SommerLAN", token }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [token?.split(".")[0]]
  );

  return (
    <Stack align="center">
      <Text>
        Scanne diesen Code mit einem Gerät mit dem du dich einloggen möchtest
      </Text>

      <QRCode data={data} />
    </Stack>
  );
}

function ScanQRCode({
  active,
  onClose,
}: {
  active: boolean;
  onClose: () => void;
}) {
  const { video, startScanning, stopScanning, data } = useQRCodeScanner();

  useEffect(() => {
    if (active) {
      startScanning();
    } else {
      stopScanning();
    }
  }, [active, startScanning, stopScanning]);

  const { mutateAsync: authorizeRequest, isLoading } =
    trpc.auth.authorizeLoginRequest.useMutation();

  useEffect(() => {
    if (data && typeof data.requestId === "string") {
      stopScanning();
      authorizeRequest({ requestId: data.requestId }).then(() => {
        onClose();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorizeRequest, data]);

  return (
    <Group position="center">
      <LoadingOverlay visible={isLoading} />

      <Text>
        Scanne diesen Code mit einem Gerät auf dem du bereits eingeloggt bist
      </Text>

      <video ref={video} width={300} />
    </Group>
  );
}
