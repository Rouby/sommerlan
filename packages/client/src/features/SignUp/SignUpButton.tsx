import { Button, Group, Modal } from "@mantine/core";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function SignUpButton() {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup" | false>(
    "signup",
  );

  return (
    <>
      <Group wrap="nowrap">
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
