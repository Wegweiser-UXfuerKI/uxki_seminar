import { useContext, useState } from "react";
import QuizContext from "./QuizContext";
import weiter_logo from "../../../assets/quizUX/images/weiter_generic.png";
import starten_logo from "../../../assets/quizUX/images/Quiz_starten.png";
import bulbIcon from "../../../assets/quizUX/images/bulb.png";
import swapIcon from "../../../assets/quizUX/images/swap.png";
import styles from "./Quiz.module.css";

// popup content when start circle is clicked; displays welcome text and explains some main features
const Start = ({ onUpdate, popupType }) => {
  const { topicTitles, colors } = useContext(QuizContext); // get static topic and color variables from context
  const [content, setContent] = useState(1);

  // render content to distinguish between first (welcome text) and second part (explanations) of popup content
  const renderContent = (content) => {
    if (content === 2 || popupType === "help") {
      return (
        <div className="flex flex-col h-full justify-between cursor-default">
          <div></div>
          {popupType === "help" && (
            <div className="flex flex-col items-center self-center text-center w-5/6">
              <p className="pb-3 text-ux_dark">
                Im <b className="text-inherit">Wegweiser.UX-für-KI Quiz</b>{" "}
                kannst du dich selbstständig zu den Themen{" "}
                <b className={styles.pink}>{topicTitles[0]}</b>,{" "}
                <b className={styles.lila}>{topicTitles[1]}</b> und{" "}
                <b className={styles.türkis}>{topicTitles[2]}</b> testen. Zu
                jedem Thema erhältst du zunächst ein kurzes{" "}
                <b className="text-inherit">Szenario</b>, in das du dich
                reinversetzen sollst. Zum Abschluss jedes Wegabschnitts erhältst
                du ein kurzes <b className="text-inherit">Feedback</b>.
              </p>
            </div>
          )}
          <div>
            <div
              className="flex row justify-between items-center mr-5 ml-5"
              style={{ marginBottom: popupType === "help" ? "20px" : "80px" }}>
              <div className="flex flex-col w-4/12 items-center">
                <div className={styles.progress_bar}>
                  <div className={styles.progress_section}>
                    <div
                      className={styles.progress}
                      style={{
                        width: "100%",
                        backgroundColor: colors.pink,
                        opacity: "40%",
                      }}></div>
                    <div
                      className={styles.progress}
                      style={{
                        width: "60%",
                        backgroundColor: colors.pink,
                      }}></div>
                  </div>
                  <div className={styles.progress_section}>
                    <div
                      className={styles.progress}
                      style={{
                        width: "100%",
                        backgroundColor: colors.purple,
                        opacity: "40%",
                      }}></div>
                    <div
                      className={styles.progress}
                      style={{
                        width: "80%",
                        backgroundColor: colors.purple,
                      }}></div>
                  </div>
                  <div className={styles.progress_section}>
                    <div
                      className={styles.progress}
                      style={{
                        width: "40%",
                        backgroundColor: colors.turquoise,
                        opacity: "40%",
                      }}></div>
                    <div
                      className={styles.progress}
                      style={{
                        width: "20%",
                        backgroundColor: colors.turquoise,
                      }}></div>
                  </div>
                </div>
              </div>
              <p className="w-7/12 text-ux_dark">
                Der <b className="text-inherit">Fortschrittsbalken</b> zeigt an,
                wie weit du jeweils in den drei Themenabschnitten{" "}
                <b className={styles.pink}>{topicTitles[0]}</b>,{" "}
                <b className={styles.lila}>{topicTitles[1]}</b> und{" "}
                <b className={styles.türkis}>{topicTitles[2]}</b>{" "}
                fortgeschritten bist. Die dunklere Farbe zeigt, wieviele der
                Fragen du <b className="text-inherit">korrekt</b> beantwortet
                hast.
              </p>
            </div>
            <div className="flex row justify-between items-center mr-5 ml-5">
              <div className="flex flex-col w-4/12 items-center">
                <div className="flex row">
                  <div style={joker}>
                    <img
                      src={swapIcon}
                      className="h-12"
                      alt="Frage wechseln Icon"
                    />
                  </div>
                  <div style={joker}>
                    <img
                      src={bulbIcon}
                      className="h-16"
                      alt="Glühbirnen Icon"
                    />
                  </div>
                </div>
              </div>
              <p className="w-7/12 text-ux_dark">
                Du hast zwei Joker zur Verfügung, mit denen du entweder die{" "}
                <b className="text-inherit">Frage tauschen</b> oder einen{" "}
                <b className="text-inherit">Tipp erhalten</b> kannst. Du kannst
                bei jeder Aufgabe genau{" "}
                <b className="text-inherit">einen Joker</b> einsetzen. In der
                Quiz-Übersicht siehst du, bei welchen Fragen du Joker verwendet
                hast.
              </p>
            </div>
          </div>
          {popupType === "start" && (
            <div className={`${styles.img_container} self-end mr-4`}>
              <img
                src={starten_logo}
                className="h-20 hover:opacity-85 cursor-pointer"
                onClick={onUpdate}
                alt="Quiz starten Logo"
              />
            </div>
          )}
          {popupType === "help" && <div></div>}
        </div>
      );
    } else {
      return (
        <div className="flex flex-col h-full justify-between cursor-default">
          <div></div>
          <div className="flex flex-col items-center text-center text-ux_dark">
            <h2 className="text-inherit">Willkommen beim Wegweiser.UX-für-KI Quiz
            </h2>
            <div className="w-9/12">
              <p className="pb-3 text-ux_dark">
                Du kannst dich hier selbstständig zu den Themen{" "}
                <b className={styles.pink}>{topicTitles[0]}</b>,{" "}
                <b className={styles.lila}>{topicTitles[1]}</b> und{" "}
                <b className={styles.türkis}>{topicTitles[2]}</b> testen.
              </p>
              <p className="text-ux_dark">
                Zu jedem Thema erhältst du zunächst ein kurzes{" "}
                <b className="text-inherit">Szenario</b>, in das du dich
                reinversetzen sollst. Zum Abschluss jedes Wegabschnitts erhältst
                du ein kurzes <b className="text-inherit">Feedback</b>.
              </p>
            </div>
          </div>
          <div className={`${styles.img_container} self-end mr-4`}>
            <img
              src={weiter_logo}
              className="h-20 hover:opacity-85 cursor-pointer"
              onClick={() => setContent(2)}
              alt="weiter Logo"
            />
          </div>
        </div>
      );
    }
  };

  return <div className="h-full w-full">{renderContent(content)}</div>;
};

// styles
const joker = {
  height: "120px",
  width: "120px",
  margin: "10px",
  borderRadius: "80px",
  borderWidth: "1px",
  borderColor: "#21202B",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "white",
};

export default Start;
