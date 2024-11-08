import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

function Slider() {
  return (
    <div className="w-full">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        preventClicks={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        style={{ width: "100%" }}
        slidesPerView={3}
        loop={true}
        modules={[EffectCoverflow, Navigation, Pagination]}
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} style={{ padding: "10px" }}>
            {/* Padding to make space for the thick border */}
            <div className="relative border-x-[8px] border-white rounded-lg overflow-hidden">
              {/* Thicker white border */}
              <div className="overlay absolute inset-0 bg-black opacity-50 transition-opacity"></div>
              <img
                className="w-full h-full object-cover"
                src="/homePage/slider/project.jpg"
                alt={`Slide ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        /* Hide overlay on the active (center) slide */
        .swiper-slide-active .overlay {
          opacity: 0 !important;
        }
        /* Optional: adjust border thickness on hover if needed */
        .swiper-slide:hover .border-4 {
          border-width: 6px;
        }
      `}</style>
    </div>
  );
}

export default Slider;
