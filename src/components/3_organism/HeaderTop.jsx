import { useState, useEffect } from "react";
import MobileNav from "../2_molecule/nav/MobileNav";
import TopNav from "../2_molecule/nav/TopNav";
import { ThemeToggle } from "../1_elements/ThemeToggle";
import Logo from "../1_elements/Logo";

/**
 * HeaderTop component that adapts its layout based on the screen size.
 *
 * Displays a responsive navigation bar with a theme toggle and logo.
 * Switches between MobileNav and TopNav based on screen width.
 *
 * @component
 * @returns {JSX.Element} The rendered HeaderTop component.
 */
const HeaderTop = () => {
  /**
   * Tracks if the current screen size is considered mobile.
   * @constant {boolean} isMobile - State determining if the viewport is mobile.
   * @function setIsMobile - Updates the isMobile state.
   */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    /**
     * Updates isMobile state on window resize.
     */
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
      aria-label="HeaderTop">
      <Logo />

      {isMobile ? (
        <div className="flex items-center justify-end w-full gap-4 pr-3">
          <ThemeToggle />
          <MobileNav />
        </div>
      ) : (
        <>
          <TopNav />
          <ThemeToggle />
        </>
      )}
    </header>
  );
};

export default HeaderTop;
