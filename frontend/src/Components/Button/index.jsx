import React from "react";
import "./style.scss";
const Button = ({ text, className, handleClick, about }) => {
  return (
    <button
      onClick={handleClick}
      about={about}
      className={`button ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
