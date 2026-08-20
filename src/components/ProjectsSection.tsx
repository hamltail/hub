import Image from "next/image";

import Container from "@/components/Container";

import animalCorporationImage from "../../public/images/works/animal-corporation.webp";
import interactionLabImage from "../../public/images/works/interaction-lab.webp";
import portfolioSiteImage from "../../public/images/works/portfolio-site.webp";
import pawthImage from "../../public/images/works/pawth.webp";

const works = [
  {
    title: "Pawth",
    description: "1日1投稿の制約を設けた、小さなWeb日記アプリ",
    image: pawthImage,
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
    description: "Figmaで設計し、Next.jsで実装したコーポレートサイト",
    image: animalCorporationImage,
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
    image: interactionLabImage,
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
    description: "Figmaで設計し、Next.jsで実装したポートフォリオサイト",
    image: portfolioSiteImage,
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

export default function ProjectsSection() {
  return (
    <section className="px-7 pt-12 md:px-11 min-[1200px]:px-0">
      <Container>
        <h2 className="font-heading text-3xl font-semibold tracking-wide">
          Projects
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 min-[1200px]:gap-8">
          {works.map((work) => (
            <article
              key={work.title}
              className="flex min-h-[384px] flex-col rounded-lg border border-neutral-300 p-4 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1200px) 544px, (min-width: 768px) calc((100vw - 112px) / 2), calc(100vw - 56px)"
                  className="object-cover"
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="font-heading text-xl font-semibold tracking-wide">
                  {work.title}
                </h3>

                <p className="mt-1 text-sm">{work.description}</p>

                <div className="mt-auto pt-6">
                  <div className="flex min-h-[144px] flex-col items-center gap-3">
                    {work.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-32 items-center justify-center rounded-full bg-black font-heading text-sm tracking-wide text-white transition hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        {link.label}
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
