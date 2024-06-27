import { Box, Button, Stack } from "@mantine/core";
import { useState } from "react";
import SignUpIllustration from "../../illustrations/undraw_sign_up_n6im.svg?react";
import { SignInViaEmail } from "./SignInViaEmail";
import { SignInViaPasskey } from "./SignInViaPasskey";
import { SignInViaPassword } from "./SignInViaPassword";
import classes from "./styles.module.css";

export function LoginForm() {
  const [signInViaPasskey, setSignInViaPasskey] = useState(false);
  const [signInViaPassword, setSignInViaPassword] = useState(false);
  const [signInViaEmail, setSignInViaEmail] = useState(false);

  if (signInViaPasskey) {
    return <SignInViaPasskey />;
  }

  if (signInViaPassword) {
    return <SignInViaPassword />;
  }

  if (signInViaEmail) {
    return <SignInViaEmail />;
  }

  return (
    <>
      <Box
        className={classes.formGrid}
        style={{
          alignItems: "center",
        }}
      >
        <Box visibleFrom="sm">
          <SignUpIllustration />
        </Box>

        <Stack>
          <Button onClick={() => setSignInViaPasskey(true)}>
            Mit Passkey anmelden
          </Button>
          <Button variant="subtle" onClick={() => setSignInViaPassword(true)}>
            Mit Passwort anmelden
          </Button>
          <Button
            variant="subtle"
            onClick={() => setSignInViaEmail(true)}
            visibleFrom="sm"
          >
            Einen Einmal-Link zum einloggen per Email anfordern
          </Button>
          <Button
            variant="subtle"
            onClick={() => setSignInViaEmail(true)}
            hiddenFrom="sm"
          >
            Einen Einmal-Link per Email anfordern
          </Button>
        </Stack>
      </Box>
    </>
  );
}
