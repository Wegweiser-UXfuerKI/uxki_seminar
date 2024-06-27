import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextData } from "../TextData";
import { AppContext } from "../AppContext";
import "./SubTopic.css";

const SubTopic = ({ topicName, image }) => {
  const [contentNames, setContentNames] = useState([]);
  const { selectedModule } = useContext(AppContext);
  const { setSelectedSubtopic } = useContext(AppContext);

  useEffect(() => {
    if (TextData[topicName]) {
      /*
            const names = [...TextData[topicName].Texte.map((_, index) => `section${index + 1}`)];
            setContentNames(names);
            console.log(names);
            */
      if (topicName === "Einleitung") {
        setContentNames(["Einleitungsvideo", "Was ist der EU AI"]);
      } else if (topicName === "Fazit") {
        setContentNames(["Diskussion", "Lernüberprüfung"]);
      } else {
        const names = TextData[topicName].Texte.map((item) => item.cardTitle);
        setContentNames(names);
      }
    }
  }, [topicName]);

  const setContext = (topicName) => {
    setSelectedSubtopic(topicName);
  };

  return (
    <div className="subTopicCard rounded-xl">
      <Link
        to={`${selectedModule}/${topicName}`}
        onClick={() => setContext(topicName)}>
        <div className="relative img-container h-32 w-full mb-5">
          <h2 className="thirdTitle absolute left-0 bottom-0 px-[33px]">
            {topicName}
          </h2>
          <img src={image} className="opacity-30" alt="img-placeholder" />
        </div>
      </Link>
      {contentNames.map((content, index) => (
        <Link
          to={`${selectedModule}/${topicName}`}
          state={{ clickedContent: content, index: index }}
          key={index}
          onClick={() => setContext(topicName)}
          className="smallTextSize arrow-btn rounded-xl">
          {contentNames[index]}
          <span className="arrow"></span>
        </Link>
      ))}
    </div>
  );
};

export default SubTopic;
