import { Outlet, useNavigate, useSearch } from "@tanstack/router";
import { TRPCClientError } from "@trpc/client";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import { authRoute } from "./router";
import { authenticatedAtom, tokenAtom } from "./state";
import { trpc } from "./utils";

export function Authenticate() {
  const [token, setToken] = useAtom(tokenAtom);
  const setAuthenticated = useSetAtom(authenticatedAtom);
  const { data: newToken, error } = trpc.auth.validateToken.useQuery(
    token?.split(".")[0],
    {
      enabled: !!token,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const { auth } = useSearch({ from: authRoute.id });
  const navigate = useNavigate();
  const { mutateAsync: loginWithMagicLink } =
    trpc.auth.loginWithMagicLink.useMutation();
  useEffect(() => {
    if (auth) {
      loginWithMagicLink({ magicLinkId: auth }).then((token) => {
        setToken(token);
        navigate({ search: undefined });
      });
    }
  }, [auth, loginWithMagicLink, navigate, setToken]);

  useEffect(() => {
    if (
      error instanceof TRPCClientError &&
      error.data.code === "UNAUTHORIZED"
    ) {
      setAuthenticated(false);
      // clear token?
    } else if (newToken) {
      setToken(newToken);
    }
  }, [newToken, error, setAuthenticated, setToken]);

  return <Outlet />;
}
