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
        Dieses Modul gibt Einblicke in die Verarbeitungsprozesse von
        KI-Systemen, von der Datenanalyse bis hin zur Modellberechnung. Es wird
        erklärt, wie Algorithmen Daten verarbeiten, um Muster zu erkennen und
        Entscheidungen zu treffen.
      </p>
    </section>,
  ],
};

const Verarbeitung = {
  linkName: "verarbeitung",
  name: "Verarbeitung",
  moduleImage: ImageElement,
  content: [Einleitung],
};

export default Verarbeitung;
