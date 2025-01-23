import React, { useContext } from "react";
import { AppContext } from "../AppContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div id="toggleTheme" className="relative">
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-11 items-center rounded-xl transition-colors"
        style={{
          backgroundColor: theme === "light" ? "var(--fg)" : "var(--bg)",
        }}>
        <span className="sr-only">Toggle theme</span>
        <div
          className={`${
            theme === "light" ? "translate-x-1" : "translate-x-6"
          } inline-block h-4 w-4 transform rounded-full transition duration-200 ease-in-out`}
          style={{
            backgroundColor: "var(--text)",
          }}
        />
      </button>
    </div>
  );
};
