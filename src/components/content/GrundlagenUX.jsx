import imageElement from "../../assets/svg/uxus_icon.svg";
import DosAndDonts from "../dosdonts/DosAndDonts";
import QuizContainer from "../quizUX/components/QuizContainer";
import { ChapterHeader } from "../texts/ChapterHeader";
import { VideoContainer } from "../texts/VideoContainer";
import { Link } from "react-router-dom";

const Einleitung = {
  linkName: "einleitung",
  name: "Einführung UX und Usability",
  description:
    "Hier wird ein Überblick über die Relevanz nutzerzentrierter Gestaltung und den Zusammenhang von Mensch und Technologie gegeben.",
  content: [
    <ChapterHeader text={"Einleitung"} number={1} />,
    <section>
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/9cgmeenl72s?rel=0&modestbranding=1"
        }
        title={"Einleitungsvideo"}
      />
    </section>,
  ],
};

const Usability = {
  linkName: "usability",
  name: "Usability",
  description:
    "Dieses Kapitel erläutert die Prinzipien der Benutzerfreundlichkeit und zeigt auf, wie intuitive und effiziente Interaktionen gestaltet werden können.",
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
    "Hier wird der Einfluss des Nutzungskontexts auf die Gestaltung von Benutzeroberflächen und die User Experience erklärt.",
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
    "Dieses Kapitel befasst sich mit der ganzheitlichen Nutzererfahrung und geht über reine Usability hinaus, um emotionale und ästhetische Aspekte zu beleuchten.",
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
    "Die Interaktion zwischen Mensch und Computer wird hier untersucht, mit einem Fokus auf effiziente und verständliche Schnittstellen.",
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
    "Methoden zur Bewertung von Usability und UX werden vorgestellt, um die Qualität von Designs und Benutzeroberflächen zu messen.",
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

const Fazit = {
  linkName: "fazit",
  name: "Fazit",
  description: "Hier wird ein allgemeines Fazit geschlossen.",
  content: [
    <ChapterHeader text={"Fazit"} number={7} />,
    <section>
      <VideoContainer
        link={
          "https://www.youtube-nocookie.com/embed/wZx_RUdv9Bo?si=PL74OEuieI7W2hce&amp;rel=0&amp;modestbranding=1"
        }
        title={"Outro"}
      />
    </section>,
    <section>
      <h2>Lernspiel praktische Anwendung</h2>
      <div className="w-full rounded-xl">
        <DosAndDonts />
      </div>
    </section>,
    <section>
      <h2>Quiz zur Selbstüberprüfung</h2>
      <QuizContainer />
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
