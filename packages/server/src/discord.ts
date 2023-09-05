import {
  Client,
  GatewayDispatchEvents,
  GatewayIntentBits,
} from "@discordjs/core";
import { REST } from "@discordjs/rest";
import { WebSocketManager } from "@discordjs/ws";
import { cron } from "./cron";
import { User } from "./data";
import { getEnv } from "./env";
import { logger } from "./logger";
import { issueMagicLink } from "./magicLinks";

const token = process.env.DISCORD_BOT_TOKEN!;
const guildId = process.env.DISCORD_GUILD_ID!;

const rest = new REST({ version: "10" }).setToken(token);

const gateway = new WebSocketManager({
  token,
  intents: GatewayIntentBits.DirectMessages,
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
      await sendDiscordMessage(
        message.data.author.id,
        "Ich habe keinen Account gefunden, der mit deinem Discord Account verknüpft ist."
      );
    } else {
      const magicLink = await issueMagicLink(user);

      await sendDiscordMessage(
        message.data.author.id,
        `Du kannst dich mit folgendem Link anmelden ${magicLink}. Der Link ist 15 Minuten gültig.`,
        { ttl: "15m" }
      );
    }
  }
});

export const discord = {
  connect: () => (token && guildId ? gateway.connect() : Promise.resolve()),
  destroy: () => gateway.destroy(),
};

export async function sendDiscordMessage(
  userId: string,
  content: string,
  { ttl }: { ttl?: `${number}m` } = {}
) {
  const channel = await client.api.users.createDM(userId);

  const message = await client.api.channels.createMessage(channel.id, {
    content,
  });

  if (ttl) {
    cron.schedule(
      `@every ${ttl}`,
      async () => {
        await client.api.channels.deleteMessage(channel.id, message.id);
      },
      { oneshot: true }
    );
  }
}

export async function findDiscordUserId(username: string) {
  const result = await client.api.guilds.searchForMembers(guildId, {
    query: username,
  });

  return result.at(0)?.user?.id;
}
