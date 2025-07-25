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
