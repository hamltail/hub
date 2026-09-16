"use client";

import { useState } from "react";

import PortfolioDefault from "@/components/portfolio/default/PortfolioDefault";
import PortfolioHalloween from "@/components/portfolio/halloween/PortfolioHalloween";
import ThemePumpkin from "@/components/portfolio/ThemePumpkin";

import styles from "./PortfolioThemeController.module.css";

type PortfolioTheme = "default" | "halloween";
type TransitionPhase = "idle" | "covering" | "revealing";

export default function PortfolioThemeController() {
  const [theme, setTheme] = useState<PortfolioTheme>("default");
  const [transitionPhase, setTransitionPhase] =
    useState<TransitionPhase>("idle");

  const toggleTheme = () => {
    if (transitionPhase !== "idle") return;

    // 前半：黒い幕で画面全体を覆う
    setTransitionPhase("covering");

    window.setTimeout(() => {
      // 真っ黒になった裏側でテーマを変更
      setTheme((currentTheme) =>
        currentTheme === "default" ? "halloween" : "default",
      );

      // 後半：中央から黒い幕を消していく
      setTransitionPhase("revealing");

      window.setTimeout(() => {
        setTransitionPhase("idle");
      }, 700);
    }, 500);
  };

  return (
    <div className="relative overflow-x-clip">
      {theme === "default" ? <PortfolioDefault /> : <PortfolioHalloween />}

      <ThemePumpkin onClick={toggleTheme} />

      <div
        aria-hidden="true"
        className={`${styles.transitionOverlay} ${
          transitionPhase === "covering" ? styles.covering : ""
        } ${transitionPhase === "revealing" ? styles.revealing : ""}`}
      />
    </div>
  );
}
