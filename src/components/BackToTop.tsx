"use client";

import { useEffect, useState } from "react";

import { shouldShowBackToTop } from "@/lib/scroll";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(shouldShowBackToTop(window.scrollY));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="ページ上部へ戻る"
      className="group fixed right-6 bottom-6 z-50 flex size-12 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground shadow-sm transition-transform duration-200 hover:-translate-y-1"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 15 6-6 6 6" />
      </svg>
    </button>
  );
}
