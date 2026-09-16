import { useTranslations } from "next-intl";

import Container from "@/components/Container";
import { projects } from "@/data/projects";

const characters = ["🎃", "👻", "🦇", "💀", "🎃"] as const;

const projectStyles = [
  "md:col-span-7 md:rotate-[-4deg]",
  "md:col-span-5 md:translate-y-20 md:rotate-[3deg]",
  "md:col-span-5 md:translate-x-12 md:rotate-[5deg]",
  "md:col-span-7 md:-translate-y-4 md:rotate-[-2deg]",
  "md:col-span-6 md:col-start-4 md:rotate-[4deg]",
] as const;

const floatStyles = [
  "animate-[halloween-float_8s_ease-in-out_infinite]",
  "animate-[halloween-float_11s_ease-in-out_-3s_infinite]",
  "animate-[halloween-float_9s_ease-in-out_-6s_infinite]",
  "animate-[halloween-float_13s_ease-in-out_-4s_infinite]",
  "animate-[halloween-float_10s_ease-in-out_-7s_infinite]",
] as const;

const decorations = [
  { character: "✦", className: "left-[8%] top-[6%] text-3xl" },
  { character: "🍬", className: "right-[10%] top-[12%] rotate-12 text-4xl" },
  { character: "🕸️", className: "left-[3%] top-[38%] -rotate-12 text-6xl" },
  { character: "⭐", className: "right-[6%] top-[46%] text-3xl" },
  {
    character: "🍭",
    className: "bottom-[24%] left-[12%] -rotate-12 text-5xl",
  },
  {
    character: "🦇",
    className: "bottom-[16%] right-[10%] rotate-12 text-4xl",
  },
  { character: "✦", className: "bottom-[5%] left-[44%] text-4xl" },
] as const;

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <section className="relative px-7 py-24 md:px-11 md:py-36 min-[1200px]:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
      >
        {decorations.map((decoration, index) => (
          <span
            key={`${decoration.character}-${index}`}
            className={`absolute select-none ${decoration.className}`}
          >
            {decoration.character}
          </span>
        ))}
      </div>

      <Container>
        <div className="relative mb-20 md:mb-28">
          <p className="font-heading text-sm tracking-[0.5em] uppercase opacity-60">
            Welcome to the party
          </p>

          <h2 className="font-halloween mt-3 text-5xl tracking-wide md:text-7xl">
            Projects
            <span aria-hidden="true" className="ml-4 inline-block rotate-12">
              🎃
            </span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-y-24 md:grid-cols-12 md:gap-x-12 md:gap-y-32">
          {projects.map((project, index) => (
            <article key={project.title} className={projectStyles[index]}>
              <div className={floatStyles[index]}>
                <div className="group relative mx-auto max-w-md">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-6 -z-10 rounded-[45%] bg-linear-to-br from-orange-500/20 via-purple-500/10 to-pink-500/20 blur-2xl transition duration-700 group-hover:scale-125"
                  />

                  <div className="relative text-center">
                    <div
                      aria-hidden="true"
                      className="select-none text-[7rem] leading-none transition duration-500 group-hover:scale-110 group-hover:rotate-6 md:text-[9rem]"
                    >
                      {characters[index]}
                    </div>

                    <div className="-mt-4">
                      <p className="font-heading text-xs tracking-[0.4em] uppercase opacity-50">
                        Project {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="font-halloween mt-2 text-3xl tracking-wide md:text-4xl">
                        {project.title}
                      </h3>

                      <p className="font-halloween-jp mx-auto mt-4 max-w-sm text-sm leading-7 opacity-75">
                        {t(project.descriptionKey)}
                      </p>

                      <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-heading nav-link text-sm tracking-[0.12em] transition duration-300 hover:-translate-y-1 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                          >
                            {link.label === "Webサイト"
                              ? t("webSite")
                              : link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
