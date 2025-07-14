import ImageElement from "../../assets/icons/usability.svg?react";
import { Link } from "react-router-dom";
import { ChapterHeader } from "../3_organism/ChapterHeader";
import { VideoContainer } from "../1_elements/VideoContainer";
import Accordion from "../2_molecule/Accordion";
import SubNavigation from "../2_molecule/nav/SubNavigation";
import List from "../2_molecule/List";
import { Table } from "../2_molecule/Table";
import { TabSwitchView } from "../2_molecule/TabSwitchView";

const sectionsIntro = [
  { id: "1", title: "Intro" },
  { id: "3", title: "Fünf Grundbegriffe" },
];

const Einleitung = {
  linkName: "einleitung",
  name: "Einführung UX und Usability",
  description:
    "Hier wird ein Überblick über die Relevanz nutzerzentrierter Gestaltung und den Zusammenhang von Mensch und Technologie gegeben.",
  content: [
    <ChapterHeader text={"Einleitung"} number={1} />,
    <section>
      <SubNavigation sections={sectionsIntro} />
      <p>
        In diesem Modul gibt Ihnen Prof. Dr. Hans-Christian Jetter einen
        Überblick über die Begriffe <b>Usability</b> und <b>User Experience</b>{" "}
        — zwei zentrale Aspekte menschzentrierter Designprozesse, die in
        Forschung und Entwicklung eine wichtige Rolle spielen. Der Fokus auf
        beide Aspekte während der Entwicklung eines Produkts kann einen starken
        Einuss auf das Gesamterlebnis von Nutzenden bei der Interaktion haben.
        Wir erklären Ihnen, wieso ein fehlender Fokus auf diese Aspekte ein
        Produkt unattraktiver für Kunden und Nutzende machen kann, und welche
        Punkte Sie beim Design Ihres Produkts beachten sollten. Abschließend
        erhalten Sie Informationen und Tipps dazu, wie die beiden Aspekte
        evaluiert werden können.
      </p>
    </section>,
    <section>
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/9cgmeenl72s?rel=0&modestbranding=1"
        }
        title={"Einleitungsvideo"}
      />
    </section>,
    <section id="aspekte">
      <h2>Zusammenfassung der 5 Grundbegriffe:</h2>

      {/* TODO: use SubTopic Card in the future to display subtopics */}
      <h3>1 Usability (Gebrauchstauglichkeit):</h3>
      <p>
        Beschreibt, wie effektiv, effizient und zufriedenstellend Nutzende ihre
        Ziele mit einem System erreichen. Eine gute Usability ist entscheidend
        für Akzeptanz und Erfolg eines Produkts.
      </p>
      <h3>2 Nutzungskontext:</h3>
      <p>
        Bezieht sich auf die Rahmenbedingungen, unter denen ein System genutzt
        wird, einschließlich Nutzendenprofil, Aufgaben, Umgebung und
        Hilfsmittel. Ein tiefes Verständnis des Nutzungskontexts ist essenziell
        für eine benutzerzentrierte Gestaltung.
      </p>
      <h3>3 User Experience (UX):</h3>
      <p>
        Umfasst das gesamte Nutzungserlebnis eines Produkts, einschließlich
        subjektiver Empfindungen wie Ästhetik, Vertrauen und Freude. UX geht
        über Usability hinaus und ist heute ein Schlüssel zum Produkterfolg.
      </p>
      <h3>4 Mensch-Computer-Interaktion (HCI):</h3>
      <p>
        Eine interdisziplinäre Forschungsdisziplin, die sich mit der Gestaltung
        von Interaktionen zwischen Menschen und Technologie beschäftigt. Ziel
        ist es, positive Nutzungserfahrungen durch optimierte Design- und
        Entwicklungsprozesse zu schaffen.
      </p>
      <h3>5 Evaluation:</h3>
      <p>
        Bezeichnet die Überprüfung und Messung von Usability und UX eines
        Systems. Durch Methoden wie Tests und Nutzerfeedback wird ermittelt, ob
        die gewünschten Nutzungserfahrungen erreicht werden.
      </p>
    </section>,
  ],
};

const sectionsUsability = [
  { id: "2", title: "Definition" },
  { id: "3", title: "Drei Faktoren" },
  { id: "4", title: "Unterschied: Effektivität & Effizienz" },
  { id: "5", title: "Fazit aus Fallbeispielen" },
  { id: "6", title: "Ausblick" },
];

const Usability = {
  linkName: "usability",
  name: "Usability",
  description:
    "Beschreibt, wie effektiv, effizient und zufriedenstellend Nutzende ihre Ziele mit einem System erreichen. Eine gute Usability ist entscheidend für Akzeptanz und Erfolg eines Produkts.",
  content: [
    <ChapterHeader text={"Usability"} number={2} />,
    <section>
      <p>
        Beschreibt, wie effektiv, effizient und zufriedenstellend Nutzende ihre
        Ziele mit einem System erreichen. Eine gute Usability ist entscheidend
        für Akzeptanz und Erfolg eines Produkts.
      </p>
      <Accordion sections={sectionsUsability} />
      <SubNavigation sections={sectionsUsability} />
    </section>,
    <section>
      <h2>Definition Usability</h2>
      <p>
        <b>Usability</b>, im Fachjargon auch als „Gebrauchstauglichkeit“
        bezeichnet, beschreibt die Qualität der Interaktion zwischen Menschen
        und interaktiven Systemen. In Alltagssprache würden wir am ehesten von
        „Benutzerfreundlichkeit“ oder von einer „intuitiven Bedienung“ sprechen.
      </p>
      <p>
        Gute Usability ist eine Grundvoraussetzung für erfolgreiche
        Mensch-Computer-Interaktion. Undurchdachte oder schlecht gestaltete
        Systeme führen dagegen schnell zu Bedienproblemen, kognitiver
        Überlastung und Frustration bei den Nutzer*innen – also zu einer
        schlechten Usability.
      </p>
      <p>
        Schon seit den 1980er Jahren wissen wir, dass gute Usability über den
        Erfolg und die Akzeptanz eines neuen Systems oder Produkts entscheidet.
        Digitale Systeme müssen schlicht und einfach eine gute Usability haben,
        um überhaupt in der Praxis akzeptiert und verwendet werden zu können.
      </p>
    </section>,
    <section>
      <h2>Drei Faktoren der Usability</h2>
      <p>
        Um Usability gezielter gestalten und messen zu können, definiert die
        Industrienorm DIN EN ISO 9241-11 drei Faktoren der Usability:{" "}
        <b>Effektivität</b>, <b>Effizienz</b> und <b>Zufriedenstellung</b>.
      </p>
      <List
        items={[
          "<b>Effektivität</b> bedeutet, dass Nutzer*innen mit einem System ihre Aufgaben erfolgreich bewältigen können.",
          "<b>Effizienz</b> beschreibt, dass dies mit einem angemessenen Aufwand geschieht.",
          "<b>Zufriedenstellung</b> bezieht sich darauf, dass die Verwendung des Systems für ihre Aufgaben bei den Nutzer*innen keine starken negativen Emotionen wie Frustration oder Ärger auslöst.",
        ]}
        alignItems="center"
        size="medium"
      />
      <p>
        In unserem alltäglichen Sprachgebrauch differenzieren wir dabei
        typischerweise nicht zwischen Effektivität und Effizienz. Dies ist aber
        sinnvoll, wenn wir von der Usability eines interaktiven Systems
        sprechen.
      </p>
    </section>,
    <section>
      <h2>Unterschied: Effektivität und Effizienz</h2>
      <p>
        Ein einfaches Beispiel macht den Unterschied klar: Stellen Sie sich vor,
        Sie verwenden ein interaktives System, um einen dreiseitigen Brief an
        eine Behörde zu schreiben und als PDF hochzuladen.
      </p>
      <h3>
        Fall 1: Sie verwenden dazu einen PC oder Laptop mit einer gängigen
        Textverarbeitung.
      </h3>
      <p>
        Durch die Verwendung einer grafischen Oberfläche mit
        Textverarbeitungsprogramm, Maus und Tastatur werden Sie es mit großer
        Sicherheit schaffen, den Brief ohne Tippfehler, im erwünschten Layout
        und mit der gewünschten Länge zu verfassen. Damit ist das System für
        diese Aufgabe schon einmal grundsätzlich <b>effektiv</b>, denn Sie
        erreichen damit Ihr Ziel.
      </p>
      <p>
        Mit etwas Übung sollte das Ganze auch innerhalb von 1-2 Stunden erledigt
        sein und der kognitive Aufwand ist für Sie überschaubar. Das setzt
        natürlich voraus, dass Sie der Sprache des Briefes mächtig sind,
        einigermaßen Übung im Schreiben und Tippen haben und mit dem Programm
        einigermaßen vertraut sind. Damit ist das System für diese Aufgabe{" "}
        <b>effizient</b>, da der Aufwand angemessen ist.
      </p>
      <p>
        Es ist auch nicht zu erwarten, dass das System Sie dabei erheblich
        stresst oder ärgert. Es ist also im Großen und Ganzen{" "}
        <b>zufriedenstellend</b>.
      </p>
      <p>
        Unterm Strich ist damit eine <b>gute Usability</b> erreicht.
      </p>
      <h3>
        Fall 2: Sie verwenden dazu ein Mobiltelefon und verfassen den Text über
        die Texteingabe auf dem Touchscreen in einer einfachen Notizen-App.
      </h3>
      <p>
        Auch hier werden Sie es letztendlich irgendwann schaffen, den Brief ohne
        Tippfehler und weitgehend im erwünschten Layout und in der erwünschten
        Länge zu schreiben. Das System ist also für Ihre Aufgabe grundsätzlich{" "}
        <b>effektiv</b>.
      </p>
      <p>
        Allerdings wird dies aufgrund des kleinen Bildschirms, des umständlichen
        Einrückens von Text über Leerzeichen, der mangelnden
        Rechtschreibkorrektur, etc. wahrscheinlich ein sehr langsamer und
        kognitiv anstrengender Prozess. Das System ist also{" "}
        <b>nicht effizient</b>.
      </p>
      <p>
        Man kann sogar davon ausgehen, dass Sie der Prozess belasten wird und es
        auch Phasen geben wird, in der Sie die Bearbeitung der Aufgabe mit dem
        System frustriert und ärgert. Somit entsteht dann auch eine{" "}
        <b>schlechte Zufriedenstellung</b>.
      </p>
      <p>
        Unterm Strich ist es damit eine <b>schlechte Usability</b> – trotz
        prinzipieller Effektivität.
      </p>
      <h3>
        Fall 3: Sie haben bedingt durch Ihre Sehfähigkeit oder durch die
        Beweglichkeit ihrer Finger, Hände und Arme besondere Anforderungen im
        Bereich der Barrierefreiheit.
      </h3>
      <p>
        Beispielsweise könnten Sie vielleicht den Text des Briefes weder auf dem
        PC-Bildschirm noch dem Telefon-Bildschirm gut lesen. Oder die
        Texteingabe über eine physische PC-Tastatur oder eine Bildschirmtastatur
        auf dem Touchscreen ist für Sie faktisch unbedienbar. Für Sie persönlich
        sind die Systeme aus Fall 1 und 2 somit <b>nicht effektiv</b>,{" "}
        <b>nicht effizient</b> und <b>nicht zufriedenstellend</b> ist, wobei sie
        es für andere Personen sein mögen.
      </p>
    </section>,
    <section>
      <h2>Fazit aus den Fallbeispielen</h2>
      <p>
        Es ist wichtig zu verstehen, dass ein System nicht „eine“ Usability hat,
        sondern dass Effektivität, Effizienz und Zufriedenstellung immer davon
        abhängig sind, wer ein System verwendet, zu welchem Zweck es verwendet
        wird und wie und wo damit interagiert wird.{" "}
        <b>
          Usability ist also keine Systemeigenschaft, sondern ergibt sich immer
          aus dem Kontext der Verwendung.
        </b>
      </p>
      <p>
        Im Bezug auf Usability gibt es daher keine inhärent „guten“ oder
        „schlechten“ Systeme, sondern es hängt immer davon, für was und von wem
        etwas verwendet wird. Oder wie es der vielbeachtete Usability-Experte
        und UX-Designer Bill Buxton auf den Punkt bringt:
      </p>
      <p>
        <b>„Everything is best for something and worst for something else.“</b>
      </p>
      <p>
        Usability ist immer die Verwendbarkeit und Praxistauglichkeit eines
        Systems durch eine bestimmte Person und für eine bestimmte Aufgabe. Die
        genaue Definition in der DIN EN ISO 9241-11 bringt dies zum Ausdruck:
      </p>
      <p className="specialText">
        „Die Gebrauchstauglichkeit ist das Ausmaß, in dem ein System, ein
        Produkt oder eine Dienstleistung durch bestimmte Benutzer genutzt werden
        kann, um in einem bestimmten Nutzungskontext bestimmte Ziele effektiv,
        effizient und zufriedenstellend zu erreichen.“
      </p>
    </section>,
    <section>
      <h2>Ausblick</h2>
      <p>
        Usability ist dabei eine notwendige Grundanforderung für den Erfolg
        eines Systems oder Produkts. Ganz entscheidend ist dafür, dass der reale{" "}
        <b>Nutzungskontext</b> schon frühzeitig bei der Konzeption, Gestaltung
        und Entwicklung des Systems berücksichtigt wird. <br /> Was sich genau
        hinter diesem Begriff verbirgt, werden wir in der nächsten Lektion
        thematisieren.
      </p>
    </section>,
  ],
};

const sectionsNutzungskontext = [
  { id: "2", title: "Definition" },
  { id: "3", title: "Warum ist der Nutzungskontext wichtig?" },
  { id: "4", title: "Die 4 Bestandteile des Nutzungskontextes" },
  {
    id: "5",
    title:
      'Unterschied und Bedeutung von "Ease of Use" und "Ease of Learn" im Nutzungskontext',
  },
  { id: "6", title: "Wie erfolgt eine Nutzungskontextanalyse?" },
  { id: "7", title: "Ausblick" },
];

const easeLearnUseTableData = [
  [
    <b>Kriterium</b>,
    <b>Ease of Learn (Erlernbarkkeit)</b>,
    <b>Ease of Use (Benutzungseffizienz)</b>,
  ],
  [
    "Zielgruppe",
    "Erstnutzende, Gelegenheitsnutzende",
    "Routine-Nutzende, Experten",
  ],
  [
    "Wichtig bei",
    "Öffentlichen, selten genutzten Systemen",
    "Internen, häufig genutzten Systemen",
  ],
  [
    "Fokus",
    "Schnelle Einarbeitung, geringe Hürden",
    "Effizienz, Produktivität, Zufriedenheit",
  ],
  [
    "Typische Metrik",
    "Zeit bis zur ersten erfolgreichen Nutzung",
    "Geschwindigkeit, Fehlerfreiheit, Zufriedenheit",
  ],
];

const umgebungTableData = [
  [<b>Organisatorische Umgebung</b>, <b>Physische Umgebung</b>],
  [
    <>
      <b>Arbeitsstruktur </b>, z.B. Einzelarbeit oder Teamarbeit mit KI-Tools
    </>,
    <>
      <b>Arbeitsplatzbedingungen</b>, z.B. Lärmpegel in der Umgebung und die
      Anwesenheit anderer Personen vs. Zuverlässigkeit und Datenschutz bei
      Spracheingabe, Spiegelungen, Lichteinstrahlung und Handschuhe vs.
      Outdoor-Einsatz eines Touchscreens
    </>,
  ],
  [
    <>
      <b>Unterbrechungen</b> im Arbeitsalltag und bei Aufgaben
    </>,
    <>
      <b>Technische Ausstattung</b>, z.B. verfügbare Rechen- und Grafikleistung
      auf Mobilgeräten, Stabilität und Geschwindigkeit der Internetverbindung,
      Bildschirmgröße und -auflösung
    </>,
  ],
  [
    [
      <b>Unterstützung oder Schulungen</b>,
      "z.B. IT-Support bei Problemen mit der KI oder Training mit neuen Systemen",
    ],
    <>
      <b>Arbeitsplatzausstattung</b>, z.B. Verwendung im Büro, mobile Verwendung
      im Stehen oder Sitzen, Verfügbarkeit von Teamarbeitsplätzen mit Projektor
      oder digitalem Whiteboard
    </>,
  ],
  [
    <>
      <b>Organisationskultur</b>, z.B. Akzeptanz von KI-Assistenz
    </>,
    "",
  ],
];

const Nutzungskontext = {
  linkName: "nutzungskontext",
  name: "Nutzungskontext",
  description:
    "Bezieht sich auf die Rahmenbedingungen, unter denen ein System genutzt wird, einschließlich Nutzendenprofil, Aufgaben, Umgebung und Hilfsmittel. Ein tiefes Verständnis des Nutzungskontexts ist essenziell für eine benutzerzentrierte Gestaltung.",
  content: [
    <ChapterHeader text={"Nutzungskontext"} number={3} />,
    <section>
      <p>
        ist der Rahmen, unter dem ein System genutzt wird. Dazu gehören die
        Nutzer:innen, ihre Aufgaben, die Umgebung und die Hilfsmittel. Man muss
        den Nutzungskontext verstehen, um benutzerzentriert zu gestalten.
      </p>
      <Accordion sections={sectionsNutzungskontext} />
      <SubNavigation sections={sectionsNutzungskontext} />
    </section>,
    <section>
      <h2>Definition Nutzungskontext</h2>
      <p>
        Der Nutzungskontext beschreibt, wie ein digitales System wirklich
        benutzt wird. Wer ein benutzerfreundliches System gestalten will, sollte
        frühzeitig mit den Nutzer:innen zusammenarbeiten und folgende Aspekte
        berücksichtigen:
      </p>
      <List
        items={[
          "die <b>Benutzer:innen</b>, z.B. ihre Kenntnisse, Erfahrungen und Erwartungen",
          "die <b>Aufgaben</b>, die mit dem System erledigt werden sollen",
          "die verwendeten <b>Arbeitsmittel</b>, z.B. Software, Geräte",
          "die <b>physische</b> und <b>soziale Umgebung</b>, z.B. die Art, wie der Arbeitsplatz gestaltet ist oder die Menschen, mit denen man arbeitet",
        ]}
        alignItems="center"
        size="medium"
      />
    </section>,
    <section>
      <h2>Warum ist der Nutzungskontext wichtig?</h2>
      <p>
        Wenn Sie die Usability (Gebrauchstauglichkeit) eines interaktiven System
        bewerten oder verbessern möchten, muss der jeweilige Nutzungskontext und
        dessen Anforderungen bekannt sein. Das System ist nicht automatisch
        gebrauchstauglich, weil es bestimmte Funktionen bietet. Es kommt darauf
        an, <b>wie gut das System in der Praxis funktioniert</b> und ob es von
        der Zielgruppe <b>effektiv, effizient und zufriedenstellend</b> genutzt
        werden kann.
      </p>
      <p>GRAFIK VON USABILITY</p>
      <p>
        Dabei ist es wichtig, frühzeitig mit der Zielgruppe in Kontakt zu treten
        und ihre Perspektive bei der Konzeption und Entwicklung mit
        einzubeziehen. Das kann die spätere Akzeptanz und den Erfolg des Systems
        erhöhen. Das kann auf den ersten Blick sehr umfangreich wirken. Dennoch
        gilt hier das Motto "Alles ist besser als nichts!". Selbst einige wenige
        informelle Gespräche, Fotos und Notizen sind immer noch besser, als
        Software weitab vom Nutzungskontext bequem vom Schreibtisch aus zu
        gestalten. Deshalb ist es auf jeden Fall wichtig, mit den realen
        Zielgruppen in Kontakt zu treten – selbst wenn es nur ein informelles
        Gespräch beim Kaffee ist.
      </p>
    </section>,
    <section>
      <h2>Die 4 Bestandteile des Nutzungskontextes im Detail</h2>
      <p>
        Die folgenden Aspekte und Methoden können als Inspiration für ein
        Vorgehen bei Ihrem System dienen. Sie können je nach System, Zielen und
        verfügbaren Ressourcen unterschiedlich relevant und umsetzbar sein.
      </p>
      <h3>1. Benutzer:innen</h3>
      <p>
        Die Benutzer:innen, also die reale Zielgruppe des Systems, stehen im
        Mittelpunkt der Gestaltung. Dieses Vorgehen nennt man auch
        benutzerzentrierte Gestaltung. Weiteres zu diesem Vorgehen erfahren Sie
        detailliert im Kapitel{" "}
        <Link to="/ux-und-usability/mensch-computer-interaktion">
          <b>Mensch-Computer-Interaktion</b>
        </Link>
      </p>
      <p>Dabei können verschiedene Aspekte analysiert werden:</p>
      <ul>
        <li>
          <b>Fähigkeiten</b>, z.B. technisches Verständnis, Sprachkompetenz
        </li>
        <li>
          <b>Vorerfahrung und Wissen</b>, z.B. Umgang mit KI-Tools wie Chatbots
          oder Bildgeneratoren
        </li>
        <li>
          <b>Erwartungen</b>, z.B. durch vorherige Nutzung bestimmter Systeme
        </li>
        <li>
          <b>Demografische Daten</b>, wie Alter, Geschlecht, körperliche
          Einschränkungen
        </li>
        <li>
          <b>Mentale Eigenschaften</b>, z.B. Motivation, Einstellung gegenüber
          KI, Lernstil
        </li>
      </ul>
      <Accordion title="Hier ein Beispiel:" initiallyOpen={false}>
        <p>
          In einer Flüchtlingshilfsorganisation wird ein KI-gestütztes
          Übersetzungstool eingesetzt. Die Helfer:innen haben unterschiedliche
          technische Fähigkeiten und Vorerfahrungen mit KI-Tools. Für die
          Geflüchteten muss das Tool auch verschiedene Alphabetisierungsniveaus
          abdecken. Manche Nutzer:innen können nicht lesen, weshalb eine
          Sprachausgabe und Piktogramme notwendig sind. Das Übersetzungstool
          muss also für viele unterschiedliche Bedürfnisse angepasst werden, um
          effektiv und benutzerfreundlich zu sein.
        </p>
      </Accordion>
      <h3>2. Aufgaben</h3>
      <p>
        Die Aufgaben beschreiben, was die Benutzer:innen mit einem System
        erreichen wollen. Das hat großen Einfluss darauf, welche Funktionen ein
        System besitzt.
      </p>
      <p>Dazu könnte man sich folgende Aspekte ansehen:</p>
      <ul>
        <li>
          <b>Aufgabenziel</b>, z.B. Informationen finden, Texte generieren
        </li>
        <li>
          <b>Einbettung in Arbeitsabläufe</b>, z.B. Teil eines Prozesses
        </li>
        <li>
          <b>Vorgaben und erwartete Ergebnisse</b>, z.B. qualitativ hochwertiger
          Textentwurf
        </li>
        <li>
          <b>Häufigkeit und Bearbeitungsdauer</b> von Aufgaben
        </li>
        <li>
          <b>Physische und mentale Anforderungen</b>, z.B. Konzentrationsaufwand
        </li>
      </ul>
      <p>
        Oft wird die Automatisierung von Aufgaben durch KI, insbesondere
        ChatBots, erwogen. Diese scheinen zunächst effizient für Kundenanfragen
        und interne Kommunikation. Nach der Implementierung zeigt sich jedoch
        oft Unzufriedenheit der Nutzer:innen, da die Erwartungen nicht erfüllt
        werden und der ChatBot im Vergleich zu anderen am Markt schlecht
        abschneidet.
      </p>
      <p>
        Um solche Szenarien zu vermeiden, ist es ratsam, vorher den
        Nutzungskontext genau zu analysieren. Im Modul{" "}
        <Link to={"/identifikation-prozesse/einleitung"}>
          Identifikation passender Prozesse
        </Link>{" "}
        werden wir uns eingehend damit beschäftigen, wie Automatisierungs- und
        KI-Potenziale identifiziert werden können und wie man frühzeitig
        bewerten kann, welche Prozesse sich dafür eignen.
      </p>
      <h3>3. Umgebung</h3>
      <p>
        Ein System muss je nach Umgebung sehr unterschiedliche Anforderungen
        erfüllen, um wirklich wirksam nutzbar zu sein. Die folgenden Bereiche
        gehören zur Umgebung
      </p>
      <Table
        data={umgebungTableData}
        headerStyle={false}
        verticalAlignedCells={false}
      />
      <p>
        Hier ist ein Beispiel: Eine KI-Anwendung zur Sprachübersetzung wird in
        zwei gemeinwohlorientierten Organisationen eingesetzt.
      </p>
      <TabSwitchView>
        <div title="1. Mobiler Beratungsbus für Geflüchtete">
          <p>
            In einem mobilen Beratungsbus für Geflüchtete arbeiten die
            Mitarbeitenden mit Tablets. Die Beratung findet häufig unter freiem
            Himmel statt, bei instabiler Internetverbindung und unter hohem
            Zeitdruck. Die Arbeit erfolgt dabei oft im Stehen oder in
            improvisierten Sitzpositionen.
          </p>
          <p>
            In diesem Nutzungskontext ist der Einsatz heute typischer
            KI-Technologien, z. B. Chatbots, nur bedingt geeignet, da die
            technische Infrastruktur sowie die körperlichen und zeitlichen
            Rahmenbedingungen für deren Einsatz nicht optimal sind. Heutige
            Chatbots brauchen in der Regel schnelle Internetverbindungen und
            basieren auf Eingaben über Tastatur oder Sprache, die mit spürbaren
            Verzögerungen durch weit entfernte Server erst verarbeitet und dann
            beantwortet werden. Die Anwendung sollte dagegen
            Offline-Funktionalität und schnelle Spracheingabe berücksichtigen.
          </p>
        </div>
        <div title="2. Digital ausgerichtete NGO mit Online-Beratung">
          <p>
            In einer digital ausgerichteten NGO, die Online-Beratung anbietet,
            arbeiten die Teams in ruhigen Büros mit ergonomischen
            Arbeitsplätzen. Dort stehen leistungsfähige Laptops oder Desktop-PCs
            mit großen Bildschirmen, Headsets und stabiler Internetverbindung
            zur Verfügung. Die Beratungen folgen einem festen Zeitplan und
            ermöglichen konzentriertes Arbeiten.
          </p>
        </div>
      </TabSwitchView>
      <h3>4. Hilfsmittel</h3>
      <p>Die technischen Bedingungen umfassen folgende Punkte:</p>
      <ul>
        <li>
          {" "}
          <b>Hardware</b>, z.B. Headsets für Sprachassistenten, Tablets für
          mobile KI-Apps
        </li>
        <li>
          {" "}
          <b>Software</b>, z.B. spezialisierte KI-Tools, Betriebssysteme
        </li>
        <li>
          {" "}
          <b>Dokumentationen</b>, z.B. Handbücher, Tutorials
        </li>
      </ul>
    </section>,
    <section>
      <h2>
        Unterschied und Bedeutung von "Ease if Use" und "Ease of Learn" im
        Nutzungskontext
      </h2>
      <p>
        <b>Ease of Use</b> und <b>Ease of Learn</b> (oft als Erlernbarkeit
        bezeichnet) sind zwei zentrale, aber unterschiedliche Qualitätsmerkmale
        bei der Gestaltung und Bewertung von Softwaresystemen. Die
        Unterscheidung ist gerade im Hinblick auf unterschiedliche Zielgruppen,
        etwa interne Nutzer:innen (Mitarbeitende) vs. externe Nutzer:innen
        (Kunden:innen, Klienten), entscheidend.
      </p>
      <Table
        data={easeLearnUseTableData}
        headerStyle={true}
        verticalAlignCells={true}
      />
      <p>
        Bei Interne Systeme, z. B. für Mitarbeitende, kann es sinnvoll sein, die
        Ease of Learn etwas zugunsten der Ease of Use zu vernachlässigen, wenn
        die Nutzer:innen regelmäßig und intensiv mit dem System arbeiten. Eine
        kurze, initiale Schulung ist oft akzeptabel, solange das System
        anschließend effizient und produktiv genutzt werden kann.
      </p>
      <p>
        Bei Front-facing Systeme (für Klienten/Kunden) hingegen ist die Ease of
        Learn besonders kritisch, weil die Nutzer:innen oft keine oder nur wenig
        Vorerfahrung mit dem System haben und keine Schulung erhalten. Das
        System muss somit schnell verständlich sein, damit sie ihre Ziele ohne
        Frustration erreichen.
      </p>
    </section>,
    <section>
      <h2>Wie erfolgt eine Nutzungskontextanalyse?</h2>
      <p>
        Die Nutzungskontextanalyse untersucht die vier oben genannten Aspekte.
        Dabei ist zu unterscheiden, ob ein neues Produkt entwickelt oder ein
        bestehendes überarbeitet wird. Bei bestehenden Produkten kann auf
        vorhandenes Wissen oder frühere Tests zurückgegriffen werden.
      </p>
      <p>
        Bei Neuentwicklungen muss der Nutzungskontext vollständig neu erhoben
        werden. Anmerkung: Dabei wird vom Idealfall ausgegangen. Wir wissen sehr
        gut, dass die Realität oft weit davon entfernt ist und eine solche
        Analyse oftmals nicht so umfassend durchgeführt werden kann. Daher gilt
        “Alles besser als nichts”.
      </p>
      <p>Die Analyse erfolgt in zwei Schritten:</p>
      <p>SPALTEN ODER TABS</p>
      <p>
        Auf Basis dieser Analysen werden Usability-Ziele und konkrete
        Nutzungsanforderungen abgeleitet. Diese sind die Grundlage für
        Gestaltung und Evaluation. Später können damit gezielte Usability-Tests
        durchgeführt werden. Kontexte können sich ändern, also kann die Analyse
        kontinuierlich wiederholt werden. Mehr dazu in den Kapiteln{" "}
        <Link to={"/ux-und-usability/mensch-computer-interaktion"}>
          Mensch-Computer-Interaktion
        </Link>{" "}
        und <Link to={"/ux-und-usability/evaluation"}>Evaluationen</Link>.
      </p>
    </section>,
    <section>
      <h2>Ausblick</h2>
      <p>
        Die festgelegten Anforderungen und Ziele an das System beziehen sich
        nicht nur auf die Gebrauchstauglichkeit (Usability), sondern auch auf{" "}
        <b>emotionale Aspekte</b>. Dazu gehört, dass sich die Nutzung eines
        Systems stimmig, angenehm oder motivierend anfühlt. Mehr dazu erläutern
        wir im nächsten Kapitel zur User Experience (UX).
      </p>
    </section>,
  ],
};

const UserExperience = {
  linkName: "user-experience",
  name: "User Experience",
  description:
    "Umfasst das gesamte Nutzungserlebnis eines Produkts, einschließlich subjektiver Empfindungen wie Ästhetik, Vertrauen und Freude. UX geht über Usability hinaus und ist heute ein Schlüssel zum Produkterfolg.",
  content: [
    <ChapterHeader text={"User Experience"} number={4} />,
    <section>
      <div className="text-center p-10 pb-0 bg-slate-200 rounded-xl text-ux_dark flex flex-col justify-center items-center">
        PowerPoint User Experience
        <div className="my-10 bg-slate-600 p-5 rounded-lg hover:bg-ux_grey hover:cursor-pointer text-ux_white">
          <a href="/downloads/UXPP.pptx" download>
            Hier Herunterladen
          </a>
        </div>
      </div>
    </section>,
  ],
};

const MenschComputerInteraktion = {
  linkName: "mensch-computer-interaktion",
  name: "Mensch Computer Interaktion",
  description:
    "Eine interdisziplinäre Forschungsdisziplin, die sich mit der Gestaltung von Interaktionen zwischen Menschen und Technologie beschäftigt. Ziel ist es, positive Nutzungserfahrungen durch optimierte Design- und Entwicklungsprozesse zu schaffen.",
  content: [
    <ChapterHeader text={"Mensch Computer Interaktion"} number={5} />,
    <section>
      <div className="text-center p-10 pb-0 bg-slate-200 rounded-xl text-ux_dark flex flex-col justify-center items-center">
        PowerPoint Mensch Computer Interaktion
        <div className="my-10 bg-slate-600 p-5 rounded-lg hover:bg-ux_grey hover:cursor-pointer text-ux_white">
          <a href="/downloads/MCIPP.pptx" download>
            Hier Herunterladen
          </a>
        </div>
      </div>
    </section>,
  ],
};

const Evaluation = {
  linkName: "evaluation",
  name: "Evaluation",
  description:
    "Bezeichnet die Überprüfung und Messung von Usability und UX eines Systems. Durch Methoden wie Tests und Nutzerfeedback wird ermittelt, ob die gewünschten Nutzungserfahrungen erreicht werden.",
  content: [
    <ChapterHeader text={"Evaluation"} number={6} />,
    <section>
      <div className="text-center p-10 pb-0 bg-slate-200 rounded-xl text-ux_dark flex flex-col justify-center items-center">
        Work in progress...
        <Link
          to={"/"}
          className="my-10 bg-slate-600 p-5 rounded-lg hover:bg-ux_grey hover:cursor-pointer text-ux_white">
          Zurück zur Kursübersicht
        </Link>
      </div>
    </section>,
  ],
};

const sectionsOutro = [
  { id: "1", title: "Outro" },
  { id: "2", title: "Warum fünf Grundbegriffe?" },
];

const Fazit = {
  linkName: "fazit",
  name: "Fazit",
  description: "Hier wird ein allgemeines Fazit geschlossen.",
  content: [
    <ChapterHeader text={"Fazit"} number={7} />,
    <section>
      <SubNavigation sections={sectionsOutro} />
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/wZx_RUdv9Bo?si=PL74OEuieI7W2hce&amp;rel=0&amp;modestbranding=1"
        }
        title={"Outro"}
      />
    </section>,
    <section>
      <h2>Die 5 Grundbegriffe und ihre Relevanz:</h2>
      <List
        items={[
          "<h4>Warum ist Usability wichtig für gemeinwohlorientierte KI?</h4> <p>Usability entspricht ungefähr dem, was viele unter „Benutzerfreundlichkeit“ verstehen. Sie stellt sicher, dass möglichst alle Menschen, unabhängig von ihrem technischen Wissen, die KI-Systeme effektiv, effizient und ohne große Hürden nutzen können. Dies ist entscheidend, um den Zugang zu gemeinwohlorientierten Diensten für eine breite Bevölkerungsschicht zu ermöglichen.</p>",
          "<h4>Warum ist es wichtig, den Nutzungskontext gemeinwohlorientierter KI zu analysieren und zu verstehen?</h4> <p>Die Analyse des Nutzungskontexts hilft, die Bedürfnisse, Fähigkeiten und Herausforderungen der Zielgruppen zu verstehen. Gerade in gemeinwohlorientierten Projekten sind Kenntnisse über soziale Hintergründe, Sprachkenntnisse, Ausbildungsniveau, Barrierefreiheit und die technische Ausstattung der Nutzer:innen essenziell, um die KI inklusiv und gerecht zu gestalten.</p>",
          "<h4>Welche Rolle spielt User Experience (UX) für gemeinwohlorientierte KI?</h4> <p>Eine positive UX fördert das Vertrauen in die KI und sorgt dafür, dass Menschen die Systeme gerne und regelmäßig nutzen. Gerade bei gemeinwohlorientierten Anwendungen kann eine intuitive und ansprechende UX die Akzeptanz und Wirksamkeit erheblich steigern.</p>",
          "<h4>Was hat Mensch-Computer-Interaktion mit gemeinwohlorientierter KI zu tun?</h4> <p>Die Mensch-Computer-Interaktion (MCI) oder Human-Computer Interaction (HCI) ist eine Forschungsdisziplin und liefert uns die notwendigen Methoden und Modelle, um die Interaktion zwischen Mensch und KI zu verbessern. Sie hilft, die Schnittstellen gebrauchstauglich, verständlich, aufgabenangemessen und barrierefrei zu gestalten. Besonders bei gemeinwohlorientierten Projekten ist es wichtig, die Bedürfnisse vielfältiger Nutzergruppen – etwa Senioren, Menschen mit Behinderungen oder technikferne Personen – zu berücksichtigen.</p>",
          "<h4>Wieso sollte man die UX gemeinwohlorientierter KI evaluieren?</h4> <p>Eine Evaluation macht sichtbar, ob die gemeinwohlorientierte KI tatsächlich ihren Zweck erfüllt und von den Menschen akzeptiert wird. Durch Tests, Nutzerfeedback und Datenauswertungen kann man  sicherstellen, dass die Systeme inklusiv, effizient und nachhaltig sind. Evaluationen helfen außerdem dabei, mögliche Diskriminierungen durch die Bedienkonzepte oder die KI frühzeitig zu erkennen und zu beheben.</p>",
        ]}
      />
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
      <h2>Literaturverzeichnis</h2>
      <ul>
        <li>
          Jetter, H.-C. (2023). D3 Mensch-Computer-Interaktion, Usability und
          User Experience. In R. Kuhlen, D. Lewandowski, W. Semar & C.
          Womser-Hacker (Hrsg.), <i>Grundlagen der Informationswissenschaft</i>{" "}
          (S. 525–534). De Gruyter Saur.{" "}
          <a
            href="https://doi.org/10.1515/9783110769043-045"
            target="_blank"
            rel="noreferrer">
            https://doi.org/10.1515/9783110769043-045
          </a>
        </li>
      </ul>
    </section>,
  ],
};

const UXBasicsData = {
  linkName: "ux-und-usability",
  name: "UX und Usability",
  moduleImage: ImageElement,
  content: [
    Einleitung,
    Usability,
    Nutzungskontext,
    UserExperience,
    MenschComputerInteraktion,
    Evaluation,
    Fazit,
    Quellen,
  ],
};

export default UXBasicsData;
