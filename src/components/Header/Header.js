import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from './Header.scss';

export default function Header(props) {
  const { onToggleTheme, theme } = useContext(ThemeContext);
  return (
    <header>
      <h1 className={styles.title}>Lucas Blog</h1>
      <button
        onClick={onToggleTheme}
        style={{
          background: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        Toggle Theme
      </button>
      <hr />
    </header>
  );
}
