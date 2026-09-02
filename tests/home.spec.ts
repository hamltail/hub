import { expect, test, type Locator, type Page } from "@playwright/test";

type LinkExpectation = {
  label: string;
  href: string;
};

type ExperimentExpectation = {
  title: string;
  description: string;
  links: LinkExpectation[];
};

type ProjectExpectation = {
  title: string;
  description: string;
  image: string;
  links: LinkExpectation[];
};

const headerLinks: LinkExpectation[] = [
  {
    label: "GitHub",
    href: "https://github.com/hamltail",
  },
  {
    label: "note",
    href: "https://note.com/hamltail",
  },
  {
    label: "Zenn",
    href: "https://zenn.dev/hamltail",
  },
];

const experiments: ExperimentExpectation[] = [
  {
    title: "Web Lab",
    description:
      "Next.jsをベースに、Web開発・UI/UXデザイン・品質改善などを、実際に作りながら検証するプロジェクト",
    links: [
      {
        label: "Webサイト",
        href: "https://next.hamltail.dev",
      },
      {
        label: "GitHub",
        href: "https://github.com/hamltail/nextjs-sandbox",
      },
    ],
  },
  {
    title: "Auth Sandbox",
    description:
      "Next.jsをベースに、Auth.jsとBetter Authを検証した認証プロジェクト",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hamltail/auth-sandbox",
      },
    ],
  },
];

const projects: ProjectExpectation[] = [
  {
    title: "Pawth",
    description: "1日1投稿の制約で、日々の記録を続ける小さなWeb日記アプリ",
    image: "/images/works/pawth.webp",
    links: [
      {
        label: "Webサイト",
        href: "https://pawth-lp.hamltail.dev",
      },
      {
        label: "GitHub",
        href: "https://github.com/hamltail/Pawth",
      },
    ],
  },
  {
    title: "Animal Corporation",
    description: "Figmaでデザインし、Next.jsで実装したコーポレートサイト",
    image: "/images/works/animal-corporation.webp",
    links: [
      {
        label: "Webサイト",
        href: "https://animal.hamltail.dev",
      },
      {
        label: "Figma",
        href: "https://www.figma.com/design/aiLzbeBUsuAQrv9Da9ldEb/Public?node-id=2003-267&p=f",
      },
      {
        label: "GitHub",
        href: "https://github.com/hamltail/corporate-site-demo",
      },
    ],
  },
  {
    title: "Interaction Lab",
    description: "Webならではの表現とインタラクションを探求する実験サイト",
    image: "/images/works/interaction-lab.webp",
    links: [
      {
        label: "Webサイト",
        href: "https://lab.hamltail.dev",
      },
      {
        label: "Figma",
        href: "https://www.figma.com/design/aiLzbeBUsuAQrv9Da9ldEb/Public?node-id=2038-128&p=f",
      },
      {
        label: "GitHub",
        href: "https://github.com/hamltail/interaction-lab",
      },
    ],
  },
  {
    title: "Portfolio Site",
    description: "Figmaでデザインし、Next.jsで実装したポートフォリオサイト",
    image: "/images/works/portfolio-site.webp",
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/design/aiLzbeBUsuAQrv9Da9ldEb/Public?node-id=2147-128&p=f",
      },
      {
        label: "GitHub",
        href: "https://github.com/hamltail/hub",
      },
    ],
  },
];

function getArticleByTitle(page: Page, title: string): Locator {
  return page.locator("article").filter({
    has: page.getByRole("heading", {
      level: 3,
      name: title,
      exact: true,
    }),
  });
}

async function expectExternalLink(
  container: Locator,
  { label, href }: LinkExpectation,
) {
  const link = container.getByRole("link", {
    name: label,
    exact: true,
  });

  await expect(link).toHaveCount(1);
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute("href", href);
  await expect(link).toHaveAttribute("target", "_blank");
  await expect(link).toHaveAttribute("rel", "noopener noreferrer");
}

async function expectProjectImage(
  article: Locator,
  title: string,
  expectedPath: string,
) {
  const image = article.getByRole("img", {
    name: title,
    exact: true,
  });

  await expect(image).toHaveCount(1);
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute("alt", title);

  const src = await image.getAttribute("src");

  expect(src).not.toBeNull();

  if (!src) {
    throw new Error(`${title} の画像srcが存在しません`);
  }

  const url = new URL(src, "http://localhost:3000");

  if (url.pathname === "/_next/image") {
    expect(url.searchParams.get("url")).toBe(expectedPath);
  } else {
    expect(url.pathname).toBe(expectedPath);
  }
}

test.describe("Portfolio", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("ページの基本構造と主要テキストが正しく表示される", async ({ page }) => {
    await expect(page).toHaveTitle(/Portfolio/i);

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Portfolio",
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByText("h-waji / hamltail", {
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Experiments",
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByText("技術検証を目的として制作したプロジェクトです。", {
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Projects",
        exact: true,
      }),
    ).toBeVisible();
  });

  test("HeaderのGitHub・note・Zennが正しいリンク先を持つ", async ({ page }) => {
    const externalLinks = page.locator('[aria-label="External links"]');

    await expect(externalLinks).toBeVisible();
    await expect(externalLinks.getByRole("link")).toHaveCount(
      headerLinks.length,
    );

    for (const link of headerLinks) {
      await expectExternalLink(externalLinks, link);
    }
  });

  test("Experimentsのタイトル・説明文・リンク構成が完全に一致する", async ({
    page,
  }) => {
    for (const experiment of experiments) {
      const article = getArticleByTitle(page, experiment.title);

      await article.scrollIntoViewIfNeeded();

      await expect(article).toHaveCount(1);
      await expect(article).toBeVisible();

      await expect(
        article.getByRole("heading", {
          level: 3,
          name: experiment.title,
          exact: true,
        }),
      ).toBeVisible();

      await expect(
        article.getByText(experiment.description, {
          exact: true,
        }),
      ).toBeVisible();

      await expect(article.getByRole("link")).toHaveCount(
        experiment.links.length,
      );

      for (const link of experiment.links) {
        await expectExternalLink(article, link);
      }
    }
  });

  test("Projectsのタイトル・説明文・リンク構成が完全に一致する", async ({
    page,
  }) => {
    for (const project of projects) {
      const article = getArticleByTitle(page, project.title);

      await article.scrollIntoViewIfNeeded();

      await expect(article).toHaveCount(1);
      await expect(article).toBeVisible();

      await expect(
        article.getByRole("heading", {
          level: 3,
          name: project.title,
          exact: true,
        }),
      ).toBeVisible();

      await expect(
        article.getByText(project.description, {
          exact: true,
        }),
      ).toBeVisible();

      await expect(article.getByRole("link")).toHaveCount(project.links.length);

      for (const link of project.links) {
        await expectExternalLink(article, link);
      }
    }
  });

  test("Projectsの画像が各プロジェクトと完全に対応している", async ({
    page,
  }) => {
    for (const project of projects) {
      const article = getArticleByTitle(page, project.title);

      await article.scrollIntoViewIfNeeded();

      await expectProjectImage(article, project.title, project.image);
    }
  });

  test("Experimentsに想定外のカードが存在しない", async ({ page }) => {
    const heading = page.getByRole("heading", {
      level: 2,
      name: "Experiments",
      exact: true,
    });

    const section = heading.locator("xpath=ancestor::section");

    await expect(section.locator("article")).toHaveCount(experiments.length);

    for (const experiment of experiments) {
      await expect(
        section.getByRole("heading", {
          level: 3,
          name: experiment.title,
          exact: true,
        }),
      ).toHaveCount(1);
    }
  });

  test("Projectsに想定外のカードが存在しない", async ({ page }) => {
    const heading = page.getByRole("heading", {
      level: 2,
      name: "Projects",
      exact: true,
    });

    const section = heading.locator("xpath=ancestor::section");

    await expect(section.locator("article")).toHaveCount(projects.length);

    for (const project of projects) {
      await expect(
        section.getByRole("heading", {
          level: 3,
          name: project.title,
          exact: true,
        }),
      ).toHaveCount(1);
    }
  });

  test("Projects内のリンク一覧が仕様と完全一致する", async ({ page }) => {
    const expectedLinks = projects.flatMap((project) =>
      project.links.map((link) => link.href),
    );

    const heading = page.getByRole("heading", {
      level: 2,
      name: "Projects",
      exact: true,
    });

    const section = heading.locator("xpath=ancestor::section");

    const actualLinks = await section
      .getByRole("link")
      .evaluateAll((links) =>
        links
          .map((link) => link.getAttribute("href"))
          .filter((href): href is string => href !== null),
      );

    expect(actualLinks).toHaveLength(expectedLinks.length);
    expect([...actualLinks].sort()).toEqual([...expectedLinks].sort());
  });

  test("Experiments内のリンク一覧が仕様と完全一致する", async ({ page }) => {
    const expectedLinks = experiments.flatMap((experiment) =>
      experiment.links.map((link) => link.href),
    );

    const heading = page.getByRole("heading", {
      level: 2,
      name: "Experiments",
      exact: true,
    });

    const section = heading.locator("xpath=ancestor::section");

    const actualLinks = await section
      .getByRole("link")
      .evaluateAll((links) =>
        links
          .map((link) => link.getAttribute("href"))
          .filter((href): href is string => href !== null),
      );

    expect(actualLinks).toHaveLength(expectedLinks.length);
    expect([...actualLinks].sort()).toEqual([...expectedLinks].sort());
  });

  test("すべての外部リンクに安全な属性が付いている", async ({ page }) => {
    const externalLinks = page.locator('a[href^="https://"]');

    const count = await externalLinks.count();

    expect(count).toBeGreaterThan(0);

    for (let index = 0; index < count; index += 1) {
      const link = externalLinks.nth(index);

      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", "noopener noreferrer");
      await expect(link).toHaveAttribute("href", /^https:\/\//);
    }
  });

  test("ライト・ダーク・システムテーマを切り替えられる", async ({ page }) => {
    const lightButton = page.getByRole("button", {
      name: "ライト",
      exact: true,
    });

    const darkButton = page.getByRole("button", {
      name: "ダーク",
      exact: true,
    });

    const systemButton = page.getByRole("button", {
      name: "システム",
      exact: true,
    });

    await expect(lightButton).toBeEnabled();
    await expect(darkButton).toBeEnabled();
    await expect(systemButton).toBeEnabled();

    await darkButton.click();

    await expect(darkButton).toHaveAttribute("aria-pressed", "true");
    await expect(lightButton).toHaveAttribute("aria-pressed", "false");
    await expect(systemButton).toHaveAttribute("aria-pressed", "false");
    await expect(page.locator("html")).toHaveClass(/dark/);

    await expect
      .poll(() => page.evaluate(() => localStorage.getItem("theme")))
      .toBe("dark");

    await lightButton.click();

    await expect(lightButton).toHaveAttribute("aria-pressed", "true");
    await expect(darkButton).toHaveAttribute("aria-pressed", "false");
    await expect(systemButton).toHaveAttribute("aria-pressed", "false");
    await expect(page.locator("html")).not.toHaveClass(/dark/);

    await expect
      .poll(() => page.evaluate(() => localStorage.getItem("theme")))
      .toBe("light");

    await systemButton.click();

    await expect(systemButton).toHaveAttribute("aria-pressed", "true");
    await expect(lightButton).toHaveAttribute("aria-pressed", "false");
    await expect(darkButton).toHaveAttribute("aria-pressed", "false");

    await expect
      .poll(() => page.evaluate(() => localStorage.getItem("theme")))
      .toBe("system");
  });

  test("選択したテーマがリロード後も保持される", async ({ page }) => {
    const darkButton = page.getByRole("button", {
      name: "ダーク",
      exact: true,
    });

    await darkButton.click();

    await expect(darkButton).toHaveAttribute("aria-pressed", "true");

    await page.reload();

    await expect(
      page.getByRole("button", {
        name: "ダーク",
        exact: true,
      }),
    ).toHaveAttribute("aria-pressed", "true");

    await expect(page.locator("html")).toHaveClass(/dark/);

    await expect
      .poll(() => page.evaluate(() => localStorage.getItem("theme")))
      .toBe("dark");
  });

  test("ページ上部へ戻るボタンがスクロール位置に応じて動作する", async ({
    page,
  }) => {
    const backToTop = page.getByRole("button", {
      name: "ページ上部へ戻る",
      exact: true,
    });

    await expect(backToTop).toBeHidden();

    await page.evaluate(() => {
      window.scrollTo(0, 1000);
    });

    await expect(backToTop).toBeVisible();

    await backToTop.click();

    await expect
      .poll(() => page.evaluate(() => window.scrollY))
      .toBeLessThan(10);

    await expect(backToTop).toBeHidden();
  });

  test("Footerの著作権表示が正しい", async ({ page }) => {
    const currentYear = new Date().getFullYear();

    const footer = page.locator("footer");

    await footer.scrollIntoViewIfNeeded();

    await expect(footer).toBeVisible();

    await expect(
      footer.getByText(`© ${currentYear} h-waji / hamltail`, {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("ページ内の主要見出し階層が仕様どおりである", async ({ page }) => {
    await expect(page.locator("h1")).toHaveCount(1);

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Portfolio",
        exact: true,
      }),
    ).toHaveCount(1);

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Experiments",
        exact: true,
      }),
    ).toHaveCount(1);

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Projects",
        exact: true,
      }),
    ).toHaveCount(1);

    for (const experiment of experiments) {
      await expect(
        page.getByRole("heading", {
          level: 3,
          name: experiment.title,
          exact: true,
        }),
      ).toHaveCount(1);
    }

    for (const project of projects) {
      await expect(
        page.getByRole("heading", {
          level: 3,
          name: project.title,
          exact: true,
        }),
      ).toHaveCount(1);
    }
  });

  test("ページに横スクロールが発生していない", async ({ page }) => {
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );

    expect(hasHorizontalOverflow).toBe(false);
  });
});
