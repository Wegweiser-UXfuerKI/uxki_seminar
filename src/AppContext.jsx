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
  const [scrollToChapter, setScrollToChapter] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "system";
    }
    return "system";
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Temporarily deactivated modules
  const disabledModules = [
    "ux-bezogene-ki-eigenschaften",
    "dateninput",
    "verarbeitung",
    "ki-ergebnisse",
    "identifikation-prozesse",
  ];

  // Disabled subtopics for specific modules
  const disabledSubtopics = {
    "ux-und-usability": [
      "usability",
      "nutzungskontext",
      "user-experience",
      "mensch-computer-interaktion",
      "evaluation",
      "quellen",
    ],
    "ux-bezogene-ki-eigenschaften": ["einleitung"],
    dateninput: ["einleitung"],
    verarbeitung: ["einleitung"],
    "ki-ergebnisse": ["einleitung"],
    "identifikation-prozesse": ["einleitung"],
  };

  /**
   * If the location is a direct link to a subtopic, check if the subtopic exists
   * and navigate to the subtopic if it does, or the module if it doesn't.
   * If the location is not a subtopic, set the selectedModuleLink to null and
   * the selectedModuleName to null.
   */
  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const module = pathSegments[0];
    const subtopicLink = pathSegments[1];

    if (module && getModuleLinks().includes(module)) {
      if (subtopicLink) {
        const subtopic = getSubtopicByLink(module, subtopicLink);
        if (subtopic) {
          setSelectedModuleLink(module);
          const moduleNames = getModuleNameByLink(module);
          setSelectedModuleName(moduleNames);
          setSelectedSubtopicLink(subtopicLink);
          const subtopicName = getSubtopicNameByLink(module, subtopicLink);
          setSelectedSubtopicName(subtopicName);
        } else {
          if (location.pathname !== "/") {
            navigate("/", { replace: true });
          }
          setScrollToChapter(module);
          setSelectedModuleLink(null);
          setSelectedModuleName(null);
        }
      } else {
        if (location.pathname !== "/") {
          navigate("/", { replace: true });
        }
        setScrollToChapter(module);
        setSelectedModuleLink(null);
        setSelectedModuleName(null);
        setSelectedSubtopicLink(null);
        setSelectedSubtopicName(null);
      }
    } else {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
      }
      setSelectedModuleLink(null);
      setSelectedModuleName(null);
    }
  }, [location.pathname, navigate]);

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
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
