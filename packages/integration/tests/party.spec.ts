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
