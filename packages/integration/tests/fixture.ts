import { test as base, expect } from "@playwright/test";
import type {
  Attending,
  Donation,
  Event,
  Game,
  Party,
  Picture,
  PictureTag,
  User,
} from "@sommerlan-app/server/src/data";
import type { Values } from "@sommerlan-app/server/src/data/$base";

type Models = {
  Attending: Attending;
  Donation: Donation;
  Event: Event;
  Game: Game;
  Party: Party;
  Picture: Picture;
  PictureTag: PictureTag;
  User: User;
};

export const test = base.extend<{
  api: {
    seed: <T extends keyof Models>(
      model: T,
      data: Values<Models[T]>,
    ) => Promise<Models[T]>;
    login: (email: string) => Promise<void>;
    getMails: () => Promise<{ html: string }[]>;
  };
}>({
  api: [
    async ({ playwright, context }, use) => {
      const apiContext = await playwright.request.newContext({
        baseURL: "http://127.0.0.1:2022",
      });

      const transactionKey = await apiContext
        .post("/transaction")
        .then((resp) => resp.json())
        .then((data) => data.transactionKey);
      context.addInitScript((transactionKey) => {
        localStorage.setItem("transactionKey", transactionKey);
      }, transactionKey);

      await use({
        seed: (model, data) =>
          apiContext
            .post("/seed", {
              headers: { "x-fake-api": transactionKey },
              data: { model, data },
            })
            .then((resp) => resp.json()),
        login: (email) =>
          apiContext
            .post("/login", {
              headers: { "x-fake-api": transactionKey },
              data: { email },
            })
            .then((resp) => resp.json())
            .then((data) => {
              context.addInitScript(({ token, refreshToken }) => {
                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem(
                  "refreshToken",
                  JSON.stringify(refreshToken),
                );
              }, data);
            }),
        getMails: () =>
          apiContext
            .post("/mails", { headers: { "x-fake-api": transactionKey } })
            .then((resp) => resp.json()),
      });

      await apiContext.post("/clear", {
        headers: { "x-fake-api": transactionKey },
      });

      await apiContext.dispose();
    },
    { scope: "test" },
  ],
});

export { expect };
