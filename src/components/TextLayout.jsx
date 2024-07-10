import React, { useContext, useEffect, useState } from "react";
import EuAiActSections from "./content/EuAiAct";
import { AppContext } from "../AppContext";

export const TextLayout = () => {
  const { selectedModule } = useContext(AppContext);
  const { selectedSubtopic } = useContext(AppContext);

  // temporary solution
  const subTopicDict = {
    Einleitung: 0,
    "Risikostufen - Anwendungsbeispiele": 1,
    "Risikostufen - Auswirkungen": 2,
    "High Level Expert Group": 3,
    Fazit: 4,
  };

  console.log(selectedSubtopic);

  // Initialize chapter index from the selected subtopic
  const initialChapterIndex = subTopicDict[selectedSubtopic] ?? 0;
  const [chapterIndex, setChapterIndex] = useState(initialChapterIndex);

  // Sync chapter index with selectedSubtopic when it changes
  useEffect(() => {
    setChapterIndex(subTopicDict[selectedSubtopic] ?? 0);
  }, [selectedSubtopic]);

  useEffect(() => {
    console.log("module: ", selectedModule, "sub: ", selectedSubtopic);
  }, [selectedModule, selectedSubtopic]);

  const handleNextChapter = () => {
    if (chapterIndex < Object.keys(subTopicDict).length - 1) {
      setChapterIndex(chapterIndex + 1);
    }
  };

  const handlePrevChapter = () => {
    if (chapterIndex > 0) {
      setChapterIndex(chapterIndex - 1);
    }
  };

  return (
    <div className="mt-20">
      {EuAiActSections[chapterIndex].map((section, sectionIndex) => (
        <div
          key={`kapitel-${sectionIndex}-section-${sectionIndex}`}
          className={`bg-color-${sectionIndex % 6}`}
        >
          {section}
        </div>
      ))}
      <section className="flex justify-between mb-4">
        <button
          onClick={handlePrevChapter}
          style={{ opacity: chapterIndex === 0 ? 0 : 1 }}
          disabled={chapterIndex <= 0}
        >
          Letztes Kapitel
        </button>
        <button
          onClick={handleNextChapter}
          style={{
            opacity:
              chapterIndex === Object.keys(subTopicDict).length - 1 ? 0 : 1,
          }}
          disabled={chapterIndex >= Object.keys(subTopicDict).length - 1}
        >
          Nächstes Kapitel
        </button>
      </section>
    </div>
  );
};
