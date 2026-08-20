import Container from "@/components/Container";
import ProjectsSection from "@/components/ProjectsSection";
import TechnicalSandboxSection from "@/components/TechnicalSandboxSection";

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

export default function Home() {
  return (
    <main className="min-h-screen">
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

      <TechnicalSandboxSection />

      <ProjectsSection />

      <footer className="px-7 pb-6 pt-16 md:px-11 md:pt-24 min-[1200px]:px-0">
        <Container>
          <div className="text-center">
            <small className="font-heading tracking-wide">
              © {new Date().getFullYear()} h-waji / hamltail
            </small>
          </div>
        </Container>
      </footer>
    </main>
  );
}
