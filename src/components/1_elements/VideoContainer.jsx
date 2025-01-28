import React, { useState, useEffect, useRef } from "react";

/**
 * A responsive video container component that adjusts the video height
 * based on its width, maintaining a 16:9 aspect ratio.
 *
 * @component
 * @param {Object} props - The props for the VideoContainer component.
 * @param {string} props.link - The URL of the video to be embedded in the iframe.
 * @param {string} props.title - The title of the video, used for the iframe's title attribute.
 *
 * @returns {JSX.Element} The rendered iframe element for embedding the video.
 */
export const VideoContainer = ({ link, title }) => {
  const [videoHeight, setVideoHeight] = useState(500);
  const videoRef = useRef(0);

  useEffect(() => {
    /**
     * Calculates and updates the video height to maintain a 16:9 aspect ratio
     * based on the video's current width.
     */
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
