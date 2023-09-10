import { Avatar, Divider, Group, Menu, UnstyledButton } from "@mantine/core";
import { IconClipboardCheck, IconLock, IconUsers } from "@tabler/icons-react";
import { Link } from "@tanstack/router";
import { useAtomValue, useSetAtom } from "jotai";
import { abilityAtom, tokenAtom, userAtom } from "../state";
import { Can } from "./";

export function UserButton() {
  const setToken = useSetAtom(tokenAtom);
  const user = useAtomValue(userAtom);

  const ability = useAtomValue(abilityAtom);

  if (!user) return null;

  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <UnstyledButton data-cy="user button">
            <Group noWrap>
              <Avatar src={user.avatar} radius="xl" />
              {user.displayName}
            </Group>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Nutzer</Menu.Label>

          <Menu.Item
            component={Link}
            icon={<IconUsers size={14} />}
            to="/profile"
            search={{}}
            params={{}}
          >
            Einstellungen
          </Menu.Item>

          {(ability.can("manage", "User") ||
            ability.can("manage", "Cache")) && (
            <>
              <Menu.Label>Admin</Menu.Label>

              <Can I="manage" a="User">
                <Menu.Item
                  component={Link}
                  icon={<IconUsers size={14} />}
                  to="/admin/users"
                  search={{}}
                  params={{}}
                >
                  Nutzer verwalten
                </Menu.Item>
              </Can>

              <Can I="manage" a="Cache">
                <Menu.Item
                  component={Link}
                  icon={<IconClipboardCheck size={14} />}
                  to="/admin/cache"
                  search={{}}
                  params={{}}
                >
                  Cache verwalten
                </Menu.Item>
              </Can>
            </>
          )}

          <Divider />

          <Menu.Item
            icon={<IconLock size={14} />}
            onClick={() => setToken(null)}
          >
            Ausloggen
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
