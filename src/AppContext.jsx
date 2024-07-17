import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getModuleLinks,
  getModuleNameByLink,
  getSubtopicByLink,
  getSubtopicLinksByModule,
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
    console.log("pathSegments: ", pathSegments);

    console.log("modules: ", getModuleLinks());
    console.log("subtopics: ", getSubtopicLinksByModule(module));
    console.log("bool subtopic: ", getSubtopicByLink(module, subtopicLink));

    if (module && getModuleLinks().includes(module)) {
      console.log("Straigth vorm setzen Module: ", module);
      setSelectedModuleLink(module);
      const moduleNames = getModuleNameByLink(module);
      setSelectedModuleName(moduleNames);
      if (subtopicLink) {
        const subtopic = getSubtopicByLink(module, subtopicLink);
        if (subtopic) {
          console.log("Straigth vorm setzen Subtopic: ", subtopicLink);
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

  useEffect(() => {
    console.log("useEffect im Context Module: ", selectedModuleLink);
  }, [selectedModuleLink]);

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
