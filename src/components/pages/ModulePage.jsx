import React, { useContext } from "react";
import SubTopic from "../SubTopic";
import { AppContext } from "../../AppContext";
import { getSubtopicData } from "../ContentHandler";
import { Link } from "react-router-dom";

const ModulePage = () => {
  const { selectedModuleLink, selectedModuleName } = useContext(AppContext);

  const subtopicData = getSubtopicData(selectedModuleLink);
  console.log(subtopicData);

  return (
    <div className="Modulepage flex flex-col items-center">
      <h1 className="mainTitle text-center mt-24 mb-16">
        {selectedModuleName}
      </h1>
      <div className="flex justify-center flex-wrap max-w-screen-xl mb-24">
        {subtopicData && subtopicData.length > 0 ? (
          subtopicData.map((subtopic, index) => (
            <SubTopic
              key={subtopic.name}
              topicName={subtopic.name}
              link={subtopic.link}
              description={subtopic.description}
              number={index}
            />
          ))
        ) : (
          <div className="text-center p-10 pb-0 bg-slate-200 rounded-xl text-ux_dark flex flex-col justify-center items-center">
            Work in progress...
            <Link
              to={"/"}
              className="my-10 bg-slate-600 p-5 rounded-lg hover:bg-ux_grey hover:cursor-pointer text-ux_white">
              Zurück zur Kursübersicht
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulePage;
