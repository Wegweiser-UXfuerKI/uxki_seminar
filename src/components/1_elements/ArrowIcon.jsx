import React from "react";
import BaseArrowSVG from "../../assets/icons/right-arrow.svg?react";

/**
 * @component
 * @param {Object} props
 * @param {string} [props.direction="right"] - Direction of the arrow.
 * @param {string} [props.className=""] - Additional class names for styling.
 * @param {Object} [props.style] - Additional styles for the SVG.
 * @returns {JSX.Element}
 */
const ArrowIcon = ({ direction = "right", className = "", style = {} }) => {
  let rotation = 0;
  switch (direction) {
    case "left":
      rotation = 180;
      break;
    case "up":
      rotation = -90;
      break;
    case "down":
      rotation = 90;
      break;
    default:
      rotation = 0;
  }

  const combinedStyle = {
    transform: `rotate(${rotation}deg)`,
    ...style,
  };

  return (
    <BaseArrowSVG
      className={`arrow-icon svgFill ${className}`}
      style={combinedStyle}
      aria-hidden="true"
    />
  );
};

export default ArrowIcon;
