import {
  Avatar,
  Divider,
  Group,
  Menu,
  Modal,
  UnstyledButton,
} from "@mantine/core";
import {
  IconClipboardCheck,
  IconLock,
  IconQrcode,
  IconUsers,
} from "@tabler/icons-react";
import { Link } from "@tanstack/router";
import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { abilityAtom, tokenAtom, userAtom } from "../state";
import { AuthorizeOtherDevice, Can } from "./";
import { CreatePasskeyFlow } from "./CreatePasskeyFlow";

export function UserButton() {
  const setToken = useSetAtom(tokenAtom);
  const user = useAtomValue(userAtom);

  const canScanQRCodes = "BarcodeDetector" in window;
  const [showAuthorizeOtherDevice, setShowAuthorizeOtherDevice] =
    useState(false);

  const [showPasskeyOptions, setShowPasskeyOptions] = useState(false);

  const ability = useAtomValue(abilityAtom);

  if (!user) return null;

  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <UnstyledButton>
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
            Mein Profil
          </Menu.Item>

          <Menu.Label>Anwendung</Menu.Label>

          <Menu.Item
            icon={<IconQrcode size={14} />}
            onClick={() => setShowAuthorizeOtherDevice(true)}
          >
            {canScanQRCodes ? "QR Code scannen" : "QR Code anzeigen"}
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

      <Modal
        size="lg"
        opened={showAuthorizeOtherDevice}
        onClose={() => setShowAuthorizeOtherDevice(false)}
      >
        <AuthorizeOtherDevice
          active={showAuthorizeOtherDevice}
          onClose={() => setShowAuthorizeOtherDevice(false)}
        />
      </Modal>

      <Modal
        size="lg"
        opened={showPasskeyOptions}
        withCloseButton={false}
        onClose={() => setShowPasskeyOptions(false)}
      >
        <CreatePasskeyFlow />
      </Modal>
    </>
  );
}
