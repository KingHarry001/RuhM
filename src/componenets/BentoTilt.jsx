// BentoTilt.jsx
import React, { useRef, useState, useEffect } from "react";

const BentoTilt = ({ children, onClick, currentIndex, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  // Reset tilt transform when index changes
  useEffect(() => {
    setTransformStyle("");
  }, [currentIndex]);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 25;
    const tiltY = (relativeX - 0.5) * -24;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`border-green-600 border-[2px] ${className}`}
      style={{ transform: transformStyle, cursor: 'pointer' }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;