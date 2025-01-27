import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../../assets/images/right-arrow.svg";
import { AppContext } from "../../AppContext";
import HoverDropDown from "./HoverDropDown";

/**
 * DesktopNav component to display navigation for desktop screens.
 *
 * @component
 * @returns {JSX.Element} The rendered desktop navigation component.
 */
const DesktopNav = () => {
  const { selectedModuleLink, selectedSubtopicLink, selectedSubtopicName } =
    useContext(AppContext);

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
          onClick={() => homeScrollCheck()}>
          Kursübersicht
        </Link>
        {selectedModuleLink && (
          <>
            <RightArrow />
            <HoverDropDown />
            {selectedSubtopicName && (
              <>
                <RightArrow />
                <Link
                  to={`/${selectedModuleLink}/${selectedSubtopicLink}`}
                  className="active">
                  {selectedSubtopicName}
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default DesktopNav;
