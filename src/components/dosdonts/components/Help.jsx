import { useRef, useEffect } from "react";
import tippy from "tippy.js";
import expandIcon from "../../../assets/dosAndDonts/expand-icon.png";
import "tippy.js/dist/tippy.css";
import "./Help.css";

/*
  The help button that provides more information about how to use the system and 
  which keyboard shortcuts are available.
*/
function Help() {
  const helpContentRef = useRef(null);
  const helpButtonRef = useRef(null);

  useEffect(() => {
    if (helpContentRef.current && helpButtonRef.current) {
      const parentNode = helpButtonRef.current.parentNode;

      // Set up the tippy-modal when the page loaded
      tippy(helpButtonRef.current, {
        content: helpContentRef.current.innerHTML,
        arrow: true,
        maxWidth: 400,
        allowHTML: true,
        trigger: "click",
        animation: "shift-away",
        appendTo: parentNode,
        boundary: parentNode,
      });
    }
  }, []);

  return (
    <>
      <div id='help-wrapper' ref={helpContentRef} style={{ display: "none" }}>
        <div id='help-content' className='flex flex-col gap-y-4 m-3'>
          <h3 id='help-heading' className='TextColor'>Hilfe zur Nutzung</h3>
          <p className='TextColor' style={{ wordBreak: "break-word", hyphens: "auto", language: "de" }}>
            Wähle diejenige App aus, die der präsentierten Richtlinie folgt. Es wird empfohlen, sich zuvor mit dem referenzierten Artikel
            auseinanderzusetzen. Dieser wird dir inhaltlich weiterhelfen. Wenn du nicht weiter weißt, kannst du den Tipp unten rechts benutzen.
          </p>
          <p className='TextColor'>Du kannst folgende Tastatur-Shortcuts benutzen: </p>
          <div className='TextColor'><code>1</code> App 1 auswählen</div>
          <div className='TextColor'><code>2</code> App 2 auswählen</div>
          <div className='TextColor'><code>R</code> Auswahl einloggen und prüfen</div>
          <hr />
          <div className='TextColor'><code>T</code> Tipp einblenden</div>
          <div className='TextColor'><code>Z</code> Richtige Antwort auflösen</div>
          <hr />
          <div className='TextColor'><code>←</code> Zurück zur Aufgabenstellung</div>
          <div className='TextColor'><code>→</code> Weiter zur nächsten Aufgabe</div>
          <hr />
          <div className='TextColor'><code>↓</code><code>↑</code> Zwischen Aufgaben navigieren</div>
        </div>
      </div>
      <button
        id='help-button'
        ref={helpButtonRef}
        className='help flex justify-center items-center gap-x-1'
        aria-label='Hilfe-Button'
      >
        <h2 className="text-inherit">Hilfe</h2>
        <img id='expand-arrow' src={expandIcon} className='w-[24px]' aria-label='Ausklappbar' />
      </button>
    </>
  );
}

export default Help;
