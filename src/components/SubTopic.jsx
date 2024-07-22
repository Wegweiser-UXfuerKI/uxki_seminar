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
    <div className="subTopicCard rounded-xl">
      <Link to={`/${selectedModuleLink}/${link}`} className="w-full h-full">
        <div className="topSection relative overflow-hidden h-32">
          <h2
            className="thirdTitle absolute left-0 bottom-0 mb-0 px-[33px]"
            topic-number={String(number + 1).padStart(2, "0")}>
            {topicName}
          </h2>
        </div>
        <div className="text-black px-[33px] w-full smallTextSize mb-5">
          {description}
        </div>
      </Link>
    </div>
  );
};

export default SubTopic;
