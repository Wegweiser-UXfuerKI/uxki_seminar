import ImageElement from "../../assets/icons/automatisierungspotenziale.svg?react";
import ThemeImage from "../1_elements/ThemeImage";
import { LinkHandler } from "../1_elements/LinkHandler";
import { VideoContainer } from "../1_elements/VideoContainer";
import Accordion from "../2_molecule/Accordion";
import List from "../2_molecule/List";
import SubNavigation from "../2_molecule/nav/SubNavigation";
import { Table } from "../2_molecule/Table";
import { TabSwitchView } from "../2_molecule/TabSwitchView";
import { CarouselContainer } from "../3_organism/CarouselContainer";
import { ChapterHeader } from "../3_organism/ChapterHeader";

import videoThumbnail from "../../assets/images/thumbnails/Identifikation_erkennen.webp";
import autoStufen_dark from "../../assets/images/prozesse/autoStufen_dark.png";
import autoStufen_light from "../../assets/images/prozesse/autoStufen_light.png";
import pats from "../../assets/images/prozesse/pats.png";

const sectionsEinleitung = [
  { id: "2", title: "Einleitung - Grundlagen" },
  { id: "3", title: "Beispiel: Gemeinwohlorientierte Beratung" },
  {
    id: "4",
    title: "Grundgedanke von Automatisierung",
  },
  { id: "5", title: "Aufbau des Moduls" },
];

const Einleitung = {
  linkName: "einleitung",
  name: "Einleitung",
  description:
    "Wie kann man KI gezielt einsetzen? Eine Einleitung zur Automatisierung",
  content: [
    <ChapterHeader text={"Einleitung"} number={1} />,
    <section>
      <Accordion sections={sectionsEinleitung} />
      <SubNavigation sections={sectionsEinleitung} />
    </section>,
    <section className="break">
      <p>
        In diesem fünften Modul vertiefen wir das Thema Automatisierung und den
        gezielten Einsatz von KI-Systemen in gemeinwohlorientierten
        Organisationen. Während die vorherigen Module vor allem die Bedeutung
        einer menschenzentrierten Perspektive auf KI, grundlegende
        Funktionsweisen von KI-Systemen sowie erste Evaluations- und
        Interpretationsansätze aus dem User Experience Design in den Fokus
        gestellt haben, richtet sich der Blick nun stärker auf die Frage:
      </p>
      <p className="specialText">
        Wann, wie und in welchem Ausmaß sind Automatisierung und KI in konkreten
        Arbeitsprozessen tatsächlich sinnvoll und verantwortungsvoll?
      </p>
      <p>
        Wie bereits in den vorherigen Kapiteln gezeigt, reicht es nicht aus,
        KI-Systeme nur technisch zu betrachten. Ihre Einführung verändert
        Arbeitsabläufe, Rollen, Verantwortlichkeiten und Entscheidungsstrukturen
        und betrifft damit immer auch Menschen, Organisationen und
        Machtverhältnisse.
      </p>
      <p>
        Ziel dieses Moduls ist es, Ihnen einen{" "}
        <b>praxisnahen, systematischen Denk- und Entscheidungsprozess</b> an die
        Hand zu geben, mit dem Sie bewusster abwägen können,{" "}
        <b>
          ob und wie Automatisierung in Ihrer Organisation eingesetzt werden
          sollte
        </b>{" "}
        - und wann bewusst darauf verzichtet werden sollte.
      </p>
      <p>
        Dabei geht es ausdrücklich nicht darum, möglichst viele Prozesse zu
        automatisieren. Vielmehr geht es darum,{" "}
        <b>passende, verantwortungsvolle und realistische Entscheidungen</b> zu
        treffen.
      </p>
      <p>
        Im Zentrum stehen dabei fünf grundlegende Leitfragen, die Sie durch
        dieses Modul begleiten:
      </p>
      <List
        items={[
          "<b>Erfüllt meine Aufgabe überhaupt die Voraussetzungen, um automatisierungstauglich zu sein?</b>",
          "<b>Möchten wichtige Stakeholder überhaupt, dass dieser Prozess automatisiert wird?</b>",
          "<b>Welcher Automatisierungsgrad ist sinnvoll und welche Konsequenzen hat er für den Arbeitsprozess?</b>",
          "<b>Ist ein KI-System oder ein Large Language Model (LLM) eine geeignete Technologie, um das definierte Ziel zu erreichen?</b>",
          "<b>Welche weiteren Voraussetzungen müssen geklärt sein, bevor ein Automatisierungsprojekt gestartet wird?</b>",
        ]}
        alignItems="center"
        size="medium"
      />
      <p>
        Diese Fragen sind bewusst einfach formuliert, greifen jedoch tief in
        organisatorische, ethische, technische und soziale Aspekte ein. Sie
        sollen dazu anregen, nicht vorschnell zu handeln, sondern bewusst zu
        reflektieren,{" "}
        <b>
          wo der tatsächliche Mehrwert von Automatisierung liegt und wo nicht
        </b>
        .
      </p>
      <p className="no-print">
        Im folgenden Video wird ein Überblick über die unterschiedlichen Aspekte
        bei der Identifikation gegeben, auf die in den folgenden Kapiteln näher
        eingegangen wird.
      </p>
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/0GpnGeD7BCM?rel=0&modestbranding=1"
        }
        title={"Intro"}
      />
      <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)] justify-center only-print">
        <p className="mb-0" style={{ marginBottom: 0 }}>
          Im folgenden Video wird ein Überblick über die unterschiedlichen
          Aspekte bei der Identifikation gegeben, auf die in den folgenden
          Kapiteln näher eingegangen wird.
        </p>
        <a href="https://youtu.be/0GpnGeD7BCM">
          <img
            src={videoThumbnail}
            alt="Video Thumbnail"
            className="rounded-lg overflow-hidden"
          />
        </a>
        <h4 className="w-full text-center mt-1">
          <a
            href="https://youtu.be/0GpnGeD7BCM"
            target="_blank"
            rel="noopener noreferrer">
            https://youtu.be/0GpnGeD7BCM
          </a>
        </h4>
      </div>
    </section>,
    <section>
      <h2>
        Ein durchgehendes Anwendungsbeispiel: Beratung im gemeinwohlorientierten
        Kontext
      </h2>
      <p>
        Um diese Fragen greifbarer zu machen, arbeitet dieses Modul mit einem
        durchgehenden, bewusst allgemein gehaltenen Beispiel:
      </p>
      <p>
        Stellen Sie sich eine gemeinwohlorientierte Organisation vor, die
        Beratungsangebote für Menschen in schwierigen Lebenssituationen
        anbietet. Dazu gehören unter anderem:
      </p>
      <ul>
        <li>psychosoziale Erstberatung</li>
        <li>Unterstützung bei der Orientierung im Hilfesystem</li>
        <li>
          Information zu staatlichen und zivilgesellschaftlichen
          Unterstützungsangeboten
        </li>
        <li>Weitervermittlung an spezialisierte Stellen</li>
      </ul>
      <p>
        Die Organisation wird über Telefon, E-Mail und ein Online-Formular
        kontaktiert. Monatlich gehen mehrere hundert Anfragen ein. Die
        Mitarbeitenden müssen jede Anfrage sichten, einordnen, priorisieren und
        entscheiden, wie weiter vorgegangen wird. Schon heute sind sie stark
        ausgelastet, und die Nachfrage steigt kontinuierlich.
      </p>
      <p>
        Vor diesem Hintergrund entsteht die Frage, ob und wie bestimmte
        Teilprozesse automatisiert werden könnten, zum Beispiel:
      </p>
      <ul>
        <li>eine erste Kategorisierung der Anfragen</li>
        <li>das Bereitstellen grundlegender Informationen</li>
        <li>die Priorisierung nach Dringlichkeit</li>
        <li>oder die Unterstützung bei der Dokumentation</li>
      </ul>
      <p>
        Dieses Beispiel wird in den folgenden Kapiteln immer wieder aufgegriffen
        und variiert, um die verschiedenen Überlegungen rund um Automatisierung,
        KI-Einsatz und Levels of Automation konkret erlebbar zu machen.
      </p>
    </section>,
    <section>
      <h2>Grundgedanke von Automatisierung</h2>
      <p>
        Automatisierung wird häufig mit Effizienz, Zeitersparnis und
        Kostenreduktion in Verbindung gebracht. Gerade in Organisationen mit
        begrenzten Ressourcen kann das sehr attraktiv erscheinen. Gleichzeitig
        sind viele Arbeitsprozesse im gemeinwohlorientierten Bereich
        hochsensibel:
      </p>
      <ul>
        <li>
          Sie betreffen Menschen in belastenden, teilweise kritischen
          Situationen.
        </li>
        <li>
          Sie erfordern Empathie, Kontextverständnis und situative
          Entscheidungen.
        </li>
        <li>Sie sind eng mit Vertrauen und Beziehung verbunden.</li>
      </ul>
      <p>
        Deshalb gilt hier ganz besonders: Automatisierung ist kein Selbstzweck.
        Nicht alles, was technisch automatisierbar ist, sollte auch
        automatisiert werden. Was „Automatisierung“ in diesem Modul bedeutet,
        erfahren Sie im ersten Unterkapitel.
      </p>
    </section>,
    <section>
      <h2>Aufbau des Moduls</h2>
      <p>
        Um Sie Schritt für Schritt durch diese komplexe Fragestellung zu führen,
        denkt das Modul grob folgende Bereiche ab:
      </p>
      <ul>
        <li>
          <b>
            Grundlagen: Was bedeutet Automatisierung im gemeinwohlorientierten
            Kontext?
          </b>{" "}
          (inkl. Chancen, Grenzen und typische Missverständnisse)
        </li>
        <li>
          <b>Prozesserkennung und -analyse:</b> Wie identifizieren Sie einen
          Prozess, der (vielleicht) automatisiert werden kann?
        </li>
        <li>
          <b>Automatisierungspräferenzen und Stakeholder-Perspektiven:</b> Wer
          ist betroffen und wie unterschiedlich können Erwartungen an
          Automatisierung ausfallen?
        </li>
        <li>
          <b>Levels of Automation:</b> Welche Abstufungen gibt es und welche
          Konsequenzen entstehen für Menschen, Organisation und Nutzer:innen?
        </li>
        <li>
          <b>KI und LLMs als Automatisierungstechnologie:</b> Wann sind sie
          geeignet - und wann nicht?
        </li>
        <li>
          <b>Praxisorientierte Checkliste und Entscheidungsunterstützung:</b>{" "}
          Ein konkretes Werkzeug, das Sie in Ihrer Organisation anwenden können.
        </li>
      </ul>
      <p>
        Dieses Modul soll Sie nicht zu einer bestimmten Entscheidung drängen,
        sondern Sie in die Lage versetzen, informierte, reflektierte und
        kontextangepasste Entscheidungen zu treffen - im Sinne Ihrer
        Organisation und der Menschen, für die Sie arbeiten.
      </p>
    </section>,
  ],
};

const sectionsAutomatisierungVerstehen = [
  {
    id: "2",
    title: "Unterschied: Digitalisierung, Automatisierung und KI-Einsatz",
  },
  {
    id: "3",
    title: "Warum Automatisierung bei Gemeinwohl besonders sensibel ist",
  },
  {
    id: "4",
    title: "Beispiel: Gelungene vs. nicht gelungene Automatisierung",
  },
  { id: "5", title: "Reflexionsfragen für Ihre Organisation" },
];

const AutomatisierungVerstehen = {
  linkName: "automatisierung-verstehen",
  name: "Automatisierung verstehen",
  description:
    "Was heißt es eigentlich, einen Prozess zu automatisieren? Grundlagen und Begriffe",
  content: [
    <ChapterHeader text={"Automatisierung verstehen"} number={2} />,
    <section>
      <p>
        Bevor konkrete Prozesse in Ihrer Organisation automatisiert oder durch
        KI unterstützt werden, ist es wichtig, zunächst ein gemeinsames
        Grundverständnis davon zu entwickeln,{" "}
        <b>was Automatisierung ist - und was nicht</b>. In der Praxis werden die
        Begriffe{" "}
        <b>Digitalisierung, Automatisierung und Künstliche Intelligenz (KI)</b>{" "}
        häufig vermischt oder synonym verwendet. Für fundierte Entscheidungen
        ist jedoch eine saubere Abgrenzung notwendig.
      </p>
      <Accordion sections={sectionsAutomatisierungVerstehen} />
      <SubNavigation sections={sectionsAutomatisierungVerstehen} />
    </section>,
    <section>
      <h2>
        Unterschied zwischen Digitalisierung, Automatisierung und KI-Einsatz
      </h2>
      <h3>Digitalisierung</h3>
      <p>
        Unter dem Begriff der Digitalisierung werden verschiedene Phänomene
        zusammengefasst, die im Zusammenhang mit Computern, Datennetzen und
        digitaler Infrastruktur stehen. Im Kern geht es dabei um die Umwandlung
        analoger Informationen in digitale Formate. Gleichzeitig umfasst
        Digitalisierung heute sehr viel mehr als nur das
        &bdquo;Einscannen&ldquo; von Dokumenten oder die Nutzung digitaler
        Medien. Sie betrifft auch:
      </p>
      <ul>
        <li>die Produktion und Verteilung immaterieller Güter</li>
        <li>die Verarbeitung großer Datenmengen</li>
        <li>den Einsatz von Algorithmen</li>
        <li>
          den Aufbau einer digitalen Infrastruktur (Hardware, Software,
          Netzwerke, Daten, Standards)
        </li>
      </ul>
      <p>
        Digitale Technologien wirken dabei längst nicht mehr nur auf
        Kommunikation und Medien, sondern beeinflussen auch gesellschaftliche,
        politische und kulturelle Prozesse, und das bereits seit der Nutzung
        elektronischer Datenverarbeitung in Verwaltungen seit den 1960er- und
        1970er-Jahren. Kurz gesagt:
      </p>
      <p className="specialText">
        Digitalisierung schafft die technischen und strukturellen Grundlagen,
        auf denen Automatisierung und KI überhaupt erst möglich werden.
      </p>
      <h3>Automatisierung</h3>
      <p>
        Automatisierung bezeichnet die Einrichtung und Durchführung von Arbeits-
        und Produktionsprozessen, so dass der Mensch nicht mehr unmittelbar in
        jeden einzelnen Schritt eingreifen muss. Prozesse (einschließlich
        Steuerung, Regelung und teilweise auch Kontrolle) laufen selbstständig
        ab.
      </p>
      <p>
        Dabei kann sich Automatisierung auf unterschiedliche Ebenen beziehen:
      </p>
      <List
        items={[
          "<b>Verfahrensautomatisierung:</b> Einzelne Arbeitsschritte oder Teiltätigkeiten werden automatisiert (z. B. das automatische Versenden von E-Mails nach einer Anmeldung).",
          "<b>Prozessautomatisierung:</b> Ein kompletter Prozess wird automatisiert (z. B. Terminvergabe oder Datenübertragung zwischen Systemen).",
          "<b>Vollautomatisierung:</b> Ein gesamter Ablauf entfällt für den Menschen fast vollständig (z. B. automatische Entscheidungen ohne menschliches Eingreifen).",
        ]}
        alignItems="center"
        size="medium"
      />
      <p className="specialText">
        Wichtig ist:{" "}
        <b>Automatisierung bedeutet nicht zwangsläufig den Einsatz von KI.</b>{" "}
        <br /> Viele Prozesse lassen sich auch mit einfachen, regelbasierten
        Systemen automatisieren.
      </p>
      <h3>KI-Einsatz</h3>
      <p>
        Künstliche Intelligenz kann als eine besondere, datenbasierte Form von
        Automatisierung verstanden werden. Sie basiert wie in Modul 4 gezeigt
        unter anderem auf:
      </p>
      <ul>
        <li>
          <LinkHandler to={"/ki-technologien-verstehen/verarbeitung-technik"}>
            Machine Learning
          </LinkHandler>
        </li>
        <li>Neuronalen Netzen</li>
        <li>
          <LinkHandler to={"/ki-technologien-verstehen/llm"}>
            Large Language Models (LLMs)
          </LinkHandler>
        </li>
      </ul>
      <p>
        Vorhersagen zu treffen oder Inhalte zu generieren. Viele Aufgaben, die
        Künstliche Intelligenz ermöglicht es Systemen, Muster zu erkennen,
        früher ausschließlich von Menschen ausgeführt wurden, können heute
        teilweise oder vollständig von KI-Systemen übernommen werden.
      </p>
      <p className="specialText">
        Dabei ist entscheidend:{" "}
        <b>
          KI ist eine mögliche Form der Automatisierung, aber nicht immer die
          beste, einfachste oder sinnvollste Lösung.
        </b>
      </p>
      <p>
        In vielen Fällen ist ein klassisches, regelbasiertes System
        transparenter, günstiger und besser kontrollierbar als ein KI-System.
      </p>
    </section>,
    <section>
      <h2>
        Warum Automatisierung im gemeinwohlorientierten Bereich besonders
        sensibel ist
      </h2>
      <p>
        Gerade in gemeinwohlorientierten Organisationen ist der Umgang mit
        Automatisierung und KI von besonderer Bedeutung. Zwar gibt es hier
        ähnliche Hürden wie in anderen Organisationen - etwa Datenschutz,
        Kosten, technische Infrastruktur oder fehlendes Know-how - doch kommen
        zusätzliche, verstärkende Faktoren hinzu:
      </p>
      <TabSwitchView>
        <div title="Ressourcen">
          <p>
            Gemeinwohlorientierte Organisationen verfügen häufig über{" "}
            <b>begrenzte finanzielle und personelle Ressourcen</b>.
            Automatisierung kann hier ein großes Potenzial bieten:
          </p>
          <ul>
            <li>Zeitersparnis für Mitarbeitende</li>
            <li>Entlastung von Routineaufgaben</li>
            <li>bessere Skalierbarkeit von Angeboten</li>
          </ul>
          <p>Gleichzeitig bedeutet dies auch:</p>
          <ul>
            <li>Fehlentscheidungen sind schwerer zu korrigieren</li>
            <li>investierte Mittel lassen sich oft nicht so leicht ersetzen</li>
            <li>
              falsche Automatisierung kann langfristig mehr Schaden als Nutzen
              bringen
            </li>
          </ul>
          <p>
            Daraus entsteht ein Spannungsfeld: Der Druck, neue Technologien
            nicht zu verpassen, trifft auf die Notwendigkeit, besonders
            sorgfältig und effizient vorzugehen.
          </p>
        </div>
        <div title="Vertrauen">
          <p>
            Vertrauen ist für jede Organisation zentral - für
            gemeinwohlorientierte Organisationen jedoch existentiell:
          </p>
          <ul>
            <li>Sie arbeiten häufig mit vulnerablen Gruppen</li>
            <li>Sie sind für viele Menschen eine der wenigen Anlaufstellen</li>
            <li>
              Sie sind auf die Unterstützung von Ehrenamtlichen angewiesen
            </li>
          </ul>
          <p>
            Ein schlecht umgesetztes automatisiertes System - beispielsweise ein
            unpersönlicher oder fehleranfälliger Chatbot - kann dazu führen,
            dass sich Menschen:
          </p>
          <ul>
            <li>nicht ernst genommen fühlen</li>
            <li>sich zurückziehen</li>
            <li>das Vertrauen in die Organisation verlieren</li>
          </ul>
          <p>
            Gleichzeitig kann auch intern Vertrauen zerstört werden, wenn
            Ehrenamtliche und Mitarbeitende das Gefühl haben, ihre Arbeit werde
            durch Technik entwertet oder unzureichend unterstützt. Ein Verlust
            von Vertrauen bedroht die grundlegenden Strukturen
            gemeinwohlorientierter Arbeit.
          </p>
        </div>
      </TabSwitchView>
      <div className="pt-3 mb-[var(--scale4)] only-print no-break">
        <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)]">
          <h4>Ressourcen</h4>
          <p>
            Gemeinwohlorientierte Organisationen verfügen häufig über{" "}
            <b>begrenzte finanzielle und personelle Ressourcen</b>.
            Automatisierung kann hier ein großes Potenzial bieten:
          </p>
          <ul>
            <li>Zeitersparnis für Mitarbeitende</li>
            <li>Entlastung von Routineaufgaben</li>
            <li>bessere Skalierbarkeit von Angeboten</li>
          </ul>
          <p>Gleichzeitig bedeutet dies auch:</p>
          <ul>
            <li>Fehlentscheidungen sind schwerer zu korrigieren</li>
            <li>investierte Mittel lassen sich oft nicht so leicht ersetzen</li>
            <li>
              falsche Automatisierung kann langfristig mehr Schaden als Nutzen
              bringen
            </li>
          </ul>
          <p>
            Daraus entsteht ein Spannungsfeld: Der Druck, neue Technologien
            nicht zu verpassen, trifft auf die Notwendigkeit, besonders
            sorgfältig und effizient vorzugehen.
          </p>
        </div>
      </div>
      <div className="pt-3 mb-[var(--scale4)] only-print no-break">
        <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)]">
          <h4>Vertrauen</h4>
          <p>
            Vertrauen ist für jede Organisation zentral - für
            gemeinwohlorientierte Organisationen jedoch existentiell:
          </p>
          <ul>
            <li>Sie arbeiten häufig mit vulnerablen Gruppen</li>
            <li>Sie sind für viele Menschen eine der wenigen Anlaufstellen</li>
            <li>
              Sie sind auf die Unterstützung von Ehrenamtlichen angewiesen
            </li>
          </ul>
          <p>
            Ein schlecht umgesetztes automatisiertes System - beispielsweise ein
            unpersönlicher oder fehleranfälliger Chatbot - kann dazu führen,
            dass sich Menschen:
          </p>
          <ul>
            <li>nicht ernst genommen fühlen</li>
            <li>sich zurückziehen</li>
            <li>das Vertrauen in die Organisation verlieren</li>
          </ul>
          <p>
            Gleichzeitig kann auch intern Vertrauen zerstört werden, wenn
            Ehrenamtliche und Mitarbeitende das Gefühl haben, ihre Arbeit werde
            durch Technik entwertet oder unzureichend unterstützt. Ein Verlust
            von Vertrauen bedroht die grundlegenden Strukturen
            gemeinwohlorientierter Arbeit.
          </p>
        </div>
      </div>
    </section>,
    <section>
      <h2>Beispiel: Gelungene vs. nicht gelungene Automatisierung</h2>
      <TabSwitchView>
        <div title="Positives Beispiel (teilautomatisiert, unterstützend)">
          <p>
            Eine Organisation möchte das Matching von Freiwilligen mit passenden
            Einsatzstellen verbessern. Eine Software erstellt auf Basis von
            Interessen, zeitlichen Verfügbarkeiten und Standort Vorschläge. Die
            finale Entscheidung wird jedoch weiterhin von Mitarbeitenden
            getroffen. Daraus ergeben sich folgende Vorteile:
          </p>
          <ul>
            <li>Zeitersparnis im Auswahlprozess</li>
            <li>menschliche Kontrolle bleibt erhalten</li>
            <li>Freiwillige fühlen sich weiterhin individuell wahrgenommen</li>
          </ul>
          <p>
            <b>&rarr; Effizient, unterstützend, vertrauensfördernd</b>
          </p>
        </div>
        <div title="Negatives Beispiel (vollautomatisiert, entkoppelt)">
          <p>
            Eine Beratungsstelle für Menschen mit psychischen Erkrankungen
            ersetzt den Erstkontakt vollständig durch einen Chatbot. Die
            Implementierung ist komplex und teuer. Betroffene fühlen sich nicht
            ernst genommen, da sie keinen menschlichen Kontakt mehr haben.
            Gleichzeitig fällt für Mitarbeitende eine wichtige
            Informationsquelle weg: die direkte Interaktion mit Ratsuchenden.
            Das erzeugt folgende Probleme:
          </p>
          <ul>
            <li>Hoher Ressourcenaufwand</li>
            <li>Vertrauensverlust bei Betroffenen</li>
            <li>Verlust wertvoller sozialer Signale</li>
          </ul>
          <p>
            <b>
              &rarr; Ineffizient, belastet Vertrauen, geht an Mitarbeitenden
              vorbei
            </b>
          </p>
        </div>
      </TabSwitchView>
      <div className="pt-3 mb-[var(--scale4)] only-print no-break">
        <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)]">
          <h4>Positives Beispiel (teilautomatisiert, unterstützend)</h4>
          <p>
            Eine Organisation möchte das Matching von Freiwilligen mit passenden
            Einsatzstellen verbessern. Eine Software erstellt auf Basis von
            Interessen, zeitlichen Verfügbarkeiten und Standort Vorschläge. Die
            finale Entscheidung wird jedoch weiterhin von Mitarbeitenden
            getroffen. Daraus ergeben sich folgende Vorteile:
          </p>
          <ul>
            <li>Zeitersparnis im Auswahlprozess</li>
            <li>menschliche Kontrolle bleibt erhalten</li>
            <li>Freiwillige fühlen sich weiterhin individuell wahrgenommen</li>
          </ul>
          <p>
            <b>&rarr; Effizient, unterstützend, vertrauensfördernd</b>
          </p>
        </div>
      </div>
      <div className="pt-3 mb-[var(--scale4)] only-print no-break">
        <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)]">
          <h4>Negatives Beispiel (vollautomatisiert, entkoppelt)</h4>
          <p>
            Eine Beratungsstelle für Menschen mit psychischen Erkrankungen
            ersetzt den Erstkontakt vollständig durch einen Chatbot. Die
            Implementierung ist komplex und teuer. Betroffene fühlen sich nicht
            ernst genommen, da sie keinen menschlichen Kontakt mehr haben.
            Gleichzeitig fällt für Mitarbeitende eine wichtige
            Informationsquelle weg: die direkte Interaktion mit Ratsuchenden.
            Das erzeugt folgende Probleme:
          </p>
          <ul>
            <li>Hoher Ressourcenaufwand</li>
            <li>Vertrauensverlust bei Betroffenen</li>
            <li>Verlust wertvoller sozialer Signale</li>
          </ul>
          <p>
            <b>
              &rarr; Ineffizient, belastet Vertrauen, geht an Mitarbeitenden
              vorbei
            </b>
          </p>
        </div>
      </div>
    </section>,
    <section>
      <h2>Reflexionsfragen für Ihre Organisation</h2>
      <p>
        Bevor Sie über Automatisierung oder KI nachdenken, stellen Sie sich
        bitte folgende Fragen:
      </p>
      <ul>
        <li>Welche Probleme möchten wir eigentlich lösen?</li>
        <li>Geht es um Zeit, Geld, Qualität oder Entlastung von Menschen?</li>
        <li>
          Was würde verloren gehen, wenn dieser Prozess automatisiert wird?
        </li>
        <li>
          Wer könnte sich ausgeschlossen oder nicht ernst genommen fühlen?
        </li>
        <li>Welche Rolle spielt Vertrauen in diesem Prozess?</li>
      </ul>
      <p>
        Diese Fragen bilden die Grundlage für das nächste Kapitel, in dem wir
        genauer betrachten,{" "}
        <b>
          ob und in welchem Umfang ein Prozess überhaupt für Automatisierung
          geeignet ist.
        </b>
      </p>
    </section>,
  ],
};

const sectionsAutomationSchaetzen = [
  {
    id: "2",
    title: "Grundlegende Fragen",
  },
  {
    id: "3",
    title: "Wie stark sollte ein Task automatisiert werden?",
  },
  {
    id: "4",
    title:
      "Vier Bereiche der Automatisierung entlang der menschlichen Informationsverarbeitung",
  },
  { id: "5", title: "Vier Relevante Aspekte" },
];

const LevelOfAutomationTable = [
  [<b>Automatisierung</b>, "", <b>Die Maschine (der Computer)...</b>],
  [
    <>Hoch</>,
    <>10</>,
    <>entscheidet alles, handelt autonom, ignoriert den Menschen</>,
  ],
  [
    <></>,
    <>9</>,
    <>informiert den Menschen nur dann, wenn sie es für richtig hält</>,
  ],
  [<></>, <>8</>, <>informiert den Menschen nur dann, wenn er fragt</>],
  [<></>, <>7</>, <>handelt automatisch, informiert den Menschen danach</>],
  [
    <></>,
    <>6</>,
    <>
      gibt dem Menschen eingeschränkt Zeit, einen automatischen Prozess zu
      stoppen
    </>,
  ],
  [
    <></>,
    <>5</>,
    <>führt eine vorgeschlagene Handlung aus, wenn der Mensch zustimmt</>,
  ],
  [<></>, <>4</>, <>schlägt eine Handlung vor</>],
  [
    <></>,
    <>3</>,
    <>
      stellt ein vorselektiertes Set an Entscheidungs-/Handlungsalternativen
      bereit{" "}
    </>,
  ],
  [
    <></>,
    <>2</>,
    <>
      stellt ein vollständiges Set an Entscheidungs-/Handlungsalternativen
      bereit
    </>,
  ],
  [
    <>Gering</>,
    <>1</>,
    <>hilft nicht - der Mensch muss alles selbst entscheiden und ausführen</>,
  ],
];

const EignungSchaetzen = {
  linkName: "eignung-der-automatisierung-einschaetzen",
  name: "Eignung der Automatisierung einschätzen",
  description:
    "Wie erkenne ich, ob ein Prozess automatisiert werden kann? Und wie weiß ich ob dieser Automatisiert werden sollte? ",
  content: [
    <ChapterHeader
      text={"Eignung der Automatisierung einschätzen"}
      number={3}
    />,
    <section>
      <Accordion sections={sectionsAutomationSchaetzen} />
      <SubNavigation sections={sectionsAutomationSchaetzen} />
    </section>,
    <section className="break">
      <p>
        Nachdem wir gesehen haben, was gute und weniger geeignete
        Anwendungsräume für Automatisierung und KI sind, stellt sich die
        zentrale Frage:
      </p>
      <p className="specialText">
        Woran können Sie festmachen, ob ein Prozess in Ihrer Organisation für
        Automatisierung geeignet ist - und ob er überhaupt automatisiert werden
        sollte?
      </p>
      <p>
        Gerade in einer gemeinwohlorientierten Organisation ist diese
        Entscheidung besonders sensibel. Es geht nicht nur um Effizienz, sondern
        auch um Vertrauen, Verantwortung und die Qualität menschlicher
        Beziehungen.
      </p>
      <p>
        Eine realistische Einschätzung der Einsatzmöglichkeiten von KI knüpft
        direkt an die in Modul 4 vorgestellten Grundlagen zu menschzentrierter
        Systemgestaltung an.
      </p>
      <p>
        Zur ersten Orientierung können Sie sich an folgenden Leitfragen
        orientieren:
      </p>
      <ul>
        <li>
          <b>
            Ist der Prozess regelmäßig und wiederkehrend oder nur gelegentlich
            relevant?
          </b>
        </li>
        <li>
          <b>Gibt es klare Eingaben und erwartbare Ausgaben?</b>
        </li>
        <li>
          <b>
            Ist der Prozess stark datenbasiert oder stark von menschlicher
            Interpretation, Erfahrung und Empathie geprägt?
          </b>
        </li>
        <li>
          <b>
            Wie hoch sind die Risiken bei Fehlentscheidungen, und wen würden
            diese betreffen?
          </b>
        </li>
        <li>
          <b>
            Welche Teile des Prozesses erfordern zwingend menschliches
            Urteilsvermögen?
          </b>
        </li>
      </ul>
      <p>
        Je klarer ein Prozess strukturiert, wiederholbar und regelbasiert ist,
        desto eher eignet er sich für eine Form der Automatisierung. Je stärker
        dagegen Intuition, Beziehungsarbeit oder situatives Fingerspitzengefühl
        eine Rolle spielen, desto vorsichtiger sollte eine Automatisierung
        geprüft werden.
      </p>
    </section>,
    <section>
      <h2>Wie stark sollte ein Task automatisiert werden?</h2>
      <p>
        Selbst wenn ein Prozess grundsätzlich für Automatisierung geeignet
        erscheint, bleibt eine zentrale Frage offen:{" "}
        <b>Wie stark sollte er automatisiert werden?</b>
      </p>
      <p>
        Hierfür bietet das Konzept der <b>Levels of Automation (LoA)</b> von
        Parasuraman et al. eine theoretische Grundlage. Es beschreibt, wie sich
        unterschiedlich stark automatisierte Systeme auf die Rolle, Wahrnehmung
        und Leistungsfähigkeit von Menschen auswirken.
      </p>
      <div className="print:pt-3">
        <Table
          data={LevelOfAutomationTable}
          headerStyle
          columnWidths={["3fr", "1fr", "10fr"]}
        />
      </div>
      <p className="page-break">
        Ein klassisches Beispiel ist der Unterschied zwischen:
      </p>
      <ul>
        <li>
          einem Assistenzsystem, das lediglich warnt (z. B. beim Verlassen der
          Fahrspur), und
        </li>
        <li>
          einem System, das selbst aktiv in die Lenkung eines Fahrzeugs
          eingreift.
        </li>
      </ul>
      <p>
        In der Forschung werden häufig{" "}
        <b>
          zehn Abstufungen von sehr geringer bis zu vollständiger
          Automatisierung
        </b>{" "}
        unterschieden. Diese Abstufungen lassen sich auf vier Hauptbereiche
        menschlicher Informationsverarbeitung übertragen.
      </p>
    </section>,
    <section>
      <h2>
        Vier Bereiche der Automatisierung entlang der menschlichen
        Informationsverarbeitung
      </h2>
      <div className="no-print">
        <CarouselContainer sideVisibility={10} autoPlay={false}>
          <div
            title="Information Acquisition - Informationsbeschaffung"
            className="rounded-xl p-[var(--scale2)] h-full bg-[var(--box)] shadow no-hover">
            <h4>Information Acquisition - Informationsbeschaffung</h4>
            <p>
              Diese Ebene bezieht sich auf das{" "}
              <b>Sammeln und Registrieren von Eingangsdaten</b>. Automatisierung
              in diesem Bereich unterstützt menschliche sensorische Prozesse,
              indem Daten schneller, vollständiger oder kontinuierlicher erfasst
              werden.
            </p>
            <p>
              Beispiel im Organisationskontext: Ein System sammelt automatisch
              Anmeldungen, Standortdaten oder Verfügbarkeiten von Freiwilligen,
              anstatt dass diese manuell zusammengetragen werden.
            </p>
          </div>
          <div
            title="Information Analysis - Informationsanalyse"
            className="rounded-xl p-[var(--scale2)] h-full bg-[var(--box)] shadow no-hover">
            <h4>Information Analysis - Informationsanalyse</h4>
            <p>
              Hier geht es um <b>kognitive Funktionen</b> wie Vergleichen,
              Strukturieren, Extrapolieren oder Vorhersagen. Systeme können
              Muster erkennen, Zusammenhänge herstellen oder Daten
              vorverarbeiten.
            </p>
            <p>
              Beispiel: Ein System analysiert eingehende Daten und schlägt auf
              dieser Basis mögliche Einsatzstellen für Freiwillige vor.
            </p>
          </div>
          <div
            title="Decision & Action Selection - Entscheidungs- und Handlungsauswahl"
            className="rounded-xl p-[var(--scale2)] h-full bg-[var(--box)] shadow no-hover">
            <h4>
              Decision & Action Selection - Entscheidungs- und Handlungsauswahl
            </h4>
            <p>
              In dieser Phase werden{" "}
              <b>Handlungsoptionen abgewogen und ausgewählt</b>. Eine
              Automatisierung bedeutet hier, dass das System bereits
              Entscheidungen trifft oder stark vorgibt - mit oder ohne
              menschliche Bestätigung.
            </p>
            <p>
              Beispiel: Das System entscheidet selbstständig, welcher
              Freiwillige welcher Einsatzstelle zugewiesen wird, anstatt nur
              Vorschläge zu liefern.
            </p>
          </div>
          <div
            title="Action Implementation - Handlungsausführung"
            className="rounded-xl p-[var(--scale2)] h-full bg-[var(--box)] shadow no-hover">
            <h4>Action Implementation - Handlungsausführung</h4>
            <p>
              Diese letzte Phase betrifft die{" "}
              <b>eigentliche Umsetzung der Entscheidung</b>. Automatisierung
              ersetzt hier in der Regel direkt die physische oder kommunikative
              Handlung eines Menschen.
            </p>
            <p>
              Beispiel: Ein System versendet automatisch Zusagen, Termine und
              Zugangsdaten an Freiwillige und Einsatzstellen.
            </p>
          </div>
        </CarouselContainer>
      </div>
      <div className="mb-[var(--scale4)] only-print no-break">
        <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)]">
          <h4>Information Acquisition - Informationsbeschaffung</h4>
          <p>
            Diese Ebene bezieht sich auf das{" "}
            <b>Sammeln und Registrieren von Eingangsdaten</b>. Automatisierung
            in diesem Bereich unterstützt menschliche sensorische Prozesse,
            indem Daten schneller, vollständiger oder kontinuierlicher erfasst
            werden.
          </p>
          <p>
            Beispiel im Organisationskontext: Ein System sammelt automatisch
            Anmeldungen, Standortdaten oder Verfügbarkeiten von Freiwilligen,
            anstatt dass diese manuell zusammengetragen werden.
          </p>
        </div>
      </div>
      <div className="mb-[var(--scale4)] only-print no-break">
        <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)]">
          <h4>Information Analysis - Informationsanalyse</h4>
          <p>
            Hier geht es um <b>kognitive Funktionen</b> wie Vergleichen,
            Strukturieren, Extrapolieren oder Vorhersagen. Systeme können Muster
            erkennen, Zusammenhänge herstellen oder Daten vorverarbeiten.
          </p>
          <p>
            Beispiel: Ein System analysiert eingehende Daten und schlägt auf
            dieser Basis mögliche Einsatzstellen für Freiwillige vor.
          </p>
        </div>
      </div>
      <div className="pt-3 mb-[var(--scale4)] only-print no-break">
        <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)]">
          <h4>
            Decision & Action Selection - Entscheidungs- und Handlungsauswahl
          </h4>
          <p>
            In dieser Phase werden{" "}
            <b>Handlungsoptionen abgewogen und ausgewählt</b>. Eine
            Automatisierung bedeutet hier, dass das System bereits
            Entscheidungen trifft oder stark vorgibt - mit oder ohne menschliche
            Bestätigung.
          </p>
          <p>
            Beispiel: Das System entscheidet selbstständig, welcher Freiwillige
            welcher Einsatzstelle zugewiesen wird, anstatt nur Vorschläge zu
            liefern.
          </p>
        </div>
      </div>
      <div className="mb-[var(--scale4)] only-print no-break">
        <div className="rounded-xl p-[var(--scale2)] bg-[var(--box)] shadow flex flex-col gap-[var(--scale2)]">
          <h4>Action Implementation - Handlungsausführung</h4>
          <p>
            Diese letzte Phase betrifft die{" "}
            <b>eigentliche Umsetzung der Entscheidung</b>. Automatisierung
            ersetzt hier in der Regel direkt die physische oder kommunikative
            Handlung eines Menschen.
          </p>
          <p>
            Beispiel: Ein System versendet automatisch Zusagen, Termine und
            Zugangsdaten an Freiwillige und Einsatzstellen.
          </p>
        </div>
      </div>
      <p className="specialText">
        <b>
          Wichtig ist: Ein System hat nicht ein einziges Automatisierungslevel,
          sondern kann in den einzelnen Phasen unterschiedlich stark
          automatisiert sein.
        </b>
      </p>
      <p className="page-break">
        So kann beispielsweise die Datenerfassung vollständig automatisiert
        sein, während die Entscheidung bewusst beim Menschen verbleibt. Moderne
        Systeme können zudem so gestaltet werden, dass sie ihre
        Automatisierungsstufe situativ anpassen.
        <ThemeImage
          darkSrc={autoStufen_dark}
          lightSrc={autoStufen_light}
          alt="Bild Stufen der Automatisierung"
          className="pt-5"
        />
      </p>
      <p>Für die Systemgestaltung bedeutet das:</p>
      <ul>
        <li>
          Für <b>jeden Teilschritt</b> eines Prozesses sollte die{" "}
          <b>passende Automatisierungsstufe</b> identifiziert werden.
        </li>
        <li>
          Anschließend sollte reflektiert werden:{" "}
          <b>
            Welche Auswirkungen hat diese Entscheidung auf die beteiligten
            Menschen?
          </b>
        </li>
      </ul>
    </section>,
    <section>
      <h2>Dabei sind insbesondere vier Aspekte relevant</h2>{" "}
      {/* Abschnittsbezeichnung anpassen */}
      <h3>1. Mental Workload (mentale Arbeitsbelastung)</h3>
      <p>
        Höhere Automatisierungsstufen können die Belastung von Nutzer:innen
        reduzieren, etwa indem große Datenmengen automatisch ausgewertet und
        visualisiert werden. Aufgaben müssen dann nicht mehr manuell erledigt
        werden.
      </p>
      <p>
        Gleichzeitig gilt: Eine höhere Automatisierung senkt die mentale
        Belastung nicht automatisch. Sie kann diese je nach Gestaltung des
        Systems sogar erhöhen - etwa dann, wenn Informationen unübersichtlich
        präsentiert werden oder Entscheidungen nicht mehr nachvollziehbar sind.
      </p>
      <h3>2. Situation Awareness (Situationsbewusstsein)</h3>
      <p>
        Das Situationsbewusstsein beschreibt, wie gut Menschen Veränderungen und
        Zustände eines Systems wahrnehmen und verstehen.
      </p>
      <p>
        In hochautomatisierten Systemen sinkt dieses Bewusstsein häufig, weil
        Menschen nur noch eine <b>überwachende Rolle</b> einnehmen.
        Veränderungen werden schlechter erkannt, insbesondere wenn sich ein
        System „unauffällig“ verhält.
      </p>
      <p>
        Für sicherheitskritische oder sensible Bereiche - wie sie in
        gemeinwohlorientierten Organisationen häufig vorkommen - ist dieses
        Risiko besonders relevant.
      </p>
      <h3>3. Complacency (Übervertrauen)</h3>
      <p>
        Wenn ein System in der Regel zuverlässig arbeitet, neigen Menschen dazu,
        es nicht mehr kritisch zu hinterfragen. Fehler oder Ausnahmen werden
        dann häufig übersehen.
      </p>
      <p>
        Es entsteht ein <b>Übervertrauen in die Technik</b>, das nicht im
        Verhältnis zu ihren tatsächlichen Fähigkeiten steht. Gerade bei
        KI-Systemen, deren Entscheidungsgrundlagen oft schwer nachvollziehbar
        sind, kann dies zu problematischen Abhängigkeiten führen.
      </p>
      <h3>4. Skill Degradation (Abbau menschlicher Fähigkeiten)</h3>
      <p>
        Werden Aufgaben über längere Zeit von einem System übernommen, verlieren
        Menschen nach und nach die Fähigkeit, diese selbstständig auszuführen.
        Das wird besonders problematisch, wenn sie im Notfall plötzlich wieder
        eingreifen oder einspringen müssen.
      </p>
      <p>
        In Organisationen, die stark auf Wissen, Erfahrung und
        Beziehungskompetenz angewiesen sind, kann dies zu einem langfristigen
        Kompetenzverlust führen.
      </p>
    </section>,
  ],
};

const sectionsPATS = [
  {
    id: "2",
    title: "Grundlegende Eigenschaften",
  },
  {
    id: "3",
    title: "Wo kann der Einsatz der PATS helfen?",
  },
];

const PATS = {
  linkName: "preferred-automation-tasks-scale",
  name: "Preferred Automation Tasks Scale (PATS)",
  description:
    "Ein Fragebogen zur Einschätzung der Automatisierungspräferenzen verschiedener Stakeholder.",
  content: [
    <ChapterHeader
      text={"Preferred Automation Tasks Scale (PATS)"}
      number={4}
    />,
    <section>
      <Accordion sections={sectionsPATS} />
      <SubNavigation sections={sectionsPATS} />
    </section>,
    <section className="break">
      <p>
        Neben technischen und organisatorischen Überlegungen ist es entscheidend
        zu verstehen,{" "}
        <b>was die Menschen in Ihrer Organisation überhaupt möchten.</b>
      </p>
      <p>
        Die <b>PATS-Skala (Preferred Automation Task Scale)</b> wurde
        entwickelt, um zu messen, welche Aufgaben Menschen lieber von einem
        automatisierten System und welche sie lieber von anderen Menschen
        durchführen lassen möchten. Ein solches Tool gibt die Möglichkeit
        innerhalb einer Organisation zu überprüfen wie die verschiedenen
        Stakeholder eine Automatisierung des Prozesses bewerten würden. Sie
        basiert auf den vier zentralen Funktionen von Automatisierung nach
        Parasuraman et al.:
      </p>
      <List
        items={[
          "<b>Daten sammeln</b> - Informationen erfassen, filtern und organisieren",
          "<b>Daten analysieren</b> - Muster erkennen und Schlussfolgerungen ziehen",
          "<b>Entscheidungen treffen</b> - Optionen abwägen und auswählen",
          "<b>Handlungen umsetzen</b> - Entscheidungen praktisch durchführen",
        ]}
        alignItems="center"
        size="small"
      />
      <p>
        Die Skala besteht aus <b>zwölf Fragen</b>, die auf einer{" "}
        <b>sechsstufigen Bewertungsskala</b> beantwortet werden:
      </p>
      <ul>
        <li>von &bdquo;bevorzuge vollständig menschliche Ausführung&ldquo;</li>
        <li>
          bis &bdquo;bevorzuge vollständig automatisierte Ausführung&ldquo;
        </li>
      </ul>
      <ThemeImage
        darkSrc={pats}
        lightSrc={pats}
        alt="Bild PATS Skala"
        className="pb-10"
      />
      <p className="page-break">
        Die Ergebnisse können in verschiedenen Szenarien verglichen werden (z.
        B. &bdquo;normaler Betrieb&ldquo; vs. &bdquo;akuter
        Personalmangel&ldquo;), um für die beteiligten Personen durchzuspielen,
        wie sich unterschiedliche Bedingungen auf ihre Antworten auswirken.
        Diese szenarienbasierte Strategie findet häufig in sicherheitskritischen
        Bereichen wie Medizin oder Luftfahrt Anwendung, ist aber auch für
        gemeinwohlorientierte Organisationen sehr wertvoll.
      </p>
    </section>,
    <section>
      <h2>Wo kann der Einsatz der PATS helfen?</h2>
      <p>Der Einsatz von PATS kann dabei helfen:</p>
      <ul>
        <li>Systeme bedürfnisorientiert zu gestalten</li>
        <li>Transparenz und Beteiligung zu fördern</li>
        <li>frühzeit Konflikte oder Bedenken sichtbar zu machen</li>
        <li>Potentiale für Automatisierung zu priorisieren</li>
      </ul>
      <p>
        <b>
          Wenn Sie die PATS selbst einsetzen möchten, um eine Umfrage in Ihrer
          Organisation durchzuführen, finden Sie hier eine fertige Druckversion:
        </b>
      </p>
      <p>
        <a
          href="https://docs.google.com/document/d/1OkDNL_koNPEh9zKiuIzbg_g2wcfP3Y7Sc7XnbrdV6vU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          PATS - Deutsche Druckversion
        </a>
      </p>
    </section>,
  ],
};

const sectionsKiSinnvoll = [
  {
    id: "2",
    title: "Grundlegende Frage",
  },
  {
    id: "3",
    title: "Checkliste: Eignung von KI-Technologien",
  },
  {
    id: "4",
    title: "Fazit",
  },
];

const KISinnvoll = {
  linkName: "wann-ist-ki-sinnvoll",
  name: "Wann ist KI Sinnvoll?",
  description:
    "Auch wenn die Verwendung von KI verlockend klingt, muss man sich doch die Frage stellen, ob ein Einsatz dieser Sinnvoll ist.",
  content: [
    <ChapterHeader
      text="Entscheidung über den Einsatz von KI: Wann ist KI sinnvoll?"
      number={5}
    />,
    <section>
      <Accordion sections={sectionsKiSinnvoll} />
      <SubNavigation sections={sectionsKiSinnvoll} />
    </section>,
    <section>
      <p>
        Nachdem ein Potenzial für Automatisierung identifiziert wurde, stellt
        sich eine weiterführende, kritischere Frage:{" "}
        <b>
          Ist für diese Aufgabe wirklich Künstliche Intelligenz notwendig oder
          reicht eine klassische, regelbasierte Automatisierung aus?
        </b>
      </p>
      <p>Dabei gilt die Unterscheidung:</p>
      <ul>
        <li>
          <b>Automatisierung</b>: Klare, vordefinierte Regeln und Abläufe („Wenn
          X, dann Y“)
        </li>
        <li>
          <b>KI</b>: Lernen aus Daten, Erkennung von Mustern und Zusammenhängen,
          Umgang mit Unsicherheit und Variabilität, aber eben auch höhere
          rechtliche Anforderungen, geringere Transparenz und höhere Kosten.
        </li>
      </ul>
      <p>
        Um diese Frage fundiert zu beantworten, können Sie folgende Checkliste
        nutzen:
      </p>
    </section>,
    <section>
      <div className="print:pt-3">
        <div className="rounded-xl p-[var(--scale3)] mb-[var(--scale4)] h-full glassBox no-hover no-break">
          <h3>Checkliste: Eignung von KI-Technologien</h3>
          <List
            items={[
              "Gibt es ausreichend digitale Daten? Sind in Menge und Qualität genügend Daten vorhanden, aus denen ein System lernen kann?",
              "Steht Mustererkennung im Fokus (statt starrer Regeln)? Geht es darum, Zusammenhänge, Tendenzen oder Abweichungen zu identifizieren, anstatt feste Entscheidungsbäume abzuarbeiten?",
              "Kann das Ergebnis überprüft oder erklärt werden? Ist Nachvollziehbarkeit möglich (z. B. durch Vergleich, Plausibilitätsprüfung, menschliche Kontrolle)?",
              "Sind Datenschutz und Bias handhabbar? Können Risiken im Umgang mit personenbezogenen Daten und Verzerrungen (Bias) realistisch kontrolliert werden?",
              "Ist das System langfristig wartbar und verantwortbar? Gibt es Ressourcen, Wissen und Zuständigkeiten für Pflege, Monitoring und Weiterentwicklung?",
              "Entspricht ein mögliches System den rechtlichen Rahmenbedingungen? (z. B. DSGVO, AI Act, organisationsinterne Richtlinien)",
            ]}
          />
        </div>
      </div>
      <p>
        Neben der technischen Machbarkeit ist die menschliche Perspektive
        entscheidend. Die folgenden Fragen helfen, den Nutzen und die Risiken
        aus Sicht der Nutzenden zu reflektieren:
      </p>
      <h4>1. Nützlichkeit</h4>
      <ul>
        <li>Welche konkreten Ergebnisse könnte ein KI-System erzeugen?</li>
        <li>
          Auf welche Weise könnte es diesen Prozess erleichtern, beschleunigen
          oder verbessern?
        </li>
        <li>Welches Problem würde ohne KI bestehen bleiben?</li>
      </ul>
      <h4>2. Rahmenbedingungen der Zusammenarbeit</h4>
      <ul>
        <li>
          Wie wird die Zusammenarbeit mit dem KI-System praktisch aussehen?
        </li>
        <li>
          Welche Aufgaben übernimmt das System - welche verbleiben beim
          Menschen?
        </li>
        <li>Auf welche Informationen haben Mensch und System Zugriff?</li>
        <li>Wo bestehen Informationsunterschiede oder -grenzen?</li>
      </ul>
      <h4>3. Zufriedenheit und Risiken</h4>
      <ul>
        <li>Wo könnten in der geplanten Kooperation Pain Points entstehen?</li>
        <li>Welche Risiken bestehen im Umgang mit dem System?</li>
        <li>Welche Risiken ergeben sich für die Zusammenarbeit im Team?</li>
        <li>
          Wo könnten Unsicherheiten, Misstrauen oder Überforderung entstehen?
        </li>
      </ul>
    </section>,
    <section>
      <h2>Fazit</h2>
      <p>
        Ob KI sinnvoll ist, hängt davon ab, ob genügend qualitativ gute Daten
        vorliegen, Mustererkennung statt fester Regeln erforderlich ist,
        Ergebnisse überprüfbar bleiben und Datenschutz, Bias sowie rechtliche
        Vorgaben handhabbar sind. Außerdem muss das System langfristig wartbar
        sein.
      </p>
      <p>
        Neben der Technik zählt die Perspektive der Nutzenden: Bringt KI einen
        klaren Nutzen, passt sie gut in die Arbeitsabläufe, und entstehen weder
        neue Risiken noch Belastungen für Menschen oder Teams?
      </p>
    </section>,
  ],
};

const IdentifikationProzesse = {
  linkName: "automatisierungspotenziale-erkennen",
  name: "Automatisierungspotenziale erkennen",
  moduleImage: ImageElement,
  content: [
    Einleitung,
    AutomatisierungVerstehen,
    EignungSchaetzen,
    PATS,
    KISinnvoll,
  ],
};

export default IdentifikationProzesse;
