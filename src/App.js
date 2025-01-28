import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/5_pages/Home";
import Header from "./components/3_organism/Header";
import Footer from "./components/3_organism/Footer";
import { AppProvider } from "./AppContext";
import { TextLayout } from "./components/4_templates/TextLayout";
import { ReactComponent as RightArrow } from "./assets/icons/right-arrow.svg";
import "./assets/css/DesignTokens.css";
import "./assets/css/App.css";

//import formbricks from "@formbricks/js";

/*
if (typeof window !== "undefined") {
  formbricks.init({
    environmentId: "cm3c1kkl20006ly53qugirfmu",
    apiHost: "https://app.formbricks.com",
  });
}
  */

/**
 * The main App component.
 *
 * This component renders the main layout of the app, including the header, main
 * content, and footer. It also sets up the routing for the app using the
 * BrowserRouter and Routes components.
 *
 * The main content of the app is rendered as a Routes component, which contains
 * three routes: one for the home page, one for the module pages, and one for the
 * text layout pages. The text layout pages are rendered with the TextLayout
 * component, which is a custom component that renders the text layout for each
 * subtopic.
 *
 * The App component also renders a "to top" button that appears when the user
 * scrolls more than 20 pixels down the page. This button is rendered with the
 * RightArrow component, which is a custom component that renders an arrow
 * icon.
 *
 * @returns {React.ReactElement} The App component.
 */
function App() {
  const [showToTopBtn, setShowToTopBtn] = useState(false);

  // check scroll behavior for toTopBtn
  useEffect(() => {
    const handleScroll = () => {
      setShowToTopBtn(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <Header />
          <main className="flex justify-center">
            <div className="circle"></div>
            <Routes>
              <Route index element={<Home />} />
              <Route path=":module/:subtopicId" element={<TextLayout />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <div className="circle2"></div>
            {showToTopBtn && <RightArrow onClick={scrollToTop} id="toTopBtn" />}
          </main>
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

// Function to scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default App;
