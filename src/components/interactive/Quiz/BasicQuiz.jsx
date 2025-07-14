import { useMemo, useState, useEffect, useCallback } from "react";

import { shuffleArray } from "../../utils/arrayUtils";
import { Question } from "./Question";
import { QuizResult } from "./QuizResult";
import BaseButton from "../../1_elements/BaseButton";

import ArrowIcon from "../../1_elements/ArrowIcon";

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
                  className={`h-6 rounded-md ${
                    !canNavigatePrev ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  ariaLabel="Vorherige Frage">
                  <ArrowIcon direction="left" className="p-0" />
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
                  <ArrowIcon direction="right" />
                </BaseButton>
                <span className="mx-2">|</span>
                Korrekte Antworten bisher: {score}
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
