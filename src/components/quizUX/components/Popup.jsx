import { useContext, useState, useEffect } from "react";
import QuizContext from "./QuizContext";
import Exercise from "./Exercise";
import Feedback from "./Feedback";
import Start from "./Start";
import Szenario from "./Szenario";
import Disclaimer from "./Disclaimer";
import soundOnIcon from "../../../assets/quizUX/images/soundOn.png";
import soundOffIcon from "../../../assets/quizUX/images/soundOff.png";
import Review from "./Review";
import styles from "./Quiz.module.css";

// empty popup component that renders all popup types
const Popup = ({
  onClose,
  content,
  active,
  currentTopic,
  onAnswer,
  onUpdate,
  onRepeat,
  onJoker,
  jokerUsed,
  correctAmount,
  jokerAmount,
  completedAtLeastOnce,
  onReset,
  soundOn,
  onSoundClick,
  reviewContent = null,
  onReviewClick,
}) => {
  const { topicTitles } = useContext(QuizContext); // get static topic variables from context

  const [bgColor, setBgColor] = useState("#F6F5FC");
  const isExercise =
    content.type === "question" ||
    content.type === "match" ||
    content.type === "sort";

  // set (lighter) background color depending on topic
  useEffect(() => {
    // use topic of review exercise (if review popup) or topic of exercise (if exercise), else just default color
    let topic = content.topic;
    if (!isExercise && reviewContent !== null) {
      if (
        content !== "feedback" &&
        !content.includes("szenario") &&
        content !== "help"
      ) {
        topic = reviewContent.exercise.topic;
      }
    }

    switch (topic) {
      case topicTitles[0]:
        setBgColor("#E8BBD9");
        break;
      case topicTitles[1]:
        setBgColor("#C1BBE8");
        break;
      case topicTitles[2]:
        setBgColor("#BBE8E5");
        break;
      default:
        setBgColor("#F6F5FC");
    }
  }, [content, reviewContent, isExercise, topicTitles]);

  // renders popup content depending on popup type
  const renderPopupContent = (content) => {
    if (isExercise) {
      return (
        <Exercise
          exercise={content}
          active={active}
          onAnswer={onAnswer}
          onUpdate={onUpdate}
          onJoker={onJoker}
          jokerUsed={jokerUsed}
          soundOn={soundOn}
        />
      );
    } else {
      switch (content) {
        case "feedback":
          return (
            <Feedback
              currentTopic={currentTopic}
              correctAmount={correctAmount}
              jokerAmount={jokerAmount}
              onUpdate={onUpdate}
              onRepeat={onRepeat}
              completedAtLeastOnce={completedAtLeastOnce}
            />
          );
        case "start":
        case "help":
          return <Start popupType={content} onUpdate={onUpdate} />;
        case "szenario1":
        case "szenario2":
        case "szenario3":
          return (
            <Szenario
              whichSzenario={content}
              onUpdate={onUpdate}
              activeSzenario={active}
            />
          );
        case "alleFragen":
        case "reset":
          return <Disclaimer content={content} onReset={onReset} />;
        case "review":
          return (
            <Review
              reviewContent={reviewContent}
              onReviewClick={onReviewClick}
            />
          );
        default:
          return <div> error non-exercise type </div>;
      }
    }
  };

  // prevent popup from closing when popup itself is clicked
  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div style={popupContainer} onClick={onClose}>
      <div
        style={{ ...popupContent, background: bgColor }}
        className={styles.popup_size}
        onClick={handlePopupClick}>
        <div className="flex w-full justify-between">
          {soundOn && isExercise && (
            <div
              onClick={onSoundClick}
              className={`${styles.img_container} hover:opacity-80 cursor-pointer`}>
              <img
                src={soundOnIcon}
                className="h-5 mt-1"
                alt="Sound ist an Button"
              />
            </div>
          )}
          {!soundOn && isExercise && (
            <div
              onClick={onSoundClick}
              className={`${styles.img_container} hover:opacity-80 cursor-pointer`}>
              <img
                src={soundOffIcon}
                className="h-5 mt-1"
                alt="Sound ist aus Button"
              />
            </div>
          )}
          {!isExercise && <div></div>}
          <div
            onClick={onClose}
            className={`${styles.close_btn} font-medium cursor-pointer hover:opacity-80`}>
            X
          </div>
        </div>
        <div className="w-full h-full">{renderPopupContent(content)}</div>
        <div></div>
      </div>
    </div>
  );
};

// styles
const popupContainer = {
  background: "rgba(0, 0, 0, 0.5)",
  position: "absolute",
  inset: "0 0 0 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const popupContent = {
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export default Popup;
