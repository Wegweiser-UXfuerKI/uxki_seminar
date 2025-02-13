import { useState, useEffect } from "react";
import HeaderLeft from "../3_organism/HeaderLeft";
import HeaderTop from "../3_organism/HeaderTop";

/**
 * Header component that renders different header layouts based on screen size.
 * - Displays `HeaderLeft` on desktop screens (min-width: 1024px).
 * - Displays `HeaderTop` on smaller screens (mobile & tablets).
 *
 * @component
 * @example
 * return <Header />
 *
 * @returns {JSX.Element} The responsive header component.
 */
function Header() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop ? <HeaderLeft /> : <HeaderTop />;
}

export default Header;
