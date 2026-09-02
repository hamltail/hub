import type { Metadata } from "next";
import { Barlow_Condensed, Noto_Sans_JP } from "next/font/google";

import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hub.hamltail.dev"),
  title: "Portfolio | h-waji / hamltail",
  description:
    "Web制作・UI設計・個人開発の制作物を掲載したポートフォリオサイト。",
  openGraph: {
    title: "Portfolio | h-waji / hamltail",
    description:
      "Web制作・UI設計・個人開発の制作物を掲載したポートフォリオサイト。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio | h-waji / hamltail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | h-waji / hamltail",
    description:
      "Web制作・UI設計・個人開発の制作物を掲載したポートフォリオサイト。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${barlowCondensed.variable}`}
    >
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
