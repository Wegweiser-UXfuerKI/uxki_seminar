import React, { useState, useCallback, useMemo, useEffect } from "react";

// Hilfsfunktion zum Mischen eines Arrays (Fisher-Yates Algorithmus)
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;
  // Kopie erstellen, um das Original nicht zu verändern (wichtig für React State)
  const newArray = [...array];
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
}

const Question = ({
  questionData, // Beinhaltet id, questionText, correctAnswer
  shuffledOptions, // Neu: Gemischte Optionen mit originalem Index
  selectedAnswer,
  onAnswerSelect,
  showAnswerState,
}) => {
  const { id, questionText, correctAnswer } = questionData;

  // isMultipleChoice wird immer noch aus correctAnswer bestimmt
  const isMultipleChoice = useMemo(
    () => correctAnswer.length > 1,
    [correctAnswer]
  );

  // Handler bleiben gleich, da sie den `originalIndex` erhalten
  const handleRadioChange = (originalIndex) => {
    if (!showAnswerState) {
      onAnswerSelect(originalIndex);
    }
  };

  const handleCheckboxChange = (originalIndex, checked) => {
    if (!showAnswerState) {
      const currentSelected = Array.isArray(selectedAnswer)
        ? selectedAnswer
        : [];
      let newSelectedAnswers;
      if (checked) {
        newSelectedAnswers = [...currentSelected, originalIndex];
      } else {
        newSelectedAnswers = currentSelected.filter((i) => i !== originalIndex);
      }
      onAnswerSelect(newSelectedAnswers.sort((a, b) => a - b));
    }
  };

  const legendId = `question-${id}-legend`;

  return (
    <div className="mb-6">
      <h2
        id={legendId}
        className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        {questionText}
      </h2>
      <fieldset
        className="mt-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md"
        aria-labelledby={legendId}
        role={!isMultipleChoice ? "radiogroup" : undefined}>
        <legend className="text-sm font-medium text-gray-600 dark:text-gray-400 px-1 sr-only">
          Antwortoptionen für: {questionText}
        </legend>
        <div className="space-y-3">
          {/* Iteriere über die gemischten Optionen */}
          {shuffledOptions.map((item, displayIndex) => {
            // item = { text: '...', originalIndex: ... }
            // displayIndex = 0, 1, 2, ... (Position in der Anzeige)
            const inputId = `question-${id}-option-${displayIndex}`; // ID basiert auf Anzeige-Index
            const originalIndex = item.originalIndex; // Der ursprüngliche Index dieser Option

            const isCorrect = correctAnswer.includes(originalIndex);
            const isSelected = isMultipleChoice
              ? Array.isArray(selectedAnswer) &&
                selectedAnswer.includes(originalIndex)
              : selectedAnswer === originalIndex;

            // Styling-Logik bleibt gleich, verwendet aber isCorrect/isSelected basierend auf originalIndex
            let optionStyleClasses = "border border-transparent";
            let textStyleClasses = "text-gray-700 dark:text-gray-300";

            if (showAnswerState) {
              if (isCorrect) {
                optionStyleClasses =
                  "border bg-green-100 dark:bg-green-900/50 border-green-500 dark:border-green-700";
                textStyleClasses =
                  "text-green-800 dark:text-green-200 font-semibold";
              } else if (isSelected && !isCorrect) {
                optionStyleClasses =
                  "border bg-red-100 dark:bg-red-900/50 border-red-500 dark:border-red-700";
                textStyleClasses =
                  "text-red-800 dark:text-red-200 font-semibold";
              } else {
                optionStyleClasses =
                  "border border-gray-200 dark:border-gray-700 opacity-75";
              }
            }

            return (
              <div
                key={
                  originalIndex
                } /* Eindeutiger Key basierend auf originalIndex */
                className={`flex items-center p-2 rounded-md transition-colors duration-200 ${optionStyleClasses}`}>
                <input
                  id={inputId}
                  type={isMultipleChoice ? "checkbox" : "radio"}
                  name={`question-${id}`}
                  value={originalIndex} // Der Wert ist der ursprüngliche Index
                  checked={isSelected}
                  onChange={(e) =>
                    isMultipleChoice
                      ? handleCheckboxChange(originalIndex, e.target.checked)
                      : handleRadioChange(originalIndex)
                  }
                  disabled={showAnswerState}
                  className={`h-4 w-4 appearance-auto ${
                    isMultipleChoice ? "rounded" : "rounded-full"
                  } border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                />
                <label
                  htmlFor={inputId}
                  className={`ml-3 block text-sm font-medium select-none flex-grow ${textStyleClasses} ${
                    showAnswerState ? "cursor-default" : "cursor-pointer"
                  }`}>
                  {item.text} {/* Zeige den Text der Option an */}
                  {showAnswerState && isCorrect && (
                    <span className="ml-2 text-green-600 dark:text-green-400">
                      ✓
                    </span>
                  )}
                  {showAnswerState && isSelected && !isCorrect && (
                    <span className="ml-2 text-red-600 dark:text-red-400">
                      ✗
                    </span>
                  )}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};

const QuizResult = ({ score, totalQuestions, onRestart }) => {
  // Keine Änderungen hier
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Quiz beendet!
      </h2>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
        Dein Ergebnis: {score} von {totalQuestions} richtig beantwortet.
      </p>
      <button
        onClick={onRestart}
        className="ux-button relative font-medium px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-gray-900">
        Quiz neu starten
      </button>
    </div>
  );
};

const BasicQuiz = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questionState, setQuestionState] = useState("answering");
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const currentQuestion = quizData[currentQuestionIndex];
  const isMultipleChoice = useMemo(
    () => currentQuestion?.correctAnswer.length > 1,
    [currentQuestion]
  );
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

  // Effekt zum Mischen der Optionen, wenn sich die Frage ändert
  useEffect(() => {
    if (currentQuestion) {
      const optionsWithOriginalIndex = currentQuestion.options.map(
        (text, index) => ({
          text: text,
          originalIndex: index,
        })
      );
      setShuffledOptions(shuffleArray(optionsWithOriginalIndex));
      const currentIsMultiple = currentQuestion.correctAnswer.length > 1;
      setSelectedAnswer(currentIsMultiple ? [] : null);
      setQuestionState("answering");
    }
  }, [currentQuestionIndex, currentQuestion]); // Abhängigkeiten korrekt

  // *** Reihenfolge geändert: isAnswerSelected zuerst definieren ***
  const isAnswerSelected = useCallback(() => {
    if (isMultipleChoice) {
      return Array.isArray(selectedAnswer) && selectedAnswer.length > 0;
    } else {
      return selectedAnswer !== null && selectedAnswer !== undefined;
    }
  }, [isMultipleChoice, selectedAnswer]);

  // Handler für die Auswahl
  const handleAnswerSelect = useCallback(
    (originalIndex) => {
      if (questionState === "answering") {
        if (isMultipleChoice) {
          const currentSelected = Array.isArray(selectedAnswer)
            ? selectedAnswer
            : [];
          let newSelectedAnswers;
          if (currentSelected.includes(originalIndex)) {
            newSelectedAnswers = currentSelected.filter(
              (i) => i !== originalIndex
            );
          } else {
            newSelectedAnswers = [...currentSelected, originalIndex];
          }
          setSelectedAnswer(newSelectedAnswers.sort((a, b) => a - b));
        } else {
          setSelectedAnswer(originalIndex);
        }
      }
    },
    [questionState, isMultipleChoice, selectedAnswer]
  );

  // *** handleCheckAnswer wird NACH isAnswerSelected definiert ***
  const handleCheckAnswer = useCallback(() => {
    // Jetzt kann isAnswerSelected sicher aufgerufen werden
    if (isAnswerSelected()) {
      setQuestionState("showingAnswer");
    }
    // Korrekte Abhängigkeiten für handleCheckAnswer
  }, [isAnswerSelected]);

  // Handler für "Nächste Frage" / "Ergebnis"
  const handleProceed = useCallback(() => {
    let isCorrect = false;
    const correctAnswers = currentQuestion.correctAnswer;
    if (isMultipleChoice) {
      const sortedSelected = Array.isArray(selectedAnswer)
        ? [...selectedAnswer].sort((a, b) => a - b)
        : [];
      const sortedCorrect = [...correctAnswers].sort((a, b) => a - b);
      isCorrect =
        JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
    } else {
      isCorrect = selectedAnswer === correctAnswers[0];
    }
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (!isLastQuestion) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      // Reset von selectedAnswer/questionState passiert im useEffect
    } else {
      setShowResults(true);
    }
    // Abhängigkeiten für handleProceed
  }, [currentQuestion, isLastQuestion, isMultipleChoice, selectedAnswer]); // quizData nicht mehr nötig

  // Handler für Neustart
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    // Reset von selectedAnswer/questionState passiert im useEffect
  };

  // Button-Logik
  const getButtonProps = () => {
    if (questionState === "answering") {
      return {
        text: "Antworten prüfen",
        onClick: handleCheckAnswer,
        disabled: !isAnswerSelected(), // Sicherer Aufruf hier
      };
    } else {
      return {
        text: isLastQuestion ? "Ergebnis anzeigen" : "Nächste Frage",
        onClick: handleProceed,
        disabled: false,
      };
    }
  };

  const buttonProps = getButtonProps();

  if (!currentQuestion || (shuffledOptions.length === 0 && !showResults)) {
    return <div className="text-center p-8">Lade Quiz...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 md:p-8 glassBox no-hover rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700/50">
      {!showResults ? (
        <>
          <Question
            questionData={currentQuestion}
            shuffledOptions={shuffledOptions}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            showAnswerState={questionState === "showingAnswer"}
          />
          <div className="mt-8 flex justify-between items-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Frage {currentQuestionIndex + 1} von {quizData.length}
            </div>
            <button
              onClick={buttonProps.onClick}
              disabled={buttonProps.disabled}
              className={`ux-button relative font-medium px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 ${
                buttonProps.disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}>
              {buttonProps.text}
            </button>
          </div>
        </>
      ) : (
        <QuizResult
          score={score}
          totalQuestions={quizData.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

// Die anderen Komponenten (Question, QuizResult) und die shuffleArray Funktion bleiben wie zuvor.

export default BasicQuiz;
