import dayjs from "dayjs";
import { expect, test } from "./fixture";

test("should return current party when one is ongoing", async ({
  page,
  api,
}) => {
  await api.seed("User", {
    displayName: "Alice Example",
    name: "Alice Example",
    email: "alice@example.com",
    roles: ["Trusted"],
  });

  const previous = dayjs().subtract(1, "year");
  const next = dayjs().subtract(1, "year");

  // Old party
  await api.seed("Party", {
    location: "Old Party",
    seatsAvailable: 10,
    startDate: previous.subtract(1, "day").format("YYYY-MM-DD"),
    endDate: previous.add(1, "day").format("YYYY-MM-DD"),
  });

  // Current party
  await api.seed("Party", {
    location: "Current Party",
    seatsAvailable: 10,
    startDate: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
    endDate: dayjs().add(1, "day").format("YYYY-MM-DD"),
  });

  // Future party
  await api.seed("Party", {
    location: "Future Party",
    seatsAvailable: 10,
    startDate: next.subtract(1, "day").format("YYYY-MM-DD"),
    endDate: next.add(1, "day").format("YYYY-MM-DD"),
  });

  await api.login("alice@example.com");

  await page.goto("/party");

  await expect(
    page.getByText(
      new RegExp(`Die nächste Party ist vom .* ${new Date().getFullYear()}.`),
    ),
  ).toBeVisible();
});
