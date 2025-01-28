import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "./RightArrow";
import "./UXButton.css";

/**
 * A customizable button component with text and an arrow icon.
 * The button can be styled using background color, text color, and arrow color properties.
 * The button features a hover effect that scales and adds a shadow.
 *
 * @component
 * @param {Object} props - The props for the UXButton component.
 * @param {string} props.text - The text to display inside the button.
 * @param {string} props.bgColor - The background color of the button, passed as a CSS variable.
 * @param {string} props.textColor - The text color of the button, passed as a CSS variable.
 * @param {string} props.arrowColor - The color of the arrow icon, passed as a CSS variable.
 *
 * @returns {JSX.Element} The rendered UXButton component.
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
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
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
