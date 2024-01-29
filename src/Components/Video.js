import React from "react";

const Video = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <video
        src="/videoOne.mp4" // Reference the video directly from the public folder
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "auto" }}
      ></video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          cursor: "pointer",
        }}
      >
        {/* Your play button icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="#fff"
        >
          <path d="M64 32L0 64V0" fill="#fff" />
        </svg>
      </div>
    </div>
  );
};

export default Video;
