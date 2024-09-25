import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { ChapterSwitch } from "./ChapterSwitch";
import { getSubtopicContentByLink } from "./ContentHandler";

export const TextLayout = () => {
  const { selectedModuleLink, selectedSubtopicLink } = useContext(AppContext);
  const [subtopicContent, setSubtopicContent] = useState(null);

  useEffect(() => {
    setSubtopicContent(
      getSubtopicContentByLink(selectedModuleLink, selectedSubtopicLink)
    );
  }, [selectedModuleLink, selectedSubtopicLink]);

  useEffect(() => {
    console.log("subtopic Content: ", subtopicContent);
    console.log("subtopiccontent.content: ", subtopicContent?.content);
  }, [subtopicContent]);

  return (
    <div className="mt-20">
      {subtopicContent &&
      subtopicContent.content &&
      Array.isArray(subtopicContent.content) ? (
        subtopicContent.content.map((section, sectionIndex) => {
          let bgColorClass;
          if (sectionIndex === 0) {
            bgColorClass = "bg-color-0";
          } else {
            bgColorClass = `bg-color-${((sectionIndex - 1) % 5) + 1}`;
          }
          return (
            <div
              key={`kapitel-${sectionIndex}-section-${sectionIndex}`}
              className={bgColorClass}>
              {section}
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
      <ChapterSwitch />
    </div>
  );
};
