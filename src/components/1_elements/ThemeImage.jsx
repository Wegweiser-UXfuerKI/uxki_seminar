import React, { useState, useEffect } from "react";

const ThemeImage = ({ lightSrc, darkSrc, alt = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("light")) {
      setIsDarkMode(false);
    } else if (root.classList.contains("dark")) {
      setIsDarkMode(true);
    }

    // Optional: Wenn du auf Klassenänderungen hören willst:
    const observer = new MutationObserver(() => {
      if (root.classList.contains("light")) {
        setIsDarkMode(false);
      } else if (root.classList.contains("dark")) {
        setIsDarkMode(true);
      }
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return <img src={isDarkMode ? darkSrc : lightSrc} alt={alt} />;
};

export default ThemeImage;
