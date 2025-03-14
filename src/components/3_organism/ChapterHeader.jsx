import Breadcrumbs from "../2_molecule/nav/Breadcrumbs";

/**
 * A component that renders a chapter header with a title and a chapter number.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.text - The title text to display in the header.
 * @param {number} props.number - The chapter number to display in the header.
 * @returns {JSX.Element} The rendered ChapterHeader component.
 */
export const ChapterHeader = ({ text, number }) => {
  return (
    <section className="titleSubtopic relative mb-0">
      <h1
        className="relative flex items-end lg:min-h-[240px] min-h-[160px]"
        data-number={String(number).padStart(2, "0")}>
        {text}
      </h1>
      <Breadcrumbs />
    </section>
  );
};
