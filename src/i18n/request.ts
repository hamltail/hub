import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

const supportedLocales = ["ja", "en"] as const;

type Locale = (typeof supportedLocales)[number];

function isSupportedLocale(locale: string | undefined): locale is Locale {
  return supportedLocales.some((supportedLocale) => supportedLocale === locale);
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get("locale")?.value;

  let locale: Locale;

  if (isSupportedLocale(savedLocale)) {
    locale = savedLocale;
  } else {
    const requestHeaders = await headers();
    const acceptLanguage = requestHeaders.get("accept-language");

    const preferredLanguage = acceptLanguage
      ?.split(",")[0]
      ?.trim()
      .toLowerCase();

    locale = preferredLanguage?.startsWith("ja") ? "ja" : "en";
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
