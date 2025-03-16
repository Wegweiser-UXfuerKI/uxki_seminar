import { useState, useEffect } from "react";
import MobileNav from "../2_molecule/nav/MobileNav";
import DesktopNav from "../2_molecule/nav/DesktopNav";
import { ThemeToggle } from "../1_elements/ThemeToggle";
import Logo from "../1_elements/Logo";

/**
 * Header component that adapts its layout based on the screen size.
 *
 * @component
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  /**
   * Tracks if the current screen size is considered mobile.
   * @type {[boolean, Function]}
   */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className="fixed flex items-center p-2 w-full glassBlur z-40"
      style={{
        borderBottom: "1.6px solid transparent",
        borderImage: "var(--glasBorder) 1",
        backgroundColor: "var(--box)",
      }}
      role="banner"
      aria-label="Header">
      <Logo />

      {isMobile ? (
        <div className="flex items-center justify-end w-full gap-4 pr-3">
          <ThemeToggle />
          <MobileNav />
        </div>
      ) : (
        <>
          <DesktopNav />
          <ThemeToggle />
        </>
      )}
    </header>
  );
};

export default Header;
