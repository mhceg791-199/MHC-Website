import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation"; // Import Swiper navigation styles
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "./timeLine.css";
function TimeLine() {
  const timeLineDetails = [
    { data: 1988, name: "ARUP" },
    { data: 2006, name: "WOLSEY" },
    { data: 2023, name: "MHCEG" },
    { data: 1988, name: "ARUP" },
    { data: 2006, name: "WOLSEY" },
    { data: 2023, name: "MHCEG" },
    { data: 1988, name: "ARUP" },
    { data: 2006, name: "WOLSEY" },
    { data: 2023, name: "MHCEG" },
    { data: 1988, name: "ARUP" },
    { data: 2006, name: "WOLSEY" },
    { data: 2023, name: "MHCEG" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="relative md:w-[90%] w-full !py-50 m-auto h-full flex justify-center  items-center">
        <div className="swiper-button-prev-custom">
          <i className="fa-solid fa-chevron-left text-white bg-mainGold absolute -left-5 z-20 top-[50%] translate-y-[-50%] py-4 px-3 text-xl cursor-pointer"></i>
        </div>
        <div className="swiper-button-next-custom">
          <i className="fa-solid fa-chevron-right text-white bg-mainGold absolute -right-5 z-20 top-[50%] translate-y-[-50%] py-4 px-3 text-xl cursor-pointer"></i>
        </div>
        <Swiper
          className="  w-full h-full relative flex  justify-center items-center "
          spaceBetween={0}
          slidesPerView={7}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1500, // Set autoplay delay in milliseconds (3 seconds)
            disableOnInteraction: false, // Continue autoplay even after user interaction
          }}
          breakpoints={{
            0: {
              slidesPerView: 1, // for small screens (e.g., 640px and up)
            },
            768: {
              slidesPerView: 1, // for medium screens (e.g., 768px and up)
            },
            992: {
              slidesPerView: 7, // for larger screens (e.g., 1024px and up)
            },
            1024: {
              slidesPerView: 7, // for larger screens (e.g., 1024px and up)
            },
          }}
          // loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="w-full absolute h-1 top-[50%] translate-y-[-50%]	 bg-mainGold -z-10"></div>

          {timeLineDetails.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full pb-20 md:pb-0 flex flex-col items-center   justify-center">
                <div
                  className={`w-10 sliderItem h-10 border-4            ${
                    activeIndex === index ? "active" : ""
                  }
                  ${
                    activeIndex === index - 1 ||
                    (activeIndex === 0 && index === timeLineDetails.length - 1)
                      ? "besideActive"
                      : ""
                  }
                  ${
                    activeIndex === index + 1 ||
                    (activeIndex === timeLineDetails.length - 1 && index === 0)
                      ? "besideActive"
                      : ""
                  } border-mainGold rounded-full   text-white bg-lightGray flex justify-center items-center font-semibold text-large`}
                >
                  <p className="opacity-0">{item.data}</p>
                </div>
                <p className="mt-2 font-semibold opacity-0 absolute top-[75%] text-2xl">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default TimeLine;
