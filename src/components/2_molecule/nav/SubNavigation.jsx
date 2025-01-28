import { useState, useEffect } from "react";
import "./SubNavigation.css";

/**
 * A fixed SubNavigation component that displays a vertical list of items as numbered circles.
 * The component is positioned on the right side of the screen. Each item has hover functionality
 * to reveal the title of the corresponding section, and the active section is visually highlighted.
 *
 * @component
 * @param {Object} props - The props for the SubNavigation component.
 * @param {Array} props.sections - An array of section objects, where each object contains:
 *   @param {string} props.sections.id - The unique identifier of the section. Used as the `id` in the URL hash.
 *   @param {string} props.sections.title - The title of the section, displayed on hover.
 *
 * @returns {JSX.Element} The rendered SubNavigation component.
 *
 * @example
 * // Example usage:
 * const sections = [
 *   { id: 'section1', title: 'Introduction' },
 *   { id: 'section2', title: 'Chapter 1' },
 *   { id: 'section3', title: 'Chapter 2' },
 *   { id: 'section4', title: 'Conclusion' },
 * ];
 *
 * <SubNavigation sections={sections} />
 */
const SubNavigation = ({ sections }) => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("");

  // Check the active section based on the URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // to check on initial load
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav
      aria-label="Section Navigation"
      id="sectionNavi"
      className="fixed top-[40%] right-4 flex flex-col items-end space-y-4 z-20">
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`relative group w-fit h-10 flex items-center justify-center rounded-full glassBox glassBlur px-4 py-1 transition-all ease-in-out ${
            activeSection === `#${section.id}` ? "active" : ""
          }`}
          aria-label={`Gehe zur Sektion: ${section.title}`}>
          {index + 1}
          <span className="sectionTitle hidden pr-5 group-hover:block group-hover:pr-0 transition">
            : {section.title}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default SubNavigation;
