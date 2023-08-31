import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/router";
import { createWSClient, httpBatchLink, splitLink, wsLink } from "@trpc/client";
import { devtoolsExchange } from "@urql/devtools";
import { authExchange } from "@urql/exchange-auth";
import { cacheExchange } from "@urql/exchange-graphcache";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";
import minMax from "dayjs/plugin/minMax";
import relativeTime from "dayjs/plugin/relativeTime";
import weekday from "dayjs/plugin/weekday";
import { Provider, useAtomValue } from "jotai";
import { Client, Provider as UrqlProvider, fetchExchange } from "urql";
import { locales } from "./dayjs/locales";
import schema from "./gql/introspection.json";
import { router } from "./router";
import { colorSchemeAtom } from "./state";
import { trpc } from "./utils";

dayjs.extend(duration);
dayjs.extend(localizedFormat);
dayjs.extend(minMax);
dayjs.extend(relativeTime);
dayjs.extend(weekday);

locales[navigator.language.split("-")[0]]?.().then(() =>
  dayjs.locale(navigator.language)
);

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

const gqlClient = new Client({
  url: "/graphql",
  exchanges: [
    devtoolsExchange,
    cacheExchange({
      schema,
      resolvers: {
        Query: {
          party: (_, { id }) => {
            return { __typename: "Party", id };
          },
        },
      },
    }),
    authExchange(async (utils) => {
      let token: string | undefined;
      try {
        token = JSON.parse(localStorage.getItem("token") ?? "");
      } catch {
        //
      }

      return {
        addAuthToOperation(operation) {
          if (!token) return operation;
          return utils.appendHeaders(operation, {
            Authorization: `Bearer ${token}`,
          });
        },
        didAuthError(error, _operation) {
          return error.graphQLErrors.some(
            (e) => e.extensions?.code === "FORBIDDEN"
          );
        },
        async refreshAuth() {
          // logout();
        },
      };
    }),
    fetchExchange,
  ],
  requestPolicy: "cache-first",
});

export function App() {
  const colorScheme = useAtomValue(colorSchemeAtom);

  return (
    <UrqlProvider value={gqlClient}>
      <Provider>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{ colorScheme }}
            >
              <DatesProvider
                settings={{
                  locale: navigator.language,
                }}
              >
                <RouterProvider router={router} />
              </DatesProvider>
            </MantineProvider>
          </QueryClientProvider>
        </trpc.Provider>
      </Provider>
    </UrqlProvider>
  );
}
