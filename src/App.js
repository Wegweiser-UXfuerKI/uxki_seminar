import "./assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import SubTopicPage from "./components/pages/SubTopicPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppContext from "./AppContext";

// static content of subtopics
const topicContents = {
  Einleitung: {
    Einleitungsvideo: {
      link: "https://www.youtube-nocookie.com/embed/HLgKwZkm59M?si=p-12Mfp5IoZCa5aq&amp;rel=0&amp;modestbranding=1",
      title: "Einleitungsvideo",
    },
    "Was ist der EU AI Act":
      "Hallo, herzlich willkommen zu unserem Einleitungsvideo zum EU AI Act. Hier geben wir Ihnen einen kurzen Überblick, was der EU AI Act eigentlich ist, wie er funktioniert und warum er für Sie als Teil einer gemeinwohlorientierten Organisation eigentlich wichtig ist. Wir sind (Vorstellung der Personen). Aber nun zum Inhalt: Wenden wir uns erstmal dem Einfluss von KI Systemen auf unsere Gesellschaft zu.Wie sich immer weiter zeigt, haben KI Systeme einen erheblichen Einfluss auf unseren Alltag - und damit auf uns als Individuen und auch unser Zusammenleben.Die Entscheidungen, die von und mit KI Systemen getroffen werden, können entscheidend auf unser Leben einwirken - zum Beispiel im Kleinen bei der Empfehlung von Produkten oder erheblich bei der Anpassung medizinischer Therapien. Es ist also notwendig, sicherzustellen, dass die Systeme zu unseren Werten passen und keine Gefahr darstellen. Das gelingt nicht immer. Ein Beispiel war 2020 die sogenannte Kindergeldaffäre in den Niederlanden.Diese hatte nicht Einfluss auf eine Vielzahl ungerechtfertigt benachteiligter Familien, sondern war auch einer der Gründe für den Rücktritt der Regierung unter Ministerpräsident Rutte. In der Affäre ging es darum, dass ausgezahlte Kindergelder zurückgefordert worden war - ein KI System hatte dabei jedoch fälschlich besonders Personen mit doppelter Staatsbürgerschaft unter Verdacht gestellt.Viele der Forderungen waren unbegründet, bedeuten aber für die Familien eine finanzielle Katastrophe mit unabsehbaren Auswirkungen. Wie lernen wir aus diesen Fehlern? Es ist klar, dass wir Regeln, Methoden und Vertrauensstellen für KI Systeme brauchen, die irgendwo zentral Organisiert sein sollten bspw.bei einer Landesregierung, einer Prüfbehörde oder ähnlichem. Darum soll es in dieser Einheit gehen.Wir betrachten den EU AiIAct als zentrales Thema für die Regulierung von Ki Systemen und die damit einhergehenden Ansprüche an diejenigen, die KI - basierte Projekte umsetzen wollen. Mit dem EU AI Act hat die EU eine EU - weite Verordnung geschaffen, die für KI - Systeme in jedem Bereich gilt.Regelungen auf nationaler Ebene sind nicht notwendig - aber einzelne Länder wie Deutschland werden in der Pflicht stehen, die Einhaltung zu überprüfen. Um einen genauen Einblick zu bekommen, wie diese Regulierungen zwischen den Ländern entstanden sind und funktionieren, haben wir heute einen Experten aus dem Institut für Multimediale und Interaktive Systeme der Universität zu Lübeck hier.",
  },
  "Risikostufen - Anwendungsbeispiele": {
    Video: {
      link: "https://www.youtube-nocookie.com/embed/zkfqjX6om8g?si=XKEX_r1jRmViUJkB&amp;rel=0&amp;modestbranding=1",
      title: "Einleitungsvideo",
    },
    "Wie funktionieren Risikostufen":
      "Wie zuvor besprochen wollen wir uns als erstes mit dem Thema Risikostufen beschäftigen.  Zentral ist dabei das Verständnis, dass nicht jedes KI-System gleich viel Einfluss auf uns als Menschen hat - bei manchen sind die Risiken höher als bei anderen. Manchmal sogar inakzeptabel hoch. Die Notwendigkeit einer solchen Unterteilung hat auch die EU erkannt und deswegen ein zentrales Werkzeug im EU AI Act erschaffen - die Einteilung von KI-Systemen in vier Risikostufen: Die niedrigste Stufe geht davon aus, dass durch ein KI-System nur ein minimales Risiko besteht. Beispiele hierfür sind KI-Systeme, die in Videospielen eingesetzt werden oder intelligente Spam-Filter, die bestenfalls nach festen Regeln vorgehen. Die zweite Stufe kategorisiert Systeme mit einem begrenzten Risiko s.g. limited risk. Bei diesen gelten insbesondere Transparenzvorschriften, d.h., es muss klar gemacht werden, dass KI Systeme eingesetzt werden und wie. Das gilt z.B. beim Einsatz von Chatbots. Das Herzstück des Acts stellen final die High-Risk-Systeme da. Hierzu zählen alle Systeme, die irgendeiner Zulassung bedürfen. Dazu gehören medizinische Systeme, Systeme im Bereich der Strafverfolgung oder auch Systeme, die zur politischen Meinungsbildung geeignet sind. Der EU AI Act formuliert in dieser Kategorie hohe Anforderungen in Bezug auf die verschiedenen genutzten Variablen. So beispielsweise für die Dokumentation des Trainings, des genutzten Models und der bei der Entwicklung getroffenen Designentscheidungen. Für uns ist dabei vor allem der Punkt Transparenz und die Möglichkeit, der menschlichen Kontrollfähigkeit interessant.",
  },
  Designimplikationen: {
    Video: {
      link: "https://www.youtube-nocookie.com/embed/0rPt4Grl8D4?si=2BKL-W0acY6LRGPu&rel=0&modestbranding=1",
      title: "Einleitungsvideo",
    },
    "Weitergehende Kriterien": "abc",
    "Punkt 2": "abc",
  },
  "High Level Expert Group": {
    Video: {
      link: "https://www.youtube-nocookie.com/embed/PZAkt-EuKn0?si=g-hnbptFXBW6kajx&amp;rel=0&amp;modestbranding=1",
      title: "Einleitungsvideo",
    },
    Diskussion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos temporibus itaque sit ipsa ex reiciendis, sint earum hic aliquid vel atque enim, inventore, magni numquam commodi iste? Quam, ab iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit aut impedit facilis laboriosam, adipisci eaque eos incidunt ad tenetur debitis repudiandae eius non recusandae. Quo harum at nostrum veritatis.",
  },
  Fazit: {
    Video: {
      link: "https://www.youtube-nocookie.com/embed/PZAkt-EuKn0?si=g-hnbptFXBW6kajx&amp;rel=0&amp;modestbranding=1",
      title: "Einleitungsvideo",
    },
    Text: "Lorem ipsum",
    Lernüberprüfung: "quiz",
  },
};

function App() {
  return (
    <div className="App">
      <AppContext.Provider value={topicContents}>
        <BrowserRouter>
          <div className="flex">
            <div className="flex flex-col w-full">
              <Header />
              <Routes>
                <Route index element={<MainPage />} />
                <Route path="subtopic/:subtopicId" element={<SubTopicPage />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
