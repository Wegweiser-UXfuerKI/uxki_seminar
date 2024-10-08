import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getModuleLinks,
  getModuleNameByLink,
  getSubtopicByLink,
  getSubtopicNameByLink,
} from "./components/ContentHandler";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedModuleLink, setSelectedModuleLink] = useState(null);
  const [selectedModuleName, setSelectedModuleName] = useState(null);
  const [selectedSubtopicLink, setSelectedSubtopicLink] = useState(null);
  const [selectedSubtopicName, setSelectedSubtopicName] = useState(null);
  const [scrollToChapter, setScrollToChapter] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // checking and setting for subpages
  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const module = pathSegments[0];
    const subtopicLink = pathSegments[1];

    if (module && getModuleLinks().includes(module)) {
      setSelectedModuleLink(module);
      const moduleNames = getModuleNameByLink(module);
      setSelectedModuleName(moduleNames);
      if (subtopicLink) {
        const subtopic = getSubtopicByLink(module, subtopicLink);
        if (subtopic) {
          setSelectedSubtopicLink(subtopicLink);
          const subtopicName = getSubtopicNameByLink(module, subtopicLink);
          setSelectedSubtopicName(subtopicName);
        } else {
          navigate(`/${module}`);
        }
      } else {
        setSelectedSubtopicLink(null);
        setSelectedSubtopicName(null);
      }
    } else {
      navigate("/");
      setSelectedModuleLink(null);
      setSelectedModuleName(null);
    }
  }, [location.pathname, navigate]);

  const contextValue = {
    selectedModuleLink,
    selectedModuleName,
    setSelectedModuleLink,
    selectedSubtopicLink,
    setSelectedSubtopicLink,
    selectedSubtopicName,
    scrollToChapter,
    setScrollToChapter,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
