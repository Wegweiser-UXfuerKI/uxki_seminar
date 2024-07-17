import EuAiActSections from "./content/EuAiAct";

// List of all Modules ~ auto import?
const modules = [EuAiActSections];

// gets a list af all module links
export function getModuleLinks() {
  return modules.map((module) => module.linkName);
}

// gets the name of a module by the link of it
export function getModuleNameByLink(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return null;
  return module.name;
}

// gets a module by its link
export function getModuleByLink(moduleLink) {
  return modules.find((module) => module.linkName === moduleLink);
}

// gets a list of all subtopics of a module by its link
export function getSubtopicLinksByModule(moduleLink) {
  const module = getModuleByLink(moduleLink);
  if (!module) return [];
  return module.content.map((entry) => entry.linkName);
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
