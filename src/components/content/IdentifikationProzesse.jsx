import { ReactComponent as imageElement } from "../../assets/icons/ux-placeholder.svg";
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
        Hier lernen Sie, wie Sie geeignete Prozesse für den Einsatz von
        KI-Systemen identifizieren können.
      </p>
    </section>,
  ],
};

const IdentifikationProzesse = {
  linkName: "identifikation-prozesse",
  name: "Identifikation passender Prozesse",
  moduleImage: imageElement,
  content: [Einleitung],
};

export default IdentifikationProzesse;
