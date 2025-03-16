import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import styled from "styled-components";

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
 * @returns {JSX.Element} The rendered SubTopic component.
 *
 */
const SubTopicCard = styled.div`
  &:hover {
    transform: translateY(-8px);
  }

  h3::before {
    content: attr(data-topic-number);
    font-size: 160px;
    line-height: 1;
    font-weight: 800;
    position: absolute;
    right: 16px;
    top: -8px;
    opacity: 0.1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    h3::before {
      font-size: 124px;
    }
  }
`;

const SubTopic = ({ topicName, link, description, number, isDisabled }) => {
  const { selectedModuleLink } = useContext(AppContext);
  const topicNumber = String(number + 1).padStart(2, "0");

  return (
    <div
      className={`lg:w-1/3 sm:w-1/2 w-full mb-6 ${
        isDisabled ? "disabled" : ""
      }`}>
      <Link
        to={`/${selectedModuleLink}/${link}`}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}>
        <SubTopicCard className="relative glassBox rounded-3xl h-full p-6 flex flex-col justify-top m-2 transition  overflow-hidden">
          <h3
            className="fourthTitle lg:mt-20 mt-10 hyphens-auto"
            data-topic-number={topicNumber}>
            {topicName}
          </h3>
          <p className="text-base">{description}</p>
        </SubTopicCard>
      </Link>
    </div>
  );
};

export default SubTopic;
