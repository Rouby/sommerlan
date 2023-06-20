import { Button, Group, Input } from "@mantine/core";
import {
  startAuthentication,
  startRegistration,
} from "@simplewebauthn/browser";
import { useEffect } from "react";
import { trpc } from "../utils";
import { QRCode } from "./QRCode";

export function LoginFlow() {
  const { mutateAsync: generateRegistrationOptions } =
    trpc.auth.generateRegistrationOptions.useMutation();
  const { mutateAsync: register } = trpc.auth.register.useMutation();

  const { mutateAsync: generateLoginOptions } =
    trpc.auth.generateLoginOptions.useMutation();
  const { mutateAsync: login } = trpc.auth.login.useMutation();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      generateLoginOptions({ userId })
        .then(async (options) => {
          const response = await startAuthentication(options, true);

          const user = await login({ userId, response });

          console.log(user);
        })
        .catch(() => {});
    }
  }, []);

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.target as HTMLFormElement;

          const userName = form["username"].value;

          const options = await generateRegistrationOptions({ userName });

          const response = await startRegistration(options);

          await register({ userId: options.user.id, response });

          localStorage.setItem("userId", options.user.id);
        }}
      >
        <Group>
          <Input required name="username" autoComplete="webauthn" />
          <Button type="submit">Register</Button>
          <QRCode data={{ hello: "text" }} />
        </Group>
      </form>
    </>
  );
}
