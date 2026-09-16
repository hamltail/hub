"use client";

import { useState } from "react";

import PortfolioDefault from "@/components/portfolio/default/PortfolioDefault";
import PortfolioHalloween from "@/components/portfolio/halloween/PortfolioHalloween";
import ThemePumpkin from "@/components/portfolio/ThemePumpkin";

import styles from "./PortfolioThemeController.module.css";

type PortfolioTheme = "default" | "halloween";

export default function PortfolioThemeController() {
  const [theme, setTheme] = useState<PortfolioTheme>("default");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleTheme = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // 画面が完全に覆われたところでテーマを切り替える
    window.setTimeout(() => {
      setTheme((currentTheme) =>
        currentTheme === "default" ? "halloween" : "default",
      );

      // 新テーマを描画してから幕を開く
      window.setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 500);
  };

  return (
    <div className="relative overflow-x-clip">
      {theme === "default" ? <PortfolioDefault /> : <PortfolioHalloween />}

      <ThemePumpkin onClick={toggleTheme} />

      <div
        aria-hidden="true"
        className={`${styles.transitionOverlay} ${
          isTransitioning ? styles.visible : ""
        }`}
      />
    </div>
  );
}
