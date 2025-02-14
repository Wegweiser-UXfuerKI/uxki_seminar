import logo from "../../../assets/images/Wegweiser_logo.webp";
import "./NavBar.css";

/*
  The nav bar showing the title and logo of the page on the left and buttons to switch
  between the info text and the learn element.
*/
function NavBar({ currentView, setCurrentView }) {
  return (
    <header className="nav-bar flex justify-between px-4 items-center">
      <button className="home flex items-center">
        <img className="logo" src={logo} alt="Logo UX-für-KI" />
        <span id="website-title" className="text-center hidden md:block">
          Plattform zur Evaluation
        </span>
      </button>
      <span id="nav-button-container">
        <button
          id="text-link"
          className={`nav-button mx-2 ${
            currentView === "text" ? "active-link" : ""
          }`}
          onClick={() => setCurrentView("text")}>
          <span className="text-inherit">Informationstext</span>
        </button>
        <button
          id="app-link"
          className={`nav-button mx-2 ${
            currentView === "interaktiv" ? "active-link" : ""
          }`}
          onClick={() => setCurrentView("interaktiv")}>
          <span className="text-inherit">Lernanwendung</span>
        </button>
      </span>
    </header>
  );
}

export default NavBar;
