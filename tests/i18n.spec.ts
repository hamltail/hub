import { expect, test } from "@playwright/test";

test.describe("English locale", () => {
  test("ブラウザ言語が英語の場合は主要コンテンツを英語で表示する", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    await expect(
      page.getByText("Projects created to explore and evaluate technologies.", {
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByText(
        "A project for exploring web development, UI/UX design, and quality improvements with Next.js through hands-on development.",
        {
          exact: true,
        },
      ),
    ).toBeVisible();

    await expect(
      page.getByText(
        "An authentication project built with Next.js to explore Auth.js and Better Auth.",
        {
          exact: true,
        },
      ),
    ).toBeVisible();

    await expect(
      page.getByText(
        "A small web journal app for keeping a daily record with a one-post-per-day limit.",
        {
          exact: true,
        },
      ),
    ).toBeVisible();

    await expect(
      page.getByText(
        "A corporate website designed in Figma and built with Next.js.",
        {
          exact: true,
        },
      ),
    ).toBeVisible();

    await expect(
      page.getByText(
        "An experimental website exploring interactions and expressions unique to the web.",
        {
          exact: true,
        },
      ),
    ).toBeVisible();

    await expect(
      page.getByText(
        "A portfolio website designed in Figma and built with Next.js.",
        {
          exact: true,
        },
      ),
    ).toBeVisible();

    await expect(
      page.getByRole("button", {
        name: "Light theme",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("button", {
        name: "Dark theme",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("button", {
        name: "System theme",
      }),
    ).toBeVisible();

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    const backToTopButton = page.getByRole("button", {
      name: "Back to top",
    });

    await expect(backToTopButton).toBeVisible();
  });
});
