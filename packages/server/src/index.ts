import "dotenv/config";
import "newrelic";

import { serverConfig } from "./config";
import { logger } from "./logger";
import { createServer } from "./server";

const server = createServer(serverConfig);

void server.start();

process.once("SIGTERM", () => {
  logger.info("received SIGTERM");
  server.stop().then(() => {
    logger.info("Stopped gracefully");
    process.exit(0);
  });
});

process.once("SIGINT", () => {
  logger.info("received SIGINT");
  server.stop().then(() => {
    logger.info("Stopped gracefully");
  });
});

process.on("unhandledRejection", (reason, promise) => {
  logger.error({ reason, promise }, "Unhandled promise rejection");
});
