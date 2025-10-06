import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../AppContext";
import {
  getPreviousSubtopicLink,
  getNextSubtopicLink,
  getSubtopicNameByLink,
} from "../ContentHandler";
import UXButton from "../2_molecule/UXButton";

/**
 * A React component for navigating between chapters of a module.
 * Displays links to the previous and next chapters if available.
 *
 * @component
 * @returns {JSX.Element} The rendered ChapterSwitch component.
 */
export const ChapterSwitch = () => {
  const {
    selectedModuleLink,
    selectedSubtopicLink,
    disabledSubtopics,
    isDevMode,
  } = useContext(AppContext);
  const [prevChapterLink, setPrevChapterLink] = useState(null);
  const [nextChapterLink, setNextChapterLink] = useState(null);
  const [prevChapterName, setPrevChapterName] = useState(null);
  const [nextChapterName, setNextChapterName] = useState(null);

  /**
   * Updates the links for the previous and next chapters whenever the selected module or subtopic changes.
   */
  useEffect(() => {
    const findValidChapterLink = (direction) => {
      let currentLink =
        direction === "previous"
          ? getPreviousSubtopicLink(selectedModuleLink, selectedSubtopicLink)
          : getNextSubtopicLink(selectedModuleLink, selectedSubtopicLink);

      while (
        currentLink &&
        disabledSubtopics[selectedModuleLink]?.includes(currentLink)
      ) {
        currentLink =
          direction === "previous"
            ? getPreviousSubtopicLink(selectedModuleLink, currentLink)
            : getNextSubtopicLink(selectedModuleLink, currentLink);
      }

      return currentLink;
    };

    const prevLink = findValidChapterLink("previous");
    const nextLink = findValidChapterLink("next");

    setPrevChapterLink(prevLink);
    setNextChapterLink(nextLink);
  }, [selectedModuleLink, selectedSubtopicLink, disabledSubtopics]);

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
    <section className="flex sm:flex-row flex-col w-full xl:gap-28 md:gap-16 gap-10 justify-between">
      <div className="md:w-1/2 w-full">
        {prevChapterLink && (
          <UXButton
            text={prevChapterName}
            arrowPosition="left"
            useGlassyBox={true}
            to={
              isDevMode
                ? `/dev/${selectedModuleLink}/${prevChapterLink}`
                : `/${selectedModuleLink}/${prevChapterLink}`
            }
          />
        )}
      </div>
      <div className="md:w-1/2 w-full">
        {nextChapterLink && (
          <UXButton
            text={nextChapterName}
            useGlassyBox={true}
            to={
              isDevMode
                ? `/dev/${selectedModuleLink}/${nextChapterLink}`
                : `/${selectedModuleLink}/${nextChapterLink}`
            }
          />
        )}
      </div>
    </section>
  );
};
