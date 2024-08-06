import { Group, Loader, MultiSelect, Table } from "@mantine/core";
import { useMutation, useQuery } from "urql";
import { graphql } from "../../gql";
import { Role } from "../../gql/graphql";

export function AdminUsers() {
  const [{ data }] = useQuery({
    query: graphql(`
      query adminUsers {
        users {
          id
          displayName
          avatar
          email
          roles
        }
      }
    `),
  });

  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nutzer</Table.Th>
            <Table.Th>Rollen</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.users.map((user) => (
            <Table.Tr key={user.id}>
              <Table.Td>{user.displayName}</Table.Td>
              <Table.Td>
                <UserRoles id={user.id} roles={user.roles} />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}

function UserRoles({ id, roles }: { id: string; roles: Role[] }) {
  const [{ fetching }, updateRoles] = useMutation(
    graphql(`
      mutation updateUserRoles($id: ID!, $roles: [Role!]!) {
        updateRoles(id: $id, roles: $roles) {
          id
          roles
        }
      }
    `),
  );

  return (
    <Group>
      <MultiSelect
        placeholder="weitere Rollen"
        data={[Role.Trusted, Role.Admin, Role.Doorkeeper, Role.Bookkeeper]}
        value={roles}
        onChange={(roles) => updateRoles({ id, roles: roles as Role[] })}
      />
      {fetching && <Loader size="sm" type="dots" />}
    </Group>
  );
}
