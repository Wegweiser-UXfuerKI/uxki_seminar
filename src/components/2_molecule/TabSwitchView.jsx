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

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const tabTitles = React.Children.map(
    children,
    (child) => child.props.title || `Tab 1 oder 2`
  );

  return (
    <div>
      <div className="max-w-[960px] mx-auto mb-[var(--scale2)] flex justify-between bg-[rgba(var(--w-rgb),0.56)] dark:bg-[rgba(var(--ev-rgb),0.56)] p-2 shadow no-hover rounded-[var(--scale2)] gap-x-[var(--base-size)]">
        <div className="w-full">
          <button
            onClick={() => handleTabChange(0)}
            className={`w-full px-6 py-4 text-left h-full rounded-xl ${
              selectedTab === 0
                ? "ux-button "
                : "text-[var(--rb)] dark:text-[var(--w)]"
            }`}
            aria-label="Button to switch to the left tab">
            {tabTitles[0]}
          </button>
        </div>
        <div className="w-full">
          <button
            onClick={() => handleTabChange(1)}
            className={`w-full px-6 py-4 text-left h-full rounded-xl ${
              selectedTab === 1
                ? "ux-button inverted"
                : "text-[var(--rb)] dark:text-[var(--w)]"
            }`}
            aria-label="Button to switch to the right tab">
            {tabTitles[1]}
          </button>
        </div>
      </div>
      <div>{children[selectedTab]}</div>
    </div>
  );
};
