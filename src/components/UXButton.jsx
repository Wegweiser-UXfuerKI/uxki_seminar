import React from "react";
import { ReactComponent as RightArrow } from "../../src/assets/images/right-arrow.svg";

const UXButton = ({ text, bgColor }) => {
  return (
    <button
      className={`px-4 py-3 rounded-xl flex flex-row h-fit w-full justify-between items-center bg-${bgColor}`}
    >
      <div className="text-ux_dark ">{text}</div>
      <RightArrow />
    </button>
  );
};

export default UXButton;
