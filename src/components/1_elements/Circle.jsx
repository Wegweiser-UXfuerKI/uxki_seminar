/**
 * A React component that renders a circular badge with customizable size and content.
 * The circle adapts its dimensions based on the specified size and displays the provided content at its center.
 *
 * @component
 * @param {Object} props - The props for the Circle component.
 * @param {number|string} props.content - The content to be displayed inside the circle (e.g., a number, text, or icon).
 * @param {string} [props.size="medium"] - The size of the circle. Acceptable values are:
 *   - `"small"`: 40px in diameter.
 *   - `"medium"`: 64px in diameter (default).
 *   - `"large"`: 96px in diameter.
 *
 * @returns {JSX.Element} The rendered Circle component.
 *
 * @example
 * // Example usage:
 * <Circle content={1} size="small" />
 * <Circle content="A" size="medium" />
 * <Circle content="⭐" size="large" />
 */
const Circle = ({ content, size = "medium" }) => {
  const sizes = {
    small: { diameter: "40px", padding: "var(--base-size) var(--scale2)" },
    medium: { diameter: "64px", padding: "var(--scale2) var(--scale3)" },
    large: { diameter: "96px", padding: "var(--scale3) var(--scale4)" },
  };

  const { diameter, padding } = sizes[size] || sizes.medium;

  return (
    <div
      className="thirdTitle glassBox flex items-center justify-center rounded-full"
      style={{
        width: diameter,
        height: diameter,
        padding: padding,
        marginBottom: "0",
      }}>
      {content}
    </div>
  );
};

export default Circle;
