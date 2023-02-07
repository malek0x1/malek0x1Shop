import React from "react";
import Swatch from "../Swatch";
import "./style.scss";
const Card = ({ img, name, price, colors }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt="" className="card__image-img" />
      </div>
      <div className="card__name">{name}</div>
      {price && <div className="card__price">{price}</div>}
      {colors && <Swatch colors={colors} />}
    </div>
  );
};

export default Card;
