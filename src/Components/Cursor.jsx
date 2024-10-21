import React from "react";

const CursorPointer = ({ x, y }) => {
  return (
    <div
      className="absolute bg-white rounded-full mix-blend-difference w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
};

export default CursorPointer;
