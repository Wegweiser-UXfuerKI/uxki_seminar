import React from "react";
import BasicQuiz from "../interactive//Quiz/BasicQuiz";
// KI-bezogene UX
import autonomieData from "../SimpleQuizContent/ki-bezogene-ux/autonomie.json";
import situationsbewusstseinData from "../SimpleQuizContent/ki-bezogene-ux/situationsbewusstsein.json";
import mentaleBelastungData from "../SimpleQuizContent/ki-bezogene-ux/mentale-belastung.json";
import vertrauenswuerdigkeitData from "../SimpleQuizContent/ki-bezogene-ux/vertrauenswuerdigkeit.json";
import diagnostizitaetData from "../SimpleQuizContent/ki-bezogene-ux/diagnostizitaet.json";
// AI Act
import einleitungData from "../SimpleQuizContent/ai-act/einleitung.json";
import risikostufenBeispieleData from "../SimpleQuizContent/ai-act/risikostufen-beispiele.json";
import risikostufenAuswirkungenData from "../SimpleQuizContent/ai-act/risikostufen-auswirkungen.json";
import hlegData from "../SimpleQuizContent/ai-act/hleg.json";

import testData from "../SimpleQuizContent/test.json";
import { TabSwitchView } from "../2_molecule/TabSwitchView";
import { Table } from "../2_molecule/Table";
import { CarouselContainer } from "../3_organism/CarouselContainer";

const Slide = ({ number, color }) => (
  <div
    style={{
      height: "300px",
      backgroundColor: color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "3rem",
      color: "white",
      borderRadius: "8px",
    }}
  >
    Slide {number}
  </div>
);

const DevTestPage = () => {
  const tableData = [
    [<b>Name</b>, <b>Rolle</b>],
    ["Maria Schmidt", <b>Entwickler:in</b>],
    ["Max Mustermann", "Designer"],
    ["Peter Bäcker", "Projektmanager"],
  ];

  const columnWidths = ["25%", "50%", "25%"];

  return (
    <div className="w-full h-full">
      <div className="max-w-[960px] mx-auto mt-8">
        <CarouselContainer>
          <div
            title="Modellbasierte (intrinsische) Erklärbarkeit"
            className="rounded-xl p-[var(--scale2)] h-full shadow no-hover"
          >
            <p>Das Modell selbst ist bereits transparent und verständlich.</p>
            <p>Test1234</p>
            <ul>
              <li>
                <b>Entscheidungsbäume</b> - Entscheidungen folgen klaren Regeln
              </li>
              <li>
                <b>Lineare Modelle</b> - Einfluss jedes Faktors ist direkt
                absehbar
              </li>
              <li>
                <b>Regel- oder logikbasierte Systeme</b> - nachvollziehbare
                IF-THEN-Strukturen
              </li>
            </ul>
          </div>
          <div
            title="Post-hoc-Erklärungen"
            className="rounded-xl p-[var(--scale2)] h-full shadow no-hover"
          >
            <p>
              Hier wird das Verhalten eines komplexen, intransparenten Modells
              nachträglich analysiert. Häufige Ansätze sind:
            </p>
            <ul>
              <li>
                <b> Feature-Attribution:</b> Wie wichtig war ein bestimmtes
                Eingabefeature für diese Entscheidung?
                <ul>
                  <li>
                    <b>SHAP (SHapley Additive exPlanations)</b>
                  </li>
                  <li>
                    <b>
                      LIME (Local Interpretable Model-Agnostic Explanations)
                    </b>
                  </li>
                </ul>
              </li>
              <li>
                <b>Kontrastive Erklärung</b>: Warum wurde A statt B
                vorhergesagt?
              </li>
              <li>
                <b>Gegenfaktische Erklärung</b>: Was müsste sich an den
                Eingabedaten ändern, damit B statt A passiert?
              </li>
              <li>
                <b>Symbolisch vs. visuell</b>: Textlich formuliert vs. visuelle
                Hilfsmittel wie Diagramme, Heatmaps, Salience Maps
              </li>
            </ul>
          </div>
        </CarouselContainer>
      </div>
      <BasicQuiz quizData={testData} />
      <h1 className="w-full text-center">KI-bezogene UX</h1>
      <h2 className="w-full text-center">Wahrgenommene Autonomie</h2>
      <BasicQuiz quizData={autonomieData} />

      <Table data={tableData} headerStyle={true} />

      <TabSwitchView>
        <div title="Tab Links ye ye">
          <BasicQuiz quizData={testData} />
        </div>
        <div title="Tab rechts le le le">
          <BasicQuiz quizData={autonomieData} />
        </div>
      </TabSwitchView>
      {/* 
      <h2 className="w-full text-center">
        Wahrgenommenes Situationsbewusstsein
      </h2>
      <BasicQuiz quizData={situationsbewusstseinData} />
      <h2 className="w-full text-center">Wahrgenommene Mentale Belastung</h2>
      <BasicQuiz quizData={mentaleBelastungData} shuffleQuestions />
      <h2 className="w-full text-center">Wahrgenommene Vertrauenswürdigkeit</h2>
      <BasicQuiz quizData={vertrauenswuerdigkeitData} />
      <h2 className="w-full text-center">Wahrgenommene Diagnostizität</h2>
      <BasicQuiz quizData={diagnostizitaetData} />
      <h1 className="w-full text-center">EU AI-Act</h1>
      <h2 className="w-full text-center">Einleitung</h2>
      <BasicQuiz quizData={einleitungData} />
      <h2 className="w-full text-center">Risikostufen - Anwendungsbeispiele</h2>
      <BasicQuiz quizData={risikostufenBeispieleData} />
      <h2 className="w-full text-center">Risikostufen - Auswirkungen</h2>
      <BasicQuiz quizData={risikostufenAuswirkungenData} />
      <h2 className="w-full text-center">HLEG</h2>
      <BasicQuiz quizData={hlegData} /> */}
    </div>
  );
};

export default DevTestPage;
