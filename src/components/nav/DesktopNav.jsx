import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RightArrow from "../1_elements/RightArrow";
import { AppContext } from "../../AppContext";
import HoverDropDown from "./HoverDropDown";
import {
  getModuleLinksAndNames,
  getSubtopicLinksAndNamesByModulelink,
} from "../ContentHandler";

/**
 * DesktopNav component to display navigation for desktop screens.
 *
 * @component
 * @returns {JSX.Element} The rendered desktop navigation component.
 */
const DesktopNav = () => {
  const {
    selectedModuleLink,
    selectedModuleName,
    selectedSubtopicLink,
    selectedSubtopicName,
    disabledModules,
    disabledSubtopics,
  } = useContext(AppContext);

  const moduleItems = getModuleLinksAndNames();
  const subtopics =
    getSubtopicLinksAndNamesByModulelink(selectedModuleLink) || [];

  const homeScrollCheck = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="w-full flex items-center justify-between py-5">
      <div className="flex justify-start items-center gap-3">
        <Link
          to="/"
          aria-label="Zur Startseite"
          onClick={() => homeScrollCheck()}
          className="firstLevel">
          Kursübersicht
        </Link>
        {selectedModuleLink && (
          <>
            <RightArrow />
            <HoverDropDown
              selectedLink={selectedModuleLink}
              selectedName={selectedModuleName}
              items={moduleItems}
              disabledItems={disabledModules[selectedModuleLink] || []}
            />
            {selectedSubtopicName && (
              <>
                <RightArrow />
                {/* TODO: fix active style here and deactivate disabled items */}
                <HoverDropDown
                  selectedLink={`/${selectedModuleLink}/${selectedSubtopicLink}`}
                  selectedName={selectedSubtopicName}
                  items={subtopics.map(([subtopicLink, subtopicName]) => [
                    `${selectedModuleLink}/${subtopicLink}`,
                    subtopicName,
                  ])}
                  disabledItems={disabledSubtopics[selectedSubtopicLink] || []}
                />
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default DesktopNav;
