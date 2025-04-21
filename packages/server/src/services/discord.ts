import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
  Client,
  Events,
  GatewayIntentBits,
  IntentsBitField,
  MessageCreateOptions,
  MessagePayload,
  ModalBuilder,
  Partials,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";
import { Actor, fromPromise } from "xstate";
import { User } from "../data";
import { getEnv } from "../env";
import { logger } from "../logger";
import { loginMachine } from "./discord-interactions/login";
import { issueMagicLink } from "./magicLinks";
import { scheduleTask, scheduleTimeout } from "./scheduler";

const token = process.env.DISCORD_BOT_TOKEN!;
const guildId = process.env.DISCORD_GUILD_ID!;
const roleId = process.env.DISCORD_ROLE_ID!;

const client = new Client({
  intents: new IntentsBitField().add(
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,

    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ),
  partials: [Partials.Channel, Partials.Message, Partials.Reaction],
});

client.once(Events.ClientReady, () => {
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

  return message;
}

const userActors = new Map<string, Actor<typeof loginMachine>>();

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) {
    // Dont handle bot messages
    return;
  }
  if (message.channel.type !== ChannelType.DM) {
    // Only handle direct messages
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
    const actor = new Actor(
      loginMachine.provide({
        actors: {
          sendTyping: fromPromise(async () => {
            const channel = await (
              await client.users.fetch(message.author.id)
            ).createDM();

            await channel.sendTyping();
          }),
          checkAccount: fromPromise(async () => {
            const user = await User.findByDiscordId(message.author.id);
            if (!user) {
              return null;
            }
            return user;
          }),
          sendLoginLink: fromPromise(async ({ input }) => {
            const channel = await (
              await client.users.fetch(message.author.id)
            ).createDM();

            await channel.sendTyping();

            const magicLink = await issueMagicLink(input.user);

            const reply = await channel.send({
              content: `Du kannst dich mit folgendem Link anmelden ${magicLink}. Der Link ist 15 Minuten gültig.`,
            });

            scheduleTimeout("5m", async () => {
              reply.deletable && (await reply.delete());
            });
          }),
          askToConnectAccount: fromPromise(async () => {
            const channel = await (
              await client.users.fetch(message.author.id)
            ).createDM();

            await channel.sendTyping();

            const reply = await channel.send({
              content:
                "Ich habe keinen Account gefunden, der mit deinem Discord Account verknüpft ist. Klicke den Button um deine Email einzugeben.",
              components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                  new ButtonBuilder()
                    .setCustomId(`connectUser:login:${message.author.id}`)
                    .setLabel("Verknüpfe deinen Account")
                    .setStyle(ButtonStyle.Primary),
                ),
              ],
            });

            scheduleTimeout("5m", async () => {
              reply.deletable && (await reply.delete());
            });
          }),
          askForEmail: fromPromise(async ({ input }) => {
            await input.interaction.showModal(
              new ModalBuilder()
                .setCustomId(`submitEmail:login:${message.author.id}`)
                .setTitle("Verknüpfe deinen Account")
                .addComponents(
                  new ActionRowBuilder<TextInputBuilder>().addComponents(
                    new TextInputBuilder()
                      .setCustomId("email")
                      .setLabel("Email eingeben")
                      .setStyle(TextInputStyle.Short),
                  ),
                ),
            );
          }),
          requestApproval: fromPromise(async ({ input }) => {
            const adminUser = await User.find(
              (user) => user.roles.includes("Admin") && !!user.discordUserId,
            );
            const emailUser = await User.findByEmail(input.email);

            if (!adminUser) {
              throw new Error("No admin user found");
            }

            if (!emailUser) {
              await input.interaction.message?.edit({
                components: [],
              });
              await input.interaction.reply({
                content: "Ein Nutzer mit dieser Email existiert nicht :(",
              });
            } else {
              await input.interaction.message?.edit({
                components: [],
                embeds: [
                  {
                    fields: [
                      {
                        name: "Status",
                        value: "Verknüpfung wird überprüft...",
                      },
                    ],
                  },
                ],
              });
              await input.interaction.deferUpdate();

              const approvalRequest = await sendDiscordMessage(
                adminUser.discordUserId,
                {
                  content:
                    "Ein Discord-Nutzer hat versucht, seinen Account mit Discord zu verknüpfen.",
                  embeds: [
                    {
                      fields: [
                        { name: "Name", value: input.discordUserName },
                        {
                          name: "Discord Name",
                          value: `<@${input.discordUserId}> (${input.discordUserName})`,
                        },
                        { name: "Discord Id", value: input.discordUserId },
                        { name: "Email", value: input.email },
                      ],
                      // image: { url: user.avatarUrl },
                    },
                  ],
                  components: [
                    new ActionRowBuilder<ButtonBuilder>().addComponents(
                      new ButtonBuilder()
                        .setCustomId(`approve:login:${input.discordUserId}`)
                        .setLabel("Genehmigen")
                        .setStyle(ButtonStyle.Success),
                      new ButtonBuilder()
                        .setCustomId(`reject:login:${input.discordUserId}`)
                        .setLabel("Ablehnen")
                        .setStyle(ButtonStyle.Danger),
                    ),
                  ],
                },
              );

              return { approvalRequestId: approvalRequest.id };
            }

            return null;
          }),
          finishApproval: fromPromise(async ({ input }) => {
            await input.adminMessage.edit({
              components: [],
            });

            let user: User | null = null;
            if (input.type === "approved") {
              user = await User.findByEmail(input.email);

              if (!user) {
                throw new Error("No user found");
              }

              user.discordUserId = input.discordUserId;

              await user.save();
            }

            await input.userMessage.edit({
              embeds: [
                {
                  fields: [
                    {
                      name: "Status",
                      value:
                        input.type === "approved"
                          ? "Dein Account wurde erfolgreich verknüpft."
                          : "Dein Account wurde nicht verknüpft.",
                    },
                  ],
                },
              ],
            });

            return user;
          }),
        },
      }),
      {
        input: {
          discordUserId: message.author.id,
          discordUserName: message.author.username,
        },
      },
    ).start();
    userActors.set(message.author.id, actor);

    actor.subscribe({
      next: (snapshot) => {
        logger.trace(
          {
            snapshot: {
              ...snapshot,
              context: { ...snapshot.context, client: {} },
            },
          },
          "Login actor snapshot",
        );
      },

      error: async (err) => {
        logger.error(err, "Error in login actor");

        const channel = await message.author.createDM();

        await channel.send({
          content:
            "Es gab einen Fehler beim Login. Bitte versuche es später erneut oder melde dich im #general.",
        });
      },
      complete: () => {
        logger.info("Login actor completed");

        actor.stop();
        userActors.delete(message.author.id);
      },
    });

    actor.send({ type: "promptLogin" });
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.user.bot) {
    // Ignore bot interactions
    return;
  }
  if (interaction.channel?.type !== ChannelType.DM) {
    // Ignore non-DM interactions
    return;
  }
  if (interaction.isButton()) {
    const [action, workflow, userId] = interaction.customId.split(":");

    if (workflow === "login") {
      switch (action) {
        case "connectUser": {
          userActors.get(userId)?.send({
            type: action,
            interaction,
          });
          break;
        }
        case "approve":
        case "reject": {
          userActors.get(userId)?.send({
            type: action,
            adminMessage: await interaction.message.fetch(),
          });
          break;
        }
      }
    }
  }
  if (interaction.isModalSubmit()) {
    const [action, workflow, userId] = interaction.customId.split(":");

    if (workflow === "login") {
      switch (action) {
        case "submitEmail": {
          const email = interaction.fields.getTextInputValue("email");

          userActors.get(userId)?.send({
            type: "submitEmail",
            email,
            interaction,
          });
        }
      }
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
        await member.send({
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
