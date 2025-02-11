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
  const { disabledModules, disabledSubtopics } =
    useContext(AppContext);
  const modules = getModuleLinksAndNames();

  //TODO: make more accessible
  return (
    <div className="relative flex">
      <div className="flex flex-col items-center gap-4 2xl:gap-6 relative">
        {modules.map(([moduleLink, moduleName]) => {
          const module = getModuleByLink(moduleLink);
          const ModuleIcon = module?.moduleImage;
          const isDisabled = disabledModules[moduleLink];

          const subtopics =
            getSubtopicLinksAndNamesByModulelink(moduleLink) || [];

          //TODO: hide Dropdown for disabledModules
          return (
            <DropDownMenu
              key={moduleLink}
              selectedLink={moduleLink}
              selectedName={moduleName}
              items={subtopics.map(([subtopicLink, subtopicName]) => [
                `${moduleLink}/${subtopicLink}`,
                subtopicName,
              ])}
              disabledItems={disabledSubtopics[moduleLink] || isDisabled || []}
              title={moduleName}
              triggerElement={() =>
                ModuleIcon ? (
                  <ModuleIcon className="w-9 h-9 svgFill" />
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
