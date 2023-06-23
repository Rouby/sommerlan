import { Outlet } from "@tanstack/router";
import { TRPCClientError } from "@trpc/client";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import { authenticatedAtom, tokenAtom } from "./state";
import { trpc } from "./utils";

export function Authenticate() {
  const [token, setToken] = useAtom(tokenAtom);
  const setAuthenticated = useSetAtom(authenticatedAtom);
  const { data: newToken, error } = trpc.auth.validateToken.useQuery(void 0, {
    enabled: !!token,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

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
  }, [newToken, error, setAuthenticated, token, setToken]);

  return <Outlet />;
}
