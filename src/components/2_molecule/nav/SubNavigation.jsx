import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * SubNavigation Component
 *
 * A fixed navigation component displaying a vertical list of numbered circles.
 * Each item highlights the active section and reveals its title on hover.
 * Smooth scrolling ensures a better user experience.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {Array} props.sections - An array of section objects.
 *   @param {string} props.sections.id - The unique identifier for each section.
 *   @param {string} props.sections.title - The section title, shown on hover.
 *
 * @returns {JSX.Element} The rendered SubNavigation component.
 *
 * @example
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  /**
   * Handles smooth scrolling to the selected section.
   * @param {string} id - The target section ID.
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
      id="sectionNav"
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
          className={`relative no_underline no_link_hover group w-fit h-10 flex items-center justify-center rounded-full glassBox glassBlur px-4 py-1 transition-all ease-in-out ${
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
