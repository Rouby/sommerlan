import { createHash, randomUUID } from "crypto";
import { getSheet } from "./api";

type Values<T> = Partial<
  // eslint-disable-next-line @typescript-eslint/ban-types
  Pick<T, { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]>
>;

enum Role {
  TrustedUser = "TrustedUser",
  Admin = "Admin",
}

export class User {
  public id = randomUUID();

  public devices: {
    credentialPublicKey: number[];
    credentialID: number[];
    counter: number;
    transports?: ("ble" | "internal" | "nfc" | "usb" | "cable" | "hybrid")[];
  }[] = [];

  public roles: Role[] = [];

  public name = "";

  public displayName = "";

  public email = "";

  get avatar() {
    const hash = createHash("md5")
      .update(this.email.toLowerCase())
      .digest("hex");
    return `https://www.gravatar.com/avatar/${hash}`;
  }

  constructor(props: Values<User> = {}) {
    Object.assign(this, props);
  }

  async save() {
    const row = await findRow(this.id);
    const values = Object.fromEntries(
      Object.entries(this).map(([key, value]) => [key, JSON.stringify(value)])
    );
    if (row) {
      Object.assign(row, values);
      await row.save();
    } else {
      const sheet = await getSheet();
      await sheet.sheetsByTitle["Users"].addRow(values);
    }
  }

  static async findById(id: string) {
    const row = await findRow(id);
    if (row) {
      const user = new User();
      Object.assign(
        user,
        Object.fromEntries(
          Object.keys(user).map((key) => [key, JSON.parse(row[key])])
        )
      );
      return user;
    }
    return null;
  }

  static Role = Role;
}

async function findRow(id: string) {
  const sheet = await getSheet();
  const rows = await sheet.sheetsByTitle["Users"].getRows();
  return rows.find((row) => {
    try {
      return JSON.parse(row.id) === id;
    } catch {
      return row.id === id;
    }
  });
}
