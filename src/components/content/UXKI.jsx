import imageElement from "../../assets/svg/uxki_icon.svg";
import { ChapterHeader } from "../texts/ChapterHeader";
import { VideoContainer } from "../texts/VideoContainer";
import { Link } from "react-router-dom";
import "../SubTopic.css";

const moduleLink = "ki-bezogene-ux";
const moduleName = "KI bezogene UX";

const WahrgenommeneAutonomie = {
  linkName: "wahrgenommene-autonomie",
  name: "Wahrgenommene Autonomie",
  description:
    "Dieser Aspekt beschreibt, wie sehr Nutzende das Gefühl haben, selbstständig zu handeln und Entscheidungen zu treffen, während sie mit einem KI-System interagieren.",
  content: [
    <ChapterHeader text={"Wahrgenommene Autonomie"} number={2} />,
    <section>
      <VideoContainer link={""} title={"Wahrgenommene Autonomie Vidoe"} />
    </section>,
    <section>
      <h2>1. Definition von wahrgenommener Autonomie</h2>
      <p>
        Die <b>wahrgenommene Autonomie</b> beschreibt, inwiefern Nutzende eines
        KI-Systems das Gefühl haben, selbstständig handeln und Entscheidungen
        treffen zu können. Diese Wahrnehmung beeinflusst das Vertrauen in das
        System, die Interaktion damit und die Zufriedenheit der Nutzenden.
        Wesentlich ist, ob das System als transparent und unterstützend
        wahrgenommen wird oder ob es lediglich als ausführendes Werkzeug dient.
      </p>
    </section>,
    <section>
      <h2>2. Relevante Konzepte und Modelle</h2>
      <h4>Automatisierungsgrade:</h4>
      <p>
        Diese Strukturierung hilft zu verstehen, wie Menschen mit
        automatisierten Systemen interagieren. Verschiedene Stufen der
        Automatisierung beschreiben dabei, welche Aufgaben vom Menschen oder der
        Maschine übernommen werden.
      </p>
      <h4>Levels of Automation (LOA)</h4>
      <p>
        Ein Modell, das zehn Stufen der Aufgabenteilung und Verantwortlichkeit
        zwischen Mensch und Maschine beschreibt.
      </p>
      <h4>Society of Automotive Engineers (SAE)</h4>
      <p>
        Definiert fünf Stufen der Mensch-Maschine-Interaktion, die verschiedene
        Szenarien von Automatisierung berücksichtigen.
      </p>
      <h4>Einfluss der Automatisierung auf psychologische Variablen</h4>
      <p>
        Automatisierung kann Stress, Arbeitsbelastung, Arbeitszufriedenheit,
        Vertrauen und Situationsbewusstsein beeinflussen.
      </p>
      <h4>Vier Stufen der Informationsverarbeitung</h4>
      <p>
        Umfasst Informationsbeschaffung, Informationsanalyse,
        Entscheidungsfindung und Handlungsumsetzung.
      </p>
      <h4>Anpassbare vs. selbstanpassende Automatisierung</h4>
      <p>
        Systeme können entweder auf Nutzeranpassungen reagieren oder sich
        selbstständig an veränderte Bedingungen anpassen.
      </p>
      <h4>Automatisierungsbezogene Benutzererfahrung</h4>
      <p>
        Bezieht sich auf das Verhalten der Nutzenden in Bezug auf die
        Vertrauenswürdigkeit, Nachvollziehbarkeit und Nützlichkeit des Systems.
      </p>
      <h4>Einfluss der Automatisierung auf die menschliche Leistung</h4>
      <p>
        Parasuraman et al. (2000) haben vier zentrale Faktoren identifiziert,
        die beeinflussen, wie Automatisierung die menschliche Leistung
        beeinflussen kann:
      </p>
      <ol>
        <li>
          1. Situationsbewusstsein: Das Verständnis der aktuellen Umgebung und
          Situation durch den Menschen, welches durch Automatisierung entweder
          gefördert oder beeinträchtigt werden kann
        </li>
        <li>
          2. Vertrauen: Das Vertrauen der Nutzenden in das System ist
          entscheidend für eine erfolgreiche Interaktion und hängt stark von der
          wahrgenommenen Autonomie ab.
        </li>
        <li>
          3. Abbau von Fähigkeiten: Hohe Automatisierung kann zu einem Rückgang
          menschlicher Fähigkeiten führen, da weniger manuelle Eingriffe und
          Entscheidungen nötig sind.
        </li>
        <li>
          4. Arbeitsbelastung: Automatisierung kann die Arbeitsbelastung
          entweder reduzieren oder erhöhen, abhängig davon, wie gut sie an die
          Bedürfnisse der Nutzenden angepasst ist.
        </li>
      </ol>
      <h4>
        Rieger et al. (2022): Challenging presumed technological superiority
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
    </section>,
    <section>
      <h2>3. Studien zur User Experience und KI</h2>
      <h4>Kaber & Endsley</h4>
      <p>
        Untersuchten die Auswirkungen von adaptiver Automatisierung auf die
        Leistung des Menschen, das Situationsbewusstsein und die
        Arbeitsbelastung in dynamischen Umgebungen. Sie stellten fest, dass
        mittlere Automatisierungsstufen das Situationsbewusstsein fördern,
        jedoch nicht immer zu besserer Leistung führen.
      </p>
      <h4>Chapanis (1965)</h4>
      <p>
        Zeigte die Bedeutung der Funktionszuweisung zwischen Mensch und Maschine
        auf.
      </p>
      <h4>Selbstbestimmungstheorie (SDT)</h4>
      <p>
        Beschreibt die Bedeutung der Befriedigung der Bedürfnisse nach
        Autonomie, Kompetenz und sozialer Eingebundenheit für das Wohlbefinden
        und die Motivation der Nutzenden.
      </p>
      <h4>Studien zu Digitalen Kontaktverfolgungs-Apps und Automatisierung</h4>
      <p>
        Zeigten, dass die Wahrnehmung der Systemkomplexität und
        Fehleranfälligkeit die Nutzungsintention beeinflusst.
      </p>
    </section>,
    <section>
      <h2>4. Operationalisierung und Messinstrumente</h2>
      <h4>Preference for Automation Types Scale (PATS)</h4>
      <p>
        Ein Fragebogen zur Erfassung von Präferenzen der Nutzer hinsichtlich
        Automatisierungsaufgaben, basierend auf den Modellen von Parasuraman et
        al. (2000). Dieser misst, inwieweit Nutzer Automatisierung in
        verschiedenen Phasen der Informationsverarbeitung bevorzugen.
      </p>
      <h4>Basic Psychological Need Satisfaction for Technology Use (BPN-TU)</h4>
      <p>
        Ein Messinstrument, das die Erfüllung der psychologischen Bedürfnisse
        nach Autonomie, Kompetenz und sozialer Eingebundenheit erfasst und auf
        die Nutzung von Technologie anwendet.
      </p>
      <h4>NASA-TLX</h4>
      <p>
        Ein Instrument zur Messung der subjektiv wahrgenommenen Arbeitsbelastung
        in verschiedenen Szenarien, einschließlich automatisierter Systeme.
      </p>
    </section>,
    <section>
      <h2>5. Design-Guidelines für eine gute UX</h2>
      <h3>Adaptive Automatisierung ermöglichen</h3>
      <h4>
        <i>Beispiel: Verkehrsmanagementsysteme für städtischen Verkehr</i>
      </h4>
      <p>
        Ein städtisches Verkehrsmanagementsystem bietet verschiedene
        Automatisierungsstufen, wie z. B. die automatische Steuerung von Ampeln
        oder die manuelle Steuerung durch Verkehrsingenieure. Über eine
        benutzerfreundliche Oberfläche können die Verantwortlichen je nach
        Verkehrsaufkommen und speziellen Ereignissen die Automatisierungsstufe
        flexibel anpassen.
      </p>
      <h4>Nutzen:</h4>
      <p>
        Diese Anpassungsmöglichkeit erlaubt eine präzise und flexible Steuerung
        des Verkehrsflusses, reduziert Staus und priorisiert den öffentlichen
        Verkehr. Die Nutzenden behalten dabei die Kontrolle und können den
        Automatisierungsgrad individuell anpassen, was zu einem effizienteren
        und reibungsloseren Verkehrserlebnis führt.
      </p>
      <h3>Situationsbewusstsein unterstützen</h3>
      <h4>
        <i>Beispiel: Notfallmanagementsysteme in Städten</i>
      </h4>
      <p>
        Ein Notfallmanagementsystem liefert Echtzeitdaten zu städtischen
        Notfällen wie Verkehrsunfällen, Bränden oder Überschwemmungen. Es bietet
        automatisierte Empfehlungen für Evakuierungsrouten und Einsatzplanungen,
        die Einsatzleiter bei Bedarf manuell anpassen können.
      </p>
      <h4>Nutzen:</h4>
      <p>
        Dank der Echtzeitinformationen können Einsatzkräfte schnell und präzise
        Entscheidungen treffen. Die Kombination aus automatisierten Vorschlägen
        und menschlichem Eingriff auf mittleren Automatisierungsstufen sorgt für
        ein optimales Gleichgewicht zwischen Effizienz und Sicherheit.
      </p>
      <h3>Flexibilität bei der Informationsverarbeitung</h3>
      <h4>
        <i>Beispiel: Umweltüberwachungssysteme in Städten</i>
      </h4>
      <p>
        Ein Umweltüberwachungssystem erlaubt es den Nutzenden, die Art und Menge
        der überwachten Daten individuell festzulegen – etwa zur Überwachung der
        Luftqualität, Lärmbelastung oder Wasserverschmutzung. Nutzende können
        den Fokus je nach Dringlichkeit und Prioritäten anpassen und die
        Detailtiefe der Analysen steuern.
      </p>
      <h4>Nutzen:</h4>
      <p>
        Diese Flexibilität ermöglicht es den Nutzenden, auf spezifische
        Umweltfaktoren einzugehen und die Überwachung an aktuelle Bedürfnisse
        anzupassen. Dadurch wird eine maßgeschneiderte Umweltpolitik möglich,
        die effektiver auf akute Herausforderungen reagiert.
      </p>
      <h3>Transparenz sicherstellen</h3>
      <h4>
        <i>Beispiel: Medizinisches Diagnosetools</i>
      </h4>
      <p>
        Ein KI-basiertes Diagnosetool für Ärzte zeigt nicht nur die
        Diagnoseergebnisse, sondern auch die zugrunde liegenden Daten und die
        Logik hinter der Entscheidung an. Die Entscheidungswege werden
        visualisiert, und das System erklärt, warum bestimmte Diagnosen
        vorgeschlagen wurden.
      </p>
      <h4>Nutzen:</h4>
      <p>
        Diese Transparenz stärkt das Vertrauen der Ärzte in die KI, da sie genau
        nachvollziehen können, wie die Empfehlungen zustande kommen. Dies
        fördert einen effizienteren und informierten Entscheidungsprozess.
      </p>
      <h4>
        <i>Beispiel: Überwachungssysteme für den öffentlichen Verkehr</i>
      </h4>
      <p>
        Ein städtisches Verkehrssystem analysiert den Verkehrsfluss und erklärt
        transparent, wie Ampelschaltungen optimiert oder bestimmte Routen
        priorisiert werden.
      </p>
      <h4>Nutzen:</h4>
      <p>
        Durch die klare Kommunikation der Algorithmen und Entscheidungsprozesse
        wird das Vertrauen der Öffentlichkeit gestärkt. Nutzende können
        nachvollziehen, wie Entscheidungen getroffen wurden, was ihre Akzeptanz
        und das Gefühl der Autonomie im Umgang mit dem System verbessert.
      </p>
      <h3>Nutzerzentrierte Anpassung</h3>
      <h4>
        <i>Beispiel: Smart City Mobilitätsplattformen</i>
      </h4>
      <p>
        Eine Smart City Mobilitätsplattform ermöglicht es den Bürgern, ihre
        persönlichen Verkehrspräferenzen festzulegen – von bevorzugten
        Verkehrsmitteln über favorisierte Routen bis hin zu umweltbewussten
        Zielen wie der Reduzierung des CO2-Fußabdrucks. Die Plattform generiert
        daraufhin maßgeschneiderte Vorschläge, z. B. alternative Verkehrsmittel
        oder Fahrgemeinschaften, die den individuellen Präferenzen der Nutzenden
        entsprechen.
      </p>
      <h4>Nutzen:</h4>
      <p>
        Diese nutzerzentrierte Anpassung gibt den Bürgern das Gefühl der
        Kontrolle über ihre Mobilitätsentscheidungen. Das Ergebnis ist eine
        höhere Zufriedenheit, da die Plattform auf persönliche Vorlieben
        eingeht. Gleichzeitig unterstützt die Lösung städtische Ziele zur
        Förderung nachhaltiger Mobilität.
      </p>
    </section>,
    <section>
      <h2>Fazit</h2>
      <p>
        Die wahrgenommene Autonomie in der Interaktion mit KI-Systemen ist
        entscheidend für die Nutzerzufriedenheit und das Vertrauen. Die Konzepte
        und Modelle zeigen, dass unterschiedliche Stufen der Automatisierung und
        Anpassungsfähigkeit Einfluss auf die psychologische Wahrnehmung haben.
        Studien verdeutlichen, dass Transparenz, Flexibilität und die
        Möglichkeit zur Anpassung der Automatisierungsgrade die wahrgenommene
        Autonomie stärken. Die Anwendung entsprechender Designrichtlinien, wie
        adaptive Automatisierung und transparente Entscheidungsprozesse, fördert
        ein Gefühl der Kontrolle und Selbstbestimmung, was zu einer effektiveren
        und zufriedenstellenderen Nutzung von KI-Systemen führt.
      </p>
    </section>,
  ],
};

const WahrgenommenesSituationsbewusstsein = {
  linkName: "wahrgenommenes-situationsbewusstsein",
  name: "Wahrgenommenes Situationsbewusstsein",
  description:
    "Dies bezieht sich auf das Verständnis der Nutzende über ihre Umgebung und die Änderungen, die durch das KI-System verursacht werden.",
  content: [
    <ChapterHeader
      text={"Wahrgenommenes Situationsbewusstsein (SA)"}
      number={3}
    />,
    <section>Video</section>,
    <section>
      <h2>1. Definition Situationsbewusstsein (SA)</h2>
      <p>
        Situationsbewusstsein (Situational Awareness, SA) ist das Verständnis
        der Umgebung und ihrer Elemente sowie der Veränderungen, die im Laufe
        der Zeit oder durch externe Faktoren auftreten können. Diese Fähigkeit
        ist grundlegend für effektive Entscheidungsfindung in vielen Bereichen.
      </p>
    </section>,
    <section>
      <h2>2. Konzepte und Modelle</h2>
      <p>Situationsbewusstsein umfasst laut Endsley drei Ebenen:</p>
      <ol>
        <li>
          1. Wahrnehmung (Perception): Die Erfassung der relevanten
          Informationen in einer Umgebung.
        </li>
        <li>
          2. Verständnis (Comprehension): Die Interpretation und das Verstehen
          der Bedeutung dieser Informationen.
        </li>
        <li>
          3. Projektion (Projection): Die Fähigkeit, vorherzusagen, wie sich die
          Umgebung aufgrund dieser Informationen verändern könnte.
        </li>
      </ol>
      <p>
        Diese drei Ebenen korrespondieren mit den SIPA-Facetten (Subjective
        Information Processing Awareness):
      </p>
      <ul>
        <li>Transparenz</li>
        <li>Verständlichkeit</li>
        <li>Vorhersehbarkeit</li>
      </ul>
      <p>
        Das <i>HASO-Modell</i> von Endsley betont ebenfalls diese drei
        wesentlichen Eigenschaften von Automatisierungssystemen, da sie direkt
        mit der Situationswahrnehmung der Nutzenden verknüpft sind.
      </p>
      <p>Zentrale Konzepte:</p>
      <ul>
        <li>
          Transparenz: Das System muss klar kommunizieren, wie es zu seinen
          Entscheidungen gelangt.
        </li>
        <li>
          Verständlichkeit: Die Darstellung der Informationen muss leicht
          nachvollziehbar sein.
        </li>
        <li>
          Vorhersehbarkeit: Nutzende müssen einschätzen können, wie das System
          sich unter bestimmten Bedingungen verhalten wird.
        </li>
      </ul>
    </section>,
    <section>
      <h2>3. Existierende Studien zu UX und KI</h2>
      <p>
        Studien wie die von <b>Edgar et al.</b> untersuchen das
        Situationsbewusstsein in der Mensch-Maschine-Interaktion. Sie berechnen
        das wahrgenommene Situationsbewusstsein basierend auf der
        Vertrauensbewertung von Nutzenden, nachdem diese wahre oder falsche
        Aussagen beurteilt haben. Endsley betont, dass Transparenz,
        Verständlichkeit und Vorhersehbarkeit entscheidend für die
        Aufrechterhaltung des Situationsbewusstseins und des Vertrauens in
        automatisierte Systeme sind. In der <b>Studie I</b> zur User Experience
        in Digital Contact Tracing (DCT) wurde gezeigt, dass das subjektive
        Situationsbewusstsein der Nutzenden stärker mit der wahrgenommenen
        Nützlichkeit korreliert als das faktische Situationsbewusstsein. Die
        <b>Studie II</b> zur Automatisierung bei der Insulinverabreichung ergab,
        dass eine zu hohe Informationsoffenlegung zu einer Fehlkalibrierung
        zwischen der subjektiven Wahrnehmung der Nachvollziehbarkeit und der
        tatsächlichen Systemleistung führen kann.
      </p>
    </section>,
    <section>
      <h2>4. Operationalisierung: Fragebögen und Messinstrumente</h2>
      <p>
        Ein gängiges Messinstrument für perceived situation awareness ist{" "}
        <b>SIPA (Subjective Information Processing Awareness)</b>. Es bewertet
        die Benutzererfahrung in Bezug auf die Fähigkeit, die
        Informationsverarbeitung eines Systems zu erfassen, zu verstehen und
        vorherzusagen.
      </p>
      <p>
        Ein nützliches Instrument zur Bewertung des wahrgenommenen
        Situationsbewusstseins ist die{" "}
        <b>Situation Awareness Rating Technique (SART)</b>, die 1990 entwickelt
        wurde. Diese Methode misst die wahrgenommene Situationswahrnehmung der
        Nutzenden in verschiedenen Kontexten.
      </p>
    </section>,
    <section>
      <h2>Deisgn-Guidelines zur Förderung des Situationsbewusstseins</h2>
      <h4>Transparenz sicherstellen</h4>
      <p>
        Systeme sollten alle relevanten Elemente der Informationsverarbeitung
        offenlegen und den Nutzenden zugänglich machen. <br />{" "}
        <i>
          Beispiel: Ein KI-gestütztes Dashboard für Ärzte zeigt visuell, welche
          Daten zur Diagnosestellung verwendet wurden.
        </i>{" "}
      </p>
      <h4>Verständlichkeit fördern</h4>
      <p>
        Intuitive Benutzeroberflächen und kontextbezogene Hilfen sollten die
        Nutzung von Systemen erleichtern. <br />{" "}
        <i>
          Beispiel: Medizinische Diagnose-Tools heben die wichtigsten
          Informationen hervor und bieten Hilfetexte zur Erklärung komplexer
          Funktionen.
        </i>{" "}
      </p>
      <h4>Vorhersehbarkeit verbessern</h4>
      <p>
        Systeme sollten Rückmeldungen geben, die die Auswirkungen von Handlungen
        aufzeigen, z. B. durch Simulationen oder Vorschauen. <br />
        <i>
          Beispiel: Ein System zur Verkehrssteuerung könnte simulieren, wie sich
          geänderte Ampelphasen auf den Verkehr auswirken, bevor sie tatsächlich
          implementiert werden.
        </i>
      </p>
      <p>
        Diese Maßnahmen tragen dazu bei, das Vertrauen und das
        Situationsbewusstsein der Nutzenden in der Interaktion mit KI-Systemen
        zu erhöhen und somit effektivere und fundiertere Entscheidungen zu
        ermöglichen.
      </p>
    </section>,
    <section>
      <h2>Fazit</h2>
      <p>
        In dieser Einheit haben wir das Konzept des Situationsbewusstseins (SA)
        und dessen Bedeutung für die Interaktion mit KI-Systemen behandelt.
        Situationsbewusstsein umfasst die Wahrnehmung, das Verständnis und die
        Projektion relevanter Informationen. Die Modelle von Endsley und die
        SIPA-Facetten betonen die Notwendigkeit von Transparenz,
        Verständlichkeit und Vorhersehbarkeit für effektives
        Situationsbewusstsein. Studien zeigen, dass ein hohes Maß an Transparenz
        und verständlicher Informationsdarstellung das subjektive
        Situationsbewusstsein verbessert, während übermäßige
        Informationsoffenlegung zu Fehlinterpretationen führen kann. Die
        Implementierung von Designrichtlinien, die diese Elemente
        berücksichtigen, fördert ein besseres Situationsbewusstsein und
        unterstützt die Nutzer bei fundierten Entscheidungen in der Interaktion
        mit KI-Systemen.
      </p>
    </section>,
  ],
};

const WahrgenommeneInformationOverload = {
  linkName: "mental-workload",
  name: "Mental Workload",
  description:
    "Dieser Aspekt umfasst den kognitiven Aufwand, der erforderlich ist, um Informationen zu verarbeiten und Entscheidungen zu treffen, und die potenzielle Überlastung durch zu viele Informationen.",
  content: [
    <ChapterHeader text={"Mental Workload"} number={4} />,
    <section>video</section>,
    <section>
      <h2>1. Definition: Mentale Arbeitsbelastung</h2>
      <p>
        <i>Mentale Arbeitsbelastung</i> beschreibt den kognitiven Aufwand, der
        nötig ist, um eine Aufgabe zu erledigen. Sie umfasst die geistigen
        Anstrengungen, die notwendig sind, um Informationen zu verarbeiten,
        Entscheidungen zu treffen und Aktionen durchzuführen.
      </p>
    </section>,
    <section>
      <h2>2. Konzepte und Modelle</h2>
      <p>
        Ein wichtiges Konzept in diesem Zusammenhang ist die Irony of
        Automation. Dieses Konzept beschreibt den paradoxen Effekt, dass
        Automatisierungssysteme zwar darauf ausgelegt sind, Aufgaben zu
        vereinfachen, sie aber durch umfangreiche Erklärungen und
        Zusatzinformationen die mentale Arbeitsbelastung der Nutzenden erhöhen
        können.
      </p>
    </section>,
    <section>
      <h2>3. Existierende Studien zu UX und KI</h2>
      <p>
        Eine Studie zur Automatisierung von Insulinverabreichungssystemen
        (AID-Systeme) zeigt, dass zu viele oder zu detaillierte Erklärungen in
        diesen Systemen zu einer Überlastung der Nutzenden führen können. Dies
        beeinträchtigt die Entscheidungsfindung und erhöht die kognitive
        Belastung. Insbesondere zeigte sich, dass Systeme mit hoher
        Informationsoffenlegung nicht immer zu besseren Ergebnissen führten,
        sondern manchmal genau das Gegenteil bewirkten.
      </p>
    </section>,
    <section>
      <h2>4. Operationalisierung: Messinstrumente</h2>
      <p>
        Eine weit verbreitete Methode zur Messung der{" "}
        <i>perceived mental workload</i>
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
      <p>
        Der NASA-TLX ist eine hilfreiche Methode, um die kognitive Belastung in
        verschiedenen Arbeitsumgebungen, einschließlich der Nutzung von
        KI-Systemen, zu erfassen.
      </p>
    </section>,
    <section>
      <h2>5. Design-Guidelines zur Reduktion der kognitiven Belastung</h2>
      <h4>Vereinfachung von Informationen</h4>
      <p>
        Informationen sollten minimalistisch dargestellt und nur schrittweise
        offengelegt werden, um die kognitive Belastung zu reduzieren. <br />
        <i>
          Beispiel: Ein KI-gestütztes Dashboard zeigt nur die wesentlichen
          Informationen und blendet zusätzliche Details bei Bedarf ein.
        </i>
      </p>
      <h4>Anpassbarkeit der Informationsmenge</h4>
      <p>
        Systeme sollten es den Nutzenden ermöglichen, die Menge an Informationen
        anzupassen, die sie benötigen, um Entscheidungen zu treffen. <br />
        <i>
          Beispiel: Personalisierte Einstellungen, die es den Nutzenden
          erlauben, festzulegen, wie viele Details sie sehen möchten.
        </i>
      </p>
      <h4>Fokussierung auf kritische Informationen</h4>
      <p>
        Das System sollte kontextbezogen die wichtigsten Informationen
        priorisieren. <br />
        <i>
          Beispiel: In einem Verkehrsleitsystem werden in einer Notfallsituation
          nur die kritischsten Daten hervorgehoben, wie z. B. gesperrte Straßen
          oder gefährliche Wetterbedingungen.
        </i>
      </p>
      <h4>Reduktion der kognitiven Belastung durch Automatisierung</h4>
      <p>
        Routinetätigkeiten sollten automatisiert werden, um die geistige
        Anstrengung der Nutzenden zu minimieren. <br />
        <i>
          Beispiel: Ein KI-System im Verwaltungsbereich könnte die automatische
          Überprüfung von Anträgen übernehmen, sodass sich Mitarbeitende auf
          Ausnahmen und komplexe Fälle konzentrieren können.
        </i>
      </p>
      <h4>Berücksichtigung der "Irony of Automation"</h4>
      <p>
        KI-Systeme sollten vermeiden, die Nutzenden mit unnötig vielen
        Erklärungen oder Informationen zu überfordern. <br />
        <i>
          Beispiel: Ein Gesundheitssystem sollte nur die wichtigsten Erklärungen
          anzeigen und die Möglichkeit bieten, weitere Details auf Wunsch
          einzublenden.
        </i>
      </p>
      <h4>Kontextsensitives Feedback</h4>
      <p>
        Systeme sollten erkennen, wenn die Nutzenden überfordert sind, und
        Hilfestellungen oder eine reduzierte Informationsmenge anbieten. <br />
        <i>
          Beispiel: Ein KI-gestütztes Support-System könnte bei längeren
          Wartezeiten oder wiederholtem Suchen nach denselben Informationen ein
          Pop-up mit Hilfe anbieten.
        </i>
      </p>
      <p>
        Durch die Anwendung dieser Designrichtlinien kann die mentale
        Arbeitsbelastung in KI-Systemen signifikant reduziert werden, was sowohl
        die Effizienz als auch das Wohlbefinden der Nutzenden verbessert.
      </p>
    </section>,
    <section>
      <h2>Fazit</h2>
      <p>
        In dieser Einheit haben wir die Konzepte der mentalen Arbeitsbelastung
        und Information Overload im Kontext von KI-Systemen behandelt. Mentale
        Arbeitsbelastung bezieht sich auf den kognitiven Aufwand, der zur
        Bearbeitung von Aufgaben erforderlich ist. Die Irony of Automation
        zeigt, dass Automatisierung nicht immer zu einer Reduzierung der
        kognitiven Belastung führt, sondern diese durch übermäßige Informationen
        erhöhen kann. Messinstrumente wie der NASA Task Load Index helfen, diese
        Belastung zu bewerten. Designrichtlinien zur Reduzierung der kognitiven
        Belastung umfassen die Vereinfachung von Informationen, Anpassbarkeit
        der Informationsmenge, Fokussierung auf kritische Daten und die
        Berücksichtigung der Ironie der Automatisierung. Durch die Anwendung
        dieser Prinzipien kann die Effizienz der Nutzerinteraktion mit
        KI-Systemen verbessert werden.
      </p>
    </section>,
  ],
};

const PerceivedTrustworthiness = {
  linkName: "perceived-trustworthiness",
  name: "Perceived Trustworthiness",
  description:
    "Die Wahrnehmung, wie zuverlässig Nutzende ein KI-System empfinden, und wie gut es ihre Bedürfnisse erfüllt. ",
  content: [
    <ChapterHeader text={"Perceived Trustworthiness"} number={5} />,
    <section>Video</section>,
    <section>
      <h2>1. Definition: Perceived Trustworthiness</h2>
      <p>
        Im Kontext von KI-Systemen bezieht sich <i>perceived trustworthiness</i>{" "}
        auf das Vertrauen, das Nutzende in ein KI-System haben, basierend auf
        ihrer Wahrnehmung von dessen Zuverlässigkeit, Verständlichkeit und
        ethischen Handlungen. Vertrauen wird dabei definiert als die
        Bereitschaft, sich auf die Handlungen eines Systems zu verlassen, ohne
        die Möglichkeit, das System direkt zu überwachen oder zu kontrollieren.
        Vertrauen ist eine zentrale Komponente bei der Akzeptanz von KI-Systemen
        und beeinflusst maßgeblich die Nutzung. Besonders im Bereich der
        Künstlichen Intelligenz (KI) und der Erklärbaren Künstlichen Intelligenz
        (XAI) spielen ethische und soziale Überlegungen eine große Rolle.
      </p>
    </section>,
    <section>
      <h2>2. Konzepte und Modelle</h2>
      <h4>a) Mayer et al. (1995)</h4>
      <p>Drei Schlüsselfaktoren des Vertrauens in Systeme:</p>
      <ul>
        <li>
          Fähigkeit (Ability): Die Kompetenz und Fertigkeiten des Systems, seine
          Aufgaben korrekt auszuführen.
        </li>
        <li>
          Wohlwollen (Benevolence): Das Maß, in dem das System im besten
          Interesse des Nutzers handelt.
        </li>
        <li>
          Integrität (Integrity): Das Vertrauen, dass das System nach ethischen
          Prinzipien und Regeln handelt.
        </li>
      </ul>
      <h4>b) Lee (2004)</h4>
      <p>
        Vertrauen wird als die Einstellung beschrieben, dass ein System dabei
        hilft, die Ziele einer Person in einer unsicheren Situation zu
        erreichen. Er unterteilt es in:
      </p>
      <ul>
        <li>
          Leistung (Performance): Die Genauigkeit und Zuverlässigkeit des
          Systems.
        </li>
        <li>
          Zweck (Purpose): Die Ziele und Absichten, die das System verfolgt.
        </li>
        <li>
          Prozess (Process): Die Methoden und Verfahren, die das System
          verwendet.
        </li>
      </ul>
      <h4>c) Madsen und Gregor (2000)</h4>
      <p>Sie unterscheiden zwischen:</p>
      <ul>
        <li>
          Kognitionsbasiertes Vertrauen: Basierend auf den wahrgenommenen
          Eigenschaften des Systems, wie Zuverlässigkeit und Verständlichkeit.
          Wenn das System beispielsweise transparent ist und nachvollziehbare
          Entscheidungen trifft, steigt das Vertrauen.{" "}
        </li>
        <li>
          Affektives Vertrauen: Emotionale Bindungen oder persönliche
          Erfahrungen mit dem System fördern das Vertrauen, besonders bei
          sprachbasierten Assistenzsystemen oder Robotern.
        </li>
      </ul>
      <h4>d) Hoff und Bashir (2015)</h4>
      <p>
        Das Modell des Vertrauens in die Automatisierung beschreibt drei
        Dimensionen:
      </p>
      <ul>
        <li>
          Dispositionelles Vertrauen: Eine allgemeine Neigung des Nutzers,
          Automatisierung aufgrund von Persönlichkeit oder früheren Erfahrungen
          zu vertrauen.
        </li>
        <li>
          Situatives Vertrauen: Durch den Kontext der Nutzung beeinflusst.
        </li>
        <li>
          Erlerntes Vertrauen: Entwickelt sich über die Zeit durch die
          Interaktionen mit dem System.
        </li>
      </ul>
      <p>
        Ein zentrales Konzept hier ist die Rolle von Transparenz und
        Nachvollziehbarkeit. Ein Mangel an diesen Eigenschaften führt zu
        Misstrauen, während sie das Vertrauen stärken, wenn sie vorhanden sind.
      </p>
      <h4>e) Weitere Modelle:</h4>
      <ul>
        <li>
          Schlicker und Langer zeigen, dass externe Hinweise, wie der Ruf des
          Herstellers oder das Verhalten anderer Nutzer, das Vertrauen
          beeinflussen.
        </li>
        <li>
          Vertrauen kann durch die wahrgenommene Validität der Daten,
          Übereinstimmung mit den Zielen des Nutzers und die Diagnostik der
          Ergebnisse gestärkt oder geschwächt werden. Fehlt Transparenz in
          diesen Bereichen, kann das Situationsbewusstsein beeinträchtigt und
          das Vertrauen geschwächt werden.
        </li>
      </ul>
    </section>,
    <section>
      <h2>3. Existierende Studien zu UX und KI</h2>
      <p>
        Studien im Bereich der User Experience und KI beleuchten, wie das
        Vertrauen in automatisierte Systeme beeinflusst wird. Beispielsweise
        zeigen Untersuchungen zu kontaktverfolgenden Apps (Digital Contact
        Tracing) und automatisierten Insulinverabreichungssystemen (AID), dass
        Vertrauen oft von der Transparenz der Entscheidungen und der
        Verständlichkeit der Systeme abhängt. Eine Studie von Abbaspour Onari et
        al. (2023) zeigt, wie mentaler Modelle von Nutzenden zur Messung des
        Vertrauens in XAI-Systeme beitragen können.
      </p>
    </section>,
    <section>
      <h2>4. Operationalisierung (Fragebögen / Messinstrumente)</h2>
      <ul>
        <li>
          NASA-TLX: Misst die kognitive Belastung und hilft zu verstehen, wie
          sich diese auf das Vertrauen auswirkt.
        </li>
        <li>
          Trust in Automation (TiA)-Skala von Jian et al. (2001): Misst das
          Vertrauen in Systeme anhand von drei Subskalen:
          <ul>
            <li>
              Datengültigkeit: Wie valide und zuverlässig sind die zugrunde
              liegenden Daten?
            </li>
            <li>
              Zielkongruenz: Verfolgt das System dieselben Ziele wie der Nutzer?
            </li>
            <li>
              Ergebnisdiagnostik: Wie genau sind die Ergebnisse, die das System
              liefert?
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Weitere Messinstrumente bewerten, wie gut das System die Erwartungen
        erfüllt und wie kontrollierbar es erscheint.
      </p>
    </section>,
    <section>
      <h2>5. Design-Guidelines</h2>
      <p>
        Um das Vertrauen in KI-Systeme zu fördern, sollten folgende
        Designprinzipien beachtet werden:
      </p>
      <h4>Förderung von Transparenz und Verständlichkeit</h4>
      <p>
        Erklärbare KI (XAI) sorgt dafür, dass die Entscheidungen des Systems
        klar und nachvollziehbar sind. <br />
        <i>
          Beispiel: Ein Finanzplanungssystem, das seine Berechnungen offenlegt
          und erklärt, welche Parameter berücksichtigt wurden.
        </i>
      </p>
      <h4>Sicherstellung von Systemleistung und Zuverlässigkeit</h4>
      <p>
        Systeme müssen verlässlich arbeiten und in Echtzeit Rückmeldungen geben.
        <br />
        <i>
          Beispiel: Ein medizinisches KI-System sollte bei der Diagnose klare
          Fehlerindikatoren und Bestätigungen anzeigen, um Vertrauen in die
          Ergebnisse zu schaffen.
        </i>
      </p>
      <h4>Stärkung des dispositionellen Vertrauens</h4>
      <p>
        Schulungen und Einführungen in die Nutzung eines Systems helfen,
        dispositionelles Vertrauen aufzubauen.
        <br />
        <i>
          Beispiel: Nutzerfreundliche Tutorials für ein neues KI-gestütztes
          Verwaltungssystem.
        </i>
      </p>
      <h4>Förderung von affektivem Vertrauen</h4>
      <p>
        Personalisierung der Nutzererfahrung und eine positive User Experience
        (UX) tragen dazu bei, affektives Vertrauen zu fördern.
        <br />
        <i>
          Beispiel: Ein Sprachassistenzsystem, das auf personalisierte
          Präferenzen eingeht, um eine emotionalere Bindung zu fördern.
        </i>
      </p>
      <h4>Integration sozialer Hinweise</h4>
      <p>
        Social Proof und der Ruf des Herstellers beeinflussen das Vertrauen.
        <br />
        <i>
          Beispiel: Wenn ein Unternehmen für seine ethischen Prinzipien bekannt
          ist, steigt das Vertrauen der Nutzenden in dessen Systeme.
        </i>
      </p>
      <p>
        Durch die Anwendung dieser Designrichtlinien kann die wahrgenommene
        Vertrauenswürdigkeit von KI-Systemen erheblich gesteigert werden, was
        letztlich die Akzeptanz und Nutzung dieser Systeme fördert.
      </p>
    </section>,
    <section>
      <h2>Fazit</h2>
      <p>
        In dieser Lerneinheit haben wir die Bedeutung von Perceived
        Trustworthiness in KI-Systemen untersucht. Vertrauen ist entscheidend
        für die Akzeptanz von KI und basiert auf der Wahrnehmung der
        Zuverlässigkeit, Transparenz und ethischen Integrität des Systems.
        Schlüsselfaktoren wie die Kompetenz des Systems, das Wohlwollen und die
        Integrität spielen eine zentrale Rolle. Um das Vertrauen zu stärken,
        sollten Entwickler auf Transparenz, Systemzuverlässigkeit und positive
        Nutzererfahrungen achten. Gute Designpraktiken und klare Kommunikation
        sind entscheidend, um das Vertrauen der Nutzer zu gewinnen und zu
        erhalten.
      </p>
    </section>,
  ],
};

const PerceivedConfidence = {
  linkName: "perceived-confidence",
  name: "Perceived Confidence / Diagnosticity",
  description:
    "Dies beschreibt das Vertrauen der Nutzende in die Diagnosen oder Vorschläge des KI-Systems und wie gut diese die gewünschten Ergebnisse liefern. ",
  content: [
    <ChapterHeader text={"Perceived Confidence / Diagnosticity"} number={6} />,
    <section>
      <h2>1. Definition: Diagnosticity</h2>
      <p>
        <i>Diagnosticity</i> beschreibt die Fähigkeit eines Systems,
        Informationen so zu präsentieren, dass Nutzende auf ihrer Grundlage
        klare Entscheidungen treffen können. Das System sollte helfen, die
        Wahrscheinlichkeit einer Hypothese zu bewerten und auf dieser Basis eine
        fundierte Entscheidung zu treffen. Wie Wickens und Scott (1983)
        erläutern, verändert Diagnostizität die relativen Wahrscheinlichkeiten
        von Hypothesen – ähnlich wie das Auftreten von Fieber die
        Wahrscheinlichkeit für eine Grippe im Vergleich zu einer Erkältung
        erhöht. Eine hohe Diagnostizität führt zu besseren Entscheidungen und
        höherem Vertrauen in das System.
      </p>
      <h4>Beispiel:</h4>
      <p>
        Ein KI-System im Gesundheitswesen, das bei Symptomen wie Fieber hilft,
        die Wahrscheinlichkeit für verschiedene Krankheiten (z.B. Grippe oder
        Erkältung) abzuwägen, erhöht die Diagnostizität, indem es spezifische
        Informationen liefert, die den Entscheidungsprozess leiten. Je klarer
        die Beweise sind, desto höher ist die diagnostische Qualität.
      </p>
    </section>,
    <section>
      <h2>2. Konzepte und Modelle</h2>
      <h4>a) Schrills et al.</h4>
      <p>
        Sie betonen, dass die <i>wahrgenommene Ergebnisdiagnostik</i> einen
        entscheidenden Einfluss auf die Vertrauenswürdigkeit und die
        Nutzungsabsicht von Systemen hat. Insbesondere bei Digital Contact
        Tracing (DCT)-Apps zur Nachverfolgung von Pandemiekontakten spielt
        Diagnostizität eine Schlüsselrolle. Hier zeigt sich, dass die Nutzer
        detaillierte und klare Informationen bevorzugen, da dies das Vertrauen
        in die Genauigkeit und Nützlichkeit der App stärkt.
      </p>
      <h4>b) Miller</h4>
      <p>
        Er betont, dass intelligente Systeme darauf abzielen sollten, die
        Fähigkeit der Nutzenden zu verbessern, auf Informationen zuzugreifen und
        diese zu nutzen. Anstatt lediglich Ergebnisse zu präsentieren, sollte
        das System die Information so aufbereiten, dass sie zur
        Entscheidungsfindung beiträgt und dabei die unterschiedlichen Hypothesen
        verdeutlicht. Dies hilft, sowohl Vertrauen als auch die
        Entscheidungsqualität zu verbessern.
      </p>
      <h4>c) Einfluss auf das Vertrauen</h4>
      <p>
        Studien zeigen, dass die Diagnostizität eines KI-Systems das Vertrauen
        der Nutzenden maßgeblich beeinflusst. Wenn die bereitgestellten
        Informationen klar und unterscheidbar sind, neigen die Nutzer eher dazu,
        der KI zu vertrauen und ihre Vorschläge anzunehmen. Fehlt diese
        Klarheit, wird das Vertrauen geschwächt, was die Akzeptanz des Systems
        gefährdet.
      </p>
    </section>,
    <section>
      <h2>3. Existierende Studien zu UX und KI</h2>
      <p>
        Ein Beispiel für den Einsatz von KI in der Nutzererfahrung ist die
        Untersuchung der Automatisierungsbezogenen UX bei digitalen
        Kontaktverfolgungs-Apps (Study I). Hier wurde gezeigt, dass Nutzer
        detaillierte Informationen über potenzielle Kontakte bevorzugen,
        insbesondere diagnostische Informationen wie das Tragen einer Maske
        während einer Pandemie. Je diagnostischer die Informationen, desto höher
        die Zufriedenheit und das Vertrauen der Nutzenden.
      </p>
    </section>,
    <section>
      <h2>4. Operationalisierung (Fragebögen / Messinstrumente)</h2>
      <p>
        Zur Messung der wahrgenommenen Diagnostizität existieren verschiedene
        Methoden:
      </p>
      <ul>
        <li>
          Wahrgenommene Ergebnisdiagnostik: Hier wird erfasst, inwieweit die
          Nutzer der Meinung sind, dass die bereitgestellten Informationen
          fundiert sind und zu einer besseren Entscheidungsfindung beitragen.
        </li>
        <li>
          Fragebögen zur Messung von Vertrauenswürdigkeit und Diagnostizität:
          Diese Instrumente bewerten, wie präzise und klar die Informationen
          eines Systems wahrgenommen werden und wie stark sie das Vertrauen der
          Nutzer beeinflussen.
        </li>
      </ul>
    </section>,
    <section>
      <h2>5. Design-Guidelines</h2>
      <p>
        Um die Diagnostizität von KI-Systemen zu verbessern und das Vertrauen
        der Nutzenden zu stärken, sollten folgende Designprinzipien
        berücksichtigt werden:
      </p>
      <h4>Bereitstellung relevanter Informationen</h4>
      <p>
        Die bereitgestellten Informationen sollten direkt auf die
        Entscheidungsfindung der Nutzenden abzielen, insbesondere in Bereichen
        wie Gesundheitsvorsorge oder öffentliche Sicherheit. Die Informationen
        müssen präzise und nachvollziehbar sein.
        <br />
        <i>
          Beispiel: Ein System zur Kontaktverfolgung könnte genaue Details zu
          Risikokontakten (z.B. Maskennutzung oder Dauer des Kontakts)
          bereitstellen, um die Diagnosequalität zu erhöhen.
        </i>
      </p>
      <h4>Visuelle Unterstützung nutzen</h4>
      <p>
        Informationen sollten visuell klar dargestellt werden, sodass auch
        Menschen mit Beeinträchtigungen Zugang zu präzisen Daten haben.
        Barrierefreie Darstellungen helfen dabei, die diagnostische Information
        verständlich zu vermitteln.
        <br />
        <i>
          Beispiel: Ein Gesundheitsmonitor könnte durch Diagramme und Symbole
          zeigen, wie sich bestimmte Symptome auf die Diagnosewahrscheinlichkeit
          auswirken.
        </i>
      </p>
      <h4>Transparente Erklärungen bieten</h4>
      <p>
        Es ist entscheidend, dass die bereitgestellten Informationen klar
        erklärt werden. Nutzer sollten verstehen, warum eine bestimmte
        Information relevant ist und wie sie zu einer fundierten Entscheidung
        beiträgt.
        <br />
        <i>
          Beispiel: Eine Gesundheitsanwendung, die erklärt, wie und warum
          Symptome wie Fieber auf eine bestimmte Krankheit hinweisen, erhöht die
          Klarheit der Diagnose.
        </i>
      </p>
      <h4>Kontextualisierte Hilfe bieten</h4>
      <p>
        Personalisierte Unterstützung, die auf die spezifischen Bedürfnisse der
        Gemeinschaft oder der Nutzenden abgestimmt ist, kann die Diagnostizität
        verbessern.
        <br />
        <i>
          Beispiel: Ein Notfallsystem, das spezifische Handlungsempfehlungen auf
          Basis lokaler Gesundheitsdaten gibt.
        </i>
      </p>
      <h4>Feedback-Mechanismen integrieren</h4>
      <p>
        Nutzer sollten die Möglichkeit haben, Feedback zu geben, insbesondere in
        Bereichen wie Gesundheit oder Sicherheit, wo präzise Informationen
        entscheidend sind. Dies ermöglicht eine kontinuierliche Verbesserung der
        Diagnostizität.
        <br />
        <i>
          Beispiel: Ein Kontaktverfolgungssystem könnte Nutzern die Möglichkeit
          bieten, die Genauigkeit der bereitgestellten Risikoinformationen zu
          bewerten.
        </i>
      </p>
      <h4>Nutzerzentrierte Anpassungen ermöglichen</h4>
      <p>
        Systeme sollten anpassbar sein, um den individuellen Bedürfnissen und
        Präferenzen der Nutzenden gerecht zu werden. Personalisierte
        Empfehlungen oder maßgeschneiderte Informationen erhöhen das Vertrauen
        in die Diagnosen des Systems.
        <br />
        <i>
          Beispiel: Gesundheits-Apps, die Empfehlungen auf Basis der
          persönlichen Gesundheitsgeschichte anpassen.
        </i>
      </p>
    </section>,
    <section>
      <h2>Fazit</h2>
      <p>
        Die <i>Perceived Confidence / Diagnosticity</i> eines KI-Systems ist
        entscheidend, um fundierte und präzise Entscheidungen zu treffen.
        Systeme, die klar diagnostische Informationen bereitstellen, stärken das
        Vertrauen der Nutzenden und fördern die Akzeptanz und effektive Nutzung
        der Technologie. Dies ist besonders wichtig in kritischen Bereichen wie
        dem Gesundheitswesen, wo diagnostische Qualität einen direkten Einfluss
        auf das Wohl der Gemeinschaft hat.
      </p>
    </section>,
  ],
};

const Zusammenfassung = {
  linkName: "zusammenfassung-ausblick",
  name: "Zusammenfassung und Ausblick",
  description:
    "Hier findet man eine kurze Zusammenfassung der wichtigsten Aspekte, sowie einen Ausblick auf das nächste Modul.",
  content: [
    <ChapterHeader text={"Zusammenfassung und Ausblick"} number={7} />,
    <section>video</section>,
    <section>
      <p>
        In dieser Lektion haben wir uns intensiv mit den spezifischen User
        Experience (UX) Aspekten beschäftigt, die für KI-Systeme besonders
        relevant sind. Wir haben die folgenden fünf Kernaspekte betrachtet:
      </p>
      <h4>Wahrgenommene Autonomie</h4>
      <p>
        Wie sehr fühlen sich Nutzer in der Lage, selbstständig Entscheidungen zu
        treffen und zu handeln, während sie mit einem KI-System interagieren?
      </p>
      <h4>Situationsbewusstsein</h4>
      <p>
        Das Verständnis und die Wahrnehmung der Nutzer über die aktuelle
        Umgebung und die Auswirkungen der KI auf diese.
      </p>
      <h4>Information Overload / Mentale Arbeitsbelastung</h4>
      <p>
        Der kognitive Aufwand, der durch die Verarbeitung von Informationen
        entsteht, und die potenzielle Überlastung durch zu viele Daten.
      </p>
      <h4>Trustworthiness (Vertrauenswürdigkeit)</h4>
      <p>
        Das Vertrauen der Nutzer in die Zuverlässigkeit und Ethik des KI-Systems
        sowie seine Fähigkeit, ihre Bedürfnisse zu erfüllen.
      </p>
      <h4>Confidence/Diagnosticity (Selbstvertrauen/Diagnosetauglichkeit)</h4>
      <p>
        Das Vertrauen der Nutzer in die Empfehlungen oder Diagnosen des
        KI-Systems und deren Effektivität.
      </p>
    </section>,
    <section>
      <h2>Zusammenfassung der Design-Guidelines</h2>
      <h4>Adaptive Automatisierung ermöglichen</h4>
      <p>
        Geben Sie den Nutzern die Möglichkeit, die Automatisierungsstufen nach
        Bedarf anzupassen.
      </p>
      <h4>Situationsbewusstsein unterstützen</h4>
      <p>
        Stellen Sie sicher, dass das System die Nutzer über relevante
        Informationen und deren Bedeutung informiert.
      </p>
      <h4>Flexibilität bei der Informationsverarbeitung</h4>
      <p>
        Ermöglichen Sie Nutzern, die Menge und Art der Informationen nach ihren
        Bedürfnissen zu steuern.
      </p>
      <h4>Transparenz sicherstellen</h4>
      <p>
        Gewährleisten Sie, dass die Nutzer nachvollziehen können, wie das System
        zu seinen Ergebnissen gelangt.
      </p>
      <h4>Nutzerzentrierte Anpassung</h4>
      <p>
        Bieten Sie Funktionen, die es den Nutzern ermöglichen, die
        Systemausgaben an ihre individuellen Präferenzen anzupassen.
      </p>
    </section>,
    <section>
      <h2>Ausblick auf die nächste Einheit: "UX-bezogene KI-Eigenschaften"</h2>
      <p>
        In der kommenden Einheit werden wir uns mit spezifischen Eigenschaften
        von KI-Systemen beschäftigen, die besonders wichtig für die UX sind:
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
  content: [<ChapterHeader text={"Quellen"} number={8} />],
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

const EinführungUXKI = {
  linkName: "einfuehrung-ki-bezogene-ux",
  name: "Einführung KI-bezogene UX",
  description:
    "KI-Systeme machen mehr Aspekte für die User Experience relevant. Hier werden wichtige dieser KI-bezogenen UX Aspekte ein erstes mal angeführt.",
  content: [
    <ChapterHeader text={"Einführung in KI-bezogene UX"} number={1} />,
    <section>
      <VideoContainer link={"youtube.com"} title={"Einleitungsvideo"} />
      <p>
        In der vorigen Lektion haben wir etablierte UX-Konstrukte betrachtet,
        die allgemeine Nutzererfahrungen beschreiben. KI-Systeme hingegen
        greifen tief in unsere Informationsverarbeitung ein, was zusätzliche
        Aspekte für die User Experience (UX) relevant macht. Diese neuen
        Dimensionen sind essentiell, da sie direkt beeinflussen, wie Menschen
        mit KI-Systemen interagieren und diese wahrnehmen.
      </p>
    </section>,
    <section>
      <h2>Wichtige Aspekte der KI-bezogenen UX:</h2>
      <div className="flex flex-wrap justify-center">
        {linksAndNames.map((item, index) => (
          <div className="subTopicCard rounded-xl">
            <Link to={`/${moduleLink}/${item.link}`} className="w-full h-full">
              <div className="topSection relative overflow-hidden h-32">
                <h2
                  className="thirdTitle absolute left-0 bottom-0 mb-0 px-[33px]"
                  topic-number={String(index + 2).padStart(2, "0")}>
                  {item.name}
                </h2>
              </div>
              <div className="text-ux_dark px-[33px] w-full smallTextSize mb-5 mt-3">
                {item.description}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>,
    <section>
      <h2>Warum sind diese Aspekte wichtig für die Automation-Related UX?</h2>
      <p>
        Mit der zunehmenden Integration von KI in alltägliche Systeme ist es
        entscheidend, diese Aspekte in der UX zu berücksichtigen. KI-Systeme
        übernehmen Aufgaben, die früher Menschen vorbehalten waren, und
        erfordern daher, dass Nutzer ein Gefühl von Kontrolle, Verständnis und
        Vertrauen behalten. Die Gestaltung von KI-Systemen muss sicherstellen,
        dass Nutzer die Systeme nicht nur effektiv nutzen, sondern sich auch
        sicher und autonom fühlen können.
      </p>
      <h3>Beispiel:</h3>
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
      <h3>Ausblick:</h3>
      <p>
        In den folgenden Kapiteln werden wir detailliert untersuchen, wie diese
        fünf Aspekte – Wahrgenommene Autonomie, Situationsbewusstsein,
        Information Overload / Mentale Arbeitsbelastung, Trustworthiness und
        Confidence/Diagnosticity – die Gestaltung und Nutzung von KI-Systemen
        beeinflussen. Wir werden sehen, wie diese Aspekte in der Praxis
        umgesetzt werden können und welche Designrichtlinien helfen, eine
        positive und effektive Mensch-KI-Interaktion zu fördern. Freuen Sie sich
        auf eine tiefere Auseinandersetzung mit den Herausforderungen und
        Chancen der KI-bezogenen UX!
      </p>
    </section>,
  ],
};

const UXKISections = {
  linkName: moduleLink,
  name: moduleName,
  moduleImage: imageElement,
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
