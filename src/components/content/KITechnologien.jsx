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
        In diesem Modul steht die Verarbeitung von Informationen durch
        KI-Systeme im Mittelpunkt. Nachdem zuvor erläutert wurde, wie
        Informationen an KI-Systeme übermittelt werden, geht es nun darum, auf
        welche Weise diese Systeme die erhaltenen Daten verarbeiten.
      </p>

      <p>
        Im Zentrum des Moduls steht die Vorstellung verschiedener Lernarten, mit
        denen KI-Systeme trainiert werden können und die bestimmen, wie sie mit
        Informationen umgehen.
      </p>

      <p>
        Darüber hinaus werden in diesem Zusammenhang auch neuronale Netze sowie
        der Umgang mit Unsicherheiten und Fehlern während der
        Informationsverarbeitung thematisiert.
      </p>
    </section>,
    <section>
      <p>CARDS ZU EINZELNEN KAPITELN</p>
    </section>,
    <section>
      <p>
        Es gibt fünf Arten von Maschinellem Lernen. Welche dabei eingesetzt
        wird, hängt von der Aufgabenstellung un der Art der Daten ab die zur
        Verfügung stehen.
      </p>
      <p>GRAFIK MIT ARTEN</p>
      <p>Sachen zu einzelnen Begriffen</p>
    </section>,
    <section>
      <h2>Warum ist es wichtig, zu verstehen, wie Systeme angelernt werden?</h2>
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
