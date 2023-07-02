import {
  AppShell,
  Button,
  Footer,
  Group,
  Header,
  MediaQuery,
  Stack,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { IconCloudComputing, IconHome, IconPrinter } from "@tabler/icons-react";
import { Link, Outlet } from "@tanstack/router";
import { Can, SignUpButton, UserButton } from "./components";

export function Root() {
  const theme = useMantineTheme();

  const linkActiveProps = {
    style: {
      "--active-background-color": theme.fn.primaryColor(),
      "--active-color": theme.white,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  };

  return (
    <AppShell
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <Group position="apart" sx={{ height: "100%" }} mx="xl" noWrap>
            <div>logo</div>
            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <Group noWrap>
                <Link to="/">
                  <Button variant="subtle">Intro</Button>
                </Link>
                <Can I="read" a="User">
                  <Link to="/party">
                    <Button variant="subtle">Party</Button>
                  </Link>
                </Can>
              </Group>
            </MediaQuery>
            <Can I="read" a="User">
              <UserButton />
            </Can>
            <Can I="read" a="User" not>
              <SignUpButton />
            </Can>
          </Group>
        </Header>
      }
      footer={
        <Footer height={{ base: 70, md: 50 }}>
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Group position="center" sx={{ height: "100%" }} mx="xl" noWrap>
              <Link to="/imprint">
                <Button variant="subtle">Imprint</Button>
              </Link>
            </Group>
          </MediaQuery>
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <Group noWrap position="center" sx={{ height: "100%" }} spacing={0}>
              <Link to="/" activeProps={linkActiveProps}>
                <NavButton icon={<IconHome />} label="Home" />
              </Link>
              <Link to="/party" activeProps={linkActiveProps}>
                <NavButton icon={<IconCloudComputing />} label="Party" />
              </Link>
              <Link to="/imprint" activeProps={linkActiveProps}>
                <NavButton icon={<IconPrinter />} label="Imprint" />
              </Link>
            </Group>
          </MediaQuery>
        </Footer>
      }
    >
      <Outlet />
    </AppShell>
  );
}

function NavButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
}) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        width: 70,
        backgroundColor: "var(--active-background-color, inherit)",
        color: `var(--active-color, ${
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black
        })`,
      })}
      p="sm"
    >
      <Stack spacing={4} align="center">
        {icon}
        {label}
      </Stack>
    </UnstyledButton>
  );
}
