import React, { useContext, useEffect, useRef } from "react";
import { getModuleLinksAndNames } from "../ContentHandler";
import HomeModuleCard from "../HomeModuleCard";
import { AppContext } from "../../AppContext";

/**
 * Home component that serves as the landing page for the learning platform.
 * It displays an introduction to the course, followed by the list of available modules.
 * It handles smooth scrolling to a specific chapter when `scrollToChapter` is set.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
const Home = () => {
  const modulesData = getModuleLinksAndNames();
  const {
    scrollToChapter,
    setScrollToChapter,
    disabledModules,
    disabledSubtopics,
  } = useContext(AppContext);
  const moduleRefs = useRef([]);

  /**
   * Effect hook that listens for changes in the `scrollToChapter` state.
   * If a chapter is specified, it will scroll to the corresponding module card.
   *
   * @function
   * @param {string|null} scrollToChapter - The chapter to scroll to, if specified.
   * @param {Array} modulesData - Array of module data containing module links and names.
   * @param {Function} setScrollToChapter - Function to reset the `scrollToChapter` state after scrolling.
   */
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
    <div className="flex flex-col justify-center items-center gap-10 my-32 px-6 m-auto max-w-[1600px]">
      <section className="mt-0">
        <h2>Willkommen auf der Lernplattform von Wegweiser UX für KI!</h2>
        <p>
          Dieses Projekt bietet Hilfestellungen und praktische Informationen
          über Künstliche Intelligenz (KI) und User Experience (UX) von
          KI-Systemen, die auf das Gemeinwohl ausgerichtet sind. Die Inhalte
          wurden für Entwickler, Projektmanager und KI- oder UX-Interessierte
          unabhängig von ihrem jeweiligen Erfahrungsniveau erstellt.
        </p>
        <p>
          In den folgenden Modulen präsentieren wir mithilfe von Videoeinheiten
          und Texten Inhalte zu relevanten Themen in den Bereichen UX und der
          Anwendung von KI-Systemen.
        </p>
        <p>
          Die einzelnen Lektionen können unabhängig voneinander konsumiert
          werden. Dieser Aufbau erlaubt es Ihnen, für Sie interessante Themen
          auszuwählen und sich die Inhalte dazu anzusehen, oder aber der von uns
          erdachten Struktur zu folgen. <br /> Beachten Sie bitte, dass einzelne
          Lerninhalte das Wissen aus vorherigen Modulen voraussetzen können.
          Hatten sie zum Beispiel bisher wenig Berührungspunkte mit UX, kann es
          sinnvoll sein, die entsprechende Lehreinheit zu sehen, bevor Sie sich
          mit UX bezogenen KI-Eigenschaften auseinandersetzen.
        </p>
      </section>
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
