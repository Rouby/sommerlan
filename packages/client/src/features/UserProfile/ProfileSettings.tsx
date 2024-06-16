import { Anchor, Button, Center, Group, Input, Stack } from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useAtomValue, useSetAtom } from "jotai";
import { useRef, useState } from "react";
import { useMutation } from "urql";
import { CardWithHeader } from "../../components";
import { graphql } from "../../gql";
import { useFetchWithProgress } from "../../hooks";
import { tokenAtom, userAtom } from "../../state";

export function ProfileSettings() {
  const setToken = useSetAtom(tokenAtom);
  const user = useAtomValue(userAtom);

  const openRef = useRef<() => void>(null);

  const [, fetch] = useFetchWithProgress();
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
    `),
  );

  const [avatarImage, setAvtarImage] = useState<FileWithPath | null>(null);

  return (
    <form
      onSubmit={async (evt) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;

        const name = form["userName"].value;
        const displayName = form["displayName"].value;
        const email = form["email"].value;

        await updateProfile(
          {
            input: {
              name,
              displayName,
              email,
              avatar: avatarImage,
            },
          },
          { fetch },
        );

        setToken(null);
      }}
    >
      <CardWithHeader header="Deine Profil">
        <Stack p="xs" gap="xs">
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
            name="avatarImage"
            data-testid="dropzone"
            accept={IMAGE_MIME_TYPE}
            onDrop={(files) => {
              setAvtarImage(files[0]);
            }}
            maxFiles={1}
            openRef={openRef}
            style={{ alignItems: "center" }}
            h={100}
            display="grid"
            loading={fetching}
          >
            <Center>Alternativ kannst du ein Bild hochladen</Center>
          </Dropzone>
          <Button variant="light" onClick={() => openRef.current?.()}>
            Bild auswählen
          </Button>

          <Group justify="right">
            <Button loading={fetching} type="submit">
              Speichern
            </Button>
          </Group>
        </Stack>
      </CardWithHeader>
    </form>
  );
}
