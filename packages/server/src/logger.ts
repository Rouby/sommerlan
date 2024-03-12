/// <reference path="./pino-enricher.d.ts" />
// @ts-ignore
import nrPino = require("@newrelic/pino-enricher");
import pino from "pino";

export const logger = pino(nrPino());
logger.level = process.env.LOG_LEVEL ?? "info";
