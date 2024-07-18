import React from "react";

export function GraphicContainer({ type, src, altText }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {type === "image" && <img src={src} alt={altText} />}

      {type === "video" && <video src={src} type="video/mp4"></video>}
    </div>
  );
}
