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
        ]
    },
    {
        linkName: "ki-bezogene-ux",
        chapter: [
            { linkName: "einleitung-ki-bezogene-ux" },
            { linkName: "wahrgenommene-autonomie"},
            { linkName: "wahrgenommenes-situationsbewusstsein"},
            { linkName: "wahrgenommene-mentale-belastung"},
            { linkName: "wahrgenommene-vetrauenswuerdigkeit"},
            { linkName: "wahrgenommene-diagnostizität"},
            {linkName: "zusammenfassung-ausblick"}
        ]
    }
]

const tmpDir = path.join(__dirname, "../tmp");
const exportDir = path.join(__dirname, "../export");
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir);

const BASE_URL = "http://localhost:5173";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1200, height: 1600 }
  });

  const page = await browser.newPage();

  const merger = new PDFMerger();

  for (const module of modules) {
    for (const chapter of module.chapter) {
      const url = `${BASE_URL}/${module.linkName}/${chapter.linkName}`;
      console.log("Rendering:", url);

      await page.goto(url, { waitUntil: "networkidle0" });

      // Sicherstellen, dass Accordions/CSS ausgeführt sind
      await page.evaluate(() => {
        window.dispatchEvent(new Event("beforeprint"));
      });

      const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
      });

      // Tmp: PDF speichern
      const tmpPath = `./tmp/${module.linkName}-${chapter.linkName}.pdf`;
      fs.writeFileSync(tmpPath, pdfBuffer);
      merger.add(tmpPath);
    }
  }

  // Finales PDF
  await merger.save("./export/Kurs-Komplett.pdf");

  await browser.close();

  console.log("PDF Export vollständig!");
})();