import { createHash, randomUUID } from "crypto";
import { getSheet } from "./api";
import { Base, Values, findRow } from "./utils";

enum Role {
  TrustedUser = "TrustedUser",
  Admin = "Admin",
}

export class User extends Base {
  get sheetName() {
    return "Users";
  }

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

  constructor(props?: Values<User>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async all() {
    const sheet = await getSheet();
    const rows = await sheet.sheetsByTitle["Users"].getRows();
    return rows.map((row) => Base.fromRow(User, row));
  }

  static async findById(id: string) {
    const row = await findRow("Users", id);
    if (row) {
      return Base.fromRow(User, row);
    }
    return null;
  }

  static async findByName(name: string) {
    const users = await User.all();
    return users.find((user) => user.name === name);
  }

  static Role = Role;
}