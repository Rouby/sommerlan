import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export class Picture extends Base {
  get sheetName() {
    return "Pictures" as const;
  }
  get kind() {
    return "Picture" as const;
  }

  public id = randomUUID();

  public name = "";

  public uploadName = "";

  public partyId = "";

  public uploaderId = "";

  public tags: PictureTag[] = [];

  constructor(props?: Values<Picture>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByPartyId(partyId: string) {
    return Picture.filter((picture) => picture.partyId === partyId);
  }
}

export interface PictureTag {
  userId: string;
  boundingBox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}
