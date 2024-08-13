import React from "react";
import { QuizProvider } from "./QuizContext";
import Quiz from "./Quiz";

// Used to set the context before rendering any component of the quiz
function QuizContainer() {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
}

export default QuizContainer;
