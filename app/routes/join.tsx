import {
  Button,
  Container,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { PersonIcon } from "@modulz/radix-icons";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";
import { At, ShieldLock } from "tabler-icons-react";
import { createUser, getUserByEmail } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

interface ActionData {
  errors: {
    email?: string;
    password?: string;
    name?: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateEmail(email)) {
    return json<ActionData>(
      { errors: { email: "Email ist ungültig" } },
      { status: 400 }
    );
  }

  if (typeof password !== "string") {
    return json<ActionData>(
      { errors: { password: "Passwort wird benötigt" } },
      { status: 400 }
    );
  }

  if (password.length < 3) {
    return json<ActionData>(
      { errors: { password: "Passwort ist zu kurz" } },
      { status: 400 }
    );
  }

  if (typeof name !== "string") {
    return json<ActionData>(
      { errors: { name: "Name wird benötigt" } },
      { status: 400 }
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json<ActionData>(
      { errors: { email: "Es gibt bereits einen Nutzer mit dieser Email" } },
      { status: 400 }
    );
  }

  const user = await createUser(email, password, { name });

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo,
  });
};

export const meta: MetaFunction = () => {
  return {
    title: "Anmelden",
  };
};

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData() as ActionData;

  return (
    <Container size="xs">
      <Form method="post">
        <TextInput
          id="email"
          required
          autoFocus={true}
          name="email"
          type="email"
          autoComplete="email"
          label="Email"
          icon={<At size={16} />}
          placeholder="Deine Email"
          error={actionData?.errors?.email}
        />
        <PasswordInput
          id="password"
          required
          name="password"
          type="password"
          autoComplete="new-password"
          label="Passwort"
          icon={<ShieldLock size={16} />}
          error={actionData?.errors?.password}
        />
        <TextInput
          id="name"
          required
          name="name"
          label="Name"
          icon={<PersonIcon />}
          placeholder="Name"
          error={actionData?.errors?.name}
        />

        <input type="hidden" name="redirectTo" value={redirectTo} />

        <Group position="right" mt="md">
          <Button type="submit">Account anlegen</Button>
        </Group>

        <Text>
          Du hast schon einen Account?{" "}
          <Button
            component={Link}
            to={{
              pathname: "/login",
              search: searchParams.toString(),
            }}
            variant="subtle"
          >
            Einloggen
          </Button>
        </Text>
      </Form>
    </Container>
  );
}
