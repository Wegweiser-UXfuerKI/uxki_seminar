import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import {
  getPreviousSubtopicLink,
  getNextSubtopicLink,
  getSubtopicNameByLink,
} from "./ContentHandler";
import UXButton from "./UXButton";

/**
 * A React component for navigating between chapters of a module.
 * Displays links to the previous and next chapters if available.
 *
 * @component
 * @returns {JSX.Element} The rendered ChapterSwitch component.
 */
export const ChapterSwitch = () => {
  const { selectedModuleLink, selectedSubtopicLink } = useContext(AppContext);
  const [prevChapterLink, setPrevChapterLink] = useState(null);
  const [nextChapterLink, setNextChapterLink] = useState(null);
  const [prevChapterName, setPrevChapterName] = useState(null);
  const [nextChapterName, setNextChapterName] = useState(null);

  /**
   * Updates the links for the previous and next chapters whenever the selected module or subtopic changes.
   */
  useEffect(() => {
    setPrevChapterLink(
      getPreviousSubtopicLink(selectedModuleLink, selectedSubtopicLink)
    );
    setNextChapterLink(
      getNextSubtopicLink(selectedModuleLink, selectedSubtopicLink)
    );
  }, [selectedModuleLink, selectedSubtopicLink]);

  /**
   * Updates the names of the previous and next chapters based on their links.
   */
  useEffect(() => {
    if (prevChapterLink) {
      setPrevChapterName(
        getSubtopicNameByLink(selectedModuleLink, prevChapterLink)
      );
    } else {
      setPrevChapterName(null);
    }

    if (nextChapterLink) {
      setNextChapterName(
        getSubtopicNameByLink(selectedModuleLink, nextChapterLink)
      );
    } else {
      setNextChapterName(null);
    }
  }, [prevChapterLink, nextChapterLink, selectedModuleLink]);

  return (
    <section className="flex sm:flex-row flex-col w-full gap-10 justify-between">
      <div className="md:w-1/2 w-full">
        {prevChapterLink && (
          <UXButton
            text={prevChapterName}
            arrowPosition="left"
            useGlassyBox={true}
            to={`/${selectedModuleLink}/${prevChapterLink}`}
          />
        )}
      </div>
      <div className="md:w-1/2 w-full">
        {nextChapterLink && (
          <UXButton
            text={nextChapterName}
            useGlassyBox={true}
            to={`/${selectedModuleLink}/${nextChapterLink}`}
          />
        )}
      </div>
    </section>
  );
};
