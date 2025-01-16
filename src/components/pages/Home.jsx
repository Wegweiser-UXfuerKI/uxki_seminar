import React, { useContext, useEffect, useRef } from "react";
import { getModuleLinksAndNames } from "../ContentHandler";
import HomeModuleCard from "../HomeModuleCard";
import { AppContext } from "../../AppContext";

const Home = () => {
  const modulesData = getModuleLinksAndNames();
  const {
    scrollToChapter,
    setScrollToChapter,
    disabledModules,
    disabledSubtopics,
  } = useContext(AppContext);
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
      <h1>Kursübersicht</h1>

      {/* Render module cards if module data exists */}
      {modulesData &&
        modulesData.map((module, index) => {
          const isDisabled = disabledModules.includes(module[0]);
          return (
            <HomeModuleCard
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
