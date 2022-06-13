import {
  Button,
  Container,
  Group,
  MultiSelect,
  TextInput,
} from "@mantine/core";
import type { LoaderFunction } from "@remix-run/node";
import { Form, useFetcher } from "@remix-run/react";
import { useRef } from "react";
import { useAbility } from "~/components";
import { getUsersWithPushNotifications } from "~/models/user.server";
import { getUserId } from "~/session.server";
import { json, useLoaderData } from "~/utils/superjson";

type LoaderData = {
  users: Awaited<ReturnType<typeof getUsersWithPushNotifications>>;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await getUserId(request);
  const users = await getUsersWithPushNotifications(userId);

  return json<LoaderData>({ users });
};

export default function AdminPushNotificationPage() {
  const ability = useAbility();
  const fetcher = useFetcher();
  const formRef = useRef<HTMLFormElement>(null);
  const { users } = useLoaderData<LoaderData>();

  if (ability.cannot("manage", "User")) {
    return <Container>Du hast keine Zugriffsberechtigung</Container>;
  }

  return (
    <Container>
      <Form ref={formRef}>
        <MultiSelect
          name="userId"
          data={users.map((user) => ({ value: user.id, label: user.name }))}
          label="Nutzer, die Benachrichtigungen erhalten"
          placeholder="Alle Nutzer benachrichtigen"
        />
        <TextInput name="title" label="Benachrichtungstitel" required />
        <TextInput name="body" label="Benachrichtungstext" required />
        <Group position="right" mt="md">
          <Button
            onClick={() =>
              fetcher.submit(formRef.current, {
                method: "post",
                action: "/action/send-push-notification",
              })
            }
          >
            Senden
          </Button>
        </Group>
      </Form>
    </Container>
  );
}
