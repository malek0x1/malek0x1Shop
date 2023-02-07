import React from "react";
import "./style.scss";
const Swatch = ({ colors }) => {
  return (
    <div className="swatch">
      {colors.map((color) => (
        <div className="swatch__item" style={{ backgroundColor: color }}></div>
      ))}
    </div>
  );
};

export default Swatch;
