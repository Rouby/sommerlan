import { Alert, Button, Group, Input, Modal, Stack, Text } from "@mantine/core";
import {
  startAuthentication,
  startRegistration,
} from "@simplewebauthn/browser";
import { TRPCClientError } from "@trpc/client";
import { useSetAtom } from "jotai";
import { useEffect, useMemo, useRef, useState } from "react";
import { tokenAtom } from "../state";
import { trpc } from "../utils";
import { QRCode } from "./QRCode";

export function SignUpButton() {
  const [showAuthForm, setShowAuthForm] = useState<"login" | "signup" | false>(
    false
  );

  return (
    <>
      <Group noWrap>
        <Button variant="default" onClick={() => setShowAuthForm("login")}>
          Log in
        </Button>
        <Button onClick={() => setShowAuthForm("signup")}>Sign up</Button>
      </Group>

      <Modal
        size="xl"
        opened={!!showAuthForm}
        onClose={() => setShowAuthForm(false)}
      >
        <AuthForm mode={showAuthForm} />
      </Modal>
    </>
  );
}

function AuthForm({ mode }: { mode: "login" | "signup" | false }) {
  const active = mode !== false;
  const setToken = useSetAtom(tokenAtom);

  const { mutateAsync: generateRegistrationOptions } =
    trpc.auth.generateRegistrationOptions.useMutation();
  const { mutateAsync: register } = trpc.auth.register.useMutation();

  const { mutateAsync: generateLoginOptions } =
    trpc.auth.generateLoginOptions.useMutation();
  const {
    mutateAsync: login,
    error,
    isLoading: isLoggingIn,
  } = trpc.auth.login.useMutation();
  const isRequesting = useRef(false);
  useEffect(() => {
    if (isRequesting.current) return;
    isRequesting.current = true;
    const userId = localStorage.getItem("userId");
    if (active) {
      generateLoginOptions({ userId })
        .then(async ({ userId, options }) => {
          const response = await startAuthentication(options, true);

          const jwt = await login({ response });

          if (jwt && userId) {
            setToken(jwt);
            localStorage.setItem("userId", userId);
          }
        })
        .catch((err) => {
          if (err instanceof TRPCClientError && err.data.code === "NOT_FOUND") {
            localStorage.removeItem("userId");
          }
        })
        .finally(() => {
          isRequesting.current = false;
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const [signInFromOtherDevice, setSignInFromOtherDevice] = useState(false);

  if (signInFromOtherDevice) {
    return <SignInFromOtherDevice />;
  }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const userName = form["username"].value;

        const options = await generateRegistrationOptions({
          userName,
        });

        const response = await startRegistration(options);

        const jwt = await register({ userId: options.user.id, response });

        if (jwt) {
          setToken(jwt);
          localStorage.setItem("userId", options.user.id);
        }
      }}
    >
      <Stack>
        <Text>
          Start by creating a user account. The account will be bound to this
          device.
        </Text>

        <Text>
          If you already have created an account with this device, you may also
          use the passkey to sign in.
        </Text>

        {error && (
          <Alert color="red">
            {error instanceof TRPCClientError && error.data.code === "NOT_FOUND"
              ? "Passkey is not valid"
              : error.message}
          </Alert>
        )}

        <Input
          required
          name="username"
          autoComplete="webauthn"
          placeholder="Your username"
        />

        <Group grow>
          <Button type="submit" disabled={isLoggingIn}>
            Register
          </Button>
          <Button
            variant="subtle"
            disabled={isLoggingIn}
            onClick={() => setSignInFromOtherDevice(true)}
          >
            Sign in from another device
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

function SignInFromOtherDevice() {
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
      <Text>Scan this QR code from a signed-in device capable:</Text>
      <QRCode data={data} />
    </Stack>
  );
}
