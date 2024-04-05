import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export class Donation extends Base {
  get sheetName() {
    return "Donations" as const;
  }
  get kind() {
    return "Donation" as const;
  }

  public id = randomUUID();

  public partyId = "";

  public userId = "";

  public amount = 0;

  public dedication: "rent" | "warchest" = "rent";

  public incognito = false;

  constructor(props?: Values<Donation>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByPartyId(partyId: string) {
    return this.filter((donation) => donation.partyId === partyId);
  }
}
