import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../../src/assets/images/right-arrow.svg";
import "./UXButton.css";

const UXButton = ({
  text,
  arrowPosition = "right",
  useGlassyBox = false,
  to,
}) => {
  const arrowClass =
    arrowPosition === "left"
      ? "order-first transform scale-x-[-1]"
      : "order-last";
  const layoutClass =
    arrowPosition === "left" ? "justify-start" : "justify-between";
  const glassyClass = useGlassyBox ? "glassy-box py-6" : "";

  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      to={to}
      onClick={handleNavigation}
      aria-label={`Navigiere zu ${text}`}
      role="link"
    >
      <div
        className={`ux-button px-6 py-4 flex flex-row h-fit items-center gap-[10px] transition ease-in-out duration-[390ms] transform hover:shadow-lg ${layoutClass} ${glassyClass}`}
      >
        {text}
        <RightArrow className={arrowClass} />
      </div>
    </Link>
  );
};

export default UXButton;
