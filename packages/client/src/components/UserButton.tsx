import { Avatar, Group, Menu, Modal, UnstyledButton } from "@mantine/core";
import { IconLock, IconQrcode, IconUsers } from "@tabler/icons-react";
import { Link } from "@tanstack/router";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { userAtom } from "../state";
import { AuthorizeOtherDevice, Can } from "./";
import { CreatePasskeyFlow } from "./CreatePasskeyFlow";

export function UserButton() {
  const user = useAtomValue(userAtom);

  const canScanQRCodes = "BarcodeDetector" in window;
  const [showAuthorizeOtherDevice, setShowAuthorizeOtherDevice] =
    useState(false);

  const [showPasskeyOptions, setShowPasskeyOptions] = useState(false);

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
          <Menu.Label>Application</Menu.Label>

          <Menu.Item
            icon={<IconQrcode size={14} />}
            onClick={() => setShowAuthorizeOtherDevice(true)}
          >
            {canScanQRCodes ? "QR Code einscannen" : "QR Code anzeigen"}
          </Menu.Item>

          {user.devices.length !== -1 && (
            <Menu.Item
              icon={<IconLock size={14} />}
              onClick={() => setShowPasskeyOptions(true)}
            >
              Passkey erstellen
            </Menu.Item>
          )}

          <Can I="manage" a="User">
            <Menu.Label>Users</Menu.Label>
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
