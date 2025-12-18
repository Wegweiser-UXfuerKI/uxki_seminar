import ImageElement from "../../assets/icons/gestaltungsziele.svg?react";
import { LinkHandler } from "../1_elements/LinkHandler";
import { VideoContainer } from "../1_elements/VideoContainer";
import SubTopicCard from "../2_molecule/cards/SubTopicCard";
import Accordion from "../2_molecule/Accordion";
import SubNavigation from "../2_molecule/nav/SubNavigation";
import { ChapterHeader } from "../3_organism/ChapterHeader";
import List from "../2_molecule/List";
import { TabSwitchView } from "../2_molecule/TabSwitchView";
import BasicQuiz from "../interactive/Quiz/BasicQuiz";
import Sources from "../Sources";

import vertrauenswuerdigkeitQuiz from "../SimpleQuizContent/gestaltungsziele/vertrauenswuerdigkeit.json";
import transparenzQuiz from "../SimpleQuizContent/gestaltungsziele/transparenz.json";
import erklaerbarkeitQuiz from "../SimpleQuizContent/gestaltungsziele/erklaerbarkeit.json";
import kontrollierbarkeitQuiz from "../SimpleQuizContent/gestaltungsziele/kontrollierbarkeit.json";

import thumbnail_vertrauenswuerdigkeit from "../../assets/images/thumbnails/Gestaltungsziele_Vertrauens.webp";
import thumbnail_transparent from "../../assets/images/thumbnails/Gestaltungsziele_Transparenz.webp";
import thumbnail_erklaerbarkeit from "../../assets/images/thumbnails/Gestaltungsziele_Erklarbarkeit.webp";
import thumbnail_kontrollierbarkeit from "../../assets/images/thumbnails/Gestaltungsziele_Kontrollierbarkeit.webp";

const sectionsVertrauenswürdigkeit = [
  { id: "3", title: "Warum ist Trustworthy AI ein zentrales Thema?" },
  { id: "4", title: "Warum ist Vertrauenswürdigkeit schwer zu definieren?" },
  { id: "5", title: "Vertrauen vs. Vertrauenswürdigkeit" },
  { id: "6", title: "Dimensionen vertrauenswürdiger KI-Systeme" },
  { id: "7", title: "Was folgt daraus für die Gestaltung von KI?" },
  { id: "8", title: "Messung von Vertrauen und Vertrauenswürdigkeit" },
  { id: "9", title: "Fazit" },
];

const Vertrauenswürdigkeit = {
  linkName: "vertrauenswuerdigkeit",
  name: "Vertrauenswürdigkeit",
  description:
    "Wann empfinden Menschen eine KI als glaubwürdig und verlässlich?",
  content: [
    <ChapterHeader text={"Vertrauenswürdigkeit"} number={2} />,
    <section>
      <p>
        Dieses Kapitel behandelt, warum Vertrauenswürdigkeit für den
        erfolgreichen und verantwortungsvollen Einsatz von KI-Systemen
        entscheidend ist, erläutert den Unterschied zwischen Vertrauen und
        Vertrauenswürdigkeit und zeigt, wie beides durch Gestaltung, Technik und
        Evaluation gefördert werden kann.
      </p>
      <Accordion sections={sectionsVertrauenswürdigkeit} />
      <SubNavigation sections={sectionsVertrauenswürdigkeit} />
    </section>,
    <section>
      <p className="no-print">
        Im folgenden Video wird grundlegend erläutert, was Vertrauenswürdigkeit
        in KI-Systemen bedeutet und warum sie eine zentrale Voraussetzung für
        ihre Akzeptanz und verantwortungsvolle Nutzung ist.
      </p>
      <VideoContainer
        link="https://www.youtube-nocookie.com/embed/aZZJB2xuY88?rel=0&modestbranding=1"
        title="Vertrauenswürdigkeit"
      />
      <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)] justify-center only-print">
        <p style={{ marginBottom: "8px" }}>
          Im folgenden Video wird grundlegend erläutert, was
          Vertrauenswürdigkeit in KI-Systemen bedeutet und warum sie eine
          zentrale Voraussetzung für ihre Akzeptanz und verantwortungsvolle
          Nutzung ist.
        </p>
        <a href="https://youtu.be/aZZJB2xuY88">
          <img
            src={thumbnail_vertrauenswuerdigkeit}
            alt="Video Thumbnail Vertrauenswürdigkeit"
            className="rounded-lg overflow-hidden"
          />
        </a>
        <h4 className="w-full text-center mt-1">
          <a
            href="https://youtu.be/aZZJB2xuY88"
            target="_blank"
            rel="noopener noreferrer">
            https://youtu.be/aZZJB2xuY88
          </a>
        </h4>
      </div>
    </section>,
    <section className="break">
      <h2>1. Einführung: Warum ist Trustworthy AI ein zentrales Thema?</h2>
      <p>
        Vertrauenswürdigkeit ist eine Schlüsseldimension für die erfolgreiche
        Einführung und nachhaltige Nutzung von KI-Systemen. Während technische
        Leistungsfähigkeit die Funktionsweise bestimmt, entscheidet unter
        anderem die Wahrnehmung der Vertrauenswürdigkeit darüber, ob Menschen
        ein System akzeptieren, verantwortungsvoll nutzen und langfristig
        beibehalten. Es ist daher wichtig, dass Systeme auch Signale enthalten,
        die Menschen zeigen, wie vertrauenswürdig sie generell oder in
        bestimmten Entscheidungen sind. Vertrauenswürdigkeit wird deswegen auch
        von vielen gesellschaftlichen Initiativen und{" "}
        <LinkHandler to={"/eu-ai-act/high-level-expert-group"}>
          Expertenkommissionen
        </LinkHandler>{" "}
        eingefordert.
      </p>
      <p>
        Besonders in sensiblen Bereichen - etwa in der Medizin, im Finanzwesen
        oder bei öffentlicher Verwaltung - kann fehlende Vertrauenswürdigkeit
        gravierende Folgen haben:
      </p>
      <ul>
        <li>
          <b>Gesellschaftlich</b>: Verlust von Legitimität, Widerstand gegen
          neue Technologien
        </li>
        <li>
          <b>Individuell</b>: Fehlentscheidungen durch unberechtigtes Misstrauen
          in KI-Systeme
        </li>
        <li>
          <b>Wirtschaftlich</b>: Reputationsschäden, regulatorische Sanktionen,
          Marktverluste
        </li>
      </ul>
      <p>
        Internationale Organisationen wie die EU, OECD und IEEE definieren{" "}
        <i>Vertrauenswürdige KI</i> als Systeme, die nicht nur funktional,
        sondern auch <b>rechtlich, ethisch und technisch</b> korrekt arbeiten.
        Der EU AI Act nennt explizit Anforderungen wie Transparenz, Fairness,
        Sicherheit und menschliche Aufsicht als Kernkriterien. Diese Prinzipien
        spielen für gemeinwohlorientierte Organisationen eine zentrale Rolle -
        auch über KI hinaus. Die Risiken beim Einsatz von nicht
        vertrauenswürdiger KI - oder KI, die zumindest so wirkt - sind daher
        erheblich.
      </p>
      <p>
        Vertrauenswürdigkeit ist zunächst eine technische Eigenschaft, die von
        der Aufgabe der KI und den Zielen des Nutzers abhängt. In ihrer
        Komplexität ist sie aber ein <b>interdisziplinäres Gestaltungsziel</b>,
        das technologische, regulatorische und UX-bezogene Aspekte vereint und
        nicht nur die Optimierung der Leistung eines Systems beinhaltet, sondern
        auch Menschen die Möglichkeit geben soll, das System einzuschätzen.
      </p>
      <p>
        Vorschlag als Überleitung: Aufgrund der Komplexität ist eine Definition
        des Begriffs nicht immer einfach. Im nächsten Abschnitt widmen wir uns
        deshalb der Frage,{" "}
        <b>warum es schwierig ist, Vertrauenswürdigkeit klar zu definieren</b>,
        und nähern uns dadurch einer Definition an.
      </p>
    </section>,
    <section>
      <h2>2. Warum ist Vertrauenswürdigkeit schwer zu definieren?</h2>
      <p>
        Obwohl sie <i>objektiv</i> wirken soll, ist Vertrauenswürdigkeit
        schwierig allgemein und einheitlich zu definieren, denn:
      </p>
      <ul>
        <li>
          Sie besteht aus mehreren Dimensionen (z.B. Transparenz, Fairness,
          Robustheit).
        </li>
        <li>
          Ihre Bewertung ist kontextabhängig (Was im E-Commerce als
          vertrauenswürdig gilt, reicht im Gesundheitswesen vielleicht nicht aus
          - der Fachausdruck ist &bdquo;individueller Standard&ldquo;).
        </li>
        <li>Sie wird oft mit Vertrauen verwechselt oder vermischt.</li>
      </ul>
      <p>
        Die Begriffe <i>Vertrauen</i> und <i>Vertrauenswürdigkeit</i> sind nicht
        identisch. Gerade aus psychologischer Perspektive lohnt sich die
        Unterscheidung. Also, wo genau liegen die Unterschiede?
      </p>
    </section>,
    <section>
      <h2>3. Vertrauen vs. Vertrauenswürdigkeit</h2>
      <p className="specialText">
        <b>Merksatz:</b>{" "}
        <i>
          Vertrauen ist eine Einstellung, die Menschen haben.
          Vertrauenswürdigkeit ist eine Eigenschaft, die ein System (in einem
          Kontext) hat.
        </i>
      </p>
      <p>
        Der Unterschied zwischen <i>Vertrauen und Vertrauenswürdigkeit</i> ist
        zentral für die Gestaltung und Bewertung von KI-Systemen:
      </p>
      <ol>
        <li>
          <b>Vertrauen</b> ist eine <b>subjektive Haltung</b> bzw. Einstellung
          eines Individuums oder einer Gruppe gegenüber einer Entität (hier: der
          KI). <br />
          Es basiert auf Wahrnehmung, Erfahrung, Intuition und oft auch auf
          psychologischen und kulturellen Faktoren. Vertrauen kann entstehen,
          selbst wenn ein System objektiv unsicher ist - oder ausbleiben, obwohl
          das System technisch und ethisch einwandfrei funktioniert.
        </li>
        <li>
          <b>Vertrauenswürdigkeit</b> ist eine{" "}
          <b>objektive, überprüfbare Eigenschaft des Systems</b>. <br />
          Sie hängt von Kriterien wie Zuverlässigkeit, Fairness, Sicherheit,
          Transparenz und Erklärbarkeit ab. Ein vertrauenswürdiges System
          erfüllt dokumentierte Standards und kann seine Leistungsfähigkeit und
          Unvoreingenommenheit nachweisen.
        </li>
      </ol>
      <p>
        Eine Verwechslung ist leicht möglich: Vertrauenswürdigkeit kann nämlich
        in einer Anwendung mit wenig Risiko und Anspruch an Korrektheit
        schneller gegeben sein, als in einem Kontext, in dem Fehler sehr
        gefährlich sind. Dadurch wirkt Vertrauenswürdigkeit aufgrund ihrer
        Kontextabhängigkeit nicht überprüfbar und objektiv - so wie Vertrauen.
      </p>
      <h3>3a) Wie entsteht Vertrauen in KI-Systeme?</h3>
      <p>
        Vertrauen entsteht <b>nicht automatisch</b> durch technische Qualität.
        Es ist ein psychologischer und sozialer Prozess. Ein hilfreiches Modell
        zur Beschreibung dieses Prozesses stammt aus der Forschung zur
        Mensch-Computer-Interaktion. <b>Madsen und Gregor (2000)</b>{" "}
        unterscheiden darin zwei zentrale Dimensionen von Vertrauen in
        Computersysteme:
      </p>
      <TabSwitchView>
        <div title="Kognitives Vertrauen">
          <p>
            Beruht auf der rationalen Einschätzung der Systemleistung. Es
            entsteht, wenn Nutzer:innen das System als kompetent, vorhersehbar
            und zuverlässig wahrnehmen.
          </p>
          <p>
            <b>Fördernde Faktoren:</b>
          </p>
          <ul className="mt-5">
            <li>technische Kompetenz und Genauigkeit</li>
            <li>konsistente, nachvollziehbare Entscheidungen</li>
            <li>transparente Abläufe</li>
            <li>Stabilität und Verlässlichkeit im Betrieb</li>
          </ul>
        </div>
        <div title="Affektives Vertrauen">
          <p>
            Beruht auf emotionaler Resonanz und sozialer Wahrnehmung. Es
            entsteht, wenn Nutzer:innen das Gefühl haben, fair behandelt zu
            werden oder dass das System ihre Interessen unterstützt.
          </p>
          <ul>
            <li>
              menschlich wirkendes, empathisches Design - aber Achtung, es
              sollte kein <i>uncanny valley</i> entstehen
            </li>
            <li>freundliche, respektvolle Sprache und soziale Signale</li>
            <li>
              ethisches Verhalten (z.B. keine Manipulation, kein übertriebener
              Druck)
            </li>
          </ul>
        </div>
      </TabSwitchView>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Kognitives Vertrauen</h4>
        <p>
          Beruht auf der rationalen Einschätzung der Systemleistung. Es
          entsteht, wenn Nutzer:innen das System als kompetent, vorhersehbar und
          zuverlässig wahrnehmen.
        </p>
        <p>
          <b>Fördernde Faktoren:</b>
        </p>
        <ul className="mt-5">
          <li>technische Kompetenz und Genauigkeit</li>
          <li>konsistente, nachvollziehbare Entscheidungen</li>
          <li>transparente Abläufe</li>
          <li>Stabilität und Verlässlichkeit im Betrieb</li>
        </ul>
      </div>
      <div className="print:pt-1">
        <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
          <h4>Affektives Vertrauen</h4>
          <p>
            Beruht auf emotionaler Resonanz und sozialer Wahrnehmung. Es
            entsteht, wenn Nutzer:innen das Gefühl haben, fair behandelt zu
            werden oder dass das System ihre Interessen unterstützt.
          </p>
          <ul>
            <li>
              menschlich wirkendes, empathisches Design - aber Achtung, es
              sollte kein <i>uncanny valley</i> entstehen
            </li>
            <li>freundliche, respektvolle Sprache und soziale Signale</li>
            <li>
              ethisches Verhalten (z.B. keine Manipulation, kein übertriebener
              Druck)
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-10">
        UX-Design muss beide Dimensionen - kognitiv und affektiv - mitdenken, um
        angemessenes Vertrauen in KI-Systeme zu ermöglichen.
      </p>
      <h3 className="page-break">
        3b) Warum reicht Vertrauen allein nicht aus?
      </h3>
      <p>
        Ein entscheidender Punkt: Nur weil Menschen einem System vertrauen, ist
        es noch lange nicht vertrauenswürdig. Und umgekehrt.
      </p>
      <ol>
        <li>
          <b>Risiko</b>: Menschen vertrauen einem{" "}
          <b>nicht vertrauenswürdigen</b> System <br />
          &rarr; Gefahr von Fehlentscheidungen. <br />
          <br />
          Beispiel: Nutzende vertrauen einem nicht für medizinische Beratung
          ausgelegten System wie ChatGPT bei Fragen zu komplexen
          Wechselwirkungen von Medikamenten. Dies nennt man Übervertrauen.
          <br />
          <br />
        </li>
        <li>
          <b>Risiko</b>: Menschen misstrauen einem <b>vertrauenswürdigen</b>{" "}
          System <br />
          &rarr; Gefahr von Ineffizienz, Ablehnung, Algorithm Aversion. <br />
          <br />
          Beispiel: Es wird lieber manuell ein komplexer Datensatz
          aufgearbeitet, als sich auf ein automatisiertes System zu verlassen,
          das für diese Aufgabe geschaffen worden ist. Dies nennt man
          Untervertrauen.
          <br />
          <br />
        </li>
      </ol>
      <p className="specialText">
        Deshalb ist das Ziel von UX-Design und KI-Entwicklung:{" "}
        <b>Vertrauenswürdigkeit sicherstellen</b> (systemseitig) und{" "}
        <b>Vertrauen kalibrieren</b> (nutzerseitig).
      </p>
    </section>,
    <section>
      <h2>4. Dimensionen vertrauenswürdiger KI-System</h2>
      <p>
        Für ein System, das als vertrauenswürdig gelten soll, werden in der
        Regel folgende Eigenschaften gefordert:
      </p>
      <h4>a) Technische Robustheit und Sicherheit</h4>
      <p>
        Das System soll unter normalen und außergewöhnlichen Bedingungen
        zuverlässig arbeiten. Zu relevanten Aspekten zählen z. B.
        Fehlertoleranz, Resilienz gegen Angriffe (Cybersecurity),
        Fail-Safe-Mechanismen, kontinuierliche Überwachung.
      </p>
      <p className="specialText">
        <b>UX-Bezug</b>: Nutzer:innen müssen über Systemstatus, Ausfälle oder
        Sicherheitsereignisse klar informiert werden.
      </p>
      <h4 className="page-break">b) Transparenz und Erklärbarkeit</h4>
      <p>
        Entscheidungen und Prozesse sollen nachvollziehbar und überprüfbar sein.
        Dazu zählt u. a. die Offenlegung der Funktionsweise (z. B.
        Modellarchitektur, Trainingsdatenquellen), Erklärungen einzelner
        Entscheidungen, Angabe von Unsicherheiten.
      </p>
      <p className="specialText">
        <b>UX-Bezug</b>: Erklärungen müssen in für die Zielgruppe verständlicher
        Form präsentiert werden (Text, Visualisierung, interaktive Elemente).
      </p>

      <h4>c) Fairness</h4>
      <p>
        KI soll Personen oder Gruppen nicht benachteiligen oder privilegieren,
        es sei denn, dies ist explizit gerechtfertigt (z. B. positive
        Diskriminierung). Dazu gehört u. a. Bias-Erkennung, faire Datenauswahl,
        Überprüfung von Outputs auf diskriminierende Muster.
      </p>
      <p className="specialText">
        <b>UX-Bezug</b>: Betroffene müssen bei Ergebnissen erkennen und
        nachvollziehen können, ob diese aufgrund verzerrter Daten zustande
        gekommen sind.
      </p>

      <h4>d) Datenschutz und Daten-Governance</h4>
      <p>
        Schutz personenbezogener Daten und verantwortungsvoller Umgang mit
        sensiblen Informationen. Dazu zählt u. a. Privacy by Design, Minimierung
        erhobener Daten, klare Einwilligungsprozesse, Datenanonymisierung.
      </p>
      <p className="specialText">
        <b>UX-Bezug</b>: Nutzer:innen müssen leicht nachvollziehen und steuern
        können, welche Daten genutzt werden.
      </p>

      <h4>e) Rechenschaftspflicht & Verantwortung</h4>
      <p>
        Es muss klar sein, wer für das Verhalten des Systems verantwortlich ist,
        und es muss möglich sein, Entscheidungen im Nachhinein zu überprüfen.
        Dazu gehört z. B. Dokumentation, Audit-Trails, klare
        Verantwortlichkeitszuordnung, Haftungsregelungen.
      </p>
      <p className="specialText">
        <b>UX-Bezug</b>: Nutzer:innen müssen wissen, an wen sie sich im Falle
        von Problemen wenden können.
      </p>

      <h4>f) Human Agency & Oversight</h4>
      <p>
        Menschen behalten die Kontrolle über kritische Entscheidungen. Dazu
        zählen z. B. Mechanismen wie Human-in-the-Loop, Abschaltmöglichkeiten,
        Entscheidungsunterstützung statt -ersetzung.
      </p>
      <p className="specialText">
        <b>UX-Bezug</b>: Schnittstellen müssen Eingriffe intuitiv ermöglichen,
        ohne dass Nutzer:innen durch komplexe Prozesse abgeschreckt werden.
      </p>
      <p>
        Diese Dimensionen bilden das Fundament der objektiven
        Vertrauenswürdigkeit. UX-Design hat die Aufgabe, diese Eigenschaften{" "}
        <b>erlebbar</b> zu machen, sodass sie nicht nur technisch vorhanden
        sind, sondern auch subjektiv wahrgenommen werden.
      </p>
    </section>,
    <section>
      <h2>5. Was folgt daraus für die Gestaltung von KI?</h2>
      <h4>Empfehlung für die Praxis:</h4>
      <List
        items={[
          "Entwickeln Sie <b>technisch vertrauenswürdige Systeme</b>, die fair, robust und nachvollziehbar sind.",
          "Gestalten Sie <b>erklärende Interfaces</b>, die Nutzer:innen wirklich verstehen können.",
          "Testen Sie mit echten Nutzer:innen: <b>Verstehen ihre Nutzer:innen die Entscheidungen des Systems?</b>",
          "Kommunizieren Sie ehrlich: <b>Keine Überversprechen von KI-Fähigkeiten!</b>",
        ]}
        alignItems="center"
      />
      <p>
        Aber wie lassen sich Vertrauenswürdigkeit und Vertrauen in Bezug auf ein
        KI-System eigentlich messen?
      </p>
    </section>,
    <section>
      <h2>6. Messung von Vertrauen und Vertrauenswürdigkeit</h2>
      <p>
        Die Evaluation muss zwischen <b>subjektivem Vertrauen</b> und{" "}
        <b>objektiver Vertrauenswürdigkeit</b> unterscheiden. Beide Größen
        können auseinanderfallen und sollten separat erhoben werden.
      </p>
      <TabSwitchView>
        <div title="Messung von Vertrauen (subjektiv)">
          <ul className="mt-0">
            <li>
              <b>Umfragen & Fragebögen</b>: z. B. Trust in Automation Scale,
              NASA-TLX (für mentale Belastung)
            </li>
            <li>
              <b>Verhaltensindikatoren</b>: Bspw. Häufigkeit, mit der
              Nutzer:innen Empfehlungen der KI folgen oder sie ablehnen
            </li>
            <li>
              <b>Langzeitbeobachtung</b>: Veränderungen des Vertrauens über
              wiederholte Nutzung
            </li>
          </ul>
        </div>
        <div title="Messung von Vertrauenswürdigkeit (objektiv)">
          <ul className="mt-0">
            <li>
              <b>Technische Metriken</b>: Genauigkeit, Fehlerraten,
              Fairness-Indikatoren, Robustheitstests
            </li>
            <li>
              <b>Audit & Compliance-Prüfungen</b>: Abgleich mit regulatorischen
              Standards (z. B. EU AI Act, ISO-Normen)
            </li>
            <li>
              <b>Erklärbarkeits-Checks</b>: Verständlichkeit und Korrektheit der
              bereitgestellten Erklärungen
            </li>
          </ul>
        </div>
      </TabSwitchView>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Messung von Vertrauen (subjektiv)</h4>
        <ul className="mt-0">
          <li>
            <b>Umfragen & Fragebögen</b>: z. B. Trust in Automation Scale,
            NASA-TLX (für mentale Belastung)
          </li>
          <li>
            <b>Verhaltensindikatoren</b>: Bspw. Häufigkeit, mit der Nutzer:innen
            Empfehlungen der KI folgen oder sie ablehnen
          </li>
          <li>
            <b>Langzeitbeobachtung</b>: Veränderungen des Vertrauens über
            wiederholte Nutzung
          </li>
        </ul>
      </div>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Messung von Vertrauenswürdigkeit (objektiv)</h4>
        <ul className="mt-0">
          <li>
            <b>Technische Metriken</b>: Genauigkeit, Fehlerraten,
            Fairness-Indikatoren, Robustheitstests
          </li>
          <li>
            <b>Audit & Compliance-Prüfungen</b>: Abgleich mit regulatorischen
            Standards (z. B. EU AI Act, ISO-Normen)
          </li>
          <li>
            <b>Erklärbarkeits-Checks</b>: Verständlichkeit und Korrektheit der
            bereitgestellten Erklärungen
          </li>
        </ul>
      </div>
      <h4 className="mt-10 page-break">Kombination von Messmethoden</h4>
      <p>
        Gemeinsame Auswertung, um <i>Trust Calibration</i> zu prüfen - also ob
        subjektives Vertrauen mit objektiver Vertrauenswürdigkeit übereinstimmt.
      </p>
    </section>,
    <section>
      <h2>7. Fazit: Vertrauen gestalten, Vertrauenswürdigkeit sichern</h2>
      <p>
        Vertrauenswürdigkeit ist kein Marketing-Schlagwort, sondern eine{" "}
        <b>gestalterische Verantwortung</b>. Sie verlangt technisches Know-how,
        psychologisches Verständnis und ethische Klarheit.
      </p>
      <p className="specialText">
        Die Frage ist nicht: Wie überzeugen wir Menschen von KI? <br />
        Sondern: Wie gestalten wir KI, die überzeugt?
      </p>
    </section>,
    <section className="no-print">
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={vertrauenswuerdigkeitQuiz} />
    </section>,
  ],
};

const sectionsTransparenz = [
  { id: "3", title: "Einleitung: Warum ist Transparenz wichtig?" },
  { id: "4", title: "Definition: Was bedeutet Transparenz in der KI?" },
  { id: "5", title: "Beispiel: Denkmal-Entscheidung per Bildanalyse" },
  { id: "6", title: "Warum ist Transparenz nicht trivial?" },
  { id: "7", title: "Wie lässt sich Transparenz herstellen?" },
  { id: "8", title: "Praktische Tipps zu Gestaltung transparenter KI" },
  {
    id: "9",
    title:
      "Fazit: Transparenz als Brücke zum Vertrauen und Grundlage für weitere UX-bezogene Eigenschaften",
  },
];

const Transparenz = {
  linkName: "transparenz",
  name: "Transparenz",
  description: "Wie viel Einsicht in Prozesse und Daten brauchen Nutzer:innen?",
  content: [
    <ChapterHeader text={"Transparenz in KI-Systemen"} number={3} />,
    <section>
      <p>
        Dieses Kapitel beleuchtet die Bedeutung von Transparenz als zentrale
        Voraussetzung vertrauenswürdiger KI und zeigt, warum sie nicht nur
        rechtlich gefordert, sondern auch essenziell für Verständnis,
        Verantwortung und Akzeptanz ist.
      </p>
      <Accordion sections={sectionsTransparenz} />
      <SubNavigation sections={sectionsTransparenz} />
    </section>,
    <section>
      <p className="no-print">
        Im folgenden Video wird Transparenz von KI-Systemen anhand eines
        Beispiels erklärt und darauf eingegangen wie man Transparenz erreichen
        kann, sowie dess Aspekte im Bezug zur UX.
      </p>
      <VideoContainer
        link="https://www.youtube-nocookie.com/embed/yRCWVsM9SAY?rel=0&modestbranding=1"
        title="Transparenz"
      />
      <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)] justify-center only-print">
        <p style={{ marginBottom: "8px" }}>
          Im folgenden Video wird Transparenz von KI-Systemen anhand eines
          Beispiels erklärt und darauf eingegangen wie man Transparenz erreichen
          kann, sowie dess Aspekte im Bezug zur UX.
        </p>
        <a href="https://youtu.be/yRCWVsM9SAY">
          <img
            src={thumbnail_transparent}
            alt="Video Thumbnail"
            className="rounded-lg overflow-hidden"
          />
        </a>
        <h4 className="w-full text-center mt-1">
          <a
            href="https://youtu.be/yRCWVsM9SAY"
            target="_blank"
            rel="noopener noreferrer">
            https://youtu.be/yRCWVsM9SAY
          </a>
        </h4>
      </div>
    </section>,
    <section className="break">
      <h2>1. Einleitung: Warum ist Transparenz wichtig?</h2>
      <p>
        Transparenz ist ein zentrales Prinzip im Kontext vertrauenswürdiger KI.
        Sie wird oft als Voraussetzung dafür genannt, dass ein System als{" "}
        <b>vertrauenswürdig</b> wahrgenommen werden kann. Aber:{" "}
        <b>Transparenz ist nicht das Gleiche wie Vertrauenswürdigkeit</b>. Sie
        ist vielmehr eine <b>notwendige Bedingung</b> für korrekte
        Vertrauenswürdigkeit und viele andere Konstrukte wie Erklärbarkeit,
        Kontrollierbarkeit und letztlich damit die Nützlichkeit von KI-Systemen.
      </p>
      <p>
        Besonders im Kontext wachsender regulatorischer Vorgaben - etwa dem{" "}
        <b>
          <a
            href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689"
            target="_blank"
            rel="noopener noreferrer">
            EU AI Act
          </a>
        </b>
        , der für KI-Systeme mit annehmbaren Risiko explizit
        Transparenzpflichten vorsieht - ist Transparenz nicht nur eine Frage des
        Vertrauens, sondern eine rechtliche Notwendigkeit.
      </p>
    </section>,
    <section>
      <h2>2. Definition: Was bedeutet Transparenz in der KI?</h2>
      <p>
        <b>Transparenz</b> beschreibt die Fähigkeit eines Systems, für
        Nutzer:innen <b>einsichtig, nachvollziehbar und interpretierbar</b> zu
        sein. Nutzer:innen können einsehen:
      </p>
      <ul>
        <li>
          <b>Wie</b> kommt die KI zu ihrer Entscheidung?
        </li>
        <li>
          <b>Welche Daten</b> wurden verwendet?
        </li>
        <li>
          <b>Welche Annahmen</b> und Verfahren liegen dem Modell zugrunde?
        </li>
        <li>
          <b>Welche Grenzen</b>, Unsicherheiten, Verzerrungen bestehen?
        </li>
        <li>
          <b>Welche Ziele hat das System?</b>
        </li>
      </ul>
      <p>
        Transparenz kann dabei auf <b>verschiedenen Ebenen</b> stattfinden:
      </p>
      <ul>
        <li>
          <b>Technisch</b> (Code, Algorithmen, Trainingsdaten)
        </li>
        <li>
          <b>Funktional</b> (Input-Output-Zusammenhang)
        </li>
        <li>
          <b>Erklärend</b> (für Nutzende nachvollziehbar)
        </li>
        <li>
          <b>Organisatorisch</b> (Verantwortlichkeiten, Dokumentation)
        </li>
      </ul>
    </section>,
    <section>
      <h2>3. Beispiel: Denkmal-Entscheidung per Bildanalyse</h2>
      <p>
        Ein KI-System soll anhand eines Fotos entscheiden, ob ein Gebäude
        denkmalgeschützt ist. Das System erklärt:
      </p>
      <p>
        <i>
          &bdquo;Wir haben 500 Bilder von denkmalgeschützten Gebäuden und
          500.000 Bilder von nicht denkmalgeschützten Gebäuden verwendet.&ldquo;
        </i>
      </p>
      <p>
        Obwohl diese Information <b>technisch korrekt</b> ist, zeigt sie nur
        teilweise Transparenz:
      </p>
      <ul>
        <li>
          Ein <b>extremes Datenungleichgewicht</b> kann zu systematischer
          Verzerrung (Bias) führen. Es ist unklar, ob dies überprüft wurde.
        </li>

        <li>
          Die Information liefert <b>keinen Einblick</b> in die{" "}
          <b>eigentliche Entscheidungslogik</b> des Systems.
        </li>

        <li>
          Nutzer:innen erhalten zwar Daten, aber nicht das, was für eine{" "}
          <b>vertrauenswürdige Bewertung</b> der Entscheidung wichtig wäre.
        </li>
      </ul>
      <p className="specialText">
        <b>Merksatz</b>:{" "}
        <i>
          Transparenz ist nur dann hilfreich, wenn sie die für Nutzer:innen
          relevanten Aspekte sichtbar macht.
        </i>
      </p>
    </section>,
    <section>
      <h2>4. Warum ist Transparenz nicht trivial?</h2>
      <p>
        Transparenz ist komplex - sowohl in der technischen Umsetzung als auch
        in der UX-Vermittlung. Dabei gibt es einige häufige Missverständnisse:
      </p>
      <ul>
        <li>
          &bdquo;Transparenz = Offenlegen von Code&ldquo; - für die meisten
          Nutzer:innen, die nicht technisch versiert sind, ist eine solche
          Information <b>nicht hilfreich</b>
        </li>
        <li>
          &bdquo;Mehr Transparenz ist immer besser&ldquo; - kann aber auch zu{" "}
          <b>Verwirrung oder Misstrauen führen</b>
        </li>
      </ul>
      <h4>Herausforderungen:</h4>
      <ul>
        <li>
          Unterschiedliche Zielgruppen benötigen{" "}
          <b>unterschiedliche Erklärungen</b> (z.B. Laien vs. Expert:innen)
        </li>
        <li>
          Komplexe Modelle (z. B. Deep Learning) lassen sich nicht immer
          erklären
        </li>
        <li>
          Zielkonflikte: Transparenz vs. Datenschutz, Sicherheit, geistiges
          Eigentum
        </li>
      </ul>
      <h4 className="page-break">
        Was passiert ohne zielgerichtete Transparenz?
      </h4>
      <ul>
        <li>
          Nutzer:innen erhalten Daten - aber nicht{" "}
          <b>nicht das, was sie brauchen</b>, um Entscheidungen zu bewerten
        </li>
        <li>
          Transparenz verkommt zur <b>Schein-Transparenz</b>, wenn Relevanz
          fehlt
        </li>
        <li>
          Besonders kritisch bei Verzerrungen in Trainingsdaten oder
          Black-Box-Verfahren
        </li>
      </ul>
    </section>,
    <section className="break">
      <h2>5. Wie lässt sich Transparenz herstellen?</h2>
      <p>
        <b>
          Transparenz ist kein einmaliger Zustand, sondern ein Designprozess
        </b>
        . Sie lässt sich auf mehreren Ebenen gestalten:
      </p>
      <ul>
        <li>
          <b>Daten & Entwicklung dokumentieren</b>: Welche Daten wurden
          verwendet? Wie wurden sie bereinigt oder gefiltert?
        </li>
        <li>
          <b>Beteiligte offenlegen</b>: Wer hat das System entwickelt? Welche
          Interessen könnten beeinflusst haben? Was für Stakeholder gab es?
        </li>

        <li>
          <b>Ressourcen transparent machen</b>: Wie viel Energie, Rechenleistung
          oder Zeit wurde aufgewendet?
        </li>

        <li>
          <b>Ergebnisse kommunizieren</b>: Wie zuverlässig sind die Vorhersagen?
          Wie wurden sie validiert?
        </li>
      </ul>
      <h4 className="page-break">
        UX-bezogene Transparenz: Was brauchen Nutzer:innen?
      </h4>
      <p>
        Aus UX-Sicht geht es nicht nur um Offenlegung, sondern um{" "}
        <b>verstehbare Darstellung</b>. Ziel ist es, Nutzer:innen die
        Möglichkeit zu geben,{" "}
        <b>die Entscheidungen des Systems sinnvoll einzuordnen</b>.
      </p>
      <Accordion
        title="Wichtige UX-Fragen zur Transparenz"
        initiallyOpen={false}>
        <ul>
          <li>Welche Daten nutzt die KI - und warum?</li>
          <li>Wie wurde das Modell trainiert?</li>
          <li>Wie kommt das System zu seinem Ergebnis?</li>
          <li>Wie zuverlässig ist dieses Ergebnis?</li>
          <li>Welche Grenzen, Risiken oder Unsicherheiten bestehen?</li>
        </ul>
      </Accordion>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Wichtige UX-Fragen zur Transparenz</h4>
        <ul>
          <li>Welche Daten nutzt die KI - und warum?</li>
          <li>Wie wurde das Modell trainiert?</li>
          <li>Wie kommt das System zu seinem Ergebnis?</li>
          <li>Wie zuverlässig ist dieses Ergebnis?</li>
          <li>Welche Grenzen, Risiken oder Unsicherheiten bestehen?</li>
        </ul>
      </div>
      <div className="h-[var(--scale3)]"></div>
      <h3>Drei Arten von Transparenz</h3>
      <h4>1. Prozess-Transparenz</h4>
      <p>Offenlegung der Entstehung und Funktionsweise eines KI-Systems.</p>
      <ul>
        <li>
          <b>Beispielsweise</b>: Herkunft und Qualität der Trainingsdaten,
          Beschreibung der Modellarchitektur und verwendeten Algorithmen,
          inklusive Trainingsverhalten, sowie Zieldefinition und Systemgrenze.
        </li>
        <li>
          <b>Zweck</b>: Hilft Nutzer:innen und Prüfern, konkrete Ergebnisse zu
          verstehen, zu hinterfragen und ggf. zu korrigieren.
        </li>
      </ul>
      <p className="specialText">
        <b>UX-Bezug</b>: Prozessinformationen müssen in einer Form verfügbar
        sein, die sowohl für Fachleute als auch für betroffene Nutzer:innen
        zugänglich ist - z.B. über interaktive Dokumentationen oder &bdquo;About
        this AI&ldquo;-Sektionen.
      </p>
      <h4>2. Entscheidungs-Transparenz</h4>
      <p>Nachvollziehbarkeit einzelner Entscheidungen oder Outputs der KI</p>
      <ul>
        <li>
          <b>Beispielsweise</b>: Begründung, warum eine bestimmte Entscheidung
          getroffen wurde, Darstellung der wichtigsten Einflussfaktoren, Angabe
          von Unsicherheiten oder Wahrscheinlichkeiten
        </li>
        <li>
          <b>Zweck</b>: Hilft Nutzer:innen und Prüfern, konkrete Ergebnisse zu
          verstehen, zu hinterfragen und ggf. zu korrigieren.
        </li>
      </ul>
      <p className="specialText">
        <b>UX-Bezug</b>: Erklärungen müssen <b>kontextbezogen</b> und{" "}
        <b>handlungsrelevant</b> sein, z. B. durch visuelle Hervorhebung
        relevanter Datenpunkte oder Szenario-abhängige Erklärtexte.
      </p>
      <h4 className="page-break">3. Governance-Transparenz</h4>
      <p>
        Offenlegung der organisatorischen und regulatorischen Rahmenbedingungen,
        unter denen ein KI-System betrieben wird.
      </p>
      <ul>
        <li>
          <b>Beispielsweise</b>: Zuständigkeiten und Verantwortlichkeiten,
          Eingesetzte Audit- und Überwachungsprozesse, Einhaltung von Standards
          und Zertifizierungen
        </li>
        <li>
          <b>Zweck</b>: Ermöglicht es Stakeholdern, die Verantwortungsstruktur
          zu verstehen und im Problemfall geeignete Ansprechpersonen zu finden.
        </li>
      </ul>
      <p className="specialText">
        <b>UX-Bezug</b>: Governance-Informationen sollten für Endnutzer:innen
        einfach auffindbar sein, z. B. über leicht zugängliche Hilfeseiten,
        Zertifikatsanzeigen oder Compliance-Labels im Interface.
      </p>
      <h4>Zusammenhang der Dimensionen:</h4>
      <List
        items={[
          "Prozess-Transparenz &rarr; zeigt <b>wie</b> das System gebaut ist",
          "Entscheidungs-Transparenz &rarr; erklärt <b>warum</b> das System etwas tut",
          "Governance-Transparenz &rarr; offenbart <b>wer</b> dafür verantwortlich is",
        ]}
        alignItems="center"
      />
      <p>
        Alle drei Dimensionen zusammen ermöglichen nicht nur eine{" "}
        <b>objektive Nachvollziehbarkeit</b>, sondern auch eine{" "}
        <b>subjektive Vertrauensbildung</b> - vorausgesetzt, sie werden
        verständlich aufbereitet.
      </p>
    </section>,
    <section>
      <h2>6. Praktische Tipps zur Gestaltung transparenter KI</h2>
      <List
        items={[
          "<b>Kenntnis der Zielgruppe</b>: Was wollen Nutzer:innen wissen? Was können sie verstehen?",
          "<b>Relevanz statt Überfrachtung</b>: Nur die Informationen geben, die für die Entscheidung oder Nutzung wichtig sind.",
          "<b>Visuelle Unterstützung</b>: Erklärungen durch Diagramme, Heatmaps, Gegenbeispiele etc.",
          "<b>Transparenz modularisieren</b>: Für verschiedene Ebenen (Daten, Modell, Entscheidung) unterschiedliche Erklärungstiefen anbieten.",
          "<b>Feedback einholen</b>: Verstehen die Nutzer:innen wirklich, was erklärt wurde?",
        ]}
        alignItems="center"
      />
    </section>,
    <section>
      <h2>
        7. Fazit: Transparenz als Brücke zum Vertrauen und Grundlage für weitere
        UX-bezogene Eigenschaften
      </h2>
      <p>
        Transparenz ist kein Selbstzweck - sie ist ein{" "}
        <b>ethisches und nutzerzentriertes Gestaltungsprinzip</b> das:
      </p>
      <ul>
        <li>Vertrauen aufbaut</li>
        <li>Verantwortung ermöglicht</li>
        <li>Erklärbarkeit, Kontrollierbarkeit und Nützlichkeit unterstützt</li>
        <li>Missverständnisse und Fehlverhalten verhindert</li>
      </ul>
      <p>
        <b>
          Gute Transparenz ist immer adressatengerecht, relevant und
          handlungsunterstützend.
        </b>{" "}
        Sie ist die Brücke zwischen komplexer Technik und verständlicher,
        verantwortungsvoller Nutzung.
      </p>
    </section>,
    <section className="no-print">
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={transparenzQuiz} />
    </section>,
  ],
};

const sectionsErklaerbarkeit = [
  { id: "3", title: "Einleitung: Was ist XAI und warum ist sie wichtig?" },
  { id: "4", title: "Sind KI Systeme immer erklärbar?" },
  { id: "5", title: "Warum ist Erklärbarkeit komplex?" },
  { id: "6", title: "Arten von Erklärbarkeit" },
  { id: "7", title: "Wirkung von Erklärungen - Chancen und Risiken" },
  { id: "8", title: "Gestaltungshinweise und praktische Tipps" },
  { id: "9", title: "Fazit: XAI als kontinuierlicher Gestaltungsprozess" },
];

const Erklärbarkeit = {
  linkName: "erklaerbarkeit",
  name: "Erklärbare KI (XAI)",
  description: "Was macht eine gute Erklärung aus - und für wen?",
  content: [
    <ChapterHeader text={"Erklärbare KI (XAI)"} number={4} />,
    <section>
      <p>
        Dieses Kapitel führt in das Konzept der Erklärbaren Künstlichen
        Intelligenz (XAI) ein und zeigt, warum Erklärbarkeit entscheidend ist,
        um Vertrauen, Verantwortung und Verständnis im Umgang mit KI-Systemen zu
        fördern.
      </p>
      <Accordion sections={sectionsErklaerbarkeit} />
      <SubNavigation sections={sectionsErklaerbarkeit} />
    </section>,
    <section>
      <p className="no-print">
        Im folgenden Video wird anhand eines Beispiels grundlegend erklärt was
        Erklärbare KI ist.
      </p>
      <VideoContainer
        link="https://www.youtube-nocookie.com/embed/0yxclsV4ysE?rel=0&modestbranding=1"
        title="Erklärbarkeit"
      />
      <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)] justify-center only-print">
        <p style={{ marginBottom: "8px" }}>
          Im folgenden Video wird anhand eines Beispiels grundlegend erklärt was
          Erklärbare KI ist.
        </p>
        <a href="https://youtu.be/0yxclsV4ysE">
          <img
            src={thumbnail_erklaerbarkeit}
            alt="Video Thumbnail Erklärbarkeit"
            className="rounded-lg overflow-hidden"
          />
        </a>
        <h4 className="w-full text-center mt-1">
          <a
            href="https://youtu.be/0yxclsV4ysE"
            target="_blank"
            rel="noopener noreferrer">
            https://youtu.be/0yxclsV4ysE
          </a>
        </h4>
      </div>
    </section>,
    <section className="break">
      <h2>1. Einleitung: Was ist XAI und warum ist sie wichtig?</h2>
      <p>
        Erklärbare Künstliche Intelligenz (engl. Explainable AI, XAI) bezieht
        sich auf technische Lösungen und Strategien, die es Menschen
        ermöglichen, die Entscheidungen und Funktionsweise von KI-Systemen
        nachzuvollziehen. Wieso benötigen wir das überhaupt? In verschiedenen
        Fällen reicht es nicht aus, dass eine KI zuverlässig funktioniert - sie
        muss auch erklären können, warum sie zu einer bestimmten Entscheidung
        gelangt ist.
      </p>
      <p className="page-break">Diese Erklärbarkeit ist zentral für:</p>
      <ul>
        <li>
          den <b>Aufbau von Vertrauen</b> in automatisierten Systeme,
        </li>
        <li>
          die <b>Verantwortungszuschreibung</b> bei fehlerhaften Entscheidungen,
        </li>
        <li>
          die <b>Nutzungskompetenz</b> bei Endanwender:innen,
        </li>
        <li>
          die <b>Erfüllung gesetzlicher Anforderungen</b>, z.B. durch den EU
          Act,
        </li>
        <li>
          sowie die Entwicklung <b>mentaler Modelle</b>, die Nutzer:innen
          helfen, ein System korrekt zu interpretieren und angemessen zu nutzen.
        </li>
      </ul>
      <p>
        Miller (2019) betont dabei, dass Erklärbarkeit keine rein technische
        Transparenz ist. Vielmehr geht es darum, dass Menschen eine Entscheidung
        nachvollziehen können - auf eine Art, die für sie verständlich und
        bedeutsam ist.
      </p>
    </section>,
    <section className="break">
      <h2>2. Sind KI-Systeme immer erklärbar?</h2>
      <p>
        Nicht jedes KI-System lässt sich einfach erklären. Während regelbasierte
        Systeme oder klassische statistische Modelle oft relativ durchschaubar
        sind, stoßen wir bei modernen KI-Ansätzen schnell an Grenzen der
        Verständlichkeit. Besonders <b>Deep-Learning-Modelle</b>, die heute in
        vielen Anwendungen wie Bilderkennung, Sprachverarbeitung oder
        Empfehlungssystemen eingesetzt werden, gelten häufig als &bdquo;
        <b>Black Boxes</b>&ldquo;.{" "}
        <b>Deep Learning basiert auf künstlichen neuronalen Netzen</b>, die aus
        vielen Schichten (&bdquo;Layers&ldquo;) miteinander verbundener
        künstlicher Neuronen bestehen und so hochkomplexe Muster und
        Zusammenhänge in großen Datenmengen automatisch erkennen und verarbeiten
        können.
      </p>
      <h3>Was bedeutet &bdquo;Black Box&ldquo;?</h3>
      <p>
        Eine &bdquo;Black Box&ldquo; beschreibt ein System, dessen{" "}
        <b>
          innere Entscheidungsprozesse für Menschen nicht direkt nachvollziehbar
        </b>{" "}
        sind. Zwar können wir die Eingaben und Ausgaben eines Modells sehen,
        aber die Vielzahl an internen Berechnungen bleibt verborgen.
      </p>
      <h3>Warum entsteht die Black-Box-Problematik?</h3>
      <ul>
        <li>
          <b>Komplexität der Modelle</b>: Deep-Learning-Netzwerke bestehen oft
          aus Millionen oder sogar Milliarden Parametern, die in vielen
          Schichten (Layers) organisiert sind.
        </li>
        <li>
          <b>Nichtlineare Zusammenhänge</b>: Diese Netzwerke lernen hochkomplexe
          Muster, die sich nicht einfach in Regeln übersetzen lassen.
        </li>
        <li>
          <b>Automatisches Feature-Learning</b>: Anders als bei klassischen
          Modellen werden relevante Merkmale (Features) nicht von Menschen
          vorgegeben, sondern automatisch gelernt - was Transparenz erschwert.
        </li>
        <li>
          <b>Optimierungsverfahren</b>: Trainingsprozesse wie Gradient Descent
          optimieren die Parameter, ohne dass für Menschen intuitive
          Zusammenhänge sichtbar sind.
        </li>
      </ul>
      <h3 className="page-break">Konsequenz</h3>
      <p>
        Die Black-Box-Natur moderner KI-Modelle macht es schwierig,{" "}
        <b>Erklärbarkeit</b> und <b>Nachvollziehbarkeit</b> zu gewährleisten.
        Das bedeutet jedoch nicht, dass Erklärbarkeit unmöglich ist: Mit
        Methoden wie Feature-Attribution, Modellvereinfachungen oder
        Interpretable-by-Design-Ansätzen gibt es Werkzeuge, die Licht ins Dunkel
        bringen.
      </p>
    </section>,
    <section>
      <h2>3. Warum ist Erklärbarkeit komplex?</h2>
      <p>
        Eine Erklärung im Kontext von XAI ist ein kommunikatives Mittel, um auf
        Fragen wie &bdquo;Warum wurde diese Entscheidung getroffen?&ldquo;,
        &bdquo;Was hätte passieren müssen, damit es anders kommt?&ldquo; oder
        &bdquo;Was war besonders einflussreich?&ldquo; eine verständliche
        Antwort zu geben.
      </p>
      <p>
        Allerdings ist das Konzept &bdquo;Erklärung&ldquo; schwer zu fassen,
        denn:
      </p>
      <ul>
        <li>
          <b>Kontextabhängigkeit</b>: Je nach Anwendung (Medizin, Kreditvergabe,
          Bildklassifikation) ändern sich die Anforderungen an die Erklärung.
        </li>
        <li>
          <b>Zielgruppenunterschiede</b>: Fachleute, Endnutzende und
          Aufsichtsbehörden benötigen unterschiedliche Formate und Tiefen.
        </li>
        <li>
          <b>Technisch korrekt &ne; kognitiv hilfreich</b>: Eine präzise
          technische Begründung hilft nur, wenn sie verstanden wird.
        </li>
      </ul>
      <p>
        Ein Beispiel: Die Aussage &bdquo;Die Entscheidung basiert auf der
        Position des Entscheidungsraums in Feature X&ldquo; ist für Laien nicht
        hilfreich. Besser wäre: &bdquo;Ihr monatliches Einkommen liegt unter
        3.200€, was zur Ablehnung beigetragen hat.&ldquo;
      </p>
    </section>,
    <section>
      <h2>4. Arten von Erklärungen in XAI</h2>
      <p>
        Erklärungen können auf unterschiedliche Weisen strukturiert sein. Man
        unterscheidet insbesondere <b>Lokale und Globale Erklärungen</b>:
      </p>
      <TabSwitchView>
        <div title="Lokale Erklärungen">
          <p>
            Diese beziehen sich auf eine <b>konkrete Entscheidung</b> eines
            KI-Systems. Sie beantworten die Frage: &bdquo;Warum genau wurde in
            diesem Fall X und nicht Y entschieden?&ldquo;
          </p>
          <ul>
            <li>Zeigen den Einfluss einzelner Eingabeparameter</li>
            <li>Typische Methoden: SHAP, LIME, Counterfactuals</li>
          </ul>
        </div>
        <div title="Globale Erklärungen">
          <p>
            Sie beschreiben die <b>allgemeine Funktionsweise</b> des Modells
            über viele Entscheidungen hinweg:
          </p>
          <ul>
            <li>
              Sie geben einen Überblick über Entscheidungslogik des Modells und
              erläutern,
            </li>
            <li>
              welchen Einfluss verschiedene Variablen haben und wie sie
              zusammenhängen
            </li>
          </ul>
        </div>
      </TabSwitchView>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Lokale Erklärungen</h4>
        <p>
          Diese beziehen sich auf eine <b>konkrete Entscheidung</b> eines
          KI-Systems. Sie beantworten die Frage: &bdquo;Warum genau wurde in
          diesem Fall X und nicht Y entschieden?&ldquo;
        </p>
        <ul>
          <li>Zeigen den Einfluss einzelner Eingabeparameter</li>
          <li>Typische Methoden: SHAP, LIME, Counterfactuals</li>
        </ul>
      </div>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Globale Erklärungen</h4>
        <p>
          Sie beschreiben die <b>allgemeine Funktionsweise</b> des Modells über
          viele Entscheidungen hinweg:
        </p>
        <ul>
          <li>
            Sie geben einen Überblick über Entscheidungslogik des Modells und
            erläutern,
          </li>
          <li>
            welchen Einfluss verschiedene Variablen haben und wie sie
            zusammenhängen
          </li>
        </ul>
      </div>
      <div className="h-[var(--scale3)]"></div>
      <Accordion
        title="Beispiel für ein Kreditbewertungsmodell"
        initiallyOpen={false}>
        <p>
          Ein Kreditbewertungsmodell (Scoring-Modell) wird global analysiert, um
          zu verstehen, welche Faktoren insgesamt am stärksten die
          Kreditwürdigkeit beeinflussen. <br /> Die globale Erklärung zeigt z.
          B.:
        </p>
        <ul>
          <li>Einkommen hat hohen positiven Einfluss auf den Score.</li>
          <li>Hohe Kreditkartenauslastung wirkt sich negativ aus.</li>
          <li>Alter spielt nur eine geringe Rolle.</li>
        </ul>
        <p>
          <b>Wechselwirkungen</b>: Hohe Auslastung und niedriges Einkommen
          verstärken den negativen Effekt.
        </p>
        <p>
          So wird deutlich, welche Muster das Modell generell gelernt hat,
          unabhängig von einer einzelnen Kundenentscheidung.
        </p>
      </Accordion>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Beispiel für ein Kreditbewertungsmodell</h4>
        <p>
          Ein Kreditbewertungsmodell (Scoring-Modell) wird global analysiert, um
          zu verstehen, welche Faktoren insgesamt am stärksten die
          Kreditwürdigkeit beeinflussen. <br /> Die globale Erklärung zeigt z.
          B.:
        </p>
        <ul>
          <li>Einkommen hat hohen positiven Einfluss auf den Score.</li>
          <li>Hohe Kreditkartenauslastung wirkt sich negativ aus.</li>
          <li>Alter spielt nur eine geringe Rolle.</li>
        </ul>
        <p>
          <b>Wechselwirkungen</b>: Hohe Auslastung und niedriges Einkommen
          verstärken den negativen Effekt.
        </p>
        <p>
          So wird deutlich, welche Muster das Modell generell gelernt hat,
          unabhängig von einer einzelnen Kundenentscheidung.
        </p>
      </div>
      <h3 className="mt-20">Weitere Einteilungen (Speith, 2020)</h3>
      <p>
        <b>Post-hoc vs. intrinsisch</b>: Erklärung wird entweder nachträglich
        erzeugt oder ergibt sich aus der Modellstruktur selbst (z.B.
        Entscheidungsbaum).
      </p>
      <TabSwitchView>
        <div title="Modellbasierte (intrinsische) Erklärbarkeit">
          <p>Das Modell selbst ist bereits transparent und verständlich.</p>
          <ul>
            <li>
              <b>Entscheidungsbäume</b> - Entscheidungen folgen klaren Regeln
            </li>
            <li>
              <b>Lineare Modelle</b> - Einfluss jedes Faktors ist direkt
              absehbar
            </li>
            <li>
              <b>Regel- oder logikbasierte Systeme</b> - nachvollziehbare
              IF-THEN-Strukturen
            </li>
          </ul>
        </div>
        <div title="Post-hoc-Erklärungen">
          <p>
            Hier wird das Verhalten eines komplexen, intransparenten Modells
            nachträglich analysiert. Häufige Ansätze sind:
          </p>
          <ul>
            <li>
              <b> Feature-Attribution:</b> Wie wichtig war ein bestimmtes
              Eingabefeature für diese Entscheidung?
              <ul>
                <li>
                  <b>SHAP (SHapley Additive exPlanations)</b>
                </li>
                <li>
                  <b>LIME (Local Interpretable Model-Agnostic Explanations)</b>
                </li>
              </ul>
            </li>
            <li>
              <b>Kontrastive Erklärung</b>: Warum wurde A statt B vorhergesagt?
            </li>
            <li>
              <b>Gegenfaktische Erklärung</b>: Was müsste sich an den
              Eingabedaten ändern, damit B statt A passiert?
            </li>
            <li>
              <b>Symbolisch vs. visuell</b>: Textlich formuliert vs. visuelle
              Hilfsmittel wie Diagramme, Heatmaps, Salience Maps
            </li>
          </ul>
        </div>
      </TabSwitchView>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Modellbasierte (intrinsische) Erklärbarkeit</h4>
        <ul>
          <li>
            <b>Entscheidungsbäume</b> - Entscheidungen folgen klaren Regeln
          </li>
          <li>
            <b>Lineare Modelle</b> - Einfluss jedes Faktors ist direkt absehbar
          </li>
          <li>
            <b>Regel- oder logikbasierte Systeme</b> - nachvollziehbare
            IF-THEN-Strukturen
          </li>
        </ul>
      </div>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Post-hoc-Erklärungen</h4>
        <p>
          Hier wird das Verhalten eines komplexen, intransparenten Modells
          nachträglich analysiert. Häufige Ansätze sind:
        </p>
        <ul>
          <li>
            <b> Feature-Attribution:</b> Wie wichtig war ein bestimmtes
            Eingabefeature für diese Entscheidung?
            <ul>
              <li>
                <b>SHAP (SHapley Additive exPlanations)</b>
              </li>
              <li>
                <b>LIME (Local Interpretable Model-Agnostic Explanations)</b>
              </li>
            </ul>
          </li>
          <li>
            <b>Kontrastive Erklärung</b>: Warum wurde A statt B vorhergesagt?
          </li>
          <li>
            <b>Gegenfaktische Erklärung</b>: Was müsste sich an den Eingabedaten
            ändern, damit B statt A passiert?
          </li>
          <li>
            <b>Symbolisch vs. visuell</b>: Textlich formuliert vs. visuelle
            Hilfsmittel wie Diagramme, Heatmaps, Salience Maps
          </li>
        </ul>
      </div>
    </section>,
    <section>
      <h2>5. Wirkung von Erklärungen - Chancen und Risiken</h2>
      <p>
        Erklärungen können gut gestaltet sein, wobei es deutliche Grenzen gibt
        und sie auch so gestaltet sein können, dass es problematisch ist.
      </p>
      <TabSwitchView>
        <div title="Gut gestaltete Erklärungen">
          <ul>
            <li>
              <b>Verständlichkeit</b>: Klar, nachvollziehbar, ohne Fachjargon
            </li>
            <li>
              <b>Relevanz</b>: Fokussiert auf das, was Nutzer:innen wirklich
              interessiert
            </li>
            <li>
              <b>Treffsicherheit</b>: Erfasst die zentrale Logik der
              Entscheidungen
            </li>
            <li>
              <b>Vertrauensbildung</b>: Fördert angemessenes Vertrauen (weder
              blind noch misstrauisch)
            </li>
            <li>
              <b>Lernförderlich</b>: Hilft, ein mentales Modell aufzubauen
            </li>
          </ul>
        </div>
        <div title="Grenzen">
          <ul>
            <li>
              <b>Komplexität des Modells</b>: Hochdimensionale Netze haben keine
              klaren "Entscheidungswege"
            </li>
            <li>
              <b>Datenabhängigkeit</b>: Erklärungen sind nur so gut wie die
              Daten, die verwendet wurden
            </li>
            <li>
              <b>Missverständnisse</b>: Nutzer:innen interpretieren Erklärungen
              anders als intendiert
            </li>
            <li>
              <b>Manipulation</b>: Erklärungen können auch genutzt werden, um
              Vertrauen zu erzwingen
            </li>
          </ul>
        </div>
        <div title="Problematisch">
          <ul>
            <li>
              <b>Falsche oder ungenaue Erklärungen</b> können zu fehlerhaften
              Verhalten führen
            </li>
            <li>
              <b>Übermäßige Vereinfachungen</b> können relevante Aspekte
              verschleiern
            </li>
            <li>
              <b>Erklärungen können manipulativ wirken</b>, wenn sie Vertrauen
              erzeugen sollen, wo Misstrauen angemessen wäre
            </li>
          </ul>
        </div>
      </TabSwitchView>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Gut gestaltete Erklärungen</h4>
        <ul>
          <li>
            <b>Verständlichkeit</b>: Klar, nachvollziehbar, ohne Fachjargon
          </li>
          <li>
            <b>Relevanz</b>: Fokussiert auf das, was Nutzer:innen wirklich
            interessiert
          </li>
          <li>
            <b>Treffsicherheit</b>: Erfasst die zentrale Logik der
            Entscheidungen
          </li>
          <li>
            <b>Vertrauensbildung</b>: Fördert angemessenes Vertrauen (weder
            blind noch misstrauisch)
          </li>
          <li>
            <b>Lernförderlich</b>: Hilft, ein mentales Modell aufzubauen
          </li>
        </ul>
      </div>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Grenzen</h4>
        <ul>
          <li>
            <b>Komplexität des Modells</b>: Hochdimensionale Netze haben keine
            klaren "Entscheidungswege"
          </li>
          <li>
            <b>Datenabhängigkeit</b>: Erklärungen sind nur so gut wie die Daten,
            die verwendet wurden
          </li>
          <li>
            <b>Missverständnisse</b>: Nutzer:innen interpretieren Erklärungen
            anders als intendiert
          </li>
          <li>
            <b>Manipulation</b>: Erklärungen können auch genutzt werden, um
            Vertrauen zu erzwingen
          </li>
        </ul>
      </div>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Problematisch</h4>
        <ul>
          <li>
            <b>Falsche oder ungenaue Erklärungen</b> können zu fehlerhaften
            Verhalten führen
          </li>
          <li>
            <b>Übermäßige Vereinfachungen</b> können relevante Aspekte
            verschleiern
          </li>
          <li>
            <b>Erklärungen können manipulativ wirken</b>, wenn sie Vertrauen
            erzeugen sollen, wo Misstrauen angemessen wäre
          </li>
        </ul>
      </div>
      {/* <p>Gut gestaltete Erklärungen können:</p>
      <ul>
        <li>
          <b>Verständlichkeit</b>: Klar, nachvollziehbar, ohne Fachjargon
        </li>
        <li>
          <b>Relevanz</b>: Fokussiert auf das, was Nutzer:innen wirklich
          interessiert
        </li>
        <li>
          <b>Treffsicherheit</b>: Erfasst die zentrale Logik der Entscheidungen
        </li>
        <li>
          <b>Vertrauensbildung</b>: Fördert angemessenes Vertrauen (weder blind
          noch misstrauisch)
        </li>
        <li>
          <b>Lernförderlich</b>: Hilft, ein mentales Modell aufzubauen
        </li>
      </ul>
      <p>Grenzen von Erklärbarkeit:</p>
      <ul>
        <li>
          <b>Komplexität des Modells</b>: Hochdimensionale Netze haben keine
          klaren "Entscheidungswege"
        </li>
        <li>
          <b>Datenabhängigkeit</b>: Erklärungen sind nur so gut wie die Daten,
          die verwendet wurden
        </li>
        <li>
          <b>Missverständnisse</b>: Nutzer:innen interpretieren Erklärungen
          anders als intendiert
        </li>
        <li>
          <b>Manipulation</b>: Erklärungen können auch genutzt werden, um
          Vertrauen zu erzwingen
        </li>
      </ul>
      <p>Erklärungen können auch problematisch sein:</p>
      <ul>
        <li>
          <b>Falsche oder ungenaue Erklärungen</b> können zu fehlerhaften
          Verhalten führen
        </li>
        <li>
          <b>Übermäßige Vereinfachungen</b> können relevante Aspekte
          verschleiern
        </li>
        <li>
          <b>Erklärungen können manipulativ wirken</b>, wenn sie Vertrauen
          erzeugen sollen, wo Misstrauen angemessen wäre
        </li>
      </ul> */}
      {/* TODO: remember this */}
      <div className="h-[var(--scale3)]"></div>
      <Accordion
        title="Beispiel aus der Forschung (Kühl et al., 2024)"
        initiallyOpen={false}>
        <p>
          In einem Experiment zu Altersschätzungen zeigte sich: Teilnehmende
          vertrauten einem System mehr, wenn es eine Erklärung lieferte - selbst
          wenn die Entscheidung objektiv falsch war. Das bedeutet:{" "}
          <b>
            Eine gut präsentierte, aber falsche Erklärung kann gefährlicher sein
            als keine Erklärung
          </b>
          .
        </p>
      </Accordion>
      <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover only-print no-break">
        <h4>Beispiel aus der Forschung (Kühl et al., 2024)</h4>
        <p>
          In einem Experiment zu Altersschätzungen zeigte sich: Teilnehmende
          vertrauten einem System mehr, wenn es eine Erklärung lieferte - selbst
          wenn die Entscheidung objektiv falsch war. Das bedeutet:{" "}
          <b>
            Eine gut präsentierte, aber falsche Erklärung kann gefährlicher sein
            als keine Erklärung
          </b>
          .
        </p>
      </div>
    </section>,
    <section>
      <h2>6. Gestaltungshinweise und praktische Tipps</h2>
      <p>
        Damit Erklärbarkeit in der Praxis gelingt, sollten folgende Grundsätze
        beachtet werden:
      </p>
      <h3>Planung und Einbindung</h3>
      <ul>
        <li>
          <b>Frühzeitig mitdenken</b>: XAI sollte integraler Bestandteil der
          Entwicklung sein
        </li>
        <li>
          <b>Zielgruppe definieren</b>: Welche Fragen stellen die Nutzer:innen?
          Was wollen sie wirklich wissen?
        </li>
        <li>
          <b>Mit Nutzenden gemeinsam definieren</b>, was erklärt werden soll (z.
          B. mit dem Question-Driven Design nach Liao et al., 2021)
        </li>
        <li>
          <b>Kontextabhängig gestalten</b>: Je nach Anwendung und Zielgruppe
          andere Erklärungen
        </li>
        <li>
          <b>Exploration statt einfache Aussagen</b>: Nutzer:innen sollen selbst
          Zusammenhänge entdecken können
        </li>
        <li>
          <b>Auf mentale Modelle achten</b>: Wie denken die Nutzer:innen über
          die KI?
        </li>
        <li>
          <b>Vermeiden von Overtrust</b>: Nicht alles erklären, was das Modell
          tut, sondern nur das, was sinnvoll und hilfreich ist
        </li>
      </ul>
      <h3 className="page-break">Methoden und Darstellung</h3>
      <ul>
        <li>
          <b>Visualisierung nutzen</b>: z.B. Feature-Highlights,
          Balkendiagramme, Overlay-Heatmaps
        </li>
        <li>
          <b>Mehrere Erklärungstypen anbieten</b>: Für verschiedene
          Nutzungskontexte
        </li>
        <li>
          <b>Exploration ermöglichen</b>: Nutzer:innen sollen nicht nur
          konsumieren, sondern auch interaktiv verstehen können
        </li>
      </ul>
      <h3>Evaluation und Feedback</h3>
      <p>
        Fragen Sie Ihre Nutzer:innen: Was möchten Sie wissen? Warum ist diese
        Entscheidung relevant für Sie?
      </p>
      <p>
        Nutzen Sie einfache Visualisierungen, z.B. Feature-Highlights, Balken,
        Overlay-Grafiken Testen Sie Ihre Erklärungen mit realen Nutzenden und
        beobachten Sie, ob deren Verhalten sich verbessert.
      </p>
      <ul>
        <li>
          <b>Iterativ testen</b> mit echten Nutzenden
        </li>
        <li>
          <b>Verstehen evaluieren</b>, nicht nur Zufriedenheit
        </li>
        <li>
          <b>Erklärungsnutzung beobachten</b>: Wird erklärt, aber nicht
          verstanden? Wird ignoriert?
        </li>
      </ul>
    </section>,
    <section>
      <h2>7. Fazit: XAI als kontinuierlicher Gestaltungsprozess</h2>
      <p>
        Erklärbarkeit ist kein statisches Feature, sondern ein{" "}
        <b>dynamisches Element der Mensch-KI-Interaktion</b>. Systeme,
        Nutzer:innen und Anwendungskontexte entwickeln sich weiter - gute XAI
        begleitet diesen Wandel.
      </p>
      <p>
        XAI dient nicht nur der Transparenz, sondern auch der{" "}
        <b>Wissensvermittlung, Kontrolle und Selbstwirksamkeit</b>. Eine
        erklärbare KI ist eine nutzbare und verantwortbare KI.
      </p>
      <p className="specialText">
        &bdquo;Explain unto others in such a way as to help them explain to
        themselves.&ldquo; - Hoffman et al. (2023)
      </p>
    </section>,
    <section className="no-print">
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={erklaerbarkeitQuiz} />
    </section>,
  ],
};

const sectionsKontrollierbarkeit = [
  {
    id: "3",
    title: "Einleitung: Kontrollierbarkeit in der Mensch-KI-Interaktion",
  },
  {
    id: "4",
    title: "Dimensionen der Kontrollierbarkeit aus UX-Perspektive",
  },
  { id: "5", title: "Human Oversight Definition & Zielsetzung" },
  { id: "6", title: "Design-Patterns für Human Oversight" },
  { id: "7", title: "UX-Herausforderungen bei Human Oversight" },
  { id: "8", title: "Messung und Evaluation von Human Oversight" },
];

const Kontrollierbarkeit = {
  linkName: "kontrollierbarkeit",
  name: "Kontrollierbarkeit",
  description: "Wie und wann können Menschen sinnvoll eingreifen?",
  content: [
    <ChapterHeader text={"Kontrollierbarkeit"} number={5} />,
    <section>
      <p>
        Dieses Kapitel behandelt die Kontrollierbarkeit von KI-Systemen aus
        einer UX-orientierten Perspektive und zeigt, wie Nutzer:innen die
        Möglichkeit erhalten, das Verhalten von KI gezielt zu verstehen, zu
        beeinflussen und sicher zu steuern - eine zentrale Voraussetzung für
        Akzeptanz, Vertrauen und verantwortungsvollen Einsatz.
      </p>
      <Accordion sections={sectionsKontrollierbarkeit} />
      <SubNavigation sections={sectionsKontrollierbarkeit} />
    </section>,
    <section>
      <p className="no-print">
        Im folgenden Video wird grundlegend erläutert, was Kontrollierbarkeit in
        der Mensch-KI-Interaktion bedeutet und warum sie eine Schlüsselrolle für
        nutzerzentriertes, sicheres und vertrauenswürdiges KI-Design spielt.
      </p>
      <VideoContainer
        link="https://www.youtube-nocookie.com/embed/Mu8MafXxgVI?rel=0&modestbranding=1"
        title="Kontrollierbarkeit"
      />
      <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)] justify-center only-print">
        <p style={{ marginBottom: "8px" }}>
          Im folgenden Video wird grundlegend erläutert, was Kontrollierbarkeit
          in der Mensch-KI-Interaktion bedeutet und warum sie eine
          Schlüsselrolle für nutzerzentriertes, sicheres und vertrauenswürdiges
          KI-Design spielt.
        </p>
        <a href="https://youtu.be/Mu8MafXxgVI">
          <img
            src={thumbnail_kontrollierbarkeit}
            alt="Video Thumbnail Kontrollierbarkeit"
            className="rounded-lg overflow-hidden"
          />
        </a>
        <h4 className="w-full text-center mt-1">
          <a
            href="https://youtu.be/Mu8MafXxgVI"
            target="_blank"
            rel="noopener noreferrer">
            https://youtu.be/Mu8MafXxgVI
          </a>
        </h4>
      </div>
    </section>,
    <section className="break">
      <h2 className="font-black">
        Grundlagen der Kontrollierbarkeit in KI (UX-orientiert)
      </h2>
      <h3>1. Einleitung: Kontrollierbarkeit in der Mensch-KI-Interaktion</h3>
      <p>
        Kontrollierbarkeit beschreibt die Fähigkeit, das Verhalten eines Systems
        gezielt zu beeinflussen oder zu begrenzen, sodass es mit den Zielen des
        Menschen übereinstimmt. Während dieser Begriff in der klassischen
        Regelungstechnik vor allem mathematisch definiert ist - etwa als
        Möglichkeit, ein System aus jedem beliebigen Ausgangszustand in einen
        gewünschten Endzustand zu überführen - verschiebt sich der Fokus im
        Kontext moderner KI-Systeme mit direkter Mensch-Maschine-Interaktion
        deutlich.
      </p>
      <p>
        In einer UX-orientierten Perspektive geht es weniger um die vollständige
        mathematische Kontrollierbarkeit des Modells, sondern vielmehr um die{" "}
        <i>wahrgenommene und erlebbare Kontrollierbarkeit</i> aus Sicht der
        Nutzer:innen. Die entscheidenden Fragen lauten:
      </p>
      <ul>
        <li>
          <b>Verstehen</b> die Nutzer:innen, was die KI tut?
        </li>
        <li>
          <b>Können</b> sie in den Prozess eingreifen, wenn nötig?
        </li>
        <li>
          <b>Erleben</b> sie ein angemessenes Maß an Kontrolle, das Vertrauen
          schafft, ohne die Funktionalität einzuschränken?
        </li>
      </ul>
      <p>
        Gerade bei KI-Systemen mit zunehmender Autonomie (z. B. generative
        Sprachmodelle, autonome Fahrzeuge, adaptive Empfehlungssysteme) ist
        diese Form der Kontrollierbarkeit essenziell für Akzeptanz, Sicherheit
        und verantwortungsvollen Einsatz. Forschungen in der{" "}
        <i>Human-Computer Interaction</i> (HCI) zeigen, dass wahrgenommene
        Kontrollmöglichkeiten maßgeblich das Vertrauen in automatisierte Systeme
        beeinflussen. Fehlende Kontrolle - oder auch nur das Gefühl mangelnder
        Eingriffsmöglichkeiten - führt dagegen häufig zu Ablehnung oder
        riskantem Verhalten, etwa blindem Vertrauen ohne kritische Prüfung.
      </p>
      <p>
        Aus UX-Sicht wird Kontrollierbarkeit zu einer{" "}
        <i>Schnittstellenaufgabe</i>: Sie hängt nicht nur von der inneren
        Architektur des KI-Systems ab, sondern stark von der Gestaltung der
        Interaktionsmöglichkeiten, der Transparenzmechanismen und der Einbettung
        in den Nutzungskontext.
      </p>
    </section>,
    <section>
      <h3>2. Dimensionen der Kontrollierbarkeit aus UX-Perspektive</h3>
      <p>
        Aus Sicht der Mensch-KI-Interaktion lässt sich Kontrollierbarkeit in
        mehrere zentrale Dimensionen unterteilen. Diese Dimensionen bestimmen,
        wie gut Nutzer:innen in der Lage sind, die KI zu verstehen, zu
        beeinflussen und zu überwachen. Sie sind nicht nur technische
        Eigenschaften, sondern auch Gestaltungsprinzipien für Interfaces und
        Interaktionsdesign.
      </p>
      <h4>a) Transparenz</h4>
      <p>
        Transparenz bedeutet, dass das System seine Funktionsweise,
        Entscheidungslogik und Zielrichtung in einer für den Menschen
        verständlichen Form offenlegt. In der UX-Praxis umfasst das:
      </p>
      <ul>
        <li>Klar erkennbare Systemzustände</li>
        <li>
          Erklärungen zu Entscheidungen (z. B. warum ein bestimmtes Ergebnis
          vorgeschlagen wird)
        </li>
        <li>Sichtbare Unsicherheiten oder Grenzen des Systems</li>
      </ul>
      <p>
        Hohe Transparenz erleichtert es, mentale Modelle zu bilden, die
        Grundlage für effektive Kontrolle sind.
      </p>
      <h4 className="page-break">b) Vorhersagbarkeit</h4>
      <p>
        Ein KI-System sollte in vergleichbaren Situationen konsistent reagieren.
        Vorhersagbarkeit verringert die kognitive Belastung, da Nutzer:innen
        weniger Energie darauf verwenden müssen, das Verhalten zu antizipieren.
        Für UX bedeutet dies:
      </p>
      <ul>
        <li>Konsistente Interaktionsmuster</li>
        <li>Klare Regeln, wann Automatisierung greift</li>
        <li>
          Begrenzung nicht-deterministischer Outputs in sicherheitskritischen
          Kontexten
        </li>
      </ul>
      <h4>c) Interventionsmöglichkeiten</h4>
      <p>
        Nutzer:innen müssen jederzeit in der Lage sein, das Verhalten der KI zu
        beeinflussen oder zu stoppen. Dies reicht von <i>Undo-Funktionen</i> bis
        zu physischen Not-Aus-Mechanismen. UX-relevante Faktoren:
      </p>
      <ul>
        <li>Niedrige Einstiegshürden für Eingriffe (keine komplexen Menüs)</li>
        <li>
          Mehrstufige Eingriffsmöglichkeiten (Feinsteuerung vs. kompletter
          Abbruch)
        </li>
        <li>Sichtbarkeit und Erreichbarkeit der Kontrollfunktionen</li>
      </ul>
      <h4 className="page-break">d) Rückmeldungen & Erklärungen</h4>
      <p>
        Kontrollierbarkeit hängt davon ab, ob Nutzer:innen die Auswirkungen
        ihrer Eingriffe nachvollziehen können. Effektive Feedback-Mechanismen:
      </p>
      <ul>
        <li>Sofortige visuelle oder akustische Bestätigung</li>
        <li>Erklärung der Veränderung nach einem Eingriff</li>
        <li>
          Möglichkeit zur Überprüfung, ob die gewünschte Wirkung eingetreten ist
        </li>
      </ul>
      <h4>e) Adaptivität mit Nutzerkontrolle</h4>
      <p>
        KI kann sich an das Verhalten und die Präferenzen des Nutzers anpassen,
        sollte dabei aber stets abschaltbare und <i>übersteuerbare</i>{" "}
        Mechanismen bieten. Hier ist der Balanceakt entscheidend: zu viel
        Anpassung ohne Transparenz kann das Gefühl der Kontrolle untergraben.
      </p>
      <p>
        <b>Praxisbeispiel</b>: In medizinischen Diagnosesystemen kann
        Transparenz durch erklärbare Modellentscheidungen (XAI) ergänzt werden,
        während Vorhersagbarkeit und klare Eingriffsmöglichkeiten verhindern,
        dass Ärzte blind den KI-Empfehlungen folgen.
      </p>
      <p>
        Die zuvor beschriebenen Dimensionen der Kontrollierbarkeit bilden den
        allgemeinen Rahmen dafür, wie Menschen mit KI-Systemen interagieren, sie
        verstehen und steuern können. Während diese Prinzipien in jedem
        Anwendungsbereich relevant sind, gewinnt eine spezielle Ausprägung
        besondere Bedeutung in sicherheitskritischen oder hochregulierten
        Kontexten: <b>Human Oversight</b>
      </p>
      <p>
        Der{" "}
        <LinkHandler to={"/eu-ai-act/einleitung"}>
          AI Act der Europäischen Union
        </LinkHandler>{" "}
        macht Human Oversight zu einer verbindlichen Anforderung für
        Hochrisiko-KI-Systeme. Dabei wird die Kontrollierbarkeit konkret auf die
        Frage zugespitzt, wie Menschen gezielt, informiert und wirksam in den
        Betrieb einer KI eingreifen können. Human Oversight ist damit keine
        bloße Zusatzfunktion, sondern ein zentrales UX- und Governance-Element,
        das technische, rechtliche und psychologische Aspekte der
        Mensch-KI-Interaktion bündelt.
      </p>
    </section>,
    <section className="break">
      <h2 className="font-black">
        Human Oversight als spezielle Form der Kontrollierbarkeit
      </h2>
      <h3>1. Definition & Zielsetzung</h3>
      <p>
        <b>Human Oversight</b> bezeichnet die systematisch gestaltete
        Möglichkeit für Menschen, den Betrieb und die Entscheidungen eines
        KI-Systems zu überwachen, zu bewerten und bei Bedarf einzugreifen. Im
        Unterschied zu spontanen oder reaktiven Eingriffen ist Human Oversight
        als <i>vorgesehener Bestandteil des Systemdesigns</i> integriert.
      </p>
      <p>Das Ziel von Human Oversight ist zweifach:</p>
      <ol>
        <li>
          <b>Sicherheit</b> - Verhindern oder Abmildern von Schäden, die durch
          fehlerhafte oder unerwünschte Entscheidungen entstehen könnten.
        </li>
        <li>
          <b>Verantwortlichkeit</b> - Sicherstellen, dass es stets einen
          nachvollziehbaren, menschlichen Entscheidungsträger gibt, der die
          letzte Verantwortung für kritische Ergebnisse trägt.
        </li>
      </ol>
      <p className="page-break">
        In der Praxis umfasst Human Oversight alle Maßnahmen, die gewährleisten,
        dass:
      </p>
      <ul>
        <li>
          Menschen informiert genug sind, um sinnvolle Eingriffe vorzunehmen.
        </li>
        <li>Eingriffe rechtzeitig erfolgen können, bevor Schaden entsteht.</li>
        <li>
          Die KI-Nutzung in einen klaren Governance- und Verantwortungsrahmen
          eingebettet ist.
        </li>
      </ul>
      <p>
        Der <b>EU AI Act</b> definiert Human Oversight explizit als Anforderung
        an Hochrisiko-KI-Systeme (z. B. in der Medizin, in der Strafverfolgung
        oder bei kritischer Infrastruktur). Die zugrunde liegende Annahme:
        KI-Systeme können Fehler machen oder von Trainingsannahmen abweichen -
        menschliche Aufsicht reduziert das Risiko, dass diese Fehler unentdeckt
        und unkontrolliert bleiben.
      </p>
      <p>
        Aus UX-Perspektive bedeutet Human Oversight nicht nur, dass eine
        Eingriffsmöglichkeit existiert, sondern dass diese{" "}
        <i>auffindbar, nutzbar und wirksam</i> ist. Das Oversight-Design muss
        gewährleisten, dass Nutzer:innen im richtigen Moment die nötigen
        Informationen und die passenden Werkzeuge haben, um zu handeln - ohne
        überfordert oder durch unnötige Eingriffe ermüdet zu werden.
      </p>
    </section>,
    <section>
      <h3>2. Design-Pattern für Human Oversight</h3>
      <p>
        Human Oversight kann in der Praxis in unterschiedlichen Formen umgesetzt
        werden. Diese <i>Design-Patterns</i> unterscheiden sich vor allem darin,{" "}
        <b>wann</b> und <b>wie intensiv</b> der Mensch in den
        Entscheidungsprozess der KI eingebunden ist. Der EU AI Act nennt
        explizit Mechanismen, die sicherstellen sollen, dass Menschen den
        Betrieb der KI überwachen und eingreifen können. In der UX-Gestaltung
        bedeutet das, diese Mechanismen so zu integrieren, dass sie{" "}
        <b>sichtbar</b>, <b>verständlich</b> und <b>bedienbar</b> sind.
      </p>
      <h4>a) Human-in-the-Loop (HITL)</h4>
      <p>
        Der Mensch überprüft und bestätigt kritische Entscheidungen vor ihrer
        Umsetzung.
      </p>
      <p>
        <b>Vorteil</b>: Maximale Sicherheit, da keine kritische Aktion ohne
        menschliche Zustimmung ausgeführt wird.
      </p>
      <p className="specialText">
        <b>UX-Anforderung:</b>
        <ul>
          <li>Klare Benachrichtigung, wenn eine Entscheidung ansteht</li>
          <li>Kompakte, aber aussagekräftige Erklärung der KI-Empfehlung</li>
          <li>Einfacher Mechanismus zur Zustimmung oder Ablehnung</li>
        </ul>
      </p>
      <p>
        <b>Beispiel</b>: Radiologisches Diagnosesystem, bei dem Ärzt:innen
        KI-gestützte Befunde vor Freigabe validieren.
      </p>
      <h4>b) Human-out-the-Loop (HOTL)</h4>
      <p>
        Der Mensch überwacht den laufenden Prozess und kann bei Bedarf
        eingreifen, muss es aber nicht proaktiv bei jeder Entscheidung tun.
      </p>
      <p>
        <b>Vorteil</b>: Effizienter, da die KI autonom arbeitet, bis eine
        Intervention erforderlich ist.
      </p>
      <p className="specialText">
        <b>UX-Anforderung:</b>
        <ul>
          <li>Kontinuierliche Statusanzeigen und Prozessvisualisierungen</li>
          <li>Frühwarnungen bei Anomalien oder Risikoindikatoren</li>
          <li>Sofortige Eingriffsmöglichkeiten mit minimalem Reaktionsweg</li>
        </ul>
      </p>
      <p>
        <b>Beispiel</b>: Autonomes Fahren, bei dem der Fahrer jederzeit
        übernehmen kann, wenn das System eine kritische Situation meldet.
      </p>
      <h4>c) Human-in-Command (HIC)</h4>
      <p>
        Der Mensch definiert die übergeordneten Ziele, Grenzen und
        Rahmenbedingungen und kann den Betrieb der KI jederzeit stoppen oder neu
        konfigurieren.
      </p>
      <p>
        <b>Vorteil</b>: Hohe strategische Kontrolle, auch wenn operative
        Entscheidungen autonom getroffen werden.
      </p>
      <p className="specialText">
        <b>UX-Anforderung:</b>
        <ul>
          <li>Leicht zugängliche Konfigurations- und Abschaltfunktionen</li>
          <li>
            Transparente Darstellung der aktuellen Systemziele und -grenzen
          </li>
          <li>
            Logging und Audit Trails, um getroffene Entscheidungen
            nachzuvollziehen
          </li>
        </ul>
      </p>
      <p>
        <b>Beispiel</b>: Militärische Drohnensteuerung, bei der der Operator
        Einsatzregeln festlegt und jederzeit den Einsatz beenden kann.
      </p>
      <h4>Gestaltungsprinzipien über alle Patterns hinweg</h4>
      <List
        items={[
          "<b>Sichtbarkeit</b>: Kontrolloptionen müssen leicht auffindbar und jederzeit zugänglich sein.",
          "<b>Zeitkritik</b>: Je geringer die Reaktionszeit, desto direkter und weniger verschachtelt muss der Eingriffspfad sein.",
          "<b>Informationsdesign</b>: Nur relevante Informationen anzeigen, um Überforderung und „Alert Fatigue“ zu vermeiden.",
          "<b>Vertrauenskalibrierung</b>: Interface-Design muss ein realistisches Bild der KI-Fähigkeiten und -Grenzen vermitteln.",
        ]}
        alignItems="center"
      />
    </section>,
    <section>
      <h3>3. UX-Herausforderungen bei Human Oversight</h3>
      <p>
        Human Oversight stellt nicht nur technische, sondern vor allem
        gestalterische Herausforderungen. Selbst wenn Eingriffsmöglichkeiten
        vorhanden sind, kann ihre Wirksamkeit stark eingeschränkt sein, wenn sie
        aus UX-Sicht nicht optimal umgesetzt werden. Dabei lassen sich die
        größten Stolpersteine in drei Hauptkategorien einteilen:
      </p>
      <h4>
        a) Aufmerksamkeitsfalle <i>(Automation Complacency)</i>
      </h4>
      <p>
        Wenn KI-Systeme über längere Zeit fehlerfrei oder sogar besser als der
        Mensch arbeiten, neigen Nutzer:innen dazu, ihre Aufmerksamkeit zu
        reduzieren.
      </p>
      <p>
        <b>Folge</b>: Eingriffe erfolgen zu spät oder gar nicht, weil Anomalien
        nicht mehr aktiv überwacht werden.
      </p>
      <p className="specialText">
        <b>UX-Ansatz:</b>
        <ul>
          <li>
            Periodische aktive Bestätigung der Nutzer:innen einfordern („Are you
            still there?“-Checks in kritischen Prozessen)
          </li>
          <li>
            Adaptive Anzeigen, die bei hohem Risiko die Aufmerksamkeit erhöhen
          </li>
          <li>
            Schulung und bewusste Sensibilisierung für seltene, aber kritische
            Eingriffsfälle
          </li>
        </ul>
      </p>
      <h4 className="page-break">b) Alert Fatigue</h4>
      <p>
        Wenn zu viele Warnungen oder Eingriffsaufforderungen erscheinen -
        insbesondere mit geringer Relevanz - tritt das Gegenteil der
        beabsichtigten Wirkung ein: Nutzer:innen ignorieren auch wichtige
        Alarme.
      </p>
      <p>
        <b>Folge</b>: Kritische Warnungen werden übersehen oder reflexartig
        weggeklickt.
      </p>
      <p className="specialText">
        <b>UX-Ansatz:</b>
        <ul>
          <li>
            Priorisierung von Alerts nach Schweregrad und Handlungsdringlichkeit
          </li>
          <li>
            Zusammenfassung von Informationsmeldungen, um Benachrichtigungsflut
            zu vermeiden
          </li>
          <li>
            Möglichkeit für Nutzer:innen, Alarmempfindlichkeit fein einzustellen
          </li>
        </ul>
      </p>
      <h4>c) Erklärungsformat und Handlungsrelevanz</h4>
      <p>
        Selbst wenn eine KI ihre Entscheidungen transparent macht, heißt das
        nicht automatisch, dass Nutzer:innen diese Informationen verstehen oder
        anwenden können.
      </p>
      <p>
        <b>Folge</b>: Oversight wird formal erfüllt, aber praktisch wirkungslos.
      </p>
      <p className="specialText">
        <b>UX-Ansatz:</b>
        <ul>
          <li>
            Nutzung verständlicher, nicht-technischer Sprache für Erklärungen
          </li>
          <li>
            Ergänzung durch visuelle Darstellungen (Heatmaps, Diagramme,
            Ablaufvisualisierungen)
          </li>
          <li>
            Kontextbezogene Handlungsoptionen direkt im Erklärungsfenster
            („Jetzt korrigieren“ statt &bdquo;Gehe zu Menüpunkt 5&ldquo;)
          </li>
        </ul>
      </p>
      <h4>Zusatzproblem: Balance zwischen Kontrolle und Autonomie</h4>
      <p>
        Zu restriktives Oversight-Design kann die Effizienz der KI untergraben,
        während zu wenig Kontrolle Risiken erhöht. Die UX-Herausforderung
        besteht darin, <b>adaptive Kontrollmodi</b> zu gestalten, die sich an
        Kontext, Nutzererfahrung und Risikolage anpassen.
      </p>
    </section>,
    <section className="break">
      <h3>4. Messung und Evaluation von Human Oversight</h3>
      <p>
        Damit Human Oversight nicht nur als formale Anforderung existiert,
        sondern tatsächlich wirksam ist, muss er regelmäßig{" "}
        <b>gemessen, getestet und optimiert</b> werden. Aus UX-Sicht umfasst
        Evaluation sowohl quantitative Leistungsdaten als auch qualitative
        Nutzererfahrungen.
      </p>
      <h4 className="page-break">1. Quantitative Metriken</h4>
      <p>Diese Metriken erfassen messbare Aspekte der Oversight-Wirksamkeit:</p>
      <ul>
        <li>
          <b>Eingriffshäufigkeit: </b> Wie oft greifen Nutzer:innen in den
          KI-Betrieb ein? <br />
          Aussagekraft: Hohe Eingriffsraten können auf mangelnde KI-Qualität
          hinweisen, zu niedrige auf unzureichende Wachsamkeit.
        </li>
        <li>
          <b>Zeit bis zum Eingriff (Reaction Time): </b>
          Wie lange dauert es, bis Nutzer:innen auf eine kritische Situation
          reagieren? <br />
          Besonders relevant in sicherheitskritischen Szenarien wie Medizin,
          Luftfahrt oder Verkehr.
        </li>
        <li>
          <b>Fehlervermeidung durch Eingriff: </b>
          Anteil der KI-Fehler, die vor Schadenseintritt erkannt und korrigiert
          wurden.
        </li>
        <li>
          <b>Erfolgsquote der Intervention: </b>
          Prozentsatz der Eingriffe, die den gewünschten Effekt hatten.
        </li>
      </ul>
      <h4>2. Qualitative Evaluationsmethoden</h4>
      <p>
        Diese Methoden beleuchten die subjektive Wahrnehmung, das Vertrauen und
        die mentale Arbeitsbelastung der Nutzer:innen:
      </p>
      <ul>
        <li>
          <b>Usability-Tests: </b>
          Beobachten, wie einfach Nutzer:innen Oversight-Funktionen finden und
          nutzen können.
        </li>
        <li>
          <b>Kognitive Walkthroughs: </b>
          Schritt-für-Schritt-Analyse, ob Nutzer:innen im kritischen Moment die
          richtige Aktion wählen.
        </li>
        <li>
          <b>Think-Aloud-Protokolle: </b>
          Erfassung des Denkprozesses während der Interaktion, um mentale
          Modelle zu verstehen.
        </li>
        <li>
          <b>Post-Task-Befragungen: </b>
          Bewertung von Verständlichkeit, Sicherheitsempfinden und
          wahrgenommener Kontrolle.
        </li>
      </ul>
      <h4>3. Simulation und Szenariotests</h4>
      <p>
        Gerade bei selten auftretenden, aber hochkritischen Situationen sind
        kontrollierte Tests entscheidend:
      </p>
      <ul>
        <li>
          <b>Fault Injection: </b>Absichtlich Fehlentscheidungen der KI
          einbauen, um Eingriffsverhalten zu testen.
        </li>
        <li>
          <b>Time Pressure Scenarios: </b>Messen, ob Nutzer:innen auch unter
          Stress rechtzeitig reagieren.
        </li>
        <li>
          <b>Mode Confusion Tests: </b>Prüfen, ob Nutzer:innen wissen, in
          welchem Automatisierungsmodus sich das System befindet.
        </li>
      </ul>
      <h4>4. Kontinuierliche Optimierung</h4>
      <p>
        Evaluation ist kein einmaliger Schritt, sondern Teil eines{" "}
        <i>iterative Design Loops</i>:
      </p>
      <ol>
        <li>Messen</li>
        <li>Analysieren</li>
        <li>Interface anpassen</li>
        <li>Erneut testen</li>
      </ol>
      <p>
        Gerade in adaptiven KI-Systemen kann sich das Nutzerverhalten im Laufe
        der Zeit ändern, was regelmäßige Re-Evaluationen nötig macht.
      </p>
    </section>,
    <section className="no-print">
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={kontrollierbarkeitQuiz} />
    </section>,
  ],
};

const sectionsMentaleKomplement = [
  { id: "2", title: "Einleitung: Was sind mentale Modelle?" },
  { id: "3", title: "Was bedeutet Mental Model Complementary (MMC)?" },
  { id: "4", title: "Warum ist MMC wichtig?" },
  { id: "5", title: "Gestaltung von MMC in der Praxis" },
  { id: "6", title: "Herausforderungen bei MMC" },
  { id: "7", title: "Empfehlungen zur Förderung von MMC" },
  { id: "8", title: "Fazit: MMC als Zukunftsprinzip kollaborativer KI" },
];
const MentaleModellkomplementarität = {
  linkName: "mentale-modelle",
  name: "Mentale Modelle",
  description: "Wie ergänzen sich Mensch und Maschine kognitiv?",
  content: [
    <ChapterHeader text={"Mentale Modelle"} number={6} />,
    <section>
      <p>
        Dieses Kapitel behandelt werden Mentale Modelle betrachtet und wie sie
        bestimmen, wie Menschen verstehen, was eine KI tut und wie sie mit ihr
        interagieren.
      </p>
      <Accordion sections={sectionsMentaleKomplement} />
      <SubNavigation sections={sectionsMentaleKomplement} />
    </section>,
    <section className="break">
      <h2>1. Einleitung: Was sind mentale Modelle?</h2>
      <p>
        Mentale Modelle sind <b>innere, vereinfachte Repräsentationen</b> davon,
        wie ein System funktioniert, welche Ziele es verfolgt und wie es auf
        bestimmte Eingaben reagiert. Zum Beispiel definiert Johnson-Laird (1983)
        mentale Modelle als:
      </p>
      <p className="specialText text-center">
        &bdquo;... an inner replica of a situation or set of relations,
        constructed from perception, imagination, or discourse. These models,
        like a physical model of the solar system or a diagram, represent the
        structure of the world and are manipulated for reasoning, inference, and
        understanding, rather than relying on formal logical rules.&ldquo;
      </p>
      <p>
        Mit anderen Worten, mentale Modelle sind mentale Repräsentationen -
        Werkzeuge, um mentale Objekte zu manipulieren, um so Lösungen für
        Probleme zu finden. Sie entstehen aus Erfahrungen, Beobachtungen und
        bereitgestellten Erklärungen. In der Mensch-KI-Interaktion dienen sie
        als kognitive Grundlage, um:
      </p>
      <ul>
        <li>Systemverhalten vorherzusagen</li>
        <li>Entscheidungen über Eingriffe oder Kooperation zu treffen</li>
        <li>Vertrauen und Arbeitsverteilung sinnvoll zu gestalten</li>
      </ul>
      <p>
        Ein präzises mentales Modell{" "}
        <b>unterstützt effiziente Zusammenarbeit</b> und{" "}
        <b>angemessene Kontrolle</b>. Ist das Modell jedoch unvollständig oder
        falsch, kann es zu Missverständnissen, Fehlentscheidungen oder
        ineffizienter Nutzung führen.
      </p>
      <p>
        Bspw. haben wir eine mentale Vorstellung davon, was passiert, wenn wir
        ein Auto starten oder ein Computer ein Programm ausführt. Wir können das
        Fahrzeug lenken oder Dateien in einem Programm bearbeiten. Ein
        vollständiges technisches Verständnis aller beteiligten Komponenten oder
        des dahinterliegendes Codes ist dafür nicht notwendig.
      </p>
    </section>,
    <section>
      <h2>2. Was bedeutet Mental Model Complementary (MMC)?</h2>
      <p>
        Mensch und KI besitzen oft unterschiedliche, aber sich ergänzende
        Wissens- und Verständnisbereiche. Die KI bringt statistische
        Mustererkennung und Verarbeitungsgeschwindigkeit ein, während der Mensch
        Kontextwissen, ethische Abwägung und kreative Problemlösung beisteuert.
        Ziel ist eine <b>optimale Überlappung</b>, damit Wissenslücken
        wechselseitig kompensiert werden.
      </p>
      <p>
        Der Begriff <b>Mental Model Complementary (MMC)</b> beschreibt die Idee,
        dass die{" "}
        <b>mentalen Modelle von Mensch und KI sich wechselseitig ergänzen</b>{" "}
        sollen. Ziel ist ein <b>gemeinsames Verständnis</b>, das eine effektive
        Kooperation ermöglicht.
      </p>
      <p>MMC bedeutet daher:</p>
      <p className="specialText text-center">
        &bdquo;Nicht Gleichheit der Modelle, sondern Komplementarität ihrer
        Stärken.&ldquo;
      </p>
    </section>,
    <section>
      <h2>3. Warum ist MMC wichtig?</h2>
      <p>
        In kollaborativen Mensch-KI-Systemen (z.B. Entscheidungsunterstützung in
        Medizin, HR, Justiz) kommt es nicht nur auf technische Leistung an,
        sondern auf ein gutes Zusammenspiel:
      </p>
      <ul>
        <li>
          MMC fördert <b>gegenseitiges Verständnis</b> und{" "}
          <b>interaktive Kontrolle</b>.
        </li>
        <li>
          Sie verbessert die <b>gemeinsame Fehlerdiagnose</b>.
        </li>
        <li>
          Sie erlaubt, <b>Verantwortung sinnvoll aufzuteilen</b>.
        </li>
      </ul>
      <p>
        Ein Beispiel: Eine KI schlägt eine Diagnose vor, weil sie statistische
        Zusammenhänge erkennt. Der Arzt ergänzt durch Wissen über seltene
        Nebenerkrankungen und Patientenbiografie - das mentale Modell des Arztes{" "}
        <b>komplementiert</b> das der KI.
      </p>
    </section>,
    <section>
      <h2>4. Gestaltung von MMC in der Praxis</h2>
      <p>
        Damit mentale Modelle komplementär werden, braucht es gezielte
        Gestaltung:
      </p>
      <h4>a) Transparenz & Erklärbarkeit</h4>
      <p>
        Systeme sollten ihr Vorgehen <b>offenlegen</b>, sodass Nutzer:innen
        Schlüsse daraus ziehen können. <br />
        <b>Beispiel:</b> Feature-Visualisierung oder Konfidenzwerte anzeigen.
      </p>
      <h4>b) Unterstütztes Modelllernen</h4>
      <p>
        Nutzer:innen sollten durch{" "}
        <b>Feedback, Visualisierungen oder Simulationen</b> ein mentales Modell
        entwickeln können.
      </p>
      <p>
        KI kann den Menschen auch über <b>eigene Grenzen informieren</b>{" "}
        (Meta-Kommunikation).
      </p>
      <h4>c) Bidirektionale Anpassung</h4>
      <p>
        Nicht nur der Mensch passt sich an das System an - das System kann auch{" "}
        <b>auf den mentalen Zustand des Menschen reagieren</b>, z.B. durch
        adaptive Erklärungen oder Warnhinweise.
      </p>
      <h4 className="page-break">d) Gemeinsame Aufgabenstruktur</h4>
      <p>
        Interfaces sollten <b>Aufgaben so aufbereiten</b>, dass sie menschliche
        und maschinelle Beiträge sichtbar und kombinierbar machen.
      </p>
      <h4>e) Dekompositionale Aufgabenverteilung</h4>
      <p>
        Eine zentrale Technik zur Förderung von MMC ist die{" "}
        <b>dekompositionale Aufgabenstrukturierung</b>:
        <ul>
          <li>Die Gesamtaufgabe wird in Teilaufgaben zerlegt.</li>
          <li>
            <b>Mensch und KI</b> übernehmen jeweils die Komponenten, in denen
            sie ihre spezifischen Stärken ausspielen können.
          </li>
          <li>
            <b>Beispiel:</b> In der medizinischen Diagnose übernimmt die KI das
            Screening großer Bilddatenmengen, der Mensch interpretiert
            auffällige Ergebnisse im Kontext individueller Patient:innen.
          </li>
        </ul>
      </p>
      <p>
        <b>Vorteil:</b> Dekomposition fördert klare Zustädnigkeiten und
        gegenseitiges Vertrauen - jeder Teilnehmende versteht die Rolle des
        anderen
      </p>
    </section>,
    <section>
      <h2>5. Herausforderungen bei MMC</h2>
      <List
        items={[
          "<b>Modellkonflikte</b>: Mensch und KI kommen zu widersprüchlichen Einschätzungen.",
          "<b>Modellunsicherheit</b>: Menschen haben kein stabiles Modell der KI - besonders bei intransparentem Verhalten.",
          "<b>Kognitive Überlastung</b>: Zu viele Informationen über die Funktionsweise der KI können überfordern.",
          "<b>Missverständnisse</b>: Menschen interpretieren KI-Ausgaben nach ihren eigenen kognitiven Mustern, was zu Fehlurteilen führen kann.",
        ]}
        alignItems="center"
      />
    </section>,
    <section>
      <h2>6. Empfehlungen zur Förderung von MMC</h2>
      <List
        items={[
          "<b>Erklärungen nutzerzentriert gestalten</b> - z.B. durch kontrastive Erklärungen: &bdquo;Warum A statt B?&ldquo;",
          "<b>Modellbildung unterstützen</b> - z.B. durch interaktive Visualisierungen oder kontrolliertes Experimentieren mit dem System",
          "<b>Unterschiede sichtbar machen</b> - etwa durch Darstellung divergierender Einschätzungen zwischen Mensch und Maschine",
          "<b>Training & Reflexion</b> - Nutzer:innen sollten explizit über ihr mentales Modell nachdenken (z.B. in Schulung oder Feedbacksituationen)",
          "<b>Systemverhalten adaptiv gestalten</b> - z.B. mehr Erklärungen bei erkennbarer Unsicherheit oder falscher Nutzung",
        ]}
        alignItems="center"
      />
    </section>,
    <section>
      <h2>7. Fazit: MMC als Zukunftsprinzip kollaborativer KI</h2>
      <p>
        MMC verschiebt den Fokus weg von der reinen <i>Nutzerfreundlichkeit</i>{" "}
        hin zur <b>kognitiven Partnerschaft</b>: Mensch und KI sollen nicht
        identisch, sondern anschlussfähig denken.
      </p>
      <p>
        Wenn Mensch und System ihre unterschiedlichen Stärken{" "}
        <b>wechselseitig nutzbar machen</b>, entsteht ein leistungsfähiges,
        robustes und verantwortbares Entscheidungssystem.
      </p>
      <p className="specialText text-center">
        &bdquo;Gute KI ist nicht der bessere Mensch - sondern der bessere
        Partner.&ldquo;
      </p>
    </section>,
  ],
};

const Fazit = {
  linkName: "fazit",
  name: "Fazit",
  description:
    "Hier wird ein Fazit zu GEstaltungszielen menschzentrierter KI-Systemen gegeben.",
  content: [
    <ChapterHeader text={"Fazit"} number={7} />,
    <section>
      <p>
        Künstliche Intelligenz verändert nicht nur, <b>was</b> Systeme können,
        sondern auch, <b>wie</b> Menschen mit ihnen interagieren. Gerade weil
        KI-Systeme zunehmend autonome, erklärungsbedürftige und einflussreiche
        Entscheidungen treffen, ist es nicht mehr ausreichend, ihre Leistung
        allein an Genauigkeit oder Effizienz zu messen.
      </p>
      <p>
        Stattdessen müssen <b>UX-bezogene Eigenschaften</b> in den Mittelpunkt
        rücken, um sicherzustellen, dass KI-Systeme{" "}
        <b>verständlich und vertrauenswürdig</b> gestaltet werden.
      </p>
      <p>
        Die behandelten Aspekte -{" "}
        <b>
          Vertrauenswürdigkeit, Transparenz, Erklärbarkeit, Kontrollierbarkeit
          und mentale Modellbildung
        </b>{" "}
        - bilden ein eng verzahntes Set an Qualitätsdimensionen. Sie greifen
        ineinander, bedingen sich gegenseitig und haben gemeinsam ein Ziel:{" "}
        <b>angemessene und verantwortbare Mensch-KI-Interaktion</b> zu
        ermöglichen.
      </p>
      <p>
        Nur wenn diese Eigenschaften gezielt und{" "}
        <b>menschzentriert gestaltet</b> werden, kann KI-Technologie{" "}
        <b>
          verantwortungsvoll in gesellschaftliche Entscheidungsprozesse
          eingebettet
        </b>{" "}
        werden.
      </p>
    </section>,
  ],
};

const Quellen = {
  linkName: "quellen",
  name: "Quellen",
  description:
    "Hier befinden sich die verwendeten Quellen der einzelnen Kapitel.",
  content: [
    <ChapterHeader text={"Quellen"} number={8} />,
    <section>
      <Sources />
    </section>,
  ],
};

const linksAndNames = [
  {
    link: Vertrauenswürdigkeit.linkName,
    name: Vertrauenswürdigkeit.name,
    description: Vertrauenswürdigkeit.description,
  },
  {
    link: Transparenz.linkName,
    name: Transparenz.name,
    description: Transparenz.description,
  },
  {
    link: Erklärbarkeit.linkName,
    name: Erklärbarkeit.name,
    description: Erklärbarkeit.description,
  },
  {
    link: Kontrollierbarkeit.linkName,
    name: Kontrollierbarkeit.name,
    description: Kontrollierbarkeit.description,
  },
  {
    link: MentaleModellkomplementarität.linkName,
    name: MentaleModellkomplementarität.name,
    description: MentaleModellkomplementarität.description,
  },
];

const sectionsEinleitung = [
  { id: "einleitung", title: "Einleitung" },
  { id: "2", title: "Warum sind UX-Eigenschaften wichtig?" },
  { id: "3", title: "Aufbau der Lernmodule" },
];

const Einleitung = {
  linkName: "einleitung",
  name: "Einleitung",
  description:
    "Hier wird ein Überblick über die Relevanz nutzerzentrierter Gestaltung und den Zusammenhang von Mensch und Technologie gegeben.",
  content: [
    <ChapterHeader text={"Einleitung"} number={1} />,
    <section id="einleitung">
      <SubNavigation sections={sectionsEinleitung} />
      <p>
        Künstliche Intelligenz beeinflusst zunehmend, wie Menschen mit
        automatisierten Systemen interagieren - ob in der Medizin, im
        Personalwesen, in der Verwaltung oder in Alltagsanwendungen. Doch je
        autonomer und komplexer KI-Systeme werden, desto wichtiger wird ihre{" "}
        <b>Gestaltung aus Sicht der Nutzer:innen</b>. In diesem Modul wollen wir
        ihnen näher bringen, welche Rolle die verschiedenen Eigenschaften von
        KI-Systemen spielen und worauf sie bei der Gestaltung ihres Systems
        achten müssen.
      </p>
    </section>,
    <section>
      <h2>Warum sind UX-Eigenschaften wichtig?</h2>
      <p>
        Das folgende Modul bietet einen systematischen Einstieg in zentrale{" "}
        <b>UX-bezogene Eigenschaften von KI-Systemen</b>, die darüber
        entscheiden:
      </p>
      <ul>
        <li>
          wie gut Menschen die <b>Funktion und Grenzen</b> der KI verstehen,
        </li>
        <li>
          ob sie der KI <b>angemessen vertrauen</b> (nicht blind oder
          skeptisch),
        </li>
        <li>
          ob sie im <b>kritischen Moment handlungsfähig</b> bleiben,
        </li>
        <li>
          und ob sie langfristig die <b>Verantwortung behalten</b>.
        </li>
      </ul>
      <p>
        Sie sind damit zentrale Voraussetzungen für <b>Human-Centered AI</b> und
        ein entscheidener Faktor für die{" "}
        <b>gesellschaftliche Akzeptanz und Sicherheit</b> von KI-Systemen.
      </p>
    </section>,
    <section>
      <h2>Aufbau der Lernmodule</h2>
      <p className="no-print">
        Die behandelten UX-bezogenen Eigenschaften von KI-Systemen sind:
      </p>
      <div className="flex flex-wrap justify-center -mx-4 no-print">
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
      <p className="only-print" style={{ marginBottom: "48px" }}>
        Die behandelten UX-bezogenen Eigenschaften von KI-Systemen sind:
      </p>
      <div className="only-print -mt-5">
        <List
          items={[
            `<h4>${linksAndNames[0].name}</h4> <p>${linksAndNames[0].description}</p>`,
            `<h4>${linksAndNames[1].name}</h4> <p>${linksAndNames[1].description}</p>`,
            `<h4>${linksAndNames[2].name}</h4> <p>${linksAndNames[2].description}</p>`,
            `<h4>${linksAndNames[3].name}</h4> <p>${linksAndNames[3].description}</p>`,
            `<h4>${linksAndNames[4].name}</h4> <p>${linksAndNames[4].description}</p>`,
          ]}
        />
      </div>
      <p className="mt-[var(--scale4)]">
        Jede Lektion führt in eine zentrale Eigenschaft ein, liefert{" "}
        <b>praxisnahe Beispiele</b>, benennt{" "}
        <b>psychologische und technologische Hintergründe</b> und bietet{" "}
        <b>konkrete Empfehlungen für Gestaltung und Umsetzung</b>.
      </p>
      <p className="specialText">
        Das Ziel: Ein fundiertes Verständnis dafür,{" "}
        <b>
          wie KI-Systeme gestaltet sein müssen, damit sie im Sinne der Menschen
          funktionieren
        </b>
        .
      </p>
    </section>,
  ],
};

const Gestaltungsziele = {
  linkName: "gestaltungsziele-menschzentrierte-ki",
  name: "Gestaltungsziele für menschzentrierte KI",
  moduleImage: ImageElement,
  content: [
    Einleitung,
    Vertrauenswürdigkeit,
    Transparenz,
    Erklärbarkeit,
    Kontrollierbarkeit,
    MentaleModellkomplementarität,
    Fazit,
    Quellen,
  ],
};

export default Gestaltungsziele;
