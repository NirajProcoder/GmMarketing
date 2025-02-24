// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          navigation={false}
          modules={[Navigation]}
          className="mySwiper "
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="/Categories/categories1.png"
                  alt="Crockery"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Crockery</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="/Categories/categories2.png"
                  alt="Crockery"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Bone China</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="/Categories/categories3.png"
                  alt="Crockery"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Porcelain</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="/Categories/categories4.png"
                  alt="Crockery"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Melamine</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="/Categories/categories5.png"
                  alt="Crockery"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Banquet Ware</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="/Categories/categories6.png"
                  alt="Crockery"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Kitchen</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="/Categories/categories7.png"
                  alt="Crockery"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Bar Accessories</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
