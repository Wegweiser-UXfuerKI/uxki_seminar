/* eslint-disable no-undef */
// Packages
import { useState, useEffect, useContext } from "react";
import DOMPurify from "dompurify";
import { readingTime } from "reading-time-estimator";
import showdown from "showdown";
import { AppContext } from "../../AppContext";

// Assets
import coverImg from "./content/euaiact/article-nutzerverhalten-cover.webp";
import "./InformationText.css";

import grundlagenuxMDText from "./content/grundlagenUX/informationText.md?raw";
import euaiactMDText from "./content/euaiact/informationText.md?raw";

// TMP
const kiUxMDText = "";
const kiUxEigenschaftenMDText = "";
const dateninputMDText = "";
const verarbeitungMDText = "";
const kiErgebnisseMDText = "";
const identifikationMDText = "";

const moduleLinkMap = {
  "ux-und-usability": grundlagenuxMDText,
  "ki-bezogene-ux": kiUxMDText,
  "ux-bezogene-ki-eigenschaften": kiUxEigenschaftenMDText,
  dateninput: dateninputMDText,
  verarbeitung: verarbeitungMDText,
  "ki-ergebnisse": kiErgebnisseMDText,
  "identifikation-prozesse": identifikationMDText,
  "eu-ai-act": euaiactMDText,
};

/* 
  The info text that precedes the learning element.
  Converts a Markdown file into HTML for easier writing.
*/
function InformationText({ setCurrentView }) {
  // The estimate of how much time the user needs to read the text
  const [readingTimeEstimate, setReadingTimeEstimate] = useState();
  const [htmlContent, setHtmlContent] = useState("");
  const { selectedModuleLink } = useContext(AppContext);

  function getModuleMap(inputLink) {
    const result = moduleLinkMap[inputLink] || euaiactMDText;
    console.log("getModuleMap result:", result);
    return result;
  }

  const mdText = getModuleMap(selectedModuleLink);

  useEffect(() => {
    if (!mdText) return;

    let wordsPerMinute = 220;
    setReadingTimeEstimate(readingTime(mdText, wordsPerMinute, "de"));

    const converter = new showdown.Converter();
    const convertedHtml = converter.makeHtml(mdText);

    const sanitizedHTML = DOMPurify.sanitize(convertedHtml, {
      USE_PROFILES: { html: true },
    });

    setHtmlContent(sanitizedHTML);
  }, [mdText]);

  return (
    <div
      id="text-wrapper"
      className="flex flex-col items-center h-full overflow-auto"
    >
      <img id="img-cover" className="mt-5" src={coverImg} alt="" />
      <span id="reading-estimate" className="flex justify-start">
        {readingTimeEstimate?.text}
      </span>
      <section
        id="text-content"
        style={{
          wordBreak: "break-word",
          hyphens: "auto",
          language: "de",
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></section>
      <button
        className="cassette-btn-dark py-3 px-5 text-lightText"
        onClick={() => setCurrentView("interaktiv")}
      >
        Zur Lernanwendung
      </button>
    </div>
  );
}

export default InformationText;
