import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../../assets/images/right-arrow.svg";
import wegweiserLogo from "../../assets/images/Wegweiser_logo.png";
import { AppContext } from "../../AppContext";
import { ThemeToggle } from "../ThemeToggle";

/**
 * Header component that adapts its layout based on the screen size.
 *
 * @component
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  /**
   * Tracks if the current screen size is considered mobile.
   * @type {[boolean, Function]}
   */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /**
   * State for tracking whether the mobile navigation menu is open.
   * @type {[boolean, Function]}
   */
  const [navOpen, setNavOpen] = useState(false);

  /**
   * App context values for navigation.
   * @property {string} selectedModuleLink - Link to the selected module.
   * @property {string} selectedModuleName - Name of the selected module.
   * @property {string} selectedSubtopicLink - Link to the selected subtopic.
   * @property {string} selectedSubtopicName - Name of the selected subtopic.
   * @property {Function} setScrollToChapter - Function to set the scroll-to position for a chapter.
   */
  const {
    selectedModuleLink,
    selectedModuleName,
    selectedSubtopicLink,
    selectedSubtopicName,
    setScrollToChapter,
  } = useContext(AppContext);

  /**
   * Handles window resize events to update the `isMobile` state.
   */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Toggles the state of the mobile navigation menu.
   */
  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  return isMobile ? (
    <div>
      <div
        id="burger"
        className={`fixed z-50 ml-4 mt-2 cursor-pointer ${
          navOpen ? "change" : ""
        }`}
        onClick={toggleNavbar}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav
        id="nav"
        className={`fixed top-0 left-0 w-48 h-1/2 bg-gray-900 flex flex-col justify-center items-end p-5 z-40 transition-transform transform ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div
          id="inner-nav"
          className="flex flex-col justify-start space-y-5 w-full h-full pt-10">
          <Link
            to="/"
            className="text-right text-gray-400 font-semibold hover:text-gray-200 focus:outline-none"
            onClick={toggleNavbar}>
            Kursübersicht
          </Link>
          <Link
            to="/"
            className="text-right text-gray-400 font-semibold hover:text-gray-200 focus:outline-none"
            onClick={toggleNavbar}>
            {selectedModuleName}
          </Link>
        </div>
      </nav>
    </div>
  ) : (
    <header
      className="fixed flex items-center p-3 glassBlur z-50"
      role="banner"
      aria-label="Desktop Header">
      <div className="img-container w-16 ml-2 mr-2">
        <Link to="/" aria-label="Zur Startseite">
          <img src={wegweiserLogo} alt="Wegweiser.UX-für-KI Logo" />
        </Link>
      </div>
      <nav className="w-full flex items-center justify-between py-5">
        <div className="flex justify-start items-center">
          <Link
            to="/"
            aria-label="Zur Startseite"
            alt="Zur Startseite"
            onClick={() => {
              if (selectedModuleLink) {
                setScrollToChapter(selectedModuleLink);
              }
            }}>
            Kursübersicht
          </Link>
          {selectedModuleLink && (
            <>
              <RightArrow />
              <Link
                to={`/${selectedModuleLink}`}
                className={selectedSubtopicName ? "" : "active"}>
                {selectedModuleName}
              </Link>
              {selectedSubtopicName && (
                <>
                  <RightArrow />
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
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
