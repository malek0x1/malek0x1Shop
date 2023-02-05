import React from "react";
import "./style.scss";
import Button from "../Button";

const FeatureProduct = ({ image, title, paragraph, btnText }) => {
  return (
    <div className="featureProduct container">
      <div className="featureProduct__image">
        <img src={image} className="featureProduct__image-img" alt="" />
      </div>
      <div className="featureProduct__right">
        <h1 className="featureProduct__right__title">{title}</h1>
        <div className="featureProduct__right__paragraph">{paragraph}</div>
        <Button className="featureProduct__right__btn" text={btnText} />
      </div>
    </div>
  );
};

export default FeatureProduct;
