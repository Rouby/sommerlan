import { Button, Group, Input, Modal } from "@mantine/core";
import {
  startAuthentication,
  startRegistration,
} from "@simplewebauthn/browser";
import { TRPCClientError } from "@trpc/client";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useMemo, useRef, useState } from "react";
import { tokenAtom } from "../state";
import { trpc } from "../utils";
import { QRCode } from "./QRCode";

export function LoginFlow() {
  const token = useAtomValue(tokenAtom);

  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showSignInFromOtherDevice, setShowSignInFromOtherDevice] =
    useState(false);

  return (
    <>
      {!token && (
        <>
          <Group>
            <Modal
              opened={showRegisterForm}
              onClose={() => setShowRegisterForm(false)}
            >
              <RegisterForm active={showRegisterForm} />
            </Modal>
            <Button onClick={() => setShowRegisterForm(true)}>
              Create account
            </Button>
            <Modal
              opened={showSignInFromOtherDevice}
              onClose={() => setShowSignInFromOtherDevice(false)}
            >
              <SignInFromOtherDevice active={showSignInFromOtherDevice} />
            </Modal>
            <Button
              onClick={() => setShowSignInFromOtherDevice(true)}
              variant="subtle"
            >
              Sign-In from other device
            </Button>
          </Group>
        </>
      )}
    </>
  );
}

function RegisterForm({ active }: { active: boolean }) {
  const setToken = useSetAtom(tokenAtom);

  const { mutateAsync: generateRegistrationOptions } =
    trpc.auth.generateRegistrationOptions.useMutation();
  const { mutateAsync: register } = trpc.auth.register.useMutation();

  const { mutateAsync: generateLoginOptions } =
    trpc.auth.generateLoginOptions.useMutation();
  const { mutateAsync: login } = trpc.auth.login.useMutation();
  const isRequesting = useRef(false);
  useEffect(() => {
    if (isRequesting.current) return;
    isRequesting.current = true;
    const userId = localStorage.getItem("userId");
    if (userId && active) {
      console.log("generate");
      generateLoginOptions({ userId })
        .then(async (options) => {
          const response = await startAuthentication(options, true);

          const jwt = await login({ userId, response });

          if (jwt) {
            setToken(jwt);
          }
        })
        .catch((err) => {
          if (err instanceof TRPCClientError && err.data.code === "NOT_FOUND") {
            localStorage.removeItem("userId");
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

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

        await register({ userId: options.user.id, response });

        localStorage.setItem("userId", options.user.id);
      }}
    >
      <Input required name="username" autoComplete="webauthn" />
      <Button type="submit">Register</Button>
    </form>
  );
}

function SignInFromOtherDevice({ active }: { active: boolean }) {
  const requestId = useMemo(() => crypto.randomUUID(), []);
  const setToken = useSetAtom(tokenAtom);
  const data = useMemo(() => ({ __$app: "SommerLAN", requestId }), [requestId]);

  trpc.auth.loginFromOtherDevice.useSubscription(
    { requestId },
    {
      enabled: active,
      onData: (data) => {
        setToken(data.token);
      },
    }
  );

  return (
    <Group>
      Scan this QR code with your phone:
      <QRCode data={data} />
    </Group>
  );
}
