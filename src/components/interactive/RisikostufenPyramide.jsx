import React, { useEffect, useState } from "react";
import styles from "./RisikostufenPyramide.module.css";

/**
 * A component that displays a pyramid of risk levels for AI technology.
 * Each level can be clicked to show or hide additional information.
 *
 * @component
 * @returns {JSX.Element} The rendered risk pyramid with clickable levels and toggleable text.
 */
export const RisikostufenPyramide = () => {
  const [visibleText, setVisibleText] = useState([]);

  /**
   * Toggles the visibility of the text for a specific risk level.
   * Adds the index to the visibleText array if it's not already included,
   * or removes it if it's already there.
   *
   * @param {number} index - The index of the clicked risk level.
   */
  const handleClick = (index) => {
    setVisibleText((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  useEffect(() => {
    console.log("geklappt: ", visibleText);
  }, [visibleText]);

  return (
    <div
      className="w-full h-full relative max-w-[2000px] min-h-96 border-[0.2rem] border-lightText rounded-xl hyphens-auto"
      style={{ overflow: "hidden" }}
    >
      <div className="w-full absolute top-0 bottom-[75%] z-40">
        <div
          className={`absolute top-0 left-0 w-full h-full ${styles.clip_triangle_1} flex items-end text-xl pl-[1%] pb-3 hover:cursor-pointer`}
          onClick={() => handleClick(0)}
        >
          <h4 className="w-[15%] h-full absolute top-0 bottom-0 left-0 right-[75%] pl-3 pb-2 flex items-end">
            Unannehmbares Risiko
          </h4>
        </div>
        <div
          className={`absolute top-0 w-full h-full ${
            styles.clip_text_triangle_1
          } flex pl-[25%] justify-end items-end ${
            visibleText.includes(0) ? styles.show_text : ""
          }`}
        >
          <p className="p-[8px] text-right smallTextSize">
            Bereiche, in denen KI als Bedrohung für Menschen wahrgenommen wird,
            sollen als unannehmbares Risiko klassifiziert werden. Hier ist der
            Einsatz von KI verboten. Hierbei handelt es sich um Bereiche, wie
            kognitive Verhaltensmanipulation und -steuerung, Social Scoring oder
            biometrische Fernidentifizierung in Echtzeit.
          </p>
        </div>
      </div>
      <div className="w-full absolute top-[25%] bottom-[50%] z-30">
        <div
          className={`absolute w-full h-full ${styles.clip_triangle_2} flex items-end pb-3 hover:cursor-pointer`}
          onClick={() => handleClick(1)}
        >
          <h4 className="w-full h-full absolute top-0 bottom-0 left-0 right-[75%] pl-3 pb-2 flex items-end">
            Hohes Risiko
          </h4>
        </div>
        <div
          className={`absolute top-0 w-full h-full ${
            styles.clip_text_triangle_2
          } flex pl-[30%] justify-end items-end ${
            visibleText.includes(1) ? styles.show_text : ""
          }`}
        >
          <p className="p-[8px] text-right mb-0 smallTextSize">
            Unterscheidung zwischen a) Einsatz in Geräten, die den europäischen
            Produktsicherheitsgesetzen unterliegen: Spielzeug, Luftfahrt und
            medizinishce Geräte, sowie b) KI-Systeme in sonstigen spezifischen
            Bereichen: z.B. biometrische Identifizierung von natürlichen
            Perosnen, allgemeine und berufliche Bildung und Strafverfolgung. Der
            Einsatz von KI in diesem Zusammenhang muss laufend überwacht und das
            Risiko durch den Verantwortlichen abgeschätzt werden, um negative
            Konsequenzen für Person zu vermeiden.
          </p>
        </div>
      </div>
      <div className="w-full absolute top-[50%] bottom-[25%] z-20">
        <div
          className={`absolute top-0 left-0 w-full h-full ${styles.clip_triangle_3} flex items-end pb-3 hover:cursor-pointer`}
          onClick={() => handleClick(2)}
        >
          <h4 className="w-full h-full absolute top-0 bottom-0 left-0 right-[75%] pl-3 pb-2 flex items-end">
            Begrenztes Risiko
          </h4>
        </div>
        <div
          className={`absolute top-0 w-full h-full ${
            styles.clip_text_triangle_3
          } flex pl-[35%] justify-end items-end ${
            visibleText.includes(2) ? styles.show_text : ""
          }`}
        >
          <p className="p-[8px] text-end mb-0 smallTextSize">
            Hierunter fällt primär die generative KI. Hierbei handelt es sich um
            KI-Modelle, die Inhalte generieren können. Für diese gelten
            zusätzliche Transparenzanforderungen: Inhalt als KI-generiert
            ausweisen, Gestaltung der KI derart, dass illegale Inhalte nicht
            erzeugt werden können, Veröffentlichung von Zusammenfassungen
            urheberrechtlich geschützter Daten, die für das Training verwendet.
          </p>
        </div>
      </div>
      <div className="w-full h-[25%] absolute top-[75%] z-10">
        <div
          className={`absolute top-0 left-0 w-full h-full ${styles.clip_triangle_4} flex items-end pb-3 hover:cursor-pointer`}
          onClick={() => handleClick(3)}
        >
          <h4 className="w-full h-full absolute top-0 bottom-0 left-0 right-[75%] pl-3 pb-2 flex items-end">
            Minimales Risiko
          </h4>
        </div>
        <div
          className={`absolute top-0 w-full h-full ${
            styles.clip_text_triangle_4
          } flex pl-[40%] justify-end items-end ${
            visibleText.includes(3) ? styles.show_text : ""
          }`}
        >
          <p className="p-[8px] text-end mb-0 smallTextSize">
            Das KI-Gesetz erlaubt die freie Nutzung von KI mit minimalen Risiko.
            Dazu gehören Anwendungen wie KI-fähige Videospiele oder Spamfilter.
            Die überwiegende Mehrheit der derzeit in der EU eingesetzten
            KI-Systeme fällt in diese Kategorie.
          </p>
        </div>
      </div>
    </div>
  );
};
