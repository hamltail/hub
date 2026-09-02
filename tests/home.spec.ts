import { expect, test } from "@playwright/test";

test.describe("Portfolio", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("ページが正常に表示される", async ({ page }) => {
    await expect(page).toHaveTitle(/Portfolio/i);
  });

  test("Experimentsセクションが表示される", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Experiments" }),
    ).toBeVisible();

    await expect(page.getByRole("heading", { name: "Web Lab" })).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Auth Sandbox" }),
    ).toBeVisible();
  });

  test("Projectsセクションが表示される", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();

    await expect(page.getByRole("heading", { name: "Pawth" })).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Animal Corporation" }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Interaction Lab" }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Portfolio Site" }),
    ).toBeVisible();
  });
});
