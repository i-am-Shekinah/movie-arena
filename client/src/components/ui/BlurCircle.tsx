import React from "react";

interface BlurCircleProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const BlurCircle: React.FC<BlurCircleProps> = ({
  top = "auto",
  left = "auto",
  bottom = "auto",
  right = "auto",
}) => {
  return (
    <div
      className="absolute -z-50 h-56 w-56 aspect-square rounded-full bg-primary/30 blur-3xl"
      style={{ top: top, left: left, right: right, bottom: bottom }}
    ></div>
  );
};

export default BlurCircle;
