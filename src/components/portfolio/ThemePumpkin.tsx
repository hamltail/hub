import { useTranslations } from "next-intl";

import styles from "./ThemePumpkin.module.css";

type ThemePumpkinProps = {
  onClick: () => void;
};

export default function ThemePumpkin({ onClick }: ThemePumpkinProps) {
  const t = useTranslations("PortfolioTheme");

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={t("switchTheme")}
      className={styles.pumpkin}
    >
      <span className={styles.hoverEffect}>
        <span aria-hidden="true" className={styles.icon}>
          🎃
        </span>
      </span>
    </button>
  );
}
