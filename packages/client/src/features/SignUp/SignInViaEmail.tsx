import { Alert, Button, Group, Input, Stack, Text } from "@mantine/core";
import { useMutation } from "urql";
import { graphql } from "../../gql";
import MessageSentIllustration from "../../illustrations/undraw_message_sent_re_q2kl.svg?react";

export function SignInViaEmail() {
  const [{ fetching, data, error }, sendLink] = useMutation(
    graphql(`
      mutation sendEmailLink($email: String!) {
        sendMagicLink(email: $email)
      }
    `),
  );

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
        {error?.message}
      </Alert>

      {data?.sendMagicLink ? (
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
              style={{ flex: "1 1 auto" }}
              required
              type="email"
              name="email"
              placeholder="Deine Email-Adresse"
            />

            <Button type="submit" disabled={fetching}>
              Link zuschicken
            </Button>
          </Group>
        </Stack>
      )}
    </form>
  );
}
