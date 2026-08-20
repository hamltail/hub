import Image from "next/image";
import animalCorporationImage from "../../public/images/works/animal-corporation.webp";
import interactionLabImage from "../../public/images/works/interaction-lab.webp";
import portfolioSiteImage from "../../public/images/works/portfolio-site.webp";
import pawthImage from "../../public/images/works/pawth.webp";

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

const technicalSandboxes = [
  {
    title: "Next.js Sandbox",
    description:
      "Next.js / Prismaを中心に、認証・DB・外部ストレージ連携・テスト・CIなどを実装した技術検証プロジェクト",
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
    description: "Auth.jsとBetter Authを検証した認証プロジェクト",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hamltail/auth-sandbox",
      },
    ],
  },
];

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
                  className="nav-link font-heading transition hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-7 pt-12 md:px-11 min-[1200px]:px-0">
        <div className="mx-auto w-full max-w-[1120px]">
          <h2 className="font-heading text-3xl font-semibold tracking-wide">
            Technical Sandbox
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-neutral-600">
            技術検証を目的として制作したプロジェクトです。
          </p>

          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 min-[1200px]:gap-8">
            {technicalSandboxes.map((sandbox) => (
              <article
                key={sandbox.title}
                className="flex min-h-[180px] flex-col rounded-lg border border-neutral-300 p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-heading text-xl font-semibold tracking-wide">
                  {sandbox.title}
                </h3>

                <p className="mt-2 text-sm">
                  {sandbox.description}
                </p>

                <div className="pt-6">
                  <div className="flex flex-col items-center gap-3">
                    {sandbox.links.map((link) => (
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-7 pt-12 md:px-11 min-[1200px]:px-0">
        <div className="mx-auto w-full max-w-[1120px]">
          <h2 className="font-heading text-3xl font-semibold tracking-wide">
            Projects
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 min-[1200px]:gap-8">
            {works.map((work) => (
              <article
                key={work.title}
                className="flex flex-col min-h-[384px] rounded-lg border border-neutral-300 p-4 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
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
        </div>
      </section>

      <footer className="px-7 pb-6 pt-16 md:px-11 md:pt-24 min-[1200px]:px-0">
        <div className="mx-auto w-full max-w-[1120px] text-center">
          <small className="font-heading tracking-wide">
            © {new Date().getFullYear()} h-waji / hamltail
          </small>
        </div>
      </footer>
    </main>
  );
}
