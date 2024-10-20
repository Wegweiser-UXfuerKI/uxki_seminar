import { useEffect, useRef, useState } from "react";

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
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const calcContainerHeight = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = width / 1.5;
        setContainerHeight(height);
      }
    };

    calcContainerHeight();
    window.addEventListener("resize", calcContainerHeight);
    return () => {
      window.removeEventListener("resize", calcContainerHeight);
    };
  });

  return (
    <div
      className="w-full base-background flex flex-col overflow-hidden"
      style={{ borderRadius: "20px", height: `${containerHeight + 100}px` }}
      ref={containerRef}>
      <TaskDataProvider>
        <div className="w-full h-full relative">
          <NavBar currentView={currentView} setCurrentView={setCurrentView} />
          {currentView === "interaktiv" && <InteractiveElement />}
          {currentView === "text" && (
            <InformationText setCurrentView={setCurrentView} />
          )}
        </div>
      </TaskDataProvider>
    </div>
  );
}

export default DosAndDonts;
