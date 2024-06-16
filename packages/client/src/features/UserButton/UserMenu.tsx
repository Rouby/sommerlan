import { Divider, Menu } from "@mantine/core";
import { IconClipboardCheck, IconLock, IconUsers } from "@tabler/icons-react";
import { Link } from "@tanstack/router";
import { useAtomValue, useSetAtom } from "jotai";
import { Can } from "../../components";
import { abilityAtom, tokenAtom } from "../../state";

export function UserMenu() {
  const ability = useAtomValue(abilityAtom);
  const setToken = useSetAtom(tokenAtom);

  return (
    <>
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

      {(ability.can("manage", "User") || ability.can("manage", "Cache")) && (
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
    </>
  );
}
