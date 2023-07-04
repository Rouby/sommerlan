import { Avatar, Group, Menu, Modal, UnstyledButton } from "@mantine/core";
import { IconLock, IconQrcode } from "@tabler/icons-react";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { userAtom } from "../state";
import { AuthorizeOtherDevice } from "./";
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
            {canScanQRCodes ? "Scan Auth QR Code" : "Provide Auth QR Code"}
          </Menu.Item>

          {user.devices.length !== -1 && (
            <Menu.Item
              icon={<IconLock size={14} />}
              onClick={() => setShowPasskeyOptions(true)}
            >
              Create a passkey
            </Menu.Item>
          )}
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
