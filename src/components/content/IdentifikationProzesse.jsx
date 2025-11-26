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
    <section>
      <p>Anderer Text</p>
    </section>,
  ],
};

const ZweitesKapitel = {
  linkName: "zweites-kapitel",
  name: "Zweites Kapitel",
  description:
    "Hier wird ein Überblick über Automatisierungspotenziale gegeben.",
  content: [
    <ChapterHeader text={"ZweitesKapitel"} number={1} />,
    <section>
      <p>
        Hier lernen Sie, wie Sie geeignete Prozesse für den Einsatz von
        KI-Systemen identifizieren können.
      </p>
    </section>,
    <section>
      <p>Anderer Text</p>
    </section>,
  ],
};

const IdentifikationProzesse = {
  linkName: "automatisierungspotenziale-erkennen",
  name: "Automatisierungspotenziale erkennen",
  moduleImage: ImageElement,
  content: [Einleitung, ZweitesKapitel],
};

export default IdentifikationProzesse;
