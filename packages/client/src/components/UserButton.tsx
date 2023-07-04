import {
  Alert,
  Avatar,
  Button,
  Group,
  Menu,
  Modal,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { startRegistration } from "@simplewebauthn/browser";
import { IconLock, IconQrcode } from "@tabler/icons-react";
import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useState } from "react";
import { tokenAtom, userAtom } from "../state";
import { trpc } from "../utils";
import { AuthorizeOtherDevice } from "./";

export function UserButton() {
  const user = useAtomValue(userAtom);
  const setToken = useSetAtom(tokenAtom);

  const canScanQRCodes = "BarcodeDetector" in window;
  const [showAuthorizeOtherDevice, setShowAuthorizeOtherDevice] =
    useState(false);

  const { mutateAsync: generateRegistrationOptions } =
    trpc.auth.generateRegistrationOptions.useMutation();
  const { mutateAsync: registerPasskey } =
    trpc.auth.registerPasskey.useMutation();

  const createPasskey = useCallback(async () => {
    if (!user) return;

    setCreatingPasskey(true);
    setPasskeyError(undefined);

    try {
      const options = await generateRegistrationOptions({
        userID: user.id,
      });

      const response = await startRegistration(options);

      const token = await registerPasskey({
        userID: user.id,
        response,
      });

      if (token) setToken(token);
    } catch (err) {
      setCreatingPasskey(false);
      setPasskeyError(err);
    }
  }, [generateRegistrationOptions, registerPasskey, setToken, user]);

  const [showPasskeyOptions, setShowPasskeyOptions] = useState(false);
  const [creatingPasskey, setCreatingPasskey] = useState(false);
  const [passkeyError, setPasskeyError] = useState<unknown>();

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
              disabled={creatingPasskey}
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
        onClose={() => setShowPasskeyOptions(false)}
      >
        {!!passkeyError && (
          <Alert
            color="red"
            withCloseButton
            onClose={() => setPasskeyError(undefined)}
          >
            {passkeyError instanceof Error
              ? passkeyError.message
              : `${passkeyError}`}
          </Alert>
        )}

        <Text>Passkeys allow you to sign in.</Text>

        <Button loading={creatingPasskey} onClick={createPasskey}>
          Create passkey
        </Button>
      </Modal>
    </>
  );
}
