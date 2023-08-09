import { Alert, Box, Button, Group, Text } from "@mantine/core";
import { startRegistration } from "@simplewebauthn/browser";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useAtomValue, useSetAtom } from "jotai";
import { ReactComponent as FingerprintIllustration } from "../illustrations/undraw_fingerprint_login_re_t71l.svg";
import { ReactComponent as OrderConfirmedIllustration } from "../illustrations/undraw_order_confirmed_re_g0if.svg";
import { tokenAtom, userAtom } from "../state";
import { trpc } from "../utils";

export function CreatePasskeyFlow() {
  const user = useAtomValue(userAtom);
  const setToken = useSetAtom(tokenAtom);

  const { mutateAsync: generateRegistrationOptions } =
    trpc.auth.generateRegistrationOptions.useMutation();
  const { mutateAsync: registerPasskey } =
    trpc.auth.registerPasskey.useMutation();

  const context = trpc.useContext();
  const {
    mutate: createPasskey,
    error,
    reset,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: async () => {
      if (!user) return;

      const options = await generateRegistrationOptions({
        userID: user.id,
      });

      const response = await startRegistration(options);

      const token = await registerPasskey({
        name: navigator.userAgent,
        userID: user.id,
        response,
      });

      if (token) setToken(token);
    },
    onSuccess: () => {
      context.user.devices.invalidate();
    },
  });

  return (
    <>
      <Alert
        mb="md"
        hidden={!error}
        color="red"
        withCloseButton
        onClose={() => reset()}
      >
        {error instanceof Error ? error.message : `${error}`}
      </Alert>

      <Box sx={{ overflow: "hidden" }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={`${isSuccess}`}
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000, position: "absolute", width: "100%" }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
            }}
          >
            {!isSuccess ? (
              <FingerprintIllustration />
            ) : (
              <OrderConfirmedIllustration />
            )}
          </motion.div>
        </AnimatePresence>
      </Box>

      {isSuccess ? (
        <Text mt="sm" align="center">
          Dein Passkey wurde erfolgreich erstellt und gespeichert. Du kannst
          dich in Zukunft einfach damit einloggen.
        </Text>
      ) : (
        <Group mt="sm" position="right">
          <Text>Verwende einen sicheren Passkey als Login-Methode.</Text>

          <Button loading={isLoading} onClick={() => createPasskey()}>
            Passkey erstellen
          </Button>
        </Group>
      )}
    </>
  );
}
