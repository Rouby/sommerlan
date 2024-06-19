import { Box, Container } from "@mantine/core";
import { IconClipboardCheck, IconCoin, IconUsers } from "@tabler/icons-react";
import { Outlet, createLazyFileRoute } from "@tanstack/react-router";
import { NavLink } from "../components";

export const Route = createLazyFileRoute("/admin")({
  component: () => (
    <Container>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          alignItems: "start",
        }}
      >
        <Box mr="md">
          <NavLink
            label="Nutzer"
            leftSection={<IconUsers size={18} />}
            to="/admin/users"
          />
          <NavLink
            label="Budget"
            leftSection={<IconCoin size={18} />}
            to="/admin/budget"
          />
          <NavLink
            label="Cache"
            leftSection={<IconClipboardCheck size={18} />}
            to="/admin/cache"
          />
        </Box>
        <Outlet />
      </Box>
    </Container>
  ),
});
