import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RightArrow from "../../1_elements/RightArrow";
import "./Accordion.css";

/**
 * A customizable Accordion component to display a collapsible section with a title and a list of links.
 * The accordion features smooth transitions for expanding and collapsing content.
 * Accessibility (ARIA) features are included to make it more user-friendly.
 *
 * @component
 * @param {Object} props - The props for the Accordion component.
 * @param {Array} props.sections - An array of section objects, each with an `id` and `title`.
 * @param {string} [props.title="Inhaltsverzeichnis"] - The title displayed for the accordion.
 *
 * @returns {JSX.Element} The rendered Accordion component.
 */
const Accordion = ({ sections, title = "Inhaltsverzeichnis" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current page location

  /**
   * Closes the accordion when the user navigates to a new page.
   */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]); // Run when pathname changes

  /**
   * Toggles the open/closed state of the accordion.
   */
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Handles smooth scrolling to a section when clicking a link.
   * @param {string} id - The ID of the target section.
   */
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="accordion" className="glassBox w-full rounded-xl mb-6 transition">
      {/* Accordion Title */}
      <div
        onClick={toggleAccordion}
        className="fourthTitle flex justify-between items-center px-6 py-4"
        style={{ marginBottom: "0" }}
        role="button"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleAccordion();
        }}>
        {title}
        <span
          className={`chevron transition ${
            isOpen ? "rotate-[-90deg]" : "rotate-90"
          }`}>
          <RightArrow />
        </span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <nav
          id="accordionContent"
          className="px-6 py-4 transition"
          role="region"
          aria-hidden={!isOpen}>
          <ul className="list-none p-0 m-0">
            {sections.map((section, index) => (
              <li key={section.id}>
                <Link
                  to={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(section.id);
                  }}
                  className="px-2 py-1">
                  {`${index + 1}: ${section.title}`}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Accordion;

// Example usage:
// const sections = [
//   { id: 'section1', title: 'Introduction' },
//   { id: 'section2', title: 'Chapter 1' },
//   { id: 'section3', title: 'Chapter 2' },
//   { id: 'section4', title: 'Conclusion' },
// ];
// <Accordion sections={sections} title="Table of Contents" />
