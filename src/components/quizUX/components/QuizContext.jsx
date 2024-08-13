import { createContext, useState } from "react";

const QuizContext = createContext();

const topics = ["Der EU AI Act", "International", "In der Praxis"];
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

  const contextValues = {
    topics,
    colors,
    showPopup,
    setShowPopup,
    soundOn,
    setSoundOn,
    currentContent,
    setCurrentContent,
  };

  return (
    <QuizContext.Provider value={contextValues}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
