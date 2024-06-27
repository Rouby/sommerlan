import { Alert, LoadingOverlay } from "@mantine/core";
import { usePasskeyAuthFlow } from "../../hooks";
import FingerprintIllustration from "../../illustrations/undraw_fingerprint_login_re_t71l.svg?react";

export function SignInViaPasskey() {
  const { isLoading, error } = usePasskeyAuthFlow();

  return (
    <>
      <LoadingOverlay visible={isLoading} />

      <Alert mb="md" hidden={!error} color="red">
        {error?.message}
      </Alert>

      <FingerprintIllustration />
    </>
  );
}
