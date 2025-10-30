import { isDevModeActive } from "./utils/DevMode";

import GrundlagenKI from "./content/KITechnologien";
import EuAiActSections from "./content/EuAiAct";
import UXBasics from "./content/GrundlagenUX";
import IdentifikationProzesse from "./content/IdentifikationProzesse";
import UXKISections from "./content/UXKI";
import Gestaltungsziele from "./content/Gestaltungsziele";

import devgrundlagenux from "./content/DEVGrundlagenUX";
import devUxki from "./content/DEVUXKI";
import devGestaltungsziele from "./content/DEVGestaltungsziele";
import devKITechnologien from "./content/DEVKITechnologien";

// List of files for all (live-)Modules
const moduleFiles = [
  UXBasics,
  UXKISections,
  Gestaltungsziele,
  GrundlagenKI,
  IdentifikationProzesse,
  EuAiActSections,
];

// files for modules in development
const devModuleFiles = [
  devgrundlagenux,
  devUxki,
  devGestaltungsziele,
  devKITechnologien,
];

// modules in development
const devModules = [
  "ux-und-usability",
  "ki-bezogene-ux",
  "gestaltungsziele-menschzentrierte-ki",
  "ki-technologien-verstehen",
  "automatisierungspotenziale-erkennen",
];

// Temporarily deactivated modules
const disabledModules = ["automatisierungspotenziale-erkennen"];

// Disabled subtopics for specific modules
// example: "automatisierungspotenziale-erkennen": ["einleitung"],
const disabledSubtopics = {};

/**
 * Collects all modules (live and dev).
 * @returns {Object[]} Array of modules.
 */
export function getAllModules() {
  const isDevMode = isDevModeActive();

  if (!isDevMode) return moduleFiles;

  const devMap = new Map(devModuleFiles.map((m) => [m.linkName, m]));

  return moduleFiles.map((m) => {
    if (devModules.includes(m.linkName) && devMap.has(m.linkName)) {
      return devMap.get(m.linkName);
    }
    return m;
  });
}

/**
 * Gets the list of disabled Modules
 * @returns {string[]} disabled Modules
 */
export function getDisabledModules() {
  return disabledModules;
}

/**
 * Gets a list of all module links.
 * @returns {string[]} An array of module link names.
 */
export function getModuleLinks() {
  return getAllModules().map((m) => m.linkName);
}

/**
 * Gets a list of all module names.
 * @returns {string[]} An array of module names.
 */
export function getModuleNames() {
  return getAllModules().map((module) => module.name);
}

/**
 * Gets a module by its link.
 * @param {string} moduleLink - The link of the module.
 * @returns {Object|null} The module object, or null if not found.
 */
export function getModuleByLink(moduleLink) {
  return getAllModules().find((module) => module.linkName === moduleLink);
}

/**
 * Checks if a module and subtopic can be accessed in live mode
 * @param {string} moduleLink moduleLink wanting to check
 * @param {string} subtopicLink subtopicLink wanting to check
 * @returns
 */
export function shouldRedirectHome(moduleLink, subtopicLink) {
  const isDevMode = isDevModeActive();
  console.log("moduleLink:", moduleLink);
  console.log("subtopicLink:", subtopicLink);
  console.log("disabledModules:", disabledModules);

  if (!isDevMode) {
    const isDisabledModule = disabledModules.includes(moduleLink);
    const isDisabledSubtopic =
      disabledSubtopics[moduleLink]?.includes(subtopicLink);
    if (isDisabledModule || isDisabledSubtopic) {
      return true;
    }
  }
  return false;
}

/**
 * Gets the name of a module by its link.
 * @param {string} moduleLink - The link of the module.
 * @param {boolean} isDevMode - True for dev mode.
 * @returns {string|null} The name of the module, or null if not found.
 */
export function getModuleNameByLink(moduleLink) {
  const module = getModuleByLink(moduleLink);
  return module ? module.name : null;
}

/**
 * Gets a list of all module links and names.
 * @returns {Array<[string, string]>} An array of pairs containing link and name.
 */
export function getModuleLinksAndNames() {
  return getAllModules().map((module) => [module.linkName, module.name]);
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
  return (
    <ModuleIcon className="lg:max-h-[150px] lg:max-w-[150px] max-h-[96px] max-w-[96px]" />
  );
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

  const subtopics = isDevModeActive()
    ? module.content
    : module.content.filter((entry) => !entry.disabled);

  const index = subtopics.findIndex((entry) => entry.linkName === subtopicLink);
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

  const subtopics = isDevModeActive()
    ? module.content
    : module.content.filter((entry) => !entry.disabled);

  console.log("DevMode:", isDevModeActive());
  console.log("subtopics:", subtopics);

  console.log("subtopicLink:", subtopicLink);

  const index = subtopics.findIndex((entry) => entry.linkName === subtopicLink);
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

function shouldRespectDisabled() {
  return !isDevModeActive();
}

export function isModuleDisabled(moduleLink) {
  return shouldRespectDisabled() && disabledModules.includes(moduleLink);
}

export function isSubtopicDisabled(moduleLink, subtopicLink) {
  return (
    shouldRespectDisabled() &&
    disabledSubtopics[moduleLink]?.includes(subtopicLink)
  );
}

export function getDisabledSubtopics(moduleLink) {
  return shouldRespectDisabled() ? disabledSubtopics[moduleLink] || [] : [];
}
