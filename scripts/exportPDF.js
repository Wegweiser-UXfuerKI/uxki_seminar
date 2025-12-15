const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const { PDFDocument } = require("pdf-lib")

// ----- Setup ----- //
const args = process.argv.slice(2);

const cssPath = path.join(__dirname, "../src/assets/css/DesignTokens.css")
const tmpDir = path.join(__dirname, "../tmp");
const exportDir = path.join(__dirname, "../export");

if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir);

// ----- Settigns ----- //

const BASE_URL = "http://localhost:5173";
const mode = "dark";

// ----- Modules ----- //
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
      { linkName: "wahrgenommene-vertrauenswuerdigkeit" },
      { linkName: "wahrgenommene-diagnostizitaet" },
      { linkName: "zusammenfassung-ausblick" },
    ],
  },
  {
    linkName: "gestaltungsziele-menschzentrierte-ki",
    chapter: [
      { linkName: "einleitung"},
      { linkName: "vertrauenswuerdigkeit" },
      { linkName: "transparenz" },
      { linkName: "erklaerbarkeit" },
      { linkName: "kontrollierbarkeit" },
      { linkName: "mentale-modelle" },
      { linkName: "fazit" },
    ]
  },
  {
    linkName: "ki-technologien-verstehen",
    chapter: [
      { linkName: "einleitung"},
      { linkName: "input-technik" },
      { linkName: "input-gestaltung" },
      { linkName: "verarbeitung-technik" },
      { linkName: "verarbeitung-gestaltung" },
      { linkName: "output-technik" },
      { linkName: "output-gestaltung" },
      { linkName: "llm" },
    ]
  },
  {
    linkName: "dev/automatisierungspotenziale-erkennen",
    chapter: [
      { linkName: "einleitung"},
      { linkName: "automatisierung-verstehen" },
      { linkName: "eignung-der-automatisierung-einschaetzen" },
      { linkName: "preferred-automation-tasks-scale" },
      { linkName: "wann-ist-ki-sinnvoll" },
    ]
  },
  {
    linkName: "eu-ai-act",
    chapter: [
      { linkName: "einleitung"},
      { linkName: "risikostufen-anwendungsbeispiele" },
      { linkName: "risikostufen-auswirkungen" },
      { linkName: "high-level-expert-group" },
    ]
  }
];


// ----- Background Setup ----- //
const getBackgroundHTML = () => {
  // 1. Wir lesen deine echten DesignTokens ein
  let designTokensCSS = "";
  try {
    designTokensCSS = fs.readFileSync(cssPath, "utf8");
  } catch (e) {
    console.error("Konnte DesignTokens.css nicht finden!", e);
  }

  // 2. Wir bauen das HTML. 
  // WICHTIG: <html class="dark"> sorgt dafür, dass deine :root.dark Variablen greifen!
  return `
    <!DOCTYPE html>
    <html class=${mode}> 
    <head>
      <style>
        ${designTokensCSS}

        html, body { 
            margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; 
        }

        .pdf-bg {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: var(--bg); 
            -webkit-print-color-adjust: exact;
        }

        .blob {
            position: absolute;
            border-radius: 100%;
            opacity: 40%;
            filter: var(--blur);
            z-index: -1;
        }

        .blob-before {
            right: 0;
            top: 40vw; 
            width: 30vw;
            height: 30vw;
            background: var(--rGradient);
        }

        .blob-after {
            left: 0;
            bottom: -15vw;
            width: 25vw;
            height: 25vw;
            background: var(--lGradient);
        }
        
        .blob-after-second {
            left: 0;
            top: -0vw;
            width: 25vw;
            height: 25vw;
            background: var(--lGradient);
        }
      </style>
    </head>
    <body>
      <div class="pdf-bg">
        <div class="blob blob-before"></div>
        <div class="blob blob-after"></div>
        <div class="blob blob-after-second"></div>
      </div>
    </body>
    </html>
  `;
};

async function addContentToDocument(finalDoc, contentBuffer, bgPageTemplate) {
  const contentDoc = await PDFDocument.load(contentBuffer)
  const contentPages = contentDoc.getPages();

  const [embeddedBg] = await finalDoc.embedPages([bgPageTemplate]);

  for (const contentPage of contentPages) {
    const { width, height } = contentPage.getSize();

    const newPage = finalDoc.addPage([width, height]);

    newPage.drawPage(embeddedBg, {
      x: 0,
      y: 0,
      width,
      height,
    });

    const [embeddedContent] = await finalDoc.embedPages([contentPage]);
    newPage.drawPage(embeddedContent, {
      x: 0,
      y: 0,
      width,
      height,
    });
  }
}

// ----- Running ----- //
(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: { width: 1200, height: 1600 },
  });

  const page = await browser.newPage();

  // ----- Background stuff ----- //
  console.log("PDF Background stuff")
  await page.setContent(getBackgroundHTML())
  const backgroundPdfBytes = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  })

  const backgroundDoc = await PDFDocument.load(backgroundPdfBytes);
  const [bgPageTemplate] = await backgroundDoc.copyPages(backgroundDoc, [0])

  // ----- content ----- //
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: mode }
  ]);

  const finalDoc = await PDFDocument.create();

  await page.evaluateOnNewDocument((mode) => {
    document.addEventListener("DOMContentLoaded", () => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(mode);
    });
  }, mode);

  // helper for pdf generation
  const createPdfOptions = () => ({
    format: "A4",
    printBackground: true,
  });

  // loop all pages
  if (args[0] === "export") {
    console.log("Vollständiger Export gestartet");

    for (const module of modules) {
      if (!module.chapter) continue;

      for (const chapter of module.chapter) {
        const url = `${BASE_URL}/${module.linkName}/${chapter.linkName}`;
        console.log("Rendering:", url);

        await page.goto(url, { waitUntil: "networkidle0" });

        await page.evaluate(() => {
          window.dispatchEvent(new Event("beforeprint"));
        });

        const pdfBuffer = await page.pdf(createPdfOptions());

        await addContentToDocument(finalDoc, pdfBuffer, bgPageTemplate)
      }
    }

    const pdfBytes = await finalDoc.save();
    fs.writeFileSync(path.join(exportDir, "UX-fuer-Ki-kompletter-Kurs.pdf"), pdfBytes);

    await browser.close();
    return;
  }

  // -- single plage
  if (args[0]) {
    const url = `${BASE_URL}${args[0]}`;
    console.log("Exportiere einzelne Seite:", url);

    await page.goto(url, { waitUntil: "networkidle0" });

    await page.evaluate(() => window.dispatchEvent(new Event("beforeprint")));

    const pdfBuffer = await page.pdf(createPdfOptions())
    await addContentToDocument(finalDoc, pdfBuffer, bgPageTemplate);

    const filename = args[0].replace(/\//g, "_") + ".pdf";

    const pdfBytes = await finalDoc.save();
    fs.writeFileSync(path.join(exportDir, filename), pdfBytes);
  }

  await browser.close();
})();
