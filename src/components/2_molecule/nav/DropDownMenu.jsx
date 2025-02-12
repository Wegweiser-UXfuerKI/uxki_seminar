import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../../../AppContext";
import "./DropDownMenu.css";

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
}) => {
  const { setScrollToChapter } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

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
    setScrollToChapter(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dynamic positioning of the dropdown menu
  const positionStyle =
    position === "right"
      ? { left: "100%", marginTop: -52, marginLeft: 10 }
      : { top: "100%", marginTop: 0 };

  // Different animations for dropdown positioning
  const subMenuAnimate =
    position === "right"
      ? {
          enter: {
            opacity: 1,
            marginLeft: 12,
            display: "flex",
            transition: { duration: 0.3 },
          },
          exit: {
            opacity: 0,
            marginLeft: 0,
            transition: { duration: 0.3, delay: 0.2 },
            transitionEnd: { display: "none" },
          },
        }
      : {
          enter: {
            opacity: 1,
            marginTop: 0,
            display: "flex",
            transition: { duration: 0.3 },
          },
          exit: {
            opacity: 0,
            marginTop: -10,
            transition: { duration: 0.3, delay: 0.2 },
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
        to="#"
        className="firstLevel relative"
        onClick={() => handleChapterChange(selectedLink)}
        tabIndex={0} 
      >
        {typeof triggerElement === "function" ? triggerElement() : selectedName}
      </Link>

      <motion.div
        initial="exit"
        animate={isHovered ? "enter" : "exit"}
        variants={subMenuAnimate}
        id="dropDown"
        className="absolute flex flex-col glassBox rounded-xl gap-y-1 py-4 px-4 min-w-[280px] z-50"
        style={positionStyle}>
        {title && (
          <h4>
            <b>{title}</b>
          </h4>
        )}
        {items?.map(([link, name], index) => {
          const isDisabled = disabledItems.some((disabledLink) =>
            link.endsWith(`/${disabledLink}`)
          );

          return (
            <Link
              key={link}
              to={isDisabled ? "#" : `/${link}`} 
              onClick={(e) => {
                if (!isDisabled && selectedLink) {
                  handleChapterChange(link);
                } else if (!isDisabled && selectedLink) {
                  setScrollToChapter(link);
                }
              }}
              className={`secondLevel rounded-lg px-2 py-1 ${
                isDisabled ? "disabled" : link === selectedLink ? "active" : ""
              }`}
              tabIndex={0}
            >
              {`${index + 1}: ${name}`}
            </Link>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default DropDownMenu;
