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
import classes from "./styles.module.css";

export function RegisterForm() {
  const [{ fetching, error }, register] = urlMutation(
    graphql(`
      mutation register(
        $userName: String!
        $email: String!
        $password: String
      ) {
        register(userName: $userName, email: $email, password: $password) {
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

        const userName = form["username"].value;
        const email = form["email"].value;
        const password = form["new-password"].value;

        const { data } = await register({ userName, email, password });

        if (data?.register.token) {
          setToken(data.register.token);
          setRefreshToken(data.register.refreshToken);
        }
      }}
    >
      <Alert mb="md" hidden={!error} color="red">
        {error?.graphQLErrors?.some(
          (gql) => gql.extensions.code === "PASSKEY_NOT_FOUND",
        )
          ? "Der Passkey ist auf dieser Seite nicht vorhanden."
          : `${error?.message}`}
      </Alert>

      <Box className={classes.formGrid}>
        <Box visibleFrom="sm">
          <SignUpIllustration />
        </Box>

        <Stack>
          <TextInput
            required
            withAsterisk
            label="Nutzername"
            name="username"
            placeholder="Dein Nutzername"
          />

          <TextInput
            required
            withAsterisk
            label="Email"
            type="email"
            name="email"
            placeholder="Deine Email-Adresse"
          />

          <PasswordInput
            name="new-password"
            autoComplete="new-password"
            label="Optionales Passwort"
            description="Das Passwort wird im Klartext gespeichert!"
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
