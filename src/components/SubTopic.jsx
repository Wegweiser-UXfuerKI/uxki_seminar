import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import "./SubTopic.css";

const SubTopic = ({ topicName, link, description, number }) => {
  const { selectedModuleLink } = useContext(AppContext);
  const { setSelectedSubtopic } = useContext(AppContext);

  const setContext = (topicName) => {
    setSelectedSubtopic(topicName);
  };

  console.log(
    "subtopic module: ",
    selectedModuleLink,
    " subtopic link: ",
    link
  );

  return (
    <div className="subTopicCard rounded-xl">
      <Link
        to={`/${selectedModuleLink}/${link}`}
        onClick={() => setContext(topicName)}
        className="w-full h-full">
        <div className="topSection relative overflow-hidden h-32">
          <h2
            className="thirdTitle absolute left-0 bottom-0 mb-0 px-[33px]"
            topic-number={String(number + 1).padStart(2, "0")}>
            {topicName}
          </h2>
        </div>
        {/* FIXME: text size */}
        <div className="text-black px-[33px] w-full text-[16px]">
          {description}
        </div>
      </Link>
    </div>
  );
};

export default SubTopic;
