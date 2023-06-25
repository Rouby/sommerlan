import { Button, Group, Header } from "@mantine/core";
import { Link, Outlet } from "@tanstack/router";
import { Can, SignUpButton, UserButton } from "./components";

export function Root() {
  return (
    <>
      <Header height={60}>
        <Group position="apart" sx={{ height: "100%" }} mx="xl">
          <div />
          <Group>
            <Link to="/">
              <Button variant="subtle">Intro</Button>
            </Link>
            <Can I="read" a="User">
              <Link to="/party">
                <Button variant="subtle">Party</Button>
              </Link>
            </Can>
            <Link to="/imprint">
              <Button variant="subtle">Imprint</Button>
            </Link>
          </Group>
          <Can I="read" a="User">
            <UserButton />
          </Can>
          <Can I="read" a="User" not>
            <SignUpButton />
          </Can>
        </Group>
      </Header>
      <Outlet />
    </>
  );
}
