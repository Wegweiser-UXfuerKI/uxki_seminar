import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

// TODO: make dropdown better accessible

/**
 * Dropdown component that displays a list of items for navigation.
 * Allows for keyboard navigation and mouse hover interactions.
 *
 * @component
 * @example
 * const items = [
 *   ['link1', 'Module 1'],
 *   ['link2', 'Module 2'],
 * ];
 * const selectedItem = 'link1';
 * const onItemSelect = (linkName) => { console.log(linkName); };
 *
 * return (
 *   <DropDown
 *     buttonLabel="Select Module"
 *     items={items}
 *     selectedItem={selectedItem}
 *     ariaLabel="Module dropdown"
 *     dropdownId="module-dropdown"
 *     onItemSelect={onItemSelect}
 *   />
 * );
 *
 * @param {Object} props - The component's props.
 * @param {string} props.buttonLabel - The label to display on the dropdown button.
 * @param {Array<Array<string, string>>} props.items - An array of items to display in the dropdown, each item being an array of [linkName, moduleName].
 * @param {string} props.selectedItem - The `linkName` of the selected item, used to highlight the active item.
 * @param {string} props.ariaLabel - The label for accessibility purposes.
 * @param {string} props.dropdownId - The unique ID for the dropdown menu, used for aria-controls and other purposes.
 * @param {function} props.onItemSelect - A callback function to call when an item is selected.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
const DropDown = ({
  buttonLabel,
  items,
  selectedItem,
  ariaLabel,
  dropdownId,
  onItemSelect,
}) => {
  // State to manage whether the dropdown is open or not
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // References for the dropdown container and the first item in the menu
  const dropdownRef = useRef(null);
  const firstItemRef = useRef(null);

  // Open the dropdown on button focus or mouse enter
  const handleOpen = () => setDropdownOpen(true);

  // Close the dropdown on mouse leave or tabbing out
  const handleClose = () => setDropdownOpen(false);

  /**
   * Handles keyboard navigation within the dropdown (for accessibility).
   * Supports "ArrowDown", "ArrowUp", and "Escape" keys.
   *
   * @param {KeyboardEvent} e - The keyboard event.
   */
  const handleKeyDown = (e) => {
    if (!isDropdownOpen) return;

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const firstFocusable = dropdownRef.current.querySelector("a");
        firstFocusable?.focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const items = dropdownRef.current.querySelectorAll("a");
        const lastItem = items[items.length - 1];
        lastItem?.focus();
        break;
      }
      case "Escape": {
        e.preventDefault();
        setDropdownOpen(false);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onKeyDown={handleKeyDown}
      aria-haspopup="true"
      aria-expanded={isDropdownOpen}
      aria-controls={dropdownId}>
      {/* Dropdown Button */}
      <button
        aria-label={ariaLabel}
        className="inlineLink"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        aria-expanded={isDropdownOpen}
        aria-controls={dropdownId}>
        {buttonLabel}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          id={dropdownId}
          role="menu"
          className="absolute top-6 left-0 glassBox glassBlur rounded-xl min-w-[320px]"
          style={{background:"var(--bg)"}}>
          <ul className="list-none">
            {items.map(([linkName, moduleName], index) => (
              <li
                key={linkName}
                role="menuitem"
                className={`px-2 text-base ${
                  selectedItem === linkName ? "underline" : ""
                }`}>
                <Link
                  to={`/${linkName}`}
                  className="block"
                  tabIndex={0}
                  ref={index === 0 ? firstItemRef : null}
                  onClick={() => {
                    setDropdownOpen(false);
                    onItemSelect(linkName);
                  }}>
                  {index + 1}: {moduleName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
