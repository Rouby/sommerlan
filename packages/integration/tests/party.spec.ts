import dayjs from "dayjs";
import { expect, test } from "./fixture";

test("should be able to enter party", async ({ page, api }) => {
  await api.seed("User", {
    displayName: "Alice Example",
    name: "Alice Example",
    email: "alice@example.com",
  });
  await api.seed("Party", {
    seatsAvailable: 10,
    startDate: dayjs().add(1, "month").set("day", 0).format("YYYY-MM-DD"),
    endDate: dayjs().add(1, "month").set("day", 5).format("YYYY-MM-DD"),
  });
  await api.login("alice@example.com");

  await page.goto("/party");

  await page.getByRole("checkbox", { name: /^Sun/ }).check();
  await page.getByRole("checkbox", { name: /^Tue/ }).check();
  await page.getByRole("checkbox", { name: /^Wed/ }).check();

  await expect(page.getByText("AE", { exact: true })).toHaveCount(3);
});

test("should be able to enter overcrowded party", async ({ page, api }) => {
  const alice = await api.seed("User", {
    displayName: "Alice Example",
    name: "Alice Example",
    email: "alice@example.com",
  });
  await api.seed("User", {
    displayName: "Bob Example",
    name: "Bob Example",
    email: "bob@example.com",
  });
  const party = await api.seed("Party", {
    seatsAvailable: 1,
    startDate: dayjs().add(1, "month").set("day", 0).format("YYYY-MM-DD"),
    endDate: dayjs().add(1, "month").set("day", 5).format("YYYY-MM-DD"),
  });
  await api.seed("Attending", {
    userId: alice.id,
    partyId: party.id,
    dates: [dayjs().add(1, "month").set("day", 0).format("YYYY-MM-DD")],
  });
  await api.login("bob@example.com");

  await page.goto("/party");

  await page.getByRole("checkbox", { name: /^Sun/ }).check();

  await expect(page.getByText("AE", { exact: true })).toHaveCount(1);
  await expect(page.getByText("BE", { exact: true })).toHaveCount(1);
});

test("should not be able to remove application after deadline", async ({
  page,
  api,
}) => {
  const alice = await api.seed("User", {
    displayName: "Alice Example",
    name: "Alice Example",
    email: "alice@example.com",
    password: "hallo",
  });
  const party = await api.seed("Party", {
    seatsAvailable: 1,
    startDate: dayjs().add(1, "month").set("day", 0).format("YYYY-MM-DD"),
    endDate: dayjs().add(1, "month").set("day", 5).format("YYYY-MM-DD"),
    registrationDeadline: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
  });
  await api.seed("Attending", {
    userId: alice.id,
    partyId: party.id,
    dates: [
      dayjs().add(1, "month").set("day", 0).format("YYYY-MM-DD"),
      dayjs().add(1, "month").set("day", 1).format("YYYY-MM-DD"),
    ],
    applicationDate: dayjs().subtract(2, "day").format("YYYY-MM-DD"),
  });

  await api.login("alice@example.com");

  await page.goto("/party");

  await expect(page.getByRole("checkbox", { name: /^Sun/ })).toBeDisabled();

  await expect(page.getByText("AE", { exact: true })).toHaveCount(2);
});
