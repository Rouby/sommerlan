import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/router";
import { createWSClient, httpBatchLink, splitLink, wsLink } from "@trpc/client";
import { Provider, useAtomValue } from "jotai";
import { router } from "./router";
import { colorSchemeAtom } from "./state";
import { trpc } from "./utils";

const wsClient = createWSClient({
  url: import.meta.env.DEV
    ? "ws://localhost:2022/trpc"
    : `wss://${location.host}/trpc`,
});

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
  links: [
    splitLink({
      condition: (op) => op.type === "subscription",
      true: wsLink({
        client: wsClient,
      }),
      false: httpBatchLink({
        url: import.meta.env.DEV ? "http://localhost:2022/trpc" : "/trpc",
        async headers() {
          let token;
          try {
            token = JSON.parse(localStorage.getItem("token") ?? "");
          } catch {
            //
          }
          return {
            Authorization: token ? `Bearer ${token}` : undefined,
          };
        },
      }),
    }),
  ],
});

export function App() {
  const colorScheme = useAtomValue(colorSchemeAtom);

  return (
    <Provider>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ colorScheme }}
          >
            <RouterProvider router={router} />
          </MantineProvider>
        </QueryClientProvider>{" "}
      </trpc.Provider>
    </Provider>
  );
}
