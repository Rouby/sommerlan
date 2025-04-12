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
import { User } from "../data";
import { getEnv } from "../env";
import { logger } from "../logger";
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
    await message.channel.sendTyping();

    const user = await User.findByDiscordId(message.author.id);

    if (!user) {
      await message.reply({
        content:
          "Ich habe keinen Account gefunden, der mit deinem Discord Account verknüpft ist. Klicke den Button um deine Email einzugeben.",
        components: [
          new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
              .setCustomId("connectAccount")
              .setLabel("Verknüpfe deinen Account")
              .setStyle(ButtonStyle.Primary),
          ),
        ],
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

// map of admin msg -> user msg
const connectInteractions = new Map<string, string>();

client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "connectAccount") {
      await interaction.showModal(
        new ModalBuilder()
          .setCustomId("connectAccount")
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
    }

    if (
      interaction.customId === "approve" ||
      interaction.customId === "reject"
    ) {
      const approved = interaction.customId === "approve";

      const userMessageId = connectInteractions.get(interaction.message.id);
      const previousMessage = await interaction.message.fetch();

      logger.info({ interaction, userMessageId }, "Approving user");

      if (userMessageId && previousMessage) {
        const userEmail = previousMessage.embeds[0].fields.find(
          (f) => f.name === "Email",
        )?.value;
        const userDiscordId = previousMessage.embeds[0].fields.find(
          (f) => f.name === "Discord Id",
        )?.value;

        if (!userDiscordId) {
          logger.info({ previousMessage }, "No discord id found");
          return;
        }

        let discordLinked = false;

        if (approved) {
          if (userEmail) {
            const user = await User.findByEmail(userEmail);

            if (user) {
              user.discordUserId = userDiscordId;

              await user.save();

              discordLinked = true;
            }
          }
        }
        await previousMessage.edit({
          components: [],
        });

        // TODO notify user
        const userChannel = await (
          await client.users.fetch(userDiscordId)
        ).createDM();

        const message = await userChannel.messages.fetch(userMessageId);

        if (discordLinked) {
          await message.edit({
            embeds: [
              {
                fields: [
                  {
                    name: "Status",
                    value: "Dein Account wurde erfolgreich verknüpft.",
                  },
                ],
              },
            ],
          });
        } else {
          await message.edit({
            embeds: [
              {
                fields: [
                  {
                    name: "Status",
                    value: "Dein Account wurde nicht verknüpft.",
                  },
                ],
              },
            ],
          });
        }
      } else {
        logger.info(
          { interaction, userMessageId },
          "No user message id found, ignoring interaction",
        );
      }

      await interaction.update({
        components: [],
      });
    }
  }

  if (interaction.isModalSubmit()) {
    if (interaction.customId === "connectAccount") {
      const email = interaction.fields.getTextInputValue("email");

      const user = await User.findByEmail(email);

      if (!user) {
        await interaction.reply({
          content: "Ein Nutzer mit dieser Email existiert nicht :(",
        });
      } else {
        await interaction.message?.edit({
          components: [],
          embeds: [
            {
              fields: [
                { name: "Status", value: "Verknüpfung wird überprüft..." },
              ],
            },
          ],
        });
        await interaction.deferUpdate();

        const adminUser = await User.find(
          (user) => user.roles.includes("Admin") && !!user.discordUserId,
        );

        if (adminUser) {
          const discordUserId = interaction.user.id;
          const discordName = interaction.user.displayName;

          const approvalMessage = await sendDiscordMessage(
            adminUser.discordUserId,
            {
              content:
                "Ein Discord-Nutzer hat versucht, seinen Account mit Discord zu verknüpfen.",
              embeds: [
                {
                  fields: [
                    { name: "Name", value: user.displayName },
                    {
                      name: "Discord Name",
                      value: `<@${discordUserId}> (${discordName})`,
                    },
                    { name: "Discord Id", value: discordUserId },
                    { name: "Email", value: email },
                  ],
                  image: { url: user.avatarUrl },
                },
              ],
              components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                  new ButtonBuilder()
                    .setCustomId("approve")
                    .setLabel("Genehmigen")
                    .setStyle(ButtonStyle.Success),
                  new ButtonBuilder()
                    .setCustomId("reject")
                    .setLabel("Ablehnen")
                    .setStyle(ButtonStyle.Danger),
                ),
              ],
            },
          );

          connectInteractions.set(
            approvalMessage.id,
            interaction.message?.id ?? "",
          );
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
