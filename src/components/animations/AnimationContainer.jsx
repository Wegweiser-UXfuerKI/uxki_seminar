/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { animations } from "./animations";
import { GraphicContainer } from "../GraphicContainer";
import { AnimationText } from "./AnimationText";
import { AnimationData } from "./AnimationData";
import { AnimationProgressBar } from "./AnimationProgressBar";

function AnimationContainer({ topicName }) {

  const animationDataContent = AnimationData[topicName];

  const [animationSelection, setAnimationSelection] = useState(0);
  // Progress in the module
  const [progress, setProgress] = useState(0);
  const [autoNext, setAutoNext] = useState(false);
  const [autoBack, setAutoBack] = useState(false);
  const [maxProgress, setMaxProgress] = useState(0);
  const [currentAllProgress, setCurrentAllProgress] = useState(0);

  // handles the correct animation
  const handleKeyPress = (event) => {
    if (event.key === "ArrowLeft") {
      if (progress === 0 && animationSelection === 0) {
        return;
      }
      if (progress === 0 && animationSelection === 1) {
        explanationController.start({
          ...animations.show,
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            delay: 1.5
          }
        });
      }
      // TODO: verify this if can be deleted
      if (animationSelection === 0 && progress !== 0) {
        setProgress((prevProgress) => prevProgress - 1);
      }
      nextAnimation("back");
      const newCurrentAllProgress = currentAllProgress - 1;
      if (newCurrentAllProgress <= 0) {
        setCurrentAllProgress(0);
      } else {
        setCurrentAllProgress(newCurrentAllProgress);
      }
    } else if (event.key === "ArrowRight") {
      nextAnimation("next");
      explanationController.start(animations.hide);
      const newCurrentAllProgress = currentAllProgress + 1;
      setCurrentAllProgress(newCurrentAllProgress);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  })

  useEffect(() => {
    let counter = 0;
    for (let i = 0; i < animationDataContent.Content.length; i++) {
      for (let k = 0; k < animationDataContent.Content[i].AnimationOrder.length - 1; k++) {
        counter++;
      }
    }
    setMaxProgress(counter);
    //setCurrentAllProgress(0);
    console.log("MaxProgress: ", maxProgress);
  })

  useEffect(() => {
    console.log("CurrentMax: ", currentAllProgress);
  }, [currentAllProgress]);

  const nextAnimation = async (direction) => {
    setAutoNext(false);
    setAutoBack(false);
    const animationPromises = [];
    let usedProgress = progress;
    let usedAnimationSelection;
    let startAutoBack = false;
    if (direction === "next") {
      // es war (eigentlich falsch, ging auch nicht mehr woanders): animationSelection === animationDataContent.Content[animationDataContent.Content.length - 1].AnimationOrder[animationDataContent.Content[animationDataContent.Content.length - 1].AnimationOrder.length - 1].length
      if (usedProgress === animationDataContent.Content.length - 1 && animationSelection === animationDataContent.Content[animationDataContent.Content.length - 1].AnimationOrder.length - 1) {
        return;
      }
      usedAnimationSelection = animationSelection;
    } else if (direction === "back" && animationSelection === 0) {
      usedAnimationSelection = animationDataContent.Content[usedProgress - 1].AnimationOrder.length - 1;
      setAnimationSelection(usedAnimationSelection);
      usedProgress = progress - 1;
      setProgress(usedProgress);
    } else {
      startAutoBack = true;
      usedAnimationSelection = animationSelection - 1;
      setAnimationSelection(usedAnimationSelection);
    }

    // gets next or last animation
    const animationData = direction === "next" ? animationDataContent.Content[usedProgress].AnimationOrder[usedAnimationSelection] : animationDataContent.Content[usedProgress].AnimationOrderRev[usedAnimationSelection];

    for (let i = 0; i < animationData.length; i++) {

      for (let j = 0; j < animationData[i].length; j++) {

        const animationEntry = animationData[i][j];
        const { element, speed } = animationEntry;
        const controller = elementToController[element];

        for (let k = 0; k < animationEntry.animationSelected.length; k++) {

          const animationSelected = animationEntry.animationSelected[k];

          // if animationSelection = 0 : erstes element speed = 0
          // if animationSelection = 0 and progress > 0 : nach dem umdrehen eigentlich letztes durchführen und dann den "ersten" klick, alles in einem

          if (animationSelected.includes(":")) {
            const stringParts = animationSelected.split(":");
            const animationMethod = stringParts[0];
            const animationValue = stringParts.slice(1).join(":");
            console.log("danach: " + animationValue);

            // special cases where a parameter needs to be passed
            switch (animationMethod) {
              // special case if a anchor (top, right, bottom, left) needs to be removed for another to be in effect
              case "remove":
                console.log("case remove");
                animationPromises.push(controller.start({
                  ...animations.unset(animationValue),
                  transition: {
                    duration: speed,
                    ease: "easeInOut"
                  }
                }))
                break;
              case "color":
                console.log("case color");
                animationPromises.push(controller.start({
                  ...animations.color(animationValue),
                  transition: {
                    duration: speed,
                    ease: "easeInOut"
                  }
                }))
                break;
              case "move":
                console.log("case move");
                const moveParts = animationValue.split(":");
                const direction = moveParts[0];
                const moveValue = moveParts[1];
                console.log("direction: " + direction);
                console.log("moveValue: " + moveValue);
                animationPromises.push(controller.start({
                  ...animations.move(direction, moveValue),
                  transition: {
                    duration: speed,
                    ease: "easeInOut"
                  }
                }))
                break;
              default:
                break;
            }
          } else {
            console.log("default case: " + animationSelected);
            animationPromises.push(controller.start({
              ...animations[animationSelected],
              transition: {
                duration: speed,
                ease: "easeInOut"
              }
            }))
          }
        }
      }
      await Promise.all(animationPromises);
    }
    if (startAutoBack) {
      setAutoBack(true);
      console.log("\n\n\n\n\n");
      console.log("setAutoBack true");
      console.log("progress:", progress);
      console.log("animation selection: ", animationSelection);
    }
    if (direction === "next") {
      const newSelect = animationSelection + 1;
      console.log("is next selection now");
      setAnimationSelection(newSelect);
    }
    if (direction === "next" && animationSelection === animationDataContent.Content[progress].AnimationOrder.length - 1) {
      setProgress((prevProgress) => prevProgress + 1);
      setAnimationSelection(0);
      setAutoNext(true);
    }
  }

  useEffect(() => {
    console.log("\n\n\n\n\n");
    console.log("autoBack: ", autoBack);
    console.log("progress:", progress);
    console.log("animation selection: ", animationSelection);
    console.log("\n\n\n\n\n");
    if (progress !== 0 && animationSelection === 0 && autoNext) {
      nextAnimation("next");
    } else if (progress !== 0 && animationSelection === 0 && autoBack) {
      console.log("its running back now")
      nextAnimation("back");
    }
  }, [progress, autoBack])

  // assignment to animation controller
  const explanationController = useAnimation();
  const graphicController = useAnimation();

  /* sure there is a better solution than this */
  const textControllers = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const elementToController = {
    "image": graphicController,
    "text0": textControllers[0],
    "text1": textControllers[1],
    "text2": textControllers[2],
    "text3": textControllers[3],
    "text4": textControllers[4]
  }

  
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: "100px"
      }}>
      <div style={{ position: "relative", maxWidth: "1000px", backgroundColor: "white", borderRadius: "20px", cursor: "pointer", overflow: "hidden" }}
      className="h-[400px] md:h-[563px] w-4/5 md:w-3/5">

        <motion.div
          className="w-full, h-full flex justify-center"
          initial={{ visibility: "visible" }}
          animate={explanationController}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              position: "absolute",
              left: 0,
              top: "50%",
              textAlign: "center",
              fontSize: "calc(14px + 1vmin)",
            }}>
            Zurück
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              position: "absolute",
              right: 0,
              top: "50%",
              textAlign: "center",
              fontSize: "calc(14px + 1vmin)",
            }}>
            Weiter
          </div>

          <div
            style={{
              width: "80%",
              height: "50%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
            Zum steuern der Animationen links oder rechts auf den Bereich klicken oder mit den Pfeiltasten links/rechts.
          </div>
        </motion.div>


        {/* Steurung über den Bidlschirm */}
        <div
          style={{
            width: "50%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 1,
          }}
          className="bg-black opacity-0 sm:hover:opacity-5 sm:duration-200"
          onClick={() => {
            handleKeyPress({ key: "ArrowLeft" });
          }}></div>

        <div
          style={{
            width: "50%",
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: 1,
          }}
          className="bg-black opacity-0 sm:hover:opacity-5 sm:duration-200"
          onClick={() => {
            handleKeyPress({ key: "ArrowRight" });
          }}></div>

        {/* Graphic Animation Container -- the style is for vertically centering, pos = absolute and left = 100% necessary to be out of parent */}
        <motion.div
          animate={graphicController}
          initial={{ position: "absolute", left: "100%" }}
          style={{ width: "50%", top: "50%", transform: "translateY(-50%)" }}>
          <GraphicContainer
            type={animationDataContent.Content[progress].Image.typeImg}
            src={animationDataContent.Content[progress].Image.src}
            altText={animationDataContent.Content[progress].Image.alt}
          />
        </motion.div>

        {/* Text Animation Container --  */}
        <motion.div
          className="textOne"
          animate={textControllers[0]}
          initial={{ position: "absolute", right: "100%" }}
          style={{ width: "50%" }}>
          <AnimationText typeText={animationDataContent.Content[progress].Texts[0].typeText} text={animationDataContent.Content[progress].Texts[0].string} />
        </motion.div>

        <motion.div
          className="textTwo"
          animate={textControllers[1]}
          initial={{
            position: "absolute",
            opacity: 0,
            right: "50%",
            top: "50%",
          }}
          style={{ width: "50%" }}>
          {animationDataContent.Content[progress].Texts.length >= 2 ? (
            <AnimationText typeText={animationDataContent.Content[progress].Texts[1].typeText} text={animationDataContent.Content[progress].Texts[1].string} />
          ) : null}
        </motion.div>

        <motion.div
          className="textThree"
          animate={textControllers[2]}
          initial={{
            position: "absolute",
            opacity: 0,
            right: "50%",
            top: "50%",
          }}
          style={{ width: "50%" }}>
          {animationDataContent.Content[progress].Texts.length >= 3 ? (
            <AnimationText typeText={animationDataContent.Content[progress].Texts[2].typeText} text={animationDataContent.Content[progress].Texts[2].string} />
          ) : null}
        </motion.div>

        <motion.div
          className="textFour"
          animate={textControllers[3]}
          initial={{
            position: "absolute",
            opacity: 0,
            right: "50%",
            top: "50%",
          }}
          style={{ width: "50%" }}>
          {animationDataContent.Content[progress].Texts.length >= 4 ? (
            <AnimationText typeText={animationDataContent.Content[progress].Texts[3].typeText} text={animationDataContent.Content[progress].Texts[3].string} />
          ) : null}
        </motion.div>

        <motion.div
          className="textFive"
          animate={textControllers[4]}
          initial={{
            position: "absolute",
            opacity: 0,
            right: "50%",
            top: "50%",
          }}
          style={{ width: "50%" }}>
          {animationDataContent.Content[progress].Texts.length >= 5 ? (
            <AnimationText typeText={animationDataContent.Content[progress].Texts[4].typeText} text={animationDataContent.Content[progress].Texts[1].string} />
          ) : null}
        </motion.div>
        {/* TODO: div with absolute and animation for hidden when progress 0 and selection 0 */}
        <AnimationProgressBar maxCount={maxProgress} currentCount={currentAllProgress} />
      </div>
    </div>
    // anstatt null, default Text setzen, sie sind aber hiddens
  );
  
}
/*
AnimationContainer.propTypes = {
    titleList: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageList: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
        ).isRequired,
        textList: PropTypes.arrayOf(
            PropTypes.arrayOf(PropTypes.string)
            ).isRequired,
};
*/
export default AnimationContainer;