import {
  AppShell,
  Avatar,
  Box,
  Burger,
  Button,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { ChevronRightIcon } from "@modulz/radix-icons";
import { Link } from "@remix-run/react";
import type { To } from "history";
import { useState } from "react";
import { useOptionalUser } from "./utils";
// import { UserInfo } from './components';

export function Layout({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const user = useOptionalUser();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      header={
        <Header height={50} p="sm">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            </MediaQuery>
            <Text>Sommer-Party-LAN</Text>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          p="sm"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ lg: 270 }}
        >
          <Navbar.Section grow>
            <NavbarLink to="/">Übersicht</NavbarLink>
            {user && <NavbarLink to="/participants">Teilnehmer</NavbarLink>}
            {user && <NavbarLink to="/tasks">Aufgaben</NavbarLink>}
            <NavbarLink to="/seating">Sitzplan</NavbarLink>
            <NavbarLink to="/games">Spiele</NavbarLink>
          </Navbar.Section>
          <Navbar.Section>
            <UserInfo />
          </Navbar.Section>
        </Navbar>
      }
    >
      {children}
    </AppShell>
  );
}

function NavbarLink({ children, to }: { children: React.ReactNode; to: To }) {
  return (
    <Button
      style={{ display: "block" }}
      component={Link}
      to={to}
      mt="sm"
      variant="gradient"
    >
      {children}
    </Button>
  );
}

function UserInfo() {
  const theme = useMantineTheme();
  const user = useOptionalUser();

  if (!user) {
    return null;
  }

  return (
    <UnstyledButton
      sx={{
        display: "block",
        width: "100%",
        padding: theme.spacing.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
    >
      <Group noWrap>
        <Avatar radius="xl">
          {user.name
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")}
        </Avatar>
        <Box sx={{ flex: 1, overflow: "hidden" }}>
          <Text size="sm">{user.name}</Text>
          <Text
            size="xs"
            color="dimmed"
            sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
          >
            {user.email}
          </Text>
        </Box>
        <ChevronRightIcon />
      </Group>
    </UnstyledButton>
  );
}
