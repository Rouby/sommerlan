import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  // cleanup the existing database
  await prisma.user
    .delete({
      where: { email: "jonathan.burke.1311@googlemail.com" },
    })
    .catch(() => {});
  await prisma.user
    .delete({ where: { email: "test.user@example.com" } })
    .catch(() => {});
  await prisma.user
    .delete({ where: { email: "trusted.user@example.com" } })
    .catch(() => {});
  await prisma.party
    .delete({
      where: {
        startDate: "2022-07-07T12:00:00Z",
      },
    })
    .catch(() => {});
  await prisma.party
    .delete({
      where: {
        startDate: "2021-08-07T12:00:00Z",
      },
    })
    .catch(() => {});
  await prisma.news.deleteMany({});

  await prisma.user.create({
    data: {
      name: "Jonathan Burke",
      email: "jonathan.burke.1311@googlemail.com",
      password: {
        create: {
          hash: await bcrypt.hash("hallo", 10),
        },
      },
      role: "ADMIN",
    },
  });
  await prisma.user.create({
    data: {
      name: "Test User",
      email: "test.user@example.com",
      password: {
        create: {
          hash: await bcrypt.hash("hallo", 10),
        },
      },
      role: "USER",
    },
  });
  await prisma.user.create({
    data: {
      name: "Trusted User",
      email: "trusted.user@example.com",
      password: {
        create: {
          hash: await bcrypt.hash("hallo", 10),
        },
      },
      role: "TRUSTED_USER",
    },
  });

  await prisma.party.create({
    data: {
      startDate: "2022-07-07T12:00:00Z",
      endDate: "2022-07-16T12:00:00Z",
    },
  });
  await prisma.party.create({
    data: {
      startDate: "2021-08-07T12:00:00Z",
      endDate: "2021-08-16T12:00:00Z",
    },
  });

  await prisma.news.create({
    data: {
      title: "Super news 1",
      text: `<h1>Wunderbare News</h1><p>Jeder kann <strong>kommen</strong> und alles wird gut!</p><h3>Sachen die man mitbringen sollte</h3><ul><li>Hullulu</li><li>Kopfkissen</li><li>Schampoo</li></ul><p>Hier noch ein interessanter Link: <a href="https://www.google.de/" rel="noopener noreferrer" target="_blank">Google</a></p><p>Und ein Video:</p><p><br></p>`,
      author: { connect: { email: "jonathan.burke.1311@googlemail.com" } },
    },
  });
  await prisma.news.create({
    data: {
      title: "Super news 2",
      text: `<h1>Wunderbare News</h1><p>Jeder kann <strong>kommen</strong> und alles wird gut!</p><h3>Sachen die man mitbringen sollte</h3><ul><li>Hullulu</li><li>Kopfkissen</li><li>Schampoo</li></ul><p>Hier noch ein interessanter Link: <a href="https://www.google.de/" rel="noopener noreferrer" target="_blank">Google</a></p><p>Und ein Video:</p><p><br></p>`,
      author: { connect: { email: "jonathan.burke.1311@googlemail.com" } },
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
