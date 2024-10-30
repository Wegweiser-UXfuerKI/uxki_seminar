import { createContext, useEffect, useState } from "react";

const QuizContext = createContext();

const colors = {
  pink: "#D177B3",
  purple: "#8377D1",
  turquoise: "#77D1CB",
  correct: "#7AD177",
  wrong: "#D24141",
  lightgrey: "#D4D2DD",
  grey: "#817C9C",
};

export const QuizProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [currentContent, setCurrentContent] = useState("start");
  const [topicData, setTopicData] = useState([]);
  const [topicTitles, setTopicTitles] = useState([]);
  const [topicTexts, setTopicTexts] = useState([]);
  const [exercises, setExercises] = useState({});
  useEffect(() => {
    if (topicTitles.length > 0) {
      setExercises({
        [topicTitles[0]]: [],
        [topicTitles[1]]: [],
        [topicTitles[2]]: [],
      });
    }
  }, [topicTitles]);

  const contextValues = {
    colors,
    showPopup,
    setShowPopup,
    soundOn,
    setSoundOn,
    currentContent,
    setCurrentContent,
    topicData,
    setTopicData,
    topicTitles,
    setTopicTitles,
    exercises,
    setExercises,
    topicTexts,
    setTopicTexts,
  };

  return (
    <QuizContext.Provider value={contextValues}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
