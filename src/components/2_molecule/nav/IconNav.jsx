import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { AppContext } from "../../../AppContext";
import {
  getModuleLinksAndNames,
  getSubtopicLinksAndNamesByModulelink,
  getModuleByLink,
} from "../../ContentHandler";

/**
 * IconNav component that displays module icons in a vertical list.
 * When a module icon is hovered, a dropdown menu for its subtopics is shown to the right.
 *
 * @component
 * @example
 * <IconNav />
 *
 * @returns {JSX.Element} The rendered navigation component with module icons and dropdown menus.
 */
const IconNav = () => {
  const [hoveredModule, setHoveredModule] = useState(null);
  const { selectedSubtopicLink, disabledSubtopics } = useContext(AppContext);
  const modules = getModuleLinksAndNames();

  return (
    <div className="relative flex">
      <div className="flex flex-col items-center gap-8">
        {modules.map(([moduleLink, moduleName]) => {
          const module = getModuleByLink(moduleLink);
          const ModuleIcon = module?.moduleImage;

          //TODO: fix dropdown and items
          return (
            <div
              key={moduleLink}
              className="relative group"
              onMouseEnter={() => setHoveredModule(moduleLink)}
              onMouseLeave={() => setHoveredModule(null)}>
              {/* Modul-Icon with Link */}
              <Link to={moduleLink} className="block">
                {ModuleIcon && <ModuleIcon className="w-10 h-10 svgFill" />}
              </Link>

              {/* Dropdown for Subtopics when hovering over a module icon */}
              {hoveredModule === moduleLink && (
                <div className="absolute left-full top-1/3 transform -translate-y-1/3 z-50">
                  <DropDownMenu
                    selectedLink={`${moduleLink}/${selectedSubtopicLink}`}
                    selectedName={moduleName}
                    items={getSubtopicLinksAndNamesByModulelink(moduleLink)}
                    disabledItems={disabledSubtopics[moduleLink] || []}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconNav;
