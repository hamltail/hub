import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Creepster,
  Noto_Sans_JP,
  Reggae_One,
} from "next/font/google";
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

const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-creepster",
});

const reggaeOne = Reggae_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-reggae-one",
});

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getTranslations("Metadata");
  const portfolio = await getTranslations("Portfolio");

  const title = `${portfolio("title")} | ${portfolio("name")}`;
  const description = metadata("description");

  return {
    metadataBase: new URL("https://hub.hamltail.dev"),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.png"],
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
      className={`${notoSansJP.variable} ${barlowCondensed.variable} ${creepster.variable} ${reggaeOne.variable}`}
    >
      <body className="bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
