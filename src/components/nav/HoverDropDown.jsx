import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getModuleLinksAndNames } from "../ContentHandler";
import { AppContext } from "../../AppContext";

/**
 * HoverDropDown component to display a dropdown menu on hover.
 *
 * @returns {JSX.Element} The rendered dropdown component.
 */
const HoverDropDown = () => {
  const { selectedModuleLink, selectedModuleName, setScrollToChapter } =
    useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const moduleLinksNames = getModuleLinksAndNames();

  const toggleMouseOver = () => {
    setIsHovered(!isHovered);
  };

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
        onClick={() => {
          if (selectedModuleLink) {
            setScrollToChapter(selectedModuleLink);
          }
        }}>
        {selectedModuleName}
      </Link>

      <motion.div
        initial="exit"
        animate={isHovered ? "enter" : "exit"}
        variants={subMenuAnimate}
        className="absolute flex-col glassy-box gap-y-2 p-8">
        {moduleLinksNames.map(([link, name]) => (
          <Link
            key={link}
            to="/"
            onClick={() => {
              if (selectedModuleLink) {
                setScrollToChapter(link);
              }
            }}
            className={` ${link === selectedModuleLink ? "font-black" : ""}`}>
            {name}
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HoverDropDown;
