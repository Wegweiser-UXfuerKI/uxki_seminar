import React from "react";

export const VideoContainer = ({ link, title }) => {
  return <iframe src={link} title={title} allowFullScreen></iframe>;
};
