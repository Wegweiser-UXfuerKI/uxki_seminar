import { useContext } from "react";
import DropDownMenu from "./DropDownMenu";
import { AppContext } from "../../../AppContext";
import {
  getModuleLinksAndNames,
  getSubtopicLinksAndNamesByModulelink,
  getModuleByLink,
} from "../../ContentHandler";

/**
 * IconNav Component
 *
 * Renders a vertical navigation menu with module icons. When hovered or focused, a dropdown menu displays related subtopics.
 * This component supports keyboard accessibility and screen reader-friendly labels.
 *
 * @component
 * @returns {JSX.Element} A navigational menu with module icons and dropdown subtopics.
 */
const IconNav = () => {
  const {
    selectedModuleLink,
    selectedSubtopicLink,
    disabledModules,
    disabledSubtopics,
  } = useContext(AppContext);
  const modules = getModuleLinksAndNames();

  return (
    <div id="iconNav" className="relative flex" aria-label="Modul-Navigation">
      <div className="flex flex-col items-center gap-3 2xl:gap-2 relative">
        {modules.map(([moduleLink, moduleName]) => {
          const module = getModuleByLink(moduleLink);
          const ModuleIcon = module?.moduleImage;
          const subtopics =
            getSubtopicLinksAndNamesByModulelink(moduleLink) || [];
          const isActive = moduleLink === selectedModuleLink;
          const isDisabled = disabledModules.includes(moduleLink);

          return (
              <DropDownMenu
              key={moduleLink}
                selectedLink={`${selectedModuleLink}/${selectedSubtopicLink}`}
                selectedName={moduleName}
                selectedModule={moduleLink}
                items={subtopics.map(([subtopicLink, subtopicName]) => [
                  `${moduleLink}/${subtopicLink}`,
                  subtopicName,
                ])}
                disabledItems={disabledSubtopics[moduleLink] || []}
                isDisabledModule={isDisabled}
                title={moduleName}
                triggerElement={() =>
                  ModuleIcon ? (
                  <span
                    className={`iconWrapper relative ${
                        isActive ? "active" : ""
                    }`}>
                      <ModuleIcon className="w-10 h-10 2xl:w-12 2xl:h-12 svgFill p-1 2xl:p-2" />
                  </span>
                  ) : (
                    <span className="w-10 h-10 flex items-center justify-center">
                      {moduleName[0]}
                    </span>
                  )
                }
              />
          );
        })}
      </div>
    </div>
  );
};

export default IconNav;
