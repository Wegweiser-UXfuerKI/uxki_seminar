import React from "react";
import styles from "../../assets/css/Typo.module.css";

/*
Ein Eintrag pro array ist ein Abschnitt (eine Hintergrund-Farbe)
*/
const Einleitung = [
  /* Section 1 */
  <div className={`${styles.outerContainer}`}>
    <div className={`${styles.h1}`}>Überschrift Component</div>
  </div>,
  /* Section 2 */
  <div className={`${styles.outerContainer}`}>
    <div>Video Component</div>
  </div>,
  /* Section 3 */
  <div className={`${styles.outerContainer}`}>
    <div className={`${styles.h2}`}>Was ist der EU AI Act?</div>
    <div className={`${styles.text}`}>
      Nachdem Sie nun ein kurzes Einführungsvideo gesehen haben, wenden wir uns
      nun einer etwas detaillierteren Betrachtung des EU AI Acts zu.
    </div>
    <div className={`${styles.h3}`}>Ziele des EU AI Acts</div>
    <div>
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
    </div>
    <div className={`${styles.h3}`}>Entwicklung des Acts</div>
    <div className={`${styles.text}`}>
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
    </div>
    <div>... und so weiter</div>
  </div>,
];

const RisikostufenAnwendungsbeispiele = [
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
  <div>
    zweiter Bereich Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
    ipsum deserunt incidunt facere molestias possimus reiciendis omnis officiis
    voluptas excepturi, minima aliquam maxime. Eos voluptates deleniti vel quia
    saepe quod.
  </div>,
];

const HLEG = () => {
  return (
    <div>
      zweiter Bereich Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Id, ipsum deserunt incidunt facere molestias possimus reiciendis omnis
      officiis voluptas excepturi, minima aliquam maxime. Eos voluptates
      deleniti vel quia saepe quod.
    </div>
  );
};

const Fazit = () => {
  return (
    <div>
      zweiter Bereich Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Id, ipsum deserunt incidunt facere molestias possimus reiciendis omnis
      officiis voluptas excepturi, minima aliquam maxime. Eos voluptates
      deleniti vel quia saepe quod.
    </div>
  );
};

const EuAiActSections = [
  Einleitung,
  RisikostufenAnwendungsbeispiele,
  RisikostufenAuswirkungen,
  HLEG,
  Fazit,
];

export default EuAiActSections;
