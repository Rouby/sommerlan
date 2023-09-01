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
import { Provider, useAtom, useAtomValue } from "jotai";
import jwtDecode from "jwt-decode";
import { useMemo } from "react";
import {
  Client,
  Operation,
  Provider as UrqlProvider,
  fetchExchange,
} from "urql";
import { locales } from "./dayjs/locales";
import { graphql } from "./gql";
import schema from "./gql/introspection.json";
import { router } from "./router";
import { colorSchemeAtom, refreshTokenAtom, tokenAtom } from "./state";
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

export function App() {
  const colorScheme = useAtomValue(colorSchemeAtom);

  return (
    <Provider>
      <Urql>
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
      </Urql>
    </Provider>
  );
}

function Urql({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useAtom(tokenAtom);
  const [refreshToken, setRefreshToken] = useAtom(refreshTokenAtom);

  const gqlClient = useMemo(
    () =>
      new Client({
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
            return {
              addAuthToOperation(operation) {
                if (!token || isOperationWithoutAuth(operation))
                  return operation;
                return utils.appendHeaders(operation, {
                  Authorization: `Bearer ${token}`,
                });
              },
              didAuthError(error, _operation) {
                return error.graphQLErrors.some((e) => {
                  const { code, http } = e.extensions ?? {};

                  if (code === "UNAUTHENTICATED") {
                    return true;
                  }
                  if (code === "FORBIDDEN") {
                    return true;
                  }
                  if (
                    typeof http === "object" &&
                    http &&
                    "status" in http &&
                    http?.status === 401
                  ) {
                    return true;
                  }
                });
              },
              async refreshAuth() {
                if (refreshToken) {
                  const result = await utils.mutate(
                    /* GraphQL */ graphql(`
                      mutation refreshLogin($refreshToken: String!) {
                        refreshLogin(refreshToken: $refreshToken) {
                          token
                          refreshToken
                        }
                      }
                    `),
                    { refreshToken }
                  );

                  if (result.data?.refreshLogin) {
                    setToken(result.data.refreshLogin.token);
                    setRefreshToken(result.data.refreshLogin.refreshToken);

                    return;
                  }
                }

                logout();
              },
              willAuthError(operation) {
                if (isOperationWithoutAuth(operation)) {
                  return false;
                } else {
                  try {
                    const decoded = jwtDecode(token!) as { exp: number };

                    return dayjs()
                      .add(1, "minute")
                      .isAfter(dayjs.unix(decoded.exp));
                  } catch {}
                  return false;
                }
              },
            };

            function logout() {
              setToken(null);
              setRefreshToken(null);
            }

            function isOperationWithoutAuth(operation: Operation) {
              return (
                operation.kind === "mutation" &&
                operation.query.definitions.some((definition) => {
                  return (
                    definition.kind === "OperationDefinition" &&
                    definition.selectionSet.selections.some((node) => {
                      const validOps = [
                        "register",
                        "generatePasskeyLoginOptions",
                        "loginPasskey",
                        "loginPassword",
                        "sendMagicLink",
                        "loginWithMagicLink",
                        "refreshLogin",
                      ];
                      return (
                        node.kind === "Field" &&
                        validOps.includes(node.name.value)
                      );
                    })
                  );
                })
              );
            }
          }),
          fetchExchange,
        ],
        requestPolicy: "cache-first",
      }),
    [token, refreshToken]
  );

  return <UrqlProvider value={gqlClient}>{children}</UrqlProvider>;
}
