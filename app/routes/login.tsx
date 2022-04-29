import {
  Button,
  Checkbox,
  Container,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { At, ShieldLock } from "tabler-icons-react";
import { verifyLogin } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

interface ActionData {
  errors?: {
    email?: string;
    password?: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  const remember = formData.get("remember");

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

  const user = await verifyLogin(email, password);

  if (!user) {
    return json<ActionData>(
      { errors: { email: "Ungültige Email oder Passwort" } },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo,
  });
};

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
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
          icon={<At size={16} />}
          label="Email"
          placeholder="Your email"
          error={actionData?.errors?.email}
        />
        <PasswordInput
          id="password"
          name="password"
          autoComplete="current-password"
          label="Passwort"
          icon={<ShieldLock size={16} />}
          error={actionData?.errors?.password}
        />
        <Checkbox
          id="remember"
          name="remember"
          label="Login speichern"
          mt="md"
        />

        <input type="hidden" name="redirectTo" value={redirectTo} />

        <Group position="right" mt="md">
          <Button type="submit">Login</Button>
        </Group>

        <Text>
          Noch keinen Account?{" "}
          <Button
            component={Link}
            to={{
              pathname: "/join",
              search: searchParams.toString(),
            }}
            variant="subtle"
          >
            Anmelden
          </Button>
        </Text>
      </Form>
    </Container>
  );
}
