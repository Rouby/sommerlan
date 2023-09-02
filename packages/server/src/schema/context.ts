import { FastifyReply, FastifyRequest } from "fastify";
import { AppAbility } from "../ability";
import { JWTPayload } from "../signToken";

export type Context = {
  jwt: JWTPayload;
  ability: AppAbility;
  req: FastifyRequest;
  reply: FastifyReply;
};
