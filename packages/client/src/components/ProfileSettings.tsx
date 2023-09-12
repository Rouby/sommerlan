import { Anchor, Button, Center, Group, Input, Stack } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useAtomValue, useSetAtom } from "jotai";
import { useRef } from "react";
import { useMutation } from "urql";
import { CardWithHeader } from "../components";
import { graphql } from "../gql";
import { useUploadFileMutation } from "../hooks";
import { tokenAtom, userAtom } from "../state";

export function ProfileSettings() {
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
            name="avatarImage"
            data-cy="dropzone"
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
