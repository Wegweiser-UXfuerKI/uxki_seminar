import React, { useContext, useEffect, useRef } from "react";
import { getModuleLinksAndNames } from "../ContentHandler";
import HomeModulCard from "../HomeModulCard";
import { AppContext } from "../../AppContext";

const Home = () => {
  // Temporarily deactivated modules
  const disabledModules = [
    "ux-bezogene-ki-eigenschaften",
    "dateninput",
    "verarbeitung",
    "ki-ergebnisse",
    "identifikation-prozesse",
  ];

  // Disabled subtopics for specific modules
  const disabledSubtopics = {
    "ux-und-usability": [
      "usability",
      "nutzungskontext",
      "user-experience",
      "mensch-computer-interaktion",
      "evaluation",
      "quellen",
    ],
  };

  const modulesData = getModuleLinksAndNames();
  const { scrollToChapter, setScrollToChapter } = useContext(AppContext);
  const moduleRefs = useRef([]);

  // Smooth scrolling to the specific chapter if scrollToChapter is set
  useEffect(() => {
    if (scrollToChapter && modulesData) {
      const targetIndex = modulesData.findIndex(
        (module) => module[0] === scrollToChapter
      );

      if (targetIndex !== -1 && moduleRefs.current[targetIndex]) {
        moduleRefs.current[targetIndex].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setScrollToChapter(null);
      }
    }
  }, [scrollToChapter, modulesData, setScrollToChapter]);

  return (
    <div className="flex flex-col justify-center items-center gap-10 my-40 m-auto max-w-[1600px]">
      <h1 className="pt-10">Kursübersicht</h1>

      {/* Render module cards if module data exists */}
      {modulesData &&
        modulesData.map((module, index) => {
          const isDisabled = disabledModules.includes(module[0]);
          return (
            <HomeModulCard
              key={index}
              module={module}
              index={index}
              isDisabled={isDisabled}
              disabledSubtopics={disabledSubtopics}
              moduleRefs={moduleRefs}
            />
          );
        })}
    </div>
  );
};

export default Home;
