import { createTransport, SendMailOptions } from "nodemailer";

export const transporter = createTransport({
  host: "0.0.0.0",
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
  await transporter.sendMail({
    from: '"Sommerlan" <admin@sommerlan.rocks>',
    ...options,
  });
}
