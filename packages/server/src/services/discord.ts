import {
  Client,
  GatewayDispatchEvents,
  GatewayIntentBits,
  RESTPostAPIChannelMessageJSONBody,
} from "@discordjs/core";
import { REST } from "@discordjs/rest";
import { WebSocketManager } from "@discordjs/ws";
import { User } from "../data";
import { getEnv } from "../env";
import { logger } from "../logger";
import { issueMagicLink } from "./magicLinks";
import { scheduleTask, scheduleTimeout } from "./scheduler";

const token = process.env.DISCORD_BOT_TOKEN!;
const guildId = process.env.DISCORD_GUILD_ID!;
const roleId = process.env.DISCORD_ROLE_ID!;

const rest = new REST({ version: "10" }).setToken(token);

const gateway = new WebSocketManager({
  token,
  intents:
    GatewayIntentBits.DirectMessages |
    GatewayIntentBits.Guilds |
    GatewayIntentBits.GuildMembers,
  rest,
});

const client = new Client({ rest, gateway });

client.on(GatewayDispatchEvents.MessageCreate, async (message) => {
  if (message.data.author.bot) {
    // Dont handle bot messages
    return;
  }
  const msgContent = message.data.content.toLowerCase();

  switch (getEnv()) {
    case "development":
      if (!msgContent.includes("dev")) {
        // Dont handle this message
        return;
      }
      break;
    case "staging":
      if (!msgContent.includes("staging")) {
        // Dont handle this message
        return;
      }
      break;
    case "production":
      if (msgContent.includes("dev") || msgContent.includes("staging")) {
        // Dont handle this message
        return;
      }
      break;
  }

  logger.info({ message: { data: message.data } }, "Received discord message");

  if (msgContent.includes("login")) {
    await client.api.channels.showTyping(message.data.channel_id);

    const user = await User.findByDiscordId(message.data.author.id);

    if (!user) {
      await sendDiscordMessage(message.data.author.id, {
        content:
          "Ich habe keinen Account gefunden, der mit deinem Discord Account verknüpft ist.",
      });
    } else {
      const magicLink = await issueMagicLink(user);

      await sendDiscordMessage(
        message.data.author.id,
        {
          content: `Du kannst dich mit folgendem Link anmelden ${magicLink}. Der Link ist 15 Minuten gültig.`,
        },
        { ttl: "15m" },
      );
    }
  }
});

export const discord =
  process.env.FAKE_API || !token || !guildId
    ? {
        connect: () => Promise.resolve(),
        destroy: () => Promise.resolve(),
      }
    : {
        connect: () => gateway.connect(),
        destroy: () => gateway.destroy(),
      };

export async function sendDiscordMessage(
  userId: string,
  body: RESTPostAPIChannelMessageJSONBody,
  { ttl }: { ttl?: `${number}m` } = {},
) {
  const channel = await client.api.users.createDM(userId);

  const message = await client.api.channels.createMessage(channel.id, {
    ...body,
  });

  if (ttl) {
    scheduleTimeout(ttl, async () => {
      await client.api.channels.deleteMessage(channel.id, message.id);
    });
  }
}

export async function findDiscordUserId(username: string) {
  const result = await client.api.guilds.searchForMembers(guildId, {
    query: username,
  });

  return result.at(0)?.user?.id;
}

const addedRoleCacheForNonProd = new Set<string>();
scheduleTask("@every 5m", async () => {
  const users = await User.filter((user) => !!user.discordUserId);
  const discordUsers = await client.api.guilds.getMembers(guildId, {
    limit: 1000,
  });
  const discordUsersRegisteredWithoutRole = discordUsers.filter(
    (member) =>
      users.some((user) => user.discordUserId === member.user?.id) &&
      !member.roles.includes(roleId),
  );
  logger.info(
    {
      users: discordUsersRegisteredWithoutRole.map(
        (member) => member.user?.username,
      ),
    },
    "Adding role to registered discord users without role",
  );

  for (const member of discordUsersRegisteredWithoutRole) {
    if (!member.user) continue;

    if (getEnv() === "production") {
      logger.info(
        { user: member.user.username, roleId },
        "Adding role to user",
      );
      try {
        await client.api.guilds.addRoleToMember(
          guildId,
          member.user.id,
          roleId,
        );
        await sendDiscordMessage(member.user.id, {
          content:
            "Yay, willkommen als vollwertiges Mitglied (aka auf der SommerLAN Seite angemeldet).",
        });
      } catch (err) {
        logger.error(err, "Error adding role to user");
      }
    } else if (!addedRoleCacheForNonProd.has(member.user.id)) {
      logger.info(
        { user: member.user.username, roleId },
        "Adding role to user",
      );
      addedRoleCacheForNonProd.add(member.user.id);
    }
  }
});
