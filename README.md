# Lehrplattform von Wegweiser.UX-für-KI

Eine interaktive React-basierte Lehrplattform zur Vermittlung von Lehrinhalten über Künstliche Intelligenz (KI) und User Experience (UX) von KI-Systemen, die auf das Gemeinwohl ausgerichtet sind.

### Live-Version

Die aktuelle Live-Version der Plattform ist verfügbar unter: https://wegweiser.ux-fuer-ki.de/

---

### Voraussetzungen

- Node.js ≥ 18
- `pnpm` installiert (`npm install -g pnpm`)

### Installation & Entwicklung

```bash
pnpm install
pnpm dev
```

#### Einbindung von SVGs

SVG-Dateien können als React Component importiert und eingebunden werden. Wichtig ist dabei, dass am Ende des Import ein `?react` folgt, damit es korrekt erkannt wird.
Ein Import könnte beispielsweise so aussehen:

`import BaseArrowSVG from "../../assets/icons/right-arrow.svg?react";`

Alternativ können SVGs wie gewohnt als image Element eingebunden werden

#### Einbinden von Quellen

Quellen können als CSL JSON geladen werden. Dazu müssen die Dateien pro Kapitel in `/public/sources` hinterlegt werden und in der Datei `/src/components/Sources.jsx` den einzelnen Kapiteln von Modulen zugewiesen werden.

## PDF-Export
Die Inhalte des Projekts können als PDF Exportiert werden, entweder alle Kapitela aller Module oder alternativ einzelne spezifische Kapitel.
Der Export findet mit dem Dark-Mode der Seite statt, innerhalb des Skripts kann der ```mode``` auch auf "light" gesetzt werden, damit der Light-Mode für den Export genutzt wird.
Alle Module können exportiert werden über: ```node .\scripts\exportPDF.js export```.
Einzelne Kapitel können über ```node .\scripts\exportPDF.js /module-link/chapter-link``` exportiert werden.
