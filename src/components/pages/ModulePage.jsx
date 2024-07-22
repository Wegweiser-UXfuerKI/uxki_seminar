import React, { useContext } from "react";
import SubTopic from "../SubTopic";
import { AppContext } from "../../AppContext";
import { getSubtopicData } from "../ContentHandler";

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
        {subtopicData &&
          subtopicData.map((subtopic, index) => (
            <SubTopic
              key={subtopic.name}
              topicName={subtopic.name}
              link={subtopic.link}
              description={subtopic.description}
              number={index}
            />
          ))}
        {/*}
         */}
      </div>
    </div>
  );
};

export default ModulePage;
