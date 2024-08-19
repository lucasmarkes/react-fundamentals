import React, { useContext } from "react";
import { ThemeContext } from "./App";

import styles from './Header.scss';

export default function Header(props) {
  console.log({styles});

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
