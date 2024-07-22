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
        subtopicContent.content.map((section, sectionIndex) => (
          <div
            key={`kapitel-${sectionIndex}-section-${sectionIndex}`}
            className={`bg-color-${sectionIndex % 6}`}>
            {section}
          </div>
        ))
      ) : (
        /* TODO: styling or own component? */
        <p>Loading...</p>
      )}
      <ChapterSwitch />
    </div>
  );
};
