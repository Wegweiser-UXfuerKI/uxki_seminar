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
    <ChapterHeader text={"LLMs"} number={5} />,
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
  content: [Einleitung, InputTechnik, Verarbeitung, Output, LLM],
};

export default Dateninput;
