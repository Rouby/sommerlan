import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Container,
  Group,
  Header,
  Space,
  Text,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "@remix-run/react";
import { Moon, Sun } from "tabler-icons-react";
import { useOptionalUser } from "~/utils";
import { useAbility } from "./Ability";

export function Layout({ children }: { children: React.ReactNode }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const ability = useAbility();
  return (
    <>
      <Header height={65} fixed>
        <Container sx={{ height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              overflowX: "auto",
              overflowY: "hidden",
            }}
          >
            <UserInfo />
            <Button component={Link} to="/#news" variant="subtle">
              Neues
            </Button>
            {false && (
              <Button
                component={Link}
                to="/#party"
                variant="subtle"
                sx={{ "@media(max-width: 600px)": { display: "none" } }}
              >
                Party
              </Button>
            )}
            <Button component={Link} to="/participants" variant="subtle">
              Teilnehmer
            </Button>
            <Button component={Link} to="/tasks" variant="subtle">
              Aufgaben
            </Button>
            {ability.can("manage", "Party") ? (
              <Button component={Link} to="/admin" variant="subtle">
                Admin
              </Button>
            ) : null}
            <ActionIcon
              onClick={() => toggleColorScheme()}
              title="Farbschema wechseln"
            >
              {colorScheme === "dark" ? <Moon /> : <Sun />}
            </ActionIcon>
          </Box>
        </Container>
      </Header>
      <Space h={65} />
      {children}
    </>
  );
}

function UserInfo({ ...props }) {
  const theme = useMantineTheme();
  const user = useOptionalUser();
  const isMobile = useMediaQuery("(max-width: 600px)");

  if (!user) {
    return (
      <Button component={Link} to="/join" variant="subtle">
        Anmelden
      </Button>
    );
  }

  return (
    <UnstyledButton
      sx={{
        padding: theme.spacing.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "@media (hover: hover)": {
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        },
        "@media (hover: none)": {
          "&:active": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        },
      }}
      component={Link}
      to="/user"
      {...props}
    >
      <Group noWrap>
        <Avatar radius="xl">
          {user.name
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")}
        </Avatar>
        {isMobile ? null : (
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
        )}
      </Group>
    </UnstyledButton>
  );
}
