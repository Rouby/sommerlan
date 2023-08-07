import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export class Attending extends Base {
  static sheetName = "Attendings";
  get sheetName() {
    return Attending.sheetName;
  }

  public id = randomUUID();

  public userId = "";

  public partyId = "";

  public dates: string[] = [];

  public room: "" | "requested" | "granted" = "";

  constructor(props?: Values<Attending>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByPartyId(partyId: string) {
    return Attending.filter((attending) => attending.partyId === partyId);
  }

  static async findByPartyIdAndUserId(partyId: string, userId: string) {
    return Attending.find(
      (attending) =>
        attending.partyId === partyId && attending.userId === userId
    );
  }
}
