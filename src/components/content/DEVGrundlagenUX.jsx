import ImageElement from "../../assets/icons/usability.svg?react";
import { ChapterHeader } from "../3_organism/ChapterHeader";
import { VideoContainer } from "../1_elements/VideoContainer";
import Accordion from "../2_molecule/Accordion";
import SubNavigation from "../2_molecule/nav/SubNavigation";
import List from "../2_molecule/List";
import { Table } from "../2_molecule/Table";
import { TabSwitchView } from "../2_molecule/TabSwitchView";
import Sources from "../Sources";
import ThemeImage from "../1_elements/ThemeImage";
import BasicQuiz from "../interactive/Quiz/BasicQuiz";

import nutzungskontext_dark from "../../assets/images/grundlagenUX/nutzungskontext-dark.png";
import nutzungskontext_light from "../../assets/images/grundlagenUX/nutzungskontext-light.png";
import hcd_dark from "../../assets/images/grundlagenUX/hcd-dark.png";
import hcd_light from "../../assets/images/grundlagenUX/hcd-light.png";
import ucd_dark from "../../assets/images/grundlagenUX/ucd-dark.png";
import ucd_light from "../../assets/images/grundlagenUX/ucd-light.png";
import ux_dark from "../../assets/images/grundlagenUX/ux-dark.png";
import ux_light from "../../assets/images/grundlagenUX/ux-light.png";

import CheckIcon from "../../assets/icons/grundlagenUX/check.svg?react";
import ClockIcon from "../../assets/icons/grundlagenUX/clock.svg?react";
import LoveIcon from "../../assets/icons/grundlagenUX/love.svg?react";
import SmileIcon from "../../assets/icons/grundlagenUX/smile.svg?react";

import usability_quiz from "../SimpleQuizContent/grundlagenUX/usability.json";
import user_experience_quiz from "../SimpleQuizContent/grundlagenUX/user-experience.json";
import nutzungskontext_quiz from "../SimpleQuizContent/grundlagenUX/nutzungskontext.json";
import mensch_computer_quiz from "../SimpleQuizContent/grundlagenUX/mensch-computer.json";
import evaluation_quiz from "../SimpleQuizContent/grundlagenUX/evaluation.json";
import { LinkHandler } from "../1_elements/LinkHandler";

const sectionsIntro = [
  { id: "1", title: "Intro" },
  { id: "3", title: "Fünf Grundbegriffe" },
];

const Einleitung = {
  linkName: "einleitung",
  name: "DEV EINLEITUNG",
  description:
    "Hier wird ein Überblick über die Relevanz nutzerzentrierter Gestaltung und den Zusammenhang von Mensch und Technologie gegeben.",
  content: [
    <ChapterHeader text={"Ye ye ye"} number={1} />,
    <section>
      <SubNavigation sections={sectionsIntro} />
      <p>Test Test Test</p>
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
        Überlastung und Frustration bei den Nutzer:innen – also zu einer
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
          "<b>Effektivität</b> bedeutet, dass Nutzer:innen mit einem System ihre Aufgaben erfolgreich bewältigen können.",
          "<b>Effizienz</b> beschreibt, dass dies mit einem angemessenen Aufwand geschieht.",
          "<b>Zufriedenstellung</b> bezieht sich darauf, dass die Verwendung des Systems für ihre Aufgaben bei den Nutzer:innen keine starken negativen Emotionen wie Frustration oder Ärger auslöst.",
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
    <section>
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={usability_quiz} />
    </section>,
  ],
};

const sectionsNutzungskontext = [
  { id: "2", title: "Definition" },
  { id: "3", title: "Warum ist der Nutzungskontext wichtig?" },
  { id: "4", title: "Die 4 Bestandteile des Nutzungskontextes" },
  { id: "5", title: "Wie erfolgt eine Nutzungskontextanalyse?" },
  { id: "6", title: "Ausblick" },
];

const easeLearnUseTableData = [
  [
    <b>Kriterium</b>,
    <b>
      Ease of Learn <br />
      <b>(Erlernbarkkeit)</b>
    </b>,
    <b>
      Ease of Use <br />
      (Benutzungseffizienz)
    </b>,
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

const Nutzungskontext = {
  linkName: "nutzungskontext",
  name: "Nutzungskontext",
  description:
    "Bezieht sich auf die Rahmenbedingungen, unter denen ein System genutzt wird, einschließlich Nutzendenprofil, Aufgaben, Umgebung und Hilfsmittel. Ein tiefes Verständnis des Nutzungskontexts ist essenziell für eine benutzerzentrierte Gestaltung.",
  content: [
    <ChapterHeader text={"Nutzungskontext"} number={3} />,
    <section>
      <p>
        Beschreibt den Rahmen, in dem ein System verwendet wird. Dazu gehören
        die Nutzer:innen, ihre Aufgaben, ihre Umgebung und ihre Hilfsmittel. Man
        muss den Nutzungskontext verstehen, um Systeme wirklich
        benutzerzentriert zu gestalten und einsetzen zu können.
      </p>
      <Accordion sections={sectionsNutzungskontext} />
      <SubNavigation sections={sectionsNutzungskontext} />
    </section>,
    <section>
      <h2>Definition Nutzungskontext</h2>
      <p>
        Der Nutzungskontext beschreibt die Umstände, unter denen ein digitales
        System benutzt werden wird. Wer also ein benutzerfreundliches System
        gestalten will, sollte frühzeitig mit den Nutzer:innen zusammenarbeiten
        und folgende Aspekte des Nutzungskontext ermitteln:
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
        an, <b>wie gut das System in der Praxis funktioniert</b> (also in seinen
        realen Nutzungskontexten) und ob es von der Zielgruppe dabei{" "}
        <b>effektiv, effizient und zufriedenstellend</b> genutzt werden kann.
      </p>
      <div className="w-full flex justify-center mb-[56px]">
        <ThemeImage
          darkSrc={nutzungskontext_dark}
          lightSrc={nutzungskontext_light}
          alt="Bild Nutzungskontext"
        />
      </div>
      <p>
        Daher ist es wichtig, frühzeitig mit der Zielgruppe in Kontakt zu treten
        und ihre Perspektive bei der Konzeption und Entwicklung mit
        einzubeziehen. Das kann die spätere Akzeptanz und den Erfolg des Systems
        deutlich erhöhen. Auf den ersten Blick wirkt dies aufwändig und
        vielleicht sogar abschreckend. Dennoch gilt hier das Motto "Alles ist
        besser als nichts!". Bereits einige wenige informelle Gespräche mit
        zukünftigen Benutzer:innen, Notizen über deren Arbeitsweise und Fotos
        von deren Arbeitsumgebung können schon helfen, um den Nutzungskontext
        erheblich besser zu verstehen. Selbst kleine Schritte sind immer noch
        besser, als dass eine Software vom bequemen Schreibtisch und fernab vom
        realen Nutzungskontext komplett am Bedarf vorbei gestaltet wird. Deshalb
        ist es auf jeden Fall wichtig, direkt mit den realen Zielgruppen in
        Kontakt zu treten – selbst wenn es nur für ein informelles Gespräch beim
        Kaffee ist.
      </p>
    </section>,
    <section>
      <h2>Die vier Bestandteile des Nutzungskontextes im Detail</h2>
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
        <LinkHandler to="/ux-und-usability/mensch-computer-interaktion">
          <b>Mensch-Computer-Interaktion</b>
        </LinkHandler>
      </p>
      <p>Dabei können verschiedene Aspekte analysiert werden:</p>
      {/* Hier reine Liste oder auch mit Komponente für nummern? */}
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
      <h3>2. Aufgaben</h3>
      <p>
        Die Aufgaben beschreiben, was die Benutzer:innen mit einem System
        erreichen wollen. Das hat großen Einfluss darauf, welche Funktionen ein
        System besitzt.
      </p>
      <p>Dazu könnte man sich folgende Aspekte ansehen:</p>
      {/* Same here: Reine Liste oder nummeriert? */}
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
        Im Rahmen der Entwicklung eines neuen Systems lohnt es sich, alle diese
        Aspekte der Aufgaben zu analysieren und zu dokumentieren. Damit lassen
        sich klarere Anforderungen an das neue System formulieren.
      </p>
      <p>
        Zum Beispiel kann die Häufigkeit und Bearbeitungsdauer einer Aufgabe
        eine große Rolle spielen. Wenn eine Aufgabe sehr typisch und häufig ist,
        so sollte die entsprechende Funktion zu deren Bearbeitung mit dem System
        besonders sorgfältig gestaltet sein!
      </p>
      <p>
        Wird sie z.B. täglich oder sogar mehrmals täglich verwendet, dann ist
        unbedingt zu vermeiden, dass viele Informationen immer neu eingegeben
        oder Teilschritte stupide wiederholt werden müssen. Um häufige Aufgaben
        schneller bearbeiten zu können, dürfen auch Funktionen integriert
        werden, die etwas komplexer zu erlernen und zu bedienen sind, z.B.
        Tastaturkürzel, vorausgefüllte Vorlagen und Template oder die
        Möglichkeit zur Speicherung wiederverwendbarer Standard-Textbausteine
        oder Makros. Das ist wünschenswert, sofern sich damit im Endeffekt die
        Aufgaben schneller und besser erledigen lassen. Man spricht hier vom{" "}
        <b>“Ease of Use”</b> und die Effizienz steht dabei im Vordergrund, da
        man davon ausgeht, dass die Benutzer:innen in solchen Funktionen
        geschult werden und viel Übung haben.
      </p>
      <p>
        Eine Funktion, die von ungeschulten Benutzer:innen nur sehr selten
        verwendet wird, muss sich dagegen viel einfacher, selbsterklärender und
        “intuitiver” präsentieren. Man spricht hier vom <b>“Ease of Learn”</b>{" "}
        und die Erlernbarkeit steht dabei im Vordergrund.
      </p>
      <p>
        <b>Ease of Use</b> (auch Benutzungseffizienz) und <b>Ease of Learn</b>{" "}
        (oft als Erlernbarkeit bezeichnet) sind zwei zentrale, aber
        unterschiedliche Qualitätsmerkmale bei der Gestaltung und Bewertung von
        Softwaresystemen. Die Unterscheidung ist gerade im Hinblick auf
        unterschiedliche Zielgruppen, etwa interne Nutzer:innen (Mitarbeitende)
        vs. externe Nutzer:innen (Kunden:innen, Klienten), entscheidend.
      </p>
      <Table
        data={easeLearnUseTableData}
        headerStyle={true}
        verticalAlignCells={true}
      />
      <h4>Beispiele wie Ease of Use und Ease of Learn Einfluss haben</h4>
      <p>
        In einer Organisation zur Hilfe von Geflüchtete wird ein KI-gestütztes
        Übersetzungstool eingesetzt. Die Helfer:innen haben generell sehr
        unterschiedliche technische Fähigkeiten und Vorerfahrungen mit KI-Tools.
        Das System sollte daher neue oder ungeübte Nutzer:innen nicht mit zu
        vielen Funktionen überfordern. Funktionen für Fortgeschrittene, die eher
        erfahrenen Benutzer:innen helfen, sollten optional sein und den
        Erstkontakt nicht unnötig erschweren. Für die Geflüchteten muss das Tool
        zusätzlich auch verschiedene Alphabetisierungsniveaus abdecken. Manche
        Benutzer:innen werden nicht oder nur schlecht lesen können, weshalb hier
        eine Sprachausgabe und Piktogramme notwendig sind. Das Übersetzungstool
        muss also für viele unterschiedliche Bedürfnisse angepasst werden, um
        wirklich gebrauchstauglich zu sein.
      </p>
      <p>
        Bei internen Systeme, z. B. für Mitarbeitende, kann es sinnvoll sein,
        den Ease of Learn etwas zugunsten des Ease of Use zu vernachlässigen,
        wenn die Nutzer:innen regelmäßig und intensiv mit dem System arbeiten.
        Eine kurze, initiale Schulung ist oft akzeptabel, solange das System
        anschließend effizient und produktiv genutzt werden kann.
      </p>
      <p>
        Bei Front-facing Systeme (für Klienten/Kunden) hingegen ist der Ease of
        Learn besonders kritisch, weil die Nutzer:innen oft keine oder nur wenig
        Vorerfahrung mit dem System haben und keine Schulung erhalten. Das
        System muss somit schnell verständlich sein, damit sie ihre Ziele ohne
        Frustration erreichen.
      </p>
      <h3>3. Chatbots als Allheilmittel</h3>
      <p>
        Durch den Erfolg von ChatGPT wird heute sehr oft die Automatisierung von
        Aufgaben durch Chatbots als eine Art Allheilmittel betrachtet. Dies
        erscheint zunächst vielversprechend, da Chatbots bereits effizient und
        vielfältig eingesetzt werden, z.B. für die automatische Beantwortung von
        Kundenanfragen oder für Auskünfte über interne Prozesse in
        Organisationen oder gesetzliche Richtlinien. Hier ist jedoch Vorsicht
        geboten! Erfolgreiche Chatbots benötigen eine Datengrundlage mit
        entsprechend hoher Qualität. Die dort enthaltenen Informationen müssen
        korrekt und auch in für die KI verarbeitbaren Strukturen vorliegen.
        Chaotische, unstrukturierte und schlecht zu verarbeitende Sammlungen von
        Dateien und Dokumenten in verschiedensten Ordnerstrukturen und Formaten
        lassen sich auch durch eine moderne KI nicht einfach in eine
        zuverlässige Informationsquelle verwandeln. Auch hier gilt der
        Informatik-Grundsatz <b>“Garbage in, Garbage out!”</b>.
      </p>
      <p>
        Selbst bei gepflegten Dokumentenbeständen als Wissensgrundlage für
        Chatbots zeigt sich nach der Implementierung nicht selten eine große
        Unzufriedenheit der Nutzer:innen, da ihre realen Aufgaben, Erwartungen,
        Informationsbedürfnisse und Anforderungen bei der Entwicklung nicht
        ausreichend berücksichtigt wurden. Das ist insbesondere dann
        problematisch, wenn die Qualität des eigenen Chatbots im Vergleich zu
        den mit dem gesamten Wissen der Welt trainierten KI-Systemen globaler
        IT-Konzerne in der Wahrnehmung der Benutzer:innen schlecht abschneidet.
      </p>
      <p>
        Um solche Szenarien zu vermeiden, ist es ratsam, vorher den
        Nutzungskontext genau zu analysieren und darauf zu achten, dass die
        Aufgaben und Anforderungen der Benutzer:innen überhaupt mit den
        vorhandenen Technologien und Daten erfüllt werden können. Im Modul{" "}
        <LinkHandler to={"/automatisierungspotenziale-erkennen"}>
          <b>Automatisierungspotenziale erkennen</b>
        </LinkHandler>{" "}
        werden wir uns eingehend damit beschäftigen, wie Automatisierungs- und
        KI-Potenziale identifiziert werden können und wie man frühzeitig
        bewerten kann, welche Prozesse sich dafür eignen, bevor eine Umsetzung
        durchgeführt oder beauftragt wird.
      </p>

      <h3>4. Umgebung</h3>
      <p>
        Ein System muss je nach Umgebung sehr unterschiedliche Anforderungen
        erfüllen, um wirklich wirksam nutzbar zu sein. Die folgenden Bereiche
        gehören zur Umgebung
      </p>
      <p>
        <b>Soziale Umgebung:</b>
      </p>
      <ul>
        <li>
          <b>Arbeitsstruktur</b>, z.B. Einzelarbeit oder Teamarbeit mit KI-Tools
        </li>
        <li>
          <b>Unterbrechungen</b> im Arbeitsalltag und bei Aufgaben
        </li>
        <li>
          <b>Unterstützung oder Schulungen</b>, z.B. IT-Support bei Problemen
          mit der KI oder Training mit neuen Systemen
        </li>
        <li>
          <b>Organisationskultur</b>, z.B. Akzeptanz von KI-Assistenz
        </li>
      </ul>
      <p>
        <b>Physische Umgebung:</b>
      </p>
      <ul>
        <li>
          <b>Arbeitsplatzbedingungen</b>, z.B. Lärmpegel in der Umgebung und die
          Anwesenheit anderer Personen vs. Zuverlässigkeit und Datenschutz bei
          Spracheingabe, Spiegelungen, Lichteinstrahlung und Handschuhe vs.
          Outdoor-Einsatz eines Touchscreens
        </li>
        <li>
          <b>Technische Ausstattung</b>, z.B. verfügbare Rechen- und
          Grafikleistung auf Mobilgeräten, Stabilität und Geschwindigkeit der
          Internetverbindung, Bildschirmgröße und -auflösung
        </li>
        <li>
          <b>Arbeitsplatzausstattung</b>, z.B. Verwendung im Büro, mobile
          Verwendung im Stehen oder Sitzen, Verfügbarkeit von Teamarbeitsplätzen
          mit Projektor oder digitalem Whiteboard
        </li>
      </ul>
      <p>
        Hier ist ein Beispiel: Eine KI-Anwendung zur Sprachübersetzung wird in
        zwei gemeinwohlorientierten Organisationen eingesetzt.
      </p>
      <Accordion
        title="1. Mobiler Beratungsbus für Geflüchtete"
        initiallyOpen={false}>
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
      </Accordion>
      <div className="mb-12">
        {" "}
        {/* TODO: uniform distance */}
        <Accordion
          title="2. Digital ausgerichtete NGO mit Online-Beratung"
          initiallyOpen={false}>
          <p>
            In einer digital ausgerichteten NGO, die Online-Beratung anbietet,
            arbeiten die Teams in ruhigen Büros mit ergonomischen
            Arbeitsplätzen. Dort stehen leistungsfähige Laptops oder Desktop-PCs
            mit großen Bildschirmen, Headsets und stabiler Internetverbindung
            zur Verfügung. Die Beratungen folgen einem festen Zeitplan und
            ermöglichen konzentriertes Arbeiten.
          </p>
        </Accordion>
      </div>
      <h3>5. Hilfsmittel</h3>
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
        <li>
          <b>Nicht-digitale Werkzeuge und Objekte</b>, z.B. Stifte, Notizzettel,
          Formulare, Laufkarten
        </li>
      </ul>
      <p>
        Obwohl Hardware, Software und Dokumentation natürlich einen
        unmittelbaren Einfluss auf die erfolgreiche Verwendung bzw. Usability
        eines Systems haben, sollte die Rolle der nicht-digitalen Werkzeuge und
        Objekte keinesfalls unterschätzt werden. Viele Prozesse laufen heute
        noch papier-basiert ab. Beispielsweise werden auch heute noch wichtige
        Informationen auf Handzetteln ausgegeben oder über Formulare abgefragt.
        Laufkarten und Notizen begleiten Personen, Gegenstände oder Akten durch
        eine Organisation und ermöglichen es, entscheidende (Meta-)Informationen
        festzuhalten (z.B. Hintergründe, Internas, Vorgeschichten), die in
        digitalen Systemen oftmals komplett wegfallen. Es lohnt sich also einen
        Blick auf diese wichtigen nicht-digitalen Werkzeuge und Objekte zu
        werfen, bevor man Aufgaben digitalisiert oder automatisiert. Nur so kann
        sicher gestellt werden, dass den Benutzer:innen nachher nicht im System
        entscheidende Möglichkeiten zur Informationseingabe und -weitergabe
        fehlen.
      </p>
    </section>,
    <section>
      <h2>Wie erfolgt eine Nutzungskontextanalyse?</h2>
      <p>
        Die Nutzungskontextanalyse untersucht die vier oben genannten Aspekte.
        Dabei ist zu unterscheiden, ob ein neues Produkt entwickelt oder ein
        bestehendes überarbeitet wird. Bei bestehenden Produkten kann auf
        vorhandenes Wissen oder frühere Tests zurückgegriffen werden. Bei
        Neuentwicklungen muss der Nutzungskontext vollständig neu erhoben
        werden.
      </p>
      <p>
        Anmerkung: Dabei wird vom Idealfall ausgegangen. Wir wissen sehr gut,
        dass die Realität oft weit davon entfernt ist und eine solche Analyse
        oftmals nicht so umfassend durchgeführt werden kann. Daher gilt hier
        wieder “Alles ist besser als nichts!”.
      </p>
      <p>Die Analyse erfolgt in zwei Schritten:</p>
      <TabSwitchView>
        <div title="1. Datenerhebung">
          <p>
            Zunächst werden Informationen über Benutzende, Aufgaben und
            Nutzungssituation gesammelt. Mögliche Methoden:
          </p>
          <ul>
            <li>
              {" "}
              <b>Interviews</b>: Gezielte Befragung von Nutzer:innen oder
              Expert:innen.
            </li>
            <li>
              {" "}
              <b>Umfragen</b>: Standardisierte Erhebung von Meinungen und
              Erfahrungen über Fragebögen.
            </li>
            <li>
              {" "}
              <b>Fokusgruppen</b>: Gruppendiskussion zur Sammlung
              unterschiedlicher Perspektiven.
            </li>
          </ul>
        </div>
        <div title="2. Analyse & Dokumentation">
          <p>
            Die gesammelten Daten werden geordnet und aufbereitet, z. B. durch:
          </p>
          <ul>
            <li>
              {" "}
              <b>Personas</b>: Fiktive, aber realitätsnahe Nutzerprofile.
            </li>
            <li>
              {" "}
              <b>Nutzungsszenarien, Problemszenarien</b>: Beschreibungen
              typischer Nutzungs- oder Problemsituationen.
            </li>
            <li>
              {" "}
              <b>Aufgabenanalyse</b>: Zerlegung von Aufgaben in Teilaufgaben
              (z.B. mittels Hierarchical Task Analysis).
            </li>
          </ul>
        </div>
      </TabSwitchView>
      <p>
        Auf Basis dieser Analysen werden <b>Usability-Ziele</b> und{" "}
        <b>konkrete Nutzungsanforderungen</b> abgeleitet. Diese sind die
        Grundlage für Gestaltung und Evaluation. Später können damit gezielte{" "}
        <b>Usability-Tests</b> durchgeführt werden. Kontexte können sich ändern,
        also kann die Analyse kontinuierlich wiederholt werden. Mehr dazu in den
        Kapiteln{" "}
        <LinkHandler to={"/ux-und-usability/mensch-computer-interaktion"}>
          Mensch-Computer-Interaktion
        </LinkHandler>{" "}
        und{" "}
        <LinkHandler to={"/ux-und-usability/evaluation"}>
          Evaluationen
        </LinkHandler>
        .
      </p>
    </section>,
    <section>
      <h2>Ausblick</h2>
      <p>
        Die festgelegten Anforderungen und Ziele an das System beziehen sich
        nicht nur auf die Gebrauchstauglichkeit (Usability), sondern auch auf{" "}
        <b>emotionale Aspekte</b>. Dazu gehört, dass sich die Nutzung eines
        Systems stimmig, angenehm oder motivierend anfühlt. Mehr dazu erläutern
        wir im nächsten Kapitel zur{" "}
        <LinkHandler to={"ux-und-usability/user-experience"}>
          <b>User Experience (UX)</b>
        </LinkHandler>
        .
      </p>
    </section>,
    <section>
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={nutzungskontext_quiz} />
    </section>,
  ],
};

const sectionsUX = [
  { id: "2", title: "Was ist UX?" },
  { id: "3", title: "UX als Markenversprechen und Erwartungshaltung" },
  { id: "4", title: "Wie erreicht man eine gute UX?" },
  { id: "5", title: "Wichtige UX-Faktoren im Detail" },
  { id: "6", title: "Beispiel KI-Chatbot" },
  { id: "7", title: "Fazit: UX bedeutet Nutzerzentrierung" },
];

const pragamatischeHedonischTableData = [
  [
    <b>
      Pragmatische Qualität <br />
      (PQ)
    </b>,
    <b>
      Hedonische Qualität <br />
      (HQ)
    </b>,
  ],
  [
    "Klar, unterstützend, nützlich, beherschbar",
    "Besonders, beeindruckend, aufregend, cool",
  ],
  [
    <>
      Fokus: <b>Gebrauchstauglichkeit & Nutzen</b>
    </>,
    <>
      Fokus: <b>Vergnügen & Wohlbefinden</b>
    </>,
  ],
];

const weitereAspkteTableDate = [
  [<b>Aspekt</b>, <b>Beschreibung</b>],
  [
    <b>Emotionale Bindung & Vertrauen</b>,
    "Positive Emotionen fördern die Bindung und Vertrauen in das Produkt.",
  ],
  [
    <b>Konsistenz</b>,
    'Das "Benutzungserlebnis" sollte über alle Geräte hinweg stimmig sein, egal ob Smartphone, Tablet oder Desktop.',
  ],
  [
    <b>Barrierefreiheit & Inklusion</b>,
    "UX muss alle Nutzer:innen einbeziehen, auch z. B. Menschen mit Seh- oder motorischen Einschränkungen.",
  ],
  [
    <b>Feedback & Fehlervermeidung</b>,
    "Nutzer:innen sollten klares Feedback erhalten und vor möglichen Fehlern geschützt werden.",
  ],
  [
    <b>Interaktives Design & ständige Verbesserung</b>,
    "UX ist ein fortlaufender Prozess. Nutzerfeedback ist essentiell für kontinuierliche Optimierung.",
  ],
];

const UserExperience = {
  linkName: "user-experience",
  name: "User Experience",
  description:
    "Umfasst das gesamte Nutzungserlebnis eines Produkts, einschließlich subjektiver Empfindungen wie Ästhetik, Vertrauen und Freude. UX geht über Usability hinaus und ist heute ein Schlüssel zum Produkterfolg.",
  content: [
    <ChapterHeader text={"User Experience"} number={4} />,
    <section>
      <p>
        User Experience umfasst das gesamte Nutzungserlebnis eines Produkts,
        einschließlich subjektiver Empfindungen wie Ästhetik, Vertrauen und
        Freude. UX geht über Usability hinaus und ist heute ein Schlüssel zum
        Erfolg aller Arten von Produkten.
      </p>
      <Accordion sections={sectionsUX} />
      <SubNavigation sections={sectionsUX} />
    </section>,
    <section>
      <h2>Was ist UX?</h2>
      <p>
        Die <b>User Experience</b> (UX) ist ein immer wichtigeres Ziel bei der
        Gestaltung digitaler Systeme. Auch wenn es dafür unterschiedliche
        Übersetzungen gibt, ist <b>„Benutzungserlebnis”</b> unserer Meinung nach
        der passendste deutsche Begriff. UX beschreibt die Gesamtheit der
        Eindrücke, Gefühle und Erlebnisse, die Nutzer:innen{" "}
        <b>vor, während und nach der Interaktion</b> mit einem Produkt oder
        System haben. Gute Usability wird mittlerweile vorausgesetzt. Aber
        Erlebnisse, die den Benutzer:innen einen Eindruck von
        Leistungsfähigkeit, Eleganz, Attraktivität und Zuverlässigkeit des
        Systems vermitteln? Diese bleiben in Erinnerung und machen den
        Unterschied!
      </p>
      <p>Nehmen wir als Beispiel ein Smartphone:</p>
      <ul>
        <li>
          Bereits vor der ersten Nutzung können Vorfreude und Erwartungen
          entstehen, etwa durch Werbung, Design oder das Markenimage.
        </li>
        <li>
          Während der Nutzung sind nicht nur Funktionalität und Usability
          wichtig, sondern auch der Spaß, die emotionale Wirkung und die
          Attraktivität des Systems bei der Verwendung.
        </li>
        <li>
          Nach der Nutzung, etwa nach der Verwendung einer App, dem
          Fotografieren oder einem Telefonat, können Gefühle wie Zufriedenheit,
          Vertrauen, Stolz, aber auch Frustration auftreten.
        </li>
      </ul>
      <h4>User Experience nach ISO</h4>
      <div className="w-full flex justify-center mb-[56px] mt-[var(--scale4)]">
        <ThemeImage
          darkSrc={ux_dark}
          lightSrc={ux_light}
          alt="User Experience Grafik"
        />
      </div>
      <p>
        Die UX wird durch emotionale, soziale und kulturelle Aspekte geprägt,
        also dadurch, wie das Produkt in das Leben der Nutzer:innen eingebettet
        ist. Ein Produkt, das nicht nur funktioniert, sondern auch Freude
        bereitet und positiv im Gedächtnis bleibt, hebt sich deutlich von
        anderen ab.
      </p>
      <p className="specialText">
        Laut ISO 9241-210 umfasst die UX „alle Wahrnehmungen und Reaktionen
        einer Person, die sich aus der Nutzung oder erwarteten Nutzung eines
        Produkts, Systems oder einer Dienstleistung ergeben.“
      </p>
    </section>,
    <section>
      <h2>UX als Markenversprechen</h2>
      <p>
        Die Bedeutung von UX ist bei Systemen für gemeinwohlorientierte
        Organisationen nicht immer auf den ersten Blick ersichtlich. Hier steht
        meist nicht der Spaß im Vordergrund, sondern dass Endnutzer:innen gut
        beraten werden und relevante Informationen erhalten oder Mitarbeitende
        schnell zuverlässige Prognosen für ihre Ressourcenplanung bekommen.
      </p>
      <p>
        Dennoch sind UX und ihre emotionalen Komponenten entscheidend. Jedes
        System, das im Kontext einer gemeinwohlorientierten Organisation
        angeboten wird, verändert deren Wahrnehmung von außen und auch von
        innen. Entspricht die Wirkung des Systems der selbstgewählten Mission,
        dem Selbstverständnis und der Zuverlässigkeit, für die die Organisation
        stehen will?{" "}
      </p>
      <p>
        Wenn die Vorfreude oder Erwartungshaltung der Endnutzer:innen
        beispielsweise enttäuscht wird, weil ein Chatbot nicht so hilfreich ist
        wie erwartet, führt das zu Frustration und Ablehnung. Unter Umständen
        kann sogar ein Imageschaden für die Gesamtorganisation entstehen. Auch
        wenn es ein internes Prognosewerkzeug versäumt, seinen Nutzer:innen die
        vorhandenen Beschränkungen und Unsicherheiten in der Vorhersage
        klarzumachen, kann das schnell zu einem Vertrauensverlust und einer
        kompletten Ablehnung des Systems führen. Das ist besonders tragisch,
        wenn das System eigentlich gute Dienste leisten könnte, aber vielleicht
        nur in wenigen Situationen überfordert war.
      </p>
      <p>
        Es lohnt sich also, digitale Systeme nicht nur durch eine rein
        funktionale und pragmatische Brille zu betrachten. Anstelle von
        „Funktioniert es?” und „Wie gut kommen die Nutzer:innen damit zurecht?”
        tritt zusätzlich die Frage „Wie wirkt es auf die Nutzer:innen und ist
        dies die erwünschte Wirkung?”.
      </p>
    </section>,
    <section>
      <h2>Wie erreicht man eine gute UX?</h2>
      <p>
        Eine gute User Experience (UX) kann nicht direkt „designt“ werden, denn
        sie entsteht im subjektiven Erleben der Nutzer:innen. Oder wie Preece et
        al. (2015) treffend formulieren:
      </p>
      <p className="specialText text-center">
        „You cannot design a user experience, only design for a user
        experience.“
      </p>
      <p>
        Das bedeutet: UX-Designer:innen können ein System unter Berücksichtigung
        des Nutzungskontextes so gestalten, dass positive Nutzungserlebnisse
        möglichst wahrscheinlich werden. Entscheidend ist dabei ein
        nutzerzentrierter Ansatz, bei dem der Mensch und seine Bedürfnisse im
        Mittelpunkt stehen.{" "}
      </p>
      <p>
        Im nächsten Kapitel zur{" "}
        <LinkHandler to="/ux-und-usability/mensch-computer-interaktion">
          <b>Mensch-Computer-Interaktion (HCI)</b>
        </LinkHandler>{" "}
        lernen Sie zentrale Methoden zur nutzerzentrierten Gestaltung kennen.
        Zuvor befassen wir uns jedoch mit den Zielen und grundlegenden Aspekten
        guter UX.
      </p>
      <p>
        <b>Zentrale Ziele einer guten UX können sein:</b>
      </p>
      <ul>
        <li>
          <b>Produktive und einfache Interaktion</b>, die Nutzer:innen effizient
          ans Ziel bringt
        </li>
        <li>
          <b>Erfüllende und zufriedenstellende Nutzung</b>, die den Bedürfnissen
          entspricht
        </li>
        <li>
          <b>Positive Emotionen</b>, etwa das Gefühl, etwas „Cooles“,
          „Einzigartiges“ oder „Elegantes“ zu nutzen
        </li>
        <li>
          <b>Stärkere Markenbindung</b>, weil das Nutzungserlebnis positiv in
          Erinnerung bleibt
        </li>
      </ul>
    </section>,
    <section>
      <h2>Wichtige UX-Faktoren im Detail</h2>
      <h3>1. Erlebnispotential</h3>
      <p>
        Gute UX ermöglicht nicht nur das Erreichen eines Zieles, sondern schafft
        Erlebnisse. Wichtige Fragen dabei sind:
      </p>
      <ul>
        <li>Wie fühle ich mich bei der Nutzung?</li>
        <li>Wer kann ich durch das Produkt sein?</li>
        <li>Welche Erlebnisse ermöglicht mir das Produkt?</li>
      </ul>
      <h3>2. Pragmatische und hedonische Qualität (nach Hasssenzahl)</h3>
      <p>
        Wir können also festhalten, UX bedeutet, wie Menschen eine Website, App
        oder ein Produkt erleben - und das betrifft nicht nur,{" "}
        <b>wie gut etwas funktioniert</b>, sondern auch,
        <b>wie es sich dabei anfühlt</b>. Also: Es geht sowohl um die praktische
        Seite (z. B. „Finde ich schnell, was ich suche?“) als auch um die{" "}
        <b>emotionale</b> (z. B. „Macht es mir Spaß, das zu benutzen?“ oder
        „Fühlt es sich angenehm an?“). Im Forschungskontext lässt sich dies als
        so genannte pragmatische und hedonische Qualitäten aufschlüsseln:
      </p>
      <Table data={pragamatischeHedonischTableData} headerStyle={true} />
      <h3>3. Weitere Aspekte guter UX:</h3>
      <Table data={weitereAspkteTableDate} headerStyle={true} />
    </section>,
    <section>
      <h2>Beispiel KI-Chatbot</h2>
      <div className="mb-[var(--scale2)]">
        Hier finden Sie je ein Beispiel für eine gute und eine schlechte User
        Experience bei einem KI-Chatbot:
      </div>
      <Accordion title="Beispiel für gute UX" initiallyOpen={false}>
        <p>
          Ein KI-gestützter Chatbot kann eine positive User Experience bieten,
          wenn er sich intuitiv bedienen lässt, natürliche Sprache verwendet und
          klare Anweisungen gibt. Besonders überzeugend ist das
          Benutzungserlebnis, wenn der Chatbot Probleme schnell und präzise
          löst, sich an die individuellen Bedürfnisse und Präferenzen der
          Nutzer:innen anpasst und dabei eine freundliche, empathische
          Atmosphäre schafft.
        </p>
      </Accordion>
      <Accordion title="Beispiel für schlechte UX" initiallyOpen={false}>
        <p>
          Negative UX entsteht hingegen, wenn es zu Missverständnissen kommt,
          etwa weil Benutzereingaben falsch interpretiert oder unklare Antworten
          gegeben werden. Auch mangelnde Flexibilität, also die Unfähigkeit, auf
          unerwartete oder komplexe Anliegen einzugehen, beeinträchtigt das
          Nutzungserlebnis. Lange Reaktionszeiten, unnötige Interaktionen und
          wiederholte Eingabeaufforderungen führen schnell zu Frustration, da
          sie den Dialog ermüdend und ineffizient wirken lassen.
        </p>
      </Accordion>
    </section>,
    <section>
      <h2>Fazit: UX bedeutet Nutzerzentrierung</h2>
      <p>
        User Experience bedeutet, den Menschen und seine Bedürfnisse konsequent
        in den Mittelpunkt zu stellen. Dabei geht es nicht nur um ansprechende
        Oberflächen, sondern um die Gestaltung sinnvoller, angenehmer und
        benutzerfreundlicher Produkte, die positive Erlebnisse und Emotionen
        fördern.
      </p>
      <p>
        Im nächsten Kapitel lernen Sie, wie mithilfe nutzerzentrierter Methoden
        im Rahmen der{" "}
        <LinkHandler to="/ux-und-usability/mensch-computer-interaktion">
          <b>Mensch-Computer-Interaktion (HCI)</b>
        </LinkHandler>{" "}
        eine positive UX systematisch gestaltet und evaluiert werden kann.
      </p>
    </section>,
    <section>
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={user_experience_quiz} />
    </section>,
  ],
};

const sectionsHCI = [
  { id: "2", title: "Definition Mensch-Computer-Interaktion" },
  { id: "3", title: "Warum ist menschenzentrierte Gestaltung wichtig?" },
  { id: "4", title: "Vorgehensweise für menschzentrierte Gestaltung" },
  { id: "5", title: "Fazit" },
];

const MenschComputerInteraktion = {
  linkName: "mensch-computer-interaktion",
  name: "Mensch-Computer-Interaktion",
  description:
    "Eine interdisziplinäre Forschungsdisziplin, die sich mit der Gestaltung von Interaktionen zwischen Menschen und Technologie beschäftigt. Ziel ist es, positive Nutzungserfahrungen durch optimierte Design- und Entwicklungsprozesse zu schaffen.",
  content: [
    <ChapterHeader text={"Mensch-Computer-Interaktion"} number={5} />,
    <section>
      <p>
        Mensch-Computer-Interaktion ist eine interdisziplinäre
        Forschungsdisziplin, die sich unter anderem mit der Gestaltung von
        Interaktionen zwischen Menschen und Technologie beschäftigt. Ziel ist
        es, positive Nutzungserlebnisse durch optimierte Design- und
        Entwicklungsprozesse zu schaffen.
      </p>
      <Accordion sections={sectionsHCI} />
      <SubNavigation sections={sectionsHCI} />
    </section>,
    <section>
      <h2>Definition Mensch-Computer-Interaktion (HCI)</h2>
      <p>
        Die Mensch-Computer-Interaktion (engl. Human-Computer Interaction, HCI)
        ist ein interdisziplinäres Forschungsfeld, das sich mit der Gestaltung,
        Umsetzung und Bewertung interaktiver Computersysteme für die Nutzung
        durch Menschen befasst. Im Zentrum steht die Frage, wie Computer und
        Technologien so gestaltet werden können, dass sie für Nutzer:innen
        möglichst einfach, effizient, angenehm und sinnvoll bedienbar sind.
      </p>
      <p>
        Ursprünglich richtete sich die Nutzung von Computersystemen an
        Expert:innen. Heute sind interaktive Technologien allgegenwärtig und
        müssen für alle Menschen einfach und angenehm nutzbar sein.{" "}
      </p>
      <p>
        <b>HCI vs. UX vs. Interaktionsdesign</b>: Der Begriff HCI wird
        überwiegend im wissenschaftlichen Kontext verwendet und bezieht sich
        meist auf die Mensch-Computer-Interaktion als Forschungsdisziplin. Das
        Konzept der User Experience (UX) ist eines der zentralen Ergebnisse
        dieser Forschung und hat sich schnell in der Praxis verbreitet. In
        dieser Praxis versuchen Interaktionsdesigner:innen die UX systematisch
        zu verbessern. Man kann also sagen: Die HCI erforscht die Beziehung
        zwischen Mensch und Computer. Sie liefert neue Konzepte, Methoden,
        Prozesse und Technologien für das Interaktionsdesign. Das Ziel ist
        dabei, die UX realer System in der Praxis zu verbessern, z.B. durch die
        Schaffung positiverer oder "besserer" Nutzungserlebnisse.
      </p>
    </section>,
    <section>
      <h2>Warum ist menschzentrierte Gestaltung wichtig?</h2>
      <p>
        Ein zentrales Ziel menschzentrierter Gestaltung ist es, die Lücke
        zwischen den Vorstellungen der Nutzer:innen und der tatsächlichen
        Funktionsweise eines Systems zu überbrücken. Denn Nutzer:innen und
        Designer:innen haben oft unterschiedliche <b>mentale Modelle</b>, also
        innere Vorstellungen davon, wie ein System funktioniert bzw.
        funktionieren soll.
      </p>
      <p>
        Mentale Modelle beruhen auf Erfahrungen, Intuitionen und Analogien.
        Jakob Nielsen (2010) beschreibt sie so: „A mental model is what the user
        believes about the system at hand.“ Es basiert auf Glauben, nicht auf
        Fakten. Sie helfen dabei, Komplexität zu reduzieren, indem sie Konzepte
        und deren Beziehungen vereinfacht abbilden. Damit erfüllen seine
        wichtige Rolle, um unseren Alltag voller Technologien zu bestreiten.
        Viele Menschen können bspw. ihre PKWs oder Mobiltelefone bedienen, weil
        sie ein mentales Modell von unterschiedlichen Funktionsweisen haben. Ein
        vollständiges Wissen darüber, wie genau ein Elektromotor funktioniert
        ist nicht notwendig, um ein E-Auto zu bedienen.
      </p>
      <p>
        Designer:innen oder Entwickler:innen verfügen meist über ein tieferes
        technisches Verständnis, wodurch sich ihre Modelle oft von denen der
        Nutzer:innen unterscheiden. Umso wichtiger ist nutzerzentriertes Design:
        „Design with users, not just for users.“ Gute Gestaltung folgt den
        mentalen Modellen der Nutzer:innen.{" "}
      </p>
      <h3>Ein Beispiel für ein mentales Modell</h3>
      <p>
        Viele Nutzer:innen gehen davon aus, dass ein KI-Chatbot „wie ein Mensch“
        denkt und versteht. Ihr mentales Modell basiert auf natürlicher Sprache,
        schnellen Antworten und auf scheinbarem Verständnis. In Wirklichkeit
        verarbeitet der Chatbot jedoch statistische Wahrscheinlichkeiten und
        greift auf große Sprachmodelle zurück. Ein echtes Verständnis im
        menschlichen Sinn ist somit nicht gegeben. Dennoch ermöglicht dieses
        vereinfachte Modell eine einfache Nutzung: Fragen stellen, Antworten
        erhalten, Probleme lösen.{" "}
      </p>
      <p>
        Das Design solcher Systeme greift diese mentalen Modelle also auf, um
        die Bedienung zu erleichtern. Es kann aber auch zu falschen Erwartungen
        und Frustration führen, wenn der Chatbot an seine Grenzen stößt. Daher
        müssen klare Hinweise auf die tatsächlichen Fähigkeiten und Begrenzungen
        gegeben werden, um realistische Erwartungen zu fördern bspw. indem
        irreführende Beschreibungen wie “das System muss überlegen” oder “der
        Bot antwortet” vermieden werden, um kein menschliches Denken zu
        suggerieren.{" "}
      </p>
    </section>,
    <section>
      <h2>Vorgehensweise für menschzentrierte Gestaltung</h2>
      <p>
        In der Gestaltung nutzerfreundlicher Systeme gibt es verschiedene
        bewährte Vorgehensweisen, die auf anerkannten Normen basieren und dabei
        helfen, die User Experience der Nutzenden zu verbessern. Zu den
        wichtigsten zählen das <b>User-Centered Design (UCD)</b>, der{" "}
        <b>Human-Centered Design gemäß ISO 9241-210</b> sowie der{" "}
        <b>Double Diamond Prozess.</b>
      </p>
      <p>
        Allen gemein ist die Idee, dass man ein System selten sofort perfekt
        gestalten kann. Ein iteratives Vorgehen, also wiederholtes Entwerfen,
        Testen und Verbessern mit Nutzer:innen ist entscheidend, um ein
        System/Tool mit guter UX zu schaffen.
      </p>
      <p>
        Die vorgestellten Vorgehensweisen sind idealisierte Modelle, die in der
        Praxis häufig angepasst werden müssen. Zeit- und Ressourcenbegrenzungen
        sowie individuelle Anforderungen führen dazu, dass selten jeder Schritt
        vollständig umgesetzt werden kann. Dennoch bieten sie eine wertvolle
        Orientierung für eine nutzerzentrierte Gestaltung.
      </p>
      <p>
        Um einen groben Überblick von den Vorgehensweisen zu bekommen, finden
        Sie im folgenden je eine kurze Zusammenfassung der wichtigsten Punkte,
        sowie des Ablaufs der einzelnen Vorgehensweisen. Für Ihr Projekt können
        Sie diese Vorgehensweisen als Inspiration oder Leitlinien nutzen, um
        einen für Sie passenden Prozess zu entwickeln.
      </p>
      <h3>1. User-Centered Design (UCD)</h3>
      <p>
        Der UCD ist ein iterativer Gestaltungsprozess, bei dem die Bedürfnisse,
        Erwartungen und Einschränkungen der Nutzer:innen von Anfang an in den
        Mittelpunkt gestellt werden.
      </p>
      <p>Typische Schritte sind:</p>
      <List
        items={[
          "<b>Kontextanalyse</b> bedeutet, dass Nutzer:innen mit einem System ihre Aufgaben erfolgreich bewältigen können.",
          "<b>Effizienz</b> beschreibt, dass dies mit einem angemessenen Aufwand geschieht.",
          "<b>Implementierung (Build)</b>: Die entworfenen Lösungen werden technisch umgesetzt und in das reale System integriert.",
          <p>
            <b>Evaluationen</b>: In Usability-Tests, A/B-Tests oder durch reale
            Nutzungsszenarien („in the wild“) wird überprüft, wie gut das System
            tatsächlich funktioniert. Mehr dazu im Kapitel{" "}
            <LinkHandler to={"/ux-und-usability/evaluation"}>
              <b>Evaluation</b>
            </LinkHandler>
            .
          </p>,
        ]}
        alignItems="center"
        size="medium"
      />
      <p>
        Im letzten Schritt des iterativen Prozesses (understand) werden die
        Ergebnisse der Evaluationen interpretiert und die Erkenntnisse in die
        Study-Phase zurückgeführt.
      </p>
      <div className="w-full flex justify-center mb-[56px]">
        <div className="w-2/3">
          <ThemeImage
            darkSrc={ucd_dark}
            lightSrc={ucd_light}
            alt="User-Centered Design Grafik"
          />
        </div>
      </div>
      <h3>2. Human-Centered Design (ISO 9241-210)</h3>
      <p>
        Der Human-Centered Design-Prozess (HCD) ist ein international genormtes,
        menschenzentriertes Gestaltungsmodell. Er legt besonderen Wert auf ein
        systematisches Vorgehen und definiert sechs zentrale Prinzipien, bei
        denen Nutzer:innen früh und kontinuierlich einbezogen werden für ein
        gesamtheitliches Systemverständnis.
      </p>
      <div className="w-full flex justify-center mb-[56px]">
        <ThemeImage
          darkSrc={hcd_dark}
          lightSrc={hcd_light}
          alt="Human-Centered Design Grafik"
        />
      </div>
      <p>
        Der Prozess beginnt mit dem Verstehen und Festlegen des
        Nutzungskontexts, leitet daraus Anforderungen an das System ab,
        entwickelt Lösungen iterativ und bewertet sie kontinuierlich mit
        Nutzer:innen, bis die Anforderungen erfüllt sind. Dabei sind alle
        Schritte eng verzahnt und wiederholen sich zyklisch zur stetigen
        Verbesserung der Gebrauchstauglichkeit.
      </p>
    </section>,
    <section>
      <h2>Fazit</h2>
      <List
        items={[
          "HCI zielt auf nutzerfreundliche Technik durch Gestaltung, die an den Bedürfnissen und mentalen Modellen der Nutzer:innen ausgerichtet ist.",
          "Modelle wie UCD und HCD bieten strukturierte, iterative Prozesse für nutzerzentriertes Design.",
          "Mentale Modelle vereinfachen Technik, müssen aber durch klares Design realistisch unterstützt werden.",
        ]}
        alignItems="center"
        size="medium"
      />
    </section>,
    <section>
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={mensch_computer_quiz} />
    </section>,
  ],
};

const sectionsEvaluation = [
  { id: "2", title: "Warum sind Evaluationen wichtig?" },
  { id: "3", title: "Wann wird evaluiert?" },
  { id: "4", title: "Wie wird evaluiert und mit wem?" },
  { id: "5", title: "Was sind Evaluationskriterien?" },
  { id: "6", title: "Methoden zur Messung der Usability" },
  { id: "7", title: "Methoden zur Messung der User Experience (UX)" },
  { id: "8", title: "Kombination von Methoden für eine umfassende Messung" },
  { id: "9", title: "Fazit" },
];

const evaluationTypeData = [
  [<b>Evaluationsart</b>, <b>Wann?</b>, <b>Ziel</b>, <b>Beispiel</b>],
  [
    <b>Formative Evaluation</b>,
    "Während der Entwicklung",
    "Probleme frühzeitg erkennen und verbessern",
    "Usability-Test mit einem Prototyp",
  ],
  [
    <b>Summative Evaluation</b>,
    "Nach der Entwicklung",
    "Gesamtqualität beurteilen, Designs vergleichen",
    "Vergleich von Version A und Version B",
  ],
];

const evaluationMethodsData = [
  ["", <b>Empirische Evaluation</b>, <b>Analytische Evaluation</b>],
  [
    <b>Wer evaluiert?</b>,
    "Echte Nutzer:innen",
    "Expert:innen (z.B. UX-Designer:innen, Usability-Spezialist:innen)",
  ],
  [
    <b>Ziel</b>,
    "Beobachtung des Nutzerverhaltens bei konkreten Aufgaben",
    "Bewertung anhand von Regeln und Erfahrung, frühzeitg Probleme identifizieren",
  ],
  [
    <b>Methoden</b>,
    "Usability-Tests, Interviews, Beobachtungen, Fragebögen",
    "Heuristische Evaluation (z.B. nach Nielsen), Cognitive Walkthrough",
  ],
  [
    <b>Vorteil</b>,
    "Realitätsnahe Ergebnisse",
    "Schnell, günstig, keine Nutzer:innen nötig",
  ],
  [
    <b>Nachteile</b>,
    "Zeit- und Kostenintensiv",
    "Weniger objektiv, of weniger praxisnah",
  ],
];

const Evaluation = {
  linkName: "evaluation",
  name: "Evaluation",
  description:
    "Bezeichnet die Überprüfung und Messung von Usability und UX eines Systems. Durch Methoden wie Tests und Nutzerfeedback wird ermittelt, ob die gewünschten Nutzungserfahrungen erreicht werden.",
  content: [
    <ChapterHeader text={"Evaluation"} number={6} />,
    <section>
      <p>
        Als Evaluation bezeichnet man die Überprüfung und Messung von Usability
        und UX eines Systems. Durch Methoden wie Tests und Nutzerfeedback wird
        ermittelt, ob die gewünschte Nutzungserfahrung erreicht wird.
      </p>
      <Accordion sections={sectionsEvaluation} />
      <SubNavigation sections={sectionsEvaluation} />
    </section>,
    <section>
      <h2>Warum sind Evaluationen wichtig?</h2>
      <p>
        Evaluationen sind, wie Sie im vorherigen Modul gesehen haben, ein
        wichtiger Bestandteil des benutzerzentrierten Gestaltungsprozesses. Sie
        helfen dabei sicherzustellen, dass ein System nicht nur funktional ist,
        sondern auch den Bedürfnissen der Nutzer:innen entspricht. Ziel ist es,
        zu überprüfen, ob die Nutzeranforderungen erfüllt werden, ob das System
        benutzerfreundlich ist und ob es gerne genutzt wird.
      </p>
      <p>
        Dabei gilt: Usability-Tests können die Benutzerfreundlichkeit zwar
        verbessern, ersetzen aber keine gute Gestaltung. Eine gute User
        Experience lässt sich nicht einfach „herantesten“. Eine erfolgreiche
        Evaluation setzt daher ein grundlegendes{" "}
        <b>Verständnis der Nutzer:innen</b> und <b>ihrer Aufgaben</b> im{" "}
        <LinkHandler to={"/ux-und-usability/nutzungskontext"}>
          <b>Nutzungskontext</b>
        </LinkHandler>{" "}
        voraus. Nur so können Rückschlüsse gezogen und Verbesserungen erzielt
        werden.
      </p>
    </section>,
    <section>
      <h2>Wann wird evaluiert?</h2>
      <p>
        Evaluationen sind nicht nur eine abschließende Qualitätskontrolle,
        sondern begleiten idealerweise den gesamten Entwicklungsprozess. Je nach
        Zeitpunkt unterscheiden sich die Ziele und Vorgehensweisen:
      </p>
      <ol>
        <li>
          Die <b>formative Evaluation</b> erfolgt <u>während</u> der
          Entwicklung. Ihr Ziel ist es, frühzeitig Schwächen und
          Usability-Probleme zu erkennen, um gezielt Verbesserungen vorzunehmen.
          Häufig kommt hier ein Prototyp zum Einsatz, der mit echten
          Nutzer:innen getestet wird.
        </li>
        <li>
          Die <b>summative Evaluation</b> findet hingegen am <u>Ende</u> des
          Entwicklungsprozesses statt. Hier geht es darum, die Gesamtqualität
          des Systems zu bewerten, zum Beispiel durch den Vergleich
          verschiedener Versionen, um herauszufinden, welche besser
          funktioniert.
        </li>
      </ol>
      <Table data={evaluationTypeData} />
    </section>,
    <section>
      <h2>Wie wird evaluiert und mit wem?</h2>
      <p>
        Nachdem wir nun geklärt haben, was Evaluationen sind und wann sie im
        Prozess sinnvoll eingesetzt werden, schauen wir uns als Nächstes an, wie
        eine Evaluation konkret durchgeführt werden kann und wer daran beteiligt
        ist.
      </p>
      <p>
        Man unterscheidet dabei häufig zwischen empirischen und analytischen
        Methoden. Beide Ansätze haben unterschiedliche Schwerpunkte und eignen
        sich je nach Projektphase, Zielsetzung und verfügbaren Ressourcen:
      </p>
      <ol>
        <li>
          <b>Empirische Methoden</b> ermöglichen tiefere Einblicke in das{" "}
          <b>tatsächliche Benutzungserlebnis</b>. Beispiele dafür sind ein
          Usability-Test oder Interviews mit Bürger:innen, die prüfen, wie
          verständlich und zugänglich eine KI-gestützte Plattform für
          Sozialleistungen ist.
        </li>
        <li>
          <b>Analytische Verfahren</b> lassen sich hingegen besonders in{" "}
          <b>frühen Phasen</b> oder bei <b>begrenzten Ressourcen</b> effizienter
          einsetzen. UX-Expert:innen führen beispielsweise eine heuristische
          Evaluation durch, um frühzeitig Barrieren für ältere Menschen in einem
          KI-basierten Beratungs-Chatbot zu identifizieren.
        </li>
      </ol>
      <Table data={evaluationMethodsData} />
    </section>,
    <section>
      <h2>Was sind Evaluationskriterien?</h2>
      <p>
        Um die Qualität der User Experience oder Usability systematisch
        beurteilen zu können, braucht es klare Evaluationskriterien. Sie helfen
        dabei, Ergebnisse nachvollziehbar und objektiv zu bewerten. Je nach
        Projekt und Zielgruppe können unterschiedliche Schwerpunkte gesetzt
        werden. Typische Kriterien sind zum Beispiel:
      </p>
      <div className="flex flex-col gap-[var(--scale4)] justify-center">
        <div className="flex gap-[var(--scale2)]">
          <CheckIcon className="w-[73px] h-[73px]" />
          <p>
            <b>Effektivität</b>: Können Nutzer:innen ihre Aufgaben erfolgreich
            erledigen? <br />
            Beispiel: 90% der Aufgaben werden korrekt abgeschlossen.
          </p>
        </div>
        <div className="flex gap-[var(--scale2)]">
          <ClockIcon className="w-[73px] h-[73px]" />
          <p>
            <b>Effizienz</b>: Wie schnell und mühelos gelingt die Nutzung?{" "}
            <br />
            Beispiel: Aufgabe lässt sich in unter 30 Sekunden oder mit maximal
            10 Klicks lösen.
          </p>
        </div>
        <div className="flex gap-[var(--scale2)]">
          {/*           <img src={icon_smile} alt="Icon Lächeln" />
           */}{" "}
          <SmileIcon className="w-[73px] h-[73px]" />
          <p>
            <b>Zufriedenheit</b>: Wie empfinden Nutzer:innen die Nutzung? <br />
            Beispiel: Keine negativen Rückmeldungen, positive Bewertungen.
          </p>
        </div>
        <div className="flex gap-[var(--scale2)]">
          <LoveIcon className="w-[73px] h-[73px]" />
          <p>
            <b>Freude an der Nutzung</b>: Macht die Anwendung Spaß oder fühlt
            sie sich langsam an? <br />
            Beispiel: Nutzer:innen berichten von einem positiven Erlebnis
            während der Nutzung.
          </p>
        </div>
      </div>
    </section>,
    <section>
      <h2>Methoden zur Messung der Usability</h2>
      <TabSwitchView>
        <div title="Usability-Tests">
          <p>
            In einem Usability-Test bearbeiten Nutzer:innen typische Aufgaben
            mit dem System, während Expert:innen ihr Verhalten beobachten, um
            Probleme und Barrieren zu erkennen. Diese Methode liefert Einblicke
            in die tatsächliche Nutzung und hilft dabei, konkrete
            Usability-Probleme zu identifizieren. Der Aufwand ist jedoch hoch,
            und der künstliche Testrahmen kann das Verhalten der Nutzer:innen
            beeinflussen. Zudem sind die Ergebnisse wegen der kleinen
            Teilnehmerzahl oft nicht vollständig repräsentativ.
          </p>
        </div>
        <div title="Heuristische Evaluation">
          <p>
            Bei der heuristischen Evaluation prüfen Expert:innen das System
            anhand von Usability-Heuristiken (z.B.{" "}
            <a
              href="https://www.nngroup.com/articles/ten-usability-heuristics/"
              target="_blank"
              rel="noopener noreferrer">
              die 10 Regeln von Nielsen
            </a>
            ). So lassen sich offensichtliche Usability-Probleme schnell
            identifizieren, ohne dass Nutzer:innen einbezogen werden müssen. Das
            macht die Methode kostengünstig und effizient für eine erste
            Einschätzung. Allerdings ist die Bewertung subjektiv und hängt stark
            von der Erfahrung der Expert:innen ab. Zudem werden oft nicht alle
            Probleme erkannt, die bei echten Nutzer:innen auftreten würden. Mehr
            zur Durchführung{" "}
            <a
              href="https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/"
              target="_blank"
              rel="noopener noreferrer">
              hier
            </a>
            .
          </p>
        </div>
        <div title="Fragebögen">
          <p>
            Standardisierte Fragebögen sind eine einfache und effiziente
            Methode, um die subjektive Einschätzung der Usability durch
            Nutzer:innen zu erfassen. Zu bekannten zählen:
          </p>
          <ul>
            <li>
              <p>
                die{" "}
                <a
                  href="https://germanupa.de/wissen/fragebogenmatrix/sus/"
                  target="_blank"
                  rel="noopener noreferrer">
                  System Usability Scale
                </a>{" "}
                (
                <a
                  href="http://interaction-design-group.de/toolbox/wp-content/uploads/2016/05/SUS.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  Deutsche Variante
                </a>
                )
              </p>
            </li>
            <li>
              <p>
                <a
                  href="https://site.unibo.it/hfrs/en/questionnaire-and-scales-2/quis"
                  target="_blank"
                  rel="noopener noreferrer">
                  Questionnaire for User Interface Satisfaction (QUIS)
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  href="https://www.researchgate.net/publication/230786746_Measuring_Usability_with_the_USE_Questionnaire"
                  target="_blank"
                  rel="noopener noreferrer">
                  USE-Fragebogen (Usefulness, Satisfaction, and Ease of Use)
                </a>
              </p>
            </li>
          </ul>
          <p>
            Diese Fragebögen lassen sich schnell durchführen, liefern
            quantitative Daten und können mit vielen Nutzer:innen gleichzeitig
            eingesetzt werden. Sie eignen sich besonders gut, um erste
            Usability-Einschätzungen zu gewinnen oder um mehrere Versionen eines
            Systems zu vergleichen.
          </p>
          <p>
            Allerdings erfassen sie meist nur oberflächliche Aspekte und sind
            stark von der Ehrlichkeit und dem Verständnis der Teilnehmenden für
            die gestellten Fragen abhängig. Daher sollten sie idealerweise mit
            weiteren Methoden kombiniert werden, um ein umfassenderes Bild der
            Usability zu erhalten.
          </p>
        </div>
      </TabSwitchView>
    </section>,
    <section>
      <h2>Methoden zur Messung der User Experience (UX)</h2>
      <p>
        Die User Experience umfasst mehr als reine Usability. Sie berücksichtigt
        auch Emotionen, Wahrnehmungen und das gesamte Nutzungserlebnis. Um diese
        Dimensionen zu erfassen, kommen ergänzende Methoden zum Einsatz:
      </p>
      <TabSwitchView>
        <div title="Interviews">
          <p>
            Interviews ermöglichen tiefe Einblicke in die Gedanken, Gefühle und
            Erfahrungen der Nutzer:innen. Durch offene Fragen erhält man
            detailliertes Feedback zur Wahrnehmung eines Produkts. Die Methode
            ist flexibel und kontextbezogen, jedoch zeitaufwendig und nur
            bedingt repräsentativ.
          </p>
        </div>
        <div title="Emotionsanalyse und physiologische Messungen">
          <p>
            Techniken wie Eye-Tracking, Emotionserkennung oder
            Hautleitfähigkeitsmessung erfassen unbewusste, emotionale Reaktionen
            auf ein Produkt. Diese objektiven Daten helfen dabei, subtile
            Aspekte der User Experience zu verstehen, die über bloße Befragungen
            hinausgehen. Sie sind aber oft technisch aufwändig, teuer und können
            das Nutzerverhalten beeinflussen.
          </p>
        </div>
        <div title="Fragebögen">
          <p>
            Standardisierte Fragebögen wie der{" "}
            <a
              href="https://www.ueq-online.org/"
              target="_blank"
              rel="noopener noreferrer">
              User Experience Questionnaire (UEQ)
            </a>{" "}
            oder{" "}
            <a
              href="https://germanupa.de/wissen/fragebogenmatrix/attrakdiff"
              target="_blank"
              rel="noopener noreferrer">
              AttrakDiff
            </a>{" "}
            liefern schnelle, vergleichbare Ergebnisse zu verschiedenen
            UX-Dimensionen. Sie sind einfach durchzuführen und gut validiert,
            erfassen jedoch hauptsächlich subjektive Eindrücke und bieten wenig
            Tiefe hinsichtlich der Ursachen hinter den Bewertungen.
          </p>
        </div>
      </TabSwitchView>
    </section>,
    <section>
      <h2>Kombination von Methoden für eine umfassende Messung</h2>
      <p>
        Ein Multi-Methoden-Ansatz kombiniert verschiedene Erhebungsverfahren, um
        sowohl quantitative als auch qualitative Daten zu erfassen. So können
        unterschiedliche Perspektiven berücksichtigt und Stärken wie Schwächen
        eines Systems besser sichtbar gemacht werden. Beispielsweise können Sie:
      </p>
      <ol>
        <li>
          <p>
            <b>Zunächst einen Usability-Test</b> durchführen, um
            Beobachtungensdaten zu sammeln.
          </p>
        </li>
        <li>
          <p>
            <b>Anschließend einen Fragebogen</b> einsetzen, um subjektive
            Eindrücke zu messen.
          </p>
        </li>
        <li>
          <b>Abschließend Interviews</b> führen, um Hintergründe und Details zu
          verstehen.
        </li>
      </ol>
      <p>
        Allerdings wird auch hier von einem idealen Vorgehen ausgegangen und
        kann in realen Projekten den Anforderungen entsprechend abgewandelt
        werden.
      </p>
    </section>,
    <section>
      <h2>Fazit</h2>
      <List
        items={[
          "Evaluationen sind <b>kein Ersatz für gutes Design</b>, sondern ein Werkzeug zur Verbesserung.",
          "Es gibt <b>verschiedene Arten von Evaluationen</b>, abhängig vom Zeitpunkt, Aufwand und Ziel: <b>Formativ vs. Summativ</b> oder <b>Empirisch vs. Analytisch</b>",
          "Gute Evaluation basiert auf klarem Verständnis der Aufgaben, Nutzer:innen und Kontexte.",
        ]}
        alignItems="center"
        size="medium"
      />
    </section>,
    <section>
      <h2>Wissensüberprüfung</h2>
      <p>
        Im folgenden Quiz können die Inhalte dieses Kapitels nochmal wiederholt
        werden.
      </p>
      <BasicQuiz quizData={evaluation_quiz} />
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
      <Sources />
    </section>,
  ],
};

const UXBasicsData = {
  linkName: "ux-und-usability",
  name: "UX DEV DEV DEV",
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
