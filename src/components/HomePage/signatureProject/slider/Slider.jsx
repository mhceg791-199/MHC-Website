import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

function Slider() {
  const images = [
    "/signatureProjects/arup-datta/p12.webp",
    "/signatureProjects/arup-datta/p32.webp",
    "/signatureProjects/arup-datta/p42.webp",
    "/signatureProjects/arup-datta/p43.webp",
    "/signatureProjects/arup-datta/p13.webp",
    "/signatureProjects/arup-datta/p12.webp",
    "/signatureProjects/arup-datta/p32.webp",
    "/signatureProjects/arup-datta/p42.webp",
    "/signatureProjects/arup-datta/p43.webp",
    "/signatureProjects/arup-datta/p13.webp",
  ];

  return (
    <div className="w-full">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        preventClicks={true}
        autoplay={{
          delay: 1500, // Set autoplay delay in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
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
        breakpoints={{
          0: {
            slidesPerView: 1, // for small screens (e.g., 640px and up)
          },
          768: {
            slidesPerView: 1, // for medium screens (e.g., 768px and up)
          },
          992: {
            slidesPerView: 3, // for larger screens (e.g., 1024px and up)
          },
          1024: {
            slidesPerView: 3, // for larger screens (e.g., 1024px and up)
          },
        }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} style={{ padding: "10px" }}>
            {/* Padding to make space for the thick border */}
            <div className="relative border-x-[8px] border-white rounded-lg overflow-hidden">
              {/* Thicker white border */}
              <div className="overlay absolute inset-0 bg-black opacity-50 transition-opacity"></div>
              <img
                className="w-full h-full object-cover"
                src={img}
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
