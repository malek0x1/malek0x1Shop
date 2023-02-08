import React from "react";

const SkeletonLoader = () => (
  <svg
    style={{ maxWidth: "250px", backgroundColor: "#eee" }}
    viewBox="0 0 350 600"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0" y="0" width="10" height="600" fill="#f2f2f2">
      <animate
        attributeName="width"
        values="0;350;0"
        keyTimes="0;0.5;1"
        dur="1s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);

export default SkeletonLoader;
