import {
  AppShell,
  Burger,
  Button,
  Header,
  MediaQuery,
  Navbar,
  Text,
} from '@mantine/core';
import { To } from 'history';
import { useState } from 'react';
import { Link } from 'remix';
import { UserInfo } from './components';

export function Layout({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      header={
        <Header height={50} padding="sm">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
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
          padding="sm"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ lg: 270 }}
        >
          <Navbar.Section grow>
            <NavbarLink to="/">Übersicht</NavbarLink>
            <NavbarLink to="/tasks">Aufgaben</NavbarLink>
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
      style={{ display: 'block' }}
      component={Link}
      to={to}
      mt="sm"
      variant="gradient"
    >
      {children}
    </Button>
  );
}
