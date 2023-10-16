import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export class Party extends Base {
  get sheetName() {
    return "Parties" as const;
  }
  get kind() {
    return "Party" as const;
  }

  public id = randomUUID();

  public startDate = "";

  public endDate = "";

  public location = "";

  public latitude = 0;

  public longitude = 0;

  public iframeSrc = "";

  public roomsAvailable = 0;

  public rentalCosts = 0;

  constructor(props?: Values<Party>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async findLatest() {
    const parties = await Party.all();
    return parties.sort((a, b) => (a.startDate < b.startDate ? 1 : -1)).at(0);
  }
}
