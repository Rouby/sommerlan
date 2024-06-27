import {
  Alert,
  Box,
  Button,
  Group,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useSetAtom } from "jotai";
import { useMutation as urlMutation } from "urql";
import { graphql } from "../../gql";
import SignUpIllustration from "../../illustrations/undraw_sign_up_n6im.svg?react";
import { refreshTokenAtom, tokenAtom } from "../../state";

export function SignInViaPassword() {
  const [{ fetching, error }, register] = urlMutation(
    graphql(`
      mutation loginPassword($email: String!, $password: String!) {
        loginPassword(email: $email, password: $password) {
          token
          refreshToken
        }
      }
    `),
  );

  const setToken = useSetAtom(tokenAtom);
  const setRefreshToken = useSetAtom(refreshTokenAtom);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const email = form["email"].value;
        const password = form["password"].value;

        const { data } = await register({ email, password });

        if (data?.loginPassword) {
          setToken(data.loginPassword.token);
          setRefreshToken(data.loginPassword.refreshToken);
        }
      }}
    >
      <Alert mb="md" hidden={!error} color="red">
        {error?.message}
      </Alert>

      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "1fr minmax(360px, auto)",
          // [theme.fn.smallerThan("sm")]: {
          //   gridTemplateColumns: "1fr",
          // },
        }}
      >
        {/* <MediaQuery smallerThan="sm" styles={{ display: "none" }}> */}
        <SignUpIllustration />

        <Stack>
          <TextInput
            required
            withAsterisk
            label="Email"
            type="email"
            name="email"
            placeholder="Deine Email-Adresse"
          />

          <PasswordInput
            required
            withAsterisk
            name="password"
            autoComplete="password"
            label="Passwort"
            placeholder="Dein Passwort"
          />

          <Group justify="apart">
            <div />
            <Button type="submit" disabled={fetching}>
              Anmelden
            </Button>
          </Group>
        </Stack>
      </Box>
    </form>
  );
}
