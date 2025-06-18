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
