import { createHash, randomUUID } from "crypto";
import { Base, Values } from "./$base";

enum Role {
  Trusted = "Trusted",
  Admin = "Admin",
  Bookkeeper = "Bookkeeper",
  Doorkeeper = "Doorkeeper",
}

export class User extends Base {
  get sheetName() {
    return "Users" as const;
  }
  get kind() {
    return "User" as const;
  }

  public id = randomUUID();

  public devices: {
    name?: string;
    createdAt?: string;
    lastUsedAt?: string;
    credentialPublicKey: number[];
    credentialID: number[];
    counter: number;
    transports?: ("ble" | "internal" | "nfc" | "usb" | "cable" | "hybrid")[];
  }[] = [];

  public roles: (Role | `${Role}`)[] = [];

  public name = "";

  public displayName = "";

  public email = "";

  public discordUserId = "";

  public avatarUrl = "";

  public password = "";

  get avatar() {
    if (this.avatarUrl) return this.avatarUrl;

    const hash = createHash("md5")
      .update(this.email.toLowerCase())
      .digest("hex");
    return `https://www.gravatar.com/avatar/${hash}?d=404`;
  }

  constructor(props?: Values<User>) {
    super();
    if (props) Object.assign(this, props);
  }

  static Role = Role;

  static async findByName(name: string) {
    return this.find((user) => user.name === name);
  }

  static async findByEmail(email: string) {
    return this.find((user) => user.email === email);
  }

  static async findByDiscordId(id: string) {
    return this.find((user) => user.discordUserId === id);
  }
}
