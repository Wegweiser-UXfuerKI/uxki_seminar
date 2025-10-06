import IconNav from "../2_molecule/nav/IconNav";
import { ThemeToggle } from "../1_elements/ThemeToggle";
import Logo from "../1_elements/Logo";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";

/**
 * HeaderLeft component displays the logo, navigation icons, and theme toggle in the header.
 * The layout is fixed on the left side of the screen, with a glass-like background effect.
 *
 * @component
 * @example
 * <HeaderLeft />
 *
 * @returns {JSX.Element} The rendered header component on the left side of the screen.
 */
const HeaderLeft = () => {
  const { isDevMode, selectedModuleLink, selectedSubtopicLink } =
    useContext(AppContext);

  return (
    <header
      className="fixed left-0 flex flex-col items-center justify-between gap-6 px-2 py-4 pb-8 w-fit h-full glassBlur z-40"
      style={{
        borderRight: "1.6px solid transparent",
        borderImage: "var(--glasBorder) 1",
        backgroundColor: "var(--box)",
      }}
      role="banner"
      aria-label="Header">
      <div className="flex flex-col items-center justify-start lg:gap-8 gap-6">
        <Logo />
        <IconNav />
      </div>
      <div>
        {isDevMode && (
          <Link
            to={`${selectedModuleLink ? selectedModuleLink : ""}/${
              selectedSubtopicLink ? selectedSubtopicLink : ""
            }`}
            aria-label="Switch to normal mode"
            title="Switch to normal mode"
            className="h-7 w-12 bg-[var(--vb)] flex justify-center items-center rounded-xl mb-[var(--scale3)] no-underline">
            Dev
          </Link>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default HeaderLeft;
