import { useContext, useState, useEffect } from "react";
import QuizContext from "./QuizContext";
import check_btn from "../../../assets/quizUX/images/überprüfen_btn.png";
import styles from "./Quiz.module.css";

// popup content when exercise is of type 'sort'
const SortingExercise = ({ exercise, onAnswer, answersUser = null }) => {
  const { topicTitles, colors } = useContext(QuizContext); // get static topic and color variables from context

  const [firstCategory, setFirstCategory] = useState("");
  const [secondCategory, setSecondCategory] = useState("");
  const [firstItems, setFirstItems] = useState([]); // items that belong in 1st category
  const [secondItems, setSecondItems] = useState([]); // items that belong in 2nd category

  const [userSelections, setUserSelections] = useState({});
  const [allSelected, setAllSelected] = useState(false);
  const [checkClicked, setCheckClicked] = useState(false);

  const [isClickable, setIsClickable] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  const [firstBtnHover, setFirstBtnHover] = useState("");
  const [secondBtnHover, setSecondBtnHover] = useState("");

  const [color, setColor] = useState(colors.grey);

  // save categories, call prepare function and set design color according to topic
  useEffect(() => {
    prepareItems(exercise);
    setFirstCategory(exercise.firstContainer);
    setSecondCategory(exercise.secondContainer);

    switch (exercise.topic) {
      case topicTitles[0]:
        setColor(colors.pink);
        break;
      case topicTitles[1]:
        setColor(colors.purple);
        break;
      case topicTitles[2]:
        setColor(colors.turquoise);
        break;
      default:
        setColor(colors.grey);
    }
  }, [exercise, topicTitles, colors]);

  // check if it's review content, if so mark exercise as completed
  useEffect(() => {
    if (answersUser !== null) {
      setCheckClicked(true);
      setIsClickable(false);
    }
  }, [answersUser]);

  // save all items that have to be sorted and shuffle them
  const prepareItems = (exercise) => {
    const first = exercise.belongsInFirst.split(";");
    const second = exercise.belongsInSecond.split(";");
    setFirstItems(first);
    setSecondItems(second);

    const items = first.concat(second);
    shuffleArray(items);

    // create map in which selections for each item are saved
    setUserSelections(
      items.reduce((userSelectionsMap, item) => {
        // accumulate user selections for each item
        userSelectionsMap[item] = ""; // initialize user selection for each item with empty string
        return userSelectionsMap;
      }, {})
    );
  };

  // logic for clicking on category button (and sorting item to that category)
  const handleButtonClick = (item, category) => {
    if (!isClickable) return; // disable clicking when answers have been logged in

    // save clicked category for corresponding item
    const newSelections = { ...userSelections, [item]: category };

    // check if user has selected a category for each item
    let allDone = true;
    Object.keys(newSelections).forEach((item) => {
      if (newSelections[item] === "") {
        allDone = false;
        return; // exit loop as soon as an empty value is found
      }
    });
    setAllSelected(allDone);

    // hide warning again when next category is clicked
    showWarning && setShowWarning(false);

    // save new selections
    setUserSelections(newSelections);
  };

  // checks if selections were correct after check button is clicked
  const checkAnswer = () => {
    if (!allSelected) {
      setShowWarning(true);
    } else {
      setCheckClicked(true);
      setIsClickable(false); // disable clicking functionality
      // iterate through selected map and check if selected category for item corresponds to correct category
      for (const [item, category] of Object.entries(userSelections)) {
        if (category === firstCategory && !firstItems.includes(item)) {
          onAnswer(false, userSelections);
          return; // set false and return as soon as an item is sorted wrongly
        } else if (category === secondCategory && !secondItems.includes(item)) {
          onAnswer(false, userSelections);
          return;
        }
      }
      onAnswer(true, userSelections); // true if no item was sorted wrong
    }
  };

  // sets hovered button depending on if a category is already selected and which button is the hovered one
  const handleBtnHover = (item, selectedCategory) => {
    if (userSelections[item] !== selectedCategory && isClickable) {
      // no hover effect if already selected or not clickable
      if (selectedCategory === firstCategory) {
        setFirstBtnHover(item);
      } else {
        setSecondBtnHover(item);
      }
    }
  };

  // resets the hovered button
  const handleBtnLeave = (selectedCategory) => {
    if (selectedCategory === firstCategory) {
      setFirstBtnHover("");
    } else {
      setSecondBtnHover("");
    }
  };

  return (
    <div className="flex flex-col h-full w-full justify-around">
      <div className="font-semibold cursor-default text-ux_dark">
        {exercise.question}
      </div>
      <div className="flex flex-col">
        {Object.keys(userSelections).map((item) => (
          <div key={item} className="flex justify-between mb-3 items-center">
            <div style={item_style} className="sm mb-0">
              {item}
            </div>
            <div className="flex">
              <div
                onClick={() => handleButtonClick(item, firstCategory)}
                onMouseOver={() => handleBtnHover(item, firstCategory)}
                onMouseLeave={() => handleBtnLeave(firstCategory)}
                className="text-ux_dark"
                style={{
                  ...button_style,
                  ...(userSelections[item] === firstCategory
                    ? {}
                    : firstBtnHover === item
                    ? { ...hover_style, outlineColor: color }
                    : {}),
                  ...(checkClicked
                    ? answersUser !== null
                      ? {
                          background:
                            answersUser[item] === firstCategory
                              ? firstItems.includes(item)
                                ? colors.correct
                                : colors.wrong
                              : "#F6F5FC",
                        }
                      : {
                          background:
                            userSelections[item] === firstCategory
                              ? firstItems.includes(item)
                                ? colors.correct
                                : colors.wrong
                              : "#F6F5FC",
                        }
                    : {
                        background:
                          userSelections[item] === firstCategory
                            ? color
                            : "#F6F5FC",
                      }),
                }}>
                {firstCategory}
              </div>
              <div
                onClick={() => handleButtonClick(item, secondCategory)}
                onMouseOver={() => handleBtnHover(item, secondCategory)}
                onMouseLeave={() => handleBtnLeave(secondCategory)}
                className="text-ux_dark"
                style={{
                  ...button_style,
                  ...(userSelections[item] === secondCategory
                    ? {}
                    : secondBtnHover === item
                    ? { ...hover_style, outlineColor: color }
                    : {}),
                  ...(checkClicked
                    ? answersUser !== null
                      ? {
                          background:
                            answersUser[item] === secondCategory
                              ? secondItems.includes(item)
                                ? colors.correct
                                : colors.wrong
                              : "#F6F5FC",
                        }
                      : {
                          background:
                            userSelections[item] === secondCategory
                              ? secondItems.includes(item)
                                ? colors.correct
                                : colors.wrong
                              : "#F6F5FC",
                        }
                    : {
                        background:
                          userSelections[item] === secondCategory
                            ? color
                            : "#F6F5FC",
                      }),
                }}>
                {secondCategory}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex row justify-between h-12 items-center">
        <div className="w-28"></div>
        {showWarning && (
          <div className="font-bold" style={{ color: colors.wrong }}>
            Bitte wähle alle Antworten aus
          </div>
        )}
        {!checkClicked && (
          <div
            onClick={() => checkAnswer()}
            className={`${styles.img_container} ${
              allSelected ? "cursor-pointer hover:opacity-80" : "opacity-40"
            }`}>
            <img src={check_btn} className="w-28" alt="Überprüfen Button" />
          </div>
        )}
      </div>
    </div>
  );
};

// helper function: shuffles given array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// styles
const item_style = {
  background: "white",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  width: "80%",
  padding: "5px 10px 5px 15px",
  color: "black",
  fontSize: `calc(8px + 1vmin)`,
  lineHeight: "1.8",
};

const button_style = {
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "10px",
  height: "30px",
  marginLeft: "10px",
  fontSize: "calc(6px + 1vmin)",
  fontWeight: "600",
  cursor: "default",
};

const hover_style = {
  outline: "2px dashed",
  cursor: "pointer",
};

export default SortingExercise;
