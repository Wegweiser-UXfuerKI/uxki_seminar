import React, { useEffect, useState } from "react";
import noSmartphonesImage from "../assets/images/no-smartphones.png";

function MobilePopUp() {
  const [isMobile, setIsMobile] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [hasSeenWarning, setHasSeenWarning] = useState(
    localStorage.getItem("hasSeenWarning") === "true"
  );

  // Funktion zum Überprüfen, ob es sich um ein mobiles Gerät handelt
  const checkIfMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iPad|iPhone|iPod/i.test(userAgent);
  };

  useEffect(() => {
    // Überprüfen, ob es sich um ein mobiles Gerät handelt
    if (checkIfMobile()) {
      setIsMobile(true);
      // Nur anzeigen, wenn der Benutzer das Pop-up noch nicht gesehen hat
      if (!hasSeenWarning) {
        setShowWarning(true);
        localStorage.setItem("hasSeenWarning", "true");
      }
    }
  }, [hasSeenWarning]);

  // Funktion zum Schließen des Pop-ups
  const closeWarning = () => {
    setShowWarning(false);
    setHasSeenWarning(true); // Setze auf true, damit der fixe Kreis angezeigt wird
  };

  // Funktion zum erneuten Öffnen des Pop-ups beim Klick auf das fixe Element
  const reopenWarning = () => {
    setShowWarning(true);
  };

  return (
    <div>
      {/* Pop-up für die Warnung */}
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

      {/* Fixer Kreis mit Bild-Icon */}
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

// Stile für das Pop-up und den fixierten Kreis
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

const popupContentStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  maxWidth: "90%", // Stellt sicher, dass es auf kleinen Bildschirmen gut passt
  margin: "0 10px", // Abstand zu den Rändern
  boxSizing: "border-box",
};

const closeButtonStyle = {
  marginTop: "15px",
  padding: "8px 16px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  borderRadius: "4px",
  cursor: "pointer",
};

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

const imageStyle = {
  width: "60%", // Bild so skalieren, dass es gut in den Kreis passt
  height: "60%", // Bild so skalieren, dass es gut in den Kreis passt
  objectFit: "contain",
};

export default MobilePopUp;
