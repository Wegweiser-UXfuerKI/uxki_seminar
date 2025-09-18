import ImageElement from "../../assets/icons/ux-bezogen.svg?react";
import { ChapterHeader } from "../3_organism/ChapterHeader";

const Einleitung = {
  linkName: "einleitung",
  name: "Einleitung",
  description:
    "Hier wird ein Überblick über die Relevanz nutzerzentrierter Gestaltung und den Zusammenhang von Mensch und Technologie gegeben.",
  content: [
    <ChapterHeader text={"Einleitung"} number={1} />,
    <section>
      <p>
        In diesem Modul werden zentrale Eigenschaften von KI-Systemen
        beleuchtet, die Einuss auf die User Experience haben. Dazu zählen
        Aspekte wie Transparenz, Erklärbarkeit und Vertrauenswürdigkeit, die bei
        der Gestaltung von KI-Anwendungen beachtet werden sollten. Anhand von
        Beispielen wird verdeutlicht, wie diese Eigenschaften die Interaktion
        zwischen Mensch und System prägen können.
      </p>
    </section>,
  ],
};

const Vertrauenswürdigkeit = {
  linkName: "vertrauenswuerdigkeit",
  name: "Vertrauenswürdigkeit",
  description:
    "Hier wird die Vetrauenswürdigkeit von KI-Systemen thematisiert.",
  content: [
    <ChapterHeader text={"Vertrauenswürdigkeit"} number={2} />,
    <section>
      <p></p>
    </section>,
  ],
};

const Transparenz = {
  linkName: "transparenz",
  name: "Transparenz",
  description: "Hier wird die Transparenz von KI-Systemen thematisiert.",
  content: [
    <ChapterHeader text={"Transparenz"} number={3} />,
    <section>
      <p></p>
    </section>,
  ],
};

const Erklärbarkeit = {
  linkName: "erklaerbarkeit",
  name: "Erklärbarkeit",
  description: "Hier wird die Erklärbarkeit von KI-Systemen thematisiert.",
  content: [
    <ChapterHeader text={"Erklärbarkeit"} number={4} />,
    <section>
      <p></p>
    </section>,
  ],
};

const Kontrollierbarkeit = {
  linkName: "kontrollierbarkeit",
  name: "Kontrollierbarkeit",
  description: "Hier wird die Kontrollierbarkeit von KI-Systemen thematisiert.",
  content: [
    <ChapterHeader text={"Kontrollierbarkeit"} number={5} />,
    <section>
      <p></p>
    </section>,
  ],
};

const MentaleModellkomplementarität = {
  linkName: "mentale-modellkomplementaritaet",
  name: "Mentale Modellkomplementarität",
  description:
    "Hier wird die Mentale Modellkomplementarität von KI-Systemen thematisiert.",
  content: [
    <ChapterHeader text={"Mentale Modellkomplementarität"} number={6} />,
    <section>
      <p></p>
    </section>,
  ],
};

const UXKIEigenschaften = {
  linkName: "gestaltungsziele-menschzentrierte-ki",
  name: "Gestaltungsziele für Menschzentrierte KI",
  moduleImage: ImageElement,
  content: [
    Einleitung,
    Vertrauenswürdigkeit,
    Transparenz,
    Erklärbarkeit,
    Kontrollierbarkeit,
    MentaleModellkomplementarität,
  ],
};

export default UXKIEigenschaften;
