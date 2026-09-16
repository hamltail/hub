"use client";

import { useState } from "react";

import PortfolioDefault from "@/components/portfolio/default/PortfolioDefault";
import PortfolioHalloween from "@/components/portfolio/halloween/PortfolioHalloween";

type PortfolioTheme = "default" | "halloween";

export default function PortfolioThemeController() {
  const [theme, setTheme] = useState<PortfolioTheme>("default");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "default" ? "halloween" : "default",
    );
  };

  return (
    <>
      {theme === "default" ? <PortfolioDefault /> : <PortfolioHalloween />}

      <button
        type="button"
        onClick={toggleTheme}
        className="fixed right-6 bottom-6 z-50 rounded-full border border-border bg-surface px-4 py-3 text-foreground shadow-lg"
      >
        🎃 Theme
      </button>
    </>
  );
}
