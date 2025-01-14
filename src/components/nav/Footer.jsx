import React from "react";
import bmfsfjLogo from "../../assets/images/BMFSFJ_Logo.jpg";
import imis from "../../assets/images/IMIS_Logo.png";

/**
 * A footer component displaying links to the project website, legal notice,
 * and logos of the associated institutions.
 *
 * @component
 * @returns {JSX.Element} The rendered footer component containing links and logos.
 */
const Footer = () => {
  return (
    <footer className="relative flex justify-between items-center bg-white p-4 px-8">
      <div className="h-full flex flex-col justify-between">
        <a
          href="https://projekt.ux-fuer-ki.de"
          target="_blank"
          rel="noreferrer">
          Projektseite
        </a>
        <a
          href="https://ux-fuer-ki.de/impressum.html"
          target="_blank"
          rel="noreferrer">
          Impressum
        </a>
      </div>
      <a
        href="https://www.bmfsfj.de/bmfsfj"
        target="_blank"
        rel="noopener noreferrer">
        <img
          src={bmfsfjLogo}
          alt="Logo Bundesministerium für Familie, Senioren, Frauen und Jugend"
        />
      </a>
      <a
        href="https://www.uni-luebeck.de/universitaet/universitaet.html"
        target="_blank"
        rel="noopener noreferrer">
        <img
          src={imis}
          alt="Logo Institut für Multimedia und Interaktive Systeme"
        />
      </a>
    </footer>
  );
};

export default Footer;
