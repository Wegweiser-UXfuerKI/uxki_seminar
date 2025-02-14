import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "./RightArrow";
import "./UXButton.css";

/**
 * UXButton Component
 *
 * A customizable and accessible button component with an optional arrow icon.
 * It supports navigation both internally (`react-router` links) and externally (`<a>` links).
 * If a hash link (`#id`) is provided, it smoothly scrolls to the target section instead of navigating.
 *
 * @component
 * @param {Object} props - The properties of the UXButton component.
 * @param {string} props.text - The text displayed inside the button.
 * @param {string} [props.to] - The destination URL or anchor link (`#id`). If omitted, the button acts as a normal button.
 * @param {string} [props.arrowPosition="right"] - The position of the arrow (`"left"` or `"right"`).
 * @param {boolean} [props.useGlassyBox=false] - If true, applies a glassy effect (`glassBox` class).
 *
 * @returns {JSX.Element} A button element that supports smooth scrolling, internal navigation, or external linking.
 */
const UXButton = ({
  text,
  arrowPosition = "right",
  useGlassyBox = false,
  to,
}) => {
  // Adds a glassy box style if `useGlassyBox` is true
  const glassyClass = useGlassyBox ? "glassBox py-6" : "";

// Scroll to the top of the page when navigating
  const handleNavigation = (event) => {
    if (to?.startsWith("#")) {
      event.preventDefault();
      const targetElement = document.getElementById(to.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else if (!to?.startsWith("http")) {
      window.scrollTo(0, 0);
    }
  };

  return to?.startsWith("http") ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`ux-button px-6 py-4 flex justify-between h-full items-center gap-2 transform ${glassyClass}`}
    >
      {text}
      <RightArrow arrowPosition={arrowPosition} />
    </a>
  ) : (
    <Link
      to={to}
      onClick={handleNavigation}
      aria-label={`Navigiere zu ${text}`}
      role="link"
      className={`ux-button px-6 py-4 flex justify-between h-full items-center gap-2 transform ${glassyClass}`}>
      {text}
      <RightArrow arrowPosition={arrowPosition} />
    </Link>
  );
};

export default UXButton;
