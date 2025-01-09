import React from "react";
import { ReactComponent as RightArrow } from "../../src/assets/images/right-arrow.svg";
import "./UXButton.css";

const UXButton = ({ text }) => {
  return (
    <div className="ux-button px-6 py-4 rounded-xl flex flex-row h-fit justify-between items-center transition ease-in-out duration-[390ms] transform hover:shadow-lg">
      {text}
      <RightArrow />
    </div>
  );
};

export default UXButton;
