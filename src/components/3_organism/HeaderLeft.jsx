import IconNav from "../2_molecule/nav/IconNav";
import { ThemeToggle } from "../2_molecule/ThemeToggle";
import Logo from "../1_elements/Logo";

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
  return (
    // TODO: make responsive
    <header
      className="fixed left-0 flex flex-col items-center justify-between gap-8 p-4 pb-8 w-fit h-full glassBlur z-40"
      style={{
        borderRight: "1.6px solid transparent",
        borderImage: "var(--glasBorder) 1",
        backgroundColor: "var(--box)",
      }}
      role="banner"
      aria-label="Header">
      <div className="flex flex-col items-center justify-start gap-12">
        <Logo />
        <IconNav />
      </div>
      <ThemeToggle />
    </header>
  );
};

export default HeaderLeft;
