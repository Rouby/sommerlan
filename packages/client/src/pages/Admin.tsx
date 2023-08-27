import { Box, Container } from "@mantine/core";
import { IconClipboardCheck, IconUsers } from "@tabler/icons-react";
import { Outlet } from "@tanstack/router";
import { NavLink } from "../components";

export function Admin() {
  return (
    <Container>
      <Box sx={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
        <Box mr="md">
          <NavLink
            label="Nutzer"
            icon={<IconUsers size={18} />}
            to="/admin/users"
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
