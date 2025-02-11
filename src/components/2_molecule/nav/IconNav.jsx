import { useContext } from "react";
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
 * It renders module icons and shows a dropdown menu with subtopics when hovered.
 *
 * @component
 * @example
 * <IconNav />
 *
 * @returns {JSX.Element} The rendered navigation component with module icons and dropdown menus.
 */
const IconNav = () => {
  const { selectedSubtopicLink, disabledSubtopics } = useContext(AppContext);
  const modules = getModuleLinksAndNames();

  return (
    <div className="relative flex">
      <div className="flex flex-col items-center gap-6 relative">
        {modules.map(([moduleLink, moduleName]) => {
          const module = getModuleByLink(moduleLink);
          const ModuleIcon = module?.moduleImage;

          const subtopics =
            getSubtopicLinksAndNamesByModulelink(moduleLink) || [];

          return (
            <DropDownMenu
              key={moduleLink}
              selectedLink={`${moduleLink}/${selectedSubtopicLink}`}
              selectedName={moduleName}
              items={subtopics.map(([subtopicLink, subtopicName]) => [
                `${moduleLink}/${subtopicLink}`,
                subtopicName,
              ])}
              disabledItems={disabledSubtopics[moduleLink] || []}
              triggerElement={() =>
                ModuleIcon ? (
                  <Link to={moduleLink}>
                    <ModuleIcon className="w-10 h-10 svgFill" />
                  </Link>
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
