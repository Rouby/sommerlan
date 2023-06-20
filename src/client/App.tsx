import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWSClient, httpBatchLink, wsLink } from "@trpc/client";
import { useState } from "react";
import { LoginFlow } from "./components";
import { trpc } from "./utils";

const wsClient = createWSClient({
  url: import.meta.env.DEV
    ? "ws://localhost:2022/trpc"
    : `wss://${location.host}/trpc`,
});

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: import.meta.env.DEV ? "http://localhost:2022/trpc" : "/trpc",
          async headers() {
            return {
              // authorization: getAuthCookie(),
            };
          },
        }),
        wsLink({
          client: wsClient,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <LoginFlow />
        </MantineProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
