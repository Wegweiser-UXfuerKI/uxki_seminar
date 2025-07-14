import React from "react";
import Circle from "../1_elements/Circle";

/**
 * List Component
 *
 * Renders a list of items, each displayed with a numbered circular badge.
 *
 * @component
 * @param {Array<string | React.ReactNode>} items - An array of HTML strings or React nodes to be displayed in the list.
 * @param {string} [alignItems="top"] - Defines vertical alignment of list items:
 *   - `"center"`: Items are vertically centered.
 *   - `"top"`: Items are top-aligned (default).
 * @param {string} [size="medium"] - Defines the size of the circular badge:
 *   - `"small"`: 40px diameter.
 *   - `"medium"`: 64px diameter (default).
 *   - `"large"`: 80px diameter.
 * @returns {JSX.Element} The rendered List component.
 */
const List = ({ items, alignItems = "top", size = "medium" }) => (
  <ul className="list-none p-0">
    {items.map((item, index) => (
      <li
        key={index}
        className={`flex ${
          alignItems === "center" ? "items-center" : "items-start"
        } lg:gap-6 gap-4 mb-8`}>
        <Circle content={index + 1} size={size} />
        {typeof item === "string" ? (
          <p dangerouslySetInnerHTML={{ __html: item }} />
        ) : (
          item
        )}
      </li>
    ))}
  </ul>
);

export default List;
