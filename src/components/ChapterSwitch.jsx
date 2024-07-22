import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { getPreviousSubtopicLink, getNextSubtopicLink } from "./ContentHandler";
import { Link } from "react-router-dom";

export const ChapterSwitch = () => {
  const { selectedModuleLink, selectedSubtopicLink } = useContext(AppContext);
  const [prevChapterLink, setPrevChapterLink] = useState(null);
  const [nextChapterLink, setNextChapterLink] = useState(null);

  useEffect(() => {
    setPrevChapterLink(
      getPreviousSubtopicLink(selectedModuleLink, selectedSubtopicLink)
    );
    setNextChapterLink(
      getNextSubtopicLink(selectedModuleLink, selectedSubtopicLink)
    );
  }, [selectedModuleLink, selectedSubtopicLink]);

  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="flex justify-between">
      <div className="w-1/2">
        {prevChapterLink && (
          <Link
            to={`/${selectedModuleLink}/${prevChapterLink}`}
            onClick={handleNavigation}>
            Vorheriges Kapitel
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-end">
        {nextChapterLink && (
          <Link
            to={`/${selectedModuleLink}/${nextChapterLink}`}
            onClick={handleNavigation}>
            Nächstes Kapitel
          </Link>
        )}
      </div>
    </section>
  );
};
