import styles from "./ThemePumpkin.module.css";

type ThemePumpkinProps = {
  onClick: () => void;
};

export default function ThemePumpkin({ onClick }: ThemePumpkinProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Switch portfolio theme"
      className={styles.pumpkin}
    >
      <span aria-hidden="true" className={styles.icon}>
        🎃
      </span>
    </button>
  );
}
