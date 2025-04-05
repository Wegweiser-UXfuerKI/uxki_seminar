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
 * Renders a vertical navigation menu with module icons. When hovered or focused,
 * a dropdown menu displays related subtopics.
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

  /**
   * Retrieves all available modules with their links and names.
   * @constant {Array} modules - List of module links and names.
   */
  const modules = getModuleLinksAndNames();

  return (
    <div
      id="iconNav"
      aria-label="Module Navigation"
      className="flex flex-col justify-start items-center gap-2">
      {modules.map(([moduleLink, moduleName]) => {
        /**
         * Retrieves module details by its link.
         * @constant {Object} module - The module data including its image.
         */
        const module = getModuleByLink(moduleLink);
        const ModuleIcon = module?.moduleImage;

        /**
         * Retrieves subtopics related to the current module.
         * @constant {Array} subtopics - List of subtopic links and names.
         */
        const subtopics =
          getSubtopicLinksAndNamesByModulelink(moduleLink) || [];

        /**
         * Checks if the current module is active.
         * @constant {boolean} isActive - Whether the module is currently selected.
         */
        const isActive = moduleLink === selectedModuleLink;

        /**
         * Checks if the current module is disabled.
         * @constant {boolean} isDisabled - Whether the module is disabled.
         */
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
                  className={`iconWrapper rounded-lg p-1 ${
                    isActive ? "active" : ""
                  }`}
                  role="img"
                  aria-label={`Modul Icon für ${moduleName}`}>
                  <ModuleIcon className="w-10 h-10 svgFill p-1" />
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
  );
};

export default IconNav;
