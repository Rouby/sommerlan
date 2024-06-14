import {
  Avatar,
  Divider,
  Group,
  Menu,
  UnstyledButton,
  rem,
} from "@mantine/core";
import {
  IconChevronRight,
  IconClipboardCheck,
  IconLock,
  IconUsers,
} from "@tabler/icons-react";
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
          <UnstyledButton data-testid="user button">
            <Group wrap="nowrap">
              <Avatar src={user.avatar} radius="xl" />
              {user.displayName}
              <IconChevronRight
                style={{ width: rem(14), height: rem(14) }}
                stroke={1.5}
              />
            </Group>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Nutzer</Menu.Label>

          <Menu.Item
            component={Link}
            leftSection={<IconUsers size={14} />}
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
                  leftSection={<IconUsers size={14} />}
                  to="/admin/users"
                  search={{}}
                  params={{}}
                >
                  Nutzer verwalten
                </Menu.Item>
              </Can>

              <Can I="manage" a="Budget">
                <Menu.Item
                  component={Link}
                  leftSection={<IconUsers size={14} />}
                  to="/admin/budget"
                  search={{}}
                  params={{}}
                >
                  Budget verwalten
                </Menu.Item>
              </Can>

              <Can I="manage" a="Cache">
                <Menu.Item
                  component={Link}
                  leftSection={<IconClipboardCheck size={14} />}
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
            leftSection={<IconLock size={14} />}
            onClick={() => setToken(null)}
          >
            Ausloggen
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
