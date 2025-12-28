import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export class Purchase extends Base {
  get sheetName() {
    return "Purchases" as const;
  }
  get kind() {
    return "Purchase" as const;
  }

  public id = randomUUID();

  public title = "";

  public description = "";

  public estimatedCost = 0;

  public proposerId = "";

  public status: "proposed" | "approved" | "rejected" | "completed" = "proposed";

  public createdAt = new Date().toISOString();

  constructor(props?: Values<Purchase>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByStatus(status: Purchase["status"]) {
    return this.filter((purchase) => purchase.status === status);
  }
}

export class Vote extends Base {
  get sheetName() {
    return "Votes" as const;
  }
  get kind() {
    return "Vote" as const;
  }

  public id = randomUUID();

  public purchaseId = "";

  public userId = "";

  public vote: "yes" | "no" | "abstain" = "abstain";

  public createdAt = new Date().toISOString();

  constructor(props?: Values<Vote>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByPurchaseId(purchaseId: string) {
    return this.filter((vote) => vote.purchaseId === purchaseId);
  }

  static async findByUserAndPurchase(userId: string, purchaseId: string) {
    return this.find(
      (vote) => vote.userId === userId && vote.purchaseId === purchaseId,
    );
  }
}
