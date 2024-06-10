import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextData } from "../TextData";

const SubTopic = ({ topicName, image }) => {
  const [contentNames, setContentNames] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

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
        const names = TextData[topicName].Texte.map(item => item.cardTitle);
        setContentNames(names);
      }
    }
  }, [topicName]);

  return (
    <div style={subTopic_style}>
      <Link
        to={`subtopic/${topicName}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div
          className="img-container h-32 w-full mb-5 text-wrap relative"
          style={{ borderRadius: "10px 10px 0px 0px", padding: "0px 33px" }}>
          <div
            className="h2 left-0 right-0 top-0 bottom-0 px-[33px] absolute pb-4 cursor-pointer flex flex-col-reverse"
            style={{ color: isHovered ? "#d177b3" : "#21202b" }}>
            {topicName}
          </div>
          <img src={image} className="opacity-50" alt="img-placeholder" />
        </div>
      </Link>
      {contentNames.map((content, index) => (
        <Link
          to={`subtopic/${topicName}`}
          state={{ clickedContent: content, index: index }}
          key={index}
          className="h4 arrow-btn">
          {contentNames[index]}
          <span className="arrow"></span>
        </Link>
      ))}
    </div>
  );
};

// styles
const subTopic_style = {
  background: "white",
  width: "320px",
  height: "400px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  margin: "20px",
};

export default SubTopic;
