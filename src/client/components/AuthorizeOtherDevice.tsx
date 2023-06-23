import { Group } from "@mantine/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { trpc } from "../utils";

export function AuthorizeOtherDevice({
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

  const { mutateAsync: authorizeRequest } =
    trpc.auth.authorizeLoginRequest.useMutation();

  useEffect(() => {
    if (data && typeof data.requestId === "string") {
      authorizeRequest({ requestId: data.requestId }).then(() => {
        stopScanning();
        onClose();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorizeRequest, data]);

  return (
    <Group position="center">
      Scan QR code on another device to accept sign in request.
      <video ref={video} width={300} />
    </Group>
  );
}

function useQRCodeScanner() {
  const video = useRef<HTMLVideoElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [data, setData] = useState<Record<string, unknown> | null>(null);

  const startScanning = useCallback(() => {
    setData(null);

    const barcodeDetector = new BarcodeDetector({ formats: ["qr_code"] });

    const scan = async () => {
      if (video.current) {
        const [code] = await barcodeDetector.detect(video.current);

        if (code) {
          try {
            const data = JSON.parse(code.rawValue);

            if (data.__$app === "SommerLAN") {
              video.current.pause();
              video.current.srcObject = null;
              stream.current?.getTracks().forEach((track) => track.stop());
              setIsScanning(false);
              setData(data);
              return;
            }
          } catch {
            // ignore
          }
        }
      }

      requestAnimationFrame(scan);
    };

    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: { exact: "environment" } },
      })
      .then((media) => {
        stream.current = media;
        if (video.current) {
          video.current.srcObject = media;
          video.current.play().then(() => {
            setIsScanning(true);
            scan();
          });
        } else {
          stream.current.getTracks().forEach((track) => track.stop());
        }
      });
  }, []);

  const stopScanning = useCallback(() => {
    if (video.current) {
      video.current.pause();
      video.current.srcObject = null;
    }
    stream.current?.getTracks().forEach((track) => track.stop());
    setIsScanning(false);
  }, []);

  return { video, startScanning, stopScanning, isScanning, data };
}

declare global {
  interface BarcodeDetectorOptions {
    formats: string[];
  }

  interface Barcode {
    rawValue: string;
  }

  class BarcodeDetector {
    constructor(options?: BarcodeDetectorOptions);

    detect(image: HTMLImageElement | HTMLVideoElement): Promise<Barcode[]>;
  }
}
