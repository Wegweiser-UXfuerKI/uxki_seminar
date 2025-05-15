import React, { useState, useCallback, useMemo, useEffect } from "react";
import BaseButton from "../1_elements/BaseButton";

/**
 * Function to shuffle a array using the Fisher-Yates algorithm.
 * @param {Array} array - Array to shuffle
 * @returns {Array} - shuffled array
 */
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

/**
 * Renders a single quiz question with selectable answer options
 * @param {Object} props
 * @param {Object} props.questionData - The question data, including question text and answer options
 * @param {Array} props.shuffledOptions - The shuffled answer options for the question
 * @param {number|number[]} props.selectedAnswer - The currently selected answer(s)
 * @param {Function} props.onAnswerSelect - Callback function to handle answer selection
 * @param {boolean} props.showAnswerState - Flag to indicate whether to show the correct answer state
 * @returns {JSX.Element}
 */
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
        Wähle die{" "}
        {isMultipleChoice ? "richtigen Antworten" : "richtige Antwort"} aus
      </div>
      <fieldset
        className="mt-4 py-4"
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
                // green
                optionStyleClasses =
                  "border bg-[#A9E5AB] dark:bg-[#1e3b3a] border-[#3ABB3E] dark:border-[#77d1cb]";
                textStyleClasses =
                  "text-[#2e5f5c] dark:text-[#c9e8e2] font-semibold";
              } else if (isSelected && !isCorrect) {
                // red
                optionStyleClasses =
                  "border bg-[#f6d3dd] dark:bg-[#3f2a32] border-[#d1779a] dark:border-[#d1779a]";
                textStyleClasses =
                  "text-[#5f2e3d] dark:text-[#f6d3dd] font-semibold";
              } else {
                optionStyleClasses =
                  "border border-gray-200 dark:border-gray-700 opacity-75";
              }
            }

            return (
              <div
                key={originalIndex}
                className={`group rounded-md transition-colors ${
                  !showAnswerState ? "" : "cursor-default"
                }`}>
                <label
                  htmlFor={inputId}
                  className={`ux-button flex items-center px-6 py-3 rounded-xl relative w-full h-full ${optionStyleClasses} ${
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
                    className={`h-4 w-4 ux-button appearance-auto mr-3 ${
                      isMultipleChoice ? "rounded" : "rounded-full"
                    } accent-[var(--vb)] hover:accent-[var(--vb)] focus:accent-[var(--vb)] checked:accent-[var(--vb)] text-[var(--vb)] focus:ring-2 focus:ring-[var(--vb)] hover:border-[var(--vb)] border-2 dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  <span
                    className={`text-sm font-medium select-none flex-grow flex items-center justify-between ${textStyleClasses} ${hoverTextColor}`}>
                    <span className="text-inherit">{item.text}</span>
                    <span className="ml-2 w-4 text-center">
                      {showAnswerState && isCorrect && (
                        <span className="text-[#2e5f5c] dark:text-[#c9e8e2]">
                          ✓
                        </span>
                      )}
                      {showAnswerState && isSelected && !isCorrect && (
                        <span className="text-[#5f2e3d] dark:text-[#f6d3dd]">
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

/**
 * A component that displays the result of a quiz and offers a button to restart.
 *
 * @param {Object} props
 * @param {number} props.score - The number of correct answers.
 * @param {number} props.totalQuestions - The total number of questions in the quiz.
 * @param {function} props.onRestart - A function to be called when wished to restart the quiz.
 * @returns {JSX.Element}
 */
const QuizResult = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Quiz beendet!
      </h2>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
        Dein Ergebnis: {score} von {totalQuestions} richtig beantwortet.
      </p>
      <BaseButton
        onClick={onRestart}
        className="relative font-medium px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-gray-900">
        Quiz neu starten
      </BaseButton>
    </div>
  );
};

/**
 * Main component for rendering the quiz interface and mangeing state.
 *
 * @param {Object} props
 * @param {Array} props.quizData - The array of quiz questions.
 *   Each question object should have the following properties:
 *   - `options`: An array of strings representing the answer options.
 *   - `correctAnswer`: A string or an array of strings representing the correct
 *     answer(s). If `correctAnswer` is an array, it will be treated as a
 *     multiple-choice question with multiple correct answers.
 * @param {boolean} [props.shuffleQuestions=false] - whether to shuffle questions
 * @returns {JSX.Element}
 */
const BasicQuiz = ({ quizData, shuffleQuestions = false }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questionState, setQuestionState] = useState("answering");
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [hasScoredCurrentQuestion, setHasScoredCurrentQuestion] =
    useState(false);

  const [processedQuizData, setProcessedQuizData] = useState([]);

  useEffect(() => {
    if (!quizData || quizData.length === 0) {
      setProcessedQuizData([]);
      return;
    }
    let dataToUse = [...quizData];
    if (shuffleQuestions) {
      dataToUse = shuffleArray(dataToUse);
    }
    setProcessedQuizData(dataToUse);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setHasScoredCurrentQuestion(false);
    setQuestionState("answering");
    setHasScoredCurrentQuestion(false);
  }, [quizData, shuffleQuestions]);

  const currentQuestion = processedQuizData[currentQuestionIndex];
  const isMultipleChoice = useMemo(
    () => !!currentQuestion && currentQuestion.correctAnswer.length > 1,
    [currentQuestion]
  );
  const isLastQuestion = currentQuestionIndex === processedQuizData.length - 1;

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
    // this shuffles again whe restarting
    if (shuffleQuestions) {
      setProcessedQuizData(shuffleArray([...quizData]));
    }
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setHasScoredCurrentQuestion(false);
  };

  if (
    processedQuizData.length === 0 ||
    !currentQuestion ||
    (shuffledOptions.length === 0 && !showResults)
  ) {
    if (
      quizData &&
      quizData.length > 0 &&
      processedQuizData.length === 0 &&
      !showResults
    ) {
      return <div className="text-center p-8">Bereite Quiz vor...</div>;
    }
    if (!quizData || quizData.length === 0) {
      return <div className="text-center p-8">Keine Quizdaten vorhanden.</div>;
    }

    if (!currentQuestion || (shuffledOptions.length === 0 && !showResults)) {
      return <div className="text-center p-8">Lade Quiz...</div>;
    }
  }

  const buttonConfig =
    questionState === "answering"
      ? {
          text: "Antworten prüfen",
          action: handleCheckAnswer,
          disabled: !isAnswerSelected(),
        }
      : {
          text: isLastQuestion ? "Ergebnis anzeigen" : "Nächste Frage",
          action: handleProceed,
          disabled: false,
        };

  return (
    <div className="max-w-[960px] mx-auto my-8 md:p-16 sm:p-12 p-88 glassBox no-hover rounded-[48px] overflow-hidden shadow-lg">
      {!showResults ? (
        currentQuestion ? (
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
                Frage {currentQuestionIndex + 1} von {processedQuizData.length}
                <span className="mx-2"></span>
                Korrekte Antworten bisher: {score}
              </div>
              <BaseButton
                onClick={buttonConfig.action}
                disabled={buttonConfig.disabled}
                className={`relative font-medium px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 ${
                  buttonConfig.disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                ariaLabel={buttonConfig.text}>
                {buttonConfig.text}
              </BaseButton>
            </div>
          </>
        ) : (
          <div className="text-center p-8">Lade nächste Frage...</div>
        )
      ) : (
        <QuizResult
          score={score}
          totalQuestions={processedQuizData.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default BasicQuiz;
