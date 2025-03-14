import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RightArrow from "../../1_elements/RightArrow";
import "./Accordion.css";

/**
 * Accordion Component
 *
 * A customizable and accessible accordion component with smooth transitions.
 * It can display either a list of section links or arbitrary JSX content.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Array} [props.sections] - Optional array of section objects, each containing an `id` and `title`.
 * @param {string} [props.title="Inhaltsverzeichnis"] - The title of the accordion.
 * @param {JSX.Element} [props.children] - Optional JSX content to display when `sections` is not provided.
 * @param {boolean} [props.initiallyOpen=true] - Controls whether the accordion starts open or closed.
 * @param {boolean} [props.useGlassBox=true] - Controls whether the glassBox styling is applied.
 *
 * @returns {JSX.Element} A collapsible accordion with smooth animations.
 */
const Accordion = ({ sections, title = "Inhaltsverzeichnis", children, initiallyOpen = true, useGlassBox = true }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const location = useLocation();

  /**
   * Closes the accordion when the user navigates to a new page.
   */
  useEffect(() => {
    setIsOpen(initiallyOpen);
  }, [location.pathname, initiallyOpen]);

  /**
   * Toggles the open/closed state of the accordion.
   */
  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  /**
   * Handles smooth scrolling to a section when clicking a link.
   * @param {string} id - The ID of the target section.
   */
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.focus();
    }
  };

  return (
    <div id="accordion" className={`${useGlassBox ? "glassBox" : ""} w-full rounded-xl mb-6 transition`}>
      {/* Accordion Title */}
      <h4
        onClick={toggleAccordion}
        id="accordionTitle"
        className="flex justify-between items-center px-6 py-4"
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
      </h4>

      {/* Accordion Content */}
      {isOpen && (
        <div
          id="accordionContent"
          className="p-4 transition"
          role="region"
          aria-hidden={!isOpen}>
          {sections ? (
            <ul className="list-none p-0 m-0">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <Link
                    to={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll(section.id);
                    }}
                    className="block px-2 py-1">
                    {`${index + 1}: ${section.title}`}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div>{children}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
