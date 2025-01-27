/**
 * A fixed SubNavigation component displaying a vertical list of items as numbered circles.
 * The component is positioned on the right side of the screen and includes hover functionality
 * to display the titles of the sections.
 *
 * @component
 * @param {Object} props - The props for the SubNavigation component.
 * @param {Array} props.sections - An array of section objects, each with an `id` and `title`.
 *
 * @returns {JSX.Element} The rendered SubNavigation component.
 */
const SubNavigation = ({ sections }) => {
  return (
    <nav
      aria-label="Section Navigation"
      className="fixed top-[40%] right-4 flex flex-col space-y-4"
      style={{ zIndex: 1000 }}>
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="relative group w-10 h-10 flex items-center justify-center rounded-full glassBox glassBlur"
          aria-label={`Gehe zur Sektion: ${section.title}`}>
          <span className="font-bold">{index + 1}</span>
          <span
            className="absolute right-full mr-2 px-2 py-1 text-base rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity"
            style={{
              whiteSpace: "nowrap",
              background: "var(--text)",
              color: "var(--bg)",
            }}>
            {section.title}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default SubNavigation;

// Example usage:
// const sections = [
//   { id: 'section1', title: 'Introduction' },
//   { id: 'section2', title: 'Chapter 1' },
//   { id: 'section3', title: 'Chapter 2' },
//   { id: 'section4', title: 'Conclusion' },
// ];
// <SubNavigation sections={sections} />
