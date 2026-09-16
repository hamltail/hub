export const projects = [
  {
    title: "Animal Corporation",
    descriptionKey: "animalCorporation.description",
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
    title: "Web Lab",
    descriptionKey: "webLab.description",
    image: "/images/works/web-lab.webp",
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
    title: "Pawth",
    descriptionKey: "pawth.description",
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
  {
    title: "Interaction Lab",
    descriptionKey: "interactionLab.description",
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
    descriptionKey: "portfolioSite.description",
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
] as const;

export type Project = (typeof projects)[number];
