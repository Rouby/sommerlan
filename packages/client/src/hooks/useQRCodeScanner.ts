import { useCallback, useRef, useState } from "react";

export function useQRCodeScanner() {
  const video = useRef<HTMLVideoElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const isScanning = useRef(false);
  const [data, setData] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string>();

  const startScanning = useCallback(() => {
    if ("BarcodeDetector" in window === false) {
      setError("BarcodeDetector not supported");
      return;
    }

    if (isScanning.current) {
      return;
    }

    isScanning.current = true;

    setData(null);

    const barcodeDetector = new BarcodeDetector({ formats: ["qr_code"] });

    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: { exact: "environment" } },
      })
      .then((media) => {
        stream.current = media;
        if (video.current) {
          video.current.srcObject = media;
          video.current.play().then(scan);
        } else {
          stream.current.getTracks().forEach((track) => track.stop());
        }
      });

    async function scan() {
      if (video.current) {
        const [code] = await barcodeDetector.detect(video.current);

        if (code) {
          try {
            const data = JSON.parse(code.rawValue);

            if (data.__$app === "SommerLAN") {
              video.current.pause();
              stream.current?.getTracks().forEach((track) => track.stop());
              video.current.srcObject = null;
              isScanning.current = false;
              setData(data);
              return;
            }
          } catch {
            // ignore
          }
        }
      }

      requestAnimationFrame(scan);
    }
  }, []);

  const stopScanning = useCallback(() => {
    if (video.current) {
      video.current.pause();
      video.current.srcObject = null;
    }
    stream.current?.getTracks().forEach((track) => track.stop());
    isScanning.current = false;
  }, []);

  return { video, startScanning, stopScanning, data, error };
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
