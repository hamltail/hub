import Container from "@/components/Container";

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
  return (
    <section className="px-7 pt-8 md:px-11 md:pt-16 min-[1200px]:px-0">
      <Container>
        <h1 className="font-heading text-6xl font-semibold tracking-[0.08em]">
          Portfolio
        </h1>

        <div className="mt-14">
          <p className="font-heading text-xl font-semibold tracking-wide">
            h-waji / hamltail
          </p>

          <div
            className="mt-3 flex items-center gap-4"
            aria-label="External links"
          >
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link font-heading transition hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
