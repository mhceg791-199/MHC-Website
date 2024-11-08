import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
function TimeLine() {
  return (
    <>
      <Swiper
        className="bg-black   flex justify-center items-center"
        spaceBetween={0}
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="bg-blue-gray-400  ">
          <div className="w-10 h-10 border-4 border-mainGold rounded-full"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-10 h-10 border-4 border-mainGold rounded-full"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-16 h-16 border-4 border-mainGold rounded-full"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-28 h-28 border-4  border-mainGold rounded-full bg-mainGold text-white flex justify-center items-center font-semibold text-large">
            <p>1988</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-16 h-16 border-4 border-mainGold rounded-full"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-10 h-10 border-4 border-mainGold rounded-full"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-10 h-10 border-4 border-mainGold rounded-full"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TimeLine;
