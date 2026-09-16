import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/Container";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <section className="px-7 pt-12 md:px-11 min-[1200px]:px-0">
      <Container>
        <h2 className="heading-shadow font-heading text-3xl font-semibold tracking-wide">
          Projects
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 min-[1200px]:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="border-border flex min-h-96 flex-col rounded-lg border p-4 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading={index === 0 ? "eager" : undefined}
                  sizes="(min-width: 1200px) 544px, (min-width: 768px) calc((100vw - 112px) / 2), calc(100vw - 56px)"
                  className="object-cover"
                  draggable={false}
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="font-heading text-xl font-semibold tracking-wide">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm">{t(project.descriptionKey)}</p>

                <div className="mt-auto pt-6">
                  <div className="flex min-h-36 flex-col items-center gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground focus-visible:outline-primary flex h-10 w-32 items-center justify-center rounded-full font-heading text-sm tracking-wide transition hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        {link.label === "Webサイト" ? t("webSite") : link.label}
                      </a>
                    ))}
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
