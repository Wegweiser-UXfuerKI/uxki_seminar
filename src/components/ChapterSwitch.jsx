import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import {
  getPreviousSubtopicLink,
  getNextSubtopicLink,
  getSubtopicNameByLink,
} from "./ContentHandler";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../assets/images/right-arrow.svg";
import styles from "./ChapterSwitch.module.css";

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

  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="flex justify-between">
      <div className="w-1/2">
        {prevChapterLink && (
          <Link
            to={`/${selectedModuleLink}/${prevChapterLink}`}
            onClick={handleNavigation}
            className={`flex justify-between items-center gap-[10px] w-4/5 p-5 rounded-xl ${styles.linkBox}`}>
            <RightArrow className={styles.rotated} />
            <h3 className="my-0">{prevChapterName}</h3>
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-end">
        {nextChapterLink && (
          <Link
            to={`/${selectedModuleLink}/${nextChapterLink}`}
            onClick={handleNavigation}
            className={`flex justify-between items-center gap-[10px] w-4/5 p-5 rounded-xl ${styles.linkBox}`}>
            <h3 className="my-0">{nextChapterName}</h3>
            <RightArrow />
          </Link>
        )}
      </div>
    </section>
  );
};
