import { expect, test } from "./fixture";

test("should login with password", async ({ page, api }) => {
  await api.seed("User", {
    displayName: "Erwin Beispiel",
    name: "Erwin Beispiel",
    email: "erwin@example.com",
    password: "hello",
  });

  await page.goto("/");

  await page.getByText("Log in").click();

  await page.getByText("Mit Passwort anmelden").click();

  await page.getByLabel("Email").fill("erwin@example.com");

  await page.getByLabel("Passwort").fill("hello");

  await page.getByText("Anmelden").click();

  await expect(page.getByTestId("user button")).toHaveText("Erwin Beispiel");
});

test("should login with one-time-link", async ({ page, api }) => {
  await api.seed("User", {
    displayName: "Emma Beispiel",
    name: "Emma Beispiel",
    email: "emma@example.com",
  });

  await page.goto("/");

  await page.getByText("Log in").click();

  await page
    .getByText("Einen Einmal-Link zum einloggen per Email anfordern")
    .click();

  await page.getByPlaceholder("Deine Email-Adresse").fill("emma@example.com");

  await page.getByText("Link zuschicken", { exact: true }).click();

  await expect(
    page.getByText("eine Email mit einem Login-Link versandt"),
  ).toBeVisible();

  await api.getMails().then((mails) => {
    expect(mails).toHaveLength(1);

    const code = /auth=(.+?)"/.exec(mails[0].html)![1];

    return page.goto(`/?auth=${code}`);
  });

  await expect(page.getByTestId("user button")).toHaveText("Emma Beispiel");
});
