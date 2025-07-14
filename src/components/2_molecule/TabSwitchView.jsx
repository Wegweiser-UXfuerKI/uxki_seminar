import React from "react";
import { useState } from "react";

/**
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the tabs. Each child should have a `title` prop.
 * @param {string} [props.children.title] - The title of the tab, used for the button label.
 * @returns
 */
export const TabSwitchView = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabTitles = React.Children.map(
    children,
    (child, index) => child.props.title || `Tab ${index + 1}`
  );

  return (
    <div>
      <div className="max-w-[960px] mx-auto mb-[var(--scale2)] flex justify-between bg-[rgba(var(--w-rgb),0.56)] dark:bg-[rgba(var(--ev-rgb),0.56)] p-2 shadow no-hover rounded-[var(--scale2)] gap-x-[var(--base-size)]">
        {tabTitles.map((title, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`flex-1 px-6 py-4 text-left rounded-xl ${
              selectedTab === index
                ? "ux-button"
                : "text-[var(--rb)] dark:text-[var(--w)]"
            }`}
            aria-label={`Button to switch to tab ${index + 1}`}>
            {title}
          </button>
        ))}
      </div>
      <div>{children[selectedTab]}</div>
    </div>
  );
};
