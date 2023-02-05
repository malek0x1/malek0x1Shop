import React from "react";
import Button from "../Button";
import "./style.scss";
const Hero = ({ image }) => {
  return (
    <div className="hero">
      <h1 className="hero__heading"> Elevated Urban Apparel </h1>
      <Button text="Shop All" className="hero__button" />
    </div>
  );
};

export default Hero;
