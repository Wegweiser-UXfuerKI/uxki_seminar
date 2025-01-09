import React from "react";
import bmfsfjLogo from "../../assets/images/BMFSFJ_Logo.jpg";
import imis from "../../assets/images/IMIS_Logo.png";

const Footer = () => {
  return (
    <footer className="relative flex justify-between items-center bg-white p-3 px-20">
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
