import React, { useState, useEffect, useRef } from "react";
import Timeline from "./Timeline";

function TextContainer({ texts }) {
  const [timelineHeight, setTimelineHeight] = useState(0);
  const timelineRef = useRef(null);

  const parseTexts = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const italicRegex = /\*([^*]+)\*/g;

    const elements = [];
    let lastIndex = 0;

    // Funktion zum Parsen des Textes und Ersetzen der Muster
    text.replace(linkRegex, (match, displayName, url, offset) => {
      // Text vor dem Link-Pattern hinzufügen
      if (offset > lastIndex) {
        elements.push(text.substring(lastIndex, offset));
      }

      elements.push(
        <a
          href={url}
          key={offset}
          className="text mx-0 text-blue-200 hover:underline">
          {displayName}
        </a>
      );

      lastIndex = offset + match.length;
    });

    if (lastIndex < text.length) {
      elements.push(text.substring(lastIndex));
    }

    const finalElements = [];
    elements.forEach((el, index) => {
      if (typeof el === "string") {
        let lastTextIndex = 0;
        let partElements = [];

        el.replace(boldRegex, (match, content, offset) => {
          if (offset > lastTextIndex) {
            partElements.push(el.substring(lastTextIndex, offset));
          }
          partElements.push(
            <b key={`b${offset}`} className="textSize TextColor font-bold">
              {content}
            </b>
          );
          lastTextIndex = offset + match.length;
        });

        if (lastTextIndex < el.length) {
          partElements.push(el.substring(lastTextIndex));
        }

        const italicParts = [];
        partElements.forEach((part, partIndex) => {
          if (typeof part === "string") {
            let lastItalicIndex = 0;
            part.replace(italicRegex, (match, content, offset) => {
              if (offset > lastItalicIndex) {
                italicParts.push(part.substring(lastItalicIndex, offset));
              }
              italicParts.push(
                <i key={`i${offset}`} className="text TextColor">
                  {content}
                </i>
              );
              lastItalicIndex = offset + match.length;
            });

            if (lastItalicIndex < part.length) {
              italicParts.push(part.substring(lastItalicIndex));
            }
          } else {
            italicParts.push(part);
          }
        });

        finalElements.push(...italicParts);
      } else {
        finalElements.push(el);
      }
    });

    return finalElements;
  };

  useEffect(() => {
    const calculateHeightTimeline = () => {
      if (timelineRef.current) {
        const width = timelineRef.current.offsetWidth;
        const height = (width / 16) * 9;
        setTimelineHeight(height);
      }
    };

    const calculator = () => {
      calculateHeightTimeline();
    };
    calculator();
    window.addEventListener("resize", calculator);
    return () => {
      window.removeEventListener("resize", calculator);
    };
  }, []);

  /*

  - max-w-[1000px]

  */

  return (
    <div className="text-lightText w-full flex flex-col items-center">
      {texts.map((item, index) => {
        if (item.startsWith("##list ")) {
          const listItems = item
            .split("##list")
            .slice(1)
            .map((section) => section.trim());
          return (
            <ul className="list-disc pl-5 w-4/5 max-w-[1000px]" key={index}>
              {listItems.map((listItem, idx) => (
                <li className="TextColor text" key={idx}>
                  {parseTexts(listItem)}
                </li>
              ))}
            </ul>
          );
        } else if (item.startsWith("## ")) {
          return (
            <p
              className="mt-1 md:mt-4 h2-5 TextColor font-bold header w-4/5 max-w-[1000px]"
              key={index}>
              {parseTexts(item.slice(3))}
            </p>
          );
        } else if (item.startsWith("### ")) {
          return (
            <p
              className="mt-1 md:mt-4 h3 TextColor font-bold header w-4/5 max-w-[1000px]"
              key={index}>
              {parseTexts(item.slice(3))}
            </p>
          );
        } else if(item.startsWith("[Component:Timeline]")) {
          return (
            <div
                ref={timelineRef}
                className="w-4/5 max-w-[2000px] flex justify-center items-center my-5 p-2 bg-lightText"
                style={{
                  height: `${timelineHeight}px`,
                  minHeight: `${timelineHeight}px`,
                  borderRadius: "20px",
                }}>
                <Timeline />
              </div>
          )
        } else {
          return (
            <p className="TextColor text min-h-4 w-4/5 max-w-[1000px]" key={index}>
              {parseTexts(item)}
            </p>
          );
        }
      })}
    </div>
  );
}

export default TextContainer;
