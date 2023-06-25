import { Avatar, Group, Menu, Modal, UnstyledButton } from "@mantine/core";
import { IconQrcode } from "@tabler/icons-react";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { userAtom } from "../state";
import { AuthorizeOtherDevice } from "./";

export function UserButton() {
  const user = useAtomValue(userAtom);

  const canScanQRCodes = "BarcodeDetector" in window;
  const [showAuthorizeOtherDevice, setShowAuthorizeOtherDevice] =
    useState(false);

  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <UnstyledButton>
            <Group noWrap>
              <Avatar src={user?.avatar} radius="xl" />
              {user?.displayName}
            </Group>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          {canScanQRCodes && (
            <Menu.Item
              icon={<IconQrcode size={14} />}
              onClick={() => setShowAuthorizeOtherDevice(true)}
            >
              Scan QR Code
            </Menu.Item>
          )}
        </Menu.Dropdown>
      </Menu>
      <Modal
        opened={showAuthorizeOtherDevice}
        onClose={() => setShowAuthorizeOtherDevice(false)}
      >
        <AuthorizeOtherDevice
          active={showAuthorizeOtherDevice}
          onClose={() => setShowAuthorizeOtherDevice(false)}
        />
      </Modal>
    </>
  );
}
