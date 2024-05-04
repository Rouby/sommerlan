import { Box, Container } from "@mantine/core";
import { IconClipboardCheck, IconCoin, IconUsers } from "@tabler/icons-react";
import { Outlet } from "@tanstack/router";
import { NavLink } from "../components";

export function Admin() {
  return (
    <Container>
      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          alignItems: "start",
          "@media (max-width: 48em)": {
            gridTemplateColumns: "1fr",
            gap: theme.spacing.md,
          },
        })}
      >
        <Box mr="md">
          <NavLink
            label="Nutzer"
            icon={<IconUsers size={18} />}
            to="/admin/users"
          />
          <NavLink
            label="Budget"
            icon={<IconCoin size={18} />}
            to="/admin/budget"
          />
          <NavLink
            label="Cache"
            icon={<IconClipboardCheck size={18} />}
            to="/admin/cache"
          />
        </Box>
        <Outlet />
      </Box>
    </Container>
  );
}
