import React, { useContext, useEffect, useState } from "react";
import { Cite } from "@citation-js/core";
import "@citation-js/plugin-csl";
import DOMPurify from "dompurify";
import { AppContext } from "../AppContext";
import { getSubtopicNameByLink } from "./ContentHandler";

const moduleMap = {
  "ux-und-usability": {
    einleitung: "uxUsabilityEinleitung",
    usability: "uxUsabilityUsability",
    nutzungskontext: "uxUsabilityNutzungskontext",
    "user-experience": "uxUsabilityUserExperience",
    "mensch-computer-interaktion": "uxUsabilityMenschComputerInteraktion",
    evaluation: "uxUsabilityEvaluation",
    fazit: "uxUsabilityFazit",
  },
  "gestaltungsziele-menschzentrierte-ki": {
    vertrauenswuerdigkeit: "gestaltungszieleVertrauenswuerdigkeit",
    transparenz: "gestaltungszieleTransparenz",
    erklaerbarkeit: "gestaltungszieleErklaerbarkeit",
    kontrollierbarkeit: "gestaltungszieleKontrollierbarkeit",
    "mentale-modelle": "gestaltungszieleMentaleModelle",
  },
  "ki-technologien-verstehen": {
    einleitung: "kiTechnikEinleitung",
    "input-technik": "kiTechnikInputTechnik",
    "input-gestaltung": "kiTechnikInputGestaltung",
    "verarbeitung-technik": "kiTechnikVerarbeitungTechnik",
    "verarbeitung-gestaltung": "kiTechnikVerarbeitungGestaltung",
    "output-technik": "kiTechnikOutputTechnik",
    "output-gestaltung": "kiTechnikOutputGestaltung",
    llm: "kiTechnikLlm",
  },
  "eu-ai-act": {
    einleitung: "euAIActEinleitung",
    "risikostufen-anwendungsbeispiele": "euAIActRisikostufenBeispiele",
    "risikostufen-auswirkungen": "euAIActRisikostufenAuswirkungen",
    "high-level-expert-group": "euAIActHLEG",
    fazit: "euAIActFazit",
  },
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
    if (!selectedModuleLink || !moduleMap[selectedModuleLink]) {
      console.error("no module found for:", selectedModuleLink);
      return;
    }

    const moduleChapters = moduleMap[selectedModuleLink];
    const chapterCitations = {};

    const loadCitations = async () => {
      for (const [chapterKey, chapterFileName] of Object.entries(
        moduleChapters
      )) {
        try {
          const response = await fetch(`/sources/${chapterFileName}.json`);
          if (!response.ok) {
            throw new Error(
              `HTTP-Error: ${response.status} (${response.statusText})`
            );
          }
          const data = await response.json();
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

          chapterCitations[chapterKey] = citationsArray;
        } catch (error) {
          console.error(
            `Failed to load citations for chapter: ${chapterKey}:`,
            error
          );
        }
      }

      setCitations(chapterCitations);
    };

    loadCitations();
  }, [selectedModuleLink]);

  return (
    <>
      <h2>Literaturverzeichnis</h2>
      {Object.entries(citations).map(([chapterKey, chapterCitations]) => (
        <section key={chapterKey} id={chapterKey}>
          <h3>{getSubtopicNameByLink(selectedModuleLink, chapterKey)}</h3>
          <ul>
            {chapterCitations.map((citation, index) => (
              <li
                key={index}
                className="text-left"
                dangerouslySetInnerHTML={{ __html: citation }}
              />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

export default Sources;
