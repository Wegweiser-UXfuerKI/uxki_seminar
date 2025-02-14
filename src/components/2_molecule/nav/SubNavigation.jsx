import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SubNavigation.css";

/**
 * A fixed SubNavigation component that displays a vertical list of items as numbered circles.
 * The component is positioned on the right side of the screen. Each item has hover functionality
 * to reveal the title of the corresponding section, and the active section is visually highlighted.
 * Smooth scrolling is implemented for better user experience.
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

  useEffect(() => {
    /**
     * Handles scroll event to determine the currently active section.
     * It checks each section's position relative to the scroll position
     * and updates the `activeSection` state accordingly.
     */
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position
      let currentSection = "";

      // If the section's top is within the viewport, set it as active
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top + window.scrollY - 100 <= scrollPosition) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection); // Update active section state
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    // Cleanup function to remove event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  /**
   * Handles smooth scrolling to a section.
   * @param {string} id - The ID of the target section.
   */
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      aria-label="Section Navigation"
      id="sectionNavi"
      className="fixed top-[40%] right-3 flex flex-col items-end space-y-4 z-20">
      {sections.map((section, index) => (
        <Link
          key={section.id}
          to={`#${section.id}`}
          role="button"
          onClick={(e) => {
            e.preventDefault();
            handleSmoothScroll(section.id);
          }}
          className={`relative group w-fit h-10 flex items-center justify-center rounded-full glassBox glassBlur px-4 py-1 transition-all ease-in-out ${
            activeSection === section.id ? "active" : ""
          }`}
          aria-label={`Gehe zur Sektion: ${section.title}`}>
          {index + 1}
          <span className="sectionTitle hidden pr-5 group-hover:block group-hover:pr-0 transition">
            : {section.title}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default SubNavigation;
