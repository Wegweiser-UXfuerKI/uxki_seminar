import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../1_elements/RightArrow";
import { AppContext } from "../../../AppContext";
import DropDownMenu from "./DropDownMenu";
import {
  getModuleLinksAndNames,
  getSubtopicLinksAndNamesByModulelink,
} from "../../ContentHandler";

/**
 * TopNav component to display navigation for tablet screens.
 *
 * Provides breadcrumb-style navigation with dropdowns for module and subtopic selection.
 *
 * @component
 * @returns {JSX.Element} The rendered tablet navigation component.
 */
const TopNav = () => {
  const {
    selectedModuleLink,
    selectedModuleName,
    selectedSubtopicLink,
    selectedSubtopicName,
    disabledModules,
    disabledSubtopics,
  } = useContext(AppContext);

  /**
   * Retrieves all available modules.
   * @constant {Array} moduleItems - List of module links and names.
   */
  const moduleItems = getModuleLinksAndNames();

  /**
   * Retrieves subtopics for the selected module.
   * @constant {Array} subtopics - List of subtopic links and names.
   */
  const subtopics =
    getSubtopicLinksAndNamesByModulelink(selectedModuleLink) || [];

  /**
   * Scrolls smoothly to the top of the page when navigating home.
   */
  const homeScrollCheck = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="w-full flex items-center justify-start p-4 gap-2">
      <Link
        to="/"
        aria-label="Zur Startseite"
        onClick={homeScrollCheck}
        className="inlineLink mr-1">
        Kursübersicht
      </Link>
      {selectedModuleLink && (
        <>
          <RightArrow />
          <DropDownMenu
            selectedLink={selectedModuleLink}
            selectedName={selectedModuleName}
            items={moduleItems}
            disabledItems={disabledModules[selectedModuleLink] || []}
            position="bottom"
          />
          {selectedSubtopicName && (
            <>
              <RightArrow />
              <DropDownMenu
                selectedLink={`${selectedModuleLink}/${selectedSubtopicLink}`}
                selectedName={selectedSubtopicName}
                items={subtopics.map(([subtopicLink, subtopicName]) => [
                  `${selectedModuleLink}/${subtopicLink}`,
                  subtopicName,
                ])}
                disabledItems={disabledSubtopics[selectedModuleLink] || []}
                position="bottom"
              />
            </>
          )}
        </>
      )}
    </nav>
  );
};

export default TopNav;
