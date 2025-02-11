import React, { useContext, useEffect, useRef } from "react";
import { getModuleLinksAndNames } from "../ContentHandler";
import HomeModuleCard from "../2_molecule/cards/HomeModuleCard";
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
    <div className="flex flex-col justify-center items-center gap-10 my-32 px-6 max-w-[1600px]">
      <section className="lg:w-[70vw] sm:w-[90vw] w-full max-w-[960px] lg:my-20 my-10">
        <h1 className="secondTitle">Willkommen auf der Lehrplattform von Wegweiser.UX-für-KI!</h1>
        <p>
          Dieses Projekt bietet Hilfestellungen und praktische Informationen
          über <b>Künstliche Intelligenz (KI) und User Experience (UX) von
          KI-Systemen</b>, die auf das Gemeinwohl ausgerichtet sind. Die Inhalte
          wurden für <b>Entwickler:innen, Projektmanager:innen und KI- oder UX-Interessierte </b> 
          unabhängig von ihrem jeweiligen Erfahrungsniveau erstellt.
        </p>
        <h4>Was erwartet Sie?</h4>
        <p>
          In den folgenden Modulen präsentieren wir mithilfe von <b>Videoeinheiten
          und Texten</b> Inhalte zu relevanten Themen in den Bereichen UX und der
          Anwendung von KI-Systemen.
          </p>
        <h4>Wie nutzen Sie die Plattform optimal?</h4>
        <p>
          Die einzelnen Lektionen können <b>unabhängig voneinander</b> konsumiert
          werden. Dieser Aufbau erlaubt es Ihnen, für Sie interessante Themen
          auszuwählen und sich die Inhalte dazu anzusehen, oder aber der von uns
          erdachten Struktur zu folgen. <br /> Beachten Sie bitte, dass einzelne
          Lehrinhalte das Wissen aus vorherigen Modulen voraussetzen können.
          Hatten sie zum Beispiel bisher wenig Berührungspunkte mit UX, kann es
          sinnvoll sein, die entsprechende Lehreinheit zu sehen, bevor Sie sich
          mit UX bezogenen KI-Eigenschaften auseinandersetzen.
        </p>
      </section>
      <h2 className="mainTitle mb-0">Modulübersicht</h2>

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
