import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import "./SubTopic.css";

const SubTopic = ({ topicName, link, description, number }) => {
  const { selectedModuleLink } = useContext(AppContext);

  console.log(
    "subtopic module: ",
    selectedModuleLink,
    " subtopic link: ",
    link
  );

  return (
    <div className="subTopicCard glassy-box p-8 flex flex-col items-center justify-end m-4">
      <Link to={`/${selectedModuleLink}/${link}`}>
        <h3 topic-number={String(number + 1).padStart(2, "0")}>{topicName}</h3>
        <p className="text-base mt-2">{description}</p>
      </Link>
    </div>
  );
};

export default SubTopic;
