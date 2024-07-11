import React, { useState, useEffect, useRef } from "react";

export const VideoContainer = ({ link, title }) => {
  const [videoHeight, setVideoHeight] = useState(500);
  const videoRef = useRef(0);

  useEffect(() => {
    const calcHeight = () => {
      if (videoRef.current) {
        const width = videoRef.current.offsetWidth;
        const height = (width / 16) * 9;
        setVideoHeight(height);
      }
    };
    calcHeight();
    window.addEventListener("resize", calcHeight);
    return () => {
      window.removeEventListener("resize", calcHeight);
    };
  }, []);

  return (
    <iframe
      src={link}
      title={title}
      ref={videoRef}
      width="100%"
      height={videoHeight}
      className="rounded-xl"
      allowFullScreen></iframe>
  );
};
