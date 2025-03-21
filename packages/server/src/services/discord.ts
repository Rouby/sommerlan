import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
  Events,
  GatewayIntentBits,
  MessageCreateOptions,
  MessagePayload,
} from "discord.js";
import { User } from "../data";
import { getEnv } from "../env";
import { logger } from "../logger";
import { issueMagicLink } from "./magicLinks";
import { scheduleTask, scheduleTimeout } from "./scheduler";

const token = process.env.DISCORD_BOT_TOKEN!;
const guildId = process.env.DISCORD_GUILD_ID!;
const roleId = process.env.DISCORD_ROLE_ID!;

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

client.once("ready", () => {
  logger.info("Discord client ready");
});

export const discord =
  process.env.FAKE_API || !token || !guildId
    ? {
        connect: () => Promise.resolve(),
        destroy: () => Promise.resolve(),
      }
    : {
        connect: () => client.login(token),
        destroy: () => client.destroy(),
      };

export async function sendDiscordMessage(
  userId: string,
  options: string | MessagePayload | MessageCreateOptions,
  { ttl }: { ttl?: `${number}m` } = {},
) {
  const channel = await client.users.createDM(userId);

  const message = await channel?.send(options);

  if (ttl && message) {
    scheduleTimeout(ttl, async () => {
      await message.delete();
    });
  }
}

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) {
    // Dont handle bot messages
    return;
  }
  const msgContent = message.content.toLowerCase();

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

  logger.info({ message }, "Received discord message");

  if (msgContent.includes("login")) {
    await message.channel.sendTyping();

    const user = await User.findByDiscordId(message.author.id);

    if (!user || true) {
      const button = new ButtonBuilder()
        .setCustomId("email")
        .setLabel("Email eingeben")
        .setStyle(ButtonStyle.Primary);

      const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

      await message.reply({
        content:
          "Ich habe keinen Account gefunden, der mit deinem Discord Account verknüpft ist. Klicke den Button um deine Email einzugeben.",
        components: [row],
      });
    } else {
      const magicLink = await issueMagicLink(user);

      const reply = await message.reply({
        content: `Du kannst dich mit folgendem Link anmelden ${magicLink}. Der Link ist 15 Minuten gültig.`,
      });

      scheduleTimeout("5m", async () => {
        message.deletable && (await message.delete());
        reply.deletable && (await reply.delete());
      });
    }
  }
});

const addedRoleCacheForNonProd = new Set<string>();
scheduleTask("@every 5m", async () => {
  const users = await User.filter((user) => !!user.discordUserId);
  const discordUsers = await client.guilds
    .resolve(guildId)
    ?.members.fetch({ limit: 1000 });
  const discordUsersRegisteredWithoutRole = discordUsers?.filter(
    (member) =>
      users.some((user) => user.discordUserId === member.user?.id) &&
      !member.roles.cache.has(roleId),
  );
  logger.info(
    {
      users: discordUsersRegisteredWithoutRole?.map(
        (member) => member.user?.username,
      ),
    },
    "Adding role to registered discord users without role",
  );

  for (const member of discordUsersRegisteredWithoutRole?.values() ?? []) {
    if (!member.user) continue;

    logger.info({ user: member.user.username, roleId }, "Adding role to user");
    if (getEnv() === "production") {
      try {
        await member.roles.add(roleId);
        await sendDiscordMessage(member.user.id, {
          content:
            "Yay, willkommen als vollwertiges Mitglied (aka auf der SommerLAN Seite angemeldet).",
        });
      } catch (err) {
        logger.error(err, "Error adding role to user");
      }
    } else if (!addedRoleCacheForNonProd.has(member.user.id)) {
      addedRoleCacheForNonProd.add(member.user.id);
    }
  }
});
