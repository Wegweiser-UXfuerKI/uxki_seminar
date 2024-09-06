import React, { useRef, useEffect, useState } from "react";

const ContainerSixteenNine = ({ children }) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateContainerHeight = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = (width / 16) * 9;
        setContainerHeight(height);
      }
    };

    calculateContainerHeight();
    window.addEventListener("resize", calculateContainerHeight);
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
