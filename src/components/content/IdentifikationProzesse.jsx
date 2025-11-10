import ImageElement from "../../assets/icons/automatisierungspotenziale.svg?react";
import { ChapterHeader } from "../3_organism/ChapterHeader";

const Einleitung = {
  linkName: "einleitung",
  name: "Einleitung",
  description:
    "Hier wird ein Überblick über Automatisierungspotenziale gegeben.",
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
  linkName: "automatisierungspotenziale-erkennen",
  name: "Automatisierungspotenziale erkennen",
  moduleImage: ImageElement,
  content: [Einleitung],
};

export default IdentifikationProzesse;
