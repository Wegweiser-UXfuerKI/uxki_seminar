import React, { useEffect, useState } from "react";
import ArrowIcon from "../../1_elements/ArrowIcon";

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
        className="fixed right-4 bottom-4 flex justify-center items-center p-2 w-10 h-10 md:w-14 md:h-14 transition rounded-full z-10 hover:-translate-y-1 cursor-pointer"
        style={{ backgroundColor: "var(--text)" }}
        aria-label="Nach oben scrollen"
        tabIndex="0">
        <ArrowIcon direction="up" style={{ fill: "var(--bg" }} />
      </button>
    )
  );
};

export default ToTopButton;
