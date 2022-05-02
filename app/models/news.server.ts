import { ForbiddenError, subject } from "@casl/ability";
import { accessibleBy } from "@casl/prisma";
import { defineAbilityForUser } from "~/Ability";
import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export async function getNews(userId?: string) {
  const ability = await defineAbilityForUser(userId);

  return prisma.news.findMany({
    where: accessibleBy(ability).News,
    orderBy: { createdAt: "desc" },
    include: { author: true },
    take: 3,
  });
}

export async function createNews(userId: string, title: string, text: string) {
  const ability = await defineAbilityForUser(userId);

  ForbiddenError.from(ability).throwUnlessCan("create", "News");

  return prisma.news.create({
    data: {
      title,
      text,
      author: { connect: { id: userId } },
    },
  });
}

export async function getANews(userId: string | undefined, id: string) {
  const ability = await defineAbilityForUser(userId);

  return prisma.news.findFirst({
    where: {
      AND: [accessibleBy(ability).News, { id }],
    },
    include: { author: true },
  });
}

export async function updateNews(
  userId: string,
  id: string,
  title: string,
  text: string
) {
  const ability = await defineAbilityForUser(userId);
  const news = await prisma.news.findUnique({ where: { id } });

  if (!news) {
    throw new Error("News does not exist");
  }

  ForbiddenError.from(ability).throwUnlessCan("update", subject("News", news));

  return prisma.news.update({
    where: { id },
    data: { title, text },
  });
}
