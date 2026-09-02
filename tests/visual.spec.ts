// 実行：npx playwright test tests/visual.spec.ts
// 基準画像を更新：npx playwright test tests/visual.spec.ts --update-snapshots

import { expect, test } from "@playwright/test";

test("Portfolioの見た目が基準画像と一致する", async ({ page }) => {
  await page.goto("/");

  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let scrollY = 0;

      const interval = window.setInterval(() => {
        scrollY += window.innerHeight;
        window.scrollTo(0, scrollY);

        if (scrollY >= document.body.scrollHeight) {
          window.clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  });

  await page.waitForTimeout(500);

  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });

  await expect(page).toHaveScreenshot("portfolio.png", {
    fullPage: true,
    animations: "disabled",
  });
});
