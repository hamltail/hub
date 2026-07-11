import Image from "next/image";

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

const works = [
  {
    title: "Animal Corporation",
    description: "架空企業のコーポレートサイト",
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
    description: "Web制作・UI実験のアトリエ",
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
    description: "制作物を掲載したポートフォリオサイト",
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
  {
    title: "Pawth",
    description: "小さなWeb日記アプリ",
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
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="px-7 pt-8 md:px-11 md:pt-16 min-[1200px]:px-0">
        <div className="mx-auto w-full max-w-[1120px]">
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
                  className="nav-link font-heading transition hover:opacity-60"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-7 pt-8 md:px-11 min-[1200px]:px-0">
        <div className="mx-auto w-full max-w-[1120px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 min-[1200px]:grid-cols-3 min-[1200px]:gap-8">
            {works.map((work) => (
              <article
                key={work.title}
                className="min-h-[384px] rounded-lg border border-neutral-300 p-4 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mt-5">
                  <h2 className="font-heading text-xl font-semibold tracking-wide">
                    {work.title}
                  </h2>

                  <p className="mt-1 text-sm">{work.description}</p>

                  <div className="mt-6 flex flex-col items-center gap-3">
                    {work.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-32 items-center justify-center rounded-full bg-black font-heading text-sm tracking-wide text-white transition hover:opacity-60"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-7 pb-6 pt-16 md:px-11 md:pt-24 min-[1200px]:px-0">
        <div className="mx-auto w-full max-w-[1120px] text-center">
          <small className="font-heading tracking-wide">
            © 2026 h-waji / hamltail
          </small>
        </div>
      </footer>
    </main>
  );
}
