import React from "react";
import styles from "../../assets/css/Typo.module.css";
import { ChapterHeader } from "../texts/ChapterHeader";
import { VideoContainer } from "../texts/VideoContainer";

/*
Ein Eintrag pro array ist ein Abschnitt (eine Hintergrund-Farbe)
*/
const Einleitung = [
  /* Section 1 */
  <ChapterHeader text={"Einleitung"} number={1} />,
  /* Section 2 */
  <div className={`${styles.outerContainer}`}>
    <VideoContainer
      link={
        "https://www.youtube-nocookie.com/embed/kxsbAi3gmeE?si=PL74OEuieI7W2hce&amp;rel=0&amp;modestbranding=1"
      }
      title={"Einleitungsvideo"}
    />
  </div>,
  /* Section 3 */
  <div className={`${styles.outerContainer}`}>
    <h2 className={`${styles.h2}`}>Was ist der EU AI Act?</h2>
    <p className={`${styles.text}`}>
      Nachdem Sie nun ein kurzes Einführungsvideo gesehen haben, wenden wir uns
      nun einer etwas detaillierteren Betrachtung des EU AI Acts zu.
    </p>
    <h3 className={`${styles.h3}`}>Ziele des EU AI Acts</h3>
    <p className={`${styles.text}`}>
      Mit dem EU AI Act haben sich die Mitgliedsstaaten der EU zum Ziel gesetzt,
      das erste umfassende Regularium für den Umgang mit Systemen, die auf
      Künstlicher Intelligenz (KI) basieren, zu verfassen. Ziel ist es,
      rechtliche Rahmenbedingungen zu schaffen, in denen KI-Projekte in
      Wirtschaft, Forschung und Gesellschaft so eingesetzt und entwickelt werden
      können, dass ein vertrauenswürdiger Umgang mit den Systemen möglich ist.
      Die fundamentalen Rechte der Nutzer:innen, aber auch Aspekte wie
      Sicherheit und das Handeln auf Grundlage ethischer Prinzipien, sollen
      dabei mit einbezogen werden. Dabei soll der EU AI Act über die Grenzen der
      EU hinaus einen Impuls setzen und, ähnlich wie die DSGVO im Datenschutz,
      einen Standard stellen, der auch in Nicht-EU-Ländern wie den USA oder
      Japan genutzt wird.
    </p>
    <h3 className={`${styles.h3}`}>Entwicklung des Acts</h3>
    <p className={`${styles.text}`}>
      Bei der Entwicklung des EU AI Acts handelt es sich um einen komplexen
      bürokratischen Prozess, der sich nicht nur über viel Jahre hinweg
      entwickelte, sondern auch große Teile des parlamentarischen EU-Apparats
      durchlaufen hat.
      <br /> Komponent: Timeline <br />
      Eine vollständige Übersicht des zeitlichen Verlaufs des
      Gestaltungsprozesses und der damit verbundenen Institutionen und
      Zwischenstände finden Sie hier:{" "}
      <a href="https://artificialintelligenceact.eu/de/entwicklungen/">
        https://artificialintelligenceact.eu/de/entwicklungen/
      </a>
      .
    </p>
    <h3>... und so weiter</h3>
  </div>,
];

const RisikostufenAnwendungsbeispiele = [
  /* Section 1 */
  <ChapterHeader text={"Risikostufen - Anwendungsbeispiele"} number={2} />,
  <div>
    <strong>zweiter Bereich</strong> Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Id, ipsum deserunt incidunt facere molestias possimus
    reiciendis omnis officiis voluptas excepturi, minima aliquam maxime. Eos
    voluptates deleniti vel quia saepe quod.
  </div>,
  <div>
    Components:
    <ul>
      <li>Video: Prop: link + alt text</li>
      <li>Header: Prop: Text + Nr Bild</li>
      <li>List: Prop: Punkte (+ titel punkte)</li>
    </ul>
    Stylings:
    <ul>
      <li>Links</li>
    </ul>
  </div>,
];

const RisikostufenAuswirkungen = [
  /* Section 1 */
  <ChapterHeader text={"Risikostufen - Auswirkungen"} number={3} />,
  <div>
    zweiter Bereich Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
    ipsum deserunt incidunt facere molestias possimus reiciendis omnis officiis
    voluptas excepturi, minima aliquam maxime. Eos voluptates deleniti vel quia
    saepe quod.
  </div>,
];

const HLEG = [
  /* Section 1 */
  <ChapterHeader text={"High Level Expert Group"} number={4} />,
  <div>
    zweiter Bereich Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
    ipsum deserunt incidunt facere molestias possimus reiciendis omnis officiis
    voluptas excepturi, minima aliquam maxime. Eos voluptates deleniti vel quia
    saepe quod.
  </div>,
];

const Fazit = [
  /* Section 1 */
  <ChapterHeader text={"Fazit"} number={5} />,
  <div>
    zweiter Bereich Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
    ipsum deserunt incidunt facere molestias possimus reiciendis omnis officiis
    voluptas excepturi, minima aliquam maxime. Eos voluptates deleniti vel quia
    saepe quod.
  </div>,
];

const EuAiActSections = [
  Einleitung,
  RisikostufenAnwendungsbeispiele,
  RisikostufenAuswirkungen,
  HLEG,
  Fazit,
];

export default EuAiActSections;
