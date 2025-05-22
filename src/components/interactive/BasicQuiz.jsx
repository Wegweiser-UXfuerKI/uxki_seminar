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
  isReviewing,
}) => {
  const { id, questionText, correctAnswer } = questionData;

  const isMultipleChoice = useMemo(
    () => correctAnswer.length > 1,
    [correctAnswer]
  );

  const handleRadioChange = (originalIndex) => {
    if (!showAnswerState && !isReviewing) {
      onAnswerSelect(originalIndex);
    }
  };

  const handleCheckboxChange = (originalIndex, checked) => {
    if (!showAnswerState && !isReviewing) {
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
            const domSpecificInputId = `question-${id}-option-${displayIndex}`;
            const originalIndex = item.originalIndex;
            const isCorrect = correctAnswer.includes(originalIndex);
            const isSelected = isMultipleChoice
              ? Array.isArray(selectedAnswer) &&
                selectedAnswer.includes(originalIndex)
              : selectedAnswer === originalIndex;

            let optionStyleClasses = "border border-transparent";
            let baseTextColor = "text-gray-900 dark:text-gray-100";
            let hoverTextColor =
              !showAnswerState && !isReviewing
                ? "group-hover:text-white group-hover:dark:text-gray-900"
                : "";
            let textStyleClasses = `${baseTextColor}`;

            if (showAnswerState) {
              if (isCorrect) {
                //
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
                textStyleClasses = `${baseTextColor} opacity-75`;
              }
            }

            return (
              <div
                key={originalIndex + "-" + displayIndex}
                className={`group rounded-md transition-colors ${
                  !showAnswerState && !isReviewing ? "" : "cursor-default"
                }`}>
                <label
                  htmlFor={domSpecificInputId}
                  className={`ux-button flex items-center px-6 py-3 rounded-xl relative w-full h-full ${optionStyleClasses} ${
                    !showAnswerState && !isReviewing
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  style={
                    showAnswerState || isReviewing
                      ? { pointerEvents: "none" }
                      : {}
                  }>
                  <input
                    id={domSpecificInputId}
                    type={isMultipleChoice ? "checkbox" : "radio"}
                    name={`question-${id}-${isReviewing ? "review" : "active"}`}
                    value={originalIndex}
                    checked={isSelected}
                    onChange={(e) =>
                      isMultipleChoice
                        ? handleCheckboxChange(originalIndex, e.target.checked)
                        : handleRadioChange(originalIndex)
                    }
                    disabled={showAnswerState || isReviewing}
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
                      {!showAnswerState && !isReviewing && (
                        <span className="invisible">✓</span>
                      )}{" "}
                      {/* Placeholder */}
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
  const quizInstanceId = useMemo(() => {
    return `quiz-instance-${Math.random().toString(36).substring(2, 11)}`;
  }, []);

  const [processedQuizData, setProcessedQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [viewingQuestionIndex, setViewingQuestionIndex] = useState(0);

  const [liveSelectedAnswer, setLiveSelectedAnswer] = useState(null);
  const [liveShuffledOptions, setLiveShuffledOptions] = useState([]);

  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!quizData || quizData.length === 0) {
      setProcessedQuizData([]);
      setCurrentQuestionIndex(0);
      setViewingQuestionIndex(0);
      setScore(0);
      setShowResults(false);
      setLiveSelectedAnswer(null);
      setLiveShuffledOptions([]);
      return;
    }
    let dataToUse = [...quizData];
    if (shuffleQuestions) {
      dataToUse = shuffleArray(dataToUse);
    }

    const initialProcessedData = dataToUse.map((q) => ({
      ...q,
      id: `${quizInstanceId}-q-${q.id}`,
      originalQuestionId: q.id,
      userSelectedAnswer: q.correctAnswer.length > 1 ? [] : null,
      isScored: false,
      wasCorrect: false,
      shuffledOptionsForDisplay: [],
    }));

    setProcessedQuizData(initialProcessedData);
    setCurrentQuestionIndex(0);
    setViewingQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  }, [quizData, shuffleQuestions, quizInstanceId]);

  useEffect(() => {
    const questionToView = processedQuizData[viewingQuestionIndex];
    if (
      questionToView &&
      viewingQuestionIndex === currentQuestionIndex &&
      !questionToView.isScored
    ) {
      const optionsWithOriginalIndex = questionToView.options.map(
        (text, index) => ({ text: text, originalIndex: index })
      );
      setLiveShuffledOptions(shuffleArray(optionsWithOriginalIndex));
      setLiveSelectedAnswer(
        questionToView.correctAnswer.length > 1 ? [] : null
      );
    }
  }, [viewingQuestionIndex, currentQuestionIndex, processedQuizData]);

  const questionToDisplayData = processedQuizData[viewingQuestionIndex];
  const isViewingActiveUnscoredQuestion =
    questionToDisplayData &&
    viewingQuestionIndex === currentQuestionIndex &&
    !questionToDisplayData.isScored;
  const isReviewingStoredQuestion =
    questionToDisplayData && questionToDisplayData.isScored;

  const handleAnswerSelect = useCallback(
    (answerValue) => {
      if (isViewingActiveUnscoredQuestion) {
        setLiveSelectedAnswer(answerValue);
      }
    },
    [isViewingActiveUnscoredQuestion]
  );

  const handleCheckAnswer = useCallback(() => {
    if (!questionToDisplayData || !isViewingActiveUnscoredQuestion) return;

    const activeQuestionData = processedQuizData[currentQuestionIndex];
    if (!activeQuestionData) return;

    let isCorrect = false;
    const correctAnswers = activeQuestionData.correctAnswer;

    const currentIsMultiple = correctAnswers.length > 1;
    let selectedForCheck = liveSelectedAnswer;

    if (currentIsMultiple) {
      const sortedSelected = Array.isArray(selectedForCheck)
        ? [...selectedForCheck].sort((a, b) => a - b)
        : [];
      const sortedCorrect = [...correctAnswers].sort((a, b) => a - b);
      isCorrect =
        JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
    } else {
      isCorrect =
        correctAnswers.length === 1 && selectedForCheck === correctAnswers[0];
    }

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setProcessedQuizData((prevData) =>
      prevData.map((q, index) =>
        index === currentQuestionIndex
          ? {
              ...q,
              userSelectedAnswer: liveSelectedAnswer,
              isScored: true,
              wasCorrect: isCorrect,
              shuffledOptionsForDisplay: liveShuffledOptions,
            }
          : q
      )
    );
  }, [
    currentQuestionIndex,
    processedQuizData,
    liveSelectedAnswer,
    liveShuffledOptions,
    isViewingActiveUnscoredQuestion,
    questionToDisplayData,
  ]);

  const isLastQuestion = currentQuestionIndex === processedQuizData.length - 1;

  const handleProceed = useCallback(() => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setViewingQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResults(true);
    }
  }, [isLastQuestion]);

  const handleRestart = () => {
    let dataToRestartWith = [...quizData];
    if (shuffleQuestions) {
      dataToRestartWith = shuffleArray(dataToRestartWith);
    }
    const initialProcessedData = dataToRestartWith.map((q) => ({
      ...q,
      id: `${quizInstanceId}-q-${q.id}`,
      originalQuestionId: q.id,
      userSelectedAnswer: q.correctAnswer.length > 1 ? [] : null,
      isScored: false,
      wasCorrect: false,
      shuffledOptionsForDisplay: [],
    }));
    setProcessedQuizData(initialProcessedData);
    setCurrentQuestionIndex(0);
    setViewingQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  const handleNavigateQuestion = (direction) => {
    if (direction === "prev" && viewingQuestionIndex > 0) {
      setViewingQuestionIndex(viewingQuestionIndex - 1);
    } else if (
      direction === "next" &&
      viewingQuestionIndex < currentQuestionIndex
    ) {
      // Erlaubt navigation zur nächsten Frage, wenn beantwortet
      setViewingQuestionIndex(viewingQuestionIndex + 1);
    }
  };

  const isAnswerSelectedForActiveQuestion = () => {
    if (!isViewingActiveUnscoredQuestion) return false;
    const currentIsMultiple = questionToDisplayData.correctAnswer.length > 1;
    if (currentIsMultiple) {
      return Array.isArray(liveSelectedAnswer) && liveSelectedAnswer.length > 0;
    } else {
      return liveSelectedAnswer !== null && liveSelectedAnswer !== undefined;
    }
  };

  if (!quizData || quizData.length === 0) {
    return <div className="text-center p-8">Keine Quizdaten vorhanden.</div>;
  }
  if (processedQuizData.length === 0 || !questionToDisplayData) {
    return <div className="text-center p-8">Lade Quiz...</div>;
  }

  let questionComponentProps = {};
  if (isViewingActiveUnscoredQuestion) {
    questionComponentProps = {
      questionData: questionToDisplayData,
      shuffledOptions: liveShuffledOptions,
      selectedAnswer: liveSelectedAnswer,
      onAnswerSelect: handleAnswerSelect,
      showAnswerState: false,
      isReviewing: false,
    };
  } else if (isReviewingStoredQuestion) {
    questionComponentProps = {
      questionData: questionToDisplayData,
      shuffledOptions: questionToDisplayData.shuffledOptionsForDisplay,
      selectedAnswer: questionToDisplayData.userSelectedAnswer,
      onAnswerSelect: () => {},
      showAnswerState: true,
      isReviewing: true,
    };
  } else {
    if (viewingQuestionIndex > currentQuestionIndex && !showResults) {
      return (
        <div className="text-center p-8">
          Diese Frage wurde noch nicht erreicht.
        </div>
      );
    }
    return <div className="text-center p-8">Lade Frageansicht...</div>;
  }

  const canNavigatePrev = viewingQuestionIndex > 0;
  const canNavigateNext = viewingQuestionIndex < currentQuestionIndex;

  const showMainActionButton =
    viewingQuestionIndex === currentQuestionIndex ||
    (isReviewingStoredQuestion &&
      viewingQuestionIndex === processedQuizData.length - 1 &&
      showResults);

  let mainButtonConfig = {};
  if (viewingQuestionIndex === currentQuestionIndex) {
    if (!questionToDisplayData.isScored) {
      mainButtonConfig = {
        text: "Antworten prüfen",
        action: handleCheckAnswer,
        disabled: !isAnswerSelectedForActiveQuestion(),
      };
    } else {
      mainButtonConfig = {
        text: isLastQuestion ? "Ergebnis anzeigen" : "Nächste Frage",
        action: handleProceed,
        disabled: false,
      };
    }
  }

  return (
    <div className="max-w-[960px] mx-auto my-8 md:p-16 sm:p-12 p-88 glassBox no-hover rounded-[48px] overflow-hidden shadow-lg">
      {!showResults ? (
        <>
          <Question {...questionComponentProps} />

          <div className="flex  justify-between">
            <div className="mt-8 flex flex-col justify-between items-start space-y-3">
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <BaseButton
                  onClick={() => handleNavigateQuestion("prev")}
                  disabled={!canNavigatePrev}
                  className={`h-6 px-3 rounded-md text-sm ${
                    !canNavigatePrev ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  ariaLabel="Vorherige Frage">
                  &lt;
                </BaseButton>
                <div className="text-sm mx-3">
                  Frage {viewingQuestionIndex + 1} von{" "}
                  {processedQuizData.length}
                </div>
                <BaseButton
                  onClick={() => handleNavigateQuestion("next")}
                  disabled={!canNavigateNext}
                  className={`h-6 px-3 rounded-md text-sm ${
                    !canNavigateNext ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  ariaLabel="Nächste Frage">
                  &gt;
                </BaseButton>
                <span className="mx-2">|</span>
                Korrekte Antworten bisher: {score}
              </div>
              <div className="flex items-center space-x-2">
                <BaseButton
                  onClick={() => handleNavigateQuestion("prev")}
                  disabled={!canNavigatePrev}
                  className={`h-6 px-3 rounded-md text-sm ${
                    !canNavigatePrev ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  ariaLabel="Vorherige Frage">
                  &lt;
                </BaseButton>
                <BaseButton
                  onClick={() => handleNavigateQuestion("next")}
                  disabled={!canNavigateNext}
                  className={`h-6 px-3 rounded-md text-sm ${
                    !canNavigateNext ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  ariaLabel="Nächste Frage">
                  &gt;
                </BaseButton>
              </div>
            </div>

            {showMainActionButton &&
              Object.keys(mainButtonConfig).length > 0 && (
                <div className="mt-8 flex justify-end">
                  <BaseButton
                    onClick={mainButtonConfig.action}
                    disabled={mainButtonConfig.disabled}
                    className={`relative font-medium px-6 py-4 h-min rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 ${
                      mainButtonConfig.disabled
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    ariaLabel={mainButtonConfig.text}>
                    {mainButtonConfig.text}
                  </BaseButton>
                </div>
              )}
          </div>
        </>
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
