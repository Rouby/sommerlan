import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/router";
import { createWSClient, httpBatchLink, splitLink, wsLink } from "@trpc/client";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { Provider, useAtomValue } from "jotai";
import { router } from "./router";
import { colorSchemeAtom } from "./state";
import { trpc } from "./utils";

dayjs.extend(LocalizedFormat);

const wsClient = createWSClient({
  url: `ws${location.protocol === "https:" ? "s" : ""}://${location.host}/trpc`,
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
        url: "/trpc",
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