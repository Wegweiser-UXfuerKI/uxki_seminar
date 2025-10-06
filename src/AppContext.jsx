import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getModuleLinks,
  getModuleNameByLink,
  getSubtopicByLink,
  getSubtopicNameByLink,
} from "./components/ContentHandler";

const AppContext = createContext();

/**
 * Context provider component for managing and providing application-wide state related to modules and subtopics.
 *
 * This component utilizes the React Context API to supply state and state mutators for the currently selected module
 * and subtopic, as well as navigation functionality based on the current URL path.
 *
 * @param {ReactNode} children - The child components that will have access to the context values provided.
 *
 * Context values:
 * - selectedModuleLink: The link identifier of the currently selected module.
 * - selectedModuleName: The name of the currently selected module.
 * - selectedSubtopicLink: The link identifier of the currently selected subtopic.
 * - selectedSubtopicName: The name of the currently selected subtopic.
 * - scrollToChapter: A state used for scrolling to a specific chapter.
 */
const AppProvider = ({ children }) => {
  const [selectedModuleLink, setSelectedModuleLink] = useState(null);
  const [selectedModuleName, setSelectedModuleName] = useState(null);
  const [selectedSubtopicLink, setSelectedSubtopicLink] = useState(null);
  const [selectedSubtopicName, setSelectedSubtopicName] = useState(null);

  const [isDevMode, setIsDevMode] = useState(false);

  const [scrollToChapter, setScrollToChapter] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "system";
    }
    return "system";
  });
  const location = useLocation();
  const navigate = useNavigate();

  const devModules = [
    "gestaltungsziele-menschzentrierte-ki",
    "ki-technologien-verstehen",
    "automatisierungspotenziale-erkennen",
  ];

  /* 
  "module-link": ["subtopic-link", "", ...] */
  const devSubtopics = {};

  // Temporarily deactivated modules
  const disabledModules = [
    "gestaltungsziele-menschzentrierte-ki",
    "ki-technologien-verstehen",
    "automatisierungspotenziale-erkennen",
  ];

  // Disabled subtopics for specific modules
  const disabledSubtopics = {
    "gestaltungsziele-menschzentrierte-ki": [
      "einleitung",
      "vertrauenswuerdigkeit",
      "transparenz",
      "erklaerbarkeit",
      "kontrollierbarkeit",
      "mentale-modellkomplementaritaet",
    ],
    "ki-technologien-verstehen": [
      "einleitung",
      "input",
      "verarbeitung",
      "output",
      "llm",
    ],
    "automatisierungspotenziale-erkennen": ["einleitung"],
  };

  /**
   * If the location is a direct link to a subtopic, check if the subtopic exists
   * and navigate to the subtopic if it does, or the module if it doesn't.
   * If the location is not a subtopic, set the selectedModuleLink to null and
   * the selectedModuleName to null.
   */
  useEffect(() => {
    let pathSegments = location.pathname.split("/").filter(Boolean);
    //const module = pathSegments[0];
    //const subtopicLink = pathSegments[1];

    const isDevPath = pathSegments[0] === "dev";
    setIsDevMode(isDevPath);
    sessionStorage.setItem("devMode", isDevPath);

    if (isDevPath) {
      pathSegments = pathSegments.slice(1);
    }

    const module = pathSegments[0];
    const subtopicLink = pathSegments[1];

    if (module === "test") return;

    const isRootPath = pathSegments.length === 0;

    if (isRootPath) {
      setSelectedModuleLink(null);
      setSelectedModuleName(null);
      setSelectedSubtopicLink(null);
      setSelectedSubtopicName(null);
      return;
    }

    console.log("module:", module);
    console.log("getModuleLinks():", getModuleLinks());

    if (module && getModuleLinks().includes(module)) {
      if (subtopicLink) {
        const subtopic = getSubtopicByLink(module, subtopicLink);
        if (subtopic) {
          setSelectedModuleLink(module);
          setSelectedModuleName(getModuleNameByLink(module));
          setSelectedSubtopicLink(subtopicLink);
          setSelectedSubtopicName(getSubtopicNameByLink(module, subtopicLink));
        } else {
          console.log("devPath:", isDevPath);
          console.log("location.pathname:", location.pathname);
          if (isDevPath && location.pathname !== "/dev") {
            navigate("/dev", { replace: true });
          } else if (!isDevPath && location.pathname !== "/") {
            navigate("/", { replace: true });
          }
          resetModuleSelection(module);
        }
      } else {
        if (isDevPath && location.pathname !== "/dev") {
          navigate("/dev", { replace: true });
        } else if (!isDevPath && location.pathname !== "/") {
          navigate("/", { replace: true });
        }
        resetModuleSelection(module);
      }
    } else {
      console.log("devPath:", isDevPath);
      console.log("location.pathname:", location.pathname);
      if (isDevPath && location.pathname !== "/dev") {
        navigate("/dev", { replace: true });
      } else if (!isDevPath && location.pathname !== "/") {
        navigate("/", { replace: true });
      }
      clearSelection();
    }
  }, [location.pathname, navigate]);

  function resetModuleSelection(module) {
    setScrollToChapter(module);
    setSelectedModuleLink(null);
    setSelectedModuleName(null);
    setSelectedSubtopicLink(null);
    setSelectedSubtopicName(null);
  }

  function clearSelection() {
    setSelectedModuleLink(null);
    setSelectedModuleName(null);
    setSelectedSubtopicLink(null);
    setSelectedSubtopicName(null);
  }

  // Storing and applying
  useEffect(() => {
    localStorage.setItem("theme", theme);

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // check for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(mediaQuery.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const contextValue = {
    selectedModuleLink,
    selectedModuleName,
    setSelectedModuleLink,
    selectedSubtopicLink,
    setSelectedSubtopicLink,
    selectedSubtopicName,
    scrollToChapter,
    setScrollToChapter,
    theme,
    setTheme,
    disabledModules,
    disabledSubtopics,
    devModules,
    devSubtopics,
    isDevMode,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
