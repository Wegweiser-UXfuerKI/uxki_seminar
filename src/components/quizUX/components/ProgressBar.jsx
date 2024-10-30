import { useContext } from "react";
import QuizContext from "./QuizContext";
import styles from "./Quiz.module.css";

// displays how many exercises are done in each topic and how many of those were correct
const ProgressBar = ({ doneInTopic, correctInTopic }) => {
  const { topicTitles, colors } = useContext(QuizContext); // get static topic and color variables from context
  const exercisesPerTopic = 8;

  // calculate percentage of completion (for topic)
  const calculateSectionWidth = (topic) => {
    return (doneInTopic[topic] / exercisesPerTopic) * 100;
  };

  // calculate percentage of correctly completed for topic
  const calculateCorrect = (topic) => {
    return (correctInTopic[topic] / exercisesPerTopic) * 100;
  };

  return (
    <div className={styles.progress_bar}>
      <div className={styles.progress_section}>
        <div
          className={styles.progress}
          style={{
            width: `${calculateSectionWidth(topicTitles[0])}%`,
            backgroundColor: colors.pink,
            opacity: "50%",
          }}></div>
        <div
          className={styles.progress}
          style={{
            width: `${calculateCorrect(topicTitles[0])}%`,
            backgroundColor: colors.pink,
          }}></div>
      </div>
      <div className={styles.progress_section}>
        <div
          className={styles.progress}
          style={{
            width: `${calculateSectionWidth(topicTitles[1])}%`,
            backgroundColor: colors.purple,
            opacity: "50%",
          }}></div>
        <div
          className={styles.progress}
          style={{
            width: `${calculateCorrect(topicTitles[1])}%`,
            backgroundColor: colors.purple,
          }}></div>
      </div>
      <div className={styles.progress_section}>
        <div
          className={styles.progress}
          style={{
            width: `${calculateSectionWidth(topicTitles[2])}%`,
            backgroundColor: colors.turquoise,
            opacity: "50%",
          }}></div>
        <div
          className={styles.progress}
          style={{
            width: `${calculateCorrect(topicTitles[2])}%`,
            backgroundColor: colors.turquoise,
          }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
