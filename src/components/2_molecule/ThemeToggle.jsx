import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

/**
 * ThemeToggle Component
 *
 * A button component that allows the user to toggle between light and dark themes.
 * It uses the `theme` state from the context to determine the current theme and
 * provides a toggle mechanism by switching between 'light' and 'dark' themes.
 *
 * @component
 * @example
 * return (
 *   <ThemeToggle />
 * )
 */
export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(AppContext);

  /**
   * Toggles between light and dark theme
   * Sets the `theme` state to either 'light' or 'dark' based on the current state.
   */
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      id="toggleTheme"
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
  );
};
