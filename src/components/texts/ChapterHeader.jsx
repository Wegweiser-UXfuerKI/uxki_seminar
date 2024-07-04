import React from "react";

export const ChapterHeader = ({ text, number }) => {
  return (
    <section className="relative outerContainer">
      <h1 className="mainTitle pt-24" data-number={String(number).padStart(2, "0")}>
        {text}
      </h1>
    </section>
  );
};
