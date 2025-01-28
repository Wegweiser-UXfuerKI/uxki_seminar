import { ReactComponent as imageElement } from "../../assets/icons/ux-bezogen.svg";
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

const UXKIEigenschaften = {
  linkName: "ux-bezogene-ki-eigenschaften",
  name: "UX-bezogene KI-Eigenschaften",
  moduleImage: imageElement,
  content: [Einleitung],
};

export default UXKIEigenschaften;
