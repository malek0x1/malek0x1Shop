import React from "react";
import "./style.scss";
const Card = ({ img, name, price }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt="" className="card__image-img" />
      </div>
      <div className="card__name">{name}</div>
      {price && <div className="card__price">{price}</div>}
    </div>
  );
};

export default Card;
