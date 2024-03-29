import { Outlet, useNavigate, useSearch } from "@tanstack/router";
import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { useMutation } from "urql";
import { graphql } from "./gql";
import { authRoute } from "./router";
import { refreshTokenAtom, tokenAtom } from "./state";

export function Authenticate() {
  const setToken = useSetAtom(tokenAtom);
  const setRefreshToken = useSetAtom(refreshTokenAtom);

  const { auth } = useSearch({ from: authRoute.id });
  const navigate = useNavigate();

  const [, loginMagicLink] = useMutation(
    graphql(`
      mutation loginMagicLink($magicLinkId: String!) {
        loginMagicLink(magicLinkId: $magicLinkId) {
          token
          refreshToken
        }
      }
    `)
  );

  const requestUnderway = useRef(false);
  useEffect(() => {
    if (requestUnderway.current) return;
    if (auth) {
      requestUnderway.current = true;
      loginMagicLink({ magicLinkId: auth }).then(({ data }) => {
        setToken(data?.loginMagicLink?.token ?? null);
        setRefreshToken(data?.loginMagicLink?.refreshToken ?? null);
        navigate({ search: undefined });
      });
    }
  }, [auth]);

  return <Outlet />;
}
