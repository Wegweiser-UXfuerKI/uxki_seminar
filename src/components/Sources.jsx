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
 *
 * @param {Object[]} data - Raw data
 * @returns {String[]} - array with strings for list
 */
const processCitationData = (data) => {
  try {
    const cite = new Cite(data);

    const formattedCitations = cite.format("bibliography", {
      format: "html",
      template: "apa",
      lang: "de-DE",
    });

    const cleanHTML = DOMPurify.sanitize(formattedCitations);

    const parser = new DOMParser();
    const doc = parser.parseFromString(cleanHTML, "text/html");

    const citationsArray = Array.from(doc.querySelectorAll(".csl-entry")).map(
      (entry) => {
        let outerHTML = entry.innerHTML;

        const httpsLinkMatch = outerHTML.match(/https:\/\/[^\s]+/);
        if (httpsLinkMatch) {
          const httpsLink = httpsLinkMatch[0];
          const anchorTag = `<a href="${httpsLink}" target="_blank">${httpsLink}</a>`;
          outerHTML = outerHTML.replace(httpsLink, anchorTag);
        }

        return `<p class="${entry.className}" data-csl-entry-id="${entry.dataset.cslEntryId}">${outerHTML}</p>`;
      }
    );

    return citationsArray;
  } catch (error) {
    console.error("Fehler bei der Verarbeitung der Zitate:", error);
    return [];
  }
};

/**
 * A React component that fetches, formats, and displays citations for a given module.
 * The component uses Citation.js to handle citation formatting and DOMPurify for sanitizing HTML content.
 *
 * @component
 * @param {Object} props
 * @param {Object[]} - custom sources if wished
 * @returns {JSX.Element} The rendered Sources component.
 */
function Sources({ sourceData }) {
  const [citationGroups, setCitationGroups] = useState([]);
  const { selectedModuleLink } = useContext(AppContext);

  /**
   * Fetches and processes citation data whenever the selected module link changes.
   * Utilizes Citation.js to format the citations in APA style and ensures the content is sanitized before rendering.
   */
  useEffect(() => {
    const loadData = async () => {
      // Dieses Array wird befüllt, egal ob aus Props oder Fetch
      let newGroups = [];

      if (sourceData && sourceData.length > 0) {
        console.log("Lade Quellen aus Props...");

        newGroups = sourceData.map((item, index) => {
          const title = item.title || "";

          return {
            key: title || `prop-section-${index}`,
            title: title,
            list: item.data ? processCitationData(item.data) : [],
          };
        });
      } else if (selectedModuleLink && moduleMap[selectedModuleLink]) {
        console.log("Lade Quellen aus Context/Fetch...");
        const moduleChapters = moduleMap[selectedModuleLink];

        newGroups = await Promise.all(
          Object.entries(moduleChapters).map(
            async ([chapterKey, chapterFileName]) => {
              try {
                const response = await fetch(
                  `/sources/${chapterFileName}.json`
                );
                if (!response.ok) {
                  throw new Error(
                    `HTTP-Error: ${response.status} (${response.statusText})`
                  );
                }
                const data = await response.json();

                const list = processCitationData(data);

                return {
                  key: chapterKey,
                  title:
                    list.length > 0
                      ? getSubtopicNameByLink(selectedModuleLink, chapterKey)
                      : "",
                  list: list,
                };
              } catch (error) {
                console.error(
                  `Failed to load citations for chapter: ${chapterKey}:`,
                  error
                );
                return {
                  key: chapterKey,
                  title: "",
                  list: [],
                };
              }
            }
          )
        );
      } else if (!sourceData) {
        console.error("Kein Modul gefunden für:", selectedModuleLink);
      }

      setCitationGroups(newGroups);
    };

    loadData();
  }, [selectedModuleLink, sourceData]);

  return (
    <div className="break">
      <h2>Literaturverzeichnis</h2>

      {citationGroups.map((group) => (
        <section key={group.key} id={group.key} className="break">
          {group.title && (
            <h3 className="print:mt-[var(--scale4)]">{group.title}</h3>
          )}

          <ul className="break">
            {group.list.map((citation, index) => (
              <li
                key={index}
                className="text-left no-break"
                dangerouslySetInnerHTML={{ __html: citation }}
              />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default Sources;
