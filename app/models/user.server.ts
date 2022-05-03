import { ForbiddenError, subject } from "@casl/ability";
import { accessibleBy } from "@casl/prisma";
import type { Password, Role, User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { prisma } from "~/db.server";
import { defineAbilityForUser } from "~/utils/ability.server";

export type { User } from "@prisma/client";

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User["email"]) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(
  email: User["email"],
  password: string,
  attributes: { name: string }
) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
      ...attributes,
    },
  });
}

export async function deleteUserByEmail(email: User["email"]) {
  return prisma.user.delete({ where: { email } });
}

export async function verifyLogin(
  email: User["email"],
  password: Password["hash"]
) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password.hash
  );

  if (!isValid) {
    return null;
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
}

export async function getUsers(userId?: string) {
  return prisma.user.findMany({
    where: accessibleBy(await defineAbilityForUser(userId)).User,
    orderBy: { email: "asc" },
  });
}

export async function setUserRole(
  userId: string,
  userIdUpdate: string,
  role: Role
) {
  const userToUpdate = await prisma.user.findFirst({
    where: { id: userIdUpdate },
  });

  if (!userToUpdate) {
    return null;
  }

  ForbiddenError.from(await defineAbilityForUser(userId)).throwUnlessCan(
    "update",
    subject("User", userToUpdate),
    "role"
  );

  return prisma.user.update({
    where: { id: userIdUpdate },
    data: { role },
  });
}
