import React, { useContext, useEffect, useRef } from "react";
import { getModuleLinksAndNames } from "../ContentHandler";
import HomeModuleCard from "../2_molecule/cards/HomeModuleCard";
import { AppContext } from "../../AppContext";
import { VideoContainer } from "../1_elements/VideoContainer";
import UXButton from "../1_elements/UXButton";
import WegweiserPng from "../../assets/images/Wegweiser.webp";
import SubNavigation from "../2_molecule/nav/SubNavigation";
import Accordion from "../2_molecule/nav/Accordion";

/**
 * Home component that serves as the landing page for the Wegweiser.UX-für-KI learning platform.
 * It displays an introduction to the course, including the purpose of the platform, what users can expect,
 * and the list of available modules. The component also handles smooth scrolling to specific chapters when
 * `scrollToChapter` is set.
 *
 * The sections and modules are dynamically rendered based on the content fetched from `getModuleLinksAndNames`.
 * It also contains buttons that allow users to navigate to different sections of the site and provides
 * an accordion to explain how to use the platform optimally.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 *
 * @returns {JSX.Element} The Home component containing sections for introduction, project expectations, and module overview.
 */
const Home = () => {
  const modulesData = getModuleLinksAndNames(); // Fetch the list of available modules and their details
  const {
    scrollToChapter,
    setScrollToChapter,
    disabledModules,
    disabledSubtopics,
  } = useContext(AppContext); // Context to handle scroll and disabled modules/subtopics
  const moduleRefs = useRef([]); // Reference to each module card for smooth scrolling

  /**
   * Effect hook that listens for changes in the `scrollToChapter` state.
   * When a chapter is specified, it finds the corresponding module card and scrolls to it smoothly.
   * After scrolling, the `scrollToChapter` state is reset to null.
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

  const sections = [
    { id: "intro", title: "Lehrplattform Wegweiser.UX-für-KI" },
    { id: "vorstellung", title: "Was erwartet Sie?" },
    { id: "module", title: "Zur Modulübersicht" },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[1280px] xl:my-20 my-28 px-6 lg:gap-y-24 gap-y-10">
    <SubNavigation sections={sections} />

      <section
        id="intro"
        className="flex sm:flex-row flex-col items-end lg:gap-16 md:gap-10 gap-6">
        <div className="sm:w-[60%] w-full">
          <h1 className="mb-8">Lehrplattform von Wegweiser.UX-für-KI</h1>
          <p>
            Unser Projekt bietet Hilfestellungen und praktische Informationen
            über{" "}
            <b>
              Künstliche Intelligenz (KI) und User Experience (UX) von
              KI-Systemen
            </b>
            , die auf das <b>Gemeinwohl</b> ausgerichtet sind. Die Inhalte
            wurden für{" "}
            <b>
              Entwickler:innen, Projektmanager:innen und KI- oder
              UX-Interessierte{" "}
            </b>
            unabhängig von ihrem jeweiligen Erfahrungsniveau erstellt.
          </p>
          <div className="flex lg:flex-row flex-col w-full lg:gap-10 gap-4 mb-4 justify-between">
            <div className="lg:w-1/2 w-full">
              <UXButton
                text={"Alle Module ansehen"}
                useGlassyBox={true}
                to={"#module"}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <UXButton
                text={"Mehr zum Projekt erfahren"}
                useGlassyBox={true}
                to={"https://projekt.ux-fuer-ki.de/"}
                target="_blank"
              />
            </div>
          </div>
        </div>
        <div className="sm:w-[40%] w-[98%] rotate-6">
          <img
            type={"image"}
            src={WegweiserPng}
            className="max-w-[360px] w-full"
            alt="Wegweiser.UX-für-KI Plattform Logo"
          />
        </div>
      </section>

      <section
        id="vorstellung"
        className="flex md:flex-row flex-col items-start lg:gap-16 md:gap-10 gap-6">
        <div className="md:w-[50%] w-full">
          <VideoContainer
            link={
              "https://www.youtube-nocookie.com/embed/LDvVRvG7OB0?si=rc3QSVpraKQsQlE8"
            }
            title={"Projektvorstellungsvideo"}
          />
        </div>
        <div className="md:w-[50%] w-full">
          <h3>Was erwartet Sie?</h3>
          <p>
            In den folgenden Modulen präsentieren wir mithilfe von{" "}
            <b>Videoeinheiten und Texten</b> Inhalte zu relevanten Themen in den
            Bereichen UX und der Anwendung von KI-Systemen.
          </p>
          <Accordion title="Wie nutzen Sie die Plattform optimal?">
            <p>
              Die einzelnen Lektionen können <b>unabhängig voneinander</b>{" "}
              konsumiert werden. Dieser Aufbau erlaubt es Ihnen, für Sie
              interessante Themen auszuwählen und sich die Inhalte dazu
              anzusehen, oder aber der von uns erdachten Struktur zu folgen.{" "}
              <br /> Beachten Sie bitte, dass einzelne Lehrinhalte das Wissen
              aus vorherigen Modulen voraussetzen können. Hatten sie zum
              Beispiel bisher wenig Berührungspunkte mit UX, kann es sinnvoll
              sein, die entsprechende Lehreinheit zu sehen, bevor Sie sich mit
              UX bezogenen KI-Eigenschaften auseinandersetzen.
            </p>
          </Accordion>
        </div>
      </section>

      <section
        id="module"
        className="flex flex-col justify-center items-left w-full pt-8 gap-10">
        <h2 className="mb-0">Modulübersicht</h2>

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
      </section>
    </div>
  );
};

export default Home;
