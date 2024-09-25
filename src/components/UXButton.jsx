import React from "react";
import { ReactComponent as RightArrow } from "../../src/assets/images/right-arrow.svg";

const UXButton = ({ text, bgColor, textColor, arrowColor }) => {
  return (
    <button
      className="px-4 py-3 rounded-xl flex flex-row h-fit w-full justify-between items-center transition ease-in-out duration-500 transform hover:scale-105 hover:shadow-lg"
      style={{ backgroundColor: `var(${bgColor})` }} // Nutzung der CSS-Variable
    >
      <div style={{ color: `var(${textColor})` }}>{text}</div> {/* Textfarbe */}
      <RightArrow style={{ fill: `var(${arrowColor})` }} /> {/* Pfeilfarbe */}
    </button>
  );
};

export default UXButton;
