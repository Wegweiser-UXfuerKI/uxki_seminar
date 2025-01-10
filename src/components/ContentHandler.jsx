import Dateninput from "./content/Dateninput";
import EuAiActSections from "./content/EuAiAct";
import UXBasics from "./content/GrundlagenUX";
import IdentifikationProzesse from "./content/IdentifikationProzesse";
import KIErgebnisse from "./content/KI-Ergebnisse";
import UXKISections from "./content/UXKI";
import UXKIEigenschaften from "./content/UXKIEigenschaften";
import Verarbeitung from "./content/Verarbeitung";

// List of all Modules ~ auto import?
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

// gets a list af all module links
export function getModuleLinks() {
  return modules.map((module) => module.linkName);
}

// gets a list a fll module names
export function getModuleNames() {
  return modules.map((module) => module.name);
}

// gets the name of a module by the link of it
export function getModuleNameByLink(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return null;
  return module.name;
}

// gets a list of all modules links and names
export function getModuleLinksAndNames() {
  return modules.map((module) => [module.linkName, module.name]);
}

// gets a module by its link
export function getModuleByLink(moduleLink) {
  return modules.find((module) => module.linkName === moduleLink);
}

// gets the svgs for a module by its link
export function getModuleImageByLink(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return null; 
  const ModuleIcon = module.moduleImage;
  return <ModuleIcon className="max-h-[150px] max-w-[150px]" />;
}

// gets a list of all subtopics of a module by its link
export function getSubtopicLinksByModule(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return [];
  return module.content.map((entry) => entry.linkName);
}

// gets a list of all linsk and names of a subtopic by its module link
export function getSubtopicLinksAndNamesByModulelink(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return [];
  return module.content.map((entry) => [entry.linkName, entry.name]);
}

// gets the name of a subtopic
export function getSubtopicNameByLink(moduleLink, subtopicLink) {
  const content = getSubtopicContentByLink(moduleLink, subtopicLink);
  if (!content) return null;
  return content.name;
}

// gets a subtopic from a module with th subtopics link
export function getSubtopicByLink(moduleLink, subtopicLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return null;
  return module.content.some((section) =>
    section.linkName.includes(subtopicLink)
  );
}

// gets subtopic data regarding module overview
export function getSubtopicData(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return null;
  return module.content.map((subtopic) => ({
    link: subtopic.linkName,
    name: subtopic.name,
    description: subtopic.description,
  }));
}

// gets the link of prev chapter
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

// gets the link of next chapter
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

// gets subtopic content by link
export function getSubtopicContentByLink(moduleLink, subtopicLink) {
  const subtopic = getSubtopicByLink(moduleLink, subtopicLink);
  const module = getModuleByLink(moduleLink);
  if (!subtopic || !module) return null;
  return module.content.find((topic) => topic.linkName === subtopicLink);
}
