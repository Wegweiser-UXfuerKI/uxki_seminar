import React from "react";
import BasicQuiz from "../interactive/BasicQuiz";

const sampleQuizData = [
  {
    id: 1,
    questionText: "Was ist die Hauptstadt von Frankreich?",
    options: ["Berlin", "Madrid", "Paris", "Rom"],
    correctAnswer: [2],
  },
  {
    id: 2,
    questionText: "Welche der folgenden sind Programmiersprachen?",
    options: ["HTML", "JavaScript", "CSS", "Python", "Photoshop"],
    correctAnswer: [1, 3],
  },
  {
    id: 3,
    questionText:
      "Wie viele Planeten hat unser Sonnensystem (offiziell anerkannt)?",
    options: ["7", "8", "9", "10"],
    correctAnswer: [1],
  },
  {
    id: 4,
    questionText: "Wähle alle Primzahlen aus:",
    options: ["2", "4", "5", "7", "9", "11"],
    correctAnswer: [0, 2, 3, 5],
  },
];

const DevTestPage = () => {
  return (
    <div className="w-full h-full">
      <BasicQuiz quizData={sampleQuizData} />
    </div>
  );
};

export default DevTestPage;
