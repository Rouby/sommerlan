import { authRouter } from "./auth";
import { eventRouter } from "./event";
import { partyRouter } from "./party";
import { userRouter } from "./user";

export const procedures = {
  auth: authRouter,
  user: userRouter,
  party: partyRouter,
  event: eventRouter,
};
