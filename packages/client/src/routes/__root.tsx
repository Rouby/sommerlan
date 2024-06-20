import {
  AppShell,
  Button,
  Group,
  Image,
  Stack,
  UnstyledButton,
} from "@mantine/core";
import {
  IconCalendar,
  IconCloudComputing,
  IconDeviceGamepad,
  IconHome,
} from "@tabler/icons-react";
import {
  Link,
  Outlet,
  createRootRoute,
  useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { useMutation } from "urql";
import { Can } from "../components";
import { SignUpButton, UserButton } from "../features";
import { graphql } from "../gql";
import Logo from "../illustrations/lan-logo.jpg";
import { refreshTokenAtom, tokenAtom } from "../state";

export const Route = createRootRoute({
  validateSearch: (search) =>
    ({
      auth:
        "auth" in search && typeof search.auth === "string"
          ? search.auth
          : undefined,
    }) as { auth?: string } | undefined,
  component: () => {
    const setToken = useSetAtom(tokenAtom);
    const setRefreshToken = useSetAtom(refreshTokenAtom);

    const search = Route.useSearch();
    const navigate = useNavigate();

    const [, loginMagicLink] = useMutation(
      graphql(`
        mutation loginMagicLink($magicLinkId: String!) {
          loginMagicLink(magicLinkId: $magicLinkId) {
            token
            refreshToken
          }
        }
      `),
    );

    const requestUnderway = useRef(false);
    useEffect(() => {
      if (requestUnderway.current) return;
      if (search?.auth) {
        requestUnderway.current = true;
        loginMagicLink({ magicLinkId: search.auth }).then(({ data }) => {
          setToken(data?.loginMagicLink?.token ?? null);
          setRefreshToken(data?.loginMagicLink?.refreshToken ?? null);
          navigate({ search: undefined });
        });
      }
    }, [search?.auth]);

    const linkActiveProps = {
      style: {
        "--active-background-color": "var(--mantine-primary-color-light)",
        "--active-color": "var(--mantine-primary-color-light-color)",
      } as any,
    };

    return (
      <>
        <AppShell
          header={{ height: { base: 50, md: 70 } }}
          footer={{ height: { base: 70, md: 0 } }}
        >
          <AppShell.Header>
            <Group wrap="nowrap" justify="space-between" h="100%" mx="xl">
              <div>
                <Image radius="md" src={Logo} h={68} w="auto" fit="contain" />
              </div>

              <Group wrap="nowrap" visibleFrom="md">
                <Link to="/">
                  <Button variant="subtle">Intro</Button>
                </Link>
                <Link to="/party">
                  <Button variant="subtle">Party</Button>
                </Link>
                <Link to="/games">
                  <Button variant="subtle">Spiele</Button>
                </Link>
                <Link to="/events">
                  <Button variant="subtle">Events</Button>
                </Link>
                <Link to="/imprint">
                  <Button variant="subtle">Impressum</Button>
                </Link>
              </Group>

              <Group justify="center" mx="xl" wrap="nowrap" hiddenFrom="md">
                <Link to="/imprint">
                  <Button variant="subtle">Imprint</Button>
                </Link>
              </Group>

              <Can I="update" a="User" otherwise={<SignUpButton />}>
                <UserButton />
              </Can>
            </Group>
          </AppShell.Header>

          <AppShell.Main m="md">
            <Outlet />
          </AppShell.Main>

          <AppShell.Footer>
            {/* <MediaQuery smallerThan="md" styles={{ display: "none" }}> */}

            {/* <MediaQuery largerThan="md" styles={{ display: "none" }}> */}
            <Group
              justify="center"
              h="110%"
              gap={0}
              wrap="nowrap"
              hiddenFrom="md"
            >
              <Link to="/" activeProps={linkActiveProps}>
                <NavButton icon={<IconHome />} label="Home" />
              </Link>
              <Link to="/party" activeProps={linkActiveProps}>
                <NavButton icon={<IconCloudComputing />} label="Party" />
              </Link>
              <Link to="/games" activeProps={linkActiveProps}>
                <NavButton icon={<IconDeviceGamepad />} label="Spiele" />
              </Link>
              <Link to="/events" activeProps={linkActiveProps}>
                <NavButton icon={<IconCalendar />} label="Events" />
              </Link>
            </Group>
          </AppShell.Footer>
        </AppShell>
        {import.meta.env.DEV && <TanStackRouterDevtools />}
      </>
    );
  },
});

function NavButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
}) {
  return (
    <UnstyledButton
      style={{
        width: 70,
        backgroundColor: "var(--active-background-color, inherit)",
        color: `var(--active-color)`,
      }}
      p="sm"
    >
      <Stack gap={4} align="center">
        {icon}
        {label}
      </Stack>
    </UnstyledButton>
  );
}
