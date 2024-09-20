import { useContext } from "react";
import allQuestionsBtn from "../../../assets/quizUX/images/AlleFragen.png";
import logo from "../../../assets/quizUX/images/Wegweiser_logo.png";
import resetBtn from "../../../assets/quizUX/images/reset-btn.png";
import ProgressBar from "./ProgressBar";
import styles from "./Quiz.module.css";
import QuizContext from "./QuizContext";

// the header displays the quiz' name, progressBar, reset button and allQuestions button
const Header = ({ doneInTopic, correctInTopic }) => {
  //const [showPopup, setShowPopup] = useState(false);
  //const [popupContent, setPopupContent] = useState("");
  const { setShowPopup, setCurrentContent } = useContext(QuizContext);

  // open popup with content depending on which button was clicked
  const handleBtnClick = (content) => {
    setCurrentContent(content);
    setShowPopup(true);
  };

  return (
    <div className={styles.header_bg}>
      <div className={styles.header}>
        <div className="flex row w-1/3 justify-start items-center">
          <h2 className="mb-0">Das</h2>
          <div className={`${styles.header_logo} ${styles.img_container}`}>
            <img
              src={logo}
              className={styles.image}
              alt="Wegweiser.UX-für-KI Logo"
            />
          </div>
          <h2 className="mb-0">Quiz</h2>
        </div>
        <div className="flex row justify-around items-center">
          <div className="flex flex-col">
            <p className="text-ux_white mr-4 mb-1">Fortschritt:</p>
            <ProgressBar
              doneInTopic={doneInTopic}
              correctInTopic={correctInTopic}
            />
          </div>
          <div
            onClick={() => handleBtnClick("reset")}
            className={`${styles.img_container} h-5 cursor-pointer ml-4 hover:opacity-80`}>
            <img
              src={resetBtn}
              className={styles.image}
              alt="Fortschritt zurücksetzen Button"
            />
          </div>
        </div>
        <div className="w-1/3 h-full flex justify-end">
          <div
            onClick={() => handleBtnClick("alleFragen")}
            id="all-quest"
            className={`${styles.img_container} border-dashed border-white border-2 rounded-lg hover:border-solid hover:cursor-pointer`}>
            <img
              src={allQuestionsBtn}
              className={styles.image}
              alt="Alle Fragen Button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
