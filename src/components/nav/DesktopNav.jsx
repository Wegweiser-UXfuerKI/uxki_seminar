import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../../assets/images/right-arrow.svg";
import { AppContext } from "../../AppContext";

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
    setScrollToChapter,
  } = useContext(AppContext);

  const homeScrollCheck = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="w-full flex items-center justify-between py-5">
      <div className="flex justify-start items-center gap-3">
        {/* TODO: add dropdown with all courses */}
        <Link
          to="/"
          aria-label="Zur Startseite"
          onClick={() => homeScrollCheck()}>
          Kursübersicht
        </Link>
        {selectedModuleLink && (
          <>
            <RightArrow />
            <Link
              to={"/"}
              className={selectedSubtopicName ? "" : "active"}
              onClick={() => {
                if (selectedModuleLink) {
                  setScrollToChapter(selectedModuleLink);
                }
              }}>
              {selectedModuleName}
            </Link>
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
