import { useState, useContext } from "react";
import { AppContext } from "../../../AppContext";
import {
  getModuleLinksAndNames,
  getSubtopicLinksAndNamesByModulelink,
} from "../../ContentHandler";
import "./MobileNav.css";
import { LinkHandler } from "../../1_elements/LinkHandler";
import ArrowIcon from "../../1_elements/ArrowIcon";
import { useRef } from "react";
import { useEffect } from "react";

/**
 * MobileNav component to display navigation for mobile screens.
 *
 * @component
 * @returns {JSX.Element} The rendered mobile navigation component.
 */
const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  // "default" | "modules" | "chapters"
  const [view, setView] = useState("default");
  const navRef = useRef(null);

  const {
    selectedModuleLink,
    selectedModuleName,
    selectedSubtopicLink,
    selectedSubtopicName,
  } = useContext(AppContext);

  useEffect(() => {
    if (!navOpen) return;

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setNavOpen(false);
        setView("default");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const toggleNavbar = () => {
    setNavOpen((prevState) => !prevState);
    if (navOpen) {
      setView("default");
    }
  };

  const closeNav = () => {
    setNavOpen(false);
    setView("default");
  };

  const moduleList = getModuleLinksAndNames();
  const subtopicList = getSubtopicLinksAndNamesByModulelink(selectedModuleLink);

  return (
    <div ref={navRef}>
      {/* Burger Menu */}
      <button
        id="burger"
        className={`z-40 cursor-pointer ${navOpen ? "change" : ""}`}
        onClick={toggleNavbar}
        aria-expanded={navOpen}
        aria-label={navOpen ? "Navigation schließen" : "Navigation öffnen"}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>

      {/* Navigation Menu */}
      <nav
        id="dropDown"
        className={`fixed top-[64px] p-[var(--scale2)] right-4 w-4/5 h-fit glassBox rounded-xl z-40 transform transition-transform duration-300 ease-in-out ${
          navOpen
            ? "translate-y-0 opacity-1"
            : "opacity-0 pointer-events-none translate-y-full"
        }`}
        aria-hidden={!navOpen}
        role="dialog"
        aria-label="Mobile Navigation"
      >
        {view === "default" && (
          <div className="flex flex-col gap-[var(--scale2)]">
            <button
              className="w-full text-left px-2 py-1 rounded-lg mobile-nav-item"
              onClick={() => setView("modules")}
            >
              {selectedModuleName || "Modul Auswählen"}
            </button>
            <button
              className="w-full text-left px-2 py-1 rounded-lg mobile-nav-item"
              onClick={() => setView("chapters")}
            >
              {selectedSubtopicName || "Kapitel Auswählen"}
            </button>
          </div>
        )}
        {view === "modules" && (
          <div className="flex flex-col gap-[var(--scale2)]">
            <div className="flex justify-start items-center gap-[var(--scale2)]">
              <button
                className="mobile-nav-back-btn"
                aria-label="Zurück"
                onClick={() => setView("default")}
              >
                <ArrowIcon direction="left" />
              </button>
              <span className="mobile-nav-header-label">Kursübersicht</span>
            </div>
            <div className="flex flex-col gap-[var(--base-size)]">
              {moduleList.map(([linkName, name]) => (
                <LinkHandler
                  key={linkName}
                  to={`/${linkName}`}
                  onClick={closeNav}
                  className={`px-2 py-1 rounded-lg mobile-nav-item ${linkName === selectedModuleLink ? "mobile-nav-active" : ""}`}
                >
                  {name}
                </LinkHandler>
              ))}
            </div>
          </div>
        )}
        {view === "chapters" && (
          <div className="flex flex-col gap-[var(--scale2)]">
            <div className="flex justify-start items-center gap-[var(--scale2)]">
              <button
                className="mobile-nav-back-btn"
                aria-label="Zurück"
                onClick={() => setView("default")}
              >
                <ArrowIcon direction="left" />
              </button>
              <span className="mobile-nav-header-label">Kursübersicht</span>
            </div>
            <div className="flex flex-col gap-[var(--base-size)]">
              {subtopicList.map(([linkName, name]) => (
                <LinkHandler
                  key={linkName}
                  to={`/${selectedModuleLink}/${linkName}`}
                  onClick={closeNav}
                  className={`px-2 py-1 rounded-lg mobile-nav-item ${linkName === selectedSubtopicLink ? "mobile-nav-active" : ""}`}
                >
                  {name}
                </LinkHandler>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default MobileNav;
