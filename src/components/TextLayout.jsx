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

  const currentChapterIndex = subTopicDict[selectedSubtopic] ?? 0;

  useEffect(() => {
    console.log("module: ", selectedModule, "sub: ", selectedSubtopic);
  }, [selectedModule, selectedSubtopic]);

  const bgColors = [
    "#77d1CB",
    "#77A9D1",
    "#8377D1",
    "#C177D1",
    "#D177B3",
    "#54506A",
  ];

  return (
    <div className="w-full mt-10">
      {EuAiActSections[currentChapterIndex].map((section, sectionIndex) => (
        <div
          key={`kapitel-${sectionIndex}-section-${sectionIndex}`}
          style={{ backgroundColor: bgColors[sectionIndex % bgColors.length] }}>
          {section}
        </div>
      ))}
    </div>
  );
};
