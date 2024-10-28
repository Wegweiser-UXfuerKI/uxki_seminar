import { euAiActTasks } from "./content/euaiact/euaiactTasks";
import { grundlagenUXTasks } from "./content/grundlagenUX/grundlagenuxTasks";

// TMP
const kiUxTasks = [];
const kiUxEigenschaftenTasks = [];
const dateninputTasks = [];
const verarbeitungTasks = [];
const kiErgebnisseTasks = [];
const identifikationTasks = [];

const moduleLinkMap = {
  "ux-und-usability": grundlagenUXTasks,
  "ki-bezogene-ux": kiUxTasks,
  "ux-bezogene-ki-eigenschaften": kiUxEigenschaftenTasks,
  dateninput: dateninputTasks,
  verarbeitung: verarbeitungTasks,
  "ki-ergebnisse": kiErgebnisseTasks,
  "identifikation-prozesse": identifikationTasks,
  "eu-ai-act": euAiActTasks,
};

export function getModuleMap(inputLink) {
  const result = moduleLinkMap[inputLink] || euAiActTasks;
  console.log("getModuleMap result:", result);
  return result;
}
