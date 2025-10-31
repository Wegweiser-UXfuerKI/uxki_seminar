import React, { useContext } from "react";
import { AppContext } from "../../../AppContext";
import { LinkHandler } from "../../1_elements/LinkHandler";

/**
 * A component representing a subtopic card.
 * Displays the subtopic name, description, and a link to navigate to its content.
 *
 * @component
 * @param {Object} props - The properties for the SubTopic component.
 * @param {string} props.topicName - The name of the subtopic.
 * @param {string} props.link - The URL path to navigate to the subtopic.
 * @param {string} props.description - A brief description of the subtopic.
 * @param {number} props.number - The order number of the subtopic.
 * @param {boolean} props.isDisabled - If true, disables the subtopic link.
 * @returns {JSX.Element} The rendered SubTopicCard component.
 *
 */
const SubTopicCard = ({ topicName, link, description, number, isDisabled }) => {
  const { selectedModuleLink } = useContext(AppContext);
  const topicNumber = String(number + 1).padStart(2, "0");

  const homeScrollCheck = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`lg:w-1/3 sm:w-1/2 w-full mb-6 ${
        isDisabled ? "disabled" : ""
      }`}>
      <LinkHandler
        to={`/${selectedModuleLink}/${link}`}
        onClick={homeScrollCheck}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        className="relative glassBox no_underline no_link_hover rounded-3xl h-full p-6 flex flex-col justify-top m-2 transition overflow-hidden hover:-translate-y-2">
        <h3
          className="fourthTitle lg:mt-20 mt-10 hyphens-auto relative"
          data-topic-number={topicNumber}>
          {topicName}
          <span className="absolute -right-2 -top-24 lg:-top-36 text-[124px] font-extrabold opacity-10 pointer-events-none lg:text-[140px]">
            {topicNumber}
          </span>
        </h3>
        <p className="text-base">{description}</p>
      </LinkHandler>
    </div>
  );
};

export default SubTopicCard;
