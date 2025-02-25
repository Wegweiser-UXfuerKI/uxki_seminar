import React, { useEffect, useState } from "react";
import RightArrow from "../1_elements/RightArrow";
import "./ToTopButton.css";

/**
 * ToTopButton Component
 *
 * This component renders a "scroll to top" button that appears when the user scrolls down.
 * Clicking the button smoothly scrolls the page back to the top.
 *
 * Features:
 * - Uses `useState` to track whether the button should be visible.
 * - Uses `useEffect` to listen for scroll events and update visibility.
 * - Includes a `RightArrow` icon component for the button.
 *
 * @component
 * @example
 * return <ToTopButton />
 *
 * @returns {JSX.Element | null} The ToTopButton component, or null if not visible.
 */
const ToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    /**
     * Handles the scroll event and updates button visibility.
     * The button appears when the user scrolls more than 20px.
     */
    const handleScroll = () => {
      setShow(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Scrolls the page smoothly to the top when the button is clicked.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        id="toTopBtn"
        className="flex justify-center items-center"
        aria-label="Nach oben scrollen"
        tabIndex="0"
      >
        <RightArrow style={{ fill: "var(--bg)" }} />
      </button>
    )
  );
};

export default ToTopButton;
