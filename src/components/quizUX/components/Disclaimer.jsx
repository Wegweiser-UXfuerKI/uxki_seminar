import { useState } from "react";
import fortfahrenBtn from "../../../assets/quizUX/images/fortfahren.png";
import AllQuestions from "./AllQuestions";
import avatar from "../../../assets/quizUX/images/avatar_girl.png";
import styles from "./Quiz.module.css";

// dislaimer content for popup; displays a warning before resetting or seeing AllQuestions
const Disclaimer = ({ content, onReset }) => {
  const [renderAllQuest, setRenderAllQuest] = useState(false);
  const isAllQuest = content === "alleFragen"; // else: disclaimer before resetting

  // render content depending on if next content will be AllQuestions or resetting of quiz
  const renderPopupContent = () => {
    if (renderAllQuest) {
      return <AllQuestions />; // will also directly return AllQuestions after user decides to procede
    } else {
      return (
        <div className="flex flex-col justify-between">
          <div></div>
          <div className="flex flex-col items-center text-center">
            <div className="flex row items-center">
              <div
                className={`${styles.img_container} flex flex-col h-full justify-center`}>
                <img
                  src={avatar}
                  className={`${styles.image} h-64`}
                  alt="Avatar Disclaimer"
                />
              </div>
              <h2 className="mb-8">
                <b className="text-ux_dark">Achtung!</b>
              </h2>
            </div>
            {isAllQuest && (
              <h4 className="w-3/4 text-ux_dark">
                Wenn du fortfährst, siehst du eine Übersicht aller Fragen
                mitsamt ihrer Lösungen.
              </h4>
            )}
            {!isAllQuest && (
              <div className="flex flex-col items-center">
                <h4 className="w-3/4 mb-7 mt-3 text-ux_dark">
                  Wenn du fortfährst, wird dein gesamter Fortschritt
                  zurückgesetzt - das Quiz beginnt von vorne.
                </h4>
                <div className="flex row items-center rounded-lg">
                  <p className="mr-3 cursor-default">Fortschritt:</p>
                  <div className={styles.progress_bar}>
                    <div className={styles.progress_section}></div>
                    <div className={styles.progress_section}></div>
                    <div className={styles.progress_section}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`${styles.img_container} hover:opacity-85 cursor-pointer flex self-end mr-5`}>
            <img
              onClick={() => (isAllQuest ? setRenderAllQuest(true) : onReset())}
              src={fortfahrenBtn}
              className="h-20"
              alt="fortfahren Button"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex h-full w-full self-center justify-center">
      {renderPopupContent()}
    </div>
  );
};

export default Disclaimer;
