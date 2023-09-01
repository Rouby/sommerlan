import {
  Alert,
  Box,
  Button,
  Group,
  Input,
  LoadingOverlay,
  MediaQuery,
  Modal,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { TRPCClientError } from "@trpc/client";
import { useSetAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { useMutation as urlMutation } from "urql";
import { graphql } from "../gql";
import { usePasskeyAuthFlow, useQRCodeScanner } from "../hooks";
import { ReactComponent as FingerprintIllustration } from "../illustrations/undraw_fingerprint_login_re_t71l.svg";
import { ReactComponent as MessageSentIllustration } from "../illustrations/undraw_message_sent_re_q2kl.svg";
import { ReactComponent as SignUpIllustration } from "../illustrations/undraw_sign_up_n6im.svg";
import { tokenAtom } from "../state";
import { trpc } from "../utils";
import { QRCode } from "./QRCode";

export function SignUpButton() {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup" | false>(
    "signup"
  );

  return (
    <>
      <Group noWrap>
        <Button
          variant="default"
          onClick={() => {
            setAuthMode("login");
            setShowAuthForm(true);
          }}
        >
          Log in
        </Button>
        <Button
          onClick={() => {
            setAuthMode("signup");
            setShowAuthForm(true);
          }}
        >
          Sign up
        </Button>
      </Group>

      <Modal
        size="xl"
        opened={!!showAuthForm}
        withCloseButton={false}
        onClose={() => setShowAuthForm(false)}
      >
        {authMode === "signup" && <RegisterForm />}
        {authMode === "login" && <LoginForm />}
      </Modal>
    </>
  );
}

function RegisterForm() {
  const [{ fetching, error }, register] = urlMutation(
    /* GraphQL */ graphql(`
      mutation register(
        $userName: String!
        $email: String!
        $password: String
      ) {
        register(userName: $userName, email: $email, password: $password) {
          token
        }
      }
    `)
  );

  const [signInFromOtherDevice, setSignInFromOtherDevice] = useState(false);

  const setToken = useSetAtom(tokenAtom);

  if (signInFromOtherDevice) {
    return <SignInFromOtherDevice />;
  }

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
        }
      }}
    >
      <Alert mb="md" hidden={!error} color="red">
        {error?.graphQLErrors?.some(
          (gql) => gql.extensions.code === "PASSKEY_NOT_FOUND"
        )
          ? "Der Passkey ist auf dieser Seite nicht vorhanden."
          : `${error?.message}`}
      </Alert>

      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "1fr auto",
          [theme.fn.smallerThan("sm")]: {
            gridTemplateColumns: "1fr",
          },
        })}
      >
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <SignUpIllustration />
        </MediaQuery>

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

          <Group>
            <Button type="submit" disabled={fetching}>
              Anmelden
            </Button>

            <Button
              variant="subtle"
              disabled={fetching}
              onClick={() => setSignInFromOtherDevice(true)}
            >
              Mit einem anderen Gerät anmelden
            </Button>
          </Group>
        </Stack>
      </Box>
    </form>
  );
}

function LoginForm() {
  const [signInViaPasskey, setSignInViaPasskey] = useState(false);
  const [signInViaPassword, setSignInViaPassword] = useState(false);
  const [signInFromOtherDevice, setSignInFromOtherDevice] = useState(false);
  const [signInViaEmail, setSignInViaEmail] = useState(false);

  if (signInViaPasskey) {
    return <SignInViaPasskey />;
  }

  if (signInViaPassword) {
    return <SignInViaPassword />;
  }

  if (signInFromOtherDevice) {
    return <SignInFromOtherDevice />;
  }

  if (signInViaEmail) {
    return <SignInViaEmail />;
  }

  return (
    <>
      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          [theme.fn.smallerThan("sm")]: {
            gridTemplateColumns: "1fr",
          },
        })}
      >
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <SignUpIllustration />
        </MediaQuery>

        <Stack>
          <Button onClick={() => setSignInViaPasskey(true)}>
            Mit Passkey anmelden
          </Button>
          <Button variant="subtle" onClick={() => setSignInViaPassword(true)}>
            Mit Passwort anmelden
          </Button>
          <Button
            variant="subtle"
            onClick={() => setSignInFromOtherDevice(true)}
          >
            Mit einem anderen Gerät anmelden
          </Button>
          <Button variant="subtle" onClick={() => setSignInViaEmail(true)}>
            Einen Einmal-Link zum einloggen per Email anfordern
          </Button>
        </Stack>
      </Box>
    </>
  );
}

function SignInViaPasskey() {
  const { isLoading, error } = usePasskeyAuthFlow();

  return (
    <>
      <LoadingOverlay visible={isLoading} />

      <Alert mb="md" hidden={!error} color="red">
        {error instanceof TRPCClientError && error.data.code === "NOT_FOUND"
          ? "Der Passkey ist auf dieser Seite nicht vorhanden."
          : error instanceof Error
          ? error.message
          : `${error}`}
      </Alert>

      <FingerprintIllustration />
    </>
  );
}

function SignInViaPassword() {
  const [{ fetching, error }, register] = urlMutation(
    /* GraphQL */ graphql(`
      mutation loginPassword($email: String!, $password: String!) {
        loginPassword(email: $email, password: $password)
      }
    `)
  );

  const [signInFromOtherDevice, setSignInFromOtherDevice] = useState(false);

  const setToken = useSetAtom(tokenAtom);

  if (signInFromOtherDevice) {
    return <SignInFromOtherDevice />;
  }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const email = form["email"].value;
        const password = form["password"].value;

        const { data } = await register({ email, password });

        if (data?.loginPassword) {
          setToken(data.loginPassword);
        }
      }}
    >
      <Alert mb="md" hidden={!error} color="red">
        {error?.message}
      </Alert>

      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "1fr auto",
          [theme.fn.smallerThan("sm")]: {
            gridTemplateColumns: "1fr",
          },
        })}
      >
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <SignUpIllustration />
        </MediaQuery>

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

          <Group>
            <Button type="submit" disabled={fetching}>
              Anmelden
            </Button>

            <Button
              variant="subtle"
              disabled={fetching}
              onClick={() => setSignInFromOtherDevice(true)}
            >
              Mit einem anderen Gerät anmelden
            </Button>
          </Group>
        </Stack>
      </Box>
    </form>
  );
}

function SignInFromOtherDevice() {
  const canScanQRCodes = "BarcodeDetector" in window;

  if (canScanQRCodes) {
    return <ScanQRCode />;
  }

  return <ProvideQRCode />;
}

function ProvideQRCode() {
  const requestId = useMemo(() => crypto.randomUUID(), []);
  const setToken = useSetAtom(tokenAtom);
  const data = useMemo(() => ({ __$app: "SommerLAN", requestId }), [requestId]);

  trpc.auth.loginFromOtherDevice.useSubscription(
    { requestId },
    {
      onData: (data) => {
        setToken(data.token);
      },
    }
  );

  return (
    <Stack align="center">
      <Text>
        Scanne diesen Code mit einem Gerät auf dem du bereits eingeloggt bist
      </Text>

      <QRCode data={data} />
    </Stack>
  );
}

function ScanQRCode() {
  const { video, startScanning, stopScanning, data } = useQRCodeScanner();

  useEffect(() => {
    startScanning();
    return () => stopScanning();
  }, [startScanning, stopScanning]);

  const setToken = useSetAtom(tokenAtom);

  useEffect(() => {
    if (data && typeof data.token === "string") {
      stopScanning();
      setToken(data.token);
    }
  }, [data]);

  return (
    <Group position="center">
      Scan QR code on another device to receive credentials.
      <video ref={video} width={300} />
    </Group>
  );
}

function SignInViaEmail() {
  const {
    mutateAsync: sendLink,
    isLoading,
    isSuccess,
    error,
  } = trpc.auth.sendMagicLink.useMutation();

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const email = form["email"].value;

        await sendLink({ email });
      }}
    >
      <Alert color="red" hidden={!error}>
        {error instanceof TRPCClientError && error.data.code === "NOT_FOUND"
          ? "User with that email does not exist, try signing up first."
          : error instanceof Error
          ? error.message
          : `${error}`}
      </Alert>

      {isSuccess ? (
        <>
          <Alert color="green">
            Es wurde eine Email mit einem Login-Link versandt, schau
            gegebenfalls auch im Spam-Ordner nach.
          </Alert>

          <MessageSentIllustration />
        </>
      ) : (
        <Stack>
          <Text>
            Falls du bereits mit einer Email registriert bist kannst du dir hier
            einen Link zuschicken lassen mit dem du dich einmalig bequem
            einloggen kannst.
          </Text>

          <Group>
            <Input
              sx={{ flex: "1 1 auto" }}
              required
              type="email"
              name="email"
              placeholder="Deine Email-Adresse"
            />

            <Button type="submit" disabled={isLoading}>
              Link zuschicken
            </Button>
          </Group>
        </Stack>
      )}
    </form>
  );
}
