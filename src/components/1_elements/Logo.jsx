import { Link, useLocation } from "react-router-dom";
import wegweiserLogo from "../../assets/images/Wegweiser_logo.webp";

/**
 * Logo component for consistent branding across the application.
 *
 * This component renders the logo of the application inside a link
 * that navigates back to the homepage. It ensures accessibility
 * and maintains a responsive design.
 *
 * @component
 * @returns {JSX.Element} The accessible logo component.
 */
const Logo = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

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
