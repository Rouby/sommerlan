import { subject } from "@casl/ability";
import { Box, Loader, Select } from "@mantine/core";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useSubmit, useTransition } from "@remix-run/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useAbility } from "~/components";
import { getUsers, setUserRole } from "~/models/user.server";
import { getUserId, requireUserId } from "~/session.server";
import { json, useLoaderData } from "~/utils/superjson";

type LoaderData = {
  users: Awaited<ReturnType<typeof getUsers>>;
};

type ActionData = {
  errors?: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await getUserId(request);
  const users = await getUsers(userId);

  return json<LoaderData>({ users });
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();

  const userIdToUpdate = formData.get("userId");
  const role = formData.get("role");

  if (typeof userIdToUpdate !== "string") {
    return json<ActionData>(
      { errors: "userId wird benötigt" },
      { status: 400 }
    );
  }

  if (typeof role !== "string") {
    return json<ActionData>({ errors: "role wird benötigt" }, { status: 400 });
  }

  setUserRole(userId, userIdToUpdate, role as any);

  return json<ActionData>({}, { status: 200 });
};

export default function AdminUserPage() {
  const ability = useAbility();
  const data = useLoaderData<LoaderData>();
  const transition = useTransition();

  if (ability.cannot("manage", "User")) {
    return <div>Du hast keine Zugriffsberechtigung</div>;
  }

  return (
    <div>
      <h1>Nutzer</h1>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "max-content max-content min-content",
          gap: 16,
          alignItems: "center",
        }}
      >
        {data.users.map((user) => (
          <Fragment key={user.id}>
            <div>{user.name}</div>
            <SelectRole user={user} />
            {transition.state === "submitting" &&
            transition.submission?.formData.get("userId") === user.id ? (
              <Loader size={16} />
            ) : (
              <div />
            )}
          </Fragment>
        ))}
      </Box>
    </div>
  );
}

function SelectRole({
  user,
}: {
  user: Awaited<ReturnType<typeof getUsers>>[0];
}) {
  const ability = useAbility();
  const formRef = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState<string | null>(user.role);
  const submit = useSubmit();

  const initialRef = useRef(true);
  useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;
      return;
    }
    submit(formRef.current);
  }, [value, submit]);

  return (
    <Form method="post" ref={formRef}>
      <input type="hidden" name="userId" value={user.id} />
      <Select
        id="role"
        name="role"
        value={value}
        data={[
          {
            label: "Admin",
            value: "ADMIN",
            disabled: ability.cannot(
              "manage",
              subject("User", { ...user, role: "ADMIN" as const }),
              "role"
            ),
          },
          {
            label: "Organisator",
            value: "ORGANIZER",
            disabled: ability.cannot(
              "manage",
              subject("User", { ...user, role: "ORGANIZER" as const }),
              "role"
            ),
          },
          {
            label: "Nutzer (verifiziert)",
            value: "TRUSTED_USER",
            disabled: ability.cannot(
              "manage",
              subject("User", { ...user, role: "TRUSTED_USER" as const }),
              "role"
            ),
          },
          {
            label: "Nutzer",
            value: "USER",
            disabled: ability.cannot(
              "manage",
              subject("User", { ...user, role: "USER" as const }),
              "role"
            ),
          },
        ]}
        onChange={setValue}
        disabled={ability.cannot("manage", subject("User", user), "role")}
      />
    </Form>
  );
}
