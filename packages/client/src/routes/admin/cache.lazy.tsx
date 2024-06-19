import { Box, Button } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "urql";
import { CardWithHeader } from "../../components";
import { graphql } from "../../gql";

export const Route = createLazyFileRoute("/admin/cache")({
  component: () => {
    const [{ fetching }, syncCache] = useMutation(
      graphql(`
        mutation syncCache {
          syncCache(clear: true)
        }
      `),
    );

    return (
      <CardWithHeader header="Cache">
        <Box p="sm">
          <Button
            variant="light"
            color="orange"
            onClick={() => syncCache({})}
            loading={fetching}
          >
            Cache aktualisieren
          </Button>
        </Box>
      </CardWithHeader>
    );
  },
});
