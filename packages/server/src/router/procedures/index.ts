import { authRouter } from "./auth";
import { cacheRouter } from "./cache";
import { eventRouter } from "./event";
import { partyRouter } from "./party";
import { userRouter } from "./user";

export const procedures = {
  auth: authRouter,
  user: userRouter,
  party: partyRouter,
  event: eventRouter,
  cache: cacheRouter,
};
