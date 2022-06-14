import { subject } from "@casl/ability";
import {
  ActionIcon,
  Avatar,
  AvatarsGroup,
  Button,
  Collapse,
  Container,
  Group,
  List,
  Loader,
  NumberInput,
  Space,
  Textarea,
  TextInput,
  Title,
  UnstyledButton,
  type NumberInputHandlers,
} from "@mantine/core";
import { Cross1Icon, Pencil1Icon } from "@modulz/radix-icons";
import { type ActionFunction, type LoaderFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useFetcher,
  useTransition,
} from "@remix-run/react";
import {
  animate,
  Reorder,
  useMotionValue,
  type MotionValue,
} from "framer-motion";
import { useEffect, useReducer, useRef, useState } from "react";
import { Subtask } from "tabler-icons-react";
import { Can, useAbility } from "~/components";
import { getCurrentParty } from "~/models/party.server";
import {
  createWorkload,
  getCurrentWorkloads,
  updateWorkload,
} from "~/models/workload.server";
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
  const workloadId = formData.get("id");
  const maxAssignees = formData.get("maxAssignees") ?? "1";
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

  if (typeof maxAssignees !== "string") {
    return json<ActionData>(
      { errors: { description: "Maximale Teilnehmer wird benötigt" } },
      { status: 400 }
    );
  }

  if (workloadId && typeof workloadId !== "string") {
    return json<ActionData>(
      { errors: { description: "WorkloadId muss String sein" } },
      { status: 400 }
    );
  }

  if (workloadId) {
    await updateWorkload(
      userId,
      party.id,
      workloadId,
      title,
      description,
      +maxAssignees
    );
  } else {
    await createWorkload(userId, party.id, title, description, +maxAssignees);
  }

  return null;
};

export default function TasksPage() {
  const data = useLoaderData<LoaderData>();
  const ability = useAbility();

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
      <p>
        Hier stehen alle Aufgaben die auf einer LAN so anfallen.{" "}
        {ability.can("update", "Workload", "assigneeId")
          ? "Du kannst dich für eine oder mehrere Aufgaben hier eintragen."
          : null}
      </p>
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
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    data.workloads
      ?.map(
        (w) =>
          w.assignees?.map((u) => u.id).join(",") +
          w.title +
          w.description +
          w.maxAssignees
      )
      .join("-"),
  ]);

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
      <List icon={" "} spacing="xs" my="md">
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
  const [editMode, setEditMode] = useState(false);
  const numInput = useRef<NumberInputHandlers>();
  const { state } = useTransition();

  const [validAvatars, setValidAvatars] = useState<boolean[]>([]);
  useEffect(() => {
    Promise.all(
      workload.assignees?.map((user) =>
        fetch(`https://www.gravatar.com/avatar/${md5(user.email)}?d=404`).then(
          (res) => res.status >= 200 && res.status <= 299,
          () => false
        )
      )
    ).then(setValidAvatars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    workload.assignees?.map((user) => user.email).join(","),
    workload.assignees?.length,
  ]);

  useEffect(() => {
    if (state === "submitting") {
      return () => {
        setEditMode(false);
      };
    }
  }, [state]);

  return (
    <Form method="post">
      <input type="hidden" name="id" value={workload.id} />
      <List.Item>
        <Group>
          <AvatarsGroup limit={3}>
            {workload.assignees?.map((user, idx) => (
              <Avatar
                key={user.id}
                size="sm"
                onClick={
                  ability.can(
                    "update",
                    subject("Workload", workload),
                    "assignees"
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
                    "assignees"
                  )
                    ? "pointer"
                    : undefined,
                }}
                radius="xl"
                src={
                  validAvatars[idx]
                    ? `https://www.gravatar.com/avatar/${md5(user.email)}?d=404`
                    : undefined
                }
                title={user.name}
              >
                {user.name
                  .split(" ")
                  .map((n) => n[0].toUpperCase())
                  .join("")}
              </Avatar>
            ))}
            {ability.can(
              "update",
              subject("Workload", workload),
              "assignees"
            ) &&
              workload.assignees.length < workload.maxAssignees && (
                <Avatar
                  size="sm"
                  onClick={
                    ability.can(
                      "update",
                      subject("Workload", workload),
                      "assignees"
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
                      "assignees"
                    )
                      ? "pointer"
                      : undefined,
                  }}
                  radius="xl"
                >
                  {fetcher.state === "submitting" ? <Loader size="sm" /> : "+"}
                </Avatar>
              )}
          </AvatarsGroup>
          <UnstyledButton onClick={toggleOpen}>
            {editMode ? (
              <TextInput
                id="title"
                name="title"
                label="Arbeitstitel"
                defaultValue={workload.title}
              />
            ) : (
              workload.title
            )}
          </UnstyledButton>
          <Can I="create" a="Workload">
            <ActionIcon onClick={() => setEditMode(!editMode)}>
              {editMode ? <Cross1Icon /> : <Pencil1Icon />}
            </ActionIcon>
          </Can>
        </Group>
        <Collapse in={open || editMode}>
          {editMode ? (
            <>
              <Textarea
                id="description"
                name="description"
                label="Beschreibung"
                defaultValue={workload.description}
              />
              <Group spacing={5}>
                <ActionIcon
                  size={42}
                  variant="default"
                  onClick={() => numInput.current?.decrement()}
                >
                  –
                </ActionIcon>

                <NumberInput
                  hideControls
                  defaultValue={workload.maxAssignees}
                  handlersRef={numInput}
                  max={5}
                  min={1}
                  step={1}
                  styles={{ input: { width: 54, textAlign: "center" } }}
                  label="Maximale Personen"
                  name="maxAssignees"
                />

                <ActionIcon
                  size={42}
                  variant="default"
                  onClick={() => numInput.current?.increment()}
                >
                  +
                </ActionIcon>
                <Button type="submit">Speichern</Button>
              </Group>
            </>
          ) : (
            workload.description
          )}
          <Space h="md" />
        </Collapse>
      </List.Item>
    </Form>
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
