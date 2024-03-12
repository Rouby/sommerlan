// @ts-ignore
import newrelic = require("newrelic");
import { createTransport, SendMailOptions } from "nodemailer";
import { logger } from "../logger";

export const mail =
  process.env.NODE_ENV !== "production"
    ? {
        connect: () => Promise.resolve(),
        destroy: () => Promise.resolve(),
      }
    : {
        connect: () =>
          new Promise<void>((resolve, reject) =>
            transporter.verify((error) => {
              if (error) {
                logger.error(error);
                reject(error);
              } else {
                resolve();
              }
            })
          ),
        destroy: async () => {
          transporter.close();
        },
      };

const transporter = createTransport({
  host: "mailserver",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "admin@sommerlan.rocks",
    pass: "hallo1du",
  },
  tls: { rejectUnauthorized: false },
  debug: true,
});

export async function sendMail(options: SendMailOptions) {
  await newrelic.startSegment("sendMail", true, async () => {
    logger.info({ to: options.to }, "Sending mail");
    if (process.env.NODE_ENV !== "production") {
      logger.info({ options }, "Would send mail");
      devMailsSent.push(options);
    } else {
      await transporter.sendMail({
        from: '"SommerLAN" <no-reply@sommerlan.rocks>',
        ...options,
      });
    }
  });
}

export const devMailsSent: SendMailOptions[] = [];
