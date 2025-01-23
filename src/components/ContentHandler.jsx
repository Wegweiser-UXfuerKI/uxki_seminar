import Dateninput from "./content/Dateninput";
import EuAiActSections from "./content/EuAiAct";
import UXBasics from "./content/GrundlagenUX";
import IdentifikationProzesse from "./content/IdentifikationProzesse";
import KIErgebnisse from "./content/KI-Ergebnisse";
import UXKISections from "./content/UXKI";
import UXKIEigenschaften from "./content/UXKIEigenschaften";
import Verarbeitung from "./content/Verarbeitung";

// List of all Modules
const modules = [
  UXBasics,
  UXKISections,
  UXKIEigenschaften,
  Dateninput,
  Verarbeitung,
  KIErgebnisse,
  IdentifikationProzesse,
  EuAiActSections,
];

/**
 * Gets a list of all module links.
 * @returns {string[]} An array of module link names.
 */
export function getModuleLinks() {
  return modules.map((module) => module.linkName);
}

/**
 * Gets a list of all module names.
 * @returns {string[]} An array of module names.
 */
export function getModuleNames() {
  return modules.map((module) => module.name);
}

/**
 * Gets the name of a module by its link.
 * @param {string} moduleLink - The link of the module.
 * @returns {string|null} The name of the module, or null if not found.
 */
export function getModuleNameByLink(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return null;
  return module.name;
}

/**
 * Gets a list of all module links and names.
 * @returns {Array<[string, string]>} An array of pairs containing link and name.
 */
export function getModuleLinksAndNames() {
  return modules.map((module) => [module.linkName, module.name]);
}

/**
 * Gets a module by its link.
 * @param {string} moduleLink - The link of the module.
 * @returns {Object|null} The module object, or null if not found.
 */
export function getModuleByLink(moduleLink) {
  return modules.find((module) => module.linkName === moduleLink);
}

/**
 * Gets the svgs for a module by its link.
 * @param {string} moduleLink - The link of the module.
 * @returns {string|null} The image URL of the module, or null if not found.
 */
export function getModuleImageByLink(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return null;
  const ModuleIcon = module.moduleImage;
  return <ModuleIcon className="lg:max-h-[150px] lg:max-w-[150px] max-h-[96px] max-w-[96px]" />;
}

/**
 * Gets a list of all subtopics of a module by its link.
 * @param {string} moduleLink - The link of the module.
 * @returns {string[]} An array of subtopic link names.
 */
export function getSubtopicLinksByModule(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return [];
  return module.content.map((entry) => entry.linkName);
}

/**
 * Gets a list of all subtopic links and names by a module link.
 * @param {string} moduleLink - The link of the module.
 * @returns {Array<[string, string]>} An array of pairs containing subtopic link and name.
 */
export function getSubtopicLinksAndNamesByModulelink(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return [];
  return module.content.map((entry) => [entry.linkName, entry.name]);
}

/**
 * Gets the name of a subtopic by its link.
 * @param {string} moduleLink - The link of the module.
 * @param {string} subtopicLink - The link of the subtopic.
 * @returns {string|null} The name of the subtopic, or null if not found.
 */
export function getSubtopicNameByLink(moduleLink, subtopicLink) {
  const content = getSubtopicContentByLink(moduleLink, subtopicLink);
  if (!content) return null;
  return content.name;
}

/**
 * Gets a subtopic by its link within a module.
 * @param {string} moduleLink - The link of the module.
 * @param {string} subtopicLink - The link of the subtopic.
 * @returns {Object|null} The subtopic object, or null if not found.
 */
export function getSubtopicByLink(moduleLink, subtopicLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return null;
  return module.content.some((section) =>
    section.linkName.includes(subtopicLink)
  );
}

/**
 * Gets subtopic data for a module overview.
 * @param {string} moduleLink - The link of the module.
 * @returns {Array<Object>|null} An array of subtopic data objects, or null if module not found.
 */
export function getSubtopicData(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return null;
  return module.content.map((subtopic) => ({
    link: subtopic.linkName,
    name: subtopic.name,
    description: subtopic.description,
  }));
}

/**
 * Gets the link of the previous subtopic in a module.
 * @param {string} moduleLink - The link of the module.
 * @param {string} subtopicLink - The link of the current subtopic.
 * @returns {string|null} The link of the previous subtopic, or null if not found.
 */
export function getPreviousSubtopicLink(moduleLink, subtopicLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return null;
  const index = module.content.findIndex(
    (entry) => entry.linkName === subtopicLink
  );
  if (index > 0) {
    return module.content[index - 1].linkName;
  }
  return null;
}

/**
 * Gets the link of the next subtopic in a module.
 * @param {string} moduleLink - The link of the module.
 * @param {string} subtopicLink - The link of the current subtopic.
 * @returns {string|null} The link of the next subtopic, or null if not found.
 */
export function getNextSubtopicLink(moduleLink, subtopicLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return null;
  const index = module.content.findIndex(
    (entry) => entry.linkName === subtopicLink
  );
  if (index !== -1 && index < module.content.length - 1) {
    return module.content[index + 1].linkName;
  }
  return null;
}

/**
 * Gets subtopic content by its link.
 * @param {string} moduleLink - The link of the module.
 * @param {string} subtopicLink - The link of the subtopic.
 * @returns {Object|null} The subtopic content, or null if not found.
 */
export function getSubtopicContentByLink(moduleLink, subtopicLink) {
  const subtopic = getSubtopicByLink(moduleLink, subtopicLink);
  const module = getModuleByLink(moduleLink);
  if (!subtopic || !module) return null;
  return module.content.find((topic) => topic.linkName === subtopicLink);
}
