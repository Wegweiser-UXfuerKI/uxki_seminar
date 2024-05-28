import { useState } from "react";

// Components
import NavBar from "./components/NavBar";
import InteractiveElement from "./InteractiveElement.jsx";
import InformationText from "./InformationText.jsx";
import { TaskDataProvider } from "./Context.jsx";

/* 
  The main component representing the learning element. It uses state to switch between
  the interactive element and the information text.
*/
function DosAndDonts() {
  const [currentView, setCurrentView] = useState("interaktiv");

  return (
    <div className="w-full h-full base-background flex flex-col overflow-hidden" style={{ borderRadius: "20px" }}>
      <TaskDataProvider>
        <div className="w-full h-full relative">
          <NavBar currentView={currentView} setCurrentView={setCurrentView} />
          {currentView === "interaktiv" && <InteractiveElement />}
          {currentView === "text" && <InformationText />}
        </div>
      </TaskDataProvider>
    </div>
  );
}

export default DosAndDonts;
