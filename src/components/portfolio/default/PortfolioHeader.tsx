import { useTranslations } from "next-intl";

import Container from "@/components/Container";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const externalLinks = [
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

export default function PortfolioHeader() {
  const t = useTranslations("Portfolio");

  return (
    <section className="px-7 pt-8 md:px-11 md:pt-16 min-[1200px]:px-0">
      <Container>
        <div className="flex items-start justify-between gap-6">
          <h1 className="heading-shadow font-heading text-6xl font-semibold tracking-[0.08em]">
            {t("title")}
          </h1>

          <ThemeSwitcher />
        </div>

        <div className="mt-14">
          <p className="font-heading text-xl font-semibold tracking-wide">
            {t("name")}
          </p>

          <p className="mt-2 font-heading text-sm font-semibold tracking-[0.12em] text-foreground/70">
            {t("tagline")}
          </p>

          <nav
            className="mt-3 flex items-center gap-4"
            aria-label={t("externalLinks")}
          >
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link font-heading transition hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
}
