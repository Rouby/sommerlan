import { expect, test } from "./fixture";

test("should register", async ({ page, api }) => {
  await page.goto("/");

  await page.getByText("Account erstellen").first().click();

  await page.getByLabel("Nutzername").fill("Erwin Beispiel");

  await page.getByLabel("Email").fill("erwin@example.com");

  await page.getByText("Anmelden").click();

  await expect(page.getByTestId("user button")).toHaveText("Erwin Beispiel");
});

test("should register with a password", async ({ page, api }) => {
  await page.goto("/");

  await page.getByText("Account erstellen").first().click();

  await page.getByLabel("Nutzername").fill("Erwin Beispiel");

  await page.getByLabel("Email").fill("erwin@example.com");

  await page.getByLabel("Optionales Passwort").fill("hello");

  await page.getByText("Anmelden").click();

  await expect(page.getByTestId("user button")).toHaveText("Erwin Beispiel");
});

test("should display error if email was taken", async ({ page, api }) => {
  await api.seed("User", {
    displayName: "Erwin Beispiel",
    name: "Erwin Beispiel",
    email: "erwin@example.com",
    password: "hello",
    roles: ["Trusted"],
  });

  await page.goto("/");

  await page.getByText("Account erstellen").first().click();

  await page.getByLabel("Nutzername").fill("Erwin Beispiel");

  await page.getByLabel("Email").fill("erwin@example.com");

  await page.getByLabel("Optionales Passwort").fill("hello");

  await page.getByText("Anmelden").click();

  await expect(page.getByText("User already exists")).toBeVisible();
});
