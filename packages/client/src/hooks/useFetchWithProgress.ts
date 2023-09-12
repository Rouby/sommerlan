import { useCallback, useState } from "react";

export function useFetchWithProgress() {
  const [progress, setProgress] = useState(0);

  const fetch = useCallback(
    (req: URL | RequestInfo, init?: RequestInit | undefined) => {
      return new Promise<Response>((resolve, reject) => {
        const url = req instanceof Request ? req.url : req.toString();

        const xhr = new XMLHttpRequest();
        xhr.open(init?.method ?? "GET", url);
        xhr.onload = () => {
          resolve(
            new Response(xhr.responseText, {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: new Headers(
                xhr
                  .getAllResponseHeaders()
                  .split("\n")
                  .map((header) => {
                    const [name, value] = header.split(": ");
                    return [name?.trim(), value?.trim()] as [string, string];
                  })
                  .filter(([name]) => name)
              ),
            })
          );
        };
        xhr.onerror = () => {
          reject(new TypeError("Network request failed"));
        };
        xhr.withCredentials = init?.credentials === "include";
        if (xhr.upload) {
          xhr.upload.onprogress = (event) => {
            setProgress(event.loaded / event.total);
          };
        }

        for (const [name, value] of Object.entries(init?.headers ?? {})) {
          xhr.setRequestHeader(name, value as string);
        }

        xhr.send(init?.body as any);
      });
    },
    []
  );

  return [progress, fetch] as const;
}
