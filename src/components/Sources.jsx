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

      // --- Logik 1: Props verwenden, falls vorhanden ---
      if (sourceData && sourceData.length > 0) {
        console.log("Lade Quellen aus Props...");

        newGroups = sourceData.map((item, index) => {
          // Stelle sicher, dass der Titel definiert ist (kann "" sein)
          const title = item.title || "";

          return {
            // Eindeutiger Key: Titel ODER (falls leer) ein Index-Fallback
            key: title || `prop-section-${index}`,
            // Der anzuzeigende Titel (kann "" sein)
            title: title,
            // Die verarbeitete Liste
            list: item.data ? processCitationData(item.data) : [],
          };
        });
      }
      // --- Logik 2: Fetch verwenden, falls keine Props da sind ---
      else if (selectedModuleLink && moduleMap[selectedModuleLink]) {
        console.log("Lade Quellen aus Context/Fetch...");
        const moduleChapters = moduleMap[selectedModuleLink];

        // Wir nutzen Promise.all, um alle Fetches parallel auszuführen
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
                  // --- HIER IST DIE ÄNDERUNG (1) ---
                  // Setze den Titel nur, wenn die Liste nicht leer ist.
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
                  // --- HIER IST DIE ÄNDERUNG (2) ---
                  // Setze den Titel bei einem Fehler auf leer.
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
    <>
      <h2>Literaturverzeichnis</h2>

      {/* NEU: Iteriere über das 'citationGroups' Array */}
      {citationGroups.map((group) => (
        <section key={group.key} id={group.key}>
          {/* HIER IST DIE GEWÜNSCHTE ÄNDERUNG:
            Rendere die <h3> nur, wenn group.title "truthy" ist 
            (d.h. nicht null, undefined oder ein leerer String "").
          */}
          {group.title && <h3>{group.title}</h3>}

          <ul>
            {group.list.map((citation, index) => (
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
