"use client";

import React from "react";
import { useState, useEffect } from "react";

export default function MouseCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [blendColor, setBlendColor] = useState('bg-gray-700'); // Default blend color

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = "white";

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${isHovering ? 1.5 : 1})`;
        circle.style.mixBlendMode = isHovering ? 'screen' : 'normal';
        circle.style.backgroundColor = isHovering ? blendColor : colors[index % colors.length];

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.2;
        y += (nextCircle.y - y) * 0.2;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      // Cleanup code if needed
    };
  }, [isHovering, blendColor]); // Re-run effect when isHovering or blendColor changes

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleBlendColorChange = (color) => {
    setBlendColor(color);
  };

  return (
    <>
      <style jsx>{`
        .circle {
          height: 24px;
          width: 24px;
          border-radius: 24px;
          background-color: black;
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 99999999;
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
      <div
        className="circle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="circle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="circle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="circle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="circle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="circle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="circle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="circle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="circle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
    </>
  );
}
