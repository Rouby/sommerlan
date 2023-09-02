import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/router";
import { httpBatchLink } from "@trpc/client";
import { devtoolsExchange } from "@urql/devtools";
import { authExchange } from "@urql/exchange-auth";
import { Entity, Link, cacheExchange } from "@urql/exchange-graphcache";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";
import minMax from "dayjs/plugin/minMax";
import relativeTime from "dayjs/plugin/relativeTime";
import weekday from "dayjs/plugin/weekday";
import { Provider, useAtom, useAtomValue } from "jotai";
import jwtDecode from "jwt-decode";
import { useMemo, useRef } from "react";
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

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
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
  const authState = useRef({ token, refreshToken });
  authState.current = { token, refreshToken };

  const gqlClient = useMemo(
    () =>
      new Client({
        url: "/graphql",
        exchanges: [
          devtoolsExchange,
          cacheExchange({
            schema,
            keys: {
              AuthResponse: () => null,
            },
            resolvers: {
              Query: {
                party: (_, { id }) => {
                  return { __typename: "Party", id };
                },
              },
            },
            updates: {
              Mutation: {
                register: (result, _args, cache) => {
                  if (
                    typeof result.register === "object" &&
                    result.register &&
                    "user" in result.register &&
                    result.register?.user
                  ) {
                    const users = cache.resolve("Query", "users");
                    if (Array.isArray(users)) {
                      users.push(result.register.user);
                      cache.link("Query", "users", users as any[]);
                    }
                  }
                },
                registerPasskey: (result, args, cache, _info) => {
                  if (
                    typeof result.registerPasskey === "object" &&
                    result.registerPasskey &&
                    "device" in result.registerPasskey &&
                    result.registerPasskey?.device
                  ) {
                    const devices = cache.resolve(
                      { __typename: "User", id: `${args.userId}` },
                      "devices"
                    ) as unknown[];
                    cache.link(
                      { __typename: "User", id: `${args.userId}` },
                      "devices",
                      [...devices, result.registerPasskey.device]
                    );
                  }
                },
                addGameToParty: (result, _args, cache, _info) => {
                  if (
                    typeof result.addGameToParty === "object" &&
                    result.addGameToParty &&
                    "game" in result.addGameToParty &&
                    result.addGameToParty?.game
                  ) {
                    const games = cache.resolve("Query", "games");
                    if (Array.isArray(games)) {
                      games.push(result.addGameToParty.game);
                      cache.link("Query", "games", games as Link<Entity>);
                    }
                  }
                },
              },
            },
            optimistic: {
              setAttendance: (args, _cache, info) => {
                return {
                  __typename: "Party",
                  attendings: [
                    {
                      __typename: "Attending",
                      id: info.variables.attendingId,
                      dates: args.dates,
                    },
                  ],
                };
              },
              setGamesPlayed: (args, _cache, info) => {
                return {
                  __typename: "Attending",
                  id: info.variables.attendingId,
                  gamesPlayed: (args.gameIds as string[]).map((id) => ({
                    __typename: "Game",
                    id,
                  })),
                };
              },
            },
          }),
          authExchange(async (utils) => {
            return {
              addAuthToOperation(operation) {
                if (
                  !authState.current.token ||
                  isOperationWithoutAuth(operation)
                ) {
                  return operation;
                }
                return utils.appendHeaders(operation, {
                  Authorization: `Bearer ${authState.current.token}`,
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
                if (authState.current.refreshToken) {
                  const result = await utils.mutate(
                    graphql(`
                      mutation refreshLogin($refreshToken: String!) {
                        refreshLogin(refreshToken: $refreshToken) {
                          token
                          refreshToken
                        }
                      }
                    `),
                    { refreshToken: authState.current.refreshToken }
                  );

                  if (result.data?.refreshLogin) {
                    setToken(result.data.refreshLogin.token);
                    setRefreshToken(result.data.refreshLogin.refreshToken);

                    authState.current = result.data.refreshLogin;

                    return;
                  }
                }

                logout();
              },
              willAuthError(operation) {
                if (isOperationWithoutAuth(operation)) {
                  return false;
                }

                try {
                  const decoded = jwtDecode(authState.current.token!) as {
                    exp: number;
                  };

                  return dayjs()
                    .add(1, "minute")
                    .isAfter(dayjs.unix(decoded.exp));
                } catch {}

                return false;
              },
            };

            function logout() {
              setToken(null);
              setRefreshToken(null);

              authState.current = { token: null, refreshToken: null };
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
        requestPolicy: "cache-and-network",
      }),
    []
  );

  return <UrqlProvider value={gqlClient}>{children}</UrqlProvider>;
}
