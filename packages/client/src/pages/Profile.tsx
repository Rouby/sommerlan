import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Group,
  Input,
  Loader,
  Modal,
  Paper,
  Space,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconEdit, IconKey, IconTrashX } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useAtomValue, useSetAtom } from "jotai";
import { useRef, useState } from "react";
import { CreatePasskeyFlow } from "../components";
import { useUploadFileMutation } from "../hooks";
import { tokenAtom, userAtom } from "../state";
import { formatDate, trpc } from "../utils";

export function Profile() {
  return (
    <Container>
      <ProfileSettings />
      <Space h="md" />
      <PasskeySettings />
    </Container>
  );
}

function ProfileSettings() {
  const setToken = useSetAtom(tokenAtom);
  const user = useAtomValue(userAtom);

  const openRef = useRef<() => void>(null);

  const { mutateAsync: uploadFile, isLoading: isUploading } =
    useUploadFileMutation();
  const { mutateAsync: updateProfile, isLoading } =
    trpc.user.updateProfile.useMutation();

  return (
    <form
      onSubmit={async (evt) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;

        const name = form["userName"].value;
        const displayName = form["displayName"].value;
        const email = form["email"].value;
        const avatarUrl = form["avatarUrl"].value;

        const token = await updateProfile({
          name,
          displayName,
          email,
          avatarUrl,
        });

        setToken(token);
      }}
    >
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
          <Text>Deine Profil</Text>
        </Group>

        <Stack p="xs" spacing="xs">
          <Input.Wrapper label="Dein Name">
            <Input
              id="userName"
              required
              name="userName"
              defaultValue={user?.name}
            />
          </Input.Wrapper>

          <Input.Wrapper
            label="Dein Anzeige-Name"
            description="Dieser Name wird an den meisten Stellen in der UI angezeigt"
          >
            <Input
              id="displayName"
              required
              name="displayName"
              defaultValue={user?.displayName}
            />
          </Input.Wrapper>

          <Input.Wrapper label="Deine E-Mail-Adresse">
            <Input
              id="email"
              required
              name="email"
              defaultValue={user?.email}
            />
          </Input.Wrapper>

          <Input.Wrapper
            label="Profil-Bild"
            description={
              <>
                Gib die Adresse zu einem Bild an, oder leer lassen um ein Bild
                von{" "}
                <Anchor
                  href="https://de.gravatar.com/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  Gravatar
                </Anchor>{" "}
                zu verwenden
              </>
            }
          >
            <Input
              id="avatarUrl"
              name="avatarUrl"
              placeholder="https://example.com/image.jpg"
              pattern="https?://.*"
              defaultValue={user?.avatarUrl}
            />
          </Input.Wrapper>

          <Dropzone
            accept={IMAGE_MIME_TYPE}
            onDrop={(files) => {
              uploadFile(files[0]).then((url) => {
                const imageElem = document.getElementById(
                  "avatarUrl"
                ) as HTMLInputElement;
                if (imageElem) {
                  imageElem.value = url;
                }
              });
            }}
            maxFiles={1}
            openRef={openRef}
            sx={{ height: 100, display: "grid", alignItems: "center" }}
            loading={isUploading}
          >
            <Center>Alternativ kannst du ein Bild hochladen</Center>
          </Dropzone>
          <Button variant="light" onClick={() => openRef.current?.()}>
            Bild auswählen
          </Button>

          <Group position="right">
            <Button loading={isLoading} type="submit">
              Speichern
            </Button>
          </Group>
        </Stack>
      </Paper>
    </form>
  );
}

function PasskeySettings() {
  const { data: devices, isLoading } = trpc.user.devices.useQuery();

  const [showPasskeyOptions, setShowPasskeyOptions] = useState(false);

  return (
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

      {isLoading ? (
        <Loader />
      ) : (
        <Stack p="xs" spacing="xs">
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
      )}

      <Modal
        size="lg"
        opened={showPasskeyOptions}
        withCloseButton={false}
        onClose={() => setShowPasskeyOptions(false)}
      >
        <CreatePasskeyFlow />
      </Modal>
    </Paper>
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
