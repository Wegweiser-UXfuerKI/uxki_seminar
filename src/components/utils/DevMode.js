export function isDevModeActive() {
  return sessionStorage.getItem("devMode") === "true";
}
