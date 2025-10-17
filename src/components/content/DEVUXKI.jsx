import ImageElement from "../../assets/icons/ux-ki.svg?react";
import { ChapterHeader } from "../3_organism/ChapterHeader";
import { VideoContainer } from "../1_elements/VideoContainer";
import SubTopicCard from "../2_molecule/cards/SubTopicCard";
import List from "../2_molecule/List";

import autonimieQuizData from "../SimpleQuizContent/ki-bezogene-ux/autonomie.json";
import situationsQuizData from "../SimpleQuizContent/ki-bezogene-ux/situationsbewusstsein.json";
import mentaleQuizData from "../SimpleQuizContent/ki-bezogene-ux/mentale-belastung.json";
import vertrauenQuizData from "../SimpleQuizContent/ki-bezogene-ux/vertrauenswuerdigkeit.json";
import diagnostizitaetQuizData from "../SimpleQuizContent/ki-bezogene-ux/diagnostizitaet.json";

//TODO: place components globaly for every modul page?
import Accordion from "../2_molecule/Accordion";
import SubNavigation from "../2_molecule/nav/SubNavigation";
import BasicQuiz from "../interactive/Quiz/BasicQuiz";

const moduleLink = "ki-bezogene-ux";
const moduleName = "KI-bezogene UX";

// TODO: make intro as consistent component for every page?
const sections = [
  { id: "3", title: "Definition" },
  { id: "4", title: "Konzepte und Modelle" },
  { id: "5", title: "Studien zu UX und KI" },
  { id: "6", title: "Fragebögen und Messinstrumente" },
  { id: "7", title: "Design-Guidelines" },
  { id: "8", title: "Fazit" },
];

const WahrgenommeneAutonomie = {
  linkName: "wahrgenommene-autonomie",
  name: "Wahrgenommene Autonomie",
  description:
    "Dieser Aspekt beschreibt, wie sehr Nutzende das Gefühl haben, selbstständig zu handeln und Entscheidungen zu treffen, während sie mit einem KI-System interagieren.",
  content: [
    <ChapterHeader text={"Wahrgenommene Autonomie"} number={2} />,
    <section className="m-0">
      <p>
        Dieser Aspekt beschreibt, wie sehr Nutzende das Gefühl haben,
        selbstständig zu handeln und Entscheidungen zu treffen, während sie mit
        einem KI-System interagieren.
      </p>
      <Accordion sections={sections} />
      <SubNavigation sections={sections} />
    </section>,
    <section>
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/7QDwxEpQNHk?rel=0&modestbranding=1"
        }
        title={"Perceived Autonomy"}
      />
    </section>,
    <section id="definition">
      <h2>1. Definition wahrgenommener Autonomie</h2>
      <p>
        Die <b>wahrgenommene Autonomie</b> beschreibt, inwiefern Nutzende eines
        KI-Systems das Gefühl haben, selbstständig handeln und Entscheidungen
        treffen zu können. Diese Wahrnehmung beeinflusst das Vertrauen in das
        System, die Interaktion damit und die Zufriedenheit der Nutzenden.
        Wesentlich ist, ob das System als transparent und unterstützend
        wahrgenommen wird oder ob es lediglich als ausführendes Werkzeug dient.
      </p>
    </section>,
    <section id="konzepte">
      <h2>2. Relevante Konzepte und Modelle</h2>
      <h3>Automatisierungsstufen (Levels of Automation)</h3>
      <p>
        Die <b>Automatisierungsstufen</b> (Levels of Automation, LOA) wurden
        entwickelt, um Abstufungen oder Kategorien der <b>Autonomie</b> zu
        veranschaulichen. Diese Struktur hilft zu verstehen,{" "}
        <b>wie Menschen mit automatisierten Systemen interagieren</b> und
        beschreibt, welche Aufgaben entweder vom Menschen oder von der Maschine
        übernommen werden.
      </p>
      <p>
        Das LOA-Modell nach Parasuraman et al. (2000) umfasst{" "}
        <b>zehn Stufen der Aufgabenteilung</b> und Verantwortlichkeit zwischen
        Mensch und Maschine. Je nach Modell und Anwendungsbereich können die
        Automatisierungsstufen jedoch variieren. So definiert beispielsweise die
        Society of Automotive Engineers (SAE) <b>fünf Stufen</b> der
        Automatisierung im Bereich <b>autonomer Fahrzeuge</b> (Hopkins &
        Schwanen, 2021).
      </p>
      <h4>Einfluss der Automatisierung auf psychologische Variablen</h4>
      <p>
        Die Einführung von Automatisierung hat einen signifikanten Einfluss auf
        psychologische Variablen wie{" "}
        <b>
          Arbeitsbelastung, Fähigkeiten, Vertrauen und Situationsbewusstsein
        </b>{" "}
        der Nutzer (Parasuraman et al., 2000). Daher ist es entscheidend, das
        geeignete Automatisierungsniveau je nach Aufgabe auszuwählen, um
        unerwünschte Effekte zu vermeiden.
      </p>
      <h4>Vier Stufen der Informationsverarbeitung</h4>
      <p>
        Parasuraman, Sheridan und Wickens (2000) verknüpften die
        Automatisierungsstufen mit vier grundlegenden Funktionen, die auf einem
        Modell der menschlichen Informationsverarbeitung basieren und in einem
        Mensch-Maschine-System unterstützt werden sollen:
      </p>
      <ol>
        <li>Informationsbeschaffung,</li>
        <li>Informationsanalyse,</li>
        <li>Entscheidungsfindung</li>
        <li>Handlungsausführung.</li>
      </ol>
      <p>
        Dieses Modell bietet eine strukturierte Herangehensweise zur
        Klassifizierung von Aufgaben, bei denen Automatisierung den Menschen
        unterstützen kann.
      </p>
      <p>
        Fehler eines Systems in späteren Stadien können störender wirken als in
        Systemen, bei denen die Automatisierung höchstens bis zur Phase der
        Informationsanalyse eingesetzt wird. Akzeptanz, Vertrauen und Leistung
        können abnehmen, wenn in den späteren Phasen der
        Informationsverarbeitung zu viel Automatisierung vorhanden ist (Onnasch
        et al., 2014).
      </p>
      <h4>Einfluss der Automatisierung auf die menschliche Leistung</h4>
      <p>
        Parasuraman et al. (2000) haben vier zentrale Faktoren identifiziert,
        die beeinflussen, wie Automatisierung die menschliche Leistung
        beeinflussen kann:
      </p>
      <ol>
        <li>
          <b>Situationsbewusstsein:</b> Das Verständnis der aktuellen Umgebung
          und Situation durch den Menschen, welches durch Automatisierung
          entweder gefördert oder beeinträchtigt werden kann.
        </li>
        <li>
          <b>Vertrauen:</b> Das Vertrauen der Nutzenden in das System ist
          entscheidend für eine erfolgreiche Interaktion und hängt stark von der
          wahrgenommenen Autonomie ab.
        </li>
        <li>
          <b>Abbau von Fähigkeiten:</b> Hohe Automatisierung kann zu einem
          Rückgang menschlicher Fähigkeiten führen, da weniger manuelle
          Eingriffe und Entscheidungen nötig sind.
        </li>
        <li>
          <b>Arbeitsbelastung:</b> Automatisierung kann die Arbeitsbelastung
          entweder reduzieren oder erhöhen, abhängig davon, wie gut sie an die
          Bedürfnisse der Nutzenden angepasst ist.
        </li>
      </ol>
      <h3>Anpassbare vs. selbstanpassende Automatisierung</h3>
      <p>
        Die Wahl des Automatisierungsniveaus hat einen signifikanten Einfluss
        auf die Mensch-Automation-Interaktion. Es gibt zwei grundlegende
        Ansätze: <b>anpassbare Automatisierung</b> und{" "}
        <b>selbstanpassende Automatisierung</b>. In der anpassbaren
        Automatisierung wählt der Benutzer das Automatisierungsniveau manuell
        basierend auf seinen eigenen Bedürfnissen und Vorlieben. Im Gegensatz
        dazu überwacht die selbstanpassende Automatisierung den Zustand des
        Benutzers, wie Arbeitsbelastung oder Wachsamkeit, und passt das
        Automatisierungsniveau automatisch an.
      </p>
      <ol>
        <li>
          <h4>Anpassbare Automatisierung</h4>
          <ul>
            <li>
              Der Benutzer hat die Kontrolle über die Auswahl des
              Automatisierungsniveaus.
            </li>
            <li>
              Bietet Flexibilität und Anpassung an individuelle Präferenzen.
            </li>
            <li>
              Vorteilhaft, wenn Benutzer die Systeme nach ihren eigenen
              Bedürfnissen steuern wollen.
            </li>
          </ul>
        </li>
        <li>
          <h4>Selbstanpassende Automatisierung</h4>
          <ul>
            <li>
              Das System überwacht den Benutzer (z. B. Arbeitsbelastung) und
              passt das Automatisierungsniveau automatisch an.
            </li>
            <li>
              Hilfreich in dynamischen Umgebungen, da es auf Veränderungen
              reagiert, ohne dass der Benutzer eingreifen muss.
            </li>
            <li>
              Kann die Arbeitsbelastung reduzieren, birgt jedoch das Risiko,
              dass der Benutzer die Kontrolle verliert.
            </li>
          </ul>
        </li>
      </ol>
    </section>,
    <section id="studie">
      <h2>3. Studien zur User Experience und KI</h2>
      <h4>
        Kaber & Endsley (2004): The effects of level of automation and adaptive
        automation on human performance, situation awareness and workload in a
        dynamic control task.
      </h4>
      <p>
        Untersuchten die Auswirkungen von adaptiver Automatisierung auf die
        Leistung des Menschen, das Situationsbewusstsein und die
        Arbeitsbelastung in dynamischen Umgebungen.
      </p>
      <p>
        <b>Niedriges Automatisierungsniveau:</b> Verbessert die Leistung, da der
        Benutzer stark eingebunden bleibt (Kaber & Endsley, 2004).{" "}
        <b>Mittleres Automatisierungsniveau:</b> Führt zu verbessertem
        Situationsbewusstsein, was entscheidend für komplexe und dynamische
        Aufgaben ist. Allerdings führen mittlere Automatisierungsstufen nicht
        immer zu besserer Leistung oder geringerer Arbeitsbelastung, obwohl sie
        das Situationsbewusstsein verbessern.
      </p>
      <h4>
        Rieger et al. (2022): Challenging presumed technological superiority
        when working with (artificial) colleagues.
      </h4>
      <p>
        Diese Studie untersucht, wie Menschen klassische Automatisierung und
        KI-basierte Systeme häufig als <b>Black Boxes</b> wahrnehmen, ohne
        signifikante Unterschiede in ihrer Wahrnehmung beider Technologien. Dies
        führt zu einem unvollständigen Automatisierungsschema, da Transparenz
        fehlt. Interessanterweise verändert sich die Präferenz der Menschen
        zwischen der Interaktion als Ratsuchender und als Bewerteter. Während
        beim gemeinsamen Arbeiten menschliche Faktoren wie <b>Intuitivität</b>{" "}
        und <b>Fachwissen</b> bevorzugt werden, können bei der Bewertung durch
        Maschinen deren <b>Objektivität</b> und <b>Konsistenz</b> als
        vorteilhaft angesehen werden.
      </p>
      <h4>Deci & Ryan (1985): Self-determination theory (SDT)</h4>
      <p>
        Die Selbstbestimmungstheorie (Self-Determination Theory) definiert drei
        universelle grundlegende psychologische Bedürfnisse (Basic Psychological
        Needs, BPNs):
      </p>
      <ol>
        <li>
          <b>Autonomie:</b> das Gefühl, Kontrolle über eigene Entscheidungen und
          Handlungen zu haben
        </li>
        <li>
          <b>Kompetenz:</b> das Erleben von Wirksamkeit und Beherrschung einer
          Aufgaben
        </li>
        <li>
          <b>soziale Verbundenheit:</b> sich um andere zu kümmern und im
          Gegenzug Fürsorge zu erfahren
        </li>
      </ol>
    </section>,
    <section id="operationalisierung">
      <h2>4. Operationalisierung: Fragebögen und Messinstrumente</h2>
      <h4>Zoubir (2024): Preference for Automation Types Scale (PATS)</h4>
      <p>
        Ein Fragebogen zur Erfassung von Präferenzen der Nutzer hinsichtlich
        Automatisierungsaufgaben, basierend auf den Modellen von Parasuraman et
        al. (2000). Dieser misst, inwieweit Nutzer Automatisierung in
        verschiedenen Phasen der Informationsverarbeitung bevorzugen.
      </p>
      <h4>
        Moradbakhti et. al (2024): Basic Psychological Need Satisfaction for
        Technology Use (BPN-TU)
      </h4>
      <p>
        Die BPN-TU ist eine Skala zur Messung der Befriedigung grundlegender
        psychologischer Bedürfnisse bei der Nutzung von Technologie. Gemäß der
        Selbstbestimmungstheorie ist die Befriedigung der grundlegenden
        psychologischen Bedürfnisse nach Autonomie, Kompetenz und Verbundenheit
        entscheidend für das Wohlbefinden und die autonome Motivation.
      </p>
    </section>,
    <section id="guidelines">
      <h2>5. Design-Guidelines für eine gute UX</h2>
      <h3>1. Adaptive Automatisierung ermöglichen</h3>
      <h4>Beispiel: Verkehrsmanagementsysteme für städtischen Verkehr</h4>
      <p>
        Ein städtisches Verkehrsmanagementsystem bietet verschiedene
        Automatisierungsstufen, wie z. B. die automatische Steuerung von Ampeln
        oder die manuelle Steuerung durch Verkehrsingenieure. Über eine
        benutzerfreundliche Oberfläche können die Verantwortlichen je nach
        Verkehrsaufkommen und speziellen Ereignissen die Automatisierungsstufe
        flexibel anpassen.
      </p>
      <p className="specialText">
        Diese Anpassungsmöglichkeit erlaubt eine präzise und flexible Steuerung
        des Verkehrsflusses, reduziert Staus und priorisiert den öffentlichen
        Verkehr. Die Nutzenden behalten dabei die Kontrolle und können den
        Automatisierungsgrad individuell anpassen, was zu einem effizienteren
        und reibungsloseren Verkehrserlebnis führt.
      </p>
      <h3>2. Situationsbewusstsein unterstützen</h3>
      <h4>Beispiel: Notfallmanagementsysteme in Städten</h4>
      <p>
        Ein Notfallmanagementsystem liefert Echtzeitdaten zu städtischen
        Notfällen wie Verkehrsunfällen, Bränden oder Überschwemmungen. Es bietet
        automatisierte Empfehlungen für Evakuierungsrouten und Einsatzplanungen,
        die Einsatzleiter bei Bedarf manuell anpassen können.
      </p>
      <p className="specialText">
        Dank der Echtzeitinformationen können Einsatzkräfte schnell und präzise
        Entscheidungen treffen. Die Kombination aus automatisierten Vorschlägen
        und menschlichem Eingriff auf mittleren Automatisierungsstufen sorgt für
        ein optimales Gleichgewicht zwischen Effizienz und Sicherheit.
      </p>
      <h3>3. Flexibilität bei der Informationsverarbeitung</h3>
      <h4>Beispiel: Umweltüberwachungssysteme in Städten</h4>
      <p>
        Ein Umweltüberwachungssystem erlaubt es den Nutzenden, die Art und Menge
        der überwachten Daten individuell festzulegen – etwa zur Überwachung der
        Luftqualität, Lärmbelastung oder Wasserverschmutzung. Nutzende können
        den Fokus je nach Dringlichkeit und Prioritäten anpassen und die
        Detailtiefe der Analysen steuern.
      </p>
      <p className="specialText">
        Diese Flexibilität ermöglicht es den Nutzenden, auf spezifische
        Umweltfaktoren einzugehen und die Überwachung an aktuelle Bedürfnisse
        anzupassen. Dadurch wird eine maßgeschneiderte Umweltpolitik möglich,
        die effektiver auf akute Herausforderungen reagiert.
      </p>
      <h3>4. Transparenz sicherstellen</h3>
      <h4>Beispiel: Medizinisches Diagnosetools</h4>
      <p>
        Ein KI-basiertes Diagnosetool für Ärzte zeigt nicht nur die
        Diagnoseergebnisse, sondern auch die zugrunde liegenden Daten und die
        Logik hinter der Entscheidung an. Die Entscheidungswege werden
        visualisiert, und das System erklärt, warum bestimmte Diagnosen
        vorgeschlagen wurden.
      </p>
      <p className="specialText">
        Diese Transparenz stärkt das Vertrauen der Ärzte in die KI, da sie genau
        nachvollziehen können, wie die Empfehlungen zustande kommen. Dies
        fördert einen effizienteren und informierten Entscheidungsprozess.
      </p>
      <h4>Beispiel: Überwachungssysteme für den öffentlichen Verkehr</h4>
      <p>
        Ein städtisches Verkehrssystem analysiert den Verkehrsfluss und erklärt
        transparent, wie Ampelschaltungen optimiert oder bestimmte Routen
        priorisiert werden.
      </p>
      <p className="specialText">
        Durch die klare Kommunikation der Algorithmen und Entscheidungsprozesse
        wird das Vertrauen der Öffentlichkeit gestärkt. Nutzende können
        nachvollziehen, wie Entscheidungen getroffen wurden, was ihre Akzeptanz
        und das Gefühl der Autonomie im Umgang mit dem System verbessert.
      </p>
      <h3>5. Nutzerzentrierte Anpassung</h3>
      <h4>Beispiel: Smart City Mobilitätsplattformen</h4>
      <p>
        Eine Smart City Mobilitätsplattform ermöglicht es den Bürgern, ihre
        persönlichen Verkehrspräferenzen festzulegen – von bevorzugten
        Verkehrsmitteln über favorisierte Routen bis hin zu umweltbewussten
        Zielen wie der Reduzierung des CO2-Fußabdrucks. Die Plattform generiert
        daraufhin maßgeschneiderte Vorschläge, z. B. alternative Verkehrsmittel
        oder Fahrgemeinschaften, die den individuellen Präferenzen der Nutzenden
        entsprechen.
      </p>
      <p className="specialText">
        Diese nutzerzentrierte Anpassung gibt den Bürgern das Gefühl der
        Kontrolle über ihre Mobilitätsentscheidungen. Das Ergebnis ist eine
        höhere Zufriedenheit, da die Plattform auf persönliche Vorlieben
        eingeht. Gleichzeitig unterstützt die Lösung städtische Ziele zur
        Förderung nachhaltiger Mobilität.
      </p>
    </section>,
    <section id="fazit">
      <h2>6. Fazit</h2>
      <List
        items={[
          "Die <b>wahrgenommene Autonomie</b> in der Interaktion mit KI-Systemen beeinflusst <b>Nutzerzufriedenheit</b> und <b>Vertrauen</b>.",
          "<b>Automatisierungsstufen</b> und <b>Anpassungsfähigkeit</b> haben Einfluss auf die psychologische Wahrnehmung.",
          "<b>Transparenz</b>, <b>Flexibilität</b> und <b>Anpassung der Automatisierungsgrade</b> stärken die wahrgenommene Autonomie.",
          "<b>Adaptive Automatisierung</b> und <b>transparente Entscheidungsprozesse</b> fördern <b>Kontrolle</b> und <b>Selbstbestimmung</b>, was zu effektiverer und zufriedenstellender Nutzung führt.",
        ]}
      />
    </section>,
    <section>
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={autonimieQuizData} />
    </section>,
  ],
};

const WahrgenommenesSituationsbewusstsein = {
  linkName: "wahrgenommenes-situationsbewusstsein",
  name: "Wahrgenommenes Situationsbewusstsein",
  description:
    "Dies bezieht sich auf das Verständnis der Nutzende über ihre Umgebung und die Änderungen, die durch das KI-System verursacht werden.",
  content: [
    <ChapterHeader text={"Wahrgenommenes Situationsbewusstsein"} number={3} />,
    <section className="m-0">
      <p>
        Dies bezieht sich auf das Verständnis der Nutzende über ihre Umgebung
        und die Änderungen, die durch das KI-System verursacht werden.
      </p>
      <Accordion sections={sections} />
      <SubNavigation sections={sections} />
    </section>,
    <section>
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/mhUXTuMQ5mY?rel=0&modestbranding=1"
        }
        title={"Perceived Situationawareness"}
      />
    </section>,
    <section id="definition">
      <h2>1. Definition Situationsbewusstsein</h2>
      <p>
        Situationsbewusstsein (Situation Awareness, SA) bedeutet, die Umgebung
        und ihre wichtigsten Details zu verstehen. Es umfasst auch das Erkennen
        von Veränderungen, die im Laufe der Zeit oder durch äußere Einflüsse
        auftreten können. Diese Fähigkeit ist wichtig, um gute Entscheidungen in
        verschiedenen Situationen zu treffen.
      </p>
      <p>
        Eine ausführliche Erklärung der Definition finden Sie im folgenden
        Video.
      </p>
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/y6MyW_MGGCU?rel=0&modestbranding=1"
        }
        title={"Definition Situationawareness"}
      />
    </section>,
    <section id="konzepte">
      <h2>2. Relevante Konzepte und Modelle</h2>
      <h3>Drei Ebenen des Situationsbewusstsein laut Endsley (2000)</h3>
      <ol>
        <li>
          <b>Wahrnehmung:</b> Die Erfassung der relevanten Informationen in
          einer Umgebung.
        </li>
        <li>
          <b>Verständnis:</b> Die Interpretation und das Verstehen der Bedeutung
          dieser Informationen.
        </li>
        <li>
          <b>Projektion:</b> Die Fähigkeit, zukünftige Zustände oder
          Entwicklungen einer Situation vorherzusagen, basierend auf dem
          aktuellen Verständnis und der Wahrnehmung der Situation.
        </li>
      </ol>
      <p>
        Das <b>HASO-Modell</b> von Endsley betont ebenfalls diese drei
        wesentlichen Eigenschaften von Automatisierungssystemen, da sie direkt
        mit der Situationswahrnehmung der Nutzenden verknüpft sind.
      </p>
      <ol>
        <li>
          <b>Transparenz:</b> Das System muss klar kommunizieren, wie es zu
          seinen Entscheidungen gelangt.
        </li>
        <li>
          <b>Verständlichkeit:</b> Die Darstellung der Informationen muss leicht
          nachvollziehbar sein.
        </li>
        <li>
          <b>Vorhersehbarkeit:</b> Nutzende müssen einschätzen können, wie das
          System sich unter bestimmten Bedingungen verhalten wird.
        </li>
      </ol>
    </section>,
    <section id="studie">
      <h2>3. Studien zur User Experience und KI</h2>
      <p>
        Studien wie die von <b>Edgar et al. (2018)</b> untersuchen das
        Situationsbewusstsein in der Mensch-Maschine-Interaktion. Sie berechnen
        das wahrgenommene Situationsbewusstsein auf Basis einer
        Vertrauensbewertung durch die Bewertung wahr/falsch-Aussagen, wobei hier
        ebenfalls keine signifikanten Zusammenhang mit dem Verhalten
        festgestellt werden können. Es ist argumentierbar, dass die
        Gleichsetzung von wahrgenommenem Situationsbewusstsein und Vertrauen
        kritisch betrachtet werden kann, da sich das Situationsbewusstsein über
        drei verschiedene Stufen entwickelt.
      </p>
      <p>
        <b>Endsley et al. (1995)</b> betont, dass Transparenz, Verständlichkeit
        und Vorhersehbarkeit entscheidend für die Aufrechterhaltung des
        Situationsbewusstseins und des Vertrauens in automatisierte Systeme
        sind. Während Endsley (1998) einerseits betont, dass das wahrgenommene
        Situationsbewusstsein entscheidend für die Handlungsregulation ist,
        stellt sie auch fest, dass die Korrelation zwischen wahrgenommenem (oder
        subjektivem) Situationsbewusstsein oft gering ist.
      </p>
      <p>
        In der Studie zur User Experience in Digital Contact Tracing (DCT) von
        <b> Schrills et al. (2024)</b> wurde gezeigt, dass das subjektive
        Situationsbewusstsein der Nutzenden stärker mit der wahrgenommenen
        Nützlichkeit zusammenhängt als das faktische Situationsbewusstsein.
      </p>
    </section>,
    <section id="operationalisierung">
      <h2>4. Operationalisierung: Fragebögen und Messinstrumente</h2>
      <h4>
        Schrills & Franke (2023): SIPA (Subjective Information Processing
        Awareness)
      </h4>
      <p>
        Die SIPA-Skala ist ein Werkzeug, mit dem man beurteilen kann, wie
        Erklärungen in der erklärbaren Künstlichen Intelligenz (XAI) auf die
        Nutzenden wirken. Sie basiert auf den drei Ebenen des
        Situationsbewusstseins: Transparenz, Verständlichkeit und
        Vorhersehbarkeit. Mit der SIPA-Skala lässt sich analysieren, wie gut ein
        System die Nutzenden dabei unterstützt, das Verhalten und die
        Informationsverarbeitung des Systems nachzuvollziehen.
      </p>
      <h4>R. M. Taylor (2017): Situation Awareness Rating Technique (SART)</h4>
      <p>
        Die „Situation Awareness Rating Technique“ ist eine Methode zur
        Bewertung des wahrgenommenen Situationsbewusstseins, die 1990
        veröffentlicht wurde. Diese umfasst weitere Konstrukte wie die
        Arbeitsbelastung und unterscheidet sich daher von Endsleys Konzept des
        Situationsbewusstseins.
      </p>
    </section>,
    <section id="guidelines">
      <h2>5. Design-Guidelines zur Förderung des Situationsbewusstseins</h2>
      <h3>1. Transparenz sicherstellen</h3>
      <p>
        Systeme sollten alle relevanten Elemente der Informationsverarbeitung
        offenlegen und den Nutzenden zugänglich machen.
      </p>
      <p className="specialText">
        Beispiel: Ein KI-gestütztes Dashboard für Ärzte zeigt visuell, welche
        Daten zur Diagnosestellung verwendet wurden.
      </p>
      <h3>2. Verständlichkeit fördern</h3>
      <p>
        Intuitive Benutzeroberflächen und kontextbezogene Hilfen sollten die
        Nutzung von Systemen erleichtern.
      </p>
      <p className="specialText">
        Beispiel: Medizinische Diagnose-Tools heben die wichtigsten
        Informationen hervor und bieten Hilfetexte zur Erklärung komplexer
        Funktionen.
      </p>
      <h3>3. Vorhersehbarkeit verbessern</h3>
      <p>
        Systeme sollten Rückmeldungen geben, die die Auswirkungen von Handlungen
        aufzeigen, z. B. durch Simulationen oder Vorschauen.
      </p>
      <p className="specialText">
        Beispiel: Ein System zur Verkehrssteuerung könnte simulieren, wie sich
        geänderte Ampelphasen auf den Verkehr auswirken, bevor sie tatsächlich
        implementiert werden.
      </p>
    </section>,
    <section id="fazit">
      <h2>6. Fazit</h2>
      <List
        items={[
          "<b>Situationsbewusstseins (SA)</b> umfasst die <b>Wahrnehmung</b>, das <b>Verständnis</b> und die <b>Projektion</b> relevanter Informationen.",
          "<b>Endsley</b> und die SIPA-Facetten betonen die Notwendigkeit von <b>Transparenz</b>, <b>Verständlichkeit</b> und <b>Vorhersehbarkeit</b> für effektives SA.",
        ]}
      />
    </section>,
    <section>
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={situationsQuizData} />
    </section>,
  ],
};

const WahrgenommeneInformationOverload = {
  linkName: "wahrgenommene-mentale-belastung",
  name: "Wahrgenommene Mentale Belastung",
  description:
    "Dieser Aspekt umfasst den kognitiven Aufwand, der erforderlich ist, um Informationen zu verarbeiten und Entscheidungen zu treffen, und die potenzielle Überlastung durch zu viele Informationen.",
  content: [
    <ChapterHeader text={"Wahrgenommene Mentale Belastung"} number={4} />,
    <section className="m-0">
      <p>
        Dieser Aspekt umfasst den kognitiven Aufwand, der erforderlich ist, um
        Informationen zu verarbeiten und Entscheidungen zu treffen, und die
        potenzielle Überlastung durch zu viele Informationen.
      </p>
      <Accordion sections={sections} />
      <SubNavigation sections={sections} />
    </section>,
    <section>
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/dXiEQZShiCM?rel=0&modestbranding=1"
        }
        title={"Wahrgenommene Mentale Belastung"}
      />
    </section>,
    <section id="definition">
      <h2>1. Definition Mentale Belastung</h2>
      <p>
        Mentale Arbeitsbelastung (Mental Workload) beschreibt den kognitiven
        Aufwand, der nötig ist, um eine Aufgabe zu erledigen. Sie umfasst die
        geistigen Anstrengungen, die notwendig sind, um Informationen zu
        verarbeiten, Entscheidungen zu treffen und Aktionen durchzuführen.
      </p>
    </section>,
    <section id="konzepte">
      <h2>2. Relevante Konzepte und Modelle</h2>
      <p>
        Mentale Arbeitsbelastung ist ein zentrales Konstrukt im Bereich der
        Automatisierung. Für erklärbare KI (XAI) spielt sie eine besonders
        wichtige Rolle, da Erklärungen einen paradoxen Effekt haben können:
        Während KI durch Automatisierung eigentlich eine effizientere
        Informationsverarbeitung ermöglichen soll, können Erklärungen die
        mentale Arbeitsbelastung wieder erhöhen. Sie ist daher eine wichtige
        Metrik für die Bewertung von XAI.
      </p>
      <p className="specialText">
        Wenn Menschen durch kognitive Zwänge bewusster über Entscheidungen
        nachdenken sollen, kann das zwar positive Effekte haben, aber die höhere
        mentale Anstrengung könnte dazu führen, dass sie diese Methode weniger
        gerne nutzen – besonders, wenn eine einfachere direkte Empfehlung
        verfügbar ist.
      </p>
    </section>,
    <section id="studie">
      <h2>3. Studien zur User Experience und KI</h2>
      <p>
        Ergebnisse mehrerer Studien z. B. von <b>Sewnath und Crijnen (2021)</b>{" "}
        und <b>Tsai et al. (2021)</b> sowie eine Studie zur Automatisierung von
        Insulinverabreichungssystemen (AID-Systeme) von{" "}
        <b>Schrills und Franke (2023)</b> zeigten, dass der Einsatz von
        Erklärungen zu einer Informationsüberlastung führen könnte. Zu viele
        oder zu detaillierte Erklärungen in diesen Systemen beeinträchtigen die
        Entscheidungsfindung und erhöhen die kognitive Belastung. Insbesondere
        zeigte sich, dass Systeme mit hoher Informationsoffenlegung nicht immer
        zu besseren Ergebnissen führten, sondern manchmal genau das Gegenteil
        bewirken.
      </p>
    </section>,
    <section id="operationalisierung">
      <h2>4. Operationalisierung: Fragebögen und Messinstrumente</h2>
      <h4>Hart (2006): NASA Task Load Index (NASA-TLX) </h4>
      <p>
        Eine weit verbreitete Methode zur Messung der mentale Arbeitsbelastung
        ist der <b>NASA Task Load Index (NASA-TLX)</b>. Dieser Fragebogen
        bewertet verschiedene Dimensionen der Arbeitsbelastung, darunter:
      </p>
      <ul>
        <li>Mentale Anforderungen</li>
        <li>Physische Anforderungen</li>
        <li>Zeitliche Anforderungen</li>
        <li>Leistung</li>
        <li>Anstrengung</li>
        <li>Frustration</li>
      </ul>
      <p className="specialText">
        Der NASA-TLX ist eine hilfreiche Methode, um die kognitive Belastung in
        verschiedenen Arbeitsumgebungen, einschließlich der Nutzung von
        KI-Systemen, zu erfassen.
      </p>
    </section>,
    <section id="guidelines">
      <h2>5. Design-Guidelines zur Reduktion der kognitiven Belastung</h2>
      <h4>1. Vereinfachung von Informationen</h4>
      <p>
        Informationen sollten minimalistisch dargestellt und nur schrittweise
        offengelegt werden, um die kognitive Belastung zu reduzieren.
      </p>
      <p className="specialText">
        Beispiel: Ein KI-gestütztes Dashboard zeigt nur die wesentlichen
        Informationen und blendet zusätzliche Details bei Bedarf ein.
      </p>
      <h4>2. Anpassbarkeit der Informationsmenge</h4>
      <p>
        Systeme sollten es den Nutzenden ermöglichen, die Menge an Informationen
        anzupassen, die sie benötigen, um Entscheidungen zu treffen.
      </p>
      <p className="specialText">
        Beispiel: Personalisierte Einstellungen, die es den Nutzenden erlauben,
        festzulegen, wie viele Details sie sehen möchten.
      </p>
      <h4>3. Fokussierung auf kritische Informationen</h4>
      <p>
        Das System sollte kontextbezogen die wichtigsten Informationen
        priorisieren.
      </p>
      <p className="specialText">
        Beispiel: In einem Verkehrsleitsystem werden in einer Notfallsituation
        nur die kritischsten Daten hervorgehoben, wie z. B. gesperrte Straßen
        oder gefährliche Wetterbedingungen.
      </p>
      <h4>4. Reduktion der kognitiven Belastung durch Automatisierung</h4>
      <p>
        Routinetätigkeiten sollten automatisiert werden, um die geistige
        Anstrengung der Nutzenden zu minimieren.
      </p>
      <p className="specialText">
        Beispiel: Ein KI-System im Verwaltungsbereich könnte die automatische
        Überprüfung von Anträgen übernehmen, sodass sich Mitarbeitende auf
        Ausnahmen und komplexe Fälle konzentrieren können.
      </p>
    </section>,
    <section id="fazit">
      <h2>6. Fazit</h2>
      <List
        items={[
          "<b>Mentale Arbeitsbelastung</b> ist in der <b>erklärbaren KI (XAI)</b> entscheidend.",
          "Automatisierung erleichtert die Verarbeitung, <b>Erklärungen</b> können jedoch <b>Informationsüberlastung</b> verursachen.",
          "Wichtige Systemmerkmale: <b>Reduzierung, Anpassbarkeit und Priorisierung von Informationen</b>, um Nutzer effektiv zu entlasten.",
          "Der <b>NASA-TLX</b> hilft bei der Bewertung der Arbeitsbelastung und Verbesserung der Benutzerfreundlichkeit.",
        ]}
      />
    </section>,
    <section>
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={mentaleQuizData} />
    </section>,
  ],
};

const PerceivedTrustworthiness = {
  linkName: "wahrgenommene-vertrauenswuerdigkeit",
  name: "Wahrgenommene Vertrauenswürdigkeit",
  description:
    "Damit ist das Vertrauen gemeint, das Nutzende in ein KI-System haben, basierend auf dessen Handlungen.",
  content: [
    <ChapterHeader text={"Wahrgenommene Vertrauenswürdigkeit"} number={5} />,
    <section className="m-0">
      <p>
        Damit ist das Vertrauen gemeint, das Nutzende in ein KI-System haben,
        basierend auf dessen Handlungen.
      </p>
      <Accordion sections={sections} />
      <SubNavigation sections={sections} />
    </section>,
    <section>
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/ZGpk3LJDTzg?rel=0&modestbranding=1"
        }
        title={"Wahrgenommene Vertrauenswürdigkeit"}
      />
    </section>,
    <section id="definition">
      <h2>1. Definition Wahrgenommene Vertrauenswürdigkeit</h2>
      <p>
        Im Kontext von KI-Systemen beschreibt die wahrgenommene
        Vertrauenswürdigkeit (perceived trustworthiness) das Vertrauen, das
        Nutzende einem KI-System entgegenbringen, basierend auf ihrer
        Wahrnehmung von dessen Zuverlässigkeit, Verständlichkeit und ethischen
        Prinzipien. Vertrauen wird als die Bereitschaft definiert, sich auf die
        Entscheidungen eines Systems zu verlassen, ohne es direkt überwachen
        oder kontrollieren zu können.
      </p>
      <p className="specialText">
        Vertrauen ist zentral für die Akzeptanz und Nutzung von KI-Systemen,
        insbesondere im Bereich der erklärbaren Künstlichen Intelligenz (XAI),
        wo ethische und soziale Aspekte besonders relevant sind.
      </p>
    </section>,
    <section id="konzepte">
      <h2>2. Relevante Konzepte und Modelle</h2>
      <h4>
        Drei Schlüsselfaktoren des Vertrauens in Systeme nach Mayer et al.
        (1995):
      </h4>
      <ol>
        <li>
          <b>Fähigkeit:</b> Die Kompetenz und Fertigkeiten des Systems, seine
          Aufgaben korrekt auszuführen.
        </li>
        <li>
          <b>Wohlwollen:</b> Das Maß, in dem das System im besten Interesse des
          Nutzenden handelt.
        </li>
        <li>
          <b>Integrität:</b> Das Vertrauen, dass das System nach ethischen
          Prinzipien und Regeln handelt.
        </li>
      </ol>
      <h4>Vertrauen als eine Einstellung nach Lee & See (2004)</h4>
      <p>
        Vertrauen wird als die Einstellung beschrieben, dass ein Agent/System
        dazu beitragen wird, die Ziele einer Person in einer Situation zu
        erreichen, die durch Unsicherheit und Verwundbarkeit gekennzeichnet ist.
        Es ist wichtig zu beachten, dass Vertrauen als eine Einstellung und
        nicht als ein Verhalten konzeptualisiert werden sollte. Dabei sind drei
        Faktoren entscheiden:
      </p>
      <ol>
        <li>
          <b>Leistung:</b> Die Genauigkeit und Zuverlässigkeit des Systems.
        </li>
        <li>
          <b>Zweck:</b> Die Ziele und Absichten, die das System verfolgt.
        </li>
        <li>
          <b>Prozess:</b> Die Methoden und Verfahren, die das System verwendet.
        </li>
      </ol>
      <h4>
        Kognitives vs. affektives Vertrauen nach Madsen und Gregor (2000):
      </h4>
      <p>
        Sie beschreiben Vertrauen als „das Ausmaß, in dem ein Nutzer Vertrauen
        in die Empfehlungen, Handlungen und Entscheidungen einer künstlichen
        Entscheidungsunterstützung hat und bereit ist, auf deren Basis zu
        handeln.“
      </p>
      <p>Sie unterscheiden zwischen:</p>
      <ol>
        <li>
          <b>Kognitives Vertrauen:</b> Basierend auf den wahrgenommenen
          Eigenschaften des Systems, wie Zuverlässigkeit und Verständlichkeit.
          Wenn das System beispielsweise transparent ist und nachvollziehbare
          Entscheidungen trifft, steigt das Vertrauen.{" "}
        </li>
        <li>
          <b>Affektives Vertrauen:</b> Emotionale Bindungen oder persönliche
          Erfahrungen mit dem System fördern das Vertrauen, besonders bei
          sprachbasierten Assistenzsystemen oder Robotern.
        </li>
      </ol>
      <h4>
        Drei Dimensionen des Vertrauens in der Automatisierung nach Hoff und
        Bashir (2015):
      </h4>
      <ol>
        <li>
          <b>Dispositionelles Vertrauen:</b> bezieht sich auf die generelle
          Tendenz eines Nutzers, Automatisierung zu vertrauen, basierend auf
          Persönlichkeit und bisherigen Erfahrungen.
        </li>
        <li>
          <b>Situatives Vertrauen:</b> wird durch den spezifischen Kontext
          beeinflusst, in dem die Automatisierung verwendet wird, einschließlich
          Aufgabenmerkmalen und Umweltfaktoren.
        </li>
        <li>
          <b>Erlerntes Vertrauen:</b> entwickelt sich über die Zeit durch
          Interaktionen mit dem System, wobei positive Erfahrungen das Vertrauen
          stärken und negative es schwächen.
        </li>
      </ol>
      <p>
        Dieses Modell ist besonders wertvoll, da es die dynamische Natur von
        Vertrauen und die Bedeutung der Nutzererfahrungen im Zeitverlauf
        hervorhebt.
      </p>
      <h4>Vertrauenswürdigkeits-Hinweisen nach Schlicker et al. (2022): </h4>
      <p>
        Vertrauenswürdigkeits-Hinweise sind entscheidend für die wahrgenommene
        Vertrauenswürdigkeit eines Systems. Hinweise zur
        Informationsverarbeitung zeigen nicht nur, wie zuverlässig das System
        ist, sondern helfen den Nutzern auch, dessen Funktionsweise besser zu
        verstehen und seine Fähigkeit zur Aufgabenbewältigung einzuschätzen.
        Hinweise, die nicht mit den Merkmalen der Informationsverarbeitung des
        Systems zusammenhängen, z. B. die Reputation des Herstellers oder
        soziale Hinweise wie das Nutzungsverhalten von Personen im eigenen
        Umfeld können ebenfalls relevant sein.
      </p>
    </section>,
    <section id="studie">
      <h2>3. Studien zur User Experience und KI</h2>
      <h4>
        Schrills (2024): Einfluss der Systemzuverlässigkeit auf Nutzervertrauen
        in KI-Systeme
      </h4>
      <p>
        Die Studie zeigt, dass die Selbsteinschätzung des Vertrauens in ein
        KI-System keinen direkten Einfluss auf das tatsächliche Vertrauen in
        dessen Empfehlungen hat. Stattdessen erwies sich die angegebene
        Zuverlässigkeit des Systems als der stärkste Einflussfaktor auf das
        Verhalten der Nutzenden. Das bedeutet, dass Nutzende ihr Vertrauen eher
        auf die wahrgenommene Zuverlässigkeit des Systems stützen als auf ihr
        eigenes, subjektives Vertrauensempfinden. Dieses Ergebnis legt nahe,
        dass die Kommunikation und Darstellung der Zuverlässigkeit eines
        KI-Systems einen größeren Einfluss auf die Nutzung hat als traditionelle
        Methoden zur Messung von Vertrauen.
      </p>
      <h4>
        Vereschak et al. (2024): Menschliche Einflüsse und
        Stakeholder-spezifische Anforderungen
      </h4>
      <ol>
        <li>
          <b>Vertrauensanforderungen:</b> Die Teilnehmenden identifizierten
          wesentliche Elemente für Vertrauen und unterschieden es von Konzepten
          wie Vertrauenswürdigkeit, Verlass und Befolgung. Positive Erwartungen
          und wahrgenommenes Risiko waren dabei entscheidende Faktoren, wobei
          die Komplexität der Aufgabe als zusätzliche Voraussetzung für
          Vertrauen in KI-gestützte Entscheidungsprozesse hervorgehoben wurde.{" "}
        </li>{" "}
        <li>
          <b>Menschlicher Einfluss auf Vertrauen:</b> Vertrauen in KI-Systeme
          wurde stark von menschlichen Akteuren beeinflusst, etwa von den
          Personen, die das System entwickeln und einsetzen, und nicht nur von
          den technischen Merkmalen des Systems.{" "}
        </li>
        <li>
          <b>Stakeholderspezifische Vertrauensfaktoren:</b> Die Faktoren, die
          das Vertrauen zwischen Mensch und KI beeinflussen, variieren je nach
          Stakeholder. Zum Beispiel legen Entscheidungsträger, die das System
          nutzen, und diejenigen, die von den Entscheidungen betroffen sind (z.
          B. Patienten im medizinischen Kontext), auf unterschiedliche
          Vertrauensaspekte Wert.
        </li>
      </ol>
    </section>,
    <section id="operationalisierung">
      <h2>4. Operationalisierung: Fragebögen und Messinstrumente</h2>
      <h4>Jian et al. (2001): Trust in Automation (TiA)-Skala</h4>
      <p>
        Die Skala ist eine der am häufigsten verwendeten Skalen zur
        Selbsteinschätzung von Vertrauen. Sie bewertet, wie sehr Nutzer die
        Leistungsfähigkeit und Zuverlässigkeit automatisierter Systeme
        einschätzen und unterscheidet dabei zwischen Mensch-Mensch- und
        Mensch-Maschine-Vertrauen. Die Skala erfasst zentrale Vertrauensfaktoren
        und hilft, das Vertrauen der Nutzer in Automation und dessen Einfluss
        auf die Nutzung zu verstehen.
      </p>
    </section>,
    <section id="guidelines">
      <h2>5. Design-Guidelines zur Förderung der Vertrauenswürdigkeit</h2>
      <h4>1. Förderung von Transparenz und Verständlichkeit</h4>
      <p>
        Erklärbare KI (XAI) ermöglicht, dass die Entscheidungen des Systems klar
        und nachvollziehbar sind, was das Vertrauen der Nutzer stärkt.
      </p>
      <p className="specialText">
        Beispiel: Ein Finanzplanungssystem, das seine Berechnungen offenlegt und
        erklärt, welche Parameter berücksichtigt wurden, hilft Nutzern, die
        Entscheidungsprozesse nachzuvollziehen.
      </p>
      <h4>2. Sicherstellung von Systemleistung und Zuverlässigkeit</h4>
      <p>
        Systeme sollten verlässlich arbeiten und klare Rückmeldungen geben, um
        Vertrauen aufzubauen und Unsicherheiten zu reduzieren.
      </p>
      <p className="specialText">
        Beispiel: Ein medizinisches KI-System, das bei der Diagnose
        Fehlerindikatoren und Bestätigungen anzeigt, schafft Vertrauen in die
        Genauigkeit und Zuverlässigkeit der Ergebnisse.
      </p>
      <h4>3. Stärkung des erlernten Vertrauens</h4>
      <p>
        Einführungen und Schulungen können dispositionelles Vertrauen fördern,
        indem sie das Verständnis und die Vertrautheit mit dem System
        verbessern.
      </p>
      <p className="specialText">
        Beispiel: Nutzerfreundliche Tutorials für ein neues KI-gestütztes
        Verwaltungssystem fördern das grundlegende Vertrauen der Nutzer in das
        System.
      </p>
      <h4>4. Förderung von affektivem Vertrauen</h4>
      <p>
        Eine personalisierte Nutzererfahrung und positive User Experience (UX)
        tragen zur Entwicklung von affektivem Vertrauen bei.
      </p>
      <p className="specialText">
        Beispiel: Ein Sprachassistenzsystem, das personalisierte Präferenzen
        berücksichtigt, stärkt die emotionale Bindung und das Vertrauen der
        Nutzer in das System.
      </p>
      <h4>5. Kontextbezogene Erklärungen für Empfehlungen geben</h4>
      <p>
        Um situatives Vertrauen zu fördern, sollten Systeme kontextabhängige
        Erklärungen liefern, die auf die spezifische Entscheidungssituation der
        Nutzer eingehen.
      </p>
      <p className="specialText">
        Beispiel: Ein Personalplanungssystem für das Gesundheitswesen erklärt,
        warum bestimmte Dienstpläne vorgeschlagen werden, z. B. basierend auf
        Arbeitslasten oder Personalverfügbarkeit.
      </p>
    </section>,
    <section id="fazit">
      <h2>6. Fazit</h2>
      <List
        items={[
          "<b>Vertrauen ist entscheidend</b>: <b>Vertrauenswürdigkeit</b> fördert die Akzeptanz von KI-Systemen.",
          "<b>Unterschiedliche Vertrauensfaktoren</b>: <b>Fähigkeit</b>, <b>Integrität</b> und <b>Wohlwollen</b> sind grundlegende Faktoren für Vertrauen.",
          "<b>Menschliche Einflüsse berücksichtigen</b>: Vertrauen wird nicht nur durch das System, sondern auch durch menschliche Interaktionen und den <b>sozialen Kontext</b> beeinflusst.",
          "<b>Zuverlässigkeit sichtbar machen</b>: <b>Nutzervertrauen</b> basiert stark auf der wahrgenommenen Zuverlässigkeit des Systems.",
        ]}
      />
    </section>,
    <section>
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={vertrauenQuizData} />
    </section>,
  ],
};

const PerceivedConfidence = {
  linkName: "wahrgenommene-diagnostizitaet",
  name: "Wahrgenommene Diagnostizität",
  description:
    "Dies beschreibt das Vertrauen der Nutzende in die Diagnosen oder Vorschläge des KI-Systems und wie gut diese die gewünschten Ergebnisse liefern.",
  content: [
    <ChapterHeader text={"Wahrgenommene Diagnostizität"} number={6} />,
    <section className="m-0">
      <p>
        Dies beschreibt das Vertrauen der Nutzende in die Diagnosen oder
        Vorschläge des KI-Systems und wie gut diese die gewünschten Ergebnisse
        liefern.
      </p>
      <Accordion sections={sections} />
      <SubNavigation sections={sections} />
    </section>,
    <section>
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/jdsnWIIGT7c?rel=0&modestbranding=1"
        }
        title={"Perceived Confidence"}
      />
    </section>,
    <section id="definition">
      <h2>1. Definition wahrgenommene Diagnostizität</h2>
      <p>
        Die wahrgenommene Diagnostizität (Perceived Confidence/Diagnosticity)
        beschreibt, wie nützlich ein System für Nutzende ist, um fundierte
        Entscheidungen zu treffen. Ein System mit hoher Diagnostizität
        unterstützt die Bewertung verschiedener Optionen, sodass Nutzende auf
        Basis der vom System bereitgestellten Informationen die beste
        Entscheidung treffen können.
      </p>
      <p className="specialText">
        Je präziser und hilfreicher die Hinweise sind, desto mehr steigt die
        diagnostische Qualität des Systems und stärkt damit das Vertrauen der
        Nutzenden.
      </p>
    </section>,
    <section id="konzepte">
      <h2>2. Relevante Konzepte und Modelle</h2>
      <h3>Auswahl von Handlungsmöglichkeiten</h3>
      <p>
        Aus psychologischer Sicht ist Diagnostizität entscheidend, weil sie die
        Auswahl einer Handlung erleichtert. Informationen mit hoher
        Diagnostizität unterstützen Menschen dabei, gezielte Entscheidungen zu
        treffen. So kann ein diagnostisches System im Gesundheitswesen dazu
        beitragen, zwischen wenigen klaren Hypothesen zu unterscheiden, was
        letztlich Unsicherheit reduziert und die Entscheidungsfindung
        erleichtert.
      </p>
      <p className="specialText">
        Ein Beispiel dafür ist ein KI-System im Gesundheitswesen, das bei
        Symptomen wie Fieber die Wahrscheinlichkeiten für mögliche Erkrankungen
        wie Grippe oder Erkältung analysiert. Durch das Bereitstellen
        spezifischer Informationen hilft das System, die Entscheidung über den
        nächsten Schritt gezielt zu erleichtern.
      </p>
      <h3>
        Unterschied zwischen wahrgenommener und tatsächlicher Diagnostizität
      </h3>
      <p>
        Manchmal schätzen Nutzende bestimmte Informationen als sehr hilfreich
        für eine Entscheidung ein, obwohl diese Infos gar nicht wirklich dabei
        helfen, zwischen verschiedenen Möglichkeiten zu unterscheiden. Dies kann
        dazu führen, dass unwichtige Details überbewertet werden und dadurch
        Fehlentscheidungen entstehen (Nelson, 2005) Beispielsweise hat das
        Symptom „Fieber“ bei der Unterscheidung zwischen COVID-19 und Grippe nur
        einen geringen diagnostischen Wert, auch wenn es allgemein zur
        Krankheitsdiagnose beiträgt.
      </p>
      <p className="specialText">
        Dieser Effekt führt zu sogenannten „Pseudo-Diagnosen“, bei denen
        Menschen diagnostisch wenig hilfreiche Daten auswählen und diese für
        ihre Entscheidung nutzen (Kern & Doherty, 1982). Ähnlich wie bei der
        „Illusion of Explanatory Depth“ (Chromik et al., 2021) können dadurch
        Fehleinschätzungen der eigenen Leistung und eine falsche Bewertung des
        Systems entstehen.
      </p>
      <h3>Unterschied zwischen Informationswert und Diagnostizität</h3>
      <p>
        Der Begriff „Informationswert“ bezieht sich darauf, wie stark eine
        Information generell Unsicherheit verringert. „Diagnostizität“ hingegen
        ist spezifischer: Sie hilft, zwischen bestimmten Möglichkeiten (z. B.
        Grippe vs. Erkältung) zu unterscheiden. Wenn es nur wenige klare
        Optionen gibt, ist Diagnostizität wichtiger. Wenn es viele mögliche
        Optionen gibt, hilft der allgemeine Informationswert mehr.
      </p>
    </section>,
    <section id="studie">
      <h2>3. Studien zur User Experience und KI</h2>
      <h4>
        Schrills und Franke (2023): Einfluss der Diagnostizität auf Vertrauen
        und Nutzungsabsicht
      </h4>
      <p>
        Schrills und Franke (2023) betonen, dass die wahrgenommene
        Diagnostizität entscheidend für die Vertrauenswürdigkeit und Nutzung von
        Systemen ist. Bei Digital Contact Tracing (DCT)-Apps zur
        Pandemiekontaktverfolgung bevorzugen Nutzende detaillierte und klare
        Informationen, besonders diagnostische Details wie das Tragen einer
        Maske während einer Pandemie. Dies stärkt ihr Vertrauen in die
        Genauigkeit und Nützlichkeit der App und erhöht somit auch
        Zufriedenheit. Das Fehlen diagnostischer Hinweise beeinflusst das
        Verhalten der Nutzende und bringt sie dazu, eher allgemeine, weniger
        gezielte Informationen zu nutzen.
      </p>
      <h4>
        Bartlett und McCarley (2017): Suboptimale Entscheidungen durch fehlende
        Diagnostizität
      </h4>
      <p>
        Wenn eine KI keine spezifisch diagnostischen Informationen liefert,
        neigen Nutzenden oft dazu, alternative Strategien anzuwenden, die nicht
        immer optimal sind. Die Studie beschreibt, dass Menschen in solchen
        Situationen oft eine Strategie namens „probability matching“ verwenden.
        Dabei passen sie ihre Entscheidungen an die allgemeine Zuverlässigkeit
        der KI an, anstatt auf gezielte, diagnostische Hinweise zu achten.{" "}
      </p>
    </section>,
    <section id="operationalisierung">
      <h2>4. Operationalisierung: Fragebögen und Messinstrumente</h2>
      <h4>Wahrgenommene Ergebnisdiagnostik</h4>
      <p>
        Hier wird erfasst, inwieweit die Nutzer der Meinung sind, dass die
        bereitgestellten Informationen fundiert sind und zu einer besseren
        Entscheidungsfindung beitragen.
      </p>
      <h4>
        Fragebögen zur Messung von Vertrauenswürdigkeit und Diagnostizität:
      </h4>
      <p>
        Diese Instrumente bewerten, wie präzise und klar die Informationen eines
        Systems wahrgenommen werden und wie stark sie das Vertrauen der Nutzer
        beeinflussen.
      </p>
    </section>,
    <section id="guidelines">
      <h2>5. Design-Guidelines</h2>
      <p>
        Um Nutzer das Verständnis und Vertrauen in die Entscheidungen einer
        Künstlichen Intelligenz (KI) zu erleichtern, gibt es verschiedene
        Techniken in der Erklärbaren KI (XAI). Diese Techniken helfen,
        Entscheidungen der KI verständlicher und transparenter zu machen.
      </p>
      <h4>1. Kontrafaktische Erklärungen – „Was wäre wenn“-Szenarien</h4>
      <p>
        Kontrafaktische Erklärungen zeigen, wie eine kleine Änderung an den
        Eingabedaten zu einer anderen Entscheidung der KI führen könnte. Zum
        Beispiel: Wenn eine Kreditbewilligung abgelehnt wird, könnte die KI
        erklären, dass eine Erhöhung des Einkommens um einen bestimmten Betrag
        zur Bewilligung geführt hätte. Solche „Was wäre wenn“-Erklärungen helfen
        den Nutzenden, die Entscheidungsgrenzen der KI zu verstehen (Warren et
        al., 2022).
      </p>
      <h4>
        2. Semantische Anreicherung und Heatmaps – Verständlichere
        Visualisierungen
      </h4>
      <p>
        Durch semantische Anreicherung, also durch das Hinzufügen von
        zusätzlichen Erklärungen, werden Heatmaps (visuelle Darstellungen)
        verständlicher. Zum Beispiel in der medizinischen Bildgebung können
        Heatmaps aufzeigen, welche Bildbereiche für eine Diagnose besonders
        wichtig waren. Diese zusätzlichen Details helfen den Nutzenden, die
        Entscheidungslogik der KI besser nachzuvollziehen und das Vertrauen zu
        stärken (Gianfagna & Di Cecco, 2021; Tonekaboni et al., 2019).
      </p>
      <h4>3. Konfidenzbewertungen – Vertrauen durch Unsicherheitsangaben</h4>
      <p>
        Konfidenzbewertungen zeigen, wie sicher oder unsicher die KI bei ihren
        Vorhersagen ist. Diese Informationen sind besonders wichtig in Bereichen
        wie Gesundheit und Finanzen, wo Entscheidungen große Auswirkungen haben
        können. Wenn die KI ihre Unsicherheit angibt, können Nutzende besser
        einschätzen, ob sie der Entscheidung vertrauen möchten oder nicht
        (Gianfagna and Di Cecco, 2021; T. Le et al., 2023).
      </p>
      <h4>4. Lokale Feature-Relevanz – Bedeutung einzelner Merkmale</h4>
      <p>
        Die lokale Feature-Relevanz zeigt an, welche spezifischen
        Eingabemerkmale zu einer bestimmten Entscheidung der KI geführt haben.
        Beispielsweise könnte in einem System zur Betrugserkennung hervorgehoben
        werden, dass ungewöhnliche Transaktionsbeträge oder -orte eine große
        Rolle gespielt haben. Diese Detailinformationen helfen den Nutzenden,
        die Entscheidungen der KI mit ihrem eigenen Wissen zu vergleichen und zu
        validieren (Doshi-Velez and Kim, 2017; Lundberg et al., 2019).
      </p>
    </section>,
    <section id="fazit">
      <h2>6. Fazit</h2>
      <List
        items={[
          "<b>Die wahrgenommene Diagnostizität</b> eines KI-Systems ist entscheidend für fundierte und präzise Entscheidungen.",
          "Systeme, die klare diagnostische Informationen bereitstellen, stärken das <b>Vertrauen</b> der Nutzenden sowie die <b>Akzeptanz</b> und <b>effektive Nutzung</b> der Technologie.",
          "Besonders wichtig ist dies in kritischen Bereichen wie dem <b>Gesundheitswesen</b>.",
          "Die diagnostische Qualität eines Systems hat direkten Einfluss auf das <b>Wohl der Gemeinschaft</b>.",
        ]}
      />
    </section>,
    <section>
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={diagnostizitaetQuizData} />
    </section>,
  ],
};

const sectionsFazit = [
  { id: "outro", title: "Outro" },
  { id: "kernaspekte", title: "Fünf UX-Kernaspekte" },
  { id: "ausblick", title: "Ausblick nächste Lektion" },
];

const Zusammenfassung = {
  linkName: "zusammenfassung-ausblick",
  name: "Zusammenfassung und Ausblick",
  description:
    "Hier findet man eine kurze Zusammenfassung der wichtigsten Aspekte, sowie einen Ausblick auf das nächste Modul.",
  content: [
    <ChapterHeader text={"Zusammenfassung und Ausblick"} number={7} />,
    <section id="outro">
      <SubNavigation sections={sectionsFazit} />
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/Qmg1FlFCSMw?rel=0&modestbranding=1"
        }
        title={"Outro"}
      />
      <p className="pt-5">
        In dieser Lektion haben wir uns eingehend mit den spezifischen Aspekten
        der User Experience (UX) auseinandergesetzt, die im Kontext von
        KI-Systemen eine besondere Rolle spielen.
      </p>
    </section>,
    <section id="kernaspekte">
      <h2>Die 5 UX-Kernaspekte und deren Designrichtlinien</h2>
      <h3>1. Adaptive Automatisierung für wahrgenommene Autonomie</h3>
      <p>
        Wie sehr fühlen sich Nutzende in der Lage, selbstständig Entscheidungen
        zu treffen und zu handeln, während sie mit einem KI-System interagieren?
        Nutzende sollten die Kontrolle darüber haben, wie stark sie das System
        automatisieren oder manuell bedienen möchten. Dies fördert das Gefühl
        der Autonomie und gibt ihnen die Flexibilität, sich bei Bedarf stärker
        auf ihre eigenen Entscheidungen zu verlassen.
      </p>
      <p className="specialText">
        Bieten Sie Nutzenden die Möglichkeit, zwischen verschiedenen
        Automatisierungsstufen zu wechseln, sodass sie je nach Präferenz oder
        Aufgabenanforderung selbst entscheiden können, wie viel Kontrolle sie
        dem System überlassen.
      </p>
      <h3>2. Transparenz zur Unterstützung des Situationsbewusstseins </h3>
      <p>
        Situationsbewusstsein ist das Verständnis und die Wahrnehmung der
        Nutzenden über die aktuelle Umgebung und die Auswirkungen der KI auf
        diese. Ein hohes Maß an Situationsbewusstsein erfordert, dass Nutzende
        jederzeit relevante Informationen über das System und dessen
        Entscheidungen erhalten. Transparenz fördert das Verständnis für die
        Funktionsweise und Entscheidungsgrundlagen des Systems.
      </p>
      <p className="specialText">
        Stellen Sie sicher, dass das System die Datenquellen, Prozesse und
        Faktoren, die eine Entscheidung beeinflussen, klar kommuniziert. Nutzen
        Sie visuelle Darstellungen oder erklärende Hinweise, um komplexe Abläufe
        verständlicher zu machen.
      </p>
      <h3>
        3. Flexibilität bei der Informationsverarbeitung zur Reduzierung der
        mentalen Belastung
      </h3>
      <p>
        Mentale Belastung beschriebt den kognitive Aufwand, der durch die
        Verarbeitung von Informationen entsteht und die potenzielle Überlastung
        durch zu viele Daten. Da zu viele oder unstrukturierte Informationen zu
        kognitiver Überlastung führen können, ist es entscheidend, Nutzende die
        Kontrolle über die Art und Menge der angezeigten Informationen zu geben.
        Dies hilft, die wahrgenommene mentale Belastung zu reduzieren.
      </p>
      <p className="specialText">
        Integrieren Sie Funktionen, die es Nutzende ermöglichen, die Anzeige von
        Informationen nach Bedarf zu filtern, zu kategorisieren oder zu
        priorisieren. Zum Beispiel kann eine Zusammenfassungsansicht für weniger
        erfahrene Nutzer und eine Detailansicht für Experten angeboten werden.
      </p>
      <h3>
        4. Zuverlässigkeit und klare Darstellung zur Förderung der
        wahrgenommenen Vertrauenswürdigkeit
      </h3>
      <p>
        Vertrauen entsteht, wenn das System nicht nur zuverlässig und präzise
        arbeitet, sondern diese Eigenschaften auch klar vermittelt. Nutzende
        müssen darauf vertrauen können, dass das System korrekt und ethisch
        agiert.
      </p>
      <p className="specialText">
        Verwenden Sie visuelle Indikatoren, die die Zuverlässigkeit und
        Erfolgsquote des Systems darstellen, und bieten Sie Erklärungen, die das
        ethische und technische Verhalten des Systems untermauern.
      </p>
      <h3>
        5. Nutzerzentrierte Anpassung zur Unterstützung der wahrgenommenen
        Diagnostizität
      </h3>
      <p>
        Diagnostizität ist die Fähigkeit eines Systems, Nutzende mit präzisen
        Informationen bei fundierten Entscheidungen zu unterstützen. Nutzende
        sollten das System an ihre individuellen Präferenzen und
        Informationsbedürfnisse anpassen können, damit es sie optimal bei der
        Entscheidungsfindung unterstützt. Dies stärkt die Fähigkeit des Systems,
        genaue und hilfreiche Informationen bereitzustellen.
      </p>
      <p className="specialText">
        Ermöglichen Sie personalisierte Einstellungen, durch die Nutzenden
        entscheiden können, welche Art von Informationen angezeigt werden und
        wie detailliert diese sein sollen. Ein personalisiertes Dashboard oder
        konfigurierbare Berichte können helfen, das System effizienter zu
        nutzen.
      </p>
    </section>,
    <section id="ausblick">
      <h2>
        Ausblick auf das Modul: "Gestaltungsziele für menschzentrierte KI"
      </h2>
      <p>
        Im kommenden Modul werden wir uns mit spezifischen Eigenschaften von
        KI-Systemen beschäftigen, die besonders wichtig für die UX sind:
        Erklärbarkeit, Nachvollziehbarkeit, Vertrauenswürdigkeit,
        Kontrollierbarkeit und Transparenz. Wir werden untersuchen, wie diese
        Eigenschaften die Nutzererfahrung beeinflussen und welche Prinzipien bei
        der Gestaltung von KI-Systemen berücksichtigt werden sollten, um eine
        positive und vertrauensvolle Interaktion zu gewährleisten.
      </p>
      <p>
        Wir hoffen, dass diese Lektion Ihnen wertvolle Einblicke in die Relevanz
        von UX-Konstrukten bei der Gestaltung von KI-Systemen gegeben hat. Diese
        Konzepte sind nicht nur für die Entwicklung von KI-Systemen
        entscheidend, sondern auch für die Bewertung, wie gut diese Systeme die
        Bedürfnisse und Erwartungen der Nutzer erfüllen. Bereiten Sie sich
        darauf vor, tiefer in die Dimensionen einzutauchen, die das
        Nutzererlebnis mit KI-Systemen weiter prägen werden.
      </p>
    </section>,
  ],
};

const Quellen = {
  linkName: "quellen",
  name: "Quellen",
  description:
    "Hier befinden sich die verwendeten Quellen in Reihenfolge des ersten Auftretens",
  content: [
    <ChapterHeader text={"Quellen"} number={8} />,
    <section>
      <h4>Literatur zu Wahrgenommener Autonomie</h4>
      <ul>
        <li>
          Parasuraman, R., Sheridan, T., & Wickens, C. (2000). A model for types
          and levels of human interaction with automation.{" "}
          <b>
            IEEE Transactions on Systems, Man, and Cybernetics - Part A: Systems
            and Humans, 30
          </b>
          (3), 286–297.{" "}
          <a
            href="https://doi.org/10.1109/3468.844354"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1109/3468.844354
          </a>
        </li>
        <li>
          Hopkins, D., & Schwanen, T. (2021). Talking about automated vehicles:
          What do levels of automation do? <b>Technology in Society, 64</b>,
          101488.{" "}
          <a
            href="https://doi.org/10.1016/j.techsoc.2020.101488"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1016/j.techsoc.2020.101488
          </a>
        </li>
        <li>
          Onnasch, L., Wickens, C. D., Li, H., & Manzey, D. (2014). Human
          performance consequences of stages and levels of automation: An
          integrated meta-analysis.{" "}
          <b>
            Human Factors: The Journal of the Human Factors and Ergonomics
            Society, 56
          </b>
          (3), 476–488.{" "}
          <a
            href="https://doi.org/10.1177/0018720813501549"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1177/0018720813501549
          </a>
        </li>
        <li>
          Kaber, D. B., & Endsley, M. R. (2004). The effects of level of
          automation and adaptive automation on human performance, situation
          awareness and workload in a dynamic control task.{" "}
          <b>Theoretical Issues in Ergonomics Science, 5</b>(2), 113–153.{" "}
          <a
            href="https://doi.org/10.1080/1463922021000054335"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1080/1463922021000054335
          </a>
        </li>
        <li>
          Rieger, T., Roesler, E., & Manzey, D. (2022). Challenging presumed
          technological superiority when working with (artificial) colleagues.{" "}
          <b>Scientific Reports, 12</b>, 3768.{" "}
          <a
            href="https://doi.org/10.1038/s41598-022-07808-x"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1038/s41598-022-07808-x
          </a>
        </li>
        <li>
          Deci, E. L., & Ryan, R. M. (2000). The "what" and "why" of goal
          pursuits: Human needs and the self-determination of behavior.{" "}
          <b>Psychological Inquiry, 11</b>(4), 227–268.
        </li>
        <li>
          Zoubir, M. (2024). <b>Preference for Automation Types Scale (PATS)</b>
          .{" "}
          <a
            href="https://doi.org/10.13140/RG.2.2.22149.97769"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.13140/RG.2.2.22149.97769
          </a>
        </li>
        <li>
          Moradbakhti, L., Leichtmann, B., & Mara, M. (2024). Development and
          validation of a basic psychological needs scale for technology use.{" "}
          <b>Psychological Test Adaptation and Development, 5</b>(1), 26–45.{" "}
          <a
            href="https://doi.org/10.1027/2698-1866/a000062"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1027/2698-1866/a000062
          </a>
        </li>
      </ul>
      <h4>Literatur zu Wahrgenommenem Situationsbewusstsein (SA)</h4>
      <ul>
        <li>
          Edgar, G. K., Catherwood, D., Baker, S., Sallis, G., Bertels, M.,
          Edgar, H. E., Nikolla, D., Buckle, S., Goodwin, C. & Whelan, A.
          (2018). Quantitative Analysis of Situation Awareness (QASA): Modelling
          and measuring situation awareness using signal detection theory.{" "}
          <b>Ergonomics, 61</b>(6), 762–777.{" "}
          <a
            href="https://doi.org/10.1080/00140139.2017.1420238"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1080/00140139.2017.1420238
          </a>
        </li>

        <li>
          Endsley, M., Sollenberger, R. & Stein, E. (2000). Situation awareness:
          A comparison of measures. In{" "}
          <b>
            Proceedings of the Human Performance, Situation Awareness and
            Automation: User-Centered Design for the New Millennium
          </b>
          , Savannah, GA.
        </li>

        <li>
          Endsley, M. R. (1995). Toward a Theory of Situation Awareness in
          Dynamic Systems. <b>Human Factors, 37</b>(1), 32–64.{" "}
          <a
            href="https://doi.org/10.1518/001872095779049543"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1518/001872095779049543
          </a>
        </li>

        <li>
          Endsley, M. R. (2017). From Here to Autonomy: Lessons Learned From
          Human–Automation Research.{" "}
          <b>
            Human Factors: The Journal of the Human Factors and Ergonomics
            Society, 59
          </b>
          (1), 5–27.{" "}
          <a
            href="https://doi.org/10.1177/0018720816681350"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1177/0018720816681350
          </a>
        </li>

        <li>
          Endsley, M. R., Selcon, S. J., Hardiman, T. D. & Croft, D. G. (1998).
          A Comparative Analysis of Sagat and Sart for Evaluations of Situation
          Awareness. In{" "}
          <b>
            Proceedings of the Human Factors and Ergonomics Society Annual
            Meeting, 42
          </b>
          (1), 82–86.{" "}
          <a
            href="https://doi.org/10.1177/154193129804200119"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1177/154193129804200119
          </a>
        </li>
        <li>
          Schrills, T., & Franke, T. (2023). Wie erleben Nutzer die
          Nachvollziehbarkeit von KI-Systemen? Untersuchung des subjektiven
          Informationsverarbeitungsbewusstseins in automatisierten
          Insulinabgabesystemen (AID-Systemen).{" "}
          <em>ACM Transactions on Interactive Intelligent Systems, 13</em>(4),
          25:1–25:34.{" "}
          <a
            href="https://doi.org/10.1145/3588594"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1145/3588594
          </a>
        </li>

        <li>
          Schrills, T., Kojan, L., Gruner, M., Calero Valdez, A. & Franke, T.
          (2024). Effects of User Experience in Automated Information Processing
          on Perceived Usefulness of Digital Contact-Tracing Apps:
          Cross-Sectional Survey Study. <b>JMIR Human Factors, 11</b>, e53940.{" "}
          <a
            href="https://doi.org/10.2196/53940"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.2196/53940
          </a>
        </li>

        <li>
          Taylor, R. M. (2017). Situational Awareness Rating Technique (Sart):
          The Development of a Tool for Aircrew Systems Design. In E. Salas
          (Hrsg.), <b>Situational Awareness</b> (1. Aufl., S. 111–128).
          Routledge.{" "}
          <a
            href="https://doi.org/10.4324/9781315087924-8"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.4324/9781315087924-8
          </a>
        </li>
      </ul>
      <h4>Literatur zu Wahrgenommene Mentale Arbeitsbelastung</h4>
      <ul>
        <li>
          Miller, T. (2023). Explainable AI is Dead, Long Live Explainable AI!:
          Hypothesis-driven Decision Support using Evaluative AI.{" "}
          <b>
            2023 ACM Conference on Fairness, Accountability, and Transparency
          </b>
          , 333–342.{" "}
          <a
            href="https://doi.org/10.1145/3593013.3594001"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1145/3593013.3594001
          </a>
        </li>
        <li>
          Vidulich, M. A., & Tsang, P. S. (2012). Mental Workload and Situation
          Awareness. In G. Salvendy (Hrsg.),{" "}
          <b>Handbook of Human Factors and Ergonomics</b> (1. Aufl., S.
          243–273). Wiley.{" "}
          <a
            href="https://doi.org/10.1002/9781118131350.ch8"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1002/9781118131350.ch8
          </a>
        </li>
        <li>
          Longo, L., Wickens, C. D., Hancock, G., & Hancock, P. A. (2022). Human
          Mental Workload: A Survey and a Novel Inclusive Definition.{" "}
          <b>Frontiers in Psychology</b>, 13, 883321.{" "}
          <a
            href="https://doi.org/10.3389/fpsyg.2022.883321"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.3389/fpsyg.2022.883321
          </a>
        </li>
        <li>
          Sewnath, G., & Crijnen, J. (2021).{" "}
          <b>
            How much is too much? Levels of AI Explainability within Decision
            Support Systems’ User Interfaces for improved decision-making
            performance.
          </b>
        </li>
        <li>
          Tsai, C.-H., You, Y., Gui, X., Kou, Y., & Carroll, J. M. (2021).
          Exploring and Promoting Diagnostic Transparency and Explainability in
          Online Symptom Checkers.{" "}
          <b>
            Proceedings of the 2021 CHI Conference on Human Factors in Computing
            Systems
          </b>
          , 1–17.{" "}
          <a
            href="https://doi.org/10.1145/3411764.3445101"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1145/3411764.3445101
          </a>
        </li>
        <li>
          Schrills, T., & Franke, T. (2023). How Do Users Experience
          Traceability of AI Systems? Examining Subjective Information
          Processing Awareness in Automated Insulin Delivery (AID) Systems.{" "}
          <b>ACM Transactions on Interactive Intelligent Systems</b>, 13(4),
          1–34.{" "}
          <a
            href="https://doi.org/10.1145/3588594"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1145/3588594
          </a>
        </li>
        <li>
          Hart, S. G. (2006). NASA-Task Load Index (NASA-TLX); 20 Years Later.{" "}
          <b>
            Proceedings of the Human Factors and Ergonomics Society Annual
            Meeting
          </b>
          , 50 (9), 904–908.{" "}
          <a
            href="https://doi.org/10.1177/154193120605000909"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1177/154193120605000909
          </a>
        </li>
      </ul>
      <h4>Literatur zu Wahrgenommene Vertrauenswürdigkeit</h4>
      <ul>
        <li>
          Mayer, R. C., Davis, J. H., & Schoorman, F. D. (1995). An Integrative
          Model of Organizational Trust.{" "}
          <b>The Academy of Management Review, 20</b>(3), 709.{" "}
          <a
            href="https://doi.org/10.2307/258792"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.2307/258792
          </a>
        </li>
        <li>
          Lee, J. D., & See, K. A. (2004). Trust in Automation: Designing for
          Appropriate Reliance.{" "}
          <b>
            Human Factors: The Journal of the Human Factors and Ergonomics
            Society , 46
          </b>
          (1), 50–80.{" "}
          <a
            href="https://doi.org/10.1518/hfes.46.1.50_30392"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1518/hfes.46.1.50_30392
          </a>
        </li>
        <li>
          Madsen, M., & Gregor, S. (2000). Measuring human-computer trust.{" "}
          <b>11th australasian conference on information systems , 53</b>, 6–8.
        </li>
        <li>
          Hoff, K. A., & Bashir, M. (2015). Trust in Automation: Integrating
          Empirical Evidence on Factors That Influence Trust.{" "}
          <b>
            Human Factors: The Journal of the Human Factors and Ergonomics
            Society , 57
          </b>
          (3), 407–434.{" "}
          <a
            href="https://doi.org/10.1177/0018720814547570"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1177/0018720814547570
          </a>
        </li>
        <li>
          Schlicker, N., Baum, K., Uhde, A., Sterz, S., Hirsch, M. C., & Langer,
          M. (2022).{" "}
          <b>
            How Do We Assess the Trustworthiness of AI? Introducing the
            Trustworthiness Assessment Model (TrAM).
          </b>
          <a
            href="
          https://doi.org/10.31234/osf.io/qhwvx"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.31234/osf.io/qhwvx
          </a>
        </li>
        <li>
          Schrills, T., & Franke, T. (2023). How Do Users Experience
          Traceability of AI Systems? Examining Subjective Information
          Processing Awareness in Automated Insulin Delivery (AID) Systems.{" "}
          <b>ACM Transactions on Interactive Intelligent Systems, 13</b>(4),
          1–34.{" "}
          <a
            href="https://doi.org/10.1145/3588594"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1145/3588594
          </a>
        </li>
        <li>
          Vereschak, O., Alizadeh, F., Bailly, G., & Caramiaux, B. (2024). Trust
          in AI-assisted Decision Making: Perspectives from Those Behind the
          System and Those for Whom the Decision is Made.{" "}
          <b>
            Proceedings of the CHI Conference on Human Factors in Computing
            Systems
          </b>
          , 1–14.
          <a
            href="https://doi.org/10.1145/3613904.3642018"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1145/3613904.3642018
          </a>
        </li>
        <li>
          Kohn, S. C., de Visser, E. J., Wiese, E., Lee, Y.-C., & Shaw, T. H.
          (2021). Measurement of trust in automation: A narrative review and
          reference guide. <b>Frontiers in psychology</b>, 12, 604977.{" "}
          <a
            href="https://doi.org/10.3389/fpsyg.2021.604977"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.3389/fpsyg.2021.604977
          </a>
        </li>
      </ul>

      <h4>Literatur zu Wahrgenommene Confidence / Diagnosticity</h4>
      <ul>
        <li>
          Wickens, C. D., & Scott, B. D. (1983). A comparison of verbal and
          graphical information presentation in a complex information
          integration decision task. In Tech. Rep. EPL-83-1/ONR-83-1.
          Engineering-Psychology Research Laboratory, University of Illinois
          Urbana.
        </li>

        <li>
          Nelson, J. D. (2005). Finding Useful Questions: On Bayesian
          Diagnosticity, Probability, Impact, and Information Gain.{" "}
          <b>Psychological Review, 112</b>(4), 979–999.{" "}
          <a
            href="https://doi.org/10.1037/0033-295X.112.4.979"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1037/0033-295X.112.4.979
          </a>
        </li>

        <li>
          Kern, L., & Doherty, M. E. (1982). ‘Pseudodiagnosticity’ in an
          idealized medical problem-solving environment.{" "}
          <b>Academic Medicine, 57</b>(2), 100–104.{" "}
          <a
            href="https://doi.org/10.1097/00001888-198202000-00004"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1097/00001888-198202000-00004
          </a>
        </li>

        <li>
          Chromik, M., Eiband, M., Buchner, F., Krüger, A., & Butz, A. (2021). I
          Think I Get Your Point, AI! The Illusion of Explanatory Depth in
          Explainable AI.{" "}
          <b>26th International Conference on Intelligent User Interfaces</b>,
          307–317.{" "}
          <a
            href="https://doi.org/10.1145/3397481.3450644"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1145/3397481.3450644
          </a>
        </li>

        <li>
          Schrills, T., & Franke, T. (2023). How Do Users Experience
          Traceability of AI Systems? Examining Subjective Information
          Processing Awareness in Automated Insulin Delivery (AID) Systems.{" "}
          <b>ACM Transactions on Interactive Intelligent Systems, 13</b>(4),
          1–34.{" "}
          <a
            href="https://doi.org/10.1145/3588594"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1145/3588594
          </a>
        </li>

        <li>
          Bartlett, M. L., & McCarley, J. S. (2017). Benchmarking Aided Decision
          Making in a Signal Detection Task.{" "}
          <b>
            Human Factors: The Journal of the Human Factors and Ergonomics
            Society, 59
          </b>
          (6), 881–900.{" "}
          <a
            href="https://doi.org/10.1177/0018720817700258"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1177/0018720817700258
          </a>
        </li>

        <li>
          Warren, G., Smyth, B., & Keane, M. T. (2022). “Better”
          Counterfactuals, Ones People Can Understand: Psychologically-Plausible
          Case-Based Counterfactuals Using Categorical Features for Explainable
          AI (XAI). In M. T. Keane & N. Wiratunga (Eds.),{" "}
          <b>Case-Based Reasoning Research and Development</b> (Vol. 13405, pp.
          63–78). Springer International Publishing.{" "}
          <a
            href="https://doi.org/10.1007/978-3-031-14923-8_5"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1007/978-3-031-14923-8_5
          </a>
        </li>

        <li>
          Gianfagna, L., & Di Cecco, A. (2021). Explainable AI: Needs,
          Opportunities, and Challenges. In L. Gianfagna & A. Di Cecco,{" "}
          <b>Explainable AI with Python</b> (pp. 27–46). Springer International
          Publishing.{" "}
          <a
            href="https://doi.org/10.1007/978-3-030-68640-6_2"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1007/978-3-030-68640-6_2
          </a>
        </li>

        <li>
          Tonekaboni, S., Joshi, S., McCradden, M. D., & Goldenberg, A. (2019).
          What clinicians want: Contextualizing explainable machine learning for
          clinical end use. In F. Doshi-Velez, J. Fackler, K. Jung, D. Kale, R.
          Ranganath, B. Wallace, & J. Wiens (Eds.),{" "}
          <b>
            Proceedings of the 4th Machine Learning for Healthcare Conference
          </b>{" "}
          (Vol. 106, pp. 359–380). PMLR.{" "}
          <a
            href="https://proceedings.mlr.press/v106/tonekaboni19a.html"
            target="_blank"
            rel="noopener noreferrer">
            https://proceedings.mlr.press/v106/tonekaboni19a.html
          </a>
        </li>

        <li>
          Le, T., Miller, T., Singh, R., & Sonenberg, L. (2023). Explaining
          Model Confidence Using Counterfactuals.{" "}
          <b>
            Proceedings of the AAAI Conference on Artificial Intelligence, 37
          </b>
          (10), 11856–11864.{" "}
          <a
            href="https://doi.org/10.1609/aaai.v37i10.26399"
            target="_blank"
            rel="noopener noreferrer">
            https://doi.org/10.1609/aaai.v37i10.26399
          </a>
        </li>

        <li>
          Doshi-Velez, F., & Kim, B. (2017).{" "}
          <b>Towards A Rigorous Science of Interpretable Machine Learning</b>{" "}
          (No. arXiv:1702.08608). arXiv.{" "}
          <a
            href="http://arxiv.org/abs/1702.08608"
            target="_blank"
            rel="noopener noreferrer">
            http://arxiv.org/abs/1702.08608
          </a>
        </li>

        <li>
          Lundberg, S. M., Erion, G., Chen, H., DeGrave, A., Prutkin, J. M.,
          Nair, B., Katz, R., Himmelfarb, J., Bansal, N., & Lee, S.-I. (2019).
          <b>
            Explainable AI for Trees: From Local Explanations to Global
            Understanding
          </b>{" "}
          (No. arXiv:1905.04610). arXiv.{" "}
          <a
            href="http://arxiv.org/abs/1905.04610"
            target="_blank"
            rel="noopener noreferrer">
            http://arxiv.org/abs/1905.04610
          </a>
        </li>
      </ul>
    </section>,
  ],
};

const linksAndNames = [
  {
    link: WahrgenommeneAutonomie.linkName,
    name: WahrgenommeneAutonomie.name,
    description: WahrgenommeneAutonomie.description,
  },
  {
    link: WahrgenommenesSituationsbewusstsein.linkName,
    name: WahrgenommenesSituationsbewusstsein.name,
    description: WahrgenommenesSituationsbewusstsein.description,
  },
  {
    link: WahrgenommeneInformationOverload.linkName,
    name: WahrgenommeneInformationOverload.name,
    description: WahrgenommeneInformationOverload.description,
  },
  {
    link: PerceivedTrustworthiness.linkName,
    name: PerceivedTrustworthiness.name,
    description: PerceivedTrustworthiness.description,
  },
  {
    link: PerceivedConfidence.linkName,
    name: PerceivedConfidence.name,
    description: PerceivedConfidence.description,
  },
];

const sectionsIntro = [
  { id: "einleitung", title: "Einleitung" },
  { id: "aspekte", title: "Aspekte KI-bezogenen UX" },
  { id: "relevanz", title: "Warum diese relevant?" },
  { id: "ausblick", title: "Ausblick" },
];

const EinführungUXKI = {
  linkName: "einleitung-ki-bezogene-ux",
  name: "Einleitung KI-bezogene UX",
  description:
    "KI-Systeme machen mehr Aspekte für die User Experience relevant. Hier werden wichtige dieser KI-bezogenen UX Aspekte ein erstes mal angeführt.",
  content: [
    <ChapterHeader text={"Einleitung in KI-bezogene UX"} number={1} />,
    <section id="einleitung">
      <SubNavigation sections={sectionsIntro} />
      <p>
        In diesem Modul erläutert Tim Schrills konkretere UX-Aspekte, die beim
        Design und der Implementierung von KI-Systemen beachtet werden sollten.
      </p>
      <p>
        KI-Systeme greifen tief in unsere Informationsverarbeitung ein, was
        zusätzliche Aspekte für die User Experience (UX) relevant macht. Diese
        neuen Dimensionen sind essentiell, da sie direkt beeinussen, wie
        Menschen mit KI-Systemen interagieren und diese wahrnehmen. Mit der
        zunehmenden Integration von KI in alltägliche Systeme ist es
        entscheidend, KI-bezogene Aspekte in der UX zu berücksichtigen. Dazu
        werden in diesem Modul fünf wichtige Aspekte genannt und deren Relevanz
        für das Design und die Entwicklung von KI-Systemen erklärt.
      </p>
    </section>,
    <section>
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/dbBIEqBMudI?rel=0&modestbranding=1"
        }
        title={"Intro"}
      />
      <p className="mt-5">
        In der vorigen Lektion haben wir etablierte UX-Konstrukte betrachtet,
        die allgemeine Nutzererfahrungen beschreiben. KI-Systeme hingegen
        greifen tief in unsere Informationsverarbeitung ein, was zusätzliche
        Aspekte für die User Experience (UX) relevant macht. Diese neuen
        Dimensionen sind essentiell, da sie direkt beeinflussen, wie Menschen
        mit KI-Systemen interagieren und diese wahrnehmen.
      </p>
    </section>,
    <section id="aspekte">
      <h2>Wichtige Aspekte der KI-bezogenen UX</h2>
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
    <section id="relevanz">
      <h3>Warum sind diese Aspekte wichtig für die Automation-Related UX?</h3>
      <p>
        Mit der zunehmenden Integration von KI in alltägliche Systeme ist es
        entscheidend, diese Aspekte in der UX zu berücksichtigen. KI-Systeme
        übernehmen Aufgaben, die früher Menschen vorbehalten waren, und
        erfordern daher, dass Nutzer ein Gefühl von Kontrolle, Verständnis und
        Vertrauen behalten. Die Gestaltung von KI-Systemen muss sicherstellen,
        dass Nutzer die Systeme nicht nur effektiv nutzen, sondern sich auch
        sicher und autonom fühlen können.
      </p>
      <h4>Beispiel: KI-gestütztes Verkehrsmanagementsystem </h4>
      <p>
        Stellen Sie sich ein KI-gestütztes Verkehrsmanagementsystem vor. Dieses
        System analysiert Verkehrsdaten und schlägt Optimierungen für
        Ampelphasen vor. Nutzer wie Verkehrsingenieure müssen das System
        verstehen, seine Vorschläge bewerten und gegebenenfalls anpassen können.
        Hier ist es wichtig, dass das System Transparenz bietet, um das
        Situationsbewusstsein zu fördern, eine angenehme Menge an Informationen
        bereitstellt, um Überlastung zu vermeiden, und Vertrauen in die
        Automatisierung aufbaut.
      </p>
    </section>,
    <section id="ausblick">
      <h3>Was können Sie von dieser Lektion erwarten?</h3>
      <p>
        In den folgenden Kapiteln werden wir detailliert untersuchen, wie diese
        fünf Aspekte – Wahrgenommene Autonomie, Situationsbewusstsein, Mentale
        Arbeitsbelastung, Vertrauenswürdigkeit und Confidence/Diagnosticity –
        die Gestaltung und Nutzung von KI-Systemen beeinflussen. Wir werden
        sehen, wie diese Aspekte in der Praxis umgesetzt werden können und
        welche Designrichtlinien helfen, eine positive und effektive
        Mensch-KI-Interaktion zu fördern. Freuen Sie sich auf eine tiefere
        Auseinandersetzung mit den Herausforderungen und Chancen der
        KI-bezogenen UX!
      </p>
    </section>,
  ],
};

const UXKISections = {
  linkName: moduleLink,
  name: moduleName,
  moduleImage: ImageElement,
  content: [
    EinführungUXKI,
    WahrgenommeneAutonomie,
    WahrgenommenesSituationsbewusstsein,
    WahrgenommeneInformationOverload,
    PerceivedTrustworthiness,
    PerceivedConfidence,
    Zusammenfassung,
    Quellen,
  ],
};

export default UXKISections;
