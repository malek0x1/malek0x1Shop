import React from "react";
import Button from "../Button";
const VariantsButtons = ({ title, data }) => {
  const handleClick = (e) => {
    const buttons = document.querySelectorAll(
      ".product__wrapper__info__variants__btns-btn-active"
    );

    buttons.forEach((button) => {
      if (
        button.classList.contains(
          "product__wrapper__info__variants__btns-btn-active"
        )
      ) {
        if (button.getAttribute("about") === title) {
          button.classList.remove(
            "product__wrapper__info__variants__btns-btn-active"
          );
        }
      }
    });

    e.target.classList.add("product__wrapper__info__variants__btns-btn-active");
  };
  return (
    <div className="product__wrapper__info__variants">
      <p className="product__wrapper__info__variants-title">{title}</p>
      <div className="product__wrapper__info__variants__btns">
        {data.map((v) => (
          <Button
            text={v}
            about={title}
            handleClick={handleClick}
            className="product__wrapper__info__variants__btns-btn"
          />
        ))}
      </div>
    </div>
  );
};

export default VariantsButtons;
