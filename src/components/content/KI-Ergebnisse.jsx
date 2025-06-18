import ImageElement from "../../assets/icons/ux-placeholder.svg?react";
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
        Im Fokus dieses Moduls steht die Darstellung und Bewertung der
        Ergebnisse, die von KI-Systemen generiert werden. Dabei wird gezeigt,
        wie Ergebnisse verständlich und nachvollziehbar präsentiert werden
        können, um die Akzeptanz bei den Nutzern zu fördern. Zusätzlich wird auf
        mögliche Herausforderungen wie Halluzinationen oder Verzerrungen
        eingegangen.
      </p>
    </section>,
  ],
};

const KIErgebnisse = {
  linkName: "ki-ergebnisse",
  name: "KI-Ergebnisse",
  moduleImage: ImageElement,
  content: [Einleitung],
};

export default KIErgebnisse;
