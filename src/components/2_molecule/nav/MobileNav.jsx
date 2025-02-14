import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import "./MobileNav.css";

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
  } = useContext(AppContext);

  const toggleNavbar = () => {
    setNavOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Burger Menu */}
      <button
        id="burger"
        className={`z-40 cursor-pointer ${navOpen ? "change" : ""}`}
        onClick={toggleNavbar}
        aria-expanded={navOpen}
        aria-label={navOpen ? "Navigation schließen" : "Navigation öffnen"}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>

        {/* Navigation Menu */}
        <nav
          id="dropDown"
          className={`fixed top-[64px] right-4 w-4/5 h-fit glassBox rounded-xl z-40 transform transition-transform duration-300 ease-in-out ${
            navOpen ? "translate-y-0 opacity-1" : "opacity-0 pointer-events-none translate-y-full"
          }`}
          aria-hidden={!navOpen}
          role="dialog"
          aria-label="Mobile Navigation">
          {/* TODO: add dropdown with all courses */}
          <div className="flex flex-col justify-center items-start p-4">
            <Link
              to={`/${selectedModuleLink}`}
              className={selectedSubtopicName ? "px-2 py-1" : "active"}>
              {selectedModuleName}
            </Link>
            <Link
              to={`/${selectedModuleLink}/${selectedSubtopicLink}`}
              className="active px-2 py-1">
              {selectedSubtopicName}
            </Link>
          </div>
        </nav>
      </button>
    </>
  );
};

export default MobileNav;
