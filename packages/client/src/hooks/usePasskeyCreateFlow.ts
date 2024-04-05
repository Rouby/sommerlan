import { startRegistration } from "@simplewebauthn/browser";
import { useMutation as useNormalMutation } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import { useMutation } from "urql";
import { graphql } from "../gql";
import { tokenAtom, userAtom } from "../state";

export function usePasskeyCreateFlow() {
  const user = useAtomValue(userAtom);
  const setToken = useSetAtom(tokenAtom);

  const [, generateOptions] = useMutation(
    graphql(`
      mutation generateRegistrationOptions($userId: String!) {
        generatePasskeyRegisterOptions(userId: $userId)
      }
    `),
  );

  const [, registerPasskey] = useMutation(
    graphql(`
      mutation registerPasskey(
        $userId: String!
        $name: String!
        $response: JSON!
      ) {
        registerPasskey(userId: $userId, name: $name, response: $response) {
          token
          device {
            id
            name
          }
        }
      }
    `),
  );

  return useNormalMutation({
    mutationFn: async () => {
      if (!user) return;

      const { data: data0 } = await generateOptions({
        userId: user.id,
      });

      const response = await startRegistration(
        data0?.generatePasskeyRegisterOptions,
      );

      const { data: data1 } = await registerPasskey({
        name: navigator.userAgent,
        userId: user.id,
        response,
      });

      if (data1?.registerPasskey) {
        setToken(data1.registerPasskey.token);
      }
    },
  });
}
