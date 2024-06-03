// TimelineYear.jsx
import React, { useState } from "react";
import "./TimelineYear.css";

export default function TimelineYear({ year, color, dates, isActive }) {
  const [hovered, setHovered] = useState(null);

  const isSpecialYear = year === 2024;

  return (
    <div className="w-full h-full absolute left-0 right-0 flex overflow-hidden">
      <div className="min-w-[250px] max-w-[250px] flex items-end mr-[70px]">
        <div className="year font-bold text-lightText">
          {year}
        </div>
      </div>
      <div className="w-full h-full relative flex flex-col justify-evenly overflow-hidden">
        <div
          className="absolute top-50 left-5 w-full h-[25px] z-10"
          style={{
            translateY: "-50%",
            backgroundColor: color,
          }}
        ></div>
        {dates.map((datum, index) => (
          <div
            key={index}
            className={`date-block ${isSpecialYear ? 'text-lightText' : 'text-darkText'}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "absolute",
              top: index % 2 === 0 ? "10%" : "50%",
              bottom: index % 2 !== 0 ? "10%" : "50%",
              right: `calc(100% - ${datum.pos * 100 + "%"})`,
              width: "150px",
              display: "flex",
              justifyContent: "end",
              alignItems: index % 2 !== 0 ? "end" : "start",
              paddingRight: "10px",
              fontSize: 'calc(10px + 1vmin)',
              fontWeight: "bold",
              borderRight: `3px solid ${isSpecialYear ? '#f0f0f0' : '#21202b'}`,
            }}
          >
            {datum.date}
          </div>
        ))}
        {dates.map((datum, index) => (
          <div
            key={index}
            className="text-container"
            style={{
              position: "absolute",
              top: index % 2 === 0 ? "10%" : "50%",
              left: datum.pos * 100 + "%",
              right: 0,
              padding: index % 2 === 0 ? "0px 10px 15px 10px" : "15px 10px 0px 10px",
              display: "flex",
              justifyContent: "start",
              alignItems: index % 2 === 0 ? "start" : "end",
              height: "40%",
              maxWidth: "400px",
              overflow: "hidden",
            }}
          >
            <div
              className={`hidden-text text-sm ${isSpecialYear ? 'text-lightText' : 'text-darkText'}`}
              style={{
                transition: "right 0.3s ease",
                right: hovered === index ? "0" : "110%",
                position: 'relative',
              }}
            >
              {datum.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
