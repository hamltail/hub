const works = [
  {
    title: "Animal Corporation",
    description: "架空企業のコーポレートサイト",
  },
  {
    title: "Interaction Lab",
    description: "Web制作・UI実験のアトリエ",
  },
  {
    title: "Portfolio Site",
    description: "制作物を掲載したポートフォリオサイト",
  },
  {
    title: "Pawth",
    description: "小さなWeb日記アプリ",
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
              <a href="#" className="font-heading text-sm">
                GitHub
              </a>
              <a href="#" className="font-heading text-sm">
                note
              </a>
              <a href="#" className="font-heading text-sm">
                Zenn
              </a>
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
                className="min-h-[384px] rounded-lg border border-neutral-300 p-4"
              >
                <div className="aspect-[16/9] w-full bg-neutral-100" />

                <div className="mt-5">
                  <h2 className="font-heading text-xl font-semibold tracking-wide">
                    {work.title}
                  </h2>

                  <p className="mt-1 text-sm">{work.description}</p>
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
