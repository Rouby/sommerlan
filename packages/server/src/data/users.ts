import { createHash, randomUUID } from "crypto";
import { Base, Values } from "./$base";

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
    return `https://www.gravatar.com/avatar/${hash}?d=404`;
  }

  constructor(props?: Values<User>) {
    super();
    if (props) Object.assign(this, props);
  }

  static Role = Role;

  static async findByName(name: string) {
    return User.find((user) => user.name === name);
  }

  static async findByEmail(email: string) {
    return User.find((user) => user.email === email);
  }
}
