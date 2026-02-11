const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const { PDFDocument } = require("pdf-lib");

// ----- Setup ----- //
const args = process.argv.slice(2);

const cssPath = path.join(__dirname, "../src/assets/css/DesignTokens.css");
const tmpDir = path.join(__dirname, "../tmp");
const pdfBaseDir = path.join(__dirname, "../public/PDF");

if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

// ----- Settigns ----- //
const BASE_URL = "http://localhost:5173";
const CONCURRENCY_LIMIT = 4;

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
      { linkName: "quellen" },
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
      { linkName: "quellen" },
    ],
  },
  {
    linkName: "gestaltungsziele-menschzentrierte-ki",
    chapter: [
      { linkName: "einleitung" },
      { linkName: "vertrauenswuerdigkeit" },
      { linkName: "transparenz" },
      { linkName: "erklaerbarkeit" },
      { linkName: "kontrollierbarkeit" },
      { linkName: "mentale-modelle" },
      { linkName: "fazit" },
      { linkName: "quellen" },
    ],
  },
  {
    linkName: "ki-technologien-verstehen",
    chapter: [
      { linkName: "einleitung" },
      { linkName: "input-technik" },
      { linkName: "input-gestaltung" },
      { linkName: "verarbeitung-technik" },
      { linkName: "verarbeitung-gestaltung" },
      { linkName: "output-technik" },
      { linkName: "output-gestaltung" },
      { linkName: "llm" },
      { linkName: "quellen" },
    ],
  },
  {
    linkName: "automatisierungspotenziale-erkennen",
    chapter: [
      { linkName: "einleitung" },
      { linkName: "automatisierung-verstehen" },
      { linkName: "eignung-der-automatisierung-einschaetzen" },
      { linkName: "preferred-automation-tasks-scale" },
      { linkName: "wann-ist-ki-sinnvoll" },
      { linkName: "quellen" },
    ],
  },
  {
    linkName: "eu-ai-act",
    chapter: [
      { linkName: "einleitung" },
      { linkName: "risikostufen-anwendungsbeispiele" },
      { linkName: "risikostufen-auswirkungen" },
      { linkName: "high-level-expert-group" },
      { linkName: "quellen" },
    ],
  },
];

async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = [];
  const executing = [];
  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p);

    if (poolLimit <= array.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= poolLimit) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(ret);
}

// ----- Background Setup ----- //
const getBackgroundHTML = (mode) => {
  let designTokensCSS = "";
  try {
    designTokensCSS = fs.readFileSync(cssPath, "utf8");
  } catch (e) {
    console.error("Konnte DesignTokens.css nicht finden!", e);
  }
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
  const contentDoc = await PDFDocument.load(contentBuffer);
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

async function appendPdfFromFile(finalDoc, fileNameWithoutExt, currentMode) {
  const filePath = path.join(
    pdfBaseDir,
    currentMode,
    "titlepages",
    fileNameWithoutExt + ".pdf",
  );

  if (!fs.existsSync(filePath)) {
    console.warn(
      `[${currentMode}] WARNUNG: Titelblatt nicht gefunden: ${filePath}`,
    );
    return;
  }

  try {
    const coverPdfBytes = fs.readFileSync(filePath);
    const coverDoc = await PDFDocument.load(coverPdfBytes);

    const copiedPages = await finalDoc.copyPages(
      coverDoc,
      coverDoc.getPageIndices(),
    );
    copiedPages.forEach((page) => finalDoc.addPage(page));
    console.log(
      `[${currentMode}] + Titelblatt eingefügt: ${fileNameWithoutExt}`,
    );
  } catch (e) {
    console.error(
      `[${currentMode}] Fehler beim Laden des Titelblatts ${fileNameWithoutExt}:`,
      e,
    );
  }
}

async function renderPageToBuffer(browser, url, mode) {
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 1600 });
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: mode },
  ]);

  await page.evaluateOnNewDocument((m) => {
    document.addEventListener("DOMContentLoaded", () => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(m);
    });
  }, mode);

  console.log(`  Rendering (Start): ${url}`);
  try {
    await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });

    await page.evaluate(() => {
      window.dispatchEvent(new Event("beforeprint"));
    });

    const buffer = await page.pdf({ format: "A4", printBackground: true });
    console.log(`  Rendering (Done):  ${url}`);

    await page.close();
    return buffer;
  } catch (error) {
    console.error(`  ERROR bei ${url}:`, error.message);
    await page.close();
    return null;
  }
}

async function processMode(browser, mode, task, specificArg = null) {
  console.log(`Starte modus: ${mode.toUpperCase()}`);

  const modeDir = path.join(pdfBaseDir, mode);
  if (!fs.existsSync(modeDir)) fs.mkdirSync(modeDir);

  // Background for mode
  console.log(`Generate BG for ${mode}`);
  const bgPage = await browser.newPage();
  await bgPage.setContent(getBackgroundHTML(mode));
  const backgroundPdfBytes = await bgPage.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });
  await bgPage.close();

  const backgroundDoc = await PDFDocument.load(backgroundPdfBytes);
  const [bgPageTemplate] = await backgroundDoc.copyPages(backgroundDoc, [0]);

  let tasks = [];

  // Einzelne Seite
  if (task === "page" && specificArg) {
    tasks.push({
      url: `${BASE_URL}${specificArg.startsWith("/") ? specificArg : "/" + specificArg}`,
      type: "page",
      id: specificArg,
    });
  }
  // Alles oder Module
  else {
    const modulesToProcess =
      task === "all" || task === "course"
        ? modules // Speichert die Ergebnisse: { "http://...": Buffer }
        : [modules.find((m) => m.linkName === specificArg)].filter(Boolean);

    modulesToProcess.forEach((mod) => {
      if (mod.chapter) {
        mod.chapter.forEach((chap) => {
          tasks.push({
            url: `${BASE_URL}/${mod.linkName}/${chap.linkName}`,
            type: "chapter",
            moduleId: mod.linkName,
            chapterId: chap.linkName,
          });
        });
      }
    });
  }

  // 3. PARALLEL RENDERING
  console.log(
    `Rendering von ${tasks.length} Seiten (Parallel: ${CONCURRENCY_LIMIT})`,
  );

  const urlBufferMap = {};

  await asyncPool(CONCURRENCY_LIMIT, tasks, async (item) => {
    const buffer = await renderPageToBuffer(browser, item.url, mode);
    if (buffer) {
      urlBufferMap[item.url] = buffer;
    }
  });

  // -- TASKS -- //
  // gesamter Kurs
  if (task === "all" || task === "course") {
    console.log(`Erstelle: Gesamter_Kurs.pdf (${mode})`);
    const finalDoc = await PDFDocument.create();

    await appendPdfFromFile(finalDoc, "Titel_Gesamt", mode);

    for (let i = 0; i < modules.length; i++) {
      const module = modules[i];
      if (!module.chapter) continue;

      await appendPdfFromFile(finalDoc, `Titel_Modul_${i + 1}`, mode);

      for (const chapter of module.chapter) {
        const url = `${BASE_URL}/${module.linkName}/${chapter.linkName}`;
        if (urlBufferMap[url]) {
          await addContentToDocument(
            finalDoc,
            urlBufferMap[url],
            bgPageTemplate,
          );
        }
      }
    }
    const pdfBytes = await finalDoc.save();
    fs.writeFileSync(path.join(modeDir, `Gesamter_Kurs_${mode}.pdf`), pdfBytes);
  }

  // Einzelnes Modul (mit deckblatt)
  if (task === "all" || task.startsWith("modul")) {
    const modulesToProcess =
      task === "all"
        ? modules
        : [modules.find((m) => m.linkName === specificArg)].filter(Boolean);

    for (const module of modulesToProcess) {
      const moduleIndex = modules.indexOf(module);
      console.log(`Erstelle PDF von Modul: ${module.linkName} (${mode})`);

      const moduleDoc = await PDFDocument.create();

      await appendPdfFromFile(
        moduleDoc,
        `Titel_Modul_${moduleIndex + 1}`,
        mode,
      );

      if (module.chapter) {
        for (const chap of module.chapter) {
          const url = `${BASE_URL}/${module.linkName}/${chap.linkName}`;
          if (urlBufferMap[url]) {
            await addContentToDocument(
              modDoc,
              urlBufferMap[url],
              bgPageTemplate,
            );
          }
        }
      }
      const pdfBytes = await moduleDoc.save();
      fs.writeFileSync(
        path.join(modeDir, `Modul_${module.linkName}.pdf`),
        pdfBytes,
      );
    }
  }

  // Task single Chapter
  if (task === "page" && specificArg) {
    const pageDoc = await PDFDocument.create();
    const item = tasks[0];
    if (urlBufferMap[item.url]) {
      await addContentToDocument(
        pageDoc,
        urlBufferMap[item.url],
        bgPageTemplate,
      );
      const filename = specificArg.replace(/\//g, "_") + ".pdf";
      fs.writeFileSync(path.join(modeDir, filename), await pageDoc.save());
      console.log(`✔ Gespeichert: ${filename}`);
    }
  }

  await page.close();
}

// ----- Running ----- //
(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
    defaultViewport: { width: 1200, height: 1600 },
  });

  const arg1 = args[0] ? args[0].replace(/^\//, "") : null;
  const arg2 = args[1];

  try {
    // case 1: GH Workflow => Alles
    if (arg1 === "ci") {
      console.log("CI MODE - generatin everything for light and dark");
      await processMode(browser, "light", "all");
      await processMode(browser, "dark", "all");
    }
    // case 2: Alles
    else if (arg1 === "export" || arg1 === "course") {
      const mode = arg2 || "light";
      await processMode(browser, mode, "course");
    }
    // case 3: specific module
    else if (modules.find((m) => m.linkName === arg1)) {
      const mode = arg2 || "light";
      await processMode(browser, mode, "modul", arg1);
    }
    // case 4: single chapter
    else if (arg1) {
      const mode = arg2 || "light";
      await processMode(browser, mode, "page", arg1);
    } else {
      console.log(
        "Keine gültigen Argumente. Nutzung: node script.js [ci | export | <modul-name> | <pfad>] [light|dark]",
      );
    }
  } catch (e) {
    console.error("FATAL ERROR:", e);
    process.exit(1);
  } finally {
    await browser.close();
    console.log("Jobs done");
  }
})();
