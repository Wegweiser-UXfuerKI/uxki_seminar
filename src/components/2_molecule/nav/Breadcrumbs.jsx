import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../1_elements/RightArrow";
import { AppContext } from "../../../AppContext";

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
    <nav className="flex items-center justify-start pt-8 gap-2">
      {/* Home Link */}
      <Link
        to="/"
        aria-label="Zur Startseite"
        onClick={homeScrollCheck}
        className="inlineLink">
        Kursübersicht
      </Link>

      {/* Module Link */}
      {selectedModuleLink && (
        <>
          <RightArrow />
          <Link to={`/${selectedModuleLink}`} className="inlineLink">
            {selectedModuleName}
          </Link>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
