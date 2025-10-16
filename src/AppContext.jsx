import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getModuleByLink,
  getModuleLinks,
  getModuleNameByLink,
  getSubtopicByLink,
  getSubtopicNameByLink,
  shouldRedirectHome,
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

  /**
   * If the location is a direct link to a subtopic, check if the subtopic exists
   * and navigate to the subtopic if it does, or the module if it doesn't.
   * If the location is not a subtopic, set the selectedModuleLink to null and
   * the selectedModuleName to null.
   */
  useEffect(() => {
    let pathSegments = location.pathname.split("/").filter(Boolean);

    const isDevPath = pathSegments[0] === "dev";
    setIsDevMode(isDevPath);
    sessionStorage.setItem("devMode", isDevPath);

    if (isDevPath) {
      pathSegments = pathSegments.slice(1);
    }

    const moduleLink = pathSegments[0];
    const subtopicLink = pathSegments[1];

    // custom dev page
    if (moduleLink === "test") return;

    const isRootPath = pathSegments.length === 0;
    if (isRootPath) {
      clearSelection();
      return;
    }

    console.log("module:", moduleLink);
    console.log("getModuleLinks():", getModuleLinks());

    const moduleFound = !!getModuleByLink(moduleLink);
    const subtopicFound = !!getSubtopicByLink(moduleLink, subtopicLink);

    const homeRedirectTarget = isDevPath ? "/dev" : "/";

    // redirect home if pathname is nonsense (non existing module)
    if (!moduleFound) {
      navigate(homeRedirectTarget, { replace: true });
      clearSelection();
      return;
    }

    // redirect home if subtopic is non exising, but scroll to module
    if (!subtopicFound) {
      navigate(homeRedirectTarget, { replace: true });
      resetModuleSelection();
      return;
    }

    // check if module or subtopic is disabled
    const isRedirectHome = shouldRedirectHome(moduleLink, subtopicLink);

    // redirect home if module or subtopic is disabled, scroll to chapter
    if (isRedirectHome) {
      navigate(homeRedirectTarget, { replace: true });
      resetModuleSelection();
      return;
    }

    // if all is valid, let navigation happen and set data
    setSelectedModuleLink(moduleLink);
    setSelectedModuleName(getModuleNameByLink(moduleLink));
    setSelectedSubtopicLink(subtopicLink);
    setSelectedSubtopicName(getSubtopicNameByLink(moduleLink, subtopicLink));

    /*

    check if dev / no dev

    if dev:
      check test page:


    check root:
      return to home with dev or no dev


    if live:
      check if module exits:
        take that module
        check if subtopic exists

    if dev:
      check if module exits in dev:
        take that Variant else take live variant
        check if subtopic exists

    live, not disabled -> seite
    live, disabled -> home

    dev, not disabled -> if exits as dev file there, otherwise live file
    dev, disabled -> if exits as dev file there, otherwiese live file

    */

    /* if (module && getModuleLinks().includes(module)) {
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
    } */
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
    isDevMode,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
