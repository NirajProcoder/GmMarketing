// import React from 'react'
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
    setSlideIndex(index);
  };

  return (
    <> 
      <div className="flex gap-3">
        {/* Zoom Product Slider Small */}
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSml}
            direction="vertical"
            slidesPerView={5}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`"item rounded-md overflow-hidden cursor-pointer group" ${
                  slideIndex === 0 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`"item rounded-md overflow-hidden cursor-pointer group" ${
                  slideIndex === 1 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`"item rounded-md overflow-hidden cursor-pointer group" ${
                  slideIndex === 2 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`"item rounded-md overflow-hidden cursor-pointer group" ${
                  slideIndex === 3 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`"item rounded-md overflow-hidden cursor-pointer group" ${
                  slideIndex === 4 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(4)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`"item rounded-md overflow-hidden cursor-pointer group" ${
                  slideIndex === 5 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(5)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>

            </SwiperSlide>
          </Swiper>
        </div>
        {/* Zoom Product Slider Big & Main */}
        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg"
                className="w-full transition-all group-hover:scale-105"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                className="w-full transition-all group-hover:scale-105"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
