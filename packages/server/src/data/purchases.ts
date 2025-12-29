import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export interface PurchaseVote {
  userId: string;
  vote: "yes" | "no" | "abstain";
  createdAt: string;
}

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

  public votes: PurchaseVote[] = [];

  constructor(props?: Values<Purchase>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByStatus(status: Purchase["status"]) {
    return this.filter((purchase) => purchase.status === status);
  }

  getUserVote(userId: string): PurchaseVote | undefined {
    return this.votes.find((v) => v.userId === userId);
  }

  addOrUpdateVote(userId: string, vote: "yes" | "no" | "abstain"): void {
    const existingIndex = this.votes.findIndex((v) => v.userId === userId);
    const voteData: PurchaseVote = {
      userId,
      vote,
      createdAt: new Date().toISOString(),
    };
    
    if (existingIndex >= 0) {
      this.votes[existingIndex] = voteData;
    } else {
      this.votes.push(voteData);
    }
  }

  getVoteCount() {
    return {
      yes: this.votes.filter((v) => v.vote === "yes").length,
      no: this.votes.filter((v) => v.vote === "no").length,
      abstain: this.votes.filter((v) => v.vote === "abstain").length,
    };
  }
}
