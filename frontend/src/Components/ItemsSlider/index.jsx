import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/index";
import "swiper/css";
import "./style.scss";
import { useMediaQuery } from "react-responsive";
const ItemsSlider = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 700 });
  console.log(isMobile);
  return (
    <div className="itemsSlider container">
      <h1 className="itemsSlider__heading">{data.category}</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={isMobile ? 1.5 : 3.5}
        onSlideChange={() => console.log("")}
        onSwiper={(swiper) => console.log("")}
      >
        {data.children.map((item) => (
          <SwiperSlide>
            <Card img={item.image} price={`$${item.price}`} name={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemsSlider;
