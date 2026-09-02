"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type Locale = "ja" | "en";

const languages: {
  locale: Locale;
  label: string;
}[] = [
  {
    locale: "ja",
    label: "日本語",
  },
  {
    locale: "en",
    label: "English",
  },
];

const COOKIE_EXPIRATION = 2147483647000;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLocale = async (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    await cookieStore.set({
      name: "locale",
      value: nextLocale,
      path: "/",
      expires: COOKIE_EXPIRATION,
      sameSite: "lax",
    });

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div
      className="flex items-center gap-2 text-sm"
      aria-label="Language selection"
    >
      {languages.map((language, index) => {
        const isActive = locale === language.locale;

        return (
          <div key={language.locale} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-muted">
                /
              </span>
            )}

            <button
              type="button"
              onClick={() => changeLocale(language.locale)}
              disabled={isPending || isActive}
              aria-pressed={isActive}
              className={`transition-colors ${
                isActive
                  ? "font-semibold text-foreground"
                  : "text-muted hover:text-foreground"
              } disabled:cursor-default`}
            >
              {language.label}
            </button>
          </div>
        );
      })}
    </div>
  );
}
