import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { ChapterSwitch } from "../3_organism/ChapterSwitch";
import { getSubtopicContentByLink } from "../ContentHandler";

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
    <div id="content" className="flex flex-col gap-y-20">
      {subtopicContent &&
      subtopicContent.content &&
      Array.isArray(subtopicContent.content) ? (
        subtopicContent.content.map((section, sectionIndex) => {
          return (
            <div
              key={`kapitel-${sectionIndex}-section-${sectionIndex}`}
              id={sectionIndex}>
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
