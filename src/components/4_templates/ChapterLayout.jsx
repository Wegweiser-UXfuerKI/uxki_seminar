import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChapterSwitch } from "../3_organism/ChapterSwitch";
import { getSubtopicContentByLink } from "../ContentHandler";

/**
 * A component that renders the content of a selected subtopic and provides navigation between chapters.
 * The content is fetched based on the currently selected module and subtopic links from the `AppContext`.
 *
 * @component
 * @returns {JSX.Element} The rendered TextLayout component.
 */
export const ChapterLayout = () => {
  const { module, subtopicId } = useParams();
  const [subtopicContent, setSubtopicContent] = useState(null);

  /**
   * Updates `subtopicContent` whenever `selectedModuleLink` or `selectedSubtopicLink` changes.
   */
  useEffect(() => {
    setSubtopicContent(getSubtopicContentByLink(module, subtopicId));
  }, [module, subtopicId]);

  return (
    <div
      id="content"
      className="flex flex-col max-w-[960px] w-full lg:my-20 my-28 px-6 lg:gap-y-24 gap-y-10">
      {subtopicContent &&
      subtopicContent.content &&
      Array.isArray(subtopicContent.content) ? (
        subtopicContent.content.map((section, sectionIndex) => (
          <div
            key={`kapitel-${sectionIndex}-section-${sectionIndex}`}
            id={sectionIndex}>
            {section}
          </div>
        ))
      ) : (
        <p>Inhalt wird geladen...</p>
      )}
      <ChapterSwitch />
    </div>
  );
};
