import newrelic from "newrelic";
import { createTransport, SendMailOptions } from "nodemailer";

export const transporter = createTransport({
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
    await transporter.sendMail({
      from: '"Sommerlan" <admin@sommerlan.rocks>',
      ...options,
    });
  });
}
