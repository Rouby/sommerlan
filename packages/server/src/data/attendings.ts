import { randomUUID } from "crypto";
import { Base, Values, allRows } from "./utils";

export class Attending extends Base {
  get sheetName() {
    return "Attendings";
  }

  public id = randomUUID();

  public userId = "";

  public partyId = "";

  public dates: string[] = [];

  constructor(props?: Values<Attending>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async all() {
    const rows = await allRows("Attendings");
    return rows.map((row) => Base.fromRow(Attending, row));
  }

  static async findByPartyId(partyId: string) {
    const attendings = await Attending.all();
    return attendings.filter((attending) => attending.partyId === partyId);
  }

  static async findByPartyIdAndUserId(partyId: string, userId: string) {
    const attendings = await Attending.findByPartyId(partyId);
    return attendings.find((attending) => attending.userId === userId);
  }
}
