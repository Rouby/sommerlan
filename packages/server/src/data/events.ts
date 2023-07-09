import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export class Event extends Base {
  get sheetName() {
    return "Events";
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

  constructor(props?: Values<Event>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByPartyId(partyId: string) {
    return Event.filter((event) => event.partyId === partyId);
  }
}
