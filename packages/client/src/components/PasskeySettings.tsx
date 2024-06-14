import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Modal,
  Skeleton,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconEdit, IconKey, IconTrashX } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useState } from "react";
import { useMutation, useQuery } from "urql";
import { CardWithHeader, CreatePasskeyFlow } from "../components";
import { graphql } from "../gql";
import { formatDate } from "../utils";

export function PasskeySettings() {
  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query myDevices {
        me {
          id
          devices {
            id
            name
            createdAt
            lastUsedAt
          }
        }
      }
    `),
  });

  const [showPasskeyOptions, setShowPasskeyOptions] = useState(false);

  return (
    <CardWithHeader
      header="Deine Passkeys"
      actions={
        <Button onClick={() => setShowPasskeyOptions(true)}>
          Passkey erstellen
        </Button>
      }
    >
      <Stack p="xs" gap="xs">
        {fetching && (
          <>
            <Skeleton h={40} />
            <Skeleton h={40} />
          </>
        )}
        {data?.me?.devices.map((device, idx) => (
          <DeviceInfos
            key={idx}
            id={device.id}
            name={device.name}
            createdAt={device.createdAt}
            lastUsedAt={device.lastUsedAt}
          />
        ))}
      </Stack>

      <Modal
        size="lg"
        opened={showPasskeyOptions}
        withCloseButton={false}
        onClose={() => setShowPasskeyOptions(false)}
      >
        <CreatePasskeyFlow />
      </Modal>
    </CardWithHeader>
  );
}

function DeviceInfos({
  id,
  name,
  createdAt,
  lastUsedAt,
}: {
  id: string;
  name?: string;
  createdAt?: string;
  lastUsedAt?: string;
}) {
  const [edit, setEdit] = useState(false);

  const [{ fetching: isUpdating }, updateDevice] = useMutation(
    graphql(`
      mutation updateAuthDevice($id: ID!, $name: String!) {
        updateAuthDevice(id: $id, name: $name) {
          id
          name
        }
      }
    `),
  );
  const [{ fetching: isDeleting }, deleteDevice] = useMutation(
    graphql(`
      mutation deleteAuthDevice($id: ID!) {
        deleteAuthDevice(id: $id) {
          id
          name
        }
      }
    `),
  );

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const deviceName = form["deviceName"].value;

        await updateDevice({ id, name: deviceName });

        setEdit(false);
      }}
    >
      <Group justify="space-between" wrap="nowrap">
        {edit ? (
          <>
            <TextInput
              required
              name="deviceName"
              autoFocus
              flex={1}
              defaultValue={name}
              placeholder="Unnamed passkey"
              disabled={isUpdating}
            />
          </>
        ) : (
          <Stack gap={0}>
            <Group justify="space-between" align="center">
              <IconKey size={16} />
              <Text
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  flex: "1 1 0",
                }}
              >
                {name ?? "Unnamed passkey"}
              </Text>
              {localStorage.getItem("credentialID") === id && (
                <Badge color="gray">Von diesem Browser benutzt</Badge>
              )}
            </Group>
            {(createdAt || lastUsedAt) && (
              <Text color="dimmed">
                {createdAt ? (
                  <>
                    Erstellt am {formatDate(new Date(createdAt))}
                    {lastUsedAt ? " | " : null}
                  </>
                ) : null}
                {lastUsedAt ? (
                  <>Zuletzt genutzt {dayjs().to(lastUsedAt, false)}</>
                ) : null}
              </Text>
            )}
          </Stack>
        )}
        <Group wrap="nowrap">
          {edit ? (
            <>
              <Button type="submit" loading={isUpdating}>
                Speichern
              </Button>
              <Button onClick={() => setEdit(false)} disabled={isUpdating}>
                Abbrechen
              </Button>
            </>
          ) : (
            <>
              <ActionIcon
                size="lg"
                variant="light"
                onClick={() => setEdit(true)}
              >
                <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon
                size="lg"
                variant="light"
                color="red"
                loading={isDeleting}
                onClick={() => deleteDevice({ id })}
              >
                <IconTrashX size={16} />
              </ActionIcon>
            </>
          )}
        </Group>
      </Group>
    </form>
  );
}
