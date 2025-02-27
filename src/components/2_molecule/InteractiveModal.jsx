import React from "react";
import InteractiveModalWrapper from "../1_elements/InteractiveModalWrapper";
import ContainerSixteenNine from "../1_elements/ContainerSixteenNine";
import WegweiserLogo from "../../assets/images/Wegweiser_logo.webp";

function InteractiveModal({ title, children }) {
  return (
    <InteractiveModalWrapper
      closedModalContent={
        <ContainerSixteenNine>
          <div className="w-full h-full glassBox rounded-xl flex justify-between items-center text-2xl">
            <div className="w-1/3">
              <img src={WegweiserLogo} alt="Logo Wegweiser" />
            </div>
            <div>
              <h2>Wegweiser Interaktiver Inhalt:</h2>
              <h3>{title}</h3>
              <p>Klicken um Inhalt zu starten</p>
            </div>
          </div>
        </ContainerSixteenNine>
      }
      openModalContent={children}
    />
  );
}

export default InteractiveModal;
