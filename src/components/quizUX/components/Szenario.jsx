import { useContext, useState, useEffect } from "react";
import QuizContext from "./QuizContext";
import start_topic1 from "../../../assets/quizUX/images/start_topic1.png";
import start_topic2 from "../../../assets/quizUX/images/start_topic2.png";
import start_topic3 from "../../../assets/quizUX/images/start_topic3.png";
import styles from "./Quiz.module.css";

// popup content when szenario circles are clicked; displays szenario text for current topic
const Szenario = ({ whichSzenario, onUpdate }) => {
  const { topicTitles, colors, topicTexts } = useContext(QuizContext); // get static topic and color variables from context
  const [color, setColor] = useState("");
  const [topic, setTopic] = useState("");
  const [szenarioNr, setSzenarioNr] = useState(1);
  const [szenarioText, setSzenarioText] = useState(":)");
  const [button, setButton] = useState(null);

  useEffect(() => {
    switch (whichSzenario) {
      case "szenario1":
        setTopic(topicTitles[0]);
        setSzenarioNr("1");
        setColor(colors.pink);
        setButton(start_topic1);
        setSzenarioText(topicTexts[0]);
        break;
      case "szenario2":
        setTopic(topicTitles[1]);
        setSzenarioNr("2");
        setColor(colors.purple);
        setButton(start_topic2);
        setSzenarioText(topicTexts[1]);
        break;
      default:
        setTopic(topicTitles[2]);
        setSzenarioNr("3");
        setColor(colors.turquoise);
        setButton(start_topic3);
        setSzenarioText(topicTexts[2]);
    }
  }, [whichSzenario, topicTitles, colors, topicTexts]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-between cursor-default">
      <div></div>
      <div className="flex flex-col items-center text-ux_dark">
        <h2 className="text-inherit">Szenario {szenarioNr}:</h2>
        <h2 style={{ color: color }} className="font-bold">
          {topic}
        </h2>
        {/* <p className="font-medium w-11/12 text-lg mt-16">Versetze dich in folgendes Szenario:</p> */}
        <p className="w-11/12 mt-3 text-inherit">{szenarioText}</p>
      </div>
      <div
        onClick={() => onUpdate(whichSzenario, topic)}
        className={`${styles.img_container} self-end mr-4 hover:opacity-85 cursor-pointer`}>
        <img src={button} className="h-20" alt="Abschnitt starten Button" />
      </div>
    </div>
  );
};

export default Szenario;
