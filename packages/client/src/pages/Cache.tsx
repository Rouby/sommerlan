import { Box, Button } from "@mantine/core";
import { CardWithHeader } from "../components";
import { trpc } from "../utils";

export function Cache() {
  const { mutate: syncCache, isLoading } = trpc.cache.sync.useMutation();

  return (
    <CardWithHeader header="Cache">
      <Box p="sm">
        <Button
          variant="light"
          color="orange"
          onClick={() => syncCache({ clear: true })}
          loading={isLoading}
        >
          Cache aktualisieren
        </Button>
      </Box>
    </CardWithHeader>
  );
}
