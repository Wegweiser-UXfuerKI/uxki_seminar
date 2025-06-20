import { useMemo } from "react";
import { ImageContainer } from "./ImageContainer";

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
export const Question = ({
  questionData,
  shuffledOptions,
  selectedAnswer,
  onAnswerSelect,
  showAnswerState,
  isReviewing,
}) => {
  const { id, questionText, correctAnswer, images, explanation } = questionData;

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

      <ImageContainer
        images={images}
        altText={`Fragebild für: ${questionText}`}
      />

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

      {/* Erklärungsbereich */}
      {showAnswerState && explanation && (
        <div className="mt-6 p-6 glassBox">
          <h3>Erklärung:</h3>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};
