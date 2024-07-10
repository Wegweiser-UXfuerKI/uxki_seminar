import React, { useContext } from "react";
import SubTopic from "../SubTopic";
import { AppContext } from "../../AppContext";

const MainPage = () => {
  const { topicContents } = useContext(AppContext);
  const topicNames = Object.keys(topicContents);

  return (
    <div className="Mainpage flex flex-col items-center">
      <h1 className="mainTitle text-center mt-24 mb-16">Wegweiser UX für KI</h1>
      <div className="flex justify-center flex-wrap max-w-screen-xl mb-24">
        {topicNames.map((topicName, index) => (
          <SubTopic key={topicName} topicName={topicName} number={index} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
