"use client";

import { useState } from "react";

import PortfolioDefault from "@/components/portfolio/default/PortfolioDefault";
import PortfolioHalloween from "@/components/portfolio/halloween/PortfolioHalloween";
import ThemePumpkin from "@/components/portfolio/ThemePumpkin";

type PortfolioTheme = "default" | "halloween";

export default function PortfolioThemeController() {
  const [theme, setTheme] = useState<PortfolioTheme>("default");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "default" ? "halloween" : "default",
    );
  };

  return (
    <div className="relative overflow-x-clip">
      {theme === "default" ? <PortfolioDefault /> : <PortfolioHalloween />}

      <ThemePumpkin onClick={toggleTheme} />
    </div>
  );
}
