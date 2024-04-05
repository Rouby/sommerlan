import { useQuery } from "@tanstack/react-query";
import { toDataURL } from "qrcode";

export function QRCode({ data }: { data: unknown }) {
  const { data: src } = useQuery(
    ["qrcode", data],
    ({ queryKey: [, data] }) => toDataURL(JSON.stringify(data)),
    { refetchOnWindowFocus: false, staleTime: Infinity },
  );

  return <img src={src} />;
}
