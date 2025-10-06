import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import ArrowIcon from "../../1_elements/ArrowIcon";
import { LinkHandler } from "../../1_elements/LinkHandler";

/**
 * Breadcrumbs component to display the current navigation path.
 *
 * This component provides a breadcrumb navigation trail for the user,
 * allowing them to navigate back to previous sections of the application.
 * It includes a link to the home page and, if available, a link to the selected module.
 *
 * @component
 * @example
 * return <Breadcrumbs />
 *
 * @returns {JSX.Element} The rendered breadcrumb navigation.
 */
const Breadcrumbs = () => {
  const { selectedModuleLink, selectedModuleName } = useContext(AppContext);

  /**
   * Scrolls smoothly to the top of the page when clicking on the home link.
   */
  const homeScrollCheck = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="flex items-center justify-start pt-8 gap-2"
      aria-label="Breadcrumbs Navigation">
      {/* Home Link */}
      <LinkHandler
        to="/"
        aria-label="Zur Startseite"
        onClick={homeScrollCheck}
        className="inlineLink no_underline">
        Kursübersicht
      </LinkHandler>

      {/* Module Link */}
      {selectedModuleLink && (
        <>
          <ArrowIcon />
          <LinkHandler to={`/${selectedModuleLink}`} className="inlineLink">
            {selectedModuleName}
          </LinkHandler>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
