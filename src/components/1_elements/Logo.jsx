import { Link, useLocation } from "react-router-dom";
import wegweiserLogo from "../../assets/images/Wegweiser_logo.webp";

/**
 * Logo Component
 *
 * Renders the application logo inside a link that navigates back to the homepage.
 * Ensures accessibility and smooth scrolling while maintaining a responsive design.
 *
 * @component
 * @returns {JSX.Element} The accessible logo component.
 *
 * @example
 * <Logo />
 */
const Logo = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div id="logo">
      <Link
        to="/"
        aria-label="Zur Startseite: Wegweiser UX für KI"
        aria-current={isHome ? "page" : undefined}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img
          src={wegweiserLogo}
          alt="Logo von Wegweiser UX für KI"
          width={64}
          height={64}
        />
      </Link>
    </div>
  );
};

export default Logo;
