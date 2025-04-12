import { randomUUID } from "crypto";
import * as dayjs from "dayjs";
import { Base, Values } from "./$base";

export class Attending extends Base {
  get sheetName() {
    return "Attendings" as const;
  }
  get kind() {
    return "Attending" as const;
  }

  public id = randomUUID();

  public userId = "";

  public partyId = "";

  public dates: string[] = [];

  public room: "" | "requested" | "granted" = "";

  public paidDues = 0;

  public applicationDate = dayjs().format("YYYY-MM-DD");

  public checkIn = "";

  public checkOut = "";

  public notificationSent = "";

  rentDues(costPerDay: number) {
    return (this.dates.length - 1) * costPerDay;
  }

  constructor(props?: Values<Attending>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByPartyId(partyId: string) {
    return this.filter((attending) => attending.partyId === partyId);
  }

  static async findByPartyIdAndUserId(partyId: string, userId: string) {
    return this.find(
      (attending) =>
        attending.partyId === partyId && attending.userId === userId,
    );
  }
}
