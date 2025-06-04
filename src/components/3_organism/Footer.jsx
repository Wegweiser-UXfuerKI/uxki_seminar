import React from "react";
import imisSVG from "../../assets/images/IMIS_Logo.svg";
import newBmbfsfjLogoSVG from "../../assets/images/BMBFSFJ_de_v1__DTP_CMYK.svg";

/**
 * A footer component displaying links to the project website, legal notice,
 * and logos of the associated institutions.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => (
  <footer
    className="relative flex justify-between md:items-center md:flex-row flex-col gap-6 bg-white lg:py-2 py-6 lg:pl-28 pl-8 pr-8"
    role="contentinfo"
    aria-label="Website Footer">
    <nav
      className="h-full flex flex-col md:mr-32 w-max"
      aria-label="Footer navigation">
      <FooterLink href="https://projekt.ux-fuer-ki.de" title="Zur Projektseite">
        Projektseite
      </FooterLink>
      <FooterLink
        href="https://ux-fuer-ki.de/impressum.html"
        title="Zum Impressum">
        Impressum
      </FooterLink>
    </nav>

    <div className="my-3">
      <FooterLogo
        href="https://www.bmfsfj.de/bmfsfj"
        src={newBmbfsfjLogoSVG}
        alt="Logo des Bundesministeriums für Bildung, Familie, Senioren, Frauen und Jugend"
        width={320}
        height={150}
      />
    </div>

    <FooterLogo
      href="https://www.uni-luebeck.de/universitaet/universitaet.html"
      src={imisSVG}
      alt="Logo des Instituts für Multimedia und Interaktive Systeme"
      width={300}
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
    className="text-[var(--br)] inlineLink">
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
