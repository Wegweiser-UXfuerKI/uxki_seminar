import React, { useState } from "react";
import styles from "./TabSwitchView.module.css";

import SwooshSVG from "../../assets/otherSVG/swoosh.svg?react";

/**
 * @param {Object} props
 * @param {React.ReactNode[]} props.children - The content of the tabs. Each child should have a `title` prop.
 */
export const TabSwitchView = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabTitles = React.Children.map(
    children,
    (child, index) => child.props.title || `Tab ${index + 1}`
  );

  return (
    <div
      className={`${styles.tab_container} ${styles.background} no-hover shadow no-print`}>
      <div className={styles.tab_header}>
        {tabTitles.map((title, index) => {
          const isActive = selectedTab === index;
          const isFirst = index === 0;
          const isLast = index === tabTitles.length - 1;

          return (
            <div key={index} className={styles.tab_button_wrapper}>
              {isActive && !isFirst && (
                <SwooshSVG
                  className={`${styles.left_deco} ${styles.svg_background}`}
                  aria-hidden="true"
                  style={{ transform: "rotate(180deg)" }}
                />
              )}

              <button
                onClick={() => setSelectedTab(index)}
                className={`${styles.tab_button} ${
                  isActive
                    ? `${styles.content_background} ${styles.active_tab_button}`
                    : ""
                } text-center`}
                aria-label={`Button to switch to tab ${index + 1}`}>
                {title}
              </button>

              {isActive && !isLast && (
                <SwooshSVG
                  className={`${styles.right_deco} ${styles.svg_background}`}
                  aria-hidden="true"
                  style={{ transform: "rotate(-90deg)" }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div
        className={`${styles.tab_content} ${styles.text_color} ${
          styles.content_background
        } ${
          selectedTab === 0
            ? styles.remove_top_left_radius
            : selectedTab === children.length - 1
            ? styles.remove_top_right_radius
            : ""
        }`}>
        {children[selectedTab]}
      </div>
    </div>
  );
};
