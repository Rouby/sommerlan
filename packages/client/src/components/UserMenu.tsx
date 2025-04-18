import {
  ActionIcon,
  Alert,
  Box,
  Button,
  Loader,
  LoadingOverlay,
  Menu,
  PasswordInput,
  Popover,
  Stack,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconMan, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { useMutation, useQuery } from "urql";
import { graphql } from "../gql";
import { UserAvatar } from "./UserAvatar";

export function UserMenu({
  selectedUsers,
  onSelect,
}: {
  selectedUsers: { id: string }[];
  onSelect: (user: { id: string }) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Menu
      width={300}
      position="bottom-start"
      shadow="lg"
      withArrow
      withinPortal
    >
      <Menu.Target>
        <ActionIcon radius="xl" variant="default">
          <IconPlus size="1rem" />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown mah={340} style={{ overflow: "hidden auto" }}>
        <Menu.Label>Nutzer</Menu.Label>
        <MenuOptions selectedUsers={selectedUsers} onSelect={onSelect} />

        <Box pos="sticky" bottom={0} bg="dark">
          <Menu.Divider />

          <Popover
            width="100%"
            position="top"
            shadow="lg"
            opened={open}
            onClose={() => setOpen(false)}
          >
            <Popover.Target>
              <Menu.Item
                leftSection={<IconMan size={24} />}
                closeMenuOnClick={false}
                onClick={() => setOpen(!open)}
              >
                Neuen Nutzer anlegen
              </Menu.Item>
            </Popover.Target>
            <Popover.Dropdown>
              <AddUserForm onAdd={() => setOpen(false)} />
            </Popover.Dropdown>
          </Popover>
        </Box>
      </Menu.Dropdown>
    </Menu>
  );
}

function AddUserForm({ onAdd }: { onAdd: () => void }) {
  const [{ fetching, error }, register] = useMutation(
    graphql(`
      mutation registerExternal(
        $userName: String!
        $email: String!
        $password: String
      ) {
        register(userName: $userName, email: $email, password: $password) {
          token
          refreshToken
          user {
            id
            displayName
            avatar
          }
        }
      }
    `),
  );

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const userName = form["username"].value;
        const email = form["email"].value;
        const password = form["new-password"].value;

        await register({ userName, email, password });

        (event.target as HTMLFormElement).reset();

        onAdd();
      }}
    >
      <LoadingOverlay visible={fetching} />

      <Alert mb="md" hidden={!error} color="red">
        {error?.message}
      </Alert>

      <Stack>
        <TextInput
          required
          name="username"
          autoComplete="username"
          placeholder="Nutzername"
        />

        <TextInput
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email-Adresse"
        />

        <PasswordInput
          name="new-password"
          autoComplete="new-password"
          placeholder="Passwort"
        />

        <Button type="submit">Nutzer erstellen</Button>
      </Stack>
    </form>
  );
}

function MenuOptions({
  selectedUsers,
  onSelect,
}: {
  selectedUsers: { id: string }[];
  onSelect: (user: { id: string }) => void;
}) {
  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query userList {
        users {
          id
          displayName
          avatar
        }
      }
    `),
  });

  return (
    <>
      <LoadingOverlay visible={fetching} />
      {data?.users.map((user) => (
        <Menu.Item
          key={user.id}
          leftSection={<UserAvatar user={user} size={32} />}
          onClick={() => onSelect(user)}
          closeMenuOnClick={false}
          rightSection={
            fetching ? (
              <Loader size={24} />
            ) : selectedUsers.some((s) => s.id === user.id) ? (
              <IconCheck />
            ) : null
          }
        >
          {user.displayName}
        </Menu.Item>
      ))}
    </>
  );
}
