import React, { useContext, useEffect } from "react";
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

  const currentChapterIndex = subTopicDict[selectedSubtopic] ?? 0;

  // when different modules exist
  // const selection = selectedModule === "EUAIAct" ? EuAiActSections : aother stuff;

  useEffect(() => {
    console.log("module: ", selectedModule, "sub: ", selectedSubtopic);
  }, [selectedModule, selectedSubtopic]);

  return (
    <div className="mt-20">
      {EuAiActSections[currentChapterIndex].map((section, sectionIndex) => (
        <div
          key={`kapitel-${sectionIndex}-section-${sectionIndex}`}
          className={`bg-color-${sectionIndex % 6}`}
        >
          {section}
        </div>
      ))}
    </div>
  );
};
