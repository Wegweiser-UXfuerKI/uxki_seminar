import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Home from "./components/5_pages/Home";
import Header from "./components/3_organism/Header";
import Footer from "./components/3_organism/Footer";
import { ChapterLayout } from "./components/4_templates/ChapterLayout";
import ToTopButton from "./components/2_molecule/nav/ToTopButton";
import "./assets/css/DesignTokens.css";
import "./assets/css/App.css";
import DevTestPage from "./components/5_pages/DevTestPage";

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
 * text layout pages. The text layout pages are rendered with the ChapterLayout
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
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <Header />
          <main className="flex justify-center lg:pl-20 w-full BgCircle">
            <Routes>
              <Route index element={<Home />} />
              <Route path=":module/:subtopicId" element={<ChapterLayout />} />
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="dev" element={<DevTestPage />} />
            </Routes>
            <ToTopButton />
          </main>
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
