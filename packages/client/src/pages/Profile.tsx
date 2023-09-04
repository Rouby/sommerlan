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
  Modal,
  Skeleton,
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
import { useMutation, useQuery } from "urql";
import { CardWithHeader, CreatePasskeyFlow } from "../components";
import { graphql } from "../gql";
import { useUploadFileMutation } from "../hooks";
import { tokenAtom, userAtom } from "../state";
import { formatDate } from "../utils";

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
  const [{ fetching }, updateProfile] = useMutation(
    graphql(`
      mutation updateProfile($input: ProfileInput!) {
        updateProfile(input: $input) {
          id
          name
          displayName
          email
          avatar
          avatarUrl
        }
      }
    `)
  );

  return (
    <form
      onSubmit={async (evt) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;

        const name = form["userName"].value;
        const displayName = form["displayName"].value;
        const email = form["email"].value;
        const avatarUrl = form["avatarUrl"].value;

        await updateProfile({
          input: {
            name,
            displayName,
            email,
            avatarUrl,
          },
        });

        setToken(null);
      }}
    >
      <CardWithHeader header="Deine Profil">
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
            <Button loading={fetching} type="submit">
              Speichern
            </Button>
          </Group>
        </Stack>
      </CardWithHeader>
    </form>
  );
}

function PasskeySettings() {
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
      <Stack p="xs" spacing="xs">
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
    `)
  );
  const [{ fetching: isDeleting }, deleteDevice] = useMutation(
    graphql(`
      mutation deleteAuthDevice($id: ID!) {
        deleteAuthDevice(id: $id) {
          id
          name
        }
      }
    `)
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
              disabled={isUpdating}
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
              {localStorage.getItem("credentialID") === id && (
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
