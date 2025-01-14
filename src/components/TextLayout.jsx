import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { ChapterSwitch } from "./ChapterSwitch";
import { getSubtopicContentByLink } from "./ContentHandler";

/**
 * A component that renders the content of a selected subtopic and provides navigation between chapters.
 * The content is fetched based on the currently selected module and subtopic links from the `AppContext`.
 *
 * @component
 * @returns {JSX.Element} The rendered TextLayout component.
 */
export const TextLayout = () => {
  const { selectedModuleLink, selectedSubtopicLink } = useContext(AppContext);
  const [subtopicContent, setSubtopicContent] = useState(null);

  /**
   * Updates `subtopicContent` whenever `selectedModuleLink` or `selectedSubtopicLink` changes.
   */
  useEffect(() => {
    setSubtopicContent(
      getSubtopicContentByLink(selectedModuleLink, selectedSubtopicLink)
    );
  }, [selectedModuleLink, selectedSubtopicLink]);

  return (
    <div className="flex flex-col">
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
