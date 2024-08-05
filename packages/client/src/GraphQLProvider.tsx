import { notifications } from "@mantine/notifications";
import { type JWTPayload } from "@sommerlan-app/server/src/signToken";
import { devtoolsExchange } from "@urql/devtools";
import { authExchange } from "@urql/exchange-auth";
import { cacheExchange, Data, Entity, Link } from "@urql/exchange-graphcache";
import dayjs from "dayjs";
import { useAtom, useAtomValue } from "jotai";
import jwtDecode from "jwt-decode";
import { useMemo, useRef } from "react";
import {
  Client,
  fetchExchange,
  Operation,
  Provider as UrqlProvider,
} from "urql";
import { graphql } from "./gql";
import schema from "./gql/introspection.json" assert { type: "json" };
import { refreshTokenAtom, tokenAtom, userAtom } from "./state";

export function GraphQLProvider({ children }: { children: React.ReactNode }) {
  const user = useAtomValue(userAtom);
  const [token, setToken] = useAtom(tokenAtom);
  const [refreshToken, setRefreshToken] = useAtom(refreshTokenAtom);
  const authState = useRef({ token, refreshToken });
  authState.current = { token, refreshToken };

  const gqlClient = useMemo(
    () =>
      new Client({
        url: "/graphql",
        fetchOptions: () => {
          return {
            headers: {
              "x-fake-api": localStorage.getItem("transactionKey") ?? "",
            },
          };
        },
        exchanges: [
          devtoolsExchange,
          cacheExchange({
            schema,
            keys: {
              AuthResponse: () => null,
              PictureMeta: () => null,
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
                      "devices",
                    ) as unknown[];
                    cache.link(
                      { __typename: "User", id: `${args.userId}` },
                      "devices",
                      [...devices, result.registerPasskey.device],
                    );
                  }
                },
                planEvent: (result, args, cache, _info) => {
                  if (
                    typeof result.planEvent === "object" &&
                    result.planEvent &&
                    typeof args.input === "object" &&
                    args.input &&
                    "partyId" in args.input
                  ) {
                    const events = cache.resolve(
                      { __typename: "Party", id: args.input.partyId },
                      "events",
                    );
                    if (Array.isArray(events)) {
                      events.push(result.planEvent as Data);
                      cache.link(
                        { __typename: "Party", id: args.input.partyId },
                        "events",
                        events as Link<Entity>,
                      );
                    }
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
                addPicture: (result, _args, cache, _info) => {
                  if (
                    typeof result.addPicture === "object" &&
                    result.addPicture &&
                    "party" in result.addPicture &&
                    result.addPicture?.party
                  ) {
                    const pictures = cache.resolve(
                      { __typename: "Party", id: result.addPicture.party.id },
                      "pictures",
                    );
                    if (Array.isArray(pictures)) {
                      pictures.push(result.addPicture as Data);
                      cache.link(
                        { __typename: "Party", id: result.addPicture.party.id },
                        "pictures",
                        pictures as Link<Entity>,
                      );
                    }
                  }
                },
                donate: (result, _args, cache, _info) => {
                  if (
                    typeof result.donate === "object" &&
                    result.donate &&
                    "party" in result.donate &&
                    result.donate?.party
                  ) {
                    const donations = cache.resolve(
                      { __typename: "Party", id: result.donate.party.id },
                      "donations",
                    );
                    if (Array.isArray(donations)) {
                      donations.push(result.donate as Data);
                      cache.link(
                        { __typename: "Party", id: result.donate.party.id },
                        "donations",
                        donations as Link<Entity>,
                      );
                    }
                  }
                },
                rescindDonation: (result, _args, cache, _info) => {
                  if (
                    typeof result.rescindDonation === "object" &&
                    result.rescindDonation &&
                    "party" in result.rescindDonation &&
                    result.rescindDonation?.party
                  ) {
                    const donations = cache.resolve(
                      {
                        __typename: "Party",
                        id: result.rescindDonation.party.id,
                      },
                      "donations",
                    );
                    if (Array.isArray(donations)) {
                      console.log();
                      cache.link(
                        {
                          __typename: "Party",
                          id: result.rescindDonation.party.id,
                        },
                        "donations",
                        donations.filter(
                          (donation) =>
                            donation.split(":")[1] !==
                            (result.rescindDonation as Data).id,
                        ) as Link<Entity>,
                      );
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

                  if (code === "UNAUTHORIZED") {
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
                          __typename
                          token
                          refreshToken
                        }
                      }
                    `),
                    { refreshToken: authState.current.refreshToken },
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
                  const decoded = jwtDecode(
                    authState.current.token!,
                  ) as JWTPayload & { exp: number };

                  const willSoonExpire = dayjs()
                    .add(1, "minute")
                    .isAfter(dayjs.unix(decoded.exp));

                  const isOldVersion = decoded.__version !== 3;

                  return willSoonExpire || isOldVersion;
                } catch {
                  return true;
                }
              },
            };

            function logout() {
              setToken(null);
              setRefreshToken(null);

              authState.current = { token: null, refreshToken: null };

              notifications.show({
                title: "Authentifizierung",
                message:
                  "Deine Sitzung ist abgelaufen. Bitte melde dich erneut an.",
                color: "red",
              });
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
                        "loginMagicLink",
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
          // mergeQueryExchange(),
          fetchExchange,
        ],
        requestPolicy: "cache-and-network",
      }),
    [user?.id],
  );

  return <UrqlProvider value={gqlClient}>{children}</UrqlProvider>;
}
