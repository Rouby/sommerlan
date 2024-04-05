import { randomUUID } from "crypto";
import { existsSync } from "fs";
import { join } from "path";
import { uploadDir } from "../env";
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

  get pathname() {
    return join(uploadDir, this.uploadName);
  }

  constructor(props?: Values<Picture>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByPartyId(partyId: string) {
    return this.filter(
      (picture) => picture.partyId === partyId && existsSync(picture.pathname)
    );
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
