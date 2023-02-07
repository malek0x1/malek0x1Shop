import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button/index";
import Card from "../Card/index";
import SkeletonLoader from "../SkeletonLoader/index";
import "swiper/css";
import "./style.scss";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
const ItemsSlider = ({ data, skeleton }) => {
  const isMobile = useMediaQuery({ maxWidth: 700 });
  return (
    <div className="itemsSlider container">
      <h1 className="itemsSlider__heading">{data.category}</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={isMobile ? 1.5 : 3.5}
        onSlideChange={() => console.log("")}
        onSwiper={(swiper) => console.log("")}
      >
        {!skeleton ? (
          data.children.map((item) => (
            <SwiperSlide>
              <Link to={`/product/${item.categoryId}/${item.id}`}>
                <Card
                  colors={item.variants.color}
                  img={item.image}
                  price={`$${item.price}`}
                  name={item.name}
                />
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <>
            {[...Array(8)].map((card) => (
              <SwiperSlide>
                <SkeletonLoader />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
      <div className="itemsSlider__btnWrapper">
        <Link to={`/collection/${data.id}`}>
          <Button className="itemsSlider__btnWrapper__btn" text="View All" />
        </Link>
      </div>
    </div>
  );
};

export default ItemsSlider;
