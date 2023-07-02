import { authRouter } from "./auth";
import { partyRouter } from "./party";

export const procedures = {
  auth: authRouter,
  party: partyRouter,
};
