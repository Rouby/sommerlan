import { Box, Button, Group } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import dayjs from "dayjs";
import { useMutation, useQuery } from "urql";
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

    const [{ data }] = useQuery({
      query: graphql(`
        query getCacheInfo {
          getCacheInfo {
            lastSync
            entries {
              sheet
              patches {
                id
                operations
              }
            }
          }
        }
      `),
    });

    return (
      <CardWithHeader header="Cache">
        <Box p="sm">
          <Box mb="md">
            Letzte Synchronisation:{" "}
            {data?.getCacheInfo?.lastSync
              ? dayjs(data.getCacheInfo.lastSync).format("LLL")
              : "Nie synchronisiert"}
          </Box>
          <Box mb="md">
            Cache Einträge:{" "}
            {data?.getCacheInfo?.entries.flatMap((e) => e.patches).length}
          </Box>
          <Group>
            <Button
              variant="light"
              color="orange"
              onClick={() => syncCache({})}
              loading={fetching}
            >
              Cache speichern und leeren
            </Button>
            <Button
              variant="light"
              color="orange"
              onClick={() => console.log(data?.getCacheInfo)}
              loading={fetching}
            >
              Aktuellen Cache dumpen
            </Button>
          </Group>
        </Box>
      </CardWithHeader>
    );
  },
});
