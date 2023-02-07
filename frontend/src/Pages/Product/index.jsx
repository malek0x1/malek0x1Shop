import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Announcement from "../../Components/Announcement";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import "./style.scss";
import QuantityCounter from "../../Components/QuantityCounter";
import VariantsButtons from "../../Components/VariantsButtons";
const Product = () => {
  let { categoryId, productId } = useParams();
  console.log(categoryId, productId);
  const [res, setRes] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const fetchHandle = async () => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/api/product/${categoryId}/${productId}`
    )
      .then((res) => res.json())
      .then((r) => setRes(r))
      .catch((e) => console.log(`error ${e}`));
  };
  useEffect(() => {
    fetchHandle();
  }, [productId]);

  if (res.length) {
    var [{ name, price, id, image, description, variants }] = res;
  }

  const handleAddToCard = (e) => {
    const buttons = document.querySelectorAll(
      ".product__wrapper__info__variants__btns-btn-active"
    );
    const order = {
      Color: "",
      Sizes: "",
      quantity: quantity,
      id: id,
    };
    buttons.forEach((btn) => {
      Object.keys(order).forEach((key) => {
        if (key === btn.getAttribute("about")) {
          order[key] = btn.innerHTML;
        }
      });
    });
    console.log(order);
  };

  return (
    <div className="product">
      <Announcement message="Welcome To Our Store !" />
      <Header />
      <div className="product__wrapper container">
        <div className="product__wrapper__image">
          <img src={image} alt="" className="product__wrapper__image-img" />
        </div>
        <div className="product__wrapper__info">
          <p className="product__wrapper__info__brand">Nike</p>
          <h2 className="product__wrapper__info__name">{name}</h2>

          <div className="product__wrapper__info__variants">
            <p className="product__wrapper__info__variants-title">Price</p>
            <p className="product__wrapper__info__price">${price} USD</p>
          </div>
          <VariantsButtons
            title="Color"
            data={variants?.color || ["red", "green"]}
          />
          <VariantsButtons title="Sizes" data={variants?.sizes || ["S", "M"]} />
          <QuantityCounter setQuantity={setQuantity} />
          <div className="product__wrapper__info__variants__footerBtns">
            <Button
              className="product__wrapper__info__variants__footerBtns-btn"
              text="Add to cart"
              handleClick={handleAddToCard}
            />
            <Button
              className="product__wrapper__info__variants__footerBtns-btn"
              text="Buy it now"
            />
          </div>
          <div className="product__wrapper__info__variants">
            <p className="product__wrapper__info__variants-title">
              Description
            </p>
            <p className="product__wrapper__info__description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
