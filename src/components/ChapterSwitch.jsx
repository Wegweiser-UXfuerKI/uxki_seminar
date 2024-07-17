import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { getPreviousSubtopicLink, getNextSubtopicLink } from "./ContentHandler";
import { Link } from "react-router-dom";

export const ChapterSwitch = () => {
  const { selectedModuleLink, selectedSubtopic } = useContext(AppContext);
  const [prevChapterLink, setPrevChapterLink] = useState(null);
  const [nextChapterLink, setNextChapterLink] = useState(null);

  useEffect(() => {
    setPrevChapterLink(
      getPreviousSubtopicLink(selectedModuleLink, selectedSubtopic)
    );
    setNextChapterLink(
      getNextSubtopicLink(selectedModuleLink, selectedSubtopic)
    );
  }, [selectedModuleLink, selectedSubtopic]);

  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="flex justify-between mb-4">
      {prevChapterLink && (
        <Link
          to={`/${selectedModuleLink}/${prevChapterLink}`}
          onClick={handleNavigation}>
          Vorheriges Kapitel
        </Link>
      )}
      {nextChapterLink && (
        <Link
          to={`/${selectedModuleLink}/${nextChapterLink}`}
          onClick={handleNavigation}>
          Nächstes Kapitel
        </Link>
      )}
    </section>
  );
};
