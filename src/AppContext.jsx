import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getModuleLinks,
  getModuleNameByLink,
  getSubtopicByLink,
} from "./components/ContentHandler";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedModuleLink, setSelectedModuleLink] = useState(null);
  const [selectedModuleName, setSelectedModuleName] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
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
          setSelectedSubtopic(subtopicLink);
        } else {
          navigate(`/${module}`);
        }
      } else {
        setSelectedSubtopic(null);
      }
    } else {
      navigate("/");
    }
  }, [location.pathname, navigate]);

  const contextValue = {
    selectedModuleLink,
    selectedModuleName,
    setSelectedModuleLink,
    selectedSubtopic,
    setSelectedSubtopic,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
