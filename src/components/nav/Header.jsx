import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { ThemeToggle } from "../ThemeToggle";
import Logo from "../Logo";

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
      className="fixed flex items-center lg:p-3 p-2 glassBlur z-40"
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
