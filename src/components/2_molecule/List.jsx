import Circle from "../1_elements/Circle";

/**
 * A React component that renders a list of items.
 * Each item is displayed with a circular, numbered badge and the corresponding text.
 *
 * @component
 * @param {Array} items - An array of items to be displayed in the list.
 * @param {string} [alignItems="top"] - Defines vertical alignment of list items:
 *   - `"center"`: Items are vertically centered.
 *   - `"top"`: Items are top-aligned (default).
 * @param {string} [size="medium"] - Defines the size of the circular badge:
 *   - `"small"`: 40px diameter.
 *   - `"medium"`: 64px diameter (default).
 *   - `"large"`: 96px diameter.
 * @returns {JSX.Element} The rendered List component.
 */
const List = ({ items, alignItems = "top", size = "medium" }) => {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`flex ${
            alignItems === "center" ? "items-center" : "items-start"
          } lg:gap-6 gap-4 mb-[32px]`}>
          <Circle content={index + 1} size={size} />
          <p dangerouslySetInnerHTML={{ __html: item }}></p>
        </li>
      ))}
    </ul>
  );
};

export default List;
