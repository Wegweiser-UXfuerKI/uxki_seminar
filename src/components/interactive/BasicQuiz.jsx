import React, { useState, useCallback, useMemo, useEffect } from "react";

function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;
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
  questionData,
  shuffledOptions,
  selectedAnswer,
  onAnswerSelect,
  showAnswerState,
}) => {
  const { id, questionText, correctAnswer } = questionData;

  const isMultipleChoice = useMemo(
    () => correctAnswer.length > 1,
    [correctAnswer]
  );

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
      <div className="smallTextSize">
        <i>
          Wähle die{" "}
          {isMultipleChoice ? "richtigen Antworten" : "richtige Antwort"} aus
        </i>
      </div>
      <fieldset
        className="mt-4 p-4 rounded-md"
        aria-labelledby={legendId}
        role={!isMultipleChoice ? "radiogroup" : undefined}>
        <legend className="text-sm font-medium text-gray-600 dark:text-gray-400 px-1 sr-only">
          Antwortoptionen für: {questionText}
        </legend>
        <div className="space-y-3">
          {shuffledOptions.map((item, displayIndex) => {
            const inputId = `question-${id}-option-${displayIndex}`;
            const originalIndex = item.originalIndex;

            const isCorrect = correctAnswer.includes(originalIndex);
            const isSelected = isMultipleChoice
              ? Array.isArray(selectedAnswer) &&
                selectedAnswer.includes(originalIndex)
              : selectedAnswer === originalIndex;

            let optionStyleClasses = "border border-transparent";
            let baseTextColor = "text-gray-900 dark:text-gray-100";
            let hoverTextColor = !showAnswerState
              ? "group-hover:text-white group-hover:dark:text-gray-900"
              : "";
            let textStyleClasses = `${baseTextColor}`;

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
                key={originalIndex}
                className={`group rounded-md transition-colors duration-200 ${
                  !showAnswerState ? "" : "cursor-default"
                }`}>
                <label
                  htmlFor={inputId}
                  className={`ux-button flex items-center p-2 relative w-full h-full rounded-md ${optionStyleClasses} ${
                    !showAnswerState ? "cursor-pointer" : "cursor-default"
                  }`}
                  style={showAnswerState ? { pointerEvents: "none" } : {}}>
                  <input
                    id={inputId}
                    type={isMultipleChoice ? "checkbox" : "radio"}
                    name={`question-${id}`}
                    value={originalIndex}
                    checked={isSelected}
                    onChange={(e) =>
                      isMultipleChoice
                        ? handleCheckboxChange(originalIndex, e.target.checked)
                        : handleRadioChange(originalIndex)
                    }
                    disabled={showAnswerState}
                    className={`h-4 w-4 appearance-auto mr-3 ${
                      isMultipleChoice ? "rounded" : "rounded-full"
                    } text-blue-600 dark:text-blue-500 focus:ring-0 focus:outline-none hover:bg-transparent hover:border-transparent dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  <span
                    className={`text-sm font-medium select-none flex-grow flex items-center justify-between transition-colors duration-200 ${textStyleClasses} ${hoverTextColor}`}>
                    <span>{item.text}</span>
                    <span className="ml-2 w-4 text-center">
                      {showAnswerState && isCorrect && (
                        <span className="text-green-600 dark:text-green-400">
                          ✓
                        </span>
                      )}
                      {showAnswerState && isSelected && !isCorrect && (
                        <span className="text-red-600 dark:text-red-400">
                          ✗
                        </span>
                      )}
                      {!showAnswerState && <span className="invisible">✓</span>}
                      {showAnswerState && !isCorrect && !isSelected && (
                        <span className="invisible">✗</span>
                      )}
                    </span>
                  </span>
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
  const [hasScoredCurrentQuestion, setHasScoredCurrentQuestion] =
    useState(false);

  const currentQuestion = quizData[currentQuestionIndex];
  const isMultipleChoice = useMemo(
    () => !!currentQuestion && currentQuestion.correctAnswer.length > 1,
    [currentQuestion]
  );
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

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
      setHasScoredCurrentQuestion(false);
    }
  }, [currentQuestionIndex, currentQuestion]);

  const isAnswerSelected = useCallback(() => {
    if (isMultipleChoice) {
      return Array.isArray(selectedAnswer) && selectedAnswer.length > 0;
    } else {
      return selectedAnswer !== null && selectedAnswer !== undefined;
    }
  }, [isMultipleChoice, selectedAnswer]);

  const handleAnswerSelect = useCallback(
    (answerValue) => {
      if (questionState === "answering") {
        setSelectedAnswer(answerValue);
      }
    },
    [questionState]
  );

  const handleCheckAnswer = useCallback(() => {
    if (isAnswerSelected() && !hasScoredCurrentQuestion) {
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
        isCorrect =
          correctAnswers.length === 1 && selectedAnswer === correctAnswers[0];
      }

      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
      setHasScoredCurrentQuestion(true);
      setQuestionState("showingAnswer");
    }
  }, [
    isAnswerSelected,
    currentQuestion,
    isMultipleChoice,
    selectedAnswer,
    hasScoredCurrentQuestion,
  ]);

  const handleProceed = useCallback(() => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResults(true);
    }
  }, [isLastQuestion]);

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setHasScoredCurrentQuestion(false);
  };

  const getButtonProps = () => {
    if (questionState === "answering") {
      return {
        text: "Antworten prüfen",
        onClick: handleCheckAnswer,
        disabled: !isAnswerSelected(),
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
    <div className="max-w-[960px] mx-auto my-8 px-6 md:p-8 glassBox no-hover rounded-xl overflow-hidden shadow-lg">
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
              <span className="mx-2"></span>
              Korrekte Antworten bisher: {score}
            </div>
            <button
              onClick={buttonProps.onClick}
              disabled={buttonProps.disabled}
              style={{
                pointerEvents: buttonProps.disabled ? "none" : undefined,
              }}
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

export default BasicQuiz;
