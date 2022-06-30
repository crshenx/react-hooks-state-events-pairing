import React from "react";

function VideoHeader({ video, title, views, createdAt }) {
  return (
    <div>
      <iframe
        src={video}
        width="919"
        height="525"
        frameBorder="0"
        allowFullScreen
      />
      <h2>{title}</h2>
      <h3>
        {views} views | {createdAt}
      </h3>
    </div>
  );
}

export default VideoHeader;
