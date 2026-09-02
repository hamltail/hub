import { useTranslations } from "next-intl";

import Container from "@/components/Container";

const experiments = [
  {
    title: "Web Lab",
    descriptionKey: "webLab.description",
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
    descriptionKey: "authSandbox.description",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hamltail/auth-sandbox",
      },
    ],
  },
] as const;

export default function ExperimentsSection() {
  const t = useTranslations("Experiments");

  return (
    <section className="px-7 pt-12 md:px-11 min-[1200px]:px-0">
      <Container>
        <h2 className="font-heading text-3xl font-semibold tracking-wide">
          Experiments
        </h2>

        <p className="text-muted mt-4 max-w-2xl text-sm">{t("description")}</p>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 min-[1200px]:gap-8">
          {experiments.map((experiment) => (
            <article
              key={experiment.title}
              className="border-border bg-surface flex min-h-45 flex-col rounded-lg border p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-xl font-semibold tracking-wide">
                {experiment.title}
              </h3>

              <p className="mt-2 text-sm">{t(experiment.descriptionKey)}</p>

              <div className="pt-6">
                <div className="flex flex-col items-center gap-3">
                  {experiment.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground flex h-10 w-32 items-center justify-center rounded-full font-heading text-sm tracking-wide transition hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {link.label === "Webサイト" ? t("webSite") : link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
