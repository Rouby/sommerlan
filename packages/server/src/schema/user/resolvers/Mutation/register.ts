import { createGraphQLError } from "graphql-yoga";
import { startBackgroundTransaction } from "newrelic";
import { logger } from "../../../../logger";
import { sendDiscordMessage } from "../../../../services";
import { signRefreshToken, signToken } from "../../../../signToken";
import type { MutationResolvers } from "./../../../types.generated";

export const register: NonNullable<MutationResolvers["register"]> = async (
  _parent,
  { userName, email, password },
  ctx,
) => {
  if (await ctx.data.User.findByEmail(email)) {
    throw createGraphQLError("User already exists");
  }

  const user = new ctx.data.User({
    name: userName,
    displayName: userName,
    email,
    ...(password && { password }),
  });
  await user.save();

  logger.trace({ user }, "Registered user");

  startBackgroundTransaction("sendDiscordMessages", () =>
    Promise.all(
      `${process.env.DISCORD_ADMIN_IDS!}`.split(",").map(async (userId) => {
        await sendDiscordMessage(userId, {
          embeds: [
            {
              description: "Ein neuer Benutzer hat sich registriert!",
              fields: [
                { name: "Name", value: userName },
                { name: "Display Name", value: user.displayName },
                { name: "Email", value: email },
              ],
            },
          ],
        });
      }),
    ),
  );

  return {
    user,
    token: await signToken(user),
    refreshToken: await signRefreshToken(user),
  };
};
