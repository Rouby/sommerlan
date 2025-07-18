import { randomUUID } from "crypto";
import * as dayjs from "dayjs";
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

  public tentative = false;

  public location = "";

  public latitude = 0;

  public longitude = 0;

  public iframeSrc = "";

  public roomsAvailable = 0;

  public rentalCosts = 0;

  public feedingCosts = 0;

  public registrationDeadline = "";

  public seatsAvailable = 0;

  public payday = "";

  public finalCostPerDay = 0;

  public paypalPoolId = "";

  constructor(props?: Values<Party>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async findNextParty() {
    const parties = await this.all();

    return parties
      .filter((party) => dayjs(party.endDate).endOf("day").isAfter(dayjs()))
      .filter((party) => !party.tentative)
      .filter((party) => party.seatsAvailable > 0)
      .sort((a, b) => (a.startDate < b.startDate ? 1 : -1))
      .at(0);
  }
}
