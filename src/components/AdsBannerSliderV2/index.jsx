// import React from 'react'import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import BannerBoxV2 from "../BannerBoxV2";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        loop={true}
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
          <BannerBoxV2
            info="left"
            image={"Banner/BannerBoxV2/bannerboxv21.png"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={"Banner/BannerBoxV2/bannerboxv21.png"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={"Banner/BannerBoxV2/bannerboxv21.png"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={"Banner/BannerBoxV2/bannerboxv21.png"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={"Banner/BannerBoxV2/bannerboxv21.png"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={"Banner/BannerBoxV2/bannerboxv21.png"}
            alt="banner"
            link="/"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
