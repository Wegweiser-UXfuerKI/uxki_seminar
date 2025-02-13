import { useContext } from "react";
import DropDownMenu from "./DropDownMenu";
import { AppContext } from "../../../AppContext";
import {
  getModuleLinksAndNames,
  getSubtopicLinksAndNamesByModulelink,
  getModuleByLink,
} from "../../ContentHandler";

/**
 * IconNav component that displays module icons in a vertical list.
 * It renders module icons and shows a dropdown menu with subtopics when hovered.
 *
 * @component
 * @example
 * <IconNav />
 *
 * @returns {JSX.Element} The rendered navigation component with module icons and dropdown menus.
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
    <div id="iconNav" className="relative flex">
      <div className="flex flex-col items-center gap-5 xl:gap-6 relative">
        {modules.map(([moduleLink, moduleName]) => {
          const module = getModuleByLink(moduleLink);
          const ModuleIcon = module?.moduleImage;
          const subtopics =
            getSubtopicLinksAndNamesByModulelink(moduleLink) || [];
          const isActive = moduleLink === selectedModuleLink;

          //TODO: fix that dropdown is not shown when module is disabled
          const isDisabled = disabledModules[moduleLink];
          if (isDisabled) return null;

          return (
            <DropDownMenu
              key={moduleLink}
              selectedLink={`${selectedModuleLink}/${selectedSubtopicLink}`}
              selectedName={moduleName}
              items={subtopics.map(([subtopicLink, subtopicName]) => [
                `${moduleLink}/${subtopicLink}`,
                subtopicName,
              ])}
              disabledItems={disabledSubtopics[moduleLink] || []}
              title={moduleName}
              triggerElement={() =>
                ModuleIcon ? (
                  <div
                    className={`iconWrapper relative ${
                      isActive ? "active" : ""
                    }`}>
                    <ModuleIcon className="w-8 h-8 xl:w-9 xl:h-9 svgFill" />
                  </div>
                ) : (
                  <div className="w-10 h-10" />
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
