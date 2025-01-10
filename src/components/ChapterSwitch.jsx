import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import {
  getPreviousSubtopicLink,
  getNextSubtopicLink,
  getSubtopicNameByLink,
} from "./ContentHandler";
import UXButton from "./UXButton";

export const ChapterSwitch = () => {
  const { selectedModuleLink, selectedSubtopicLink } = useContext(AppContext);
  const [prevChapterLink, setPrevChapterLink] = useState(null);
  const [nextChapterLink, setNextChapterLink] = useState(null);
  const [prevChapterName, setPrevChapterName] = useState(null);
  const [nextChapterName, setNextChapterName] = useState(null);

  useEffect(() => {
    setPrevChapterLink(
      getPreviousSubtopicLink(selectedModuleLink, selectedSubtopicLink)
    );
    setNextChapterLink(
      getNextSubtopicLink(selectedModuleLink, selectedSubtopicLink)
    );
  }, [selectedModuleLink, selectedSubtopicLink]);

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
    <section className="flex w-full gap-10 justify-between">
      <div className="md:w-1/2">
        {prevChapterLink && (
          <UXButton
            text={prevChapterName}
            arrowPosition="left"
            useGlassyBox={true}
            to={`/${selectedModuleLink}/${prevChapterLink}`}
          />
        )}
      </div>
      <div className="md:w-1/2">
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
