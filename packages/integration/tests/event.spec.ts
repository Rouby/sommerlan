import { expect, test } from "./fixture";
import path = require("path");

test("should plan an event", async ({ page, context, api }) => {
  await api.seed("User", {
    displayName: "Erwin Beispiel",
    name: "Erwin Beispiel",
    email: "erwin@example.com",
  });
  await api.login("erwin@example.com");
  await api.seed("Party", {
    startDate: new Date(Date.now() + 7 * 86400000)
      .toISOString()
      .substring(0, 10),
    endDate: new Date(Date.now() + 7 * 86400000).toISOString().substring(0, 10),
  });

  await page.goto("/events");

  await page.getByText("Ein Event eintragen").click();

  await page.getByLabel("Event").fill("Ein Event");

  await page
    .getByTestId("dropzone")
    .locator("input")
    .setInputFiles(path.join(__dirname, "avatar.png"));

  await page.getByText("Event erstellen").click();

  await expect(page.getByTestId("event")).toContainText("Ein Event");
  await expect(
    page.getByTestId("event").getByRole("figure").getByRole("img"),
  ).toHaveAttribute("src", /^http:\/\/localhost.*\.png$/);
});
