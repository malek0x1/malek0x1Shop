import React from "react";
import Button from "../Button";
import "./style.scss";
const BrandOverview = ({ title, paragraph, btnText }) => {
  return (
    <div className="brandOverview">
      <h1 className="brandOverview__heading">{title}</h1>
      <p className="brandOverview__paragraph">{paragraph}</p>
      <Button text={btnText} className="brandOverview__btn" />
    </div>
  );
};

export default BrandOverview;
