const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const PDFMerger = require("pdf-merger-js").default;

const modules = [
  {
    linkName: "ux-und-usability",
    chapter: [
      { linkName: "einleitung" },
      { linkName: "usability" },
      { linkName: "nutzungskontext" },
      { linkName: "user-experience" },
      { linkName: "mensch-computer-interaktion" },
      { linkName: "evaluation" },
      { linkName: "fazit" },
    ],
  },
  {
    linkName: "ki-bezogene-ux",
    chapter: [
      { linkName: "einleitung-ki-bezogene-ux" },
      { linkName: "wahrgenommene-autonomie" },
      { linkName: "wahrgenommenes-situationsbewusstsein" },
      { linkName: "wahrgenommene-mentale-belastung" },
      { linkName: "wahrgenommene-vetrauenswuerdigkeit" },
      { linkName: "wahrgenommene-diagnostizität" },
      { linkName: "zusammenfassung-ausblick" },
    ],
  },
];

const args = process.argv.slice(2);

const tmpDir = path.join(__dirname, "../tmp");
const exportDir = path.join(__dirname, "../export");
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir);

// ----- Settigns ----- //

const BASE_URL = "http://localhost:5173";
const mode = "dark";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1200, height: 1600 },
  });

  const page = await browser.newPage();
  await page.emulateMediaFeatures([
  { name: "prefers-color-scheme", value: mode }
]);

  const merger = new PDFMerger();

  await page.evaluateOnNewDocument((mode) => {
    document.addEventListener("DOMContentLoaded", () => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(mode);
    });
  }, mode);

  // loop all pages

  if (args[0] === "export") {
    console.log("Vollständiger Export gestartet...");

    for (const module of modules) {
      for (const chapter of module.chapter) {
        const url = `${BASE_URL}/${module.linkName}/${chapter.linkName}`;
        console.log("Rendering:", url);

        await page.goto(url, { waitUntil: "networkidle0" });

        await page.evaluate(() => {
          window.dispatchEvent(new Event("beforeprint"));
        });

        const pdfBuffer = await page.pdf({
          format: "A4",
          printBackground: true,
        });

        const tmpPath = `./tmp/${module.linkName}-${chapter.linkName}.pdf`;
        fs.writeFileSync(tmpPath, pdfBuffer);
        merger.add(tmpPath);
      }
    }

    await merger.save("./export/Kurs-Komplett.pdf");
    console.log("PDF Export vollständig!");
    await browser.close();
    return;
  }

  // -- single plage

  if (args[0]) {
    const url = `${BASE_URL}${args[0]}`;
    console.log("Exportiere einzelne Seite:", url);

    await page.goto(url, { waitUntil: "networkidle0" });

    await page.evaluate(() => window.dispatchEvent(new Event("beforeprint")));

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      scale: 0.8
    });

    const filename = args[0].replace(/\//g, "_") + ".pdf";
    fs.writeFileSync(`./export/${filename}`, pdfBuffer);

    console.log("Einzel PDF exportiert →", filename);
  }

  await browser.close();
})();
