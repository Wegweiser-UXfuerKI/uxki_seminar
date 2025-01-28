import Circle from "../1_elements/Circle";

/**
 * A React component that renders a list of items.
 * Each item is displayed with a circular, numbered badge and the corresponding text.
 *
 * @component
 * @param {Array} items - An array of items to be displayed in the list.
 * @returns {JSX.Element} The rendered List component.
 */
const List = ({ items }) => {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-6 mb-[32px]">
          <Circle content={index + 1} size="medium" />
          <p dangerouslySetInnerHTML={{ __html: item }}></p>
        </li>
      ))}
    </ul>
  );
};

export default List;
