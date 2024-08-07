import { Divider, Menu } from "@mantine/core";
import {
  IconChecklist,
  IconClipboardCheck,
  IconCoin,
  IconGoGame,
  IconLock,
  IconUsers,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import dayjs from "dayjs";
import { useAtomValue, useSetAtom } from "jotai";
import { useQuery } from "urql";
import { Can } from "../../components";
import { graphql } from "../../gql";
import { abilityAtom, tokenAtom } from "../../state";

export function UserMenu() {
  const ability = useAtomValue(abilityAtom);
  const setToken = useSetAtom(tokenAtom);

  const [{ data }] = useQuery({
    query: graphql(`
      query nextPartyDates {
        nextParty {
          __typename
          id
          startDate
          endDate
        }
      }
    `),
  });

  return (
    <>
      <Menu.Label>Nutzer</Menu.Label>

      <Menu.Item
        component={Link}
        leftSection={<IconUsers size={14} />}
        to="/profile"
      >
        Einstellungen
      </Menu.Item>

      {data?.nextParty && (
        <Can
          I="checkIn"
          this={{
            ...data.nextParty,
            startDate: dayjs(data.nextParty.startDate, "YYYY-MM-DD")
              .set("hour", 12)
              .toDate(),
            endDate: dayjs(data.nextParty.endDate, "YYYY-MM-DD")
              .set("hour", 12)
              .toDate(),
          }}
        >
          <Menu.Item
            component={Link}
            leftSection={<IconUsers size={14} />}
            to="/party/check-in"
          >
            Check-In
          </Menu.Item>
        </Can>
      )}

      {(ability.can("delete", "User") ||
        ability.can("delete", "Budget") ||
        ability.can("delete", "Cache")) && (
        <>
          <Menu.Label>Admin</Menu.Label>

          <Can I="delete" a="User">
            <Menu.Item
              component={Link}
              leftSection={<IconUsers size={14} />}
              to="/admin/users"
            >
              Nutzer verwalten
            </Menu.Item>
          </Can>

          {data?.nextParty && (
            <Can I="checkIn" a="User">
              <Menu.Item
                component={Link}
                leftSection={<IconChecklist size={14} />}
                to="/admin/users/check-in"
              >
                Nutzer Einchecken
              </Menu.Item>
            </Can>
          )}

          <Can I="update" a="Game">
            <Menu.Item
              component={Link}
              leftSection={<IconGoGame size={14} />}
              to="/admin/games"
            >
              Spiele verwalten
            </Menu.Item>
          </Can>

          <Can I="delete" a="Budget">
            <Menu.Item
              component={Link}
              leftSection={<IconCoin size={14} />}
              to="/admin/budget"
            >
              Budget verwalten
            </Menu.Item>
          </Can>

          <Can I="delete" a="Cache">
            <Menu.Item
              component={Link}
              leftSection={<IconClipboardCheck size={14} />}
              to="/admin/cache"
            >
              Cache verwalten
            </Menu.Item>
          </Can>
        </>
      )}

      <Divider />

      <Menu.Item
        leftSection={<IconLock size={14} />}
        onClick={() => setToken(null)}
      >
        Ausloggen
      </Menu.Item>
    </>
  );
}
