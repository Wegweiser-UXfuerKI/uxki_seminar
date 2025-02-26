import { Link } from "react-router-dom";
import wegweiserLogo from "../../assets/images/Wegweiser_logo.webp";

/**
 * Logo component for consistent branding across the application.
 *
 * This component renders the logo of the application inside a link
 * that navigates back to the homepage. It ensures accessibility
 * and maintains a responsive design.
 *
 * @component
 * @returns {JSX.Element} The rendered logo component.
 */
const Logo = () => {
  return (
    <div id="logo" className="img-container w-16">
      <Link
        to="/"
        aria-label="Zur Startseite"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src={wegweiserLogo} alt="Wegweiser.UX-für-KI Logo" />
      </Link>
    </div>
  );
};

export default Logo;
