import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RightArrow from "../../1_elements/RightArrow";

/**
 * Accordion Component
 *
 * A customizable and accessible accordion component with smooth transitions.
 * It can display either a list of section links or arbitrary JSX content.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Array} [props.sections] - Optional array of section objects.
 * @param {string} [props.title="Inhaltsverzeichnis"] - The title of the accordion.
 * @param {JSX.Element} [props.children] - Optional JSX content.
 * @param {boolean} [props.initiallyOpen=true] - Controls whether it starts open or closed.
 * @param {boolean} [props.useGlassBox=true] - Enables glassBox styling.
 *
 * @returns {JSX.Element} A collapsible accordion with smooth animations.
 */
const Accordion = ({
  sections,
  title = "Inhaltsverzeichnis",
  children,
  initiallyOpen = true,
  useGlassBox = true,
}) => {
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
    <div
      id="accordion"
      className={`w-full rounded-xl mb-6 transition ${
        useGlassBox ? "glassBox" : ""
      }`}>
      {/* Accordion Title */}
      <h4
        onClick={toggleAccordion}
        id="accordionTitle"
        className="flex justify-between items-center mb-0 px-6 py-4 cursor-pointer"
        role="button"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleAccordion();
        }}>
        {title}
        <span
          className={`chevron transition transform ${
            isOpen ? "rotate-[-90deg]" : "rotate-90"
          }`}>
          <RightArrow />
        </span>
      </h4>

      {/* Accordion Content */}
      {isOpen && (
        <div
          id="accordionContent"
          className="p-4 transition border-t-[1.48px] border-transparent"
          style={{ borderImage: "var(--glasBorder) 1" }}
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
                    className="block px-2 py-1 font-light rounded-[var(--base-size)] hover:bg-[var(--bg)] focus:bg-[var(--bg)] active:bg-[var(--bg)]">
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
