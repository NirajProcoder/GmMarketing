import React from "react";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import HomeCatSlider from "../../components/HomeCartSlider";
import HomeSlider from "../../components/HomeSlider";
import { LiaShippingFastSolid } from "react-icons/lia";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "../../components/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {/* Home Slider Section */}
      <HomeSlider />
      {/* Home Category Section */}
      <HomeCatSlider />

      {/* Popular Products Section */}
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of this Months.
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Crockery" />
                <Tab label="Bone China" />
                <Tab label="Porcelain" />
                <Tab label="Melamine" />
                <Tab label="Banquet Ware" />
                <Tab label="Kitchen" />
                <Tab label="Bar Equipment" />
              </Tabs>
            </div>
          </div>

          {/* Products Slider */}
          <ProductsSlider items={6} />
        </div>
      </section>

      {/* Free Shipping Section */}
      <section className="py-4 pt-2 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500] ">
                Free Delivery Now On Your First Order And Over ₹4999/-
              </p>
            </div>
            <p className="font-bold text-[20px]"> Only ₹4999/- </p>
          </div>

          {/* Ads Banner Slider */}
          <AdsBannerSlider items={4} />
        </div>
      </section>

      {/* Latest Products Section */}
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider items={6} />
          {/* Ads Banner Slider 2 */}
          <AdsBannerSlider items={3} />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Feature Products</h2>
          <ProductsSlider items={6} />
          {/* Ads Banner Slider 4 */}
          <AdsBannerSlider items={3} />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-5 pb-8 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSection "
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
