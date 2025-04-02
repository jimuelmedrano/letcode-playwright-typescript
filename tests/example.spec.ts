import { test, expect } from "@playwright/test";

test.describe("Input Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(process.env.BASE_URL!);
    await page.getByRole("link", { name: "Edit" }).click();
  });

  test("Input full name", async ({ page }) => {
    // Assertions use the expect API.
    await page.locator("#fullName").fill("John Doe");
  });
});
