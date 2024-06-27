import React from "react";
import imageNr1 from "../../assets/images/numbers/Element1.png";
import imageNr2 from "../../assets/images/numbers/Element2.png";
import imageNr3 from "../../assets/images/numbers/Element3.png";
import imageNr4 from "../../assets/images/numbers/Element4.png";
import imageNr5 from "../../assets/images/numbers/Element5.png";

export const ChapterHeader = ({ text, number }) => {
  const images = [imageNr1, imageNr2, imageNr3, imageNr4, imageNr5];

  const image = images[number - 1] || images[0];

  return (
    <div className="relative img-container h-32 w-full mb-5">
      <h2 className="thirdTitle absolute left-0 bottom-0 px-[33px]">{text}</h2>
      <img src={image} className="opacity-30" alt={`Number ${number}`} />
    </div>
  );
};
