import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import "./SubTopic.css";

/**
 * A component that represents a subtopic card. It displays the name, description,
 * and provides a link to a specific subtopic under a selected module.
 *
 * @component
 * @param {Object} props - The props passed to the component.
 * @param {string} props.topicName - The name of the subtopic.
 * @param {string} props.link - The link to the subtopic page.
 * @param {string} props.description - A brief description of the subtopic.
 * @param {number} props.number - The number representing the subtopic's order.
 * @param {boolean} props.isDisabled - Whether the subtopic is disabled.
 * @returns {JSX.Element} The rendered subtopic card with the provided information.
 */
const SubTopic = ({ topicName, link, description, number, isDisabled }) => {
  const { selectedModuleLink } = useContext(AppContext);

  return (
    <div
      className={`lg:w-1/3 sm:w-1/2 w-full mb-10 ${
        isDisabled ? "disabled" : ""
      }`}>
      <Link to={`/${selectedModuleLink}/${link}`}>
        <div className="subTopicCard relative glassBox h-full xl:p-8 p-6 flex flex-col justify-end m-3">
          <h3
            className="fourthTitle mt-10 hyphens-auto"
            topic-number={String(number + 1).padStart(2, "0")}>
            {topicName}
          </h3>
          <p className="text-base">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default SubTopic;
