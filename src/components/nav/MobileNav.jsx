import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";

/**
 * MobileNav component to display navigation for mobile screens.
 *
 * @component
 * @returns {JSX.Element} The rendered mobile navigation component.
 */
const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const {
    selectedModuleLink,
    selectedModuleName,
    selectedSubtopicLink,
    selectedSubtopicName,
    setScrollToChapter,
  } = useContext(AppContext);

  const toggleNavbar = () => {
    setNavOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Burger Menu */}
      <button
        id="burger"
        className={`z-50 cursor-pointer ${navOpen ? "change" : ""}`}
        onClick={toggleNavbar}
        aria-expanded={navOpen}
        aria-label={navOpen ? "Navigation schließen" : "Navigation öffnen"}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>

        {/* Navigation Menu */}
        <nav
          id="nav"
          className={`fixed top-[64px] right-4 w-4/5 h-fit glassBox glassBlur rounded-xl transform transition-transform duration-300 ease-in-out ${
            navOpen ? "translate-y-0 opacity-1" : "opacity-0 translate-y-full"
          }`}
          aria-hidden={!navOpen}
          role="dialog"
          aria-label="Mobile Navigation">
          {/* TODO: add dropdown with all courses */}
          <div className="flex flex-col justify-center items-start p-4">
            <Link
              to="/"
              aria-label="Zur Startseite"
              onClick={() => {
                if (selectedModuleLink) {
                  setScrollToChapter(selectedModuleLink);
                }
              }}>
              Kursübersicht
            </Link>
            {selectedModuleLink && (
              <>
                <Link
                  to={`/${selectedModuleLink}`}
                  className={selectedSubtopicName ? "" : "active"}>
                  {selectedModuleName}
                </Link>
                {selectedSubtopicName && (
                  <>
                    <Link
                      to={`/${selectedModuleLink}/${selectedSubtopicLink}`}
                      className="active">
                      {selectedSubtopicName}
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </nav>
      </button>
    </>
  );
};

export default MobileNav;
