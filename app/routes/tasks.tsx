import { subject } from "@casl/ability";
import {
  Avatar,
  Button,
  Collapse,
  Container,
  Group,
  List,
  Loader,
  Space,
  Textarea,
  TextInput,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { type ActionFunction, type LoaderFunction } from "@remix-run/node";
import { Form, useActionData, useFetcher } from "@remix-run/react";
import {
  animate,
  Reorder,
  useMotionValue,
  type MotionValue,
} from "framer-motion";
import { useEffect, useReducer, useState } from "react";
import { Subtask } from "tabler-icons-react";
import { Can, useAbility } from "~/components";
import { getCurrentParty } from "~/models/party.server";
import { createWorkload, getCurrentWorkloads } from "~/models/workload.server";
import { getUserId, requireUserId } from "~/session.server";
import { md5 } from "~/utils";
import { json, useLoaderData } from "~/utils/superjson";

type LoaderData = {
  workloads: Awaited<ReturnType<typeof getCurrentWorkloads>>;
};
type Workload = (LoaderData["workloads"] & Array<unknown>)[0];

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await getUserId(request);
  const workloads = await getCurrentWorkloads(userId);

  return json<LoaderData>({ workloads });
};

type ActionData = {
  errors?: { title?: string; description?: string };
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const party = await getCurrentParty(userId);

  if (!party) {
    return json<ActionData>({ errors: {} }, { status: 400 });
  }

  if (typeof title !== "string" || title.length < 1) {
    return json<ActionData>(
      { errors: { title: "Titel wird benötigt" } },
      { status: 400 }
    );
  }

  if (typeof description !== "string" || description.length < 1) {
    return json<ActionData>(
      { errors: { description: "Beschreibung wird benötigt" } },
      { status: 400 }
    );
  }

  await createWorkload(userId, party.id, title, description);

  return null;
};

export default function TasksPage() {
  const data = useLoaderData<LoaderData>();

  if (!data.workloads) {
    return (
      <Container>
        <p>Keine Party, keine Aufgaben.</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Aufgaben</Title>
      <WorkloadList />
      <Can I="create" a="Workload">
        <WorkloadCreate key={data.workloads.length} />
      </Can>
    </Container>
  );
}

function WorkloadList() {
  const data = useLoaderData<LoaderData>();
  const [workloads, setWorkloads] = useState(data.workloads ?? []);
  const fetcher = useFetcher();
  const ability = useAbility();

  useEffect(() => {
    if (data.workloads) {
      setWorkloads(data.workloads);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.workloads?.map((w) => w.assigneeId).join("-")]);

  useEffect(() => {
    if (ability.can("update", "Workload", "order")) {
      const formData = new FormData();
      workloads.forEach((workload, idx) => {
        formData.append("workloadId", workload.id);
        formData.append("workloadOrder", `${idx}`);
      });
      fetcher.submit(formData, {
        action: "/action/set-workload-order",
        method: "post",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workloads]);

  if (!ability.can("update", "Workload", "order")) {
    return (
      <List icon={<Subtask />} spacing="xs" my="md">
        {workloads.map((workload) => (
          <WorkloadRender key={workload.id} workload={workload} />
        ))}
      </List>
    );
  }

  return (
    <Reorder.Group
      values={workloads}
      onReorder={setWorkloads}
      axis="y"
      as="div"
    >
      <List icon={<Subtask />} spacing="xs" my="md">
        {workloads.map((workload) => (
          <WorkloadItem workload={workload} key={workload.id} />
        ))}
      </List>
    </Reorder.Group>
  );
}

function WorkloadItem({ workload }: { workload: Workload }) {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      key={workload.id}
      value={workload}
      style={{ y, boxShadow }}
      as="div"
    >
      <WorkloadRender workload={workload} />
    </Reorder.Item>
  );
}

function WorkloadRender({ workload }: { workload: Workload }) {
  const [open, toggleOpen] = useReducer((open) => !open, false);
  const ability = useAbility();
  const fetcher = useFetcher();

  return (
    <List.Item>
      <Group>
        <Avatar
          size="sm"
          onClick={
            ability.can(
              "update",
              subject("Workload", workload),
              "assigneeId"
            ) && fetcher.state !== "submitting"
              ? () =>
                  fetcher.submit(
                    { workloadId: workload.id },
                    { action: "action/assign-workload", method: "post" }
                  )
              : undefined
          }
          sx={{
            cursor: ability.can(
              "update",
              subject("Workload", workload),
              "assigneeId"
            )
              ? "pointer"
              : undefined,
          }}
          radius="xl"
          src={
            fetcher.state === "submitting"
              ? undefined
              : workload.assignee
              ? `https://www.gravatar.com/avatar/${md5(
                  workload.assignee.email
                )}`
              : undefined
          }
        >
          {fetcher.state === "submitting" ? (
            <Loader size="sm" />
          ) : workload.assigneeId ? (
            workload.assignee?.name
              .split(" ")
              .map((n) => n[0].toUpperCase())
              .join("")
          ) : (
            "…"
          )}
        </Avatar>
        <UnstyledButton onClick={toggleOpen}>{workload.title}</UnstyledButton>
      </Group>
      <Collapse in={open}>
        {workload.description}
        <Space h="md" />
      </Collapse>
    </List.Item>
  );
}

function WorkloadCreate() {
  const data = useActionData<ActionData>();
  const [show, setShow] = useReducer(() => true, false);

  return (
    <div>
      {!show && <Button onClick={setShow}>Neue Arbeit hinzufügen</Button>}
      {show && (
        <Form method="post">
          <TextInput
            id="title"
            name="title"
            label="Arbeitstitel"
            error={data?.errors?.title}
          />
          <Textarea
            id="description"
            name="description"
            label="Beschreibung"
            error={data?.errors?.description}
          />
          <Group position="right" mt="md">
            <Button type="submit">Eintragen</Button>
          </Group>
        </Form>
      )}
    </div>
  );
}

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

function useRaisedShadow(value: MotionValue<number>) {
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.onChange((latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}
