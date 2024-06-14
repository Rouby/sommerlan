import { Alert, Box, Button, Group, Text } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { usePasskeyCreateFlow } from "../hooks";
import FingerprintIllustration from "../illustrations/undraw_fingerprint_login_re_t71l.svg?react";
import OrderConfirmedIllustration from "../illustrations/undraw_order_confirmed_re_g0if.svg?react";

export function CreatePasskeyFlow() {
  const {
    mutate: createPasskey,
    error,
    reset,
    isLoading,
    isSuccess,
  } = usePasskeyCreateFlow();

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

      <Box style={{ overflow: "hidden" }}>
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
        <Text mt="sm" ta="center">
          Dein Passkey wurde erfolgreich erstellt und gespeichert. Du kannst
          dich in Zukunft einfach damit einloggen.
        </Text>
      ) : (
        <Group mt="sm" justify="right">
          <Text>Verwende einen sicheren Passkey als Login-Methode.</Text>

          <Button loading={isLoading} onClick={() => createPasskey()}>
            Passkey erstellen
          </Button>
        </Group>
      )}
    </>
  );
}
