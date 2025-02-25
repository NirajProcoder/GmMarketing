// import React from 'react'import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper smlBtn "
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <BannerBox
            img={"/AdsBannerSlider/AdsBanner1.jpg"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={"/AdsBannerSlider/AdsBanner2.jpg"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={"/AdsBannerSlider/AdsBanner3.jpg"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={"/AdsBannerSlider/AdsBanner4.jpg"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={"/AdsBannerSlider/AdsBanner5.jpg"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={"/AdsBannerSlider/AdsBanner6.jpg"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
