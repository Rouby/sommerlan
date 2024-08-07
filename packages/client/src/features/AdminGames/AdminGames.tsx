import {
  Avatar,
  Button,
  Group,
  Input,
  Modal,
  Stack,
  Table,
} from "@mantine/core";
import { useState } from "react";
import { useMutation, useQuery } from "urql";
import { ImageInput } from "../../components";
import { graphql } from "../../gql";

export function AdminGames() {
  const [{ data }] = useQuery({
    query: graphql(`
      query adminGames {
        games {
          id
          name
          image
        }
      }
    `),
  });

  const [editGame, setEditGame] = useState<string>();

  const [{ fetching }, updateGame] = useMutation(
    graphql(`
      mutation updateGame($id: ID!, $image: File!) {
        updateGame(input: { id: $id, image: $image }) {
          id
          image
        }
      }
    `),
  );

  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Spiel</Table.Th>
            <Table.Th>Bild</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.games.map((game) => (
            <Table.Tr key={game.id}>
              <Table.Td>{game.name}</Table.Td>
              <Table.Td>
                <Avatar
                  radius="xl"
                  src={game.image}
                  size="xl"
                  onClick={() => setEditGame(game.id)}
                >
                  {game.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </Avatar>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Modal opened={!!editGame} onClose={() => setEditGame(undefined)}>
        <form
          onSubmit={async (evt) => {
            evt.preventDefault();
            const form = evt.target as HTMLFormElement;

            const image = form["image"].files?.item(0) || null;

            await updateGame({ id: editGame!, image });

            setEditGame(undefined);
          }}
        >
          <Stack>
            <Input.Wrapper label="Spiel-Bild">
              <ImageInput
                id="image"
                name="image"
                defaultValue={
                  data?.games.find((game) => game.id === editGame)?.image
                }
                onRemoveImage={() => {}}
              />
            </Input.Wrapper>

            <Group justify="right">
              <Button loading={fetching} type="submit">
                Speichern
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
}
