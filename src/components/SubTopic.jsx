import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
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
 * @returns {JSX.Element} The rendered subtopic card with the provided information.
 */
const SubTopic = ({ topicName, link, description, number }) => {
  const { selectedModuleLink } = useContext(AppContext);

  return (
    <Link to={`/${selectedModuleLink}/${link}`}>
      <div className="subTopicCard glassy-box p-8 flex flex-col justify-end m-4">
        <h3 className="fourthTitle" topic-number={String(number + 1).padStart(2, "0")}>{topicName}</h3>
        <p className="text-base mt-2">{description}</p>
      </div>
    </Link>
  );
};

export default SubTopic;
