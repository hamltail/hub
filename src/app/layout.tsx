import type { Metadata } from "next";
import { Barlow_Condensed, Noto_Sans_JP } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

import ThemeProvider from "@/components/ThemeProvider";

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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    metadataBase: new URL("https://hub.hamltail.dev"),
    title: "Portfolio | h-waji / hamltail",
    description: t("description"),
    openGraph: {
      title: "Portfolio | h-waji / hamltail",
      description: t("description"),
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
      description: t("description"),
      images: ["/og-image.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${notoSansJP.variable} ${barlowCondensed.variable}`}
    >
      <body className="bg-background text-foreground transition-colors duration-300">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
