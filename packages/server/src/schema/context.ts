import { FastifyReply, FastifyRequest } from "fastify";
import { AppAbility } from "../ability";
import * as data from "../data";
import { JWTPayload } from "../signToken";

export type Context = {
  jwt: JWTPayload;
  ability: AppAbility;
  req: FastifyRequest;
  reply: FastifyReply;
  data: typeof data;
};
