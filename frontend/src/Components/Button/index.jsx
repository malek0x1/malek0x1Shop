import React from "react";
import "./style.scss";
const Button = ({ text, className }) => {
  return <button className={`button ${className}`}>{text}</button>;
};

export default Button;
