import React, { useRef, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import AppContext from "../../AppContext";
import { ReactComponent as RightArrow } from "../../assets/images/right-arrow.svg";
import AnimationContainer from "../animations/AnimationContainer";
import { TopicData } from "../TopicData";
import { TextData } from "../../TextData";
import TextContainer from "../TextContainer";
import DosAndDonts from "../dosdonts/DosAndDonts";
import { Risikostufen } from "../Risikostufen";
import { TabLinkIcon } from "../svg/Icons";

import checkerWebsite from "../../assets/images/EUAICheckerCropped.png";

const SubTopicPage = () => {
  const { subtopicId } = useParams(); // get name of current subtopic
  const location = useLocation(); // get params from Link element
  const { clickedContent, index } = location.state || {}; // get clicked content from location state

  const topicContents = useContext(AppContext);
  const contentNames = Object.keys(topicContents[subtopicId]);
  const [hasSectionThree, setHasSectionThree] = useState(true);

  const [initialScrollDone, setInitialScrollDone] = useState(false);
  const [showToTopBtn, setShowToTopBtn] = useState(false);

  const isVideoAnimation = TopicData[subtopicId];
  const [videoHeight, setVideoHeight] = useState(0);
  const [websiteHeight, setWebsiteHeight] = useState(0);
  const videoRef = useRef(null);
  const websiteRef = useRef(null);
  const textData = TextData[subtopicId];

  useEffect(() => {
    if (index !== undefined) {
      const indexToSection = ["video", "section1", "section2"];
      const indexToScroller = document.getElementById(indexToSection[index]);
      const scrollIndexZero = document.getElementById("video")
      if (indexToScroller) {
        scrollIndexZero.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          let extraScroll = 0;
          if (index === 1) {
            const section0 = document.getElementById(indexToSection[0]);
            if (section0) {
              extraScroll = section0.getBoundingClientRect().height;
            }
            window.scrollBy({
              top: extraScroll,
              behavior: "smooth"
            });
          } else if (index === 2) {
            const section0 = document.getElementById(indexToSection[0]);
            const section1 = document.getElementById(indexToSection[1]);
            if (section0) {
              extraScroll += section0.getBoundingClientRect().height;
            }
            if (section1) {
              extraScroll += section1.getBoundingClientRect().height;
            }
            window.scrollBy({
              top: extraScroll,
              behavior: "smooth"
            });
          }
        }, 500);
      }
    } else {
      window.scrollTo(0, 0); // else just scroll to top of page
    }

    setHasSectionThree(contentNames.length >= 3);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [contentNames.length, index]);

  /*
    if (!initialScrollDone) {
      // only use this scroll behavior initially
      if (clickedContent !== undefined) {
        // scroll to the element with the ID matching clickedContent
        scrollToElement(clickedContent);
      } else {
        window.scrollTo(0, 0); // else just scroll to top of page
      }
      setInitialScrollDone(true);
    } else {
      // check scroll behavior for toTopBtn after initial scroll
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    */

  // save if there is a third section to state
  //setHasSectionThree(contentNames.length >= 3);

  // only show toTopBtn if user scrolls 20px down
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowToTopBtn(true);
    } else {
      setShowToTopBtn(false);
    }
  };

  useEffect(() => {
    const calculateHeightVideo = () => {
      if (videoRef.current) {
        const width = videoRef.current.offsetWidth;
        const height = (width / 16) * 9;
        setVideoHeight(height);
      }
    };
    console.log("subtopicid: ", subtopicId);

    const calculateHeightWebsite = () => {
      if (websiteRef.current) {
        const width = websiteRef.current.offsetWidth;
        const height = (width / 16) * 9;
        setWebsiteHeight(height);
      }
    };

    const calculator = () => {
      calculateHeightVideo();
      calculateHeightWebsite();
    };
    calculator();
    window.addEventListener("resize", calculator);
    return () => {
      window.removeEventListener("resize", calculator);
    };
  }, []);

  const openLinkNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="SubTopicPage" style={subTopic_style}>
      <div id="top" className="h1 mt-10 mb-20 text-lightText">
        {subtopicId}
      </div>
      <div
        id="video"
        style={{
          ...section_style,
          background: "#77a9d1",
          minHeight: `calc(${videoHeight}px + 200px)`,
        }}>
        {subtopicId === "Risikostufen - Anwendungsbeispiele" ||
        subtopicId === "Risikostufen - Auswirkungen" ? (
          <>
            <div className="h-full w-full flex flex-col items-center mb-[100px]">
              <p className="h2 mb-10 mt-14 text-center TextColor">
                {textData.Texte[0].title}
              </p>
              <TextContainer texts={textData.Texte[0].texts} />
            </div>
            {subtopicId === "Risikostufen - Anwendungsbeispiele" && (
              <div
                className="relative"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}>
                <img
                  ref={websiteRef}
                  src={checkerWebsite}
                  alt="Bild des EU AI Act Compliance Checker"
                  style={{
                    width: "80%",
                    height: `${websiteHeight}px`,
                    maxWidth: "1000px",
                    marginBottom: "100px",
                    borderRadius: "20px",
                  }}
                />
                <div
                  className="absolute top-0 w-4/5 max-w-[1000px] flex justify-center items-center bg-darkText bg-opacity-20 hover:bg-opacity-30 hover:cursor-pointer duration-200"
                  style={{
                    height: `${websiteHeight}px`,
                    borderRadius: "20px",
                  }}
                  onClick={() =>
                    openLinkNewTab(
                      "https://artificialintelligenceact.eu/assessment/eu-ai-act-compliance-checker/"
                    )
                  }>
                  <div className="w-20 h-20">
                    <TabLinkIcon />
                  </div>
                </div>
              </div>
            )}
          </>
        ) : null}
        {subtopicId === "Fazit" && (
          <div className="TextColor text min-h-4 w-4/5 max-w-[1000px]">
            In diesem Abschnitt finden Sie nun noch einige interaktive
            Möglichkeiten das gelernte zu überprüfen, sowie ein kurzes
            Diskussionsvideo zur Rolle des EU AI Acts mit Blick auf die
            Anforderungen an gemeinwohlorientierte Organisationen. Nehmen Sie
            sich ein paar Minuten Zeit, um das Video zu schauen und Ihr Wissen
            zu überprüfen.
          </div>
        )}
        {isVideoAnimation.Video &&
        subtopicId !== "Risikostufen - Anwendungsbeispiele" &&
        subtopicId !== "Risikostufen - Auswirkungen" ? (
          <iframe
            ref={videoRef}
            src={textData.VideoLink.link}
            title={"Einführungsvideo"}
            allowFullScreen
            style={{
              border: "0",
              height: `${videoHeight}px`,
              maxWidth: "1000px",
              borderRadius: "20px",
            }}
            className="sm:m-[25px] w-[80%] m-[100px] sm:w-[60%]"></iframe>
        ) : null}
        {subtopicId === "High Level Expert Group" && (
          <div className="h-full w-full flex flex-col items-center mb-[100px]">
            <p className="h2 mb-10 mt-14 text-center TextColor">
              {textData.Texte[0].title}
            </p>
            <TextContainer texts={textData.Texte[0].texts} />
          </div>
        )}
      </div>
      {subtopicId !== "High Level Expert Group" &&
      subtopicId !== "Risikostufen - Anwendungsbeispiele" ? (
        <div id="section1" style={{ ...section_style, background: "#8377d1" }}>
          {subtopicId === "Risikostufen - Auswirkungen" ? (
            <div className="h-full w-full flex flex-col items-center mb-[100px]">
              <p className="h2 mb-10 mt-14 text-center TextColor">
                {textData.Texte[1].title}
              </p>
              <TextContainer texts={textData.Texte[1].texts} />
            </div>
          ) : (
            <div className="h-full w-full flex flex-col items-center mb-[100px]">
              <p className="h2 mb-10 mt-14 text-center TextColor">
                {textData.Texte[0].title}
              </p>
              <TextContainer texts={textData.Texte[0].texts} />
            </div>
          )}
          {isVideoAnimation.Animation && (
            <>
              <p className="h2 mb-10 mt-14 TextColor">
                Beispiel interaktiver Inhalt
              </p>
              <AnimationContainer topicName={subtopicId} />
            </>
          )}
          {subtopicId === "Risikostufen - Anwendungsbeispiele" && (
            <div
              className="relative"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}>
              <img
                ref={websiteRef}
                src={checkerWebsite}
                alt="Bild des EU AI Act Compliance Checker"
                style={{
                  width: "80%",
                  height: `${websiteHeight}px`,
                  maxWidth: "1000px",
                  marginBottom: "100px",
                  borderRadius: "20px",
                }}
              />
              <div
                className="absolute top-0 w-4/5 max-w-[1000px] flex justify-center items-center bg-darkText bg-opacity-20 hover:bg-opacity-30 hover:cursor-pointer duration-200"
                style={{
                  height: `${websiteHeight}px`,
                  borderRadius: "20px",
                }}
                onClick={() =>
                  openLinkNewTab(
                    "https://artificialintelligenceact.eu/assessment/eu-ai-act-compliance-checker/"
                  )
                }>
                <div className="w-20 h-20">
                  <TabLinkIcon />
                </div>
              </div>
            </div>
          )}
          {subtopicId === "Designimplikationen" && (
            <div
              ref={websiteRef}
              className="w-4/5 max-w-[2000px] flex justify-center items-center my-[100px] border-[0.5rem] border-lightText"
              style={{
                height: `${websiteHeight}px`,
                minHeight: `${websiteHeight}px`,
                borderRadius: "20px",
              }}>
              <Risikostufen />
            </div>
          )}
        </div>
      ) : null}
      {hasSectionThree ? (
        <div id="section2" style={{ ...section_style, background: "#c177d1" }}>
          {textData.Texte.length > 1 &&
          subtopicId !== "Risikostufen - Auswirkungen" ? (
            <div className="h-full w-full flex flex-col items-center mb-[100px]">
              <p className="h2 mb-10 mt-14 text-center TextColor">
                {textData.Texte[1].title}
              </p>
              <TextContainer texts={textData.Texte[1].texts} />
            </div>
          ) : subtopicId === "Risikostufen - Auswirkungen" ? (
            <div className="h-full w-full flex flex-col items-center mb-[100px]">
              <p className="h2 mb-10 mt-14 text-center TextColor">
                {textData.Texte[2].title}
              </p>
              <TextContainer texts={textData.Texte[2].texts} />
            </div>
          ) : null}
          {subtopicId === "Fazit" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}>
              <div className="h2 text-lightText mt-[100px] mb-10">
                Lernspiel praktische Anwendung
              </div>
              <div
                ref={websiteRef}
                style={{
                  border: "0",
                  height: `${websiteHeight}px`,
                  width: "80%",
                  maxWidth: "2000px",
                  margin: "100px",
                  marginTop: 0,
                  borderRadius: "20px",
                }}>
                <DosAndDonts />
              </div>
              <div className="h2 text-lightText mb-10">
                Quiz zur Selbstüberprüfung
              </div>
              <iframe
                ref={websiteRef}
                src={"https://hkuswik.github.io/quiz_uxfuerki_ba/"}
                title={"Interaktive Website für Quizfragen für die UX von KI"}
                className="w-4/5"
                allowFullScreen
                style={{
                  border: "0",
                  height: `${websiteHeight}px`,
                  maxWidth: "2000px",
                  margin: "100px",
                  marginTop: 0,
                  borderRadius: "20px",
                }}></iframe>
            </div>
          )}
        </div>
      ) : null}
      {showToTopBtn && <RightArrow onClick={scrollToTop} id="toTopBtn" />}
    </div>
  );
};

// scrolls to element by id
function scrollToElement(sectionId) {
  const elem = document.getElementById(sectionId);
  if (elem) {
    elem.scrollIntoView({ behavior: "smooth" });
  }
}

// scrolls to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// styles
const subTopic_style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const section_style = {
  minHeight: "30vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default SubTopicPage;
