import { Alert, Button, Group, Input, Modal, Stack, Text } from "@mantine/core";
import { startAuthentication } from "@simplewebauthn/browser";
import { TRPCClientError } from "@trpc/client";
import { useSetAtom } from "jotai";
import { useEffect, useMemo, useRef, useState } from "react";
import { useQRCodeScanner } from "../hooks";
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
        onClose={() => setShowAuthForm(false)}
      >
        {authMode === "signup" && <RegisterForm />}
        {authMode === "login" && <LoginForm />}
      </Modal>
    </>
  );
}

function RegisterForm() {
  const {
    mutateAsync: register,
    isLoading,
    error,
  } = trpc.auth.register.useMutation();

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

        const token = await register({ userName, email });

        setToken(token);
      }}
    >
      <Stack>
        <Text>Start by creating an user account.</Text>

        {error && (
          <Alert color="red">
            {error instanceof TRPCClientError && error.data.code === "NOT_FOUND"
              ? "Passkey is not valid"
              : error.message}
          </Alert>
        )}

        <Input required name="username" placeholder="Your username" />

        <Input required type="email" name="email" placeholder="Your email" />

        <Group grow>
          <Button type="submit" disabled={isLoading}>
            Register
          </Button>
          <Button
            variant="subtle"
            disabled={isLoading}
            onClick={() => setSignInFromOtherDevice(true)}
          >
            Sign in from another device
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

function LoginForm() {
  const [signInFromOtherDevice, setSignInFromOtherDevice] = useState(false);
  const [signInViaEmail, setSignInViaEmail] = useState(false);

  const setToken = useSetAtom(tokenAtom);

  const { mutateAsync: generateLoginOptions } =
    trpc.auth.generateLoginOptions.useMutation();
  const { mutateAsync: login, isLoading: isLoggingIn } =
    trpc.auth.login.useMutation();

  const isRequesting = useRef(false);
  useEffect(() => {
    if (isRequesting.current) return;
    isRequesting.current = true;

    generateLoginOptions({})
      .then(async ({ userID, options }) => {
        const response = await startAuthentication(options, true);

        const jwt = await login({ response });

        if (jwt) {
          setToken(jwt);
        }
        if (userID) {
          localStorage.setItem("userId", userID);
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
  }, [generateLoginOptions, login, setToken]);

  if (signInFromOtherDevice) {
    return <SignInFromOtherDevice />;
  }

  if (signInViaEmail) {
    return <SignInViaEmail />;
  }

  return (
    <>
      <Stack>
        <Text>Sign in using a passkey.</Text>

        <Input
          required
          name="username"
          autoComplete="webauthn"
          placeholder="Your username"
        />

        <Group grow>
          <Button type="submit" loading={isLoggingIn}>
            Sign In
          </Button>
          <Button
            variant="subtle"
            disabled={isLoggingIn}
            onClick={() => setSignInFromOtherDevice(true)}
          >
            Sign in from another device
          </Button>
          <Button
            variant="subtle"
            disabled={isLoggingIn}
            onClick={() => setSignInViaEmail(true)}
          >
            Sign in via email link
          </Button>
        </Group>
      </Stack>
    </>
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
      <Text>Scan this QR code from a signed-in device capable:</Text>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Stack>
        <Text>Enter your email.</Text>

        {error && (
          <Alert color="red">
            {error instanceof TRPCClientError && error.data.code === "NOT_FOUND"
              ? "User with that email does not exist, try signing up first."
              : error.message}
          </Alert>
        )}

        {isSuccess ? (
          <Alert color="green">Email sent</Alert>
        ) : (
          <>
            <Input
              required
              type="email"
              name="email"
              placeholder="Your email"
            />

            <Group grow>
              <Button type="submit" disabled={isLoading}>
                Send Link
              </Button>
            </Group>
          </>
        )}
      </Stack>
    </form>
  );
}
