import React, { useEffect, useState } from "react";
import noSmartphonesImage from "../assets/images/no-smartphones.png";

/**
 * A component that shows a warning when the user is on a mobile device.
 * The warning informs the user that the site is not optimized for mobile devices.
 * Once the warning is acknowledged, it won't show again until the page is refreshed.
 *
 * @component
 * @returns {JSX.Element} The rendered mobile pop-up warning and a fixed circle icon.
 */
function MobilePopUp() {
  const [isMobile, setIsMobile] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [hasSeenWarning, setHasSeenWarning] = useState(
    localStorage.getItem("hasSeenWarning") === "true"
  );

  /**
   * Checks if the user's device is mobile based on the user agent.
   *
   * @returns {boolean} True if the device is mobile, false otherwise.
   */
  const checkIfMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iPad|iPhone|iPod/i.test(userAgent);
  };

  useEffect(() => {
    if (checkIfMobile()) {
      setIsMobile(true);
      if (!hasSeenWarning) {
        setShowWarning(true);
        localStorage.setItem("hasSeenWarning", "true");
      }
    }
  }, [hasSeenWarning]);

  /**
   * Closes the warning pop-up and marks the warning as seen.
   */
  const closeWarning = () => {
    setShowWarning(false);
    setHasSeenWarning(true);
  };

  /**
   * Reopens the warning pop-up.
   */
  const reopenWarning = () => {
    setShowWarning(true);
  };

  return (
    <div>
      {isMobile && showWarning && (
        <div style={popupOverlayStyle}>
          <div style={popupContentStyle}>
            <p className="text-black">
              Warnung: Diese Seite ist derzeit nicht für mobile Geräte
              optimiert.
            </p>
            <button onClick={closeWarning} style={closeButtonStyle}>
              OK
            </button>
          </div>
        </div>
      )}

      {isMobile && hasSeenWarning && (
        <div style={fixedCircleStyle} onClick={reopenWarning}>
          <img
            src={noSmartphonesImage}
            alt="No Smartphones"
            style={imageStyle}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Inline style for the overlay background of the pop-up.
 * @constant {Object}
 */
const popupOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

/**
 * Inline style for the content of the pop-up.
 * @constant {Object}
 */
const popupContentStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  maxWidth: "90%",
  margin: "0 10px",
  boxSizing: "border-box",
};

/**
 * Inline style for the close button of the pop-up.
 * @constant {Object}
 */
const closeButtonStyle = {
  marginTop: "15px",
  padding: "8px 16px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  borderRadius: "4px",
  cursor: "pointer",
};

/**
 * Inline style for the fixed circle icon shown after the warning is acknowledged.
 * @constant {Object}
 */
const fixedCircleStyle = {
  position: "fixed",
  top: "10px",
  right: "10px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#007bff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  cursor: "pointer",
};

/**
 * Inline style for the image displayed in the fixed circle icon.
 * @constant {Object}
 */
const imageStyle = {
  width: "60%",
  height: "60%",
  objectFit: "contain",
};

export default MobilePopUp;
