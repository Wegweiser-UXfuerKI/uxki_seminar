import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../../../AppContext";
import { getSubtopicLinksByModule } from "../../ContentHandler";

/**
 * DropDownMenu component that displays a dropdown menu on hover.
 * It renders a list of items in a dropdown, which are passed as props.
 * The menu can appear either to the right or below the trigger element.
 *
 * @component
 * @example
 * <DropDownMenu
 *   selectedLink="/module1"
 *   selectedName="Module 1"
 *   items={items}
 *   position="right" // or "bottom"
 * />
 *
 * @param {Object} props - The component's properties
 * @param {string} props.selectedLink - The link for the selected module
 * @param {string} props.selectedName - The name displayed for the selected module
 * @param {Array} props.items - An array of items (subtopics or modules) in the dropdown
 * @param {Array} [props.disabledItems=[]] - An array of disabled items
 * @param {Function|string} [props.triggerElement=selectedName] - The element that triggers the dropdown
 * @param {string} [props.position="right"] - Defines the dropdown position ("right" or "bottom")
 * @param {string} props.selectedModule - The link for the selected/rendered module
 * @param {boolean} props.isDisabledModule - State whether the selected/rendered module is disabled
 *
 * @returns {JSX.Element} The rendered dropdown menu component
 */
const DropDownMenu = ({
  selectedLink,
  selectedName,
  items,
  disabledItems = [],
  triggerElement = selectedName,
  position = "right",
  title,
  selectedModule,
  isDisabledModule,
}) => {
  const { setScrollToChapter } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  /**
   * The first subtopic link from the rendered module icon
   */
  const firstSubtopicFromModule = getSubtopicLinksByModule(selectedModule)[0];

  /**
   * Toggles the hover state of the dropdown menu.
   * @param {boolean} state - The hover state
   */
  const toggleMenu = (state) => {
    setIsHovered(state);
  };

  /**
   * Handles the navigation to a specific chapter.
   * Scrolls to the top of the page when a chapter is selected.
   * @param {string} link - The chapter link
   */
  const handleChapterChange = (link) => {
    console.log("link for scroll: ", link);
    setScrollToChapter(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dynamic positioning of the dropdown menu
  const positionStyle =
    position === "right"
      ? { left: "100%", marginTop: -56, marginLeft: 10 }
      : { top: "100%", marginTop: 0 };

  // Different animations for dropdown positioning
  const subMenuAnimate =
    position === "right"
      ? {
          enter: {
            opacity: 1,
            marginLeft: 12,
            display: "flex",
          },
          exit: {
            opacity: 0,
            marginLeft: 0,
            transitionEnd: { display: "none" },
          },
        }
      : {
          enter: {
            opacity: 1,
            marginTop: 0,
            display: "flex",
          },
          exit: {
            opacity: 0,
            marginTop: -10,
            transitionEnd: { display: "none" },
          },
        };

  return (
    <motion.div
      onMouseEnter={() => toggleMenu(true)}
      onMouseLeave={() => toggleMenu(false)}
      onFocus={() => toggleMenu(true)} // Open on focus
      onBlur={() => toggleMenu(false)} // Close when losing focus
    >
      <Link
        to={
          isDisabledModule
            ? "/"
            : `/${selectedModule}/${firstSubtopicFromModule}`
        }
        className="firstLevel flex px-2 py-1 lg:p-0 rounded-lg"
        onClick={() => {
          if (isDisabledModule) {
            setScrollToChapter(selectedModule);
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        tabIndex={0}>
        {typeof triggerElement === "function" ? triggerElement() : selectedName}
      </Link>

      <motion.div
        initial="exit"
        animate={isHovered ? "enter" : "exit"}
        variants={subMenuAnimate}
        id="dropDown"
        className="menuList absolute flex flex-col glassBox rounded-xl gap-y-1 py-4 px-4 min-w-[280px] z-50 transition"
        style={positionStyle}>
        {title && <h4>{title}</h4>}
        {!isDisabledModule &&
          items?.map(([link, name], index) => {
            const isDisabled = disabledItems.some((disabledLink) =>
              link.endsWith(`/${disabledLink}`)
            );

            const isActive = link === selectedLink;

            return (
              <Link
                key={link}
                to={isDisabled ? "#" : `/${link}`}
                onClick={(e) => {
                  if (isDisabled) {
                    e.preventDefault();
                  } else {
                    handleChapterChange(link);
                  }
                }}
                className={`secondLevel rounded-lg px-2 py-1 ${
                  isDisabled ? "disabled" : isActive ? "active" : ""
                }`}
                tabIndex={0}>
                {`${index + 1}: ${name}`}
              </Link>
            );
          })}
      </motion.div>
    </motion.div>
  );
};

export default DropDownMenu;
