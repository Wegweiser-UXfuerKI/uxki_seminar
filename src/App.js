import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/pages/Home";
import ModulePage from "./components/pages/ModulePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppProvider } from "./AppContext";
import { TextLayout } from "./components/TextLayout";
import { ReactComponent as RightArrow } from "./assets/images/right-arrow.svg";
import "./assets/css/App.css";

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
          <main className="flex flex-col">
            <Routes>
              <Route index element={<Home />} />
              <Route path=":module" element={<ModulePage />} />
              <Route path=":module/:subtopicId" element={<TextLayout />} />
            </Routes>
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
