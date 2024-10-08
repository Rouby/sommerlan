import { startAuthentication } from "@simplewebauthn/browser";
import { useQuery } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { CombinedError, useMutation } from "urql";
import { graphql } from "../gql";
import { refreshTokenAtom, tokenAtom } from "../state";

export function usePasskeyAuthFlow() {
  const setToken = useSetAtom(tokenAtom);
  const setRefreshToken = useSetAtom(refreshTokenAtom);

  const [, generateLoginOptions] = useMutation(
    graphql(`
      mutation generateLoginOptions($userId: String) {
        generatePasskeyLoginOptions(userId: $userId)
      }
    `),
  );
  const [, loginPasskey] = useMutation(
    graphql(`
      mutation loginPasskey($response: JSON!) {
        loginPasskey(response: $response) {
          token
          refreshToken
          credentialID
        }
      }
    `),
  );

  return useQuery<boolean, CombinedError>({
    queryKey: ["passkeyAuthFlow"],
    queryFn: async () => {
      const { data: data0, error: error0 } = await generateLoginOptions({});

      if (!data0?.generatePasskeyLoginOptions) {
        throw error0;
      }

      const response = await startAuthentication(
        data0?.generatePasskeyLoginOptions,
      );

      const { data: data1, error: error1 } = await loginPasskey({ response });

      if (!data1?.loginPasskey) {
        throw error1;
      }

      setToken(data1.loginPasskey.token);
      setRefreshToken(data1.loginPasskey.refreshToken);
      localStorage.setItem(
        "credentialID",
        data1.loginPasskey.credentialID.join(","),
      );

      return true;
    },
    retry: false,
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
