import React, { useContext, useEffect, useState } from "react";
import { Cite } from "@citation-js/core";
import "@citation-js/plugin-csl";
import DOMPurify from "dompurify";
import { AppContext } from "../../AppContext";

const sourceMap = {
  "ux-und-usability": "uxUsability",
  "ki-bezogene-ux": "kiUX",
  "ux-bezogene-ki-eigenschaften": "uxKIEigenschaften",
  dateninput: "dateninput",
  verarbeitung: "verarbeitung",
  "ki-ergebnisse": "kiErgebnisse",
  "identifikation-prozesse": "identifikationProzesse",
  "eu-ai-act": "euAIAct",
};

/**
 * A React component that fetches, formats, and displays citations for a given module.
 * The component uses Citation.js to handle citation formatting and DOMPurify for sanitizing HTML content.
 *
 * @component
 * @returns {JSX.Element} The rendered Sources component.
 */
function Sources() {
  const [citations, setCitations] = useState([]);
  const { selectedModuleLink } = useContext(AppContext);

  /**
   * Fetches and processes citation data whenever the selected module link changes.
   * Utilizes Citation.js to format the citations in APA style and ensures the content is sanitized before rendering.
   */
  useEffect(() => {
    const fileName = sourceMap[selectedModuleLink];
    if (!fileName) {
      console.error("no file found for:", selectedModuleLink);
      return;
    }
    fetch(`/sources/${fileName}.json`)
      .then((response) => response.json())
      .then((data) => {
        const cite = new Cite(data);

        const formattedCitations = cite.format("bibliography", {
          format: "html",
          template: "apa",
          lang: "de-DE",
        });

        const cleanHTML = DOMPurify.sanitize(formattedCitations);

        const parser = new DOMParser();
        const doc = parser.parseFromString(cleanHTML, "text/html");

        const citationsArray = Array.from(
          doc.querySelectorAll(".csl-entry")
        ).map((entry) => {
          let outerHTML = entry.innerHTML;

          const httpsLinkMatch = outerHTML.match(/https:\/\/[^\s]+/);

          if (httpsLinkMatch) {
            const httpsLink = httpsLinkMatch[0];
            const anchorTag = `<a href="${httpsLink}" target="_blank">${httpsLink}</a>`;

            outerHTML = outerHTML.replace(httpsLink, anchorTag);
          }

          return `<p class="${entry.className}" data-csl-entry-id="${entry.dataset.cslEntryId}">${outerHTML}</p>`;
        });

        setCitations(citationsArray);
      })
      .catch((error) => console.error("Fehler beim Laden der Quellen:", error));
  }, [selectedModuleLink]);

  return (
    <>
      <h2>Literaturverzeichnis</h2>
      <ul>
        {citations.map((citation, index) => (
          <li
            key={index}
            className="text-left"
            dangerouslySetInnerHTML={{ __html: citation }}
          />
        ))}
      </ul>
    </>
  );
}

export default Sources;
