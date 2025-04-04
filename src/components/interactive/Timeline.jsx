import React, { useState } from "react";
import "./Timeline.css";
import TimelineYear from "./TimelineYear";

const years = [2018, 2020, 2021, 2022, 2023, 2024];
const colors = [
  "var(--tb)",
  "var(--vb)",
  "var(--ti)",
  "var(--lf)",
  "var(--sm)",
  "var(--ev)",
];
const dateContent = [
  [
    {
      date: "April",
      text: "Die Idee eines einheitlichen Rechtsrahmens für KI in der EU wurde erstmals im Rahmen der Europäischen KIStrategie vorgestellt. Diese Strategie betonte die Notwendigkeit, die EU als führenden Akteur im Bereich der KI zu etablieren, und legte den Grundstein für weitere Maßnahmen.",
      pos: "0.4",
      icon: "DocumentIcon",
    },
  ],
  [
    {
      date: "Februar",
      text: "Die Europäische Kommission veröffentlichte das Weißbuch zur Künstlichen Intelligenz, das eine breite öffentliche Konsultation initiierte. Das Weißbuch skizzierte die Vision der EU für eine vertrauenswürdige und menschenzentrierte KI und schlug verschiedene Maßnahmen vor, um dieses Ziel zu erreichen. Es betonte die Notwendigkeit eines risikobasierten Ansatzes, bei dem KI-Systeme je nach ihrem Risiko für die Gesellschaft unterschiedlich reguliert werden.",
      pos: "0.3",
      icon: "DocumentIcon",
    },
  ],
  [
    {
      date: "21. April",
      text: "Nach der öffentlichen Konsultation und intensiven Diskussionen zwischen den Mitgliedstaaten, Experten und Interessengruppen legte die Europäische Kommission im April 2021 ihren Vorschlag für den EU AI Act vor. Dieser Vorschlag zielte darauf ab, ein einheitliches Regelwerk zu schaffen, das Innovation fördert, Vertrauen aufbaut und die Grundrechte schützt.",
      pos: "0.2",
      icon: "DocumentIcon",
    },
    {
      date: "29. November",
      text: "Die rotierende EU-Ratspräsidentschaft legte einen ersten Kompromisstext zum Entwurf des KI Gesetzes vor, der wichtige Änderungen in den Bereichen soziales Scoring, biometrische Erkennungssysteme und Hochrisikoanwendungen enthielt.",
      pos: "0.5",
      icon: "DocumentIcon",
    },
  ],
  [
    {
      date: "25. Januar",
      text: "Die federführenden Ausschüsse des Europäischen Parlaments hatten ihren ersten gemeinsamen Meinungsaustausch über den Vorschlag für ein KI-Gesetz.",
      pos: "0.3",
      icon: "InfoIcon",
    },
    {
      date: "6. Dezember",
      text: "Der Rat der EU verabschiedete seinen gemeinsamen Standpunkt zum AI-Gesetz.",
      pos: "0.6",
      icon: "SignIcon",
    },
  ],
  [
    {
      date: "9. Dezember",
      text: "Parlament und Rat erzielten eine vorläufige Einigung über das AI-Gesetz.",
      pos: "0.4",
      icon: "SignIcon",
    },
  ],
  [
    {
      date: "13. Februar",
      text: "Der Ausschuss für Binnenmarkt und bürgerliche Freiheiten stimmte mit 71:8 Stimmen (7 Enthaltungen) für die Annahme des Ergebnisses der Verhandlungen mit den Mitgliedstaaten.",
      pos: "0.15",
      icon: "SignIcon",
    },
    {
      date: "21. Februar",
      text: "Das Europäische Büro für künstliche Intelligenz wurde innerhalb der Kommission eingerichtet, um die Umsetzung des KI-Gesetzes zu unterstützen, insbesondere im Bereich der allgemeinen KI.",
      pos: "0.35",
      icon: "InfoIcon",
    },
    {
      date: "13. Mai",
      text: "Die 27 EU-Mitgliedstaaten billigten einstimmig die AI-Akte und bekräftigten damit die im Dezember erzielte politische Einigung.",
      pos: "0.65",
      icon: "SignIcon",
    },
  ],
];

/**
 * A component that renders a timeline with clickable years. Each year displays events related to the EU AI Act.
 * The user can click on a year to expand it and view more details about the events that took place during that year.
 *
 * @component
 * @returns {JSX.Element} The rendered timeline component.
 */
export default function Timeline() {
  const [activeYear, setActiveYear] = useState(null);

  /**
   * Handles the click event on a year. If the clicked year is already active, it collapses it, otherwise it expands it.
   *
   * @param {number} year - The year clicked by the user.
   */
  const handleClick = (year) => {
    setActiveYear(year === activeYear ? null : year);
  };

  return (
    <div className="container">
      {years.map((year, index) => {
        const isActive = year === activeYear;
        const isLeftNeighbor = activeYear && years[index + 1] === activeYear;
        const isRightNeighbor = activeYear && years[index - 1] === activeYear;

        /**
         * Determines the position and style of the year section based on whether it's active, a neighbor, or inactive.
         *
         * @returns {Object} The style object that defines the position and appearance of the year section.
         */
        const getPositionStyle = () => {
          if (isActive)
            return {
              left: "0%",
              right: year === 2024 ? "0%" : "16.67%",
              zIndex: 2,
            };
          if (!activeYear)
            return {
              right: "unset",
              left: `${index * 16.67}%`,
              width: "16.67%",
              zIndex: 1,
            };
          if (isLeftNeighbor) return { right: "83.33%", left: "0", zIndex: 2 };
          if (isRightNeighbor) return { left: "83.33%", right: "0", zIndex: 2 };

          const activeIndex = years.indexOf(activeYear);

          if (activeIndex < index && !isRightNeighbor)
            return { right: "0", left: "83.33%", zIndex: 1 };
          if (activeIndex > index && !isLeftNeighbor)
            return { right: "83.33%", left: "0", zIndex: 1 };

          return {
            right: "unset",
            left: `${index * 16.67}%`,
            width: "16.67%",
            zIndex: 0,
          };
        };

        /**
         * Gets the timeline object for the current year, including its color and associated events.
         *
         * @returns {Object} The timeline object containing the year, its color, and associated events.
         */
        const getTimelineObject = () => {
          const colorIndex = (index + 1) % colors.length;
          return {
            year: years[index],
            color: colors[colorIndex],
            dates: dateContent[index],
          };
        };

        const timelineYearProps = getTimelineObject();

        return (
          <div
            key={year}
            className={`year-section ${
              isActive
                ? "active"
                : isLeftNeighbor || isRightNeighbor
                ? "neighbor"
                : ""
            }`}
            onClick={() => handleClick(year)}
            style={{ ...getPositionStyle(), backgroundColor: colors[index] }}>
            <div className="year-content">
              <TimelineYear {...timelineYearProps} />{" "}
              {isActive && (
                <div className="expanded-content">
                  {isRightNeighbor && (
                    <div className="side-year select-none">
                      {years[index + 1]}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
