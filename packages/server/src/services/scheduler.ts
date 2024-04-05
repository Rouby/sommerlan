import { Cron } from "recron";
import { syncCache } from "../data";

const cron = new Cron();

cron.schedule(
  process.env.NODE_ENV === "production" ? "@every 5m" : "@every 1m",
  async () => {
    await syncCache();
  },
);

export const scheduler = {
  start: () => cron.start(),
  stop: () => cron.stop(),
};

export function scheduleTask(spec: string, handler: () => unknown) {
  cron.schedule(spec, handler);
}

export function scheduleTimeout(time: string, handler: () => unknown) {
  cron.schedule(`@every ${time}`, handler, { oneshot: true });
}
