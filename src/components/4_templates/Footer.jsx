import React from "react";
import bmfsfjLogo from "../../assets/images/BMFSFJ_Logo.webp";
import imis from "../../assets/images/IMIS_Logo.webp";
import "./Footer.css";

/**
 * A footer component displaying links to the project website, legal notice,
 * and logos of the associated institutions.
 *
 * @component
 * @returns {JSX.Element} The rendered footer component containing links and logos.
 */
const Footer = () => {
  return (
    <footer
      className="relative flex justify-between items-center md:flex-row flex-col gap-6 bg-white w-full lg:py-4 py-6 lg:pl-28 pl-6 pr-6"
      role="contentinfo"
      aria-label="Website Footer">
      <nav className="h-full flex flex-col" aria-label="Footer navigation">
        <a
          href="https://projekt.ux-fuer-ki.de"
          target="_blank"
          rel="noreferrer"
          title="Zur Projektseite">
          Projektseite
        </a>
        <a
          href="https://ux-fuer-ki.de/impressum.html"
          target="_blank"
          rel="noreferrer"
          title="Zum Impressum">
          Impressum
        </a>
      </nav>

      <a
        href="https://www.bmfsfj.de/bmfsfj"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bundesministerium für Familie, Senioren, Frauen und Jugend Website">
        <img
          src={bmfsfjLogo}
          alt="Logo des Bundesministeriums für Familie, Senioren, Frauen und Jugend"
          width="250"
          height="170"
        />
      </a>

      <a
        href="https://www.uni-luebeck.de/universitaet/universitaet.html"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Universität zu Lübeck Website">
        <img
          src={imis}
          alt="Logo des Instituts für Multimedia und Interaktive Systeme"
          width="250"
          height="65"
        />
      </a>
    </footer>
  );
};

export default Footer;
