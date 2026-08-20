import Container from "@/components/Container";

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

export default function TechnicalSandboxSection() {
  return (
    <section className="px-7 pt-12 md:px-11 min-[1200px]:px-0">
      <Container>
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

              <p className="mt-2 text-sm">{sandbox.description}</p>

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
      </Container>
    </section>
  );
}
