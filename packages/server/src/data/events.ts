import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export class Event extends Base {
  get sheetName() {
    return "Events" as const;
  }
  get kind() {
    return "Event" as const;
  }

  public id = randomUUID();

  public partyId = "";

  public date = "";

  public startTime = "";

  public endTime = "";

  public organizerId = "";

  public participantIds: string[] = [];

  public name = "";

  public description = "";

  public imageUrl = "";

  public eventType: "STANDARD" | "FOOD" = "STANDARD";

  public pricingMode?: "PER_SERVING" | "FLAT" | "PARTY_DONATION";

  public price?: number;

  public servingsUnit?: string;

  public participantServings: Record<string, number> = {};

  constructor(props?: Values<Event>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByPartyId(partyId: string) {
    return this.filter((event) => event.partyId === partyId);
  }
}
