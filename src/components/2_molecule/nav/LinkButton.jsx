import React from "react";
import { useNavigate } from "react-router-dom";
import BaseButton from "../../1_elements/BaseButton";
import ArrowIcon from "../../1_elements/ArrowIcon";

/**
 * @component
 * @param {Object} props
 * @param {string} props.content - Text content shown inside button.
 * @param {string} props.destination - URL or ID of the target element.
 * @param {string} [props.arrowPosition="right"] - Position of the arrow icon.
 * @param {boolean} [props.useGlassyBox=false] - If true, applies a glassy effect.
 * @param {boolean} [props.disabled=false] - If true, the button is disabled.
 * @param {string} [props.ariaLabel] - ARIA label for accessibility.
 * @param {string} [props.className=""] - Additional class names for styling.
 * @returns
 */
const LinkButton = ({
  content,
  destination,
  arrowPosition = "right",
  useGlassyBox = false,
  disabled = false,
  ariaLabel,
  className = "",
}) => {
  const navigate = useNavigate();
  const label = ariaLabel || content;

  const handleNavigation = (event) => {
    if (!destination) return;

    if (destination.startsWith("#")) {
      event.preventDefault();
      const target = document.getElementById(destination.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else if (destination.startsWith("http")) {
      window.open(destination, "_blank", "noopener noreferrer");
    } else {
      navigate(destination);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <BaseButton
      onClick={handleNavigation}
      disabled={disabled}
      useGlassyBox={useGlassyBox}
      ariaLabel={label}
      className={className}>
      {content}
      <ArrowIcon direction={arrowPosition} />
    </BaseButton>
  );
};

export default LinkButton;
