import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../../../AppContext";
import "./DropDownMenu.css";

/**
 * DropDownMenu component to display a dropdown menu on hover.
 * It renders a list of items in a dropdown, which are passed as props.
 * The dropdown menu appears when the user hovers over the parent link.
 *
 * @component
 * @example
 * const items = [
 *   ["module1", "Module 1"],
 *   ["module2", "Module 2"],
 *   ["module3", "Module 3"]
 * ];
 *
 * <DropDownMenu
 *   selectedLink="/module1"
 *   selectedName="Module 1"
 *   items={items}
 * />
 *
 * @param {Object} props - The component's props
 * @param {string} props.selectedLink - The link to be applied to the selected module
 * @param {string} props.selectedName - The name to be displayed for the selected module
 * @param {Array} props.items - An array of items (subtopics or modules) to be displayed in the dropdown
 * @param {string} props.items[0] - The unique link identifier for each item
 * @param {string} props.items[1] - The name to display for each item
 *
 * @returns {JSX.Element} The rendered dropdown menu component
 */
const DropDownMenu = ({
  selectedLink,
  selectedName,
  items,
  disabledItems = [],
}) => {
  const { setScrollToChapter } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMouseOver = () => {
    setIsHovered(!isHovered);
  };

  // Animation settings for the dropdown menu
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
      display: "flex",
      marginTop: 10,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
      marginTop: 0,
    },
  };

  return (
    <motion.div onMouseEnter={toggleMouseOver} onMouseLeave={toggleMouseOver}>
      <Link
        to="/"
        className="firstLevel relative"
        onClick={() => {
          if (selectedLink) {
            setScrollToChapter(selectedLink);
          }
        }}>
        {selectedName}
      </Link>

      <motion.div
        initial="exit"
        animate={isHovered ? "enter" : "exit"}
        variants={subMenuAnimate}
        id="dropDown"
        className="absolute flex flex-col glassBox rounded-xl gap-y-2 py-6 px-4">
        {items?.map(([link, name], index) => {
          // TODO: Check if the item is disabled
          const isDisabled = disabledItems.includes(link);

          return (
            <Link
              key={link}
              to={`/${link}`}
              onClick={() => {
                if (!isDisabled && selectedLink) {
                  setScrollToChapter(link);
                }
              }}
              className={`secondLevel rounded-lg px-2 py-1 ${
                isDisabled ? "disabled" : link === selectedLink ? "active" : ""
              }`}>
              {`${index + 1}: ${name}`}
            </Link>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default DropDownMenu;
