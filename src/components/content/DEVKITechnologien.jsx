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

const Einleitung = {
  linkName: "einleitung",
  name: "Einleitung",
  description:
    "Hier wird ein Überblick über die die KI Technologien und deren Funktionsweise gegeben.",
  content: [
    <ChapterHeader text={"Einleitung"} number={1} />,
    <section>
      <p>
        In diesem Modul steht die Verarbeitung von Informationen durch
        KI-Systeme im Mittelpunkt. Nachdem zuvor erläutert wurde, wie
        Informationen an KI-Systeme übermittelt werden, geht es nun darum, auf
        welche Weise diese Systeme die erhaltenen Daten verarbeiten.
      </p>

      <p>
        Im Zentrum des Moduls steht die Vorstellung verschiedener Lernarten, mit
        denen KI-Systeme trainiert werden können und die bestimmen, wie sie mit
        Informationen umgehen.
      </p>

      <p>
        Darüber hinaus werden in diesem Zusammenhang auch neuronale Netze sowie
        der Umgang mit Unsicherheiten und Fehlern während der
        Informationsverarbeitung thematisiert.
      </p>
    </section>,
    <section>
      <p>CARDS ZU EINZELNEN KAPITELN</p>
    </section>,
    <section>
      <p>
        Es gibt fünf Arten von Maschinellem Lernen. Welche dabei eingesetzt
        wird, hängt von der Aufgabenstellung un der Art der Daten ab die zur
        Verfügung stehen.
      </p>
      <p>GRAFIK MIT ARTEN</p>
      <p>Sachen zu einzelnen Begriffen</p>
    </section>,
    <section>
      <h2>Warum ist es wichtig, zu verstehen, wie Systeme angelernt werden?</h2>
    </section>,
  ],
};

const Input = {
  linkName: "input",
  name: "Input",
  description: "Hier wird der Input von KI-Systemen thematisiert.",
  content: [
    <ChapterHeader text={"Input"} number={2} />,
    <section>
      <p></p>
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

const Dateninput = {
  linkName: "ki-technologien-verstehen",
  name: "KI-Technologien verstehen",
  moduleImage: ImageElement,
  content: [Einleitung, Input, Verarbeitung, Output, LLM],
};

export default Dateninput;
