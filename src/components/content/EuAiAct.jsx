import React from "react";
import { ChapterHeader } from "../texts/ChapterHeader";
import { VideoContainer } from "../texts/VideoContainer";

/*
Ein Eintrag pro array ist ein Abschnitt (eine Hintergrund-Farbe)
*/
const Einleitung = [
  /* Section 1 */
  <ChapterHeader text={"Einleitung"} number={1} />,
  /* Section 2 */
  <VideoContainer
    link={
      "https://www.youtube-nocookie.com/embed/kxsbAi3gmeE?si=PL74OEuieI7W2hce&amp;rel=0&amp;modestbranding=1"
    }
    title={"Einleitungsvideo"}
  />,
  /* Section 3 */
  <section>
    <h2>Was ist der EU AI Act?</h2>
    <p>
      Nachdem Sie nun ein kurzes Einführungsvideo gesehen haben, wenden wir uns
      nun einer etwas detaillierteren Betrachtung des EU AI Acts zu.
    </p>
    <h3>Ziele des EU AI Acts</h3>
    <p>
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
    <h3>Entwicklung des Acts</h3>
    <p>
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
  </section>,
  <section>
    <h2>Vergleich mit anderen Ländern / Regionen</h2>
    <h3>insbesondere USA, Kanada und England</h3>
    <p>
      Betrachtet man den EU AI Act als groß angelegte Normierung innerhalb des
      europäischen Raums, drängt sich schnell die Frage auf, welche Auswirkungen
      die Gesetzgebung außerhalb seiner Mitgliedsstaaten haben wird. Es kann
      dabei davon ausgegangen werden, dass das EU-Parlament zwar primär die
      Regulierung im eigenen Legislaturbereich im Blick hat, aber auch auf
      andere große Volkswirtschaften wie die USA, China und das Vereinigte
      Königreich schaut, wenn es um den Einsatz von KI geht. Wie schon bei der
      Datenschutz-Grundverordnung (DSGVO) scheint hier der Gedanke zu sein,
      einen weitreichenden "Goldstandard" zu schaffen, der auch die Gesetzgebung
      in den Nationen außerhalb der EU bestimmt. Wir halten es deshalb für
      sinnvoll, einen kurzen Blick auf den aktuellen Stand der KI-Regulierung in
      anderen Nationen zu werfen, um diese Vorstellung besser einordnen zu
      können.
    </p>
    <h3>Vereinigtes Königreich</h3>
    <p>
      Schaut man dazu beispielsweise über den Kanal ins Vereinigte Königreich,
      so stellt man fest, dass auch dort weitreichende Maßnahmen für die
      Regulierung und den ethischen Umgang mit KI bereits getroffen worden sind.
      Die britische Regierung setzt dabei auf bestehende sektorale Vorgaben wie
      bspw. die KI-Prinzipien der OECD oder die Empfehlung zu ethischem Umgang
      mit KI der UNESCO. Diese übergeordneten Richtlinien werden durch lokal
      angetriebene Maßnahmen erweitert. Von besonderer Bedeutung ist dabei zum
      Beispiel die Bletchley Declaration aus November 2023, bei der sich 28
      Länder, darunter die Vereinigten Staaten, China und die Europäische Union,
      geeinigt haben, international bei der Bewältigung von Herausforderungen
      und Risiken im Bereich der KI zusammenzuarbeiten. Im Fokus standen dabei
      vor allem "frontier"-Systeme, also KI-Grundlagenmodelle, die für alle
      möglichen Anwendungsfälle nutzbar gemacht werden können, so wie bspw. die
      ChatGPT zugrundeliegenden LLMs. Es gibt also ein klares Bewusstsein für
      die Bedeutung des Themas KI und erste Bestrebungen für Lösungen. Die dabei
      getroffenen Vereinbarungen sind dabei eher Leitlinie und weniger strenges
      Regularium als es der EU AI Act sein möchte.
    </p>
    <h3>USA</h3>
    <p>
      Demgegenüber steht die Regulierung von KI in den USA derzeit noch am
      Anfang. Zwar sind auch diese Teil der Bletchley Declaration, trotzdem
      fehlt ein kohärentes nationales Regelwerk. Aktuell gibt es in den USA
      keine umfassende föderale KI-Regulierung, sondern lediglich fragmentierte
      Richtlinien und Bestrebungen auf Bundesstaatenebene und in verschiedenen
      Sektoren. Bundesbehörden wie die Federal Trade Commission (FTC) haben zwar
      Leitlinien zur Vermeidung unfairer oder irreführender KI-Anwendungen
      herausgegeben, aber umfassende gesetzliche Regelungen stehen noch aus.
    </p>
    <p>
      Allerdings gibt es zunehmend Bestrebungen, eine konsistente Regulierung zu
      entwickeln. Präsident Joe Biden hat Anfang 2021 den "National Artificial
      Intelligence Initiative Act" unterzeichnet, der die Forschung und
      Entwicklung von KI koordiniert und fördert. Zudem hat das Weiße Haus Ende
      2022 einen "Blueprint for an AI Bill of Rights" veröffentlicht, der
      Prinzipien zum Schutz der Bürgerrechte im Zusammenhang mit KI vorschlägt.
      Während die EU mit dem AI Act einen klaren und strengen Regulierungsrahmen
      vorgibt, arbeiten die USA daran, ihre Strategie zu entwickeln, die
      wahrscheinlich stärker auf Selbstregulierung und sektorale Ansätze setzt,
      um Innovationen nicht zu behindern (Pinsent Masons) (Skadden, Arps, Slate,
      Meagher & Flom LLP).
    </p>
    <h3>Kanada</h3>
    <p>
      Im Kontext des EU AI Acts hat Kanada ebenfalls Schritte unternommen, um
      den Einsatz von KI zu regulieren und zu fördern. Aktuell wird KI in Kanada
      hauptsächlich durch den Artificial Intelligence and Data Act (AIDA)
      reguliert, der Teil des umfassenden Digital Charter Implementation Acts
      ist, welcher im Juni 2022 vorgeschlagen wurde. AIDA zielt darauf ab,
      KI-Systeme zu regulieren, die ein erhebliches Risiko für die Sicherheit
      der Menschen oder ihre Grundrechte darstellen. Der Ansatz umfasst
      Verpflichtungen zur Transparenz, zur Risikobewertung und zur Einhaltung
      ethischer Standards.
    </p>
    <p>
      Zusätzlich gibt es in Kanada Bestrebungen, die Regulierung weiter zu
      verfeinern und zu stärken. Die kanadische Regierung arbeitet daran,
      Richtlinien und Standards zu entwickeln, die sicherstellen, dass
      KI-Systeme sicher, fair und transparent sind. Dies beinhaltet auch die
      Zusammenarbeit mit internationalen Partnern und Organisationen, um globale
      Standards zu fördern und die Interoperabilität von Regulierungsrahmen zu
      gewährleisten. Im Vergleich zum EU AI Act, der einen sehr strukturierten
      und strengen Rahmen vorgibt, verfolgt Kanada einen eher kooperativen und
      flexiblen Ansatz. Die kanadische Regulierung konzentriert sich auf die
      Förderung von Innovationen, während sie gleichzeitig sicherstellt, dass
      die Entwicklung und der Einsatz von KI ethisch und verantwortungsvoll
      erfolgen (Pinsent Masons)​​ (Skadden, Arps, Slate, Meagher & Flom LLP)​.
    </p>
    <p>
      Zusammengefasst kann festgehalten werden, dass zwar viele
      Nicht-EU-Nationen eine klare Vorstellung von KI und potenziellen
      unkontrollierten Auswirkungen haben, im Gegensatz zur EU allerdings
      teilweise noch am Anfang einer konkreten Ausformulierung von Regeln und
      Gesetzen stehen oder generell einen offeneren Ansatz mit Blick auf
      möglichst freie Innovationsentwicklung verfolgen.
    </p>
    <h2>Umsetzung des Acts in den Mitgliedstaaten</h2>
    <p>
      Die faktische Umsetzung des EU AI Acts in den Mitgliedstaaten erfordert
      sorgfältige Planung und Koordination, um die umfassenden Anforderungen des
      Gesetzes zu erfüllen.
    </p>
  </section>,
  <section>
    <h2>Primäre Inhalte des Eu AI Acts</h2>
    <p>
      Der EU AI Act ist ein umfassendes Regelwerk, das den Einsatz von KI
      innerhalb der EU reguliert. Zu den primären Inhalten gehören die
      Kategorisierung von KI-Systemen nach ihrem Risiko (unzulässiges, hohes,
      begrenztes und minimales Risiko), spezifische Anforderungen für
      Hochrisiko-Systeme, Transparenz- und Sicherheitsanforderungen sowie die
      Einrichtung eines EU-weiten Überwachungssystems für KI-Anwendungen. Einen
      tieferen Einblick in das Thema Risikoklassifizierung und Risikostufen
      finden Sie in den Kapiteln 02 und 03. Diese Maßnahmen zielen darauf ab,
      die Sicherheit, Transparenz und Verantwortung im Umgang mit KI zu
      gewährleisten und gleichzeitig Innovationen zu fördern. Darüber hinaus
      bilden sie eine feste rechtliche Grundlage, die Unternehmen, Forschung und
      Endnutzer:innen befähigt, rechtssicher mit KI umzugehen.
    </p>
    <h3>Anwendungsbereich und betroffene Systeme</h3>
    <p>
      Der Act findet Anwendung bei verschiedenen KI-Systemen, abhängig von ihrem
      Risiko. Hochrisiko-Systeme umfassen beispielsweise KI-Anwendungen in
      kritischen Infrastrukturen, wie etwa KI-gesteuerte Systeme im
      Gesundheitswesen. Ein konkretes Beispiel wäre ein KI-gestütztes
      Diagnosetool in Krankenhäusern, das strengen Auflagen hinsichtlich
      Datenqualität, Transparenz und menschlicher Aufsicht unterliegt.
      Niedrigrisiko-Systeme, wie etwa Chatbots oder KI-basierte Spiele,
      unterliegen weniger strengen Regelungen, müssen aber dennoch gewisse
      Transparenzanforderungen erfüllen.
    </p>
    <h3>Relevante Beteiligte</h3>
    <p>
      Alle Anbieter:innen und Nutzer:innen von KI-Systemen innerhalb der EU
      müssen sich mit den Anforderungen des Acts auseinandersetzen. Dies umfasst
      Entwickler:innen, Anbieter:innen und Anwender:innen von KI-Technologien.
      Privatpersonen, die KI-Anwendungen wie ChatGPT nutzen, sind in der Regel
      nicht direkt betroffen, solange sie diese nur als Endnutzer:innen
      einsetzen und die Anwendungen den regulatorischen Anforderungen
      entsprechen. Unternehmen, die solche Technologien entwickeln oder
      bereitstellen, müssen hingegen sicherstellen, dass ihre Produkte konform
      sind.
    </p>
    <h3>Sanktionen bei Verstößen</h3>
    <p>
      Bei Verstößen gegen den EU AI Act drohen erhebliche Sanktionen. Die
      vorgeschlagenen Strafen umfassen Bußgelder von bis zu 35 Millionen Euro
      oder 7% des weltweiten Jahresumsatzes. Die faktische Umsetzung des EU AI
      Acts in den Mitgliedstaaten erfordert umfassende Maßnahmen zur Einhaltung
      der neuen Vorschriften, die eine sichere und transparente Nutzung von KI
      sicherstellen sollen.
    </p>
  </section>,
  <section>
    <h2>Fazit</h2>
    <p>
      Zusammenfassend lässt sich sagen, dass der EU AI Act ein umfassendes und
      wegweisendes Regelwerk darstellt, das den Einsatz von KI in der EU
      regulieren soll. Er kategorisiert KI-Systeme nach ihrem Risikoniveau und
      legt spezifische Anforderungen für Hochrisiko-Systeme fest, um Sicherheit,
      Transparenz und Verantwortlichkeit zu gewährleisten. Der Act betrifft eine
      Vielzahl von KI-Anwendungen, von Gesundheitsdiagnosetools bis hin zu
      Chatbots, und erfordert von Anbieter:innen und Nutzer:innen die Einhaltung
      strenger Vorgaben. Bei Verstößen drohen erhebliche Sanktionen,
      einschließlich hoher Bußgelder. In den nächsten Modulen werden wir uns
      detailliert mit den Risikostufen und der Klassifizierung von KI-Systemen
      befassen, um ein tieferes Verständnis für die Implementierung und
      Einhaltung des EU AI Acts zu entwickeln.
    </p>
  </section>,
];

const RisikostufenAnwendungsbeispiele = [
  /* Section 1 */
  <ChapterHeader text={"Risikostufen - Anwendungsbeispiele"} number={2} />,
  <section>
    <h2>Einteilung in Risikostufen anhand Anwendungsbeispielen</h2>
    <p>
      Nachdem wir zuvor einen groben Überblick über die Entwicklung und die
      wichtigsten Aspekte des EU AI Acts gegeben haben, möchten wir nun einen
      genaueren Blick auf das Herzstück des EU AI Acts werfen: die Einteilung
      der Risikostufen. In diesem Abschnitt wird erläutert, welche Risikostufen
      es gibt, welche Systeme in welche Kategorie fallen und welche
      Anforderungen daraus für Organisationen entstehen. Sobald Sie ein
      grundlegendes Verständnis der Risikostufen erlangt haben, werden wir im
      zweiten Schritt zwei praktische Beispiele für die Einordnung von Systemen
      in die verschiedenen Risikostufen betrachten und Ihnen ein Tool
      vorstellen, das Sie selbst zur Einstufung nutzen können.{" "}
    </p>
    <p>
      Für eine einfache Übersicht über die verschiedenen Risikostufen, schauen
      Sie sich gerne folgendes Video an:
    </p>
  </section>,
  <VideoContainer
    link={
      "https://www.youtube-nocookie.com/embed/zkfqjX6om8g?si=XKEX_r1jRmViUJkB&rel=0&modestbranding=1"
    }
    title={"Risikostufen"}
  />,
  <section>
    <h2>Die Beispiele</h2>
    <p>
      Nachdem Sie sich nun mit den Grundlagen der Risikostufen vertraut machen
      konnten, können wir uns nun den Beispielen zuwenden, die praktischen
      Herausforderungen besser illustrieren.
    </p>
    <h3>Beispiel 1 - AntragsAssistent</h3>
    <p>
      Stellen Sie sich vor Sie sind Teil einer kleinen in Berlin ansässigen
      Organisation, die es sich zum Ziel gesetzt hat Personen aus
      benachteiligten Gruppen bei der Kommunikation mit Behörden zu unterstützen
      bspw. durch Hilfe beim Schreiben von Briefen oder Anträgen, kleiner
      Übersetzungsleistungen o.Ä.. Um Ihre Prozesse zu optimieren haben Sie vor
      ein Unterstützungstool einzukaufen, dass die Unterlagenprüfung für Sie
      übernimmt. Personen die zu Ihnen kommen können dort ihre Dokumente digital
      hinterlegen, diese werden dann vom Antrags Assistenten geprüft, der Ihnen
      und ihren Kolleg:innen eine Auskunft darüber gibt, wie das System die
      Chancen auf Erfolg bei Antragsstellung bewertet. Das System kann keine
      Personen ablehnen und keine eigenständigen Entscheidungen treffen. Was
      glauben Sie? Nehmen Sie sich einen Moment Zeit und denken Sie darüber nach
      wo ein solches System eingeordnet werden könnte. Wir fassen die
      wichtigsten Informationen hier noch mal zusammen, dabei spielen nicht nur
      die Dinge eine Rolle, die das System tut, sondern explizit auch was es
      nicht tut oder kann.
    </p>
    <h3>Übersicht Beispielsystem 1 - AntragsAssistent</h3>
    <ul>
      <li>Unsere Organisation setzt das System nur ein.</li>
      <li>
        Wir sind mit unserem Standort in Berlin innerhalb der EU niedergelassen.
      </li>
      <li>
        Wir nutzen das System weder für militärische Zwecke, noch sind wir Teil
        einer Behörde oder Forschungseinrichtung.
      </li>
      <li>
        Das System wird nicht für Dinge wie Social Scoring, Emotionserkennung
        oder Verhaltensmanipulation genutzt.
      </li>
      <li>
        Da es sich um ein System handelt, dass potenziell den Zugang zu privaten
        und öffentlichen Leistungen beeinflusst, könnte dies besondere
        Auswirkungen auf die Einstufung unseres Tools haben. Wichtig ist dabei
        vor allem, dass kein erhebliches Risiko für die Gesundheit, die
        Sicherheit oder die Grundrechte einer Person darstellt.
      </li>
    </ul>
    <p>
      Prüfen wir basierend auf diesen Informationen unser Assistenzsystem so
      bedeutet das, dass die Anwendung mit hoher Wahrscheinlichkeit der
      niedrigsten Risikostufe zugeordnet wird. Für Sie als Nutzende heißt das,
      dass Sie das System wie geplant nutzen können. Auf Anbieterseite ist dies
      allerdings mit einigen Pflichten verbunden. So muss das System in einer
      EU-Datenbank registriert werden und die getätigten Anfragen müssen beim
      Anbieter so gesichert werden, dass dieser Sie auf Anfrage der EU-Behörden
      übertragen kann.
    </p>
    <h3>Beispiel 2</h3>
    <p>
      Für unser zweites Beispiel stellen wir uns vor wir sind Teil einer in den
      USA und Europa agierenden auf Nachhaltigkeit und Tierwohl ausgerichtetet
      Organisation, die in Kooperation mit einer ländlichen Kommune die
      Population in einem Waldstück überwachen und messen möchte. Um ein
      möglichst detailliertes Bild zu bekommen sendet Ihnen ihre Hauptstelle in
      den Staate durch KI-Erkennungssystem gesteuerte Kameras, die im Waldstück
      angebracht werden und automatisch Tiere bedrohter Arten identifizieren und
      die gemachten Bilder speichern sollen. Bei der genutzten
      Tiererkennungssoftware handelt es sich um eine etablierte Anwendung eines
      großen Technologiehauses, die in Kooperation mit ihrer Hauptstelle
      entwickelt und in den USA schon weiträumig mit erfolg eingesetzt wird.
      Aufgrund der Serverinfrastruktur auf die das System zurückgreift werden
      Daten, die in Deutschland aufgenommen werden in der Hauptstelle in den USA
      verarbeitet und aufgenommen.
    </p>
    <p>
      Nehmen Sie sich auch hier wieder einen Moment Zeit und denken Sie darüber
      nach welcher Risikostufe so ein System zugeordnet werden könnte. Hier noch
      einmal die wichtigsten Informationen:
    </p>
    <h3>Übersicht Beispielsystem 2</h3>
    <ul>
      <li>
        Das System wird von unserer Organisation hergestellt und eingesetzt.
      </li>
      <li>
        Wir sind eine amerikanische Organisation mit einem Standort in
        Deutschland.
      </li>
      <li>
        Wir nutzen das System weder für militärische Zwecke, noch sind wir Teil
        einer Behörde oder Forschungseinrichtung.
      </li>
      <li>
        Das System wird nicht für Dinge wie Social Scoring, Emotionserkennung
        oder Verhaltensmanipulation genutzt.
      </li>
      <li>
        Das System wird nicht in einem Hochrisikobereich eingesetzt bspw. bei
        der Strafverfolgung oder zum Grenzkontrollmanagement.
      </li>
    </ul>
    <p>
      Prüfen wir basierend auf diesen Informationen unser Assistenzsystem so
      bedeutet das, dass auch diese Anwendung mit hoher Wahrscheinlichkeit der
      niedrigsten Risikostufe zugeordnet wird. Trotz der Verarbeitung der Daten
      im Nicht-Eu-Ausland und dem Einsatzgebiet bei der Überwachung handelt es
      sich mit hoher Wahrscheinlichkeit um ein System, dass auf Nutzendenseite
      keine weiteren Pflichten mit sich bringt. Unsere Dachorganisation bzw. der
      Technologiekonzern unterliegen dabei trotz ihres Standortes in den USA den
      gleichen Transparenzpflichten wie in Beispiel 1, wenn sie ihr System
      innerhalb der EU einsetzen wollen.
    </p>
    <p>
      Die genaue Einschätzung in welche Risikostufe ein gegebenes KI-System
      fällt kann durchaus komplex sein und hängt von mehr Faktoren ab als wofür
      es inhaltlich genutzt wird bspw. ob ich als Hersteller und Nutzender
      auftrete. Wo ich das System einsetzen will? Ob ich Teil der EU bin etc.
    </p>
  </section>,
  <section>
    <h2>EU AI Act Compliance Checker</h2>
    <p>
      m sich einen Überblick über die verschiedenen Möglichkeiten zu verschaffen
      gibt es den EU Compliance Checker. Das Tool bietet die Möglichkeit
      verschiedene Varianten durchzuspielen, um herauszufinden welche Regelungen
      für das eigene System gelten. Wir empfehlen daher es einmal selbst
      auszuprobieren und die oben genannten Beispiele oder eigene Idee einfach
      mal auf
      https://artificialintelligenceact.eu/de/bewertung/eu-ai-act-compliance-checker/
      oder mit einem klick auf die unten befindene Einbindung auszuprobieren.
    </p>
    <h3>Componente EU AI Act Compliance Checker</h3>
    <p>
      Im nächsten Abschnitt gehen wir dann noch mal konkret auf die Auswirkungen
      der Risikostufen auf mögliche Entwicklungsprozesse ein.
    </p>
  </section>,
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
