import { useState, useEffect } from "react";

/**
 * Circle Component
 *
 * Renders a circular badge with customizable size and content. The circle adapts dynamically
 * based on the viewport width when the `"medium"` size is selected.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {number|string} props.content - The content displayed inside the circle (number, text, or icon).
 * @param {"small" | "medium" | "large"} [props.size="medium"] - Circle size:
 *   - `"small"`: 40px diameter (`fourthTitle` class).
 *   - `"medium"`: 64px (default) or 40px if viewport ≤ 1024px (`thirdTitle` or `fourthTitle`).
 *   - `"large"`: 80px diameter (`secondTitle` class).
 * @returns {JSX.Element} The rendered Circle component.
 *
 * @example
 * <Circle content={1} size="small" />
 * <Circle content="A" size="medium" />
 * <Circle content="⭐" size="large" />
 */
const Circle = ({ content, size = "medium" }) => {
  const [responsiveSize, setResponsiveSize] = useState(size);

  useEffect(() => {
    const handleResize = () => {
      setResponsiveSize(
        window.innerWidth <= 1024 && size === "medium" ? "small" : size
      );
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  const sizeConfig = {
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
    sizeConfig[responsiveSize] || sizeConfig.medium;

  return (
    <div
      className={`${contentSize} glassBox flex items-center justify-center rounded-full`}
      style={{ width: diameter, height: diameter, padding, marginBottom: "0" }}>
      {content}
    </div>
  );
};

export default Circle;
