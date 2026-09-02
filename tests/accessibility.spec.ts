import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

async function waitForLightTheme(page: Page) {
  await page.waitForFunction(() => {
    const style = getComputedStyle(document.body);

    return (
      style.color === "rgb(17, 17, 17)" &&
      style.backgroundColor === "rgb(255, 255, 255)"
    );
  });
}

async function waitForDarkTheme(page: Page) {
  await page.waitForFunction(() => {
    const style = getComputedStyle(document.body);

    return (
      style.color === "rgb(245, 245, 245)" &&
      style.backgroundColor === "rgb(17, 17, 17)"
    );
  });
}

test.describe("Accessibility", () => {
  test("ライトテーマでアクセシビリティ違反がない", async ({ page }) => {
    await page.goto("/");

    const lightButton = page.getByRole("button", {
      name: "ライト",
      exact: true,
    });

    await lightButton.click();

    await expect(lightButton).toHaveAttribute("aria-pressed", "true");

    await waitForLightTheme(page);

    const accessibilityScanResults = await new AxeBuilder({
      page,
    }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("ダークテーマでアクセシビリティ違反がない", async ({ page }) => {
    await page.goto("/");

    const darkButton = page.getByRole("button", {
      name: "ダーク",
      exact: true,
    });

    await darkButton.click();

    await expect(darkButton).toHaveAttribute("aria-pressed", "true");

    await waitForDarkTheme(page);

    const accessibilityScanResults = await new AxeBuilder({
      page,
    }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
