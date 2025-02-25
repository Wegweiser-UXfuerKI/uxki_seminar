import { ReactComponent as imageElement } from "../../assets/icons/usability.svg";
import { Link } from "react-router-dom";
import { ChapterHeader } from "../3_organism/ChapterHeader";
import { VideoContainer } from "../1_elements/VideoContainer";
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

const Usability = {
  linkName: "usability",
  name: "Usability",
  description:
    "Beschreibt, wie effektiv, effizient und zufriedenstellend Nutzende ihre Ziele mit einem System erreichen. Eine gute Usability ist entscheidend für Akzeptanz und Erfolg eines Produkts.",
  content: [
    <ChapterHeader text={"Usability"} number={2} />,
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
