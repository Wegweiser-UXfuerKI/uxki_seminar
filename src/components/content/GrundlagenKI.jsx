import ImageElement from "../../assets/icons/verarbeitung.svg?react";
import { ChapterHeader } from "../3_organism/ChapterHeader";

const Einleitung = {
  linkName: "einleitung",
  name: "Einleitung",
  description:
    "Hier wird ein Überblick über die die KI Technologien und deren Funktionsweise gegeben.",
  content: [
    <ChapterHeader text={"Einleitung"} number={1} />,
    <section>
      <p>
        Hier erfahren Sie, warum der Dateninput ein kritischer Faktor für die
        Entwicklung und Nutzung von KI-Systemen ist. Das Modul behandelt Themen
        wie Datenqualität, -auswahl und -vorverarbeitung sowie deren Einuss auf
        die Funktionalität und Fairness von KI-Anwendungen.
      </p>
    </section>,
  ],
};

const Input = {
  linkName: "input",
  name: "Input",
  description: "Hier wird der Input von KI-Systemen thematisiert.",
  content: [
    <ChapterHeader text={"Input"} number={2} />,
    <section>
      <p></p>
    </section>,
  ],
};

const Verarbeitung = {
  linkName: "verarbeitung",
  name: "Verarbeitung",
  description: "Hier wird die Verarbeitung bei KI-Systemen thematisiert.",
  content: [
    <ChapterHeader text={"Verarbeitung"} number={3} />,
    <section>
      <p></p>
    </section>,
  ],
};

const Output = {
  linkName: "output",
  name: "Output",
  description: "Hier wird der Output von KI-Systemen thematisiert.",
  content: [
    <ChapterHeader text={"Output"} number={4} />,
    <section>
      <p></p>
    </section>,
  ],
};

const LLM = {
  linkName: "llm",
  name: "LLMs",
  description: "Hier werden LLMs thematisiert.",
  content: [
    <ChapterHeader text={"LLMs"} number={5} />,
    <section>
      <p></p>
    </section>,
  ],
};

const Dateninput = {
  linkName: "ki-technologien-verstehen",
  name: "KI-Technologien verstehen",
  moduleImage: ImageElement,
  content: [Einleitung, Input, Verarbeitung, Output, LLM],
};

export default Dateninput;
