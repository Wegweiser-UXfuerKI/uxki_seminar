import { ReactComponent as imageElement } from "../../assets/icons/usability.svg";
import { Link } from "react-router-dom";
import { ChapterHeader } from "../3_organism/ChapterHeader";
import { VideoContainer } from "../1_elements/VideoContainer";
import Accordion from "../2_molecule/nav/Accordion";
import SubNavigation from "../2_molecule/nav/SubNavigation";
import List from "../2_molecule/List";

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

const Nutzungskontext = {
  linkName: "nutzungskontext",
  name: "Nutzungskontext",
  description:
    "Bezieht sich auf die Rahmenbedingungen, unter denen ein System genutzt wird, einschließlich Nutzendenprofil, Aufgaben, Umgebung und Hilfsmittel. Ein tiefes Verständnis des Nutzungskontexts ist essenziell für eine benutzerzentrierte Gestaltung.",
  content: [
    <ChapterHeader text={"Nutzungskontext"} number={3} />,
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
  moduleImage: imageElement,
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
