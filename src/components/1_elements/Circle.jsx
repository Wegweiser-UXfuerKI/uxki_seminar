import { useState, useEffect } from "react";

/**
 * A React component that renders a circular badge with customizable size and content.
 * The circle adapts its dimensions based on the specified size and displays the provided content at its center.
 *
 * @component
 * @param {Object} props - The props for the Circle component.
 * @param {number|string} props.content - The content to be displayed inside the circle (e.g., a number, text, or icon).
 * @param {string} [props.size="medium"] - The size of the circle. Acceptable values are:
 *   - `"small"`: 40px in diameter, uses class `fourthTitle`.
 *   - `"medium"`: 64px in diameter (default), uses class `thirdTitle` (unless viewport width ≤ 1024px, then `small`).
 *   - `"large"`: 96px in diameter, uses class `secondTitle`.*
 * @returns {JSX.Element} The rendered Circle component.
 *
 * @example
 * // Example usage:
 * <Circle content={1} size="small" />
 * <Circle content="A" size="medium" />
 * <Circle content="⭐" size="large" />
 */
const Circle = ({ content, size = "medium" }) => {
  const [responsiveSize, setResponsiveSize] = useState(size);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024 && size === "medium") {
        setResponsiveSize("small");
      } else {
        setResponsiveSize(size);
      }
    };

    handleResize(); // Set initial size on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  const sizes = {
    small: {
      diameter: "40px",
      padding: "var(--base-size) var(--scale2)",
      contentSize: "fourthTitle",
    },
    medium: {
      diameter: "64px",
      padding: "var(--scale2) var(--scale3)",
      contentSize: "thirdTitle",
    },
    large: {
      diameter: "80px",
      padding: "var(--scale3) var(--scale4)",
      contentSize: "secondTitle",
    },
  };

  const { diameter, padding, contentSize } =
    sizes[responsiveSize] || sizes.medium;

  return (
    <div
      className={`${contentSize} glassBox flex items-center justify-center rounded-full`}
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
