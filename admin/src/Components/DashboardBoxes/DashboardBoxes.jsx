import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { AiTwotoneGift, AiTwotonePieChart } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { BsBank2 } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";

const DashboardBoxes = () => {
  return (
    <>
      {/* <!-- Dashboard Boxes --> */}
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        {/* New Orders */}
        <SwiperSlide>
          <div className="box bg-white p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <AiTwotoneGift className="text-[40px] text-[#3872fa]" />
            <div className="info w-[70%] ">
              <h3>New Orders</h3>
              <b>1,390</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#3872fa]" />
          </div>
        </SwiperSlide>

        {/* Sales Summary */}
        <SwiperSlide>
          <div className="box bg-white p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <AiTwotonePieChart className="text-[50px] text-[#10b981]" />
            <div className="info w-[70%] ">
              <h3>Sales</h3>
              <b>₹57,899/- </b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#10b981]" />
          </div>
        </SwiperSlide>

        {/* Revenue Summary */}
        <SwiperSlide>
          <div className="box bg-white p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <BsBank2 className="text-[40px] text-[#7928ca]" />
            <div className="info w-[70%] ">
              <h3>Revenue</h3>
              <b>₹12,390/- </b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#7928ca]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box bg-white p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <RiProductHuntLine className="text-[40px] text-[#312be1d8]" />
            <div className="info w-[70%] ">
              <h3>Total Products</h3>
              <b>1,390</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#312be1d8]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashboardBoxes;
