import React, { useState } from "react";
import "./PinnedImage.css";

const PinnedImage = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2; // X offset from center
    const y = event.clientY - rect.top - rect.height / 2; // Y offset from center

    // Set rotation based on the mouse's distance from the center
    setStyle({
      transform: `perspective(500px) rotateX(${-y / 10}deg) rotateY(${
        x / 10
      }deg)`,
    });
  };

  const handleMouseLeave = () => {
    // Reset the effect when the mouse leaves
    setStyle({
      transform: `perspective(500px) rotateX(0deg) rotateY(0deg)`,
    });
  };

  return (
    <div
      className="pinned-image-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <img
        src="/signatureProjects/wolsey/p11.webp"
        alt="Pinned Effect"
      />
    </div>
  );
};

export default PinnedImage;
