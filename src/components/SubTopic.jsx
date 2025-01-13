import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import "./SubTopic.css";

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
