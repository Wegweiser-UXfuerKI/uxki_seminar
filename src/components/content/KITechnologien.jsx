import ImageElement from "../../assets/icons/ki_technik_verstehen.svg?react";
import ThemeImage from "../1_elements/ThemeImage";
import { VideoContainer } from "../1_elements/VideoContainer";
import { ChapterHeader } from "../3_organism/ChapterHeader";
import { Table } from "../2_molecule/Table";
import List from "../2_molecule/List";
import { TabSwitchView } from "../2_molecule/TabSwitchView";
import Accordion from "../2_molecule/Accordion";
import SubNavigation from "../2_molecule/nav/SubNavigation";

import llm_dark from "../../assets/images/kiTechnologien/LLM-dark.png";
import llm_light from "../../assets/images/kiTechnologien/LLM-light.png";
import iip_light from "../../assets/images/kiTechnologien/IIP-light.png";
import iip_dark from "../../assets/images/kiTechnologien/IIP-dark.png";
import kvr_light from "../../assets/images/kiTechnologien/kvr-light.png";
import kvr_dark from "../../assets/images/kiTechnologien/kvr-dark.png";
import labels_light from "../../assets/images/kiTechnologien/labels-light.png";
import labels_dark from "../../assets/images/kiTechnologien/labels-dark.png";
import over_light from "../../assets/images/kiTechnologien/over-light.png";
import over_dark from "../../assets/images/kiTechnologien/over-dark.png";
import uuw_light from "../../assets/images/kiTechnologien/uuw-light.png";
import uuw_dark from "../../assets/images/kiTechnologien/uuw-dark.png";
import bl_light from "../../assets/images/kiTechnologien/bl-light.png";
import bl_dark from "../../assets/images/kiTechnologien/bl-dark.png";
import ArrowIcon from "../1_elements/ArrowIcon";
import { CarouselContainer } from "../3_organism/CarouselContainer";
import Sources from "../Sources";

import tmpSources from "./KiTechnologienSorucesTMP.json";
import SubTopicCard from "../2_molecule/cards/SubTopicCard";

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
  name: "Input - Technik",
  description:
    "Wie funktioniert der Input in ein KI-System auf technischer Ebene und welche Rolle spielen die verfügbaren Daten dabei?",
  content: [
    <ChapterHeader text={"Input - Technik"} number={2} />,

    <section>
      <Accordion sections={sectionsInputTechnik} />
      <SubNavigation sections={sectionsInputTechnik} />
    </section>,
    <section>
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
      <h3>Syntax</h3>
      <p>
        Ein erster Aspekt betrifft die <b>Syntax</b> - also die formale Struktur
        der Daten. Syntax beschreibt, in welcher Form ein Wert vorliegt: als
        Zahl, Text, Kategorie oder Wahr/Falsch-Angabe. Diese Unterscheidung ist
        entscheidend, weil viele KI-Modelle bestimmte Formate erwarten. Ein Text
        wie &bdquo;Ja&ldquo; oder &bdquo;Nein&ldquo; muss etwa in 0/1-Werte
        umgewandelt werden, wenn das System nur mit numerischen Eingaben
        arbeiten kann.
      </p>
      <h3>Erscheinung oder Form</h3>
      <p>
        Darüber hinaus spielt die <b>Erscheinung oder Form</b> der Daten eine
        Rolle. Damit ist gemeint, wie die Daten erfasst oder dargestellt sind -
        etwa als Antwortfeld in einem Formular, als Sensormessung oder als
        Fließtext in einem Bericht. Diese Form bestimmt häufig, wie leicht oder
        schwer Daten automatisiert weiterverarbeitet werden können. Während eine
        standardisierte Eingabemaske klare Werte liefert, sind handgeschriebene
        Dokumente oder unstrukturierte E-Mails für eine KI nur schwer zu deuten.
      </p>
      <h3>Zeitlicher Bezug</h3>
      <p>
        Ein weiterer wichtiger Aspekt ist der <b>zeitliche Bezug</b> der Daten.
        Daten sind Momentaufnahmen einer bestimmten Realität, die sich mit der
        Zeit verändern kann. Angaben zu Einkommensverhältnissen,
        Bevölkerungsdaten oder Nutzungszahlen können nach einigen Monaten oder
        Jahren bereits veraltet sein. Wenn eine KI also auf Basis alter Daten
        trainiert wurde, spiegelt sie möglicherweise eine Realität wider, die so
        gar nicht mehr existiert.
      </p>
      <h3>Skalenniveau</h3>
      <p>
        Daten lassen sich außerdem nach ihrem <b>Skalenniveau</b> unterscheiden
        - also danach, wie genau sie messbar sind.
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
      <h3>Datentyp</h3>
      <p>
        Schließlich ist auch der <b>Datentyp</b> selbst von Bedeutung. Ein
        Datentyp legt fest, ob eine Information als Zahl, Text, boolescher Wert
        (wahr/falsch) oder komplexere Struktur vorliegt. Ein scheinbar einfacher
        Unterschied - etwa zwischen einer Zahl, die als Text gespeichert wurde
        (&bdquo;15&ldquo;), und einer echten numerischen Variable - kann bei der
        Verarbeitung durch eine KI große Auswirkungen haben.
      </p>
      <h3>Praxisbezug</h3>
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
      <List
        items={[
          "<b>Vollständigkeit</b>: Sind alle notwendigen Informationen vorhanden?",
          "<b>Genauigkeit</b>: Sind die Daten korrekt und überprüfbar?",
          "<b>Konsistenz</b>: Stimmen Daten innerhalb eines Systems überein (z.B. gleiche Schreibweisen, gleiche Einheiten)?",
          "<b>Aktualität</b>: Sind die Daten noch relevant oder bereits veraltet?",
        ]}
        alignItems="center"
        size="medium"
      />
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
            className="rounded-xl p-[var(--scale2)] h-full bg-[var(--box)] shadow no-hover">
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
            className="rounded-xl p-[var(--scale2)] h-full bg-[var(--box)] shadow no-hover">
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
        <ul className="mt-[var(--scale5)]">
          <li>
            Wer oder was ist in den Daten <b>überrepräsentiert</b>?
          </li>
          <li>
            Wer oder was <b>kommt kaum oder gar nicht vor</b>?
          </li>
          <li>
            Welche historischen oder strukturellen Ungleichheiten könnten sich
            in den genutzten Daten widerspiegeln?
          </li>
          <li>
            Welche Werte oder Annahmen liegen in der Datenerhebung selbst
            verborgen (z.B. Sprache, Begrifflichkeiten, Klassifikationen)?
          </li>
        </ul>
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

const sectionsInputGestaltung = [
  {
    id: "2",
    title: "Einleitung: Methoden integrierter Informationsverarbeitung",
  },
  {
    id: "3",
    title: "Information Disclosure - Kontext schaffen und Vertrauen fördern",
  },
  { id: "4", title: "Informationen editieren - Lernen durch Interaktion" },
  { id: "5", title: "Zeitverlauf - Entscheidungen nachvollziehbar machen" },
  {
    id: "6",
    title: "Fazit: Gestaltung der Informationsverarbeitung als Lernprozess",
  },
];

const editierenWohnbrückeTable = [
  [<b>Veränderung</b>, <b>Neuer Eignungswert</b>, <b>Wert-Veränderung</b>],
  [<>Miete sinkt von 850€ auf 700€</>, <>0,88</>, <>+0,06</>],
  [
    <>Entfernung zur nächsten Sozialstation steigt von 1km auf 2km</>,
    <>0,75</>,
    <>-0,07</>,
  ],
  [<>Barrierefreiheit entfernt</>, <>0,68</>, <>-0,14</>],
];

const zeitverlaufTable = [
  [
    <b>Datum</b>,
    <b>Änderungen in den Daten</b>,
    <b>Eignungswert</b>,
    <b>Bemerkung</b>,
  ],
  [
    <>01. Februar</>,
    <>Ursrpüngliche Bewertung</>,
    <>0,82</>,
    <>Barrierefrei, mittlere Miete</>,
  ],
  [
    <>15. Februar</>,
    <>Neue Info: Heizkosten steigen um 30€</>,
    <>0,79</>,
    <>Leichter Abfall</>,
  ],
  [
    <>01. März</>,
    <>Zusatzdaten: Nähe zu Schule (0,8km)</>,
    <>0,83</>,
    <>Verbesserung</>,
  ],
  [
    <>01. April</>,
    <>Neue Konkurrenzangebote in der Umgebung</>,
    <>0,76</>,
    <>Sinkende relative Attraktivität</>,
  ],
];

const InputInformation = {
  linkName: "input-gestaltung",
  name: "Input - Gestaltung",
  description:
    "Wie werden Informationen als Input genutzt? Wie beeinflusst dies die Gestaltung von KI-Systemen?",
  content: [
    <ChapterHeader text={"Input - Gestaltung"} number={3} />,
    <section>
      <Accordion sections={sectionsInputGestaltung} />
      <SubNavigation sections={sectionsInputGestaltung} />
    </section>,
    <section>
      <h2>1. Einleitung: Methoden integrierter Informationsverarbeitung</h2>
      <p>
        Damit KI-Systeme Menschen sinnvoll unterstützen können, müssen beide
        Seiten dieselbe &bdquo;Sprache&ldquo; sprechen und sich darüber
        austauschen, was notwendig ist, um eine Aufgabe zu lösen. br Während
        Maschinen Informationen als strukturierte Daten, Gewichte und
        Wahrscheinlichkeiten verarbeiten, deuten Menschen dieselben
        Informationen in Bedeutungen, Erfahrungen und Zielen.
      </p>
      <p>
        Die Kunst besteht darin, diese beiden Arten der Informationsverarbeitung
        miteinander zu verbinden. Genau hier setzt der Gedanke der integrierten
        Informationsverarbeitung an: Informationen fließen nicht nur{" "}
        <i>vom Menschen ins System</i>, sondern auch{" "}
        <i>vom System zum Menschen zurück</i>. Nutzende verstehen dadurch, wie
        ein System arbeitet, können ihre Eingaben korrigieren, und lernen mit
        der Zeit, wie sie bessere, passgenauere Informationen bereitstellen.
      </p>
      <p>
        In diesem Kapitel stellen wir drei Methoden vor, die diese
        Zusammenarbeit zwischen Mensch und Maschine besonders unterstützen:
      </p>
      <List
        items={[
          "<b>Information Disclosure</b> - das System teilt kontextrelevante Informationen über seine Entscheidungen mit den Nutzer:innen so, dass die diese ihren Input anpassen können.",
          "<b>Informationen editieren</b> - Nutzer:innen können Eingaben in das System verändern und so Effekte beobachten, wie sich diese Veränderungen auf das System auswirken.",
          "<b>Zeitverlauf - das System zeigt, wie sich Informationen und Bewertungen über die Zeit hinweg verändern.</b>",
        ]}
        alignItems="center"
        size="medium"
      />
      <p>
        Alle drei Methoden zielen darauf, Informationsverarbeitung verständlich,
        überprüfbar und lernfähig zu machen so, dass Mensch und System
        bestmöglichen Input für die weitere Verarbeitung generieren.
      </p>
    </section>,
    <section>
      <h2>
        2. Information Disclosure - Kontext schaffen und Vertrauen fördern
      </h2>
      <p>
        Information Disclosure bedeutet, dass ein KI-System mehr Informationen
        bereitstellt, als nur das bloße Ergebnis.
        <br />
        Statt lediglich &bdquo;Wohnung geeignet: Ja&ldquo; oder &bdquo;Score:
        0,73&ldquo; auszugeben, gibt das System auch Einblick in die Gründe und
        Sicherheiten seiner Einschätzung und die Faktoren, die zu dieser
        Entscheidung führen könnten. Dadurch können Nutzende besser
        nachvollziehen, wie Entscheidungen zustande kommen - und ob sie auf
        soliden Daten beruhen oder Unsicherheiten bestehen.
      </p>
      <Accordion
        title="Das Beispiel &bdquo;Wohnbrücke e. V.&ldquo;"
        initiallyOpen>
        <p>
          Die Organisation <i>Wohnbrücke e. V.</i> unterstützt Menschen in Not
          bei der Wohnungssuche in einer Großstadt.
          <br />
          Um Wohnungsangebote systematisch zu bewerten, nutzt sie ein KI-System,
          das jeder Immobilie einen Eignungswert zwischen 0 und 1 zuweist.
        </p>
        <p>
          Ein Angebot in der Lindenstraße 12 erhält etwa den Wert 0,82. <br />
          Das System zeigt außerdem an:
        </p>
        <ul>
          <li>
            <b>Hauptfaktoren</b>: Barrierefreiheit (+0,15), Nähe zu
            Betreuungseinrichtungen (+0,12), moderate Miete (+0,08).
          </li>
          <li>
            <b>Unsicherheiten</b>: Kein aktuelles Bildmaterial vorhanden,
            fehlende Angaben zur Heizungsart.
          </li>
          <li>
            <b>Confidence Score</b>: 0,76 (relativ hohe Sicherheit).
          </li>
        </ul>
        <p>
          So erkennen die Mitarbeitenden: Das System bewertet das Objekt positiv
          - aber mit gewissen Unsicherheiten, die auf fehlende Daten
          zurückzuführen sind.
        </p>
        <p>
          Durch solche Offenlegungen wird die Entscheidungslogik greifbarer.
          Mitarbeitende lernen, welche Merkmale besonders wichtig sind und wann
          sie die Bewertung besser hinterfragen sollten. So können sie ihren
          Input in das System bestmöglich anpassen. <br />
          Gleichzeitig entsteht eine Transparenz, die Vertrauen schafft - sowohl
          in das System selbst als auch in die Entscheidungen, die darauf
          basieren.
        </p>
      </Accordion>
      <h3>Reflexionsfrage</h3>
      <p className="specialText">
        Wann wäre es in Ihrem Arbeitskontext hilfreich, zu sehen, wie sicher
        sich ein System bei seiner Einschätzung ist?
      </p>
      <h3>Vorteile von Information Disclosure</h3>
      <ul>
        <li>Erhöht Transparenz und Nachvollziehbarkeit.</li>
        <li>Fördert Vertrauen in KI-gestützte Prozesse.</li>
        <li>Hilft, Unsicherheiten zu erkennen und gezielt zu beheben.</li>
        <li>
          Unterstützt Lernprozesse bei Nutzenden (&bdquo;Wie denkt das
          System?&ldquo;).
        </li>
      </ul>
      <h3>Grenzen von Information Disclosure</h3>
      <ul>
        <li>
          Gefahr der Überforderung: Zu viele Zahlen oder Indikatoren können
          verwirren.
        </li>
        <li>
          Missverständnisse möglich: Ein hoher Confidence Score heißt nicht
          automatisch &bdquo;richtig&ldquo;, sondern nur, dass das System sich
          dahingehend sehr sicher ist.
        </li>
        <li>
          Datenschutz und Wettbewerbsinteressen können Offenlegungen
          einschränken, beispielsweise könnte ein Tool zur Bewertung ovn
          Krediten nicht ohne größere Probleme die Daten anderer Nutzer:innen
          offenlegen, um seine Entscheidung zu verdeutlichen.
        </li>
      </ul>
    </section>,
    <section>
      <h2>3. Informationen editieren - Lernen durch Interaktion</h2>
      <p>
        Während Disclosure Transparenz schafft, lädt die Methode des Information
        Editierens zur aktiven Auseinandersetzung ein. <br />
        Nutzende können Eingaben verändern, um zu sehen, wie das System
        reagiert. Diese &bdquo;Was-wäre-wenn&ldquo;-Szenarien helfen, ein
        intuitives Verständnis für die Informationsverarbeitung der KI zu
        entwickeln.
      </p>
      <Accordion title="Editieren bei Wohnbrücke e. V." initiallyOpen>
        <p>
          Die Mitarbeitenden testen verschiedene Annahmen, um die Logik des
          Systems besser zu verstehen. <br />
          Sie wählen wieder das Objekt in der Lindenstraße 12, das aktuell den
          Eignungswert 0,82 hat.
        </p>
        <p>Nun verändern sie einzelne Eingaben:</p>
        <Table data={editierenWohnbrückeTable} headerStyle verticalAlignCells />
        <p>Die Ergebnisse machen sichtbar:</p>
        <ul>
          <li>
            Das System legt großen Wert auf Barrierefreiheit (-0,14 Punkte
            Verlust).
          </li>
          <li>Auch Entfernung zu Betreuungseinrichtungen wirkt stark.</li>
          <li>Mietkosten sind relevant, aber mit kleinerem Einfluss.</li>
        </ul>
        <p>
          Mitarbeitende verstehen nun, welche Eingaben kritisch sind und wo das
          System Schwerpunkte setzt. Das hilft ihnen, Daten gezielter zu prüfen
          oder neue Objekte realistischer einzuschätzen.
        </p>
      </Accordion>
      <h3>Reflexionsfrage</h3>
      <p className="specialText">
        Wie könnten Sie in Ihrem Projekt mit
        &bdquo;Was-wäre-wenn&ldquo;-Szenarien prüfen, ob Ihr System
        nachvollziehbar arbeitet?
      </p>
      <h3>Vorteile vom Editieren von Informationen</h3>
      <ul>
        <li>Fördert aktives, exploratives Lernen über Systemverhalten.</li>
        <li>
          Erlaubt es, Hypothesen zu prüfen (&bdquo;Was, wenn das Objekt kleiner
          wäre?&ldquo;).
        </li>
        <li>
          Macht Zusammenhänge greifbar - besonders hilfreich bei komplexen
          Modellen.
        </li>
      </ul>
      <h3>Grenzen und Risiken vom Editieren von Informationen</h3>
      <ul>
        <li>
          Nicht jede Veränderung lässt sich eindeutig interpretieren -
          insbesondere bei stark vernetzten Merkmalen.
        </li>
        <li>
          Gefahr der Überanpassung: Nutzer:innen könnten versuchen, Eingaben
          &bdquo;zu optimieren&ldquo;, statt realistische Daten zu liefern.
        </li>
        <li>
          Zusätzlicher technischer Aufwand, da das System flexibel auf
          Eingabeveränderungen reagieren und Veränderungen visualisieren muss.
        </li>
      </ul>
    </section>,
    <section>
      <h2>4. Zeitverlauf - Entscheidungen nachvollziehbar machen</h2>
      <p>
        Die dritte Methode erweitert die Perspektive: <br />
        Zeitverlauf meint die Möglichkeit, Veränderungen von Eingaben und
        Ergebnissen über die Zeit zu beobachten. <br />
        Damit wird nachvollziehbar, <i>wie</i> und <i>warum</i> sich
        Systementscheidungen entwickeln - ein zentrales Element für Vertrauen
        und Verantwortlichkeit.
      </p>
      <p>
        Gerade in Organisationen, in denen Daten laufend aktualisiert werden
        (z.B. Mietspiegel, Infrastruktur, Energiepreise), kann der Zeitverlauf
        wichtige Hinweise geben.
      </p>
      <Accordion title="Zeitverlauf bei Wohnbrücke e. V." initiallyOpen>
        <p>
          Das Team verfolgt über drei Monate hinweg, wie sich die Bewertung der{" "}
          <b>Wohnung Lindenstraße 12</b> entwickelt:
        </p>
        <Table data={zeitverlaufTable} headerStyle verticalAlignCells />
        <p>
          Dieser Verlauf zeigt: Das System reagiert auf neue Informationen
          dynamisch. Für die Organisation bedeutet das Transparenz – sie kann
          sehen, warum ein Objekt heute anders bewertet wird als vor einem
          Monat.
        </p>
        <p>
          Zudem können die Daten genutzt werden, um Trends zu erkennen: <br />
          Verändern sich Bewertungen ganzer Stadtteile? <br />
          Wie stark beeinflussen steigende Energiekosten die Eignungswerte
          insgesamt?
        </p>
      </Accordion>
      <h3>Reflexionsfrage</h3>
      <p className="specialText">
        Wie könnte ein Verlaufs- oder Änderungsprotokoll in Ihrem Projekt
        helfen, Entwicklungen besser zu verstehen oder zu kommunizieren?
      </p>
      <h3>Vorteile von Zeitverläufen</h3>
      <ul>
        <li>
          Unterstützt Nachvollziehbarkeit und Verantwortlichkeit über Zeit.
        </li>
        <li>
          Hilft, Veränderungen und Lerneffekte im System sichtbar zu machen.
        </li>
        <li>Fördert Vertrauen, weil Entwicklungen dokumentiert sind.</li>
      </ul>
      <h3>Grenzen und Herausforderungen von Zeitverläufen</h3>
      <ul>
        <li>Erhöhter Speicher- und Dokumentationsaufwand.</li>
        <li>
          Datenschutzfragen (Protokolle enthalten oft sensible Informationen).
        </li>
        <li>Zu viele Details können den Überblick erschweren.</li>
      </ul>
    </section>,
    <section>
      <h2>5. Fazit: Gestaltung der Informationsverarbeitung als Lernprozess</h2>
      <p>
        Diese drei Methoden - Disclosure, Editieren und Zeitverlauf -
        verdeutlichen, dass Informationsverarbeitung in KI-Systemen kein
        einseitiger Vorgang ist. <br />
        Sie sind Werkzeuge, um den Dialog zwischen Mensch und Maschine zu
        fördern.
      </p>
      <List
        items={[
          "Disclosure schafft Verständnis und Transparenz",
          "Editieren ermöglicht aktives Lernen und kontrolliertes Experimentieren",
          "Zeitverlauf bietet Nachvollziehbarkeit und Reflexion über Zeit",
        ]}
        alignItems="center"
        size="medium"
      />
      <p>
        Gemeinsam bilden sie die Grundlage für KI-Systeme, die nicht nur
        technisch effizient, sondern auch sozial und ethisch handhabbar sind.
      </p>
    </section>,
  ],
};

const sectionsVerarbeitungTechnik = [
  { id: "2", title: "Überwachtes Lernen" },
  { id: "3", title: "Unüberwachtes Lernen" },
  { id: "4", title: "Bestärkendes Lernen" },
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

/* const neuronTable = [
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
]; */

const VerarbeitungTechnik = {
  linkName: "verarbeitung-technik",
  name: "Verarbeitung - Technik",
  description:
    "Die Frage wie KI-Systeme Daten verarbeiten wird in diesem Kapitel betrachtet.",
  content: [
    <ChapterHeader text={"Verarbeitung - Technik"} number={4} />,
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
        <p className="p-10 pt-0">
          <ThemeImage
            darkSrc={labels_dark}
            lightSrc={labels_light}
            alt="Bild Muster der Buchstaben"
          />
        </p>
      </Accordion>
      <h3 className="pt-10">2. Wichtige Bestandteile des Lernprozesses</h3>
      <p>
        Beim überwachten Lernen spielen zwei zentrale Aspekte eine wichtige
        Rolle: <b>Labels</b> (also die Zielwerte) und die{" "}
        <b>Aufteilung des Datensatzes</b> in verschiedene Teile.
      </p>
      <h4>Labels - die &bdquo;richtigen Antworten&ldquo;</h4>
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
      <h4>Aufteilung des Datensatzes - Trainieren und Testen</h4>
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
      <p className="max-w-[700px]">
        <ThemeImage
          darkSrc={kvr_dark}
          lightSrc={kvr_light}
          alt="Bild Klassifikation vs. Regressionn"
        />
      </p>
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
      <Accordion title="Beispiele" initiallyOpen={false}>
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
            Straßenbedingungen, Wetter, Tageszeit und
            Geschwidigkeitsbegrenzungen einfließen.
          </li>
          <li>
            <b>Immobilien</b>: Schätzung des Verkaufspreises einer Wohnung oder
            eines Hauses anhand von Lage, Wohnfläche, Baujahr, Ausstattung und
            energetischem Zustand.
          </li>
        </ul>
      </Accordion>
      <h3>4. Herausforderungen beim überwachten Lernen</h3>
      <p>
        Beim überwachten Lernen gibt es zwei zentrale Probleme, die die
        Leistungsfähigkeit eines Modells stark beeinflussen können:{" "}
        <b>Overfitting</b> und <b>Underfitting</b>.
      </p>
      <p className="max-w-[700px]">
        <ThemeImage
          darkSrc={over_dark}
          lightSrc={over_light}
          alt="Bild Overfitting vs. Underfitting"
        />
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
      <p className="max-w-[800px]">
        <ThemeImage
          darkSrc={uuw_dark}
          lightSrc={uuw_light}
          alt="Bild unüberwachtes Lernen"
        />
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
      <p className="max-w-[700px]">
        <ThemeImage
          darkSrc={bl_dark}
          lightSrc={bl_light}
          alt="Bild Bestärkendes Lernen"
        />
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
  ],
};

const sectionsVerarbeitungGestaltung = [
  {
    id: "2",
    title: "Shapley-Werte - Wer trägt welchen Anteil an der Entscheidung?",
  },
  {
    id: "3",
    title: "Partial Dependence Plots - Zusammenhänge sichtbar machen",
  },
  {
    id: "4",
    title: "Permutation Feature Importance - Welche Faktoren wirklich zählen",
  },
];

const shapleyTable = [
  [<b>Merkmal</b>, <b>Shapley-Wert (Beitrag zur Vorhersage)</b>],
  [<>Größe</>, <>+0,15</>],
  [<>Lage (Nähe zu Betreuungseinrichtung)</>, <>+0,25</>],
  [<>Kosten</>, <>-0,30</>],
  [<>Zustand</>, <>-0,05</>],
];

const pfiTable = [
  [<b>Merkmal</b>, <b>Anstieg des Fehlers (in %)</b>, <b>Bedeutung</b>],
  [<>Mietkosten</>, <b>+22%</b>, <>Sehr wichtig</>],
  [<>Entfernung zur Betreuungseinrichtung</>, <b>+15%</b>, <>Wichtig</>],
  [<>Baujahr</>, <b>+7%</b>, <>Mittelwichtig</>],
  [<>Barrierefreiheit</>, <b>+4%</b>, <>Gering</>],
  [<>Klimaanlage vorhanden</>, <b>+1%</b>, <>Unwichtig</>],
];

const VerarbeitungInformation = {
  linkName: "verarbeitung-gestaltung",
  name: "Verarbeitung - Gestaltung",
  description:
    "Wie kann die Verarbeitung von KI-Systemen gestaltet werden damit einzuordnen ist, ob es so arbeitet wie gewünscht?",
  content: [
    <ChapterHeader text={"Verarbeitung - Gestaltung"} number={5} />,
    <section>
      <Accordion sections={sectionsVerarbeitungGestaltung} initiallyOpen />
      <SubNavigation sections={sectionsVerarbeitungGestaltung} />
    </section>,
    <section>
      <h2>1. Shapley-Werte - Wer trägt welchen Anteil an der Entscheidung?</h2>
      <p>
        Wenn KI-Systeme Entscheidungen treffen, ist das Ergebnis oft nur eine
        Zahl oder Bewertung. Aber was steckt dahinter? Welche Eingaben haben
        welchen Anteil daran, dass ein bestimmtes Resultat herauskommt? Genau
        diese Frage versuchen <b>Shapley-Werte</b> zu beantworten - eine
        Methode, die ursprünglich aus der <b>Spieltheorie</b> stammt und heute
        zu den wichtigsten Werkzeugen gehört, um{" "}
        <b>Entscheidungsprozesse in KI-Systemen transparent</b> zu machen.
      </p>
      <h3>Vom Spiel zur Entscheidung - die Grundidee</h3>
      <p>
        Der Name geht auf den Mathematiker <b>Lloyd Shapley</b> zurück, der sich
        mit fairer Verteilung von Gewinnen in kooperativen Spielen beschäftigte.{" "}
        <br />
        Stellen wir uns ein Spiel vor, in dem mehrere Personen gemeinsam ein
        Ziel erreichen - zum Beispiel ein Team, das zusammen einen Gewinn
        erspielt. Shapleys Frage lautete:{" "}
        <i>
          Wie lässt sich dieser Gewinn gerecht auf die Mitspielenden verteilen,
          abhängig davon, wie stark jede Person zum Gesamterfolg beigetragen
          hat?
        </i>
      </p>
      <p>
        Diese Idee lässt sich erstaunlich gut auf <b>KI-Modelle</b> übertragen:
      </p>
      <ul>
        <li>
          Das <b>&bdquo;Spiel&ldquo;</b> ist in unserem Fall das Modell, das
          eine Entscheidung trifft oder eine Vorhersage berechnet.
        </li>
        <li>
          Die <b>&bdquo;Spieler&ldquo;</b> sind die <b>Eingabevariablen</b>,
          also beispielsweise Lage, Größe und Kosten einer Wohnung.
        </li>
        <li>
          Der <b>&bdquo;Gewinn&ldquo;</b> ist die tatsächliche Vorhersage - etwa
          der Eignungswert eines Gebäudes für eine Wohngruppe - im Vergleich zur
          durchschnittlichen Bewertung aller untersuchten Objekte.
        </li>
      </ul>
      <p>
        Das Ziel der Methode: herauszufinden,{" "}
        <b>wie stark jede einzelne Variable zum Ergebnis beigetragen hat</b> -
        und zwar fair, indem alle möglichen Kombinationen von Merkmalen
        berücksichtigt werden.
      </p>
      <h3>Ein praktisches Beispiel</h3>
      <p>
        Eine gemeinwohlorientierte Organisation möchte mit Unterstützung eines
        KI-Systems einschätzen,{" "}
        <b>welche Immobilien sich für Menschen in Not eignen</b>.
      </p>
      <p>Das System bewertet verschiedene Objekte anhand von Merkmalen wie:</p>
      <ul>
        <li>Größe der Immobilie</li>
        <li>Entfernungn zu einer Betreuungseinrichtung</li>
        <li>Ausstattung und Zustand</li>
        <li>monatliche Mietkosten</li>
      </ul>
      <p>
        Das Modell berechnet für jede Immobilie einen Eignungswert. Eine Wohnung
        erhält z. B. <b>nur 0,35 Punkte</b> (auf einer Skala von 0 bis 1), eine
        andere <b>0,75 Punkte</b>. <br />
        Die Verantwortlichen möchten nun verstehen: Warum schneidet die erste so
        viel schlechter ab? <br />
        Mit <b>Shapley-Werten</b> lässt sich nachvollziehen, wie stark jedes
        Merkmal dazu beigetragen hat - etwa:
      </p>
      <Table data={shapleyTable} headerStyle verticalAlignCells />
      <p>
        Solche Werte zeigen: Die höheren Kosten und der schlechte Zustand haben
        die Bewertung stark gedrückt, während Lage und Größe positiv gewirkt
        haben. Damit lässt sich nicht nur die Entscheidung des Systems besser
        verstehen, sondern auch diskutieren,{" "}
        <b>ob die Gewichtung dieser Faktoren fair und sinnvoll ist</b>.
      </p>
      <div className="rounded-xl p-[var(--scale2)] mb-8 glassBox no-hover">
        <h4>Wie Shapley-Werte berechnet werden</h4>
        <p>
          In der Praxis wird für jede Variable berechnet,{" "}
          <b>wie sich das Ergebnis verändert</b>, wenn sie zum Modell
          &bdquo;hinzugefügt&ldquo; oder &bdquo;weggelassen&ldquo; wird - und
          das über alle möglichen Kombinationen von Variablen hinweg. <br />
          Der Durchschnitt dieser Veränderungen ergibt den Shapley-Wert einer
          Variable.
        </p>
        <p>
          Da die vollständige Berechnung bei vielen Variablen sehr aufwändig
          ist, arbeiten Anwendungen meist mit <b>Näherungsverfahren</b> oder{" "}
          <b>Stichproben</b>. <br />
          Viele gängige KI-Frameworks (z. B. SHAP in Python) bieten fertige
          Implementierungen, die diese Berechnungen automatisiert durchführen.
        </p>
      </div>
      <h3>Worauf Sie achten sollten</h3>
      <p>
        Die <b>Interpretation von Shapley-Werten</b> hängt immer vom{" "}
        <b>Referenzdatensatz</b> ab - also den Daten, die als Vergleich
        herangezogen werden, wenn einzelne Merkmale &bdquo;fehlen&ldquo;. Ein
        unausgewogener oder nicht repräsentativer Datensatz kann zu{" "}
        <b>verzerrten Ergebnissen</b> führen. Außerdem gilt: <br />
        Shapley-Werte sagen{" "}
        <b>
          nichts darüber aus, wie sich das Ergebnis verändern würde, wenn ein
          Merkmal tatsächlich geändert
        </b>{" "}
        würde. Sie beschreiben nur,{" "}
        <b>welchen Einfluss es im aktuellen Modell</b> hat.
      </p>
      <p>
        Beispiel: Der Shapley-Wert sagt nicht, &bdquo;wenn die Wohnung größer
        wäre, würde sie besser bewertet&ldquo;, sondern nur, &bdquo;im aktuellen
        Datensatz tragen größere Wohnungen im Schnitt positiv zur Bewertung
        bei&ldquo;.
      </p>
      <h3>Grenzen und Aufwand</h3>
      <p>
        Die Methode ist <b>rechenintensiv</b>, besonders bei komplexen oder
        hochdimensionalen Modellen. Für große Sprachmodelle (LLMs) oder
        neuronale Netze lassen sich daher meist nur{" "}
        <b>Teilsets von Merkmalen</b> untersuchen. Dennoch sind Shapley-Werte
        eines der <b>robustesten und anerkanntesten Verfahren</b>, um{" "}
        <b>Nachvollziehbarkeit und Fairness</b> in KI-Entscheidungen zu fördern.
      </p>
    </section>,
    <section>
      <h2>2. Partial Dependence Plots - Zusammenhänge sichtbar machen</h2>
      <p>
        Während <b>Shapley-Werte</b> uns zeigen, <i>welchen Anteil</i> einzelne
        Faktoren an einer Entscheidung haben, helfen{" "}
        <b>Partial Dependence Plots (PDPs)</b> dabei, <i>wie genau</i> diese
        Faktoren den Ausgang eines Modells beeinflussen. <br />
        Mit anderen Worten: Während Shapley-Werte erklären,{" "}
        <b>wer wie stark mitspielt</b>, zeigen PDPs,{" "}
        <b>wie das Zusammenspiel aussieht</b>.
      </p>
      <h3>Was zeigt ein PDP?</h3>
      <p>
        Ein <b>Partial Dependence Plot</b> stellt visuell dar,{" "}
        <b>wie sich der vorhergesagte Wert eines Modells verändert</b>, wenn
        sich ein oder mehrere Eingabefaktoren verändern - und alle anderen
        Faktoren konstant gehalten werden.
      </p>
      <p>
        Dadurch lässt sich nachvollziehen,{" "}
        <b>welche Beziehung zwischen einem Merkmal und dem Ergebnis</b> besteht:
      </p>
      <ul>
        <li>
          Steigt der Wert des Merkmals &rarr; steigt oder fällt dann auch die
          Bewertung durch das System?
        </li>
        <li>Gibt es Schwellenwerte, ab denen sich der Effekt ändert?</li>
        <li>Wie wirken zwei Merkmale in Kombination aufeinander?</li>
      </ul>
      <h3>
        Beispiel: Immobilienbewertung für eine gemeinwohlorientierte
        Organisation
      </h3>
      <p>
        Kommen wir noch einmal zu unserem Beispiel zurück: <br />
        Eine Organisation nutzt ein KI-System, um zu beurteilen, welche
        Immobilien sich für Menschen in Not eignen. Das System analysiert
        Merkmale wie Größe, Mietkosten, Baujahr und Zustand der Immobilie und
        gibt am Ende einen Eignungswert zwischen 0 (ungeeignet) und 1 (sehr
        geeignet) aus.
      </p>
      <p>
        Ein <b>Partial Dependence Plot</b> könnte nun etwa zeigen,{" "}
        <b>wie das Baujahr der Immobilie</b> den Eignungswert beeinflusst.{" "}
        <br />
        In der Abbildung verläuft eine aufsteigende Kurve:
      </p>
      <p>
        Je neuer das Gebäude, desto höher die Bewertung durch das System. <br />
        Das Modell scheint also neuere Immobilien systematisch positiver zu
        bewerten.
      </p>
      <p>
        Eine zweite, erweiterte Darstellung zeigt zusätzlich den{" "}
        <b>Zustand der Immobilie</b> als zweiten Faktor in einer farbigen{" "}
        <b>Heatmap</b>. <br />
        Darin erkennen wir, dass der Effekt des Baujahrs{" "}
        <b>abhängig von der Qualität</b> ist:
      </p>
      <ul>
        <li>
          Bei <b>sehr guter Qualität</b> spielt das Alter kaum noch eine Rolle -
          selbst ältere Gebäude erhalten hohe Bewertungen.
        </li>
        <li>
          Bei <b>schlechter Qualität</b> verstärkt sich dagegen der Effekt des
          Baujahres deutlich - alte und schlecht erhaltene Gebäude werden klar
          abgewertet.
        </li>
      </ul>
      <p>
        Solche Visualisierungen helfen,{" "}
        <b>Zusammenhänge intuitiv zu erkennen</b> - auch ohne tief in die
        Modelllogik einzusteigen.
      </p>
      <div className="rounded-xl p-[var(--scale2)] mb-8 glassBox no-hover">
        <h4>Wie ein PDP funktioniert</h4>
        <p>
          Ein PDP wird erstellt, indem man{" "}
          <b>den Wert eines Merkmals systematisch variiert</b> (z. B. das
          Baujahr von 1950 bis 2020) und dabei beobachtet,{" "}
          <b>wie sich die Modellvorhersage verändert</b>, während alle anderen
          Merkmale konstant bleiben. <br />
          Diese Veränderungen werden dann <b>als Kurve oder Fläche</b>{" "}
          visualisiert.
        </p>
        <ul>
          <li>
            <b>1D-PDPs</b> zeigen die Auswirkung <b>eines einzelnen Faktors</b>{" "}
            (z.B. Baujahr).
          </li>
          <li>
            <b>2D-PDPs</b> zeigen die <b>Wechselwirkung zweier Faktoren</b>{" "}
            (z.B. Baujahr und Zustand).
          </li>
        </ul>
      </div>
      <h3>Vorteile und Grenzen von PDPs</h3>
      <TabSwitchView>
        <div title="Vorteile">
          <ul className="mt-0">
            <li>
              Sie sind <b>intuitiv und leicht verständlich.</b>
            </li>
            <li>
              Sie helfen, <b>nichtlineare Zusammenhänge</b> zu erkennen (z.B.
              Schwellen oder Sättigungseffekte).
            </li>
            <li>
              Sie unterstützen Teams dabei,{" "}
              <b>Modellentscheidungen visuell zu prüfen</b> - auch ohne
              technisches Detailwissen.
            </li>
          </ul>
        </div>
        <div title="Grenzen">
          <ul className="mt-0">
            <li>
              PDPs setzen voraus, dass <b>Faktoren unabhängig voneinander</b>{" "}
              betrachtet werden können. <br />
              In der Realität sind Variablen aber oft <b>korreliert</b> - etwa,
              dass neuere Gebäude meistens teurer sind. <br />
              Dadurch können im PDP <b>unrealistische Kombinationen</b>{" "}
              entstehen, z.B. „sehr altes Gebäude mit extrem hohem Zustand“, die
              im echten Datensatz gar nicht vorkommen. <br />
              Das Modell zeigt dann zwar eine scheinbare Abhängigkeit, die{" "}
              <b>in der Praxis aber keine Bedeutung</b> hat.
            </li>
            <li>
              Zudem können PDPs <b>nur ein oder zwei Merkmale gleichzeitig</b>{" "}
              darstellen. Für komplexere Interaktionen braucht es andere
              Verfahren (z.B. Shapley- oder ICE-Plots).
            </li>
          </ul>
        </div>
      </TabSwitchView>
      <h3 className="mt-10">Beispiel für eine Fehlinterpretation</h3>
      <p>
        Angenommen, ein PDP zeigt, dass die Bewertung einer Immobilie{" "}
        <b>stark mit steigender Wohnfläche</b> zunimmt. <br />
        Gleichzeitig sind in den Daten aber größere Wohnungen fast immer{" "}
        <b>auch teurer</b>. <br />
        Der Plot könnte dann fälschlicherweise suggerieren, dass nur die Größe
        entscheidend ist, obwohl in Wahrheit die <b>Mietkosten</b> der
        eigentliche Treiber sind.
      </p>
      <p>
        Solche Effekte zu erkennen, ist Teil einer reflektierten Anwendung
        dieser Methode - und genau deshalb sind PDPs besonders nützlich,{" "}
        <b>wenn sie gemeinsam mit anderen Verfahren</b> wie Shapley-Werten
        eingesetzt werden.
      </p>
    </section>,
    <section>
      <h2>
        3. Permutation Feature Importance - Welche Faktoren wirklich zählen
      </h2>
      <p>
        Wenn wir verstehen wollen, welche Eingabefaktoren für die Entscheidungen
        eines KI-Systems tatsächlich wichtig sind, reicht es nicht immer, nur zu
        wissen, <i>wie</i> sie wirken. Oft möchten wir auch wissen,{" "}
        <i>wie stark</i> sich das Wegfallen oder Verfälschen eines Faktors oder
        dessen Reihenfolge im System auf das Ergebnis auswirkt. <br />
        Eine Methode, die genau das messbar macht, ist die Permutation Feature
        Importance (PFI) - zu Deutsch: die Bedeutung eines Merkmals durch
        Zufallsdurchmischung.
      </p>
      <h3>Grundidee: Was passiert, wenn wir die Reihenfolge verändern?</h3>
      <p>
        Die Idee hinter der Permutation Feature Importance ist erstaunlich
        einfach und intuitiv: <br />
        Wenn ein bestimmtes Merkmal für die Vorhersage eines Modells wichtig
        ist, sollte das Ergebnis schlechter werden, sobald wir die Werte dieses
        Merkmals zufällig durcheinander mischen. <br />
        Dadurch wird die ursprüngliche Beziehung zwischen diesem Merkmal und der
        Zielgröße zerstört. <br />
        Je stärker sich der Vorhersagefehler dadurch erhöht, desto wichtiger ist
        dieses Merkmal für das Modell.
      </p>
      <p>
        Ein Merkmal, dessen Vertauschung keine oder kaum Veränderungen bewirkt,
        hat dagegen wenig Einfluss auf die Entscheidungen des Systems - das
        Modell &bdquo;ignoriert&ldquo; es in gewisser Weise.
      </p>
      <h3>Beispiel: Bewertung von Wohnraum für Menschen in Not</h3>
      <p>
        Bleiben wir bei unserem laufenden Beispiel. <br />
        Das KI-System bewertet Immobilien danach, wie gut sie sich als Wohnraum
        für Menschen in Not eignen. Eingabefaktoren sind unter anderem:
      </p>
      <ul>
        <li>Wohnfläche</li>
        <li>Mietkosten</li>
        <li>Entfernung zur Betreuungseinrichtung</li>
        <li>Baujahr</li>
        <li>Ausstattung (Zustand, Barrierefreiheit, etc.)</li>
      </ul>
      <p>
        Nun wollen die Verantwortlichen verstehen, welche dieser Merkmale die
        Entscheidung des Systems am stärksten beeinflussen.
      </p>
      <p>Dazu wird folgende Vorgehensweise angewandt:</p>
      <List
        items={[
          "Das Modell sagt zunächst mit den echten Daten die Eignungswerte der Immobilien vorher.",
          "Anschließend wird eine Spalte (z.B. das Baujahr) zufällig durchmischt. <br /> Damit verliert das Modell die echte Verbindung zwischen Baujahr und Bewertung.",
          "Das Modell erstellt erneut Vorhersagen - diesmal mit den &bdquo;vertauschten&ldquo; Werten.",
          "Nun wird gemessen, wie stark die Vorhersage an Genauigkeit verliert.",
          "Dieser Unterschied wird für jedes Merkmal berechnet, oft mehrfach wiederholt und gemittelt.",
        ]}
        alignItems="center"
        size="small"
      />
      <p>
        Das Ergebnis zeigt, wie sehr das Modell auf jedes Merkmal angewiesen
        ist. <br />
        Beispielsweise könnte sich herausstellen:
      </p>
      <Table data={pfiTable} headerStyle verticalAlignCells />
      <p>
        In diesem Fall zeigt sich: <br />
        Das Alter der Immobilie hat einen deutlich stärkeren Einfluss auf die
        Bewertung als etwa die Ausstattung mit Klimaanlage - das System
        gewichtet also manche Merkmale stark, andere kaum.
      </p>
      <div className="rounded-xl p-[var(--scale2)] mb-8 glassBox no-hover">
        <h4>Der technische Ablauf in Kürze</h4>
        <List
          items={[
            "<b>Vorhersage mit Originaldaten</b>: Das Modell schätzt, wie geeignet jede Immobilie ist.",
            "<b>Permutation eines Merkmals</b>: Die Werte eines Faktors (z.B. Baujahr) werden zufällig neu angeordnet.",
            "<b>Vorhersage mit permutierten Daten</b>: Das Modell trifft erneut Entscheidungen, nun ohne die echte Beziehung zwischen Baujahr und Bewertung.",
            "<b>Verlgeich der Fehler</b>: Wie sehr hat sich der Vorhersagefehler erhöht?",
            "<b>Wiederholung</b>: Die Schritte werden mehrfach wiederholt und gemittelt, um zufällige Schwankungen auszugleichen.",
          ]}
          alignItems="center"
          size="small"
        />
        <p>
          Das Ergebnis: ein Wichtigkeitswert pro Merkmal, der zeigt, welche
          Faktoren das Modell wirklich nutzt, um seine Entscheidungen zu
          treffen.
        </p>
      </div>
      <h3>Warum das relevant ist</h3>
      <p>
        PFI ist besonders dann nützlich, wenn Sie wissen wollen, ob Ihr System
        auf die richtigen Dinge schaut. <br />
        Wenn etwa das Modell in unserem Beispiel feststellt, dass die
        Postleitzahl oder der Mietpreis besonders großen Einfluss hat, könnte
        das ein Hinweis auf versteckte soziale oder geografische Verzerrungen
        (Bias) sein. <br />
        Die Methode kann also helfen, Fairness-Probleme frühzeitig zu erkennen
        und zu adressieren.
      </p>
      <p>
        Zudem berücksichtigt PFI automatisch auch{" "}
        <b>Wechselwirkungen zwischen Variablen</b>: <br />
        Wenn sich zwei Merkmale gegenseitig beeinflussen (z. B. Baujahr und
        Zustand), wird dieser Effekt mitgemessen - denn durch das Durchmischen
        werden alle Abhängigkeiten zwischen diesem Merkmal und den anderen
        gleichzeitig aufgehoben.
      </p>
      <h3>Vorteile und Grenzen</h3>
      <TabSwitchView>
        <div title="Vorteile">
          <ul className="mt-0">
            <li>
              <b>Einfach und modellunabhängig</b>: Sie funktioniert mit fastem
              jedem KI-Modell, ohne dass es neu trainiert werden muss.
            </li>
            <li>
              <b>Erhöht Transparenz und Fairness</b>: Zeigt auf, welche Faktoren
              in der Praxis tatsächlich Einfluss nehmen.
            </li>
            <li>
              <b>Berücksichtigt Interaktionen</b>: Auch Kombinationseffekte
              zwischen Variablen fließen mit ein.
            </li>
            <li>
              <b>Verständlich für Nicht-Expert:innen</b>: Das Prinzip &bdquo;wie
              mischen und schauen, was passiert&ldquo; ist leicht
              nachvollziehbar.
            </li>
          </ul>
        </div>
        <div title="Grenzen und Herausforderungen">
          <ul className="mt-0">
            <li>
              <b>Kein Verständnis der Richtung</b>: PFI zeigt nur,{" "}
              <i>wie stark</i> ein Faktor wirkt - nicht{" "}
              <i>ob er positiv oder negativ</i> wirkt.
            </li>
            <li>
              <b>Zufälligkeit und Streuung</b>: Da die Methode auf
              Zufallsdurchmischung basiert, können Ergebnisse schwanken. <br />
              Eine Mehrfach-Wiederholung (und Mittelung) stabilisiert die
              Ergebnisse, kostet aber <b>mehr Rechenzeit</b>.
            </li>
            <li>
              <b>Keine Aussage über Ursache und Wirkung</b>: PFI misst
              Bedeutung, nicht Kausalität. Ein hoher Wert bedeutet nicht, dass
              dieses Merkmal <i>verursacht</i>, dass das Ergebnis so ausfällt -
              nur, dass es eng damit verknüpft ist.
            </li>
          </ul>
        </div>
      </TabSwitchView>
      <h3 className="mt-10">Beispielhafte Fehlinterpretation</h3>
      <p>
        Wenn die Organisation feststellt, dass das Merkmal „Postleitzahl“ sehr
        wichtig für die Bewertung ist, bedeutet das <b>nicht</b>, dass die Lage
        per se problematisch ist. Es kann sein, dass in bestimmten Stadtteilen
        schlicht häufiger Immobilien mit schlechter Ausstattung vorkommen – und
        das Modell diesen Zusammenhang gelernt hat. <br />
        PFI hilft also, solche <b>versteckten Muster sichtbar zu machen</b>,
        erfordert aber immer <b>eine menschliche Interpretation</b>, um
        Fehlschlüsse zu vermeiden.
      </p>
    </section>,
  ],
};

const sectionsOutputTechnik = [
  { id: "2", title: "Warum der Output entscheident ist" },
  { id: "3", title: "Kategorische Outputs" },
  { id: "4", title: "Pattern Matching" },
  { id: "5", title: "Numerische Prädiktionen" },
  { id: "6", title: "Synthetische Ergebnisse" },
  { id: "7", title: "Forecasting" },
  { id: "8", title: "Metadaten: Wie gut ist der Output?" },
  { id: "9", title: "Fazit" },
];

const exampleOutputTable = [
  [<b>Wohnung</b>, <b>KI-Bewertung (Score 0-100)</b>],
  [<>A</>, <>82</>],
  [<>B</>, <>76</>],
  [<>C</>, <>41</>],
  [<>D</>, <>59</>],
];

const OutputTechnik = {
  linkName: "output-technik",
  name: "Output - Technik",
  description:
    "Mehr als nur ein Ergebnis: KI-Outputs kritisch verstehen und richtig deuten.",
  content: [
    <ChapterHeader text={"Output - Technik"} number={6} />,
    <section>
      <Accordion sections={sectionsOutputTechnik} />
      <SubNavigation sections={sectionsOutputTechnik} />
    </section>,
    <section>
      <h2>Einleitung: Warum der Output entscheident ist</h2>
      <p>
        Der Output eines KI-Systems ist das sichtbare Ergebnis aller
        vorhergehenden Verarbeitungsschritte - und damit die Grundlage, auf der
        Menschen und andere Systeme weiterarbeiten. Er entscheidet darüber, wie
        nützlich, verständlich und anschlussfähig ein System im konkreten
        Anwendungskontext ist.
      </p>
      <p>
        Besonders in gemeinwohlorientierten Organisationen, in denen
        Entscheidungen oft soziale Folgen haben, ist es wichtig, nicht nur das
        Ergebnis selbst, sondern auch dessen Art, Herkunft und Aussagekraft zu
        verstehen. Denn nicht jeder Output ist gleich: Systeme können Texte
        bewerten, Wahrscheinlichkeiten berechnen, Prognosen abgeben oder sogar
        neue Daten erzeugen.
      </p>
      <p>
        Dieses Kapitel gibt einen Überblick über die wichtigsten Output-Formen
        von KI-Systemen und erläutert, wie sie gelesen, interpretiert und
        kritisch hinterfragt werden können.
      </p>
    </section>,
    <section>
      <h2>1. Kategorische Outputs</h2>
      <p>
        Viele KI-Systeme ordnen Daten in Kategorien ein. Diese Form des Outputs
        findet sich häufig bei Klassifikationsaufgaben - etwa, wenn ein System
        E-Mails als &bdquo;Spam&ldquo; oder &bdquo;Nich&ldquo;-Spam“ markiert,
        oder wenn ein Textanalysetool die Stimmung eines Textes als
        &bdquo;positiv&ldquo;, &bdquo;neutral&ldquo; oder &bdquo;negativ&ldquo;
        einstuft.
      </p>
      <p>
        Für gemeinwohlorientierte Organisationen können solche Modelle zum
        Beispiel eingesetzt werden, um eingehende Anträge zu sortieren oder
        Texte nach Themen zu gruppieren. Wichtig ist dabei zu verstehen, dass
        eine Kategorie nicht immer eindeutig &bdquo;richtig&ldquo; ist: ein
        analysierter Text kann sowohl sachlich als auch emotional gefärbt sein
        und somit zwei Kategorien zugeordnet werden.
      </p>
      <p>
        Ein zentrales Merkmal kategorialer Outputs ist die Wahrscheinlichkeit,
        mit der eine Zuordnung vorgenommen wird. Ein Modell kann etwa schätzen,
        dass eine Nachricht mit 70 % Wahrscheinlichkeit &bdquo;positiv&ldquo;
        ist, mit 20 % &bdquo;neutral&ldquo; und mit 10 % &bdquo;negativ&ldquo;.
      </p>
      <Accordion title="Beispiel aus der Praxis" initiallyOpen={true}>
        <p>
          Eine Organisation, die Bürgeranfragen automatisch vorsortieren möchte,
          nutzt ein KI-Modell, das E-Mails in die Kategorien &bdquo;Lob&ldquo;,
          &bdquo;Beschwerde&ldquo;, &bdquo;Antrag&ldquo; und
          &bdquo;Sonstiges&ldquo; einteilt. Eine Nachricht wird als „Antrag“
          klassifiziert, mit einer Wahrscheinlichkeit von 55 %. Auf den ersten
          Blick mag das ausreichend erscheinen - doch die zweitwahrscheinlichste
          Kategorie &bdquo;Beschwerde&ldquo; liegt bei 40 %. Es wäre also
          riskant, die E-Mail automatisch einem Bearbeitungsprozess zuzuweisen,
          ohne diesen Unsicherheitsbereich zu berücksichtigen.
        </p>
      </Accordion>
      <p className="specialText">
        <b>Merksatz</b>: Kategorische Outputs sollten nie als absolute
        Wahrheiten interpretiert werden. Ein Blick auf die zweit- oder
        drittwahrscheinlichste Kategorie kann helfen, Fehlentscheidungen zu
        vermeiden.
      </p>
    </section>,
    <section>
      <h2>2. Pattern Matching</h2>
      <p>
        Unter <i>Pattern Matching</i> versteht man das Erkennen wiederkehrender
        Muster in Daten. Dabei sucht ein KI-System nach regelmäßigen Abfolgen,
        Beziehungen oder Ähnlichkeiten zwischen Datenpunkten.
      </p>
      <p>
        Diese Methode wird vor allem dort eingesetzt, wo es um zeitliche oder
        sequentielle Zusammenhänge geht - etwa in der Analyse von
        Verlaufsmustern, Ereignisfolgen oder Textstrukturen.
      </p>
      <Accordion title="Beispiel aus der Praxis" initiallyOpen={true}>
        <p>
          Ein gemeinnütziges Gesundheitsprojekt analysiert Gesprächsverläufe aus
          einer Online-Beratung. Das System erkennt, dass Anfragen, in denen
          Wörter wie <i>&bdquo;überfordert&ldquo;</i>,{" "}
          <i>&bdquo;allein&ldquo;</i> oder{" "}
          <i>&bdquo;nicht mehr weiter&ldquo;</i> vorkommen, häufig in einer
          Eskalation enden, wenn innerhalb von 24 Stunden keine Antwort erfolgt.
          Diese Mustererkennung hilft der Organisation, Prioritäten zu setzen
          und gefährdete Fälle schneller zu identifizieren.
        </p>
      </Accordion>
      <p>
        Pattern Matching liefert also keine Bewertung, sondern erkennt
        Strukturen, die menschlichen Entscheidenden Hinweise geben. Dabei gilt:
        Muster sind immer statistisch - sie zeigen Wahrscheinlichkeiten, keine
        Notwendigkeiten.
      </p>
      <p className="specialText">
        <b>Reflexionsfrage</b>: Welche Risiken könnten entstehen, wenn eine
        Organisation erkannte Muster als feste Regeln interpretiert?
      </p>
    </section>,
    <section>
      <h2>3. Numerische Prädiktion</h2>
      <p>
        Numerische Prädiktionen gehören zu den wichtigsten Outputs vieler
        KI-Systeme. Statt Kategorien liefert das Modell hier <b>Zahlenwerte</b>,
        die als Bewertung, Wahrscheinlichkeit oder Score dienen.
      </p>
      <p>
        Ziel ist es, eine mathematische Funktion zu finden, die auf Basis der
        Eingabedaten einen quantitativen Output erzeugt - zum Beispiel den
        geschätzten Wert einer Immobilie, die Wahrscheinlichkeit eines
        Ereignisses oder einen Prioritätsscore.
      </p>
      <Accordion title="Beispiel aus der Praxis" initiallyOpen={true}>
        <p>
          Eine soziale Einrichtung möchte geeigneten Wohnraum für Familien in
          Not finden. Das KI-Modell bewertet 100 verfügbare Wohnungen anhand von
          Größe, Lage, Zustand und Mietkosten.
          <br />
          Der Output sieht vereinfacht so aus:
        </p>
        <Table
          data={exampleOutputTable}
          headerStyle={false}
          verticalAlignCells={true}
        />
        <p>
          Je höher der Wert, desto besser die Eignung. Die Organisation kann
          diese Bewertung als Orientierungshilfe nutzen - sollte aber immer
          prüfen,{" "}
          <b>welche Merkmale den Score am stärksten beeinflusst haben</b> (z. B.
          über Methoden wie Shapley-Werte oder Permutationsanalysen).
        </p>
      </Accordion>
      <p>
        Numerische Prädiktionen ermöglichen es auch, die <b>Abweichung</b> eines
        Werts zu quantifizieren - ein Vorteil, wenn Systeme durch Lernen
        schrittweise optimiert werden sollen.
      </p>
      <p className="specialText">
        <b>Merksatz</b>: Numerische Outputs machen Unterschiede messbar - aber
        nicht automatisch erklärbar. Transparente Modelle helfen, Zahlen richtig
        einzuordnen.
      </p>
    </section>,
    <section>
      <h2>4. Synthetische Ergebnisse</h2>
      <p>
        Synthetische Outputs entstehen, wenn ein KI-System{" "}
        <b>neue Daten erzeugt</b>, anstatt vorhandene zu bewerten. Dazu gehören
        automatisch generierte Texte, Bilder, Musik oder Simulationen.
      </p>
      <p>
        Im gemeinwohlorientierten Bereich kann diese Art des Outputs
        beispielsweise genutzt werden, um{" "}
        <b>Situationen zu simulieren oder alternative Szenarien zu prüfen</b>.
      </p>
      <Accordion title="Beispiel aus der Praxis" initiallyOpen={true}>
        <p>
          Ein Stadtentwicklungsprojekt möchte ermitteln, wie sich neue
          Grünflächen auf die Lebensqualität in einem Viertel auswirken könnten.
          Das KI-System erzeugt auf Basis vorhandener Umweltdaten und
          Bürgerbefragungen synthetische Szenarien, die verschiedene
          Kombinationen von Bebauungsdichte, Verkehrsaufkommen und Grünanteil
          zeigen. <br />
          Diese Simulationen helfen, Entscheidungen über die Stadtplanung zu
          unterstützen, ohne reale Eingriffe vornehmen zu müssen.
        </p>
      </Accordion>
      <p>
        Synthetische Ergebnisse bieten also große Chancen für Planung,
        Simulation und Bildung. Gleichzeitig stellt sich die Frage nach{" "}
        <b>ethischer Verantwortung</b>: Je realistischer synthetische Daten
        sind, desto größer ist das Risiko, dass sie mit echten verwechselt oder
        missbräuchlich verwendet werden.
      </p>
      <p className="specialText">
        <b>Merksatz</b>: Synthetische Daten sind Werkzeuge zur Exploration -
        keine Abbilder der Realität.
      </p>
    </section>,
    <section>
      <h2>5. Forecasting</h2>
      <p>
        Forecasting ist die Vorhersage zukünftiger Entwicklungen auf Basis
        vergangener und aktueller Daten. Anders als bei numerischen Prädiktionen
        liegt hier der Fokus auf Trends über Zeiträume hinweg.
      </p>
      <Accordion title="Beispiel aus der Praxis" initiallyOpen={true}>
        <p>
          Eine Organisation, die Lebensmittelspenden koordiniert, nutzt
          Forecasting, um den künftigen Bedarf an bestimmten Produkten zu
          planen. <br />
          Das Modell zeigt:
        </p>
        <ul>
          <li>
            Wenn die Temperaturen im Winter unter 0°C fallen, steigt die
            Nachfrage nach warmen Mahlzeiten um durchschnittlich 18%.
          </li>
          <li>In Ferienzeiten sinkt die Spendenbereitschaft um rund 12%.</li>
        </ul>
      </Accordion>
      <p>
        Diese Informationen ermöglichen es, Ressourcen effizienter einzuplanen
        und Engpässe frühzeitig zu vermeiden.
      </p>
      <p>
        Forecasting erlaubt so die Antizipation von Bedarfen und Risiken - ist
        jedoch immer von der Qualität der zugrundeliegenden Daten abhängig.
        Unerwartete Ereignisse (z. B. Pandemien, politische Krisen) können die
        Genauigkeit solcher Vorhersagen erheblich beeinträchtigen.
      </p>
    </section>,
    <section>
      <h2>6. Metadaten: Wie gut ist der Output?</h2>
      <p>
        Neben den inhaltlichen Ergebnissen liefern viele KI-Systeme sogenannte
        Metadaten - also Informationen über die Güte ihrer eigenen
        Entscheidungen. <br />
        Zu den wichtigsten gehören Accuracy, Precision und Recall.
      </p>
      <h4>Accuracy</h4>
      <p>Wie viele Vorhersagen des Systems waren insgesamt korrekt?</p>
      <p className="specialText">
        <b>Beispiel</b>: Von 100 Anträgen erkennt ein System 70 korrekt &rarr;
        Accuracy = 70%.
      </p>
      <h4>Precision</h4>
      <p>
        Wie viele der als &bdquo;positiv&ldquo; eingestuften Fälle warne
        tatsächlich positiv?
      </p>
      <p className="specialText">
        <b>Beispiel</b>: 50 Anträge wurden als &bdquo;dringend&ldquo; markiert,
        aber nur 40 waren es tatsächlich &rarr; Precision = 40/50 = 80%.
      </p>
      <h4>Recall</h4>
      <p>Wie viele der tatsächlich positiven Fälle wurden erkannt?</p>
      <p className="specialText">
        <b>Beispiel</b>: Es gab 60 wirklich dringende Anträge, 40 davon wurden
        richtig erkannt &rarr; Recall = 40/60 = 66,7%.
      </p>
      <Accordion title="Bedeutung in der Praxis" initiallyOpen={true}>
        <p>
          Eine Organisation, die Anträge nach Dringlichkeit sortiert, sollte
          dann auf einen hohen <b>Recall</b> achten, wenn das Übersehen eines
          Falls (False Negative) gravierende Folgen hätte - etwa, dass eine
          Person in Not keine schnelle Hilfe bekommt.
        </p>
        <p>
          Wenn hingegen Falschalarme (<i>False Positives</i>) problematisch sind
          - etwa, weil sie Ressourcen binden - ist eine hohe Precision
          wichtiger.
        </p>
      </Accordion>
      <h3>Reflexionsfragen</h3>
      <p>Fragen die man sich im Rahmen des Outputs stellen könnte:</p>
      <List
        items={[
          "Welche Form von Output produziert das KI-System, mit dem Sie arbeiten (z.B. Textklassifikation, Score, Simulation)?",
          "Wie könnte die Darstellung der Ergebnisse verbessert werden, um sie für die Zielgruppe verständlicher oder nützlicher zu machen?",
          "Wie stark würden Sie sich auf die Ergebnisse verlassen, wenn das System zusätzlich sein Accuracy oder Confidence mitliefert?",
        ]}
        alignItems="center"
        size="medium"
      />
    </section>,
    <section>
      <h2>Fazit</h2>
      <p>
        Das Verständnis verschiedener Output-Formen ist entscheidend, um
        KI-Systeme sinnvoll in gemeinwohlorientierten Kontexten zu nutzen.{" "}
        <br />
        Ob kategoriale Zuordnung, numerische Prädiktion, Forecasting oder
        Simulation - der Output ist immer nur so gut wie seine Interpretation.{" "}
        <br />
        Die Herausforderung liegt darin, Ergebnisse nicht als absolute
        Wahrheiten, sondern als Hilfsmittel zur Entscheidungsunterstützung zu
        begreifen. Nur dann kann KI in gemeinwohlorientierten Organisationen das
        leisten, was sie soll: Prozesse verbessern, ohne Verantwortung zu
        ersetzen.
      </p>
    </section>,
  ],
};

const sectionsOutputGestaltung = [
  {
    id: "2",
    title:
      "Was ist bei Interaktion mit KI-Systemen im Bezug auf den Output relevant?",
  },
  { id: "3", title: "UX-Beispiel: Kreditbewilligung" },

  { id: "5", title: "Fazit" },
];

const lfrTable = [
  [<b>Merkmal</b>, <b>Einfluss auf die KI-Vorhersage</b>],
  [<>Langfristiger Blutzuckerwert (HbA1c)</>, <>sehr Hoch</>],
  [<>BMI (Übergewicht)</>, <>hoch</>],
  [<>Alter</>, <>moderat</>],
  [<>Bewegung pro Woche</>, <>gering</>],
  [<>Geschlecht</>, <>kaum Einfluss</>],
];

const OutputInformation = {
  linkName: "output-gestaltung",
  name: "Output - Gestaltung",
  description:
    "Ein guter KI-Output beantwortet mehr als nur die Frage nach dem Ergebnis. Er erklärt das 'Warum', das 'Wie sicher' und das 'Was wäre wenn' für Nutzervertrauen.",
  content: [
    <ChapterHeader
      text={"Output - Integrierte Informationsverarbeitung"}
      number={7}
    />,
    <section>
      <p>
        Outputs von KI-Systemen sind die Ergebnisse, die ein KI-Modell
        produziert, nachdem es Eingabedaten verarbeitet hat. Beispiele:
        Vorhersagen, Klassifikationen, Wahrscheinlichkeiten, Texte, Bilder etc.{" "}
        <br />
        <b>Kurz</b>: Was das Modell am Ende &bdquo;ausspuckt&ldquo;.
      </p>
      <Accordion sections={sectionsOutputGestaltung} initiallyOpen />
      <SubNavigation sections={sectionsOutputGestaltung} />
    </section>,
    <section>
      <h2>
        Was ist bei Interaktion mit KI-Systemen im Bezug auf den Output
        relevant?
      </h2>
      <p>
        Wenn ein Nutzer mit einem KI-System interagiert, möchte er oft
        verstehen:
      </p>
      <ul>
        <li>
          <b>Warum</b> hat die KI diese Entscheidung getroffen? &rarr;{" "}
          <i>Local Feature Relevance</i>
        </li>
        <li>
          <b>Wie sicher</b> ist sich die KI in ihrer Antwort? &rarr;{" "}
          <i>Confidence Estimation</i>
        </li>
        <li>
          <b>Was könnte anders sein</b>, damit das Ergebnis anders ausfällt?
          &rarr; <i>Counterfactual Explanation</i>
        </li>
      </ul>
      <h3>1. Local Feature Relevance (Lokale Merkmalsbedeutung)</h3>
      <p>
        Hier wird{" "}
        <b>
          erklärt, welche Eingabemerkmale für eine einzelne spezifische
          Vorhersage wichtig waren
        </b>
        .
      </p>
      <p>
        Beispiel bei einer medizinischen Diagnose-KI:
        <br />
        &bdquo;Für diese eine Vorhersage waren Alter und Blutdruck besonders
        einflussreich, Geschlecht dagegen weniger.&ldquo;
      </p>
      <p className="specialText">
        <b>Kurz</b>: Welche Faktoren haben in genau diesem Fall das ERgebnis
        bestimmt?
      </p>
      <p>
        Typische Anwendung im Interface: Heatmaps, Balkendiagramme, Tooltipps
        &bdquo;Dieses Merkmal hatte den größten Einfluss&ldquo;
      </p>
      <h4>Beispiel mit Diabetes-Diagnose</h4>
      <p>
        Eine Ärztin gibt die Patientendaten in die KI ein. Das Modell sagt:{" "}
        <b>
          &bdquo;Hohe Wahrscheinlichkeit für ein zukünftiges
          Diabetes-Risiko.&ldquo;
        </b>
      </p>
      <p>
        Die <b>Local Feature Relevance</b> zeigt für{" "}
        <b>diesen einen Patienten</b>:
      </p>
      <Table data={lfrTable} headerStyle verticalAlignCells />
      <p>
        So kann die Ärztin <b>verstehen, warum</b> die KI das Risiko als hoch
        einschätzt - nicht generell, sondern <b>bei genau diesem Menschen</b>.
      </p>
      <h3>2. Confidence Estimation (Konfidenzschätzung)</h3>
      <p>
        Das ist die{" "}
        <b>
          Einschätzung des Modells, wie sicher es sich bei seiner eigenen
          Vorhersage ist
        </b>
        . Meist wird dies als Wahrscheinlichkeit oder Score ausgegeben.
      </p>
      <p>
        <b>Wichtig</b>: Hohe Confidence bedeutet nicht automatisch, dass die
        Vorhersage korrekt ist - nur, dass das Modell &bdquo;glaubt&ldquo;, dass
        sie korrekt ist.
      </p>
      <p className="specialText">
        <b>Kurz</b>: Wie sicher ist das Modell bei seiner Antwort?
      </p>
      <p>
        Typische Anwendung im Interface: Wahrscheinlichkeitsanzeigen,
        Farbcodierung (z.B. grün = sicher, rot = unsicher)
      </p>
      <h4>Beispiel mit Diabetes-Diagnose</h4>
      <p>Nach der Risiko-Prognose zeigt das System:</p>
      <p>
        <b>Diabetes-Risiko: 78% Wahrscheinlichkeit</b>
        <br />
        <b>Vertrauensniveau des Modells: 92%</b>
      </p>
      <p>Die Ärztin erkennt dadurch:</p>
      <ul>
        <li>
          Die KI ist <b>sehr sicher</b>, obwohl die Entscheidung komplex ist.
        </li>
        <li>
          Sie kann die Informationen vorsichtig weitergeben: &bdquo;Die Daten
          deuten stark auf ein erhöhtes Risiko hin.&ldquo;
        </li>
        <li>
          Wäre die <b>Confidence z.B. nur 40%</b>, wäre Vorsicht angesagt.
          Eventuell müssten weitere Tests gemacht werden.
        </li>
      </ul>
      <h3>3. Counterfactual Explanation (Was-wäre-wenn-Erklärung)</h3>
      <p>
        Eine counterfaktische Erklärung zeigt,{" "}
        <b>
          welche minimale Veränderung an der Eingabe nötig wäre, damit das
          Modell zu einem anderen Ergebnis kommt
        </b>
        .
      </p>
      <p>
        Beispiel:
        <br />
        &bdquo;Die Kreditbewerbung wurde abgelehnt.{" "}
        <b>
          Hätte ihr Einkommen 400€ höher gelegen, wäre sie angenommen
          worden.&ldquo;
        </b>
      </p>
      <p className="specialText">
        <b>Kurz</b>: Welche kleine Änderung hätte das Ergebnis verändert?
      </p>
      <p>
        Typische Anwendung im Interface:
        <br />
        Interaktive &bdquo;Was-wäre-wenn&ldquo;-Slider: Nutzer:innen kann Werte
        verändern und sieht direkt, wie sich das Ergebnis ändert.
      </p>
      <h4>Beispiel mit Diabetes-Diagnose</h4>
      <p>Die KI gibt zusätzlich eine counterfaktische Empfehlung:</p>
      <p>
        <b>
          &bdquo; Wenn der BMI um 2 Punkte reduziert wird oder der Patient 2
          zusätzliche Sporteinheiten pro Woche durchführt, sinkt das
          Diabetes-Risiko von 78% auf 45%. &ldquo;
        </b>
      </p>
      <p>Im Interface kann die Ärztin z.B. einen Schieberegler bewegen:</p>
      <ul>
        <li>BMI von 31 &rarr; 29 &rarr; Risiko sinkt sichtbar</li>
        <li>Bewegung 1h/Woche &rarr; 3h/Woche &rarr; Risiko sinkt weiter</li>
      </ul>
      <p>
        Diese Erklärung ist <b>handlungsorientiert</b>, weil sie nicht nur
        zeigt, was das Risiko ist, sondern auch, was man konkret tun könnte.
      </p>
    </section>,
    <section>
      <h2>UX-Beispiel: Kreditbewilligung</h2>
      <p>Stellen Sie sich ein Dashboard für Kreditentscheidungen vor:</p>
      <List
        items={[
          "<b>Local Feature Relevance</b> &rarr; Balken zeigt: &bdquo;Einkommen +400€, Schulden -100€ &rarr; stärkster Einfluss auf Entscheidung",
          "<b>Confidence Estimation</b> &rarr; Ampel/Prozentangabe: &bdquo;KI ist zu 85% sicher, dass der Antrag abgelehnt wird&ldquo;",
          "<b>Counterfactual Explanation</b> &rarr; Interaktives Widget: &bdquo;Wenn Sie ihr Einkommen um 400€ erhöhen oder Schulden reduzieren, würde der Antrag genehmigt&ldquo;",
        ]}
        alignItems="center"
        size="medium"
      />
      <h3>Resultat für UX:</h3>
      <ul>
        <li>
          Nutzer:innen verstehen die Entscheidung (Local Feature Relevance)
        </li>
        <li>
          Nutzer:innen wissen, wie zuverlässig die KI ist (Confidence
          Estimation)
        </li>
        <li>
          Nutzer:innen können potenzielle Maßnahmen ausprobieren (Counterfactual
          Explanation)
        </li>
      </ul>
    </section>,
    <section>
      <h2>Fazit</h2>
      <p>
        Damit Nutzer:innen die Ergebnisse eines KI-Systems verstehen und ihnen
        vertrauen können, reicht der reine Output (z. B. ein Risiko-Wert oder
        eine Entscheidung) nicht aus. Erst durch ergänzende
        Erklärungsmechanismen wird der Output <b>interpretierbar und nutzbar</b>
        .
      </p>
      <ul>
        <li>
          <b>Local Feature Relevance</b> zeigt, <b>warum</b> das Modell zu genau
          diesem Ergebnis kam.
        </li>
        <li>
          <b>Confidence Estimation</b> macht transparent, <b>wie sicher</b> das
          Modell in seiner Vorhersage ist.
        </li>
        <li>
          <b>Counterfactual Explanation</b> eröffnet{" "}
          <b>konkrete Handlungsmöglichkeiten</b>, indem sie zeigt, wie das
          Ergebnis durch kleine Änderungen beeinflusst werden kann.
        </li>
      </ul>
      <p>
        In der UX führt die Kombination dieser drei Aspekte zu{" "}
        <b>Vertrauen, Nachvollziehbarkeit und Kontrolle</b>: zentrale
        Voraussetzungen für verantwortungsbewusste und gebrauchstaugliche
        KI-Systeme.
      </p>
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
    <b>Modell & Anbieter</b>,
    <b>Besonderheit / Fokus</b>,
    <b>Einsatz & Nutzen</b>,
    <b>Lizenz / Offenheit</b>,
  ],
  [
    "GPT-4 / GPT-4o von OpenAI",
    "Sehr leistungsfähig, vielseitig (Text, Code, Analyse, Konversation)",
    "Schreiben, Programmieren, Wissensarbeit, Chatbots",
    "Proprietär (Cloud-basiert)",
  ],
  [
    "Gemini von Google DeepMind",
    "Multimodal (Text, Bild, Code, Video), eng mit Google-Ecosystem verknüpft",
    "Multimodale Anwendungen, Such- und Wissensintegration",
    "Proprietär",
  ],
  [
    "Claude von Anthropic",
    "Fokus auf Sicherheit, Ethik, transparente KI-Antworten",
    "Sichere, erklärbare KI-Nutzung in sensiblen Bereichen",
    "Proprietär",
  ],
  [
    "Llama von Meta AI",
    "Offen zugänglich, stark für Forschung & Fine-Tuning",
    "Eigene Anpassungen, Forschung, interne Nutzung",
    "Teilweise offen (Open-Weight, Lizenzbeschränkungen)",
  ],
  [
    "Mistral / Mixtral von Mistral AI (EU)",
    "Europäischer Fokus auf Effizienz, Datenschutz, Open-Source-Ansatz",
    "On-Premises-Lösungen, datenschutzsensible Anwendungen",
    "Offen (Apache 2.0 / Open-Weight)",
  ],
];

const LLM = {
  linkName: "llm",
  name: "LLMs",
  description:
    "Dieses Kapitel erklärt, wie LLMs durch Wortvorhersage plausible Texte erzeugen, warum sie aber nichts wirklich verstehen, deshalb 'halluzinieren' und welche Kriterien bei der Auswahl des richtigen Modells entscheidend sind.",
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
        <b> guten Möglichkeiten</b> auswählen. Das sorgt für{" "}
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
        Wenn ein Modell nicht regelmäßig aktualisiert wird, kennt es keine{" "}
        <b>aktuellen Ereignisse</b> oder <b>neuen Daten</b> nach dem Zeitpunkt
        seines Trainings.
      </p>
      <h4>4. Bias (Voreingenommenheit)</h4>
      <p>
        Da LLMs auf menschlichen Texten trainiert werden, übernehmen sie auch{" "}
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

const linksAndNames = [
  {
    link: InputTechnik.linkName,
    name: InputTechnik.name,
    description: InputTechnik.description,
  },
  {
    link: InputInformation.linkName,
    name: InputInformation.name,
    description: InputInformation.description,
  },
  {
    link: VerarbeitungTechnik.linkName,
    name: VerarbeitungTechnik.name,
    description: VerarbeitungTechnik.description,
  },
  {
    link: VerarbeitungInformation.linkName,
    name: VerarbeitungInformation.name,
    description: VerarbeitungInformation.description,
  },
  {
    link: OutputTechnik.linkName,
    name: OutputTechnik.name,
    description: OutputTechnik.description,
  },
  {
    link: OutputInformation.linkName,
    name: OutputInformation.name,
    description: OutputInformation.description,
  },
  {
    link: LLM.linkName,
    name: LLM.name,
    description: LLM.description,
  },
];

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
        Ergebnisse sprechen - und betrachten die Grundlagen:{" "}
        <b>
          Wie gelangen Systeme überhaupt an Informationen, und was passiert,
          wenn sie diese &bdquo;verstehen&ldquo; sollen?
        </b>
      </p>
      <p>
        Wenn wir über Künstliche Intelligenz sprechen, sprechen wir im Kern über
        <b> Informationsverarbeitung</b>. Ein KI-System kann nur so gute
        Ergebnisse liefern, wie die Informationen sind, auf die es Zugriff hat
        und wie diese Informationen strukturiert, interpretiert und miteinander
        in Beziehung gesetzt werden.
      </p>
      <p className="specialText text-center">
        <b>Leitgedanke</b>: KI verstehen heißt, Informationsverarbeitung
        verstehen.
      </p>
    </section>,
    <section>
      <h3>Zielsetzung des Moduls</h3>
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
      <h3>Fokus: Gemeinsame Informationsverarbeitung von Mensch und System</h3>
      <p>
        In diesem Modul bieten wir daher einen{" "}
        <b>
          systematischen Einstieg in das Thema Informationsverarbeitung in
          KI-Systemen
        </b>{" "}
        und in die Rolle, die der Mensch in dieser Kooperation spielt.
        Ausgangspunkt ist das{" "}
        <b>
          {" "}
          Modell der integrierten Informationsverarbeitung (Integrated
          Information Processing)
        </b>
        , das Technik und menschliches Denken gemeinsam betrachtet.
      </p>
      <p>
        <ThemeImage
          darkSrc={iip_dark}
          lightSrc={iip_light}
          alt="Bild integrierten Informationsverarbeitung"
        />
      </p>
      <p>Dabei beschäftigen wir uns unter anderem mit folgenden Fragen:</p>
      <ul>
        <li>
          Wie müssen Informationen aufbereitet sein, damit System sie
          &bdquo;verstehen&ldquo; und verarbeiten können?
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
    <section>
      <h3>Kapitelübersicht</h3>
      <div className="flex flex-wrap justify-center -mx-4">
        {linksAndNames.map((item, index) => (
          <SubTopicCard
            key={item.link || index}
            topicName={item.name}
            link={item.link}
            description={item.description}
            number={index}
          />
        ))}
      </div>
    </section>,
  ],
};

const tmpSourceList = [
  {
    title: "",
    data: tmpSources,
  },
];

const Quellen = {
  linkName: "quellen",
  name: "Quellen",
  description:
    "Hier befinden sich die verwendeten Quellen in Reihenfolge des ersten Auftretens",
  content: [
    <ChapterHeader text={"Quellen"} number={9} />,
    <section>
      <Sources sourceData={tmpSourceList} />
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
    Quellen,
  ],
};

export default Dateninput;
