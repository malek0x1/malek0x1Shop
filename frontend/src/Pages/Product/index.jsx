import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Announcement from "../../Components/Announcement";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import "./style.scss";
import QuantityCounter from "../../Components/QuantityCounter";
import VariantsButtons from "../../Components/VariantsButtons";
const Product = () => {
  let { categoryId, productId } = useParams();
  const [res, setRes] = useState(false);
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
  }, []);

  if (res.length) {
    var [{ name, price, id, image, description }] = res;
  }

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
          <VariantsButtons title="Color" data={["red", "green", "white"]} />
          <VariantsButtons title="Sizes" data={["S", "M", "L", "XL"]} />

          <QuantityCounter />
          <div className="product__wrapper__info__variants__footerBtns">
            <Button
              className="product__wrapper__info__variants__footerBtns-btn"
              text="Add to cart"
            />
            <Button
              className="product__wrapper__info__variants__footerBtns-btn"
              text="Buy it now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
