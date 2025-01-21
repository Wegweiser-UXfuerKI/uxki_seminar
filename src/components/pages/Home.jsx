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
      <section>
        <h2>Willkommen auf der Projektwebsite von Wegweiser UX für KI!</h2>
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
