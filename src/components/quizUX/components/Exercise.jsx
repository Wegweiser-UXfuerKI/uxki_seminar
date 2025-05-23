import { useContext, useEffect, useState } from "react";
import QuizContext from "./QuizContext";
import QuestionExercise from "./QuestionExercise";
import MatchingExercise from "./MatchingExercise";
import SortingExercise from "./SortingExercise";
import bulbIcon from "../../../assets/quizUX/images/bulb.png";
import swapIcon from "../../../assets/quizUX/images/swap.png";
import fortfahrenIcon from "../../../assets/quizUX/images/continue_logo.png";
import avatarLila from "../../../assets/quizUX/images/avatar_lila.png";
import avatarTürkis from "../../../assets/quizUX/images/avatar_türkis.png";
import avatarPink from "../../../assets/quizUX/images/avatar_pink.png";
import correctSound from "../../../assets/quizUX/sound/correct_answer.wav";
import wrongSound from "../../../assets/quizUX/sound/wrong_answer.mp3";
import { Tooltip } from "react-tooltip";
import styles from "./Quiz.module.css";

// popup content for exercises; displays joker column and exercise number and renders specific exercise type
const Exercise = ({
  exercise,
  active,
  onAnswer,
  onUpdate,
  onJoker,
  jokerUsed,
  soundOn,
}) => {
  const { topicTitles } = useContext(QuizContext); // get static topic and color variables from context

  const [checkClicked, setCheckClicked] = useState(false);
  const [exerciseNr, setExerciseNr] = useState("");

  const [tip, setTip] = useState(""); // state variable for tip joker content
  const [tipAvatar, setTipAvatar] = useState(null);
  const [showTipPopup, setShowTipPopup] = useState(false);

  // audio for correct and wrong sounds
  const correctAudio = new Audio(correctSound);
  correctAudio.volume = 0.5;
  const wrongAudio = new Audio(wrongSound);

  useEffect(() => {
    // set checkClicked to false for every new exercise
    setCheckClicked(false);
    // set correct tip for every new exercise
    setTip(exercise.tip);

    // set correct avatar (with correct color elements) depending on exercise topic
    switch (exercise.topic) {
      case topicTitles[0]:
        setTipAvatar(avatarPink);
        break;
      case topicTitles[1]:
        setTipAvatar(avatarLila);
        break;
      case topicTitles[2]:
        setTipAvatar(avatarTürkis);
        break;
      default:
        console.log("error setting avatar");
    }
  }, [exercise, topicTitles]);

  useEffect(() => {
    // exerciseNr only possible if active circle is an exercise
    if (active.includes("circle")) {
      // calculate current exerciseNr (if check clicked: -1, since active gets already updated onAnswer)
      if (checkClicked) {
        setExerciseNr(active.substring(active.indexOf("e") + 1) - 1);
      } else {
        setExerciseNr(active.substring(active.indexOf("e") + 1));
      }
    }
  }, [checkClicked, active]);

  // render correct exercise type
  const renderExerciseType = (exercise) => {
    switch (exercise.type) {
      case "question":
        return <QuestionExercise exercise={exercise} onAnswer={handleAnswer} />;
      case "match":
        return <MatchingExercise exercise={exercise} onAnswer={handleAnswer} />;
      case "sort":
        return <SortingExercise exercise={exercise} onAnswer={handleAnswer} />;
      default:
        return <div> error exercise type </div>;
    }
  };

  // when answers is logged in, set checkClicked to true and forward it
  const handleAnswer = (isCorrect, usersAnswers) => {
    setCheckClicked(true);
    // play sound based on correctness, if sound is on
    if (soundOn) {
      if (isCorrect) {
        correctAudio.play();
      } else {
        wrongAudio.play();
      }
    }
    onAnswer(isCorrect, usersAnswers); // forward answer to parent component
  };

  // logic for clicking a joker (only 1 joker is allowed per exercise)
  const handleJokerClick = (joker) => {
    if (checkClicked) return; // can't use joker after logging answers

    if (jokerUsed === "swap") {
      // if already used 'swap', nothing happens onClick
      return;
    } else if (jokerUsed === "tip") {
      // if already used 'tip', user can reclick on 'tip' and see tip again (but not 'swap' anymore)
      if (joker === "tip") {
        setShowTipPopup(true);
      }
    } else {
      // no joker yet used
      if (joker === "tip") {
        onJoker("tip");
        setShowTipPopup(true);
      } else {
        onJoker("swap"); // swapping happens in Quiz.jsx
      }
    }
  };

  // prevent popup from closing when popup itself is clicked
  const handleTipClick = (event) => {
    event.stopPropagation();
  };

  // styles for tip and swap joker (inside scope because needs to know if check was clicked)
  const tip_joker = {
    ...joker,
    ...{
      backgroundColor: checkClicked
        ? "#D4D2DD"
        : jokerUsed !== ""
        ? jokerUsed === "swap"
          ? "#D4D2DD"
          : "white"
        : "white",
    },
  };
  const swap_joker = {
    ...joker,
    ...{
      backgroundColor: checkClicked || jokerUsed !== "" ? "#D4D2DD" : "white",
    },
  };

  return (
    <div style={exerciseContainer}>
      <div className="flex row justify-between" style={{ height: "92%" }}>
        <div className="flex row text-center">
          <div style={joker_col}>
            <h4 className="mb-1 text-ux_dark">Joker:</h4>
            <p className="mb-4 sm italic" style={{ color: "#696485" }}>
              1 Joker pro Aufgabe
            </p>
            <div
              data-tooltip-id="joker-tooltip"
              data-tooltip-content="Erhalte einen Tipp"
              onClick={() => handleJokerClick("tip")}
              style={tip_joker}
              className={
                !(jokerUsed === "swap") && !checkClicked
                  ? "hover:opacity-85 cursor-pointer"
                  : ""
              }>
              <img src={bulbIcon} className="h-16" alt="Glühbirnen Icon" />
            </div>
            <div
              data-tooltip-id="joker-tooltip"
              data-tooltip-content="Erhalte eine neue Frage"
              onClick={() => handleJokerClick("swap")}
              style={swap_joker}
              className={
                jokerUsed === "" && !checkClicked
                  ? "hover:opacity-85 cursor-pointer"
                  : ""
              }>
              <img src={swapIcon} className="h-12" alt="Frage wechseln Icon" />
            </div>
            <Tooltip
              id="joker-tooltip"
              style={{ backgroundColor: "#21202B" }}
            />
          </div>
          <div style={line}></div>
        </div>
        <div className="flex flex-col ml-3 w-5/6">
          {renderExerciseType(exercise)}
        </div>
      </div>
      <div className="flex row justify-between items-end ml-2 relative bottom-0">
        <h4 className="text-ux_dark">{exerciseNr}/24</h4>
        {checkClicked && (
          <div className="img-container">
            <img
              src={fortfahrenIcon}
              className="h-10 hover:opacity-85 cursor-pointer mb-1 mr-2"
              onClick={() => onUpdate()}
              alt="mit Quiz fortfahren"
            />
          </div>
        )}
      </div>
      {showTipPopup && (
        <div style={tipPopupContainer} onClick={() => setShowTipPopup(false)}>
          <div style={tipPopupContent} onClick={handleTipClick}>
            <div className="flex row justify-end mr-4 mt-3">
              <div
                onClick={() => setShowTipPopup(false)}
                className="relative right-0 text-2xl font-medium cursor-pointer hover:opacity-80 text-ux_dark">
                X
              </div>
            </div>
            <div className="flex row justify-center h-full">
              <div
                className={`${styles.img_container} flex flex-col h-full justify-center`}>
                <img
                  src={tipAvatar}
                  className="h-64 mt-20"
                  alt="Avatar Tipp Joker"
                />
              </div>
              <div className="flex flex-col h-full justify-center">
                <div className={`${styles.speech_bubble} mb-40 -ml-12`}>
                  <p className="text-center sm">{tip}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// styles
const exerciseContainer = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const joker_col = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "153px",
};

const joker = {
  height: "12vh",
  width: "12vh",
  margin: "10px",
  borderRadius: "80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};

const line = {
  height: "95%",
  width: "4px",
  backgroundColor: "#21202b",
  borderRadius: "99px",
  marginLeft: "1vw",
  marginRight: "0.40vw",
};

const tipPopupContainer = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const tipPopupContent = {
  backgroundColor: "white",
  height: "500px",
  width: "650px",
  marginLeft: "150px",
  borderRadius: "10px",
  boxShadow: "2px 3px 5px #999",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export default Exercise;
