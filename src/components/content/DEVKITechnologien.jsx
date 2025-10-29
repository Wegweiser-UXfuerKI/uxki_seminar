import ImageElement from "../../assets/icons/verarbeitung.svg?react";
import ThemeImage from "../1_elements/ThemeImage";
import { VideoContainer } from "../1_elements/VideoContainer";
import { ChapterHeader } from "../3_organism/ChapterHeader";
import { Table } from "../2_molecule/Table";
import List from "../2_molecule/List";
import Accordion from "../2_molecule/Accordion";
import SubNavigation from "../2_molecule/nav/SubNavigation";

import llm_dark from "../../assets/images/kiTechnologien/LLM-dark.png";
import llm_light from "../../assets/images/kiTechnologien/LLM-light.png";
import ArrowIcon from "../1_elements/ArrowIcon";
import { CarouselContainer } from "../3_organism/CarouselContainer";

const sectionsInputTechnik = [
  { id: "2", title: "Warum es wichtig ist, Daten zu verstehen" },
  { id: "3", title: "Was sind Daten und was nicht?" },
  {
    id: "4",
    title:
      "Wie müssen Daten gestaltet sein, um von KI-Systemen genutzt zu werden?",
  },
  { id: "5", title: "Möglichkeiten der Kategorisierung von Daten" },
  { id: "6", title: "Datenqualität" },
  {
    id: "7",
    title:
      "Beziehungen zwischen Daten: Abhängigkeiten, Korrelationen und Kausalität",
  },
  {
    id: "8",
    title: "Bias: Wenn Daten ein verzerrtes Bild der Realität zeigen",
  },
];

const InputTechnik = {
  linkName: "input-technik",
  name: "Input - Technische Grundlagen",
  description:
    "Hier wird der Input von KI-Systemen auf einer technischen Ebene thematisiert.",
  content: [
    <ChapterHeader text={"Input - Technische Grundlage"} number={2} />,
    <section>
      <Accordion sections={sectionsInputTechnik} />
      <SubNavigation sections={sectionsInputTechnik} />
      <h2>1. Einleitung: Warum es wichtig ist, Daten zu verstehen</h2>
      <p>
        Wer mit KI-Systemen arbeitet, arbeitet immer auch mit Daten. Ob ein
        Chatbot Anfragen von Bürger:innen beantwortet, eine KI eingereichte
        Anträge prüft oder ein Analyse-Tool soziale Trends erkennen soll - der
        Ausgangspunkt all dieser Systeme sind Daten. Doch was genau sind
        eigentlich &bdquo;Daten&ldquo;? Und warum ist es so entscheidend, ihre
        Struktur, Herkunft und Qualität zu verstehen, bevor sie in ein KI-System
        eingespeist werden?
      </p>
      <p>
        In gemeinwohlorientierten Organisationen wird KI oft eingesetzt, um
        Prozesse zu entlasten, Zugänge zu erleichtern oder faire Entscheidungen
        zu unterstützen. Aber ohne Verständnis dafür, was in ein System
        hineingeht, bleibt unklar, wie man seine Ergebnisse bewerten oder
        verbessern kann. <b>Input verstehen heißt, Daten verstehen</b>.
      </p>
    </section>,
    <section>
      <h2>2. Was sind Daten und was nicht?</h2>
      <p>
        Daten sind zunächst nur Zeichen, Zahlen oder Symbole, die etwas in der
        Welt abbilden. Erst durch Interpretation, also durch das Einordnen
        dieser Zeichen in einen Kontext, entsteht Bedeutung.
      </p>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover">
        <h4>Vom Zeichen zum Wissen</h4>
        <p className="mt-[var(--scale5)]">
          <b>Zeichen</b>: Einzelne Symbole oder Werte (z.B. &bdquo;25&ldquo;,
          &bdquo;grün&ldquo;, &bdquo;Ja&ldquo;).
        </p>
        <p className="w-full text-center flex justify-center">
          <ArrowIcon direction="down" style={{ fill: "var(--text)" }} />
        </p>
        <p>
          <b>Daten</b>: Zeichen, die Systematisch erfasst wurden (z.B. &bdquo;25
          Jahre alt&ldquo;, &bdquo;grüne Ampel&ldquo;, &bdquo;Ja/Nein
          Antwort&ldquo;).
        </p>
        <p className="w-full text-center flex justify-center">
          <ArrowIcon direction="down" style={{ fill: "var(--text)" }} />
        </p>
        <p>
          <b>Information</b>: Bedeutung, die sich aus Daten in einem bestimmten
          Kontext ergbnit (z.B. &bdquo;Die Person ist 25 Jahre alt&ldquo;).
        </p>
        <p className="w-full text-center flex justify-center">
          <ArrowIcon direction="down" style={{ fill: "var(--text)" }} />
        </p>
        <p>
          <b>Wissen</b>: Das Verständnis, wie diese Information einzuordnen ist
          (&bdquo;Menschen zwischen 18 und 30 gelten hier als junge
          Erwachsene&ldquo;).
        </p>
      </div>
      <p>
        In der Praxis bedeutet das: Wenn eine KI Informationen zu eingereichten
        Förderanträgen verarbeitet, arbeitet sie nicht mit Wissen, sondern mit
        Daten - etwa Texten, Zahlenfeldern oder Kategorien. Das Wissen, wie
        diese zu interpretieren sind, liegt beim Menschen oder in den Regeln,
        mit denen das KI-System trainiert wurde.
      </p>
    </section>,
    <section>
      <h2>
        3. Wie müssen Daten gestaltet sein, um von KI-Systemen genutzt zu
        werden?
      </h2>
      <p>
        KI-Systeme können nur so gut arbeiten, wie die Daten es zulassen. Damit
        ein System Daten verarbeiten kann, müssen diese in einer bestimmten
        Struktur und einem Format vorliegen.
      </p>
      <Accordion title="Ein Beispiel dazu:" initiallyOpen={false}>
        <p>
          Ein Chatbot, der Fragen von Bürger:innen beantworten soll, braucht
          strukturierte Eingabedaten - etwa eine Liste häufiger Fragen und
          zugehöriger Antworten. Freitexte aus E-Mails oder Formularen müssen
          zuvor aufbereitet werden, damit die KI sie versteht.
        </p>
      </Accordion>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover">
        <h4>Datenstrukturen und -formate</h4>
        <p className="mt-[var(--scale5)]">
          <b>Strukturierte Daten</b>: Klar definierte Spalten, Werte und
          Datentypen (z.B. Tabellen, Datenbanken).
        </p>
        <p>
          <b>Unstrukturierte Daten</b>: Texte, Bilder, Audiodateien, PDFs - also
          Informationen ohne feste Ordnung.
        </p>
        <p>
          <b>Halbstrukturierte Daten</b>: Mischformen wie JSON oder XML, die
          Strukturmerkmale enthalten, aber flexibel bleiben.
        </p>
      </div>
      <p>
        Viele gemeinwohlorientierte Organisationen arbeiten in ihrem Alltag
        überwiegend mit unstrukturierten Daten - etwa Antragsdokumenten,
        Berichten oder selbsterstellten Dokumenten mit Freitextantworten.
      </p>
      <p className="specialText">
        Diese unstrukturierten Daten können wertvoll sein, müssen aber in
        strukturierte oder maschinenlesbare Form gebracht werden, bevor sie als
        Input für eingesetzte KI-Systeme dienen können.
      </p>
    </section>,
    <section>
      <h2>4. Möglichkeiten der Kategorisierung von Daten</h2>
      <p>
        Um zu verstehen, welche Art von Daten man einem KI-System zur Verfügung
        stellt, ist es hilfreich, Daten nach bestimmten Kriterien zu{" "}
        <b>kategorisieren</b>. Diese Kategorisierungen helfen dabei
        einzuschätzen, ob Daten geeignet sind, welche Form der Aufbereitung sie
        benötigen und welche Schlussfolgerungen sich später aus ihnen ziehen
        lassen.
      </p>
      <p>
        Ein erster Aspekt betrifft die <b>Syntax</b> - also die formale Struktur
        der Daten. Syntax beschreibt, in welcher Form ein Wert vorliegt: als
        Zahl, Text, Kategorie oder Wahr/Falsch-Angabe. Diese Unterscheidung ist
        entscheidend, weil viele KI-Modelle bestimmte Formate erwarten. Ein Text
        wie &bdquo;Ja&ldquo; oder &bdquo;Nein&ldquo; muss etwa in 0/1-Werte
        umgewandelt werden, wenn das System nur mit numerischen Eingaben
        arbeiten kann.
      </p>
      <p>
        Darüber hinaus spielt die <b>Erscheinung oder Form</b> der Daten eine
        Rolle. Damit ist gemeint, wie die Daten erfasst oder dargestellt sind -
        etwa als Antwortfeld in einem Formular, als Sensormessung oder als
        Fließtext in einem Bericht. Diese Form bestimmt häufig, wie leicht oder
        schwer Daten automatisiert weiterverarbeitet werden können. Während eine
        standardisierte Eingabemaske klare Werte liefert, sind handgeschriebene
        Dokumente oder unstrukturierte E-Mails für eine KI nur schwer zu deuten.
      </p>
      <p>
        Ein weiterer wichtiger Aspekt ist der <b>zeitliche Bezug</b> der Daten.
        Daten sind Momentaufnahmen einer bestimmten Realität, die sich mit der
        Zeit verändern kann. Angaben zu Einkommensverhältnissen,
        Bevölkerungsdaten oder Nutzungszahlen können nach einigen Monaten oder
        Jahren bereits veraltet sein. Wenn eine KI also auf Basis alter Daten
        trainiert wurde, spiegelt sie möglicherweise eine Realität wider, die so
        gar nicht mehr existiert.
      </p>
      <p>
        Daten lassen sich außerdem nach ihrem Skalenniveau unterscheiden - also
        danach, wie genau sie messbar sind.
      </p>
      <ul>
        <li>
          Nominale Daten (z.B. &bdquo;Farbe der Karte&ldquo;) lassen sich nicht
          in einer Rangfolge bringen.
        </li>
        <li>
          Ordinale Daten (z.B. &bdquo;Zufriedenheit: niedrig - mittel -
          hoch&ldquo;) hingegen schon.
        </li>
        <li>
          Intervall- und Rationskalen (z.B. Temperatur ind °C oder Einkommen in
          Euro) ermöglichen präzise mathematische Berechnungen.
        </li>
      </ul>
      <p>
        Das richtige Verständnis dieser Unterschiede ist essenziell, weil sie
        bestimmen, welche statistischen Verfahren und KI-Modelle überhaupt
        sinnvoll angewendet werden können.
      </p>
      <p>
        Schließlich ist auch der <b>Datentyp</b> selbst von Bedeutung. Ein
        Datentyp legt fest, ob eine Information als Zahl, Text, boolescher Wert
        (wahr/falsch) oder komplexere Struktur vorliegt. Ein scheinbar einfacher
        Unterschied - etwa zwischen einer Zahl, die als Text gespeichert wurde
        (&bdquo;15&ldquo;), und einer echten numerischen Variable - kann bei der
        Verarbeitung durch eine KI große Auswirkungen haben.
      </p>
      <p>
        In der Praxis ist es hilfreich, diese verschiedenen Kategorien im Blick
        zu behalten. Wer etwa in einer Organisation arbeitet, die mithilfe von
        KI eingereichte Förderanträge analysiert, sollte sich fragen:
      </p>
      <ul>
        <li>
          Sind die Eingabefelder in den Formularen konsistent aufgebaut
          (Syntax)?
        </li>
        <li>
          Liegen die Anträge in digitaler oder gescannter Form vor
          (Erscheinung)?
        </li>
        <li>
          Beziehen sich die Daten auf aktuelle oder ältere Förderperioden
          (zeitlicher Bezug)?
        </li>
        <li>
          Sind die Bewertungskategorien der Gutachter*innen ordinal oder
          numerisch (Skalenniveau)?
        </li>
        <li>
          Und schließlich: Sind die einzelnen Werte korrekt als Text oder Zahl
          gespeichert (Datentyp)?
        </li>
      </ul>
      <p>
        Erst wenn diese Grundlagen verstanden und überprüft sind, kann ein
        KI-System sinnvoll mit den Daten arbeiten und die Organisation
        sicherstellen, dass die Ergebnisse nachvollziehbar und belastbar
        bleiben.
      </p>
    </section>,
    <section>
      <h2>5. Datenqualität</h2>
      <p>
        Viele Probleme in KI-Projekten entstehen nicht durch den Algorithmus,
        sondern durch <b>mangelhafte Datenqualität</b> mit der das KI-Tool
        arbeitet. Grund dafür können bspw. menschliche Fehler bei der Eingabe,
        unklare oder nicht vorhandene Standardisierung oder Umbrüche zwischen
        verschiedenen technischen Systemen sein.
      </p>
      <h4>Vier zentrale Qualitätsmerkmale</h4>
      <ul>
        <li>
          <b>Vollständigkeit</b>: Sind alle notwendigen Informationen vorhanden?
        </li>
        <li>
          <b>Genauigkeit</b>: Sind die Daten korrekt und überprüfbar?
        </li>
        <li>
          <b>Konsistenz</b>: Stimmen Daten innerhalb eines Systems überein (z.B.
          gleiche Schreibweisen, gleiche Einheiten)?
        </li>
        <li>
          <b>Aktualität</b>: Sind die Daten noch relevant oder bereits veraltet?
        </li>
      </ul>
      <Accordion title="Ein Beispiel dazu:" initiallyOpen={false}>
        <p>
          Eine Organisation möchte mithilfe von KI prüfen, ob Förderanträge
          vollständig ausgefüllt sind. Wenn jedoch alte Formulare im Umlauf sind
          oder Einträge unterschiedlich benannt wurden (&bdquo;Straße&ldquo; vs.
          &bdquo;Str.&ldquo;), kann die KI falsche Lücken oder Dubletten
          erkennen und so zusätzliche Arbeit für Mitarbeitende erzeugen, die
          diese falschen Positive dann händisch filtern müssen.
        </p>
      </Accordion>
    </section>,
    <section>
      <h2>
        6. Beziehungen zwischen Daten: Abhängigkeiten, Korrelationen und
        Kausalität
      </h2>
      <p>
        KI-Systeme analysieren Daten nicht isoliert, sondern immer in ihren{" "}
        <b>Beziehungen zueinander</b>. Diese Beziehungen zu verstehen ist
        zentral, um beurteilen zu können,{" "}
        <b>
          was eine KI tatsächlich erkennt - und was sie nur zu erkennen scheint
        </b>
        .
      </p>
      <p>
        Zunächst lohnt sich ein Blick auf den Unterschied zwischen{" "}
        <b>abhängigen</b> und <b>unabhängigen Variablen</b>. Eine unabhängige
        Variable ist ein Faktor, der andere Werte beeinflussen kann, während
        eine abhängige Variable das Ergebnis oder die Reaktion auf diesen
        Einfluss darstellt.
        <br />
        Ein einfaches Beispiel: Wenn eine Organisation untersucht, ob das
        Einkommen einer Person (unabhängige Variable) beeinflusst, ob sie
        finanzielle Unterstützung beantragt (abhängige Variable), dann kann eine
        KI diese Beziehung nur dann korrekt erkennen, wenn beide Variablen klar
        definiert und sauber erfasst sind.
      </p>
      <p>
        Solche Zusammenhänge bilden die Grundlage vieler KI-Modelle. Doch
        wichtig ist:{" "}
        <b>
          Eine statistische Beziehung bedeutet nicht automatisch, dass ein
          echter ursächlicher Zusammenhang besteht
        </b>
        . KI-Systeme identifizieren häufig <b>Korrelationen</b>, also
        gleichzeitige Muster oder Bewegungen in den Daten, ohne zu verstehen,{" "}
        <b>warum</b> sie auftreten. Kausalität hingegen beschreibt, dass eine
        Veränderung in einer Variablen tatsächlich eine Veränderung in einer
        anderen verursacht.
      </p>
      <p>
        Ein klassisches Beispiel verdeutlicht das: Wenn eine KI in Daten
        erkennt, dass in Monaten mit höherem Eisverkauf auch mehr Badeunfälle
        gemeldet werden, besteht zwar eine Korrelation, aber keine Kausalität.
        Der eigentliche Grund liegt in einer dritten Variable - dem warmen
        Wetter, das sowohl den Eisverkauf als auch die Zahl der Badeunfälle
        beeinflusst.
      </p>
      <p>
        In gemeinwohlorientierten Projekten kann ein ähnliches Risiko auftreten.
        Eine KI, die Bürger:innenanfragen auswertet, könnte feststellen, dass
        bestimmte Stadtteile häufiger Beschwerden einreichen. Ohne Kontext
        könnte dies fälschlicherweise als &bdquo;höhere Unzufriedenheit&ldquo;
        interpretiert werden - dabei könnten schlicht{" "}
        <b>unterschiedliche Kommunikationswege</b> oder
        <b>bessere digitale Zugänge</b> die Ursache sein.
      </p>
      <p>Wer mit KI arbeitet, sollte daher immer fragen:</p>
      <ul>
        <li>
          Welche Variablen hängen logisch miteinander zusammen und welche nur
          zufällig?
        </li>
        <li>
          Welche Faktoren könnten im Hintergrund wirken, ohne in den Daten
          sichtbar zu sein?
        </li>
        <li>
          Und wie sicher kann ich sein, dass ein Muster tatsächlich eine
          Ursache-Wirkung-Beziehung darstellt?
        </li>
      </ul>
      <p className="specialText">
        Ein KI-System kann Muster sichtbar machen - aber die{" "}
        <b>Interpretation dieser Muster bleibt menschliche Aufgabe</b>.
      </p>
    </section>,
    <section>
      <h2>7. Bias: Wenn Daten ein verzerrtes Bild der Realität zeigen</h2>
      <p>
        Ein weiteres zentrales Thema im Umgang mit Daten für KI-Systeme ist{" "}
        <b>Bias</b>, also eine <b>Verzerrung oder Schieflage in den Daten</b>.
        Biases sind nicht immer auf den ersten Blick erkennbar, können aber
        große Auswirkungen auf die wahrgenommene Fairness, Zuverlässigkeit und
        Akzeptanz eines KI-Systems haben.
      </p>
      <p>
        Im Kern entsteht ein Bias dann, wenn die Daten, mit denen ein System
        trainiert oder gefüttert wird,{" "}
        <b>
          nicht die tatsächliche Vielfalt oder Verteilung der Realität
          widerspiegeln
        </b>
        . Die KI &bdquo;lernt&ldquo; dann ein einseitiges Bild - und
        reproduziert es bei jeder Entscheidung oder Empfehlung.
      </p>
      <Accordion title="Beispiel:" initiallyOpen={false}>
        <p>
          Eine gemeinnützige Organisation möchte eine KI einsetzen, um
          Bewerbungen für ehrenamtliche Positionen zu bewerten. Die
          Trainingsdaten stammen aus früheren Jahren, in denen vor allem junge
          Menschen aus Großstädten teilgenommen haben. Wenn die KI aus diesen
          Daten lernt, könnte sie Bewerbungen von älteren Personen oder aus
          ländlichen Regionen unbewusst schlechter bewerten, weil sie im
          bisherigen Datensatz unterrepräsentiert waren.
        </p>
      </Accordion>
      <p style={{ marginBottom: 0, marginTop: "var(--scale5)" }}>
        Man unterscheidet dabei zwei grundsätzliche Arten, wie ein Bias
        entstehen kann:
      </p>
      <div className="max-w-[960px] mx-auto">
        <CarouselContainer sideVisibility={10}>
          <div
            title="Falsche Abbildung der Realität"
            className="rounded-xl p-[var(--scale2)] h-full shadow no-hover">
            <h4>Falsche Abbildung der Realität</h4>
            <p>
              Hier sind die Daten schlicht{" "}
              <b>fehlerhaft, unvollständig oder falsch erhoben</b>. Vielleicht
              wurden bestimmte Gruppen gar nicht befragt, Datensätze
              ungleichmäßig aktualisiert oder Eingabefehler nie korrigiert. Ein
              Chatbot, der Anfragen von Bürger:innen beantwortet, könnte etwa
              eine Schieflage aufweisen, wenn die zugrunde liegenden
              Textbeispiele überwiegend aus einer bestimmten Altersgruppe
              stammen.
            </p>
          </div>
          <div
            title="Abbildung einer ungleichen Realität"
            className="rounded-xl p-[var(--scale2)] h-full shadow no-hover">
            <h4>Abbildung einer ungleichen Realität</h4>
            <p>
              In diesem Fall spiegeln die Daten die reale Welt korrekt wider -
              doch diese Welt ist selbst <b>ungleich oder diskriminierend</b>.
              Wenn eine KI beispielsweise historische Personaldaten analysiert,
              in denen Männer häufiger Führungspositionen innehatten, dann
              &bdquo;lernt&ldquo; sie diese Ungleichheit mit, selbst wenn
              niemand sie absichtlich eingebaut hat. Sie läuft so Gefahr, diese
              Ungleichheit zu reproduzieren.
            </p>
          </div>
        </CarouselContainer>
      </div>
      <p>
        Bias ist deshalb nicht nur ein technisches, sondern vor allem ein{" "}
        <b>gesellschaftliches Problem</b>, das sich in die Technologie
        einschreibt. In gemeinwohlorientierten Projekten ist der Umgang damit
        besonders wichtig, weil Entscheidungen hier direkt über{" "}
        <b>Zugang zu Unterstützung, Sichtbarkeit oder Teilhabe</b> entscheiden
        können.
      </p>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover">
        <h4>Leitfragen zum Erkennen von Bias</h4>
        <p className="mt-[var(--scale5)]">
          Wer oder was ist in den Daten <b>überrepräsentiert</b>?
        </p>
        <p>
          Wer oder was <b>kommt kaum oder gar nicht vor</b>?
        </p>
        <p>
          Welche historischen oder strukturellen Ungleichheiten könnten sich in
          den genutzten Daten widerspiegeln?
        </p>
        <p>
          Welche Werte oder Annahmen liegen in der Datenerhebung selbst
          verborgen (z.B. Sprache, Begrifflichkeiten, Klassifikationen)?
        </p>
      </div>
      <p>
        Bias lässt sich nie vollständig vermeiden - aber er lässt sich erkennen,
        benennen und abmildern.
        <br />
        Dazu gehört, die Herkunft und Zusammensetzung der Daten kritisch zu
        prüfen, verschiedene Perspektiven in die Entwicklung einzubeziehen und
        den Kontext der Datennutzung offenzulegen.Gerade für Organisationen, die
        im Dienst des Gemeinwohls arbeiten, ist dies ein entscheidender Schritt,
        um sicherzustellen, dass KI-Systeme nicht unbeabsichtigt bestehende
        Ungleichheiten fortschreiben, sondern dazu beitragen,{" "}
        <b>fairere und inklusivere Entscheidungsprozesse</b> zu fördern.
      </p>
    </section>,
  ],
};

const InputInformation = {
  linkName: "input-integrierte-informationsverarbeitung",
  name: "Input - Integrierte Informationsverarbeitung",
  description: "Wie werden Informationen als Input genutzt?",
  content: [
    <ChapterHeader
      text={"Input - Integrierte Informationsverarbeitung"}
      number={3}
    />,
    <section>
      <p></p>
    </section>,
  ],
};

const sectionsVerarbeitungTechnik = [
  { id: "2", title: "Überwachtes Lernen" },
  { id: "3", title: "Unüberwachtes Lernen" },
  { id: "4", title: "Bestärkendes Lernen" },
  { id: "5", title: "Neuronale Netze" },
];

const ueberwachtesLernenTable = [
  [<b>Overfitting</b>, <b>Underfitting</b>],
  [
    "Das Modell lernt die Trainingsdaten zu genau, erkennt keine allgemeinen Muster. Es liefert sehr gute Ergebnisse bei Trainingsdaten, aber schlechte Vorhersagen bei neuen Daten.",
    "Das Modell erkennt die Zusammenhänge in den Daten nicht ausreichend und liefert ungenaue Vorhersagen, auch bei Trainingsdaten.",
  ],
  [
    "Beispiel: Ein Modell wurde nur mit Daten älterer Menschen trainiert und liefert für jüngere Menschen ungenaue Vorhersagen.",
    "Beispiel: Eine KI zur Spam-Erkennung, die nur kurze Texte als Spam markiert, ignoriert andere wichtige Merkmale wie Schreibweisen oder Handlungsaufforderungen.",
  ],
];

const neuronTable = [
  [<b>Menschliches Neuron</b>, <b>Künstliches Neuron</b>],
  [
    "Ein biologisches Neuron reagiert auf einen Reiz.",
    <>
      Ein künstliches Neuron funktioniert nach dem Prinzip: <b>Input</b> &rarr;{" "}
      <b>Verarbeitung</b> &rarr; <b>Output</b>. Die eingehenden Informationen
      werden mathematisch verrechnet und führen zu einem Ergebnis.
    </>,
  ],
  [
    <>
      <b>Beispiel</b>: Man sieht eine bekannte Person (Stimulus) und reagiert
      darauf, indem man sie grüßt (Reaktion)
    </>,
    <>
      <b>Beispiel</b>: Ein künstliches Neuron bekommt Bilddaten als Input. Nach
      der Verarbeitung &bdquo;entscheidet&ldquo; es, ob auf dem Bild eine Katze
      oder ein Hund zu sehen ist.
    </>,
  ],
];

const architecturTable = [
  [<b>Architektur</b>, <b>Kurzbeschreibung</b>, <b>Anwendungsbeispiel</b>],
  [
    <b>CNN (Convolutionale Neural Network)</b>,
    <>
      Spezialisiert auf Erkennung von Mustern in Bildern; nutzt Filter und
      Faltungen.
    </>,
    <>Bilderkennung, z.B. handschriftliche Schrift</>,
  ],
  [
    <b>RNN (Recurrent Neural Network)</b>,
    <>
      Verarbeitet Sequenzen, speichert Informationen über vorherige Schritte.
    </>,
    <>Textverarbeitung, Vorhersagen bei Zeitreihen</>,
  ],
  [
    <b>LSTM (Long Short Term Memory)</b>,
    <>Erweiterung von RNNs; kann sich über lange Zeiträume erinnern.</>,
    <>Sprachverarbeitung, komplexe Zeitreihenanalysen</>,
  ],
  [
    <b>DNN (Deep Neural Network)</b>,
    <>
      Tiefe Netzwerke mit vielen Hidden Layers; erkennt komplexe Zusammenhänge.
    </>,
    <>Alle Bereiche, z.B. Bilderkennung, Sprachmodelle, Vorhersagen</>,
  ],
];

const VerarbeitungTechnik = {
  linkName: "verarbeitung-technik",
  name: "Verarbeitung - Technische Grundlagen",
  description: "Hier wird die Verarbeitung bei KI-Systemen thematisiert.",
  content: [
    <ChapterHeader text={"Verarbeitung - Technische Grundlagen"} number={4} />,
    <section>
      <p>
        Auf technischer Ebene kann beim Verarbeiten zwischen unterschiedlichen
        Varianten unterschieden werden. Diese werden im folgenden betrachtet.
      </p>
      <Accordion sections={sectionsVerarbeitungTechnik} />
      <SubNavigation sections={sectionsVerarbeitungTechnik} />
    </section>,
    <section>
      <h2>Überwachtes Lernen</h2>
      <p>
        Ein Verfahren des maschinellen Lernens, bei dem ein System anhand von
        gelabelten Daten trainiert wird, um später neue Eingaben korrekt zu
        klassifizieren oder Vorhersagen über Zahlenwerte zu treffen.
      </p>
      <h3>1. Einführung in das überwachte Lernen</h3>
      {/* p mit Rückbezug warum lernen wichtig ist */}
      <h4>Was ist überwachtes Lernen?</h4>
      <p>
        Überwachtes Lernen (engl.: supervised learning) ist eine Methode des
        maschinellen Lernens, bei der ein System anhand von gelabelten Daten
        trainiert wird. Das bedeutet: Für jede Eingabe gibt es ein bekanntes
        Ergebnis, das als Orientierung dient.
      </p>
      <Accordion title="Beispiel:" initiallyOpen={false}>
        <p>
          Stellen Sie sich vor, wir möchten ein System trainieren,
          handschriftliche Buchstaben zu erkennen. Jede Buchstabendarstellung im
          Datensatz ist bereits mit dem richtigen Buchstaben <b>labelt</b>, also
          beschriftet. Das System lernt so, die Muster der Buchstaben zu
          erkennen.
        </p>
      </Accordion>
      <h3>2. Wichtige Bestandteile des Lernprozesses</h3>
      <p>
        Beim überwachten Lernen spielen zwei zentrale Aspekte eine wichtige
        Rolle: Labels (also die Zielwerte) und die Aufteilung des Datensatzes in
        verschiedene Teile.
      </p>
      <h4>1. Labels - die &bdquo;richtigen Antworten&ldquo;</h4>
      <p>
        Labels sind die Ergebnisse oder Kategorien, die wir unseren Eingaben
        (den sogenannten Features) zuordnen.
      </p>
      <p>
        <b>Beispiel Bilderkennung</b>: Wenn wir ein Foto von einem
        Verkehrsschild in ein System eingeben, dann ist das passende Label z. B.
        &bdquo;Stoppschild&ldquo; oder &bdquo;Geschwindigkeitsbegrenzung 50
        km/h&ldquo;. Die Aufgabe des Modells besteht darin, die Eingabe (das
        Foto) mit dem richtigen Ausgabewert (dem Label) zu verknüpfen.
      </p>
      <p>
        <b>Einfache Ja/Nein-Fragen</b>: Manchmal ist die Klassifikation binär.
        Wir möchten ein System trainieren, das entscheidet, ob eine Person für
        einen Kredit geeignet ist (Ja) oder nicht (Nein). Dazu nutzen wir einen
        Datensatz mit vielen Finanzinformationen (z. B. Einkommen, Schulden,
        Zahlungsverhalten). Das System lernt dann, welche dieser Merkmale
        entscheidend für die Kreditwürdigkeit sind.
      </p>
      <p>
        Ohne Labels kann das Modell nicht lernen, ob seine Vorhersagen korrekt
        sind. Sie sind sozusagen die &bdquo;Lösungsschablonen&ldquo;, an denen
        das Modell sein Wissen überprüft.
      </p>
      <h4>2. Aufteilung des Datensatzes - Trainieren und Testen</h4>
      <p>
        Damit das Modell nicht nur die vorhandenen Daten auswendig lernt,
        sondern allgemein gültige Regeln erkennt und Fehler frühzeitig
        identifiziert werden, wird der Datensatz in verschiedene Teile
        aufgeteilt:
      </p>
      <p>
        <b>Trainingsdaten</b>: Dies ist der größte Teil des Datensatzes. Das
        Modell &bdquo;sieht&ldquo; diese Daten während der Trainingsphase und
        versucht, Muster darin zu erkennen.
      </p>
      <p>
        <b>Testdaten</b>: Dieser Teil wird während des Trainings nicht
        verwendet. Erst wenn das Modell fertig trainiert ist, werden die
        Testdaten eingesetzt, um zu überprüfen, wie gut das Modell mit neuen,
        unbekannten Daten zurechtkommt. So können wir feststellen, ob das Modell
        wirklich gelernt hat oder ob es sich nur die Trainingsbeispiele
        &bdquo;gemerkt&ldquo; hat.
      </p>
      <p>
        In vielen Fällen wird zusätzlich noch ein Validierungsdatensatz genutzt,
        mit dem die Zwischenergebnisse während des Trainings kontrolliert
        werden.
      </p>
      <p>
        <b>Beispiel</b>: Bei einem Fruchtbilder-System lernt das Modell an den
        Trainingsbildern (&bdquo;Apfel&ldquo;, &bdquo;Birne&ldquo;,
        &bdquo;Banane&ldquo;) und wird anschließend mit den Testbildern geprüft,
        ob es neue Früchte korrekt erkennt.
      </p>
      <h3>3. Anwendungsbeispiele des überwachten Lernens</h3>
      <p>
        Beim überwachten Lernen gibt es zwei zentrale Anwendungsarten:{" "}
        <b>Klassifikation</b> und <b>Regression</b>.
      </p>
      {/* Grafik klassifikation vs regression */}
      <h4>Klassifikation - Daten in Kategorien einordnen</h4>
      <p>
        Bei der Klassifikation werden Eingaben bestimmten Kategorien zugeordnet.
      </p>
      <ul>
        <li>
          Beispiel Bilderkennung: Ein Bild wird automatisch als
          &bdquo;Birne&ldquo; oder &bdquo;Blume&ldquo; erkannt.
        </li>
        <li>
          Beispiel Bewertung: Ein System kann Tests oder Aufgaben daraufhin
          beurteilen, ob sie &bdquo;vollständig&ldquo; oder
          &bdquo;unvollständig&ldquo; sind.
        </li>
      </ul>
      <p>
        Das Ziel ist es also, qualitative Unterschiede zu erkennen und Daten in
        klar definierte Gruppen einzuordnen. Beim überwachten Lernen werden
        diese Klassifikationsregeln nicht von Hand aufgeschrieben. Stattdessen
        stellt der Mensch eine Reihe von Beispielen mit den richtigen Labels
        bereit. Das Modell lernt anhand dieser Beispiele, wie es selbstständig
        auch neue Daten richtig kategorisieren kann. Der Mensch, der die Labels
        liefert, fungiert dabei gewissermaßen als &bdquo;Aufsichtsperson&ldquo;,
        die den Algorithmus in die richtige Richtung lenkt.
      </p>
      <Accordion
        title="Beispiel: Nächste-Nachbarn-Klassifikator"
        initiallyOpen={false}>
        <p>
          Der Nächste-Nachbarn-Klassifikator ist einer der einfachsten
          Klassifikatoren. Er ordnet ein neues Objekt der Klasse des ähnlichsten
          Objekts aus den Trainingsdaten zu. Dabei wird keine komplexe Regel
          berechnet - die Vorhersage basiert allein auf der Ähnlichkeit zu
          bekannten Beispielen. Klassifikatoren werden generell eingesetzt, um
          Objekte in vordefinierte Kategorien einzuordnen, zum Beispiel zur
          Einteilung von E-Mails in „Spam“ oder „Nicht-Spam“ oder zur Erkennung
          von Bildinhalten. Ein typisches Beispiel für die Anwendung der
          Nächste-Nachbarn-Methode ist die Vorhersage von Nutzerverhalten in
          KI-Applikationen wie Empfehlungssystemen. Wer tiefer einsteigen
          möchte, findet im Kurs Elements of AI weiterführende Informationen:{" "}
          <a
            href="https://course.elementsofai.com/de/4/2"
            target="_blank"
            rel="noopener noreferrer">
            Elements of AI - Der Nächste-Nachbarn-Klassifikator
          </a>
          .
        </p>
      </Accordion>
      <h4>Regression - Vorhersage von Zahlenwerten</h4>
      <p>
        Während es bei der Klassifikation um Kategorien geht, beschäftigt sich
        die <b>Regression</b> mit der Vorhersage{" "}
        <b>kontinuierlicher Zahlenwerte</b>, auch von Regressionsproblemen.
        Statt Labels wie &bdquo;Apfel&ldquo; oder &bdquo;Banane&ldquo; wird also
        eine Zahl vorhergesagt, die möglichst nahe am realen Wert liegt.
      </p>
      <p>
        Besonders wichtig ist dabei, dass die Vorhersage meist nicht von einer
        einzelnen Einflussgröße, sondern vom Zusammenspiel mehrerer Variablen
        abhängt. Die Regression untersucht also, wie unterschiedliche Faktoren
        gemeinsam auf die Zielgröße wirken.
      </p>
      <p>
        <b>Beispiele</b>:
      </p>
      <ul>
        <li>
          <b>Einkommen</b>: Schätzung des Gehalts einer Person auf Basis von
          Alter, Ausbildung, Berufserfahrung und Branche.
        </li>
        <li>
          <b>Werbung</b>: Vorhersage der Klickrate einer Online-Anzeige in
          Abhängigkeit von Text, Gestaltung, Zielgruppe und bisherigen
          Nutzerverhalten.
        </li>
        <li>
          <b>Verkehr</b>: Prognose der Anzahl von Unfällen, wobei Faktoren wie
          Straßenbedingungen, Wetter, Tageszeit und Geschwidigkeitsbegrenzungen
          einfließen.
        </li>
        <li>
          <b>Immobilien</b>: Schätzung des Verkaufspreises einer Wohnung oder
          eines Hauses anhand von Lage, Wohnfläche, Baujahr, Ausstattung und
          energetischem Zustand.
        </li>
      </ul>
      <Accordion title="Beispiel lineare Regression" initiallyOpen={false}>
        <p>
          Eine klassische Methode ist die <b>lineare Regression</b>, bei der ein
          Zusammenhang zwischen Eingabevariablen (z. B. Wohnfläche, Lage,
          Baujahr) und einer Zielgröße (z. B. Verkaufspreis) modelliert wird.
          Komplexere Verfahren wie{" "}
          <b>polynomiale Regression, Entscheidungsbäume oder neuronale Netze</b>{" "}
          können auch nichtlineare oder stark verknüpfte Zusammenhänge abbilden.
          Mehr dazu finden Sie unter:{" "}
          <a
            href="https://course.elementsofai.com/de/4/3"
            target="_blank"
            rel="noopener noreferrer">
            Elements of AI - Regression
          </a>
          .
        </p>
      </Accordion>
      <h3>4. Herausforderungen beim überwachten Lernen</h3>
      <p>
        Beim überwachten Lernen gibt es zwei zentrale Probleme, die die
        Leistungsfähigkeit eines Modells stark beeinflussen können:{" "}
        <b>Overfitting</b> und <b>Underfitting</b>.
      </p>
      <Table
        data={ueberwachtesLernenTable}
        headerStyle={true}
        verticalAlignCells={true}
      />
      <p>
        Das Ziel beim überwachten Lernen ist, ein ausgewogenes Modell zu
        entwickeln, das die richtigen Muster erkennt, ohne sich zu sehr an die
        Trainingsdaten zu klammern. Nur so kann es auf neue Daten gut
        generalisieren und verlässliche Vorhersagen treffen.
      </p>
      <List
        items={[
          "<b>Gelabelte und ausreichende Datenmenge</b>: Damit ein Modell erfolgreich überwacht lernen kann, müssen einige Voraussetzungen erfüllt sein. Zunächst sind <b>gelabelte Daten</b> erforderlich, denn ohne bekannte Ergebnisse kann das System nicht lernen. Außerdem ist eine <b>ausreichende Datenmenge</b> wichtig, um zu verhindern, dass das Modell unteranpasst und keine sinnvollen Muster erkennt (Underfitting).",
          "<b>Qualität und Vielfalt der Daten</b>: Neben der Menge spielen auch die <b>Datenqualität und Vielfalt</b> eine entscheidende Rolle. Ein vielfältiger Datensatz hilft, dass das Modell nicht nur die Trainingsdaten auswendig lernt, sondern die zugrunde liegenden Zusammenhänge erkennt und auf neue Daten übertragen werden kann. So wird Overfitting vermieden. Dabei ist zu beachten, dass natürlich nicht “irgendwelche” Daten genutzt werden sollten. Es geht vielmehr darum, einen möglichst diversen Datensatz zu dem spezifischen Problem zu haben, das das System lösen soll.",
          "Schließlich ist eine <b>klare Zieldefinition</b> notwendig: Soll das Modell Eingaben klassifizieren, also Kategorien zuordnen, oder numerische Werte vorhersagen, also eine Regression durchführen? Eine präzise Zielsetzung bestimmt den Aufbau des Modells und die Auswahl der geeigneten Daten.",
          "<b>Einsatz von Testdaten</b>: Um zu überprüfen, wie gut ein Modell auf neue Daten reagiert, werden <b>Testdaten</b> eingesetzt. Diese Daten wurden beim Training nicht verwendet und ermöglichen eine realistische Einschätzung der Leistungsfähigkeit. Zur Bewertung des Modells werden verschiedene <b>Kennzahlen</b> herangezogen, wie z.B. Genauigkeit oder Fehlermaße",
        ]}
        alignItems="center"
        size="medium"
      />
      <h3>Zusammenfassung</h3>
      <p>
        Überwachtes Lernen funktioniert nur mit <b>gelabelten Daten</b>. Modelle
        unterscheiden sich je nach Ziel in <b>Klassifikation</b>, also der
        Einordnung in Kategorien, und <b>Regression</b>, also der Vorhersage von
        Zahlenwerten. Ziel ist immer ein ausgewogenes Modell, das weder
        Overfitting noch Underfitting zeigt. Eine <b>gute Datenbasis</b> -
        qualitativ hochwertig, vielfältig und ausreichend groß - ist
        entscheidend für den Erfolg eines Modells.
      </p>
    </section>,
    <section>
      <h2>Unüberwachtes Lernen</h2>
      <p>
        Beschreibt ein Verfahren des maschinellen Lernens, bei dem ein System
        ohne vorgegebene Labels in den Daten eigenständig Strukturen, Muster
        oder Gruppen erkennt.
      </p>
      <h3>1. Einführung in das unüberwachte Lernen</h3>
      <p>
        Im Gegensatz zum überwachten Lernen arbeitet das{" "}
        <b>unüberwachte Lernen</b> (engl.: unsupervised learning) mit Daten, die{" "}
        <b>keine Labels</b> enthalten. Das bedeutet: Es gibt keine vorgegebenen
        Kategorien oder Ergebnisse, an denen sich das System orientieren kann.
        Stattdessen versucht das Modell, selbstständig Strukturen und Muster in
        den Daten zu erkennen.
      </p>
      <p>
        <b>Beispiel für unlabeled Daten</b> sind etwa große Mengen von
        PDF-Antragsformularen oder Videoaufzeichnungen von Parlamentsdebatten
        (z.B. auf{" "}
        <a href="openparliament.tv" target="_blank" rel="noopener noreferrer">
          openparliament.tv
        </a>
        ). Diese Daten liegen zwar in großer Zahl vor, sind aber nicht vorab in
        Kategorien eingeteilt oder beschriftet.
      </p>
      <p>
        Unüberwachtes Lernen kommt immer dann zum Einsatz,{" "}
        <b>wenn noch keine Kategorien existieren</b> oder wenn es darum geht,
        Daten <b>neu zu ordnen oder in Gruppen einzuteilen</b>.
      </p>
      <p>Die zentralen Fragestellungen lauten daher:</p>
      <ul>
        <li>
          Wie lässt sich Struktur in einer großen Menge unlabeled Daten
          entdecken?
        </li>
        <li>
          Wie können diese Daten sinnvoll gruppiert oder zusammengefasst werden?
        </li>
      </ul>
      <h3>2. Clustering - Die zentrale Methode</h3>
      <p>
        Eine der wichtigsten Methoden im unüberwachten Lernen ist das{" "}
        <b>Clustering</b>. Darunter versteht man die{" "}
        <b>Gruppierung von Daten nach ihrer Ähnlichkeit</b>. Ziel ist es,
        Datensätze so anzuordnen, dass ähnliche Daten in einer Gruppe - einem
        sogenannten Cluster - zusammengefasst werden.
      </p>
      <p>
        <b>Beispiel</b>: Stellen Sie sich vor, es liegen viele verschiedene
        Antragsformulare vor. Ohne vorherige Labels könnte das System sie
        automatisch in Cluster einteilen, etwa in:
      </p>
      <ul>
        <li>
          <b>Sozialhilfe</b>
        </li>
        <li>
          <b>Wohngeld</b>
        </li>
        <li>
          <b>Elterngeld</b>
        </li>
      </ul>
      <p>
        So entstehen sinnvolle Gruppen, die eine spätere Analyse oder
        Verarbeitung erleichtern.
      </p>
      <p>
        Ein wichtiger Aspekt beim Clustering ist die <b>Anzahl der Cluster</b>:
      </p>
      <ul>
        <li>
          Mit <b>mehr Clustern</b> entstehen feinere Gruppen (hohe
          Granularität), die Unterschiede sehr detailliert darstellen.
        </li>
        <li>
          Mit <b>weniger Clustern</b> entstehen gröbere Gruppen (geringe
          Granularität), die nur die wichtigsten Unterschiede berücksichtigen.
        </li>
      </ul>
      <h3>3. Beispiel aus der Praxis</h3>
      <p>
        Ein praktisches Beispiel für unüberwachtes Lernen ist die{" "}
        <b>Auswertung handschriftlicher Dokumente ohne Labels</b>. Das Ziel
        besteht darin, verschiedene Buchstaben voneinander zu unterscheiden,
        ohne dass diese zuvor beschriftet wurden.
      </p>
      <p>
        Das System geht dabei so vor, dass sie ähnliche Formen automatisch in
        Gruppen, also <b>Cluster</b>, einteilt. So könnten beispielsweise alle
        &bdquo;A&ldquo;s in einem Cluster landen, alle &bdquo;B&ldquo;s in einem
        anderen, und so weiter. Auf diese Weise lassen sich Strukturen in den
        Daten erkennen, ohne dass vorherige Kennzeichnungen nötig sind.
      </p>
      <h3>4. Herausforderungen beim unüberwachten Lernen</h3>
      <p>
        Im Gegensatz zum überwachten Lernen bringt das unüberwachte Lernen
        besondere Schwierigkeiten mit sich. Da <b>keine Labels</b> vorhanden
        sind, gibt es auch keinen klassischen <b>Test-Datensatz</b>, mit dem die
        Ergebnisse überprüft werden könnten.
      </p>
      <p>
        Das bedeutet: Es gibt keine eindeutig &bdquo;richtigen&ldquo; oder
        &bdquo;falschen&ldquo; Antworten. Stattdessen zeigt das Modell lediglich
        mögliche Strukturen auf, die sinnvoll erscheinen können - oder auch
        nicht. Die <b>Bewertung der Ergebnisse</b> ist daher deutlich komplexer
        und erfordert meist zusätzliches Fachwissen oder weitere Analysen.
      </p>
      <p>
        Einsatzgebiete: Während überwachte Lernverfahren vor allem dann sinnvoll
        sind, wenn konkrete Vorhersagen oder Klassifikationen benötigt werden
        (z.B. Kreditwürdigkeitsprüfung, medizinische Diagnose), eignet sich
        unüberwachtes Lernen besonders für Exploration, Mustererkennung und
        Clusterbildung, wenn keine Labels vorliegen und man zunächst Strukturen
        oder Zusammenhänge in den Daten entdecken möchte.
      </p>
      <h3>Zusammenfassung</h3>
      <p>
        Unüberwachtes Lernen kommt ohne Labels aus. Sein Ziel ist es,{" "}
        <b>Strukturen oder Gruppen (Cluster)</b> in Daten zu erkennen. Die
        häufigste Methode dabei ist das <b>Clustering</b>, bei dem ähnliche
        Daten automatisch zusammengefasst werden. Allerdings ist die Bewertung
        der Ergebnisse wesentlich schwieriger als beim überwachten Lernen, da es
        keine klaren Antworten gibt.
      </p>
    </section>,
    <section>
      <h2>Bestärkendes Lernen</h2>
      <p>
        Ein Verfahren des maschinellen Lernens, bei dem ein System durch Versuch
        und Irrtum lernt und sein Verhalten anhand von Belohnungen oder
        Bestrafungen schrittweise verbessert, um langfristig den größtmöglichen
        Erfolg zu erzielen.
      </p>
      <h3>1. Einführung in das bestärkende Lernen</h3>
      <p>
        Beim <b>bestärkenden Lernen</b> (engl.: reinforcement learning) lernt
        ein KI-System durch <b>Versuch und Irrtum</b>. Es erhält{" "}
        <b>Belohnungen</b>, wenn es gute Entscheidungen trifft, und{" "}
        <b>Bestrafungen</b>, wenn sein Verhalten nicht zielführend ist. Dieser
        Ansatz ähnelt dem <b>operanten Konditionieren</b> in der Psychologie,
        bei dem Verhalten durch positives oder negatives Feedback geformt wird.
      </p>
      <p>
        Ein zentrales Merkmal ist, dass es{" "}
        <b>keine direkten &bdquo;richtigen&ldquo; Lösungen</b> gibt. Das System
        lernt stattdessen aus{" "}
        <b>Feedback, das oft erst nach mehreren Schritten erfolgt</b>.
      </p>
      <p>
        Typische Anwendungsbereiche sind Situationen, in denen ein KI-Akteur
        eigenständig handeln muss, wie etwa:
      </p>
      <ul>
        <li>
          <b>Selbstfahrende Autos</b>, die erst nach einer Reihe von
          Entscheidungen Rückmeldung über deren Qualität erhalten.
        </li>
        <li>
          <b>Spiele</b>, bei denen der Erfolg erst am Ende des Spiels sichtbar
          wird.
        </li>
      </ul>
      <h3>2. Funktionsweise</h3>
      <p>
        Das System befindet sich in einer <b>Umgebung</b>, mit der es ständig
        interagiert.
      </p>
      <ul>
        <li>
          Für jede Aktion erhält es eine Rückmeldung in Form einer Belohnung
          oder Bestrafung.
        </li>
        <li>
          Diese Erfahrungen werden gespeichert und genutzt, um die{" "}
          <b>Strategie (Policy)</b> zu verbessern.
        </li>
        <li>
          Das Ziel besteht darin, <b>langfristig die maximale Belohnung</b> zu
          erreichen - nicht nur kurzfristig richtige Entscheidungen zu treffen.
        </li>
      </ul>
      <h3>3. Besonderheiten</h3>
      <p>
        Bestärkendes Lernen unterscheidet sich deutlich vom überwachten und
        unüberwachten Lernen:
      </p>
      <ul>
        <li>
          Es werden <b>keine großen Datensätze</b> benötigt, da das System durch
          direkte Interaktion mit seiner Umgebung lernt.
        </li>
        <li>
          Es gibt <b>keine festen Labels oder Testdaten</b>.
        </li>
        <li>
          Stattdessen basiert der gesamte Lernprozess auf <b>Erfahrungen</b>.
        </li>
        <li>
          Diese Methode ist besonders geeignet für <b>dynamische Umgebungen</b>,
          in denen sich Situationen ständig ändern und Flexibilität gefragt ist.
        </li>
      </ul>
      <h3>4. Anwendungsbeispiel: Robotik</h3>
      <p>
        Stellen wir uns vor, eine gemeinnützige Organisation betreibt eine{" "}
        <b>Online-Hotline für psychosoziale Beratung</b>. Menschen können sich
        dort anonym per Chat melden, wenn sie Unterstützung brauchen. Um die
        Berater:innen im Gespräch zu unterstützen, wird ein KI-System mit{" "}
        <b>bestärkendem Lernen</b> eingesetzt.
      </p>
      <p>
        Das System soll lernen, in welchen Situationen bestimmte
        Gesprächsstrategien besonders hilfreich sind. Es beobachtet also den
        Verlauf der Chats und schlägt den Berater:innen mögliche Antworten oder
        nächste Schritte vor - zum Beispiel:{" "}
        <i>&bdquo;offene Frage stellen&ldquo;</i>,
        <i>&bdquo;ermutigendes Feedback geben&ldquo;</i> oder{" "}
        <i>&bdquo;ein konkretes Hilfsangebot nennen&ldquo;</i>.
      </p>
      <p>Wie funktioniert das Lernen?</p>
      <ul>
        <li>
          <b>Agent</b>: Die KI ist der &bdquo;Agent&ldquo;, der Vorschläge für
          die Gesprächsführung macht.
        </li>
        <li>
          <b>Umgebung</b>: Die Umgebung ist das laufende Beratungsgespräch mit
          allen Emotionen, Themen und Reaktionen der Ratsuchenden.
        </li>
        <li>
          <b>Aktionen</b>: Der Agent kann unterschiedliche Arten von
          Antwortvorschlägen machen.
        </li>
        <li>
          <b>Belohnung</b>: Positiv, wenn Ratsuchende das Gspräch als hilfreich
          bewerten oder es länger fortführen. Negativ, wenn sie unzufrieden
          wirken, das Gespräch abbrechen oder keine Reaktion mehr zeigen.
        </li>
      </ul>
      <p>
        Über viele Gespräche hinweg probiert das System verschiedene Strategien
        aus und bekommt Rückmeldung über die Wirkung. So{" "}
        <b>lernt es durch Ausprobieren und Feedback</b>, welche Vorschläge im
        Beratungsprozess wirklich hilfreich sind - nicht durch vorgegebene
        Regeln, sondern durch Erfahrung.
      </p>
      <p>
        Auf diese Weise kann die Organisation sicherstellen, dass die Hotline
        langfristig <b>effizienter und wirksamer</b> arbeitet: Berater:innen
        werden entlastet, Ratsuchende fühlen sich besser unterstützt, und die
        knappen Ressourcen einer gemeinnützigen Organisation werden optimal
        eingesetzt.
      </p>
      <h3>Zusammenfassung</h3>
      <p>
        Bestärkendes Lernen basiert auf dem Prinzip von{" "}
        <b>Belohnung und Bestrafung</b>. Das System lernt schrittweise aus
        seinen Erfahrungen und passt sein Verhalten immer weiter an. Es eignet
        sich besonders für <b>komplexe, dynamische Umgebungen</b> wie die
        Robotik. Das übergeordnete Ziel ist dabei stets die{" "}
        <b>Maximierung der langfristigen Belohnung</b>.
      </p>
    </section>,
    <section>
      <h2>Neuronale Netze</h2>
      <p>
        Sind mathematische Modelle, die vom menschlichen Gehirn inspiriert sind
        und aus miteinander verbundenen künstlichen Neuronen bestehen, um Muster
        zu erkennen, Daten zu verarbeiten und komplexe Probleme zu lösen.
      </p>
      <h3>1. Einführung: Lernen von der Natur</h3>
      <p>
        Viele technische Innovationen sind durch die <b>Bionik</b> inspiriert,
        also durch die Nachahmung von Phänomenen aus der Natur. Ein bekanntes
        Beispiel ist der <b>Klettverschluss</b>, der auf der Struktur der
        Kletten basiert.
      </p>
      <p>
        Auch <b>künstliche neuronale Netze (KNN)</b> orientieren sich an der
        Natur - genauer gesagt am <b>menschlichen Gehirn</b>, das aus rund
        10-100 Milliarden Nervenzellen (Neuronen) besteht. So wie unser Gehirn
        durch die Zusammenarbeit vieler Neuronen Informationen verarbeitet, tun
        es auch künstliche neuronale Netze - nur mathematisch.
      </p>
      {/* Bild/Meme NN */}
      <h4>1. Biologisches vs. künstliches Neuron</h4>
      <Table data={neuronTable} headerStyle={true} verticalAlignCells={true} />
      <h4>2. Neuronale Netze vs. herkömmliche Computer</h4>
      <p>
        Neuronale Netze unterscheiden sich von herkömmlichen Computern vor allem
        dadurch, dass{" "}
        <b>viele Neuronen gleichzeitig Informationen verarbeiten</b> und dass{" "}
        <b>Speicherung und Verarbeitung von Daten nicht getrennt</b> sind,
        sondern in den Neuronen selbst erfolgen. Dadurch eignen sie sich
        besonders für Aufgaben, die massive Parallelverarbeitung erfordern. Ihre
        volle Leistungsfähigkeit wird durch spezielle Hardware wie{" "}
        <b>Grafikprozessoren (GPUs)</b> erreicht, die große Datenmengen
        gleichzeitig bearbeiten können.
      </p>
      <p>Mehr dazu finden Sie im Kurs:</p>
      <p className="specialText text-center">
        <a
          href="https://course.elementsofai.com/de/5/1"
          target="_blank"
          rel="noopener noreferrer">
          <i>Elements of AI - Die Grundlagen neuronaler Netze</i>
        </a>
      </p>
      <h3>2. Aufbau eines künstlichen neuronalen Netzes</h3>
      <p>
        Ein künstliches neuronales Netz ist in der Regel in{" "}
        <b>drei Schichten</b> aufgebaut:
      </p>
      <List
        items={[
          "<b>Input-Schicht</b>: Sie nimmt die Daten auf, zum Beispiel Bildpixel oder Sensordaten.",
          "<b>Verborgene Schichten (Hidden Layer)</b>: Hier findet die eigentliche Verarbeitung statt. Die Daten werden schrittweise transformiert und Muster herausgefiltert.",
          "<b>Output-Schicht</b>: Am Ende gibt das Netz ein Ergebnis aus, etwa eine Klassifizierung (z.B. &bdquo;Katze&ldquo; oder &bdquo;Hund&ldquo;) oder einen Wert (z.B. eine Prognose).",
        ]}
        alignItems="center"
        size="medium"
      />
      <p>
        Die Bausteine dieser Schichten sind die <b>Neuronen</b>, die als
        Knotenpunkte fungieren. Zwischen den Neuronen bestehen{" "}
        <b>Verbindungen</b>, die mit <b>Gewichten</b> versehen sind. Diese
        Gewichte geben an, wie stark ein Neuron ein anderes beeinflusst. Ob ein
        Neuron &bdquo;aktiv&ldquo; wird, entscheidet eine{" "}
        <b>Aktivierungsfunktion</b>, die berechnet, wie stark ein Signal
        weitergegeben wird.
      </p>
      <p>Mehr dazu finden Sie im Kurs:</p>
      <p className="specialText text-center">
        <a
          href="https://course.elementsofai.com/de/5/2"
          target="_blank"
          rel="noopener noreferrer">
          <i>Elements of AI - Aufbau neuronaler Netze</i>
        </a>
      </p>
      <h3>3. Netzarchitekturen - für unterschiedliche Aufgaben</h3>
      <p>
        Neuronale Netze lassen sich je nach Aufgabe, Datentyp und Komplexität
        unterschiedlich aufbauen: Sie können Rückkopplungen nutzen, wie bei
        rekurrenten Netzen für zeitabhängige Daten oder sehr tief geschichtet
        sein, wie bei Deep Learning-Modellen, um komplexe Muster zu erkennen. Je
        nach Einsatzgebiet wählt man unterschiedliche <b>Netzarchitekturen</b>,
        die speziell auf Bilder, Sequenzen oder große Datensätze zugeschnitten
        sind. Wir wollen hier nicht tiefer auf die jeweiligen Netzarchitekturen
        eingehen, sondern Ihnen einen Überblick geben, sodass Sie mit den
        Begrifflichkeiten arbeiten können.
      </p>
      <Table data={architecturTable} headerStyle verticalAlignCells />
      <p>Mehr dazu finden Sie im Kurs:</p>
      <p className="specialText text-center">
        <a
          href="https://course.elementsofai.com/de/5/3"
          target="_blank"
          rel="noopener noreferrer">
          <i>
            Elements of AI - Fortgeschrittene Methoden im Bereich neuronaler
            Netze
          </i>
        </a>
      </p>
      <h3>Zusammenfassung</h3>
      <p>
        Künstliche neuronale Netze orientieren sich am Modell des menschlichen
        Gehirns und bestehen typischerweise aus{" "}
        <b>Input-, Hidden- und Output-Schichten</b>. Je nach Aufgabe kommen
        unterschiedliche <b>Netzarchitekturen</b> zum Einsatz, etwa CNNs für
        Bilder, RNNs oder LSTMs für zeitabhängige Daten und tiefe Netzwerke
        (DNNs) für komplexe Muster.
      </p>
      <p>
        Neuronale Netze können mit verschiedenen Methoden trainiert werden:
        <b>überwacht</b>, <b>unüberwacht</b> oder <b>bestärkend</b>. Deep
        Learning bezeichnet die erweiterte Form mit vielen verborgenen
        Schichten, die es ermöglicht, besonders komplexe Probleme zu lösen.
      </p>
      <p className="specialText">
        Wenn Sie tiefer in das Thema einsteigen möchten, empfehlen wir Ihnen
        einen zusätzlichen Kurs bei{" "}
        <a
          href="https://course.elementsofai.com/de/5"
          target="_blank"
          rel="noopener noreferrer">
          Elements of AI
        </a>{" "}
        zu Neuronalen Netzen
      </p>
    </section>,
  ],
};

const VerarbeitungInformation = {
  linkName: "verarbeitung-integrierte-informationsverarbeitung",
  name: "Verarbeitung - Integrierte Informationsverarbeitung",
  description: "Hier wird die Verarbeitung bei KI-Systemen thematisiert.",
  content: [
    <ChapterHeader
      text={"Verarbeitung - Integrierte Informationesverarbeitung"}
      number={5}
    />,
    <section>
      <p></p>
    </section>,
  ],
};

const OutputTechnik = {
  linkName: "output-technik",
  name: "Output - Technische Grundlagen",
  description: "Hier wird der Output von KI-Systemen thematisiert.",
  content: [
    <ChapterHeader text={"Output - Technische Grundlagen"} number={6} />,
    <section>
      <p></p>
    </section>,
  ],
};

const OutputInformation = {
  linkName: "output-integrierte-informationsverarbeitung",
  name: "Output - Integrierte Informationsverarbeitung",
  description: "Hier wird der Output von KI-Systemen thematisiert.",
  content: [
    <ChapterHeader
      text={"Output - Integrierte Informationsverarbeitung"}
      number={7}
    />,
    <section>
      <p></p>
    </section>,
  ],
};

const sectionsLLMs = [
  { id: "2", title: "Was sind Large Language Models (LLMs)?" },
  { id: "3", title: "Funktionsweise von Large Language Models (LLMs)" },
  { id: "4", title: "Grenzen von LLMs" },
  { id: "5", title: "LLMs im Vergleich" },
  { id: "6", title: "Fazit" },
];

const llmTable = [
  [
    <b>Modell</b>,
    <b>Anbieter</b>,
    <b>Besonderheit / Fokus</b>,
    <b>Einsatz & Nutzen</b>,
    <b>Lizenz / Offenehit</b>,
  ],
  [
    <b>GPT-4 / GPT-4o</b>,
    "OpenAI",
    "Sehr leistungsfähig, vielseitig (Text, Code, Analyse, Konversation)",
    "Schreiben, Programmieren, Wissensarbeit, Chatbots",
    "Proprietär (Cloud-basiert)",
  ],
  [
    <b>Gemini</b>,
    "Google DeepMind",
    "Multimodal (Text, Bild, Code, Video), eng mit Google-Ecosystem verknüpft",
    "Multimodale Anwendungen, Such- und Wissensintegration",
    "Proprietär",
  ],
  [
    <b>Claude</b>,
    "Anthropic",
    "Fokus auf Sicherheit, Ethik, transparente KI-Antworten",
    "Sichere, erklärbare KI-Nutzung in sensiblen Bereichen",
    "Proprietär",
  ],
  [
    <b>Llama</b>,
    "Meta AI",
    "Offen zugänglich, stark für Forschung & Fine-Tuning",
    "Eigene Anpassungen, Forschung, interne Nutzung",
    "Teilweise offen (Open-Weight, Lizenzbeschränkungen)",
  ],
  [
    <b>Mistral / Mixtral</b>,
    "Mistral AI (EU)",
    "Europäischer Fokus auf Effizienz, Datenschutz, Open-Source-Ansatz",
    "On-Premises-Lösungen, datenschutzsensible Anwendungen",
    "Offen (Apache 2.0 / Open-Weight)",
  ],
];

const LLM = {
  linkName: "llm",
  name: "LLMs",
  description:
    "Hier werden LLMs thematisiert: Was sie sind, sie auszeichnet und ein kurzer Vergleich zwischen Modellen.",
  content: [
    <ChapterHeader text={"LLMs"} number={8} />,
    <section>
      <p>
        LLMs sind große Sprachmodellen, die vorhersagen, wie ein Text
        fortgesetzt werden könnte, basierend auf einer riesigen Textmenge.
      </p>
      <Accordion sections={sectionsLLMs} />
      <SubNavigation sections={sectionsLLMs} />
    </section>,
    <section>
      <h2>1. Einführung: Was sind Large Language Models (LLMs)?</h2>
      <p>
        Large Language Models (LLMs) sind KI-Systeme, die auf der Grundlage
        großer Textmengen trainiert werden, um Sprache zu verstehen, zu
        verarbeiten und selbstständig Texte zu erzeugen. Sie bilden die
        Grundlage vieler moderner Anwendungen wie Chatbots, automatische
        Übersetzungen oder Textanalysen.
      </p>
      <p>
        Das folgende Video gibt einen kurzen Überblick über die Funktionsweise
        von LLMs sowie typische Anwendungsszenarien und deren Grenzen. Diese
        Aspekte werden in den nächsten Abschnitten vertieft.
      </p>
      <VideoContainer
        link="https://www.youtube-nocookie.com/embed/KZ5LL1xhAg4?rel=0&modestbranding=1"
        title="Vertrauenswürdigkeit"
      />
    </section>,
    <section>
      <h2>2. Funktionsweise von Large Language Models (LLMs)</h2>
      <p>
        Ein <b>Large Language Model (LLM)</b> lernt, Sprache zu verstehen und
        selbstständig Texte zu erzeugen. Im Kern basiert es auf einer einfachen,
        aber wirkungsvollen Idee:
      </p>
      <p className="specialText text-center">
        Es wird darauf trainiert:{" "}
        <b>das nächste Wort in einem Satz vorherzusagen.</b>
      </p>
      <p>
        <b>Zum Beispiel:</b>
      </p>
      <p>
        [Die Katze schläft gerne in der ... ] &rarr; Welche Wort kommt als
        nächstes?
      </p>
      <ThemeImage darkSrc={llm_dark} lightSrc={llm_light} alt="Bild LLMs" />
      <p>
        Dazu benötigt das Modell eine enorme Menge an Textdaten - etwa aus dem
        Internet, aus Büchern, Artikeln oder anderen Quellen. Diese Daten müssen{" "}
        <b>nicht manuell beschriftet</b> werden, da das Modell selbst lernt,
        Sprachmuster zu erkennen.
      </p>
      <p>
        Im Training entdeckt das LLM typische <b>Muster und Strukturen</b> der
        Sprache, beispielsweise:
      </p>
      <ul>
        <li>Welche Wörter häufig zusammen vorkommen</li>
        <li>Wie unterschiedliche Sätze aufgebaut sind</li>
        <li>Welche Bedeutungen und Zusammenhänge zwischen Wörtern bestehen</li>
      </ul>
      <p>
        Sobal das Modell trainiert ist, kann es <b>neue Texte generieren</b>,
        Wort für Wort - oder genauer gesagt, <b>Token für Token</b>. Aber was
        genau ist ein <b>Token</b>?
      </p>
      <h3>Tokens - die Bausteine der Sprache</h3>
      <p>
        Ein <b>Token</b> ist eine kleine Einheit von Sprache, die das Modell
        verarbeitet. Das kann ein ganzes Wort, ein Wortteil oder sogar ein
        Satzzeichen sein.
      </p>
      <p>Beispiele:</p>
      <ul>
        <li>
          Das Wort <i>&bdquo;Haus&ldquo;</i> ist ein Token
        </li>
        <li>
          Das Wort <i>&bdquo;Häuserbau&ldquo;</i> könnte in zwei Tokens zerlegt
          werden: <i>&bdquo;Häuser&ldquo;</i> und <i>&bdquo;bau&ldquo;</i>
        </li>
      </ul>
      <p>
        LLMs verarbeiten Sprache anders als Menschen also{" "}
        <b>nicht in ganzen Sätzen oder Silben</b>, sondern in diesen kleineren
        Einheiten. Durch diese Tokenisierung wird die Sprache sehr flexibel und
        kann detaillierter verwendet werden.
      </p>
      <h4>Kreativität und Variation bei der Texterzeugung</h4>
      <p>
        Wenn das LLM ein neues Wort (oder Token) vorhersagt, wählt es nicht
        immer die <b>wahrscheinlichste</b> Option. Stattdessen kann es aus
        mehreren
        <b>guten Möglichkeiten</b> auswählen. Das sorgt für{" "}
        <b>abwechslungsreiche und kreative Texte</b>. Deshalb können zwei
        Antworten auf dieselbe Frage leicht unterschiedlich ausfallen.
      </p>
      <h3>
        Kann KI verstehen? Das Gedankenexperiment des Chinesischen Zimmers
      </h3>
      <p>
        Ein bekanntes Gedankenexperiment, das hilft, die Grenzen von LLMs zu
        verstehen, ist das <b>&bdquo;Chinesische Zimmer&ldquo;</b> des
        Philosophen <b>John Searle</b> (1980).
      </p>
      <p>
        Stellen Sie sich vor, eine Person sitzt in einem geschlossenen Raum. Sie
        versteht <b>kein Chinesisch</b>, hat aber ein Handbuch mit <b>Regeln</b>
        , wie sie chinesische Zeichen richtig auf andere Zeichen reagieren
        lassen kann. Durch diese Regeln kann sie auf Fragen in chinesischer
        Schrift <b>korrekte Antworten</b> geben - so, dass Außenstehende denken
        könnten, die Person <b>versteht Chinesisch</b>.
      </p>
      <p>
        Tatsächlich folgt sie aber nur <b>formalen Anweisungen</b>, ohne den{" "}
        <b>Bedeutungsinhalt</b> der Sprache zu begreifen.
      </p>
      <p>Searle nutzte dieses Gedankenexperiment, um zu zeigen:</p>
      <p className="specialText">
        Auch wenn ein Computer (oder ein LLM) scheinbar intelligente Antworten
        gibt, bedeutet das <b>nicht</b>, dass er <b>wirklich versteht</b>, was
        er sagt. Das Modell verarbeitet nur <b>Symbole nach Regeln</b>, ähnlich
        wie die Person im chinesischen Zimmer.
      </p>
      <h4>Bezug zu LLMs</h4>
      <p>
        LLMs funktionieren ganz ähnlich: Sie erkennen Muster in Sprache und
        erzeugen darauf basierend plausibel klingende Texte.
      </p>
      <p className="specialText">
        Doch sie <b>verstehen keine Bedeutungen im menschlichen Sinn</b>. Sie
        haben <b>kein Bewusstsein, keine Absichten</b> und{" "}
        <b>keine eigenen Gedanken</b>.
      </p>
      <p>
        Der Chinese Room regt dazu an, über menschliches und maschinelles
        Verstehen nachzudenken. Searle stellt die Idee in den Raum, dass ein
        System zwar auf sprachliche Eingaben sinnvoll reagieren kann, aber ohne
        dabei tatsächlich zu <i>verstehen</i>, was es sagt. Im Kontext moderner
        LLMs wird diese Frage erneut relevant: Wenn ein Modell Texte analysiert
        und Antworten generiert, zeigt es dann Intelligenz und Verstehen oder
        lediglich die Fähigkeit, sprachliche Muster zu erkennen und zu
        reproduzieren?
      </p>
      <p>
        Der Chinese Room fordert uns also heraus, die Grenze zwischen echter
        Erkenntnis und bloßer Symbolverarbeitung von Systemen kritisch zu
        hinterfragen.
      </p>
      <h3>Reinforcement Learning from Human Feedback (RLHF)</h3>
      {/* TODO: Link zu Kapitel einfügen */}
      <p>
        Nach dem Grundtraining wird das Modell oft noch durch ein Verfahren
        namens <b>Reinforcement Learning from Human Feedback (RLHF)</b> bzw.
        bestärkendes Lernen verfeinert. <br /> Dabei bewerten Menschen die
        Antworten des Modells, zum Beispiel danach,
      </p>
      <ul>
        <li>wie hilfreich,</li>
        <li>verständlich</li>
        <li>oder angemessen eine Antwort ist.</li>
      </ul>
      <p>
        Das System nutzt Rückmeldungen, um sein Verhalten anzupassen und
        Vorhersagen zu verbessern. Dadurch entstehen Antworten, die{" "}
        <b>sprachlich flüssiger und konsistenter</b> wirken. Alle modernen LLMs
        wie ChatGPT oder Claude haben diese Form von menschlicher Feinjustierung
        durchlaufen, bevor sie auf den Markt gekommen sind. Wir merken also,
        ganz ohne den Menschen geht es nicht.
      </p>
    </section>,
    <section>
      <h2>3. Grenzen von LLMs</h2>
      <p>
        So leistungsfähig Large Language Models auch sind, besteht das Risiko,
        dass ihre Texte <b>sprachlich überzeugend und intelligent wirken</b>,
        aber <b>inhaltlich nicht korrekt</b> sind. LLMs kennen keine absolute
        Wahrheit; sie erzeugen Inhalte ausschließlich auf Basis von
        <b>statistischen Wahrscheinlichkeiten</b>, die aus Trainingsdaten und
        Bewertungen abgeleitet werden, und stoßen dabei an folgende{" "}
        <b>Grenzen und Herausforderungen</b>:
      </p>
      <h4>1. Halluzinationen</h4>
      <p>
        LLMs können falsche oder frei erfundene Informationen liefern, die{" "}
        <b>plausibel klingen</b>, aber <b>nicht stimmen</b>. Das passiert, weil
        sie keine Fakten prüfen, sondern nur wahrscheinlich klingende Texte
        erzeugen.
      </p>
      <h4>2. Fehlendes Verständnis</h4>
      <p>
        LLMs &bdquo;verstehen&ldquo; Inhalte nicht im menschlichen Sinn. Sie
        wissen nicht, was Wörter <i>bedeuten</i>, sondern nur, wie sie
        typischerweise zusammen vorkommen.
      </p>
      <h4>3. Veraltetes Wissen</h4>
      <p>
        Wenn ein Modell nicht regelmäßig aktualisiert wird, kennt es keine
        <b>aktuellen Ereignisse</b> oder <b>neuen Daten</b> nach dem Zeitpunkt
        seines Trainings.
      </p>
      <h4>4. Bias (Voreingenommenheit)</h4>
      <p>
        Da LLMs auf menschlichen Texten trainiert werden, übernehmen sie auch
        <b>gesellschaftliche Vorurteile</b> oder <b>einseitige Darstellungen</b>
        , die in den Daten vorkommen.
      </p>
      <h4>5. Datenschutz und Urheberrecht</h4>
      <p>
        In Trainingsdaten können geschützte Inhalte enthalten sein, was
        rechtliche und ethische Fragen aufwirft. Gerade Bild generierende
        Systeme sehen sich häufig mit Vorwürfen von Urheberrechtsverletzung
        konfrontiert.
      </p>
    </section>,
    <sections>
      <h2>4. LLMs im Vergleich</h2>
      <p>
        Es gibt heute mehrere große <b>Large Language Models</b>, die von
        verschiedenen Unternehmen entwickelt wurden. Sie basieren alle auf
        ähnlichen Prinzipien, unterscheiden sich aber beispielsweise in{" "}
        <b>
          Größe, Trainingsdaten, Zugänglichkeit, Fähigkeiten und Zielrichtung
        </b>
        .
      </p>
      <h3>Beispiele bekannter LLMs</h3>
      <Table data={llmTable} headerStyle={true} verticalAlignCells={true} />
      <h3>Offene Modelle (Open Source)</h3>
      <p>
        Offene oder &bdquo;open-weight&ldquo; Modelle (z.B.{" "}
        <b>Llama, Mistral, Zephyr</b>) gewinnen stark an Bedeutung. Während es
        sich bei Modellen nicht unbedingt um echte Open-Source-Modelle handelt,
        sondern nur um Open-Weight-Modelle, da für vollständige Open Source auch
        die Trainingsdaten und der gesamte Trainingsprozess offenliegen müssten,
        spricht man meist dennoch von Open Source. Diese Modelle ermöglichen:
      </p>
      <ul>
        <li>
          <b>Datenhoheit & Datenschutz</b> (lokaler Betrieb, keine Cloudpflicht)
        </li>
        <li>
          <b>Anpassbarkeit</b> (Fine-Tuning, eigene Trainingsdaten)
        </li>
        <li>
          <b>Kostenkontrolle & Unabhängigkeit</b> von US-Plattformen
        </li>
      </ul>
      <p className="specialText text-center">
        Aber: eigener Betrieb erfordert{" "}
        <b>technisches Know-how, Rechenressourcen</b> und <b>Wartung</b>.
      </p>
      <h3>Checkliste: Welches LLM passt zu meinem Projekt?</h3>
      <h4>1. Trainingsdaten: Welche Art von Daten wurde verwendet?</h4>
      <ul>
        <li>
          Offene Internetdaten &rarr; breite Allgemeinbildung, viele Sprachstile
        </li>
        <li>
          Lizenzierte/kuratierte Daten &rarr; verlässlicher, präziser,
          kontrollierter Inhalt
        </li>
      </ul>
      <p>
        <b>Beispiel</b>: GPT-4 trainiert auf einer Mischung aus Webdaten,
        Büchern und ARtikeln &rarr; gut für gezielte generelle Textgenerierung.
      </p>
      <h4>2. Zugänglichkeit: Wie leicht lässt sich das Modell nutzen?</h4>
      <ul>
        <li>
          Kommerziell (z.B. GPT, Claude) &rarr; einfach via API nutzbar, Support
          vorhanden
        </li>
        <li>
          Open Source (z.B. Llama, Mistral) &rarr; volle Kontrolle, Anpassung
          möglich, keine Lizenzkosten
        </li>
      </ul>
      <p>
        <b>Beispiel</b>: Llama 3 kann lokal eingesetzt werden &rarr; ideal für
        Projekte mit Datenschutzanforderungen.
      </p>
      <h4>
        3. Fähigkeiten / Modality: Welche Art von Daten soll verarbeitet werden?
      </h4>
      <ul>
        <li>Text &rarr; alle klassischen LLMs</li>
        <li>Multimodla (Text, Bild, Audio) &rarr; Gemini, GPT-4 multimodal</li>
      </ul>
      <p>
        <b>Beispiel</b>: Für ein Projekt, das Bildbeschriebungen generieren soll
        &rarr; GPT-4 multimodal oder Gemini.
      </p>
      <h4>4. Ziele / Schwerpunkt: Was soll das Modell erreichen?</h4>
      <ul>
        <li>Breite Einsatz / kreative Texte &rarr; GPT, Claude</li>
        <li>
          Effizienz, Datenschutz, leichte Integration &rarr; Mistral, Llama
        </li>
      </ul>
      <p>
        <b>Beispiel</b>: Ein datenschutzfeundlicher interner Chatbot &rarr;
        Mistral oder Llama sind besser geeignet als kommerzielle APIs.
      </p>
      <h4>5. Weitere Kriterien (optional)</h4>
      <ul>
        <li>
          <b>Kosten</b>: Open-Source oft günstiger, kommerzielle Modell oft
          nutzungsbasiert
        </li>
        <li>
          <b>Community / Support</b>: Größere Modelle wie GPT haben mehr
          Dokumentation und Nutzerfeedback
        </li>
        <li>
          <b>Anpassbarkeit</b>: Open-Source Modelle können feinjustiert oder in
          eigene Pipelines integriert werden
        </li>
      </ul>
    </sections>,
    <section>
      <h2>5. Fazit</h2>
      <List
        items={[
          "<b>Grundprinzip</b>: LLMs lernen, das <b>nächste Wort vorherzusagen</b>, indem sie auf riesigen Textmengen Muster erkennen.",
          "<b>Tokens</b>: Sie arbeiten mit <b>Tokens</b>, den kleinsten Einheiten der Sprache, was ihnen ermöglicht, flexibel und detailliert Texte zu erzeugen.",
          "<b>Kreativität und Variation</b>: Durch geschickte Auswahlmechanismen entstehen <b>abwechslungsreiche und kreative Texte</b>, selbst bei identischen Eingaben.",
          "<b>Feinabstimmung mit RLHF: Reinforcement Learning from Human Feedback</b> verbessert die Antworten durch menschliches Feedback und macht sie nützlicher, verständlicher und sicherer.",
          "<b>Grenzen</b>: LLMs <b>verstehen Inhalte nicht wirklich</b>, können <b>Halluzinationen erzeugen</b> und sind anfällig für Bias. Sie ersetzen menschliches Urteilsvermögen nicht, sondern unterstützen es.",
          "<b>Praxisbezug</b>: LLMs sind mächtige Werkzeuge für Textgenerierung, Analyse, Übersetzung und kreative Aufgaben - ihr Potential entfaltet sich besonders, wenn <b>menschliche Kontrolle und kritische Prüfung</b> einbezogen werden.",
        ]}
        alignItems="center"
        size="medium"
      />
      <p>
        <b>Kurz gesagt</b>: LLMs sind beeindruckende Sprachwerkzeuge, aber{" "}
        <b>keine denkenden Wesen</b>. Sie kombinieren{" "}
        <b>mathematische Mustererkennung</b> mit menschlicher Anleitung, um
        Texte zu erzeugen, die sinnvoll nützlich und kreativ wirken.
      </p>
    </section>,
  ],
};

const Einleitung = {
  linkName: "einleitung",
  name: "Einleitung",
  description:
    "Hier wird ein Überblick über die die KI Technologien und deren Funktionsweise gegeben.",
  content: [
    <ChapterHeader text={"Einleitung"} number={1} />,
    <section>
      <h2>
        Einleitung: Warum Daten und Informationsverarbeitung die Grundlage für
        KI-Verständnis sind
      </h2>
      <p>
        Um KI-Systeme sinnvoll einsetzen und bewerten zu können, müssen wir
        verstehen, wie sie Informationen aufnehmen, verarbeiten und daraus
        Entscheidungen oder Antworten generieren. In diesem Modul treten wir
        daher einen Schritt zurück - bevor wir über konkrete Anwendungen oder
        Ergebnisse sprechen - und betrachten die Grundlagen: Wie gelangen
        Systeme überhaupt an Informationen, und was passiert, wenn sie diese
        &bdquo;verstehen&ldquo; sollen?
      </p>
    </section>,
    <section>
      <p>
        Wenn wir über Künstliche Intelligenz sprechen, sprechen wir im Kern über
        Informationsverarbeitung. Ein KI-System kann nur so gute Ergebnisse
        liefern, wie die Informationen sind, auf die es Zugriff hat und wie
        diese Informationen strukturiert, interpretiert und miteinander in
        Beziehung gesetzt werden.
      </p>
      <p>
        <b>Leitgedanke</b>:
        <p className="specialText text-center">
          KI verstehen heißt, Informationsverarbeitung verstehen.
        </p>
      </p>
      <p>
        Im Rahmen dieses Moduls erhalten Sie daher nicht nur einen Überblick
        über zentrale technische Grundlagen, etwa die Aufbereitung und
        Strukturierung von Daten, verschiedene Lernarten oder die Generierung
        von Ergebnissen (Output), sondern wir verknüpfen diese Aspekte auch mit
        aktuellen Forschungserkenntnissen zur Informationsverarbeitung bei
        Systemen und Menschen als Kooperationspartnern.
      </p>
      <p>
        Wie in den vorherigen Modulen bereits gezeigt wurde, reicht eine rein
        technische Perspektive auf KI nicht aus. Systeme agieren nicht im
        luftleeren Raum, sondern werden von Menschen entwickelt, trainiert und
        genutzt. Ihre Wirksamkeit hängt also immer auch davon ab, wie gut
        Menschen und Systeme miteinander interagieren, Informationen austauschen
        und interpretieren.
      </p>
    </section>,
    <section>
      <p>
        In diesem Modul bieten wir daher einen systematischen Einstieg in das
        Thema Informationsverarbeitung in KI-Systemen - und in die Rolle, die
        der Mensch in dieser Kooperation spielt. Ausgangspunkt ist das Modell
        der integrierten Informationsverarbeitung (Integrated Information
        Processing), das Technik und menschliches Denken gemeinsam betrachtet.
      </p>
      <p>Dabei beschäftigen wir uns unter anderem mit folgenden Fragen:</p>
      <ul>
        <li>
          Wie müssen Informationen aufbereitet sein, damit System sie
          &bdquo;versstehen&ldquo; und verarbeiten können?
        </li>
        <li>
          Wie lernen Systeme, welche Informationen relevant sind, und wie
          treffen sie auf dieser Basis Entscheidungen?
        </li>
        <li>
          Und schließlich: Wie generieren KI-Systeme Ergebnisse, die für
          Menschen nachvollziehbar, verständlich und nutzbar sind?
        </li>
      </ul>
      <p>
        Dieses Verständnis bildet die Grundlage für alle weiteren Themen in der
        Modulreihe - von Datenqualität und Bias bis hin zu transparenter und
        vertrauenswürdiger KI. Denn wer versteht, wie Systeme Informationen
        verarbeiten, kann besser beurteilen, wann ihre Ergebnisse hilfreich,
        fehlerhaft oder verzerrt sind - und wie Mensch und KI gemeinsam zu guten
        Entscheidungen kommen.
      </p>
    </section>,
  ],
};

const Dateninput = {
  linkName: "ki-technologien-verstehen",
  name: "KI-Technologien verstehen",
  moduleImage: ImageElement,
  content: [
    Einleitung,
    InputTechnik,
    InputInformation,
    VerarbeitungTechnik,
    VerarbeitungInformation,
    OutputTechnik,
    OutputInformation,
    LLM,
  ],
};

export default Dateninput;
