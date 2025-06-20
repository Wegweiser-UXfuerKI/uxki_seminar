import BaseButton from "../../1_elements/BaseButton";

/**
 * A component that displays the result of a quiz and offers a button to restart.
 *
 * @param {Object} props
 * @param {number} props.score - The number of correct answers.
 * @param {number} props.totalQuestions - The total number of questions in the quiz.
 * @param {function} props.onRestart - A function to be called when wished to restart the quiz.
 * @returns {JSX.Element}
 */
export const QuizResult = ({ score, totalQuestions, onRestart }) => {
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
