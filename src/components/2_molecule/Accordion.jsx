import React, { useState } from "react";
import RightArrow from "../1_elements/RightArrow";

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

  /**
   * Toggles the open/closed state of the accordion.
   */
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="glassBox w-full rounded-xl mb-6">
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
          className={`chevron ${isOpen ? "rotate-[-90deg]" : "rotate-90"}`}
          style={{ transition: "transform 0.4s ease-in-out" }}>
          <RightArrow />
        </span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <nav
          id="accordion-content"
          className="px-6 py-4"
          style={{
            borderTop: "1.48px solid transparent",
            borderImage: "var(--glasBorder) 1",
            transition: "transform 0.4s ease-in-out",
          }}
          role="region"
          aria-hidden={!isOpen}>
          <ul className="list-none p-0 m-0">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="px-2 py-1">
                  {`${index + 1}: ${section.title}`}
                </a>
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
