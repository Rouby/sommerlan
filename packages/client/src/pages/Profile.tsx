import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Container,
  Group,
  Loader,
  Modal,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconEdit, IconKey, IconTrashX } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useState } from "react";
import { CreatePasskeyFlow } from "../components";
import { formatDate, trpc } from "../utils";

export function Profile() {
  const { data: devices, isLoading } = trpc.user.devices.useQuery();

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
          {isLoading && <Loader />}
          {devices?.map((device, idx) => (
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
  const [edit, setEdit] = useState(false);

  const context = trpc.useContext();
  const { mutateAsync: updateDevice, isLoading } =
    trpc.user.updateDevice.useMutation({
      onSuccess: (newDevice) =>
        context.user.devices.setData(undefined, (prev) =>
          prev?.map((device) =>
            device.credentialID.join(",") === credentialID.join(",")
              ? newDevice
              : device
          )
        ),
    });
  const { mutateAsync: deleteDevice, isLoading: isDeleting } =
    trpc.user.deleteDevice.useMutation({
      onSuccess: () =>
        context.user.devices.setData(undefined, (prev) =>
          prev?.filter(
            (device) => device.credentialID.join(",") !== credentialID.join(",")
          )
        ),
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
      <Group position="apart" noWrap>
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
            <Box
              sx={(theme) => ({
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                alignItems: "center",
                gap: theme.spacing.md,
              })}
            >
              <IconKey size={16} />
              <Text
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  flex: "1 1 0",
                }}
              >
                {name ?? "Unnamed passkey"}
              </Text>
              {localStorage.getItem("credentialID") ===
                credentialID.join(",") && (
                <Badge color="gray">Von diesem Browser benutzt</Badge>
              )}
            </Box>
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
        <Group noWrap>
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
