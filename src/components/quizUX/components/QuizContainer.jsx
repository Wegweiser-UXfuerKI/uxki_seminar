import React, { useContext, useEffect } from "react";
import QuizContext, { QuizProvider } from "./QuizContext";
import Quiz from "./Quiz";
import { AppContext } from "../../../AppContext";

// quiz data imports
import euaiactdata from "../data/euaiact.json";
import tmpux from "../data/grundlagenux.json";

const kiUxTasks = [];
const kiUxEigenschaftenTasks = [];
const dateninputTasks = [];
const verarbeitungTasks = [];
const kiErgebnisseTasks = [];
const identifikationTasks = [];

const moduleLinkMap = {
  "ux-und-usability": tmpux,
  "ki-bezogene-ux": kiUxTasks,
  "ux-bezogene-ki-eigenschaften": kiUxEigenschaftenTasks,
  dateninput: dateninputTasks,
  verarbeitung: verarbeitungTasks,
  "ki-ergebnisse": kiErgebnisseTasks,
  "identifikation-prozesse": identifikationTasks,
  "eu-ai-act": euaiactdata,
};

// Used to set the context before rendering any component of the quiz
function QuizContent() {
  const { selectedModuleLink } = useContext(AppContext);
  const { setTopicData, setTopicTitles, setTopicTexts } =
    useContext(QuizContext);

  useEffect(() => {
    const topicData = getModuleMap(selectedModuleLink);
    setTopicData(topicData.content);

    setTopicTexts(topicData.topicTexts);
    console.log(topicData.topicTexts);

    const topicTitles = getTopicTitles(topicData.content);
    setTopicTitles(topicTitles);
  }, [selectedModuleLink, setTopicData, setTopicTexts, setTopicTitles]);

  function getModuleMap(inputLink) {
    const result = moduleLinkMap[inputLink] || euaiactdata;
    console.log("getModuleMap result:", result);
    return result;
  }

  function getTopicTitles(topicData) {
    const topicTitles = [];
    const seenTopics = new Set();

    topicData.forEach((element) => {
      if (!seenTopics.has(element.topic)) {
        topicTitles.push(element.topic);
        seenTopics.add(element.topic);
      }
    });

    return topicTitles;
  }

  return <Quiz />;
}

function QuizContainer() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}

export default QuizContainer;
