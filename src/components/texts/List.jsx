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
        <li key={index} className="flex items-center mb-[32px]">
          <div
            className="thirdTitle glassBox"
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--scale2) var(--scale3)",
              marginRight: "var(--scale3)",
              marginBottom: "0",
            }}
          >
            {index + 1}
          </div>
          <p dangerouslySetInnerHTML={{ __html: item }}></p>
        </li>
      ))}
    </ul>
  );
};

export default List;
