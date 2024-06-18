import { Button, Group, Input, PasswordInput, Stack } from "@mantine/core";
import { useAtomValue, useSetAtom } from "jotai";
import { useMutation } from "urql";
import { CardWithHeader, ImageInput } from "../../components";
import { graphql } from "../../gql";
import { useFetchWithProgress } from "../../hooks";
import { tokenAtom, userAtom } from "../../state";

export function ProfileSettings() {
  const setToken = useSetAtom(tokenAtom);
  const user = useAtomValue(userAtom);

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
  const [{ fetching: removing }, removeProfilePicture] = useMutation(
    graphql(`
      mutation removeProfilePicture {
        removeProfilePicture {
          id
          avatar
          avatarUrl
        }
      }
    `),
  );

  return (
    <form
      onSubmit={async (evt) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;

        const name = form["userName"].value;
        const displayName = form["displayName"].value;
        const email = form["email"].value;
        const password = form["password"].value || null;
        const avatar = form["avatar"].files?.item(0) || null;

        await updateProfile(
          {
            input: {
              name,
              displayName,
              email,
              password,
              avatar,
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

          <Input.Wrapper label="Dein Passwort">
            <PasswordInput
              id="password"
              name="password"
              defaultValue={user?.password}
            />
          </Input.Wrapper>

          <Input.Wrapper label="Profil-Bild">
            <ImageInput
              id="avatar"
              name="avatar"
              defaultValue={user?.avatarUrl}
              onRemoveImage={async () => {
                await removeProfilePicture({});

                setToken(null);
              }}
              disabled={removing}
            />
          </Input.Wrapper>

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
