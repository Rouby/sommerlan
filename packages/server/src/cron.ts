import { Cron } from "recron";
import { syncCache } from "./data";

export const cron = new Cron();

cron.schedule(
  process.env.NODE_ENV === "production" ? "@every 5m" : "@every 1m",
  async () => {
    await syncCache();
  }
);
