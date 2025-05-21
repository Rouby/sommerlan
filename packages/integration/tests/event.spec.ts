import { expect, test } from "./fixture";
import path = require("path");

test("should plan an event", async ({ page, context, api }) => {
  await api.seed("User", {
    displayName: "Erwin Beispiel",
    name: "Erwin Beispiel",
    email: "erwin@example.com",
    roles: ["Trusted"],
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

  await page.getByPlaceholder("Event").fill("Ein Event");

  await page
    .getByTestId("dropzone")
    .locator("input")
    .setInputFiles(path.join(__dirname, "avatar.png"));

  await page.getByText("Event erstellen").click();

  await expect(page.getByTestId("event")).toContainText("Ein Event");
});

test("should change an event", async ({ page, api }) => {
  const user = await api.seed("User", {
    displayName: "Erwin Beispiel",
    name: "Erwin Beispiel",
    email: "erwin@example.com",
    roles: ["Trusted"],
  });
  await api.login("erwin@example.com");
  const party = await api.seed("Party", {
    startDate: new Date(Date.now() + 8 * 86400000)
      .toISOString()
      .substring(0, 10),
    endDate: new Date(Date.now() + 8 * 86400000).toISOString().substring(0, 10), // Removed trailing comma
  });
  await api.seed("Event", {
    name: "Initial Event Name",
    partyId: party.id,
    organizerId: user.id,
    description: "<p>Initial Event Description</p>",
    imageUrl: "https://example.com/image.png",
  });

  await page.goto("/events");

  await page.getByLabel("Event bearbeiten").click();

  await page.getByRole("textbox", { name: "Event" }).fill("Updated Event Name");

  await page.getByRole("checkbox", { name: "Zeit noch unklar" }).uncheck();

  await page.getByRole("textbox", { name: "Startzeit" }).fill("08:00");
  await page.getByRole("textbox", { name: "Endzeit" }).fill("09:00");

  await page.getByText("Speichern").click(); // Or similar text like "Save Event"

  await expect(page.getByTestId("event")).toContainText("Updated Event Name");
  await expect(page.getByTestId("event")).toContainText("08:00 - 09:00");
  await expect(page.getByTestId("event")).not.toContainText(
    "Initial Event Name",
  );
});
