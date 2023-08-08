import {
  ActionIcon,
  Badge,
  Button,
  Container,
  Group,
  Modal,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconEdit, IconKey, IconTrashX } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { CreatePasskeyFlow } from "../components";
import { tokenAtom, userAtom } from "../state";
import { formatDate, trpc } from "../utils";

export function Profile() {
  const user = useAtomValue(userAtom);

  const [showPasskeyOptions, setShowPasskeyOptions] = useState(false);

  return (
    <Container>
      <Paper withBorder>
        <Group
          position="apart"
          p="xs"
          sx={(theme) => ({
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[2],
          })}
        >
          <Text>Deine Passkeys</Text>
          <Button onClick={() => setShowPasskeyOptions(true)}>
            Passkey erstellen
          </Button>
        </Group>

        <Stack p="xs" spacing="xs">
          {user?.devices.map((device, idx) => (
            <DeviceInfos
              key={idx}
              name={device.name}
              createdAt={device.createdAt}
              lastUsedAt={device.lastUsedAt}
              credentialID={device.credentialID}
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
      </Paper>
    </Container>
  );
}

function DeviceInfos({
  name,
  createdAt,
  lastUsedAt,
  credentialID,
}: {
  name?: string;
  createdAt?: string;
  lastUsedAt?: string;
  credentialID: number[];
}) {
  const setToken = useSetAtom(tokenAtom);
  const [edit, setEdit] = useState(false);

  const { mutateAsync: updateDevice, isLoading } =
    trpc.user.updateDevice.useMutation({
      onSuccess: (token) => setToken(token),
    });
  const { mutateAsync: deleteDevice, isLoading: isDeleting } =
    trpc.user.deleteDevice.useMutation({
      onSuccess: (token) => setToken(token),
    });

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const deviceName = form["deviceName"].value;

        await updateDevice({ credentialID, name: deviceName });

        setEdit(false);
      }}
    >
      <Group position="apart">
        {edit ? (
          <>
            <TextInput
              required
              name="deviceName"
              autoFocus
              sx={{ flex: 1 }}
              defaultValue={name}
              placeholder="Unnamed passkey"
              disabled={isLoading}
            />
          </>
        ) : (
          <Stack spacing={0}>
            <Group>
              <IconKey />
              {name ?? "Unnamed passkey"}
              {localStorage.getItem("credentialID") ===
                credentialID.join(",") && (
                <Badge color="gray">Von diesem Browser benutzt</Badge>
              )}
            </Group>
            {(createdAt || lastUsedAt) && (
              <Text color="dimmed">
                {createdAt ? (
                  <>Erstellt am {formatDate(new Date(createdAt))} | </>
                ) : null}
                {lastUsedAt ? (
                  <>Zuletzt genutzt {dayjs().to(lastUsedAt, false)}</>
                ) : null}
              </Text>
            )}
          </Stack>
        )}
        <Group>
          {edit ? (
            <>
              <Button type="submit" loading={isLoading}>
                Speichern
              </Button>
              <Button onClick={() => setEdit(false)} disabled={isLoading}>
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
                onClick={() => deleteDevice({ credentialID })}
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
