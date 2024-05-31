import React, { FC } from "react";

type VideoPlayerProps = {
  url: string;
};
export const VideoPlayer: FC<VideoPlayerProps> = ({ url }) => {
  return (
    <video controls style={{ borderRadius: "24px" }}>
      <source src={url} type="video/mp4" />
    </video>
  );
};
