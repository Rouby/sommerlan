import { Cron } from "recron";
import { syncCache } from "./data/$api";

export const cron = new Cron();

cron.schedule("@every 5m", async () => {
  await syncCache();
});
