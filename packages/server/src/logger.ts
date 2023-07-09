// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./pino-enricher.d.ts" />
import nrPino from "@newrelic/pino-enricher";
import pino from "pino";

export const logger = pino(nrPino());
logger.level = process.env.LOG_LEVEL ?? "info";
