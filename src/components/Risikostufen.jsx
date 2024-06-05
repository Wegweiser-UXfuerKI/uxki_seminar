import React, { useEffect, useState } from "react";
import "./Risikostufen.css";

export const Risikostufen = () => {
  const [visibleText, setVisibleText] = useState([]);

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
      className="w-full h-full relative flex flex-col"
      style={{ borderRadius: "10px", overflow: "hidden" }}>
      <div className="w-full h-1/4 min-h-[150px] relative drop-shadow-xl">
        <div
          className="absolute top-0 left-0 w-full h-full clip-triangle-one flex items-end text-xl pl-[1%] pb-3 hover:cursor-pointer"
          onClick={() => handleClick(0)}>
          <div className="h-full absolute top-0 bottom-0 left-0 right-[80%] pr-5 pb-3 flex justify-end items-end text-xl">
            Unannehmbares Risiko
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full clip-text-triangle-one flex pl-[30%] text-base pt-3 pr-2 ${
            visibleText.includes(0) ? "show-text" : ""
          }`}>
          Bereiche, in denen KI als Bedrohung für Menschen wahrgenommen wird,
          sollen als unannehmbares Risiko klassifiziert werden. Hier ist der
          Einsatz von KI verboten. Hierbei handelt es sich um Bereiche, wie
          kognitive Verhaltensmanipulation und -steuerung, Social Scoring oder
          biometrische Fernidentifizierung in Echtzeit.
        </div>
      </div>
      {/* 
      <div className="trennbereich-one top-[25%]"></div>
        */}
      <div className="w-full h-1/2 min-h-[150px] relative drop-shadow-xl">
        <div
          className="absolute top-0 left-0 w-full h-full clip-triangle-two flex items-end pb-3 hover:cursor-pointer"
          onClick={() => handleClick(1)}>
          <div className="h-full absolute top-1 bottom-0 left-0 right-[75%] pr-5 pb-3 flex justify-end items-end text-xl">
            Hohes Risiko
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full clip-text-triangle-two flex pl-[35%] text-base pt-3 pr-2 ${
            visibleText.includes(1) ? "show-text" : ""
          }`}>
          Unterscheidung zwischen a) Einsatz in Geräten, die den europäischen
          Produktsicherheitsgesetzen unterliegen: Spielzeug, Luftfahrt und
          medizinishce Geräte, sowie b) KI-Systeme in sonstigen spezifischen
          Bereichen: z.B. biometrische Identifizierung von natürlichen Perosnen,
          allgemeine und berufliche Bildung und Strafverfolgung. Der Einsatz von
          KI in diesem Zusammenhang muss laufend überwacht und das Risiko durch
          den Verantwortlichen abgeschätzt werden, um negative Konsequenzen für
          Personen zu vermeiden.
        </div>
      </div>
      {/*
      <div className="trennbereich-two top-[50%]"></div>
      */}
      <div className="w-full h-1/4 min-h-[150px] relative drop-shadow-xl">
        <div
          className="absolute top-0 left-0 w-full h-full clip-triangle-three flex items-end pb-3 hover:cursor-pointer"
          onClick={() => handleClick(2)}>
          <div className="h-full absolute top-1 bottom-0 left-0 right-[70%] pr-5 pb-3 flex justify-end items-end text-xl">
            Begrenztes Risiko
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full clip-text-triangle-three flex pl-[40%] text-base pt-3 pr-2 ${
            visibleText.includes(2) ? "show-text" : ""
          }`}>
          Hierunter fällt primär die generative KI. Hierbei handelt es sich um
          KI-Modelle, die Inhalte generieren können. Für diese gelten
          zusätzliche Transparenzanforderungen: Inhalt als KI-generiert
          ausweisen, Gestaltung der KI derart, dass illegale Inhalte nicht
          erzeugt werden können, Veröffentlichung von Zusammenfassungen
          urheberrechtlich geschützter Daten, die für das Training verwendet.
        </div>
      </div>
      {/*
      <div className="trennbereich-three top-[75%]"></div>
      */}
      <div className="w-full h-1/4 min-h-[150px] relative drop-shadow-xl">
        <div
          className="absolute top-0 left-0 w-full h-full clip-triangle-four flex items-end pb-3 hover:cursor-pointer"
          onClick={() => handleClick(3)}>
          <div className="h-full absolute top-1 bottom-0 left-0 right-[65%] pr-5 pb-3 flex justify-end items-end text-xl text-lightText">
            Minimales Risiko
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full clip-text-triangle-four flex pl-[45%] text-base pt-3 pr-2 text-lightText ${
            visibleText.includes(3) ? "show-text" : ""
          }`}>
          Das KI-Gesetz erlaubt die freie Nutzung von KI mit minimalen Risiko.
          Dazu gehören Anwendungen wie KI-fähige Videospiele oder Spamfilter.
          Die überwiegende Mehrheit der derzeit in der EU eingesetzten
          KI-Systeme fällt in diese Kategorie.
        </div>
      </div>
    </div>
  );
};
