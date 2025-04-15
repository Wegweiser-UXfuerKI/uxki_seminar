import React from "react";
import imis from "../../assets/images/IMIS_Logo.webp";
import bmfsfjLogoSVG from "../../assets/images/BMFSFJ_Gefoerdert.svg";

/**
 * A footer component displaying links to the project website, legal notice,
 * and logos of the associated institutions.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => (
  <footer
    className="relative flex justify-between items-center md:flex-row flex-col gap-6 bg-white w-full lg:py-2 py-6 lg:pl-28 pl-6 pr-6"
    role="contentinfo"
    aria-label="Website Footer">
    <nav className="h-full flex flex-col" aria-label="Footer navigation">
      <FooterLink href="https://projekt.ux-fuer-ki.de" title="Zur Projektseite">
        Projektseite
      </FooterLink>
      <FooterLink
        href="https://ux-fuer-ki.de/impressum.html"
        title="Zum Impressum">
        Impressum
      </FooterLink>
    </nav>

    <FooterLogo
      href="https://www.bmfsfj.de/bmfsfj"
      src={bmfsfjLogoSVG}
      alt="Logo des Bundesministeriums für Familie, Senioren, Frauen und Jugend"
      width={300}
      height={170}
    />

    <FooterLogo
      href="https://www.uni-luebeck.de/universitaet/universitaet.html"
      src={imis}
      alt="Logo des Instituts für Multimedia und Interaktive Systeme"
      width={280}
      height={80}
    />
  </footer>
);

/**
 * Reusable footer link component.
 */
const FooterLink = ({ href, title, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    title={title}
    className="text-[var(--br)] w-64 inlineLink sm:w-full">
    {children}
  </a>
);

/**
 * Reusable footer logo component.
 */
const FooterLogo = ({ href, src, alt, width, height }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
    <img src={src} alt={alt} width={width} height={height} />
  </a>
);

export default Footer;
