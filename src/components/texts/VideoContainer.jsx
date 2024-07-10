import React from "react";

export const VideoContainer = ({ link, title }) => {
  return (
    <iframe
      src={link}
      title={title}
      width="100%"
      height="450px"
      className="rounded-xl"
      allowFullScreen
    ></iframe>
  );
};
