import { expect, test } from "./fixture";
import path = require("path");

test("should upload profile picture", async ({ page, context, api }) => {
  await api.seed("User", {
    displayName: "Erwin Beispiel",
    name: "Erwin Beispiel",
    email: "erwin@example.com",
    roles: ["Trusted"],
  });
  await api.login("erwin@example.com");

  await page.goto("/profile");

  await page
    .locator("input[name=avatar]")
    .setInputFiles(path.join(__dirname, "avatar.png"));

  await page.getByText("Speichern").click();

  await expect(page.getByTestId("user button").locator("img")).toHaveAttribute(
    "src",
    /^http:\/\/localhost.*\.png$/,
  );
});
