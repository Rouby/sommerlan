import { test as base, expect } from "@playwright/test";

export const test = base.extend<{
  api: {
    seed: (model: string, data: unknown) => Promise<unknown>;
    login: (email: string) => Promise<void>;
    getMails: () => Promise<{ html: string }[]>;
  };
}>({
  api: [
    async ({ playwright, context }, use) => {
      // TODO implement backend isolation?

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
          apiContext.post("/seed", {
            headers: { "x-fake-api": transactionKey },
            data: { model, data },
          }),
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
