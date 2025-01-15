import React, { useContext } from "react";
import SubTopic from "../SubTopic";
import { AppContext } from "../../AppContext";
import { getSubtopicData } from "../ContentHandler";
import { Link } from "react-router-dom";

const ModulePage = () => {
  const { selectedModuleLink, selectedModuleName } = useContext(AppContext);

  const subtopicData = getSubtopicData(selectedModuleLink);

  const disabledSubtopics = {
    "ux-und-usability": [
      "usability",
      "nutzungskontext",
      "user-experience",
      "mensch-computer-interaktion",
      "evaluation",
      "quellen",
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 my-40 m-auto max-w-[1080px]">
      <h1>{selectedModuleName}</h1>

      {/* Container for subtopics, responsive to the screen size */}
      <div className="flex flex-row justify-center flex-wrap">
        {subtopicData && subtopicData.length > 0 ? (
          subtopicData.map((subtopic, index) => {
            const isSubtopicDisabled = disabledSubtopics[
              selectedModuleLink
            ]?.includes(subtopic.link);

            return (
              <SubTopic
                key={subtopic.name}
                topicName={subtopic.name}
                link={isSubtopicDisabled ? "#" : subtopic.link}
                description={subtopic.description}
                number={index}
                isDisabled={isSubtopicDisabled}
              />
            );
          })
        ) : (
          <div className="glassy-box text-center p-10 pb-0 flex flex-col justify-center items-center">
            Work in progress...
            <Link to={"/"} className="my-10 p-5 rounded-lg">
              Zurück zur Kursübersicht
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulePage;
