import React from "react";

/**
 * @component
 * @param {Object} props
 * @param {function} props.onClick - Function to call when the button is clicked.
 * @param {React.ReactNode} props.children - Content of button.
 * @param {string} [props.className=""] - Additional class names for styling.
 * @param {boolean} [props.disablesd=false] - If true, the button is disabled.
 * @param {string} [props.ariaLabel=""] - ARIA label for accessibility.
 * @param {boolean} [props.useGlassyBox=false] - If true, applies a glassy effect.
 * @returns {JSX.Element}
 */
const BaseButton = ({
  onClick,
  children,
  className = "",
  disabled = false,
  ariaLabel = "",
  useGlassyBox = false,
}) => {
  const glassyClass = useGlassyBox ? "glassBox py-6" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`ux-button px-6 py-4 flex justify-between h-full items-center rounded-xl gap-2 transform ${glassyClass} ${className}`}
      aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default BaseButton;
