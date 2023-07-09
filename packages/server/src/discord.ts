import {
  Client,
  GatewayDispatchEvents,
  GatewayIntentBits,
} from "@discordjs/core";
import { REST } from "@discordjs/rest";
import { WebSocketManager } from "@discordjs/ws";
import { cron } from "./cron";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const token = process.env.DISCORD_BOT_TOKEN!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const guildId = process.env.DISCORD_GUILD_ID!;

const rest = new REST({ version: "10" }).setToken(token);

const gateway = new WebSocketManager({
  token,
  intents: GatewayIntentBits.DirectMessages,
  rest,
});

const client = new Client({ rest, gateway });

client.once(GatewayDispatchEvents.Ready, () => {
  // sendDiscordMessage("154637662890885120", "Hello", { ttl: "1m" });
});

export const discord = {
  connect: () => gateway.connect(),
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
