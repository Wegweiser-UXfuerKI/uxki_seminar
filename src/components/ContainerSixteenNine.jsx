import React, { useRef, useEffect, useState } from "react";

/**
 * A container component that maintains a 16:9 aspect ratio based on the width of the container.
 * The height of the container adjusts dynamically on window resize.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {ReactNode} props.children - The content to be rendered inside the container.
 * @returns {JSX.Element} The rendered ContainerSixteenNine component with dynamic height.
 */
const ContainerSixteenNine = ({ children }) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);

  /**
   * Calculates and updates the container height to maintain a 16:9 aspect ratio based on the container's width.
   * This function is called on initial render and whenever the window is resized.
   */
  useEffect(() => {
    const calculateContainerHeight = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = (width / 16) * 9;
        setContainerHeight(height);
      }
    };

    // Initial height calculation
    calculateContainerHeight();

    // Recalculate height on window resize
    window.addEventListener("resize", calculateContainerHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateContainerHeight);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: `${containerHeight}px` }}
      className="w-full">
      {children}
    </div>
  );
};

export default ContainerSixteenNine;
