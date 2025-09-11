import ImageElement from "../../assets/icons/verarbeitung.svg?react";
import { ChapterHeader } from "../3_organism/ChapterHeader";

const Einleitung = {
  linkName: "einleitung",
  name: "Einführung",
  description:
    "Hier wird ein Überblick über die Relevanz nutzerzentrierter Gestaltung und den Zusammenhang von Mensch und Technologie gegeben.",
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

const Dateninput = {
  linkName: "grundlagen-ki",
  name: "Grundlagen von KI",
  moduleImage: ImageElement,
  content: [Einleitung],
};

export default Dateninput;
