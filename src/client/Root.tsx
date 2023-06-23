import {
  Avatar,
  Button,
  Group,
  Header,
  Menu,
  Modal,
  UnstyledButton,
} from "@mantine/core";
import { IconQrcode } from "@tabler/icons-react";
import { Link, Outlet } from "@tanstack/router";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { AuthorizeOtherDevice, Can } from "./components";
import { userAtom } from "./state";

export function Root() {
  return (
    <>
      <Header height={60}>
        <Group position="apart" sx={{ height: "100%" }} mx="xl">
          <div />
          <Group>
            <Link to="/">
              <Button variant="subtle">Intro</Button>
            </Link>
            <Can I="read" a="User">
              <Link to="/party">
                <Button variant="subtle">Party</Button>
              </Link>
            </Can>
          </Group>
          <Group>
            <Can I="read" a="User">
              <UserButton />
            </Can>
            <Can I="read" a="User" not>
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Can>
          </Group>
        </Group>
      </Header>
      <Outlet />
    </>
  );
}

function UserButton() {
  const user = useAtomValue(userAtom);

  const canScanQRCodes = "BarcodeDetector" in window;
  const [showAuthorizeOtherDevice, setShowAuthorizeOtherDevice] =
    useState(false);

  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <UnstyledButton>
            <Group>
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
