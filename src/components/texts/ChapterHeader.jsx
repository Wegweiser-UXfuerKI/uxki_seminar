import React from "react";

export const ChapterHeader = ({ text, number }) => {
  return (
    <section className="titleSubtopic">
      <h1 className="relative" data-number={String(number).padStart(2, "0")}>{text}</h1>
    </section>
  );
};
