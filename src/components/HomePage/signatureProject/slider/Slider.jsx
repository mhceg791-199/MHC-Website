import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import useNavigateWithScroll from "../../../../Hooks/useNavigateWithScroll";

function Slider() {
  const navigateWithScroll = useNavigateWithScroll();
  const images = [
    {
      src: "/signatureProjects/arup-datta/p12.webp",
      sectionName: "walden",
      page: "/arup",
    },
    {
      src: "/signatureProjects/arup-datta/p32.webp",
      sectionName: "Callaghan",
      page: "/arup",
    },
    {
      src: "/signatureProjects/arup-datta/p42.webp",
      sectionName: "Lexus",
      page: "/arup",
    },
    {
      src: "/signatureProjects/arup-datta/p43.webp",
      sectionName: "Lexus",
      page: "/arup",
    },
    {
      src: "/signatureProjects/arup-datta/p13.webp",
      sectionName: "walden",
      page: "/arup",
    },
    {
      src: "/signatureProjects/wolsey/p11.webp",
      sectionName: "Aqsarniit",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/wolsey/p12.webp",
      sectionName: "Aqsarniit",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/wolsey/p14.webp",
      sectionName: "Aqsarniit",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/wolsey/p15.webp",
      sectionName: "Aqsarniit",
      page: "/wolsey",
    },

    {
      src: "/signatureProjects/wolsey/p43.webp",
      sectionName: "CKE",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/wolsey/p35.webp",

      sectionName: "CKE",
      page: "/wolsey",
    },

    {
      src: "/signatureProjects/wolsey/p41.webp",
      sectionName: "CKE",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/1.webp",
      sectionName: "CKE",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/2.webp",
      sectionName: "CKE",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/3.webp",
      sectionName: "CKE",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/4.webp",
      sectionName: "CKE",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/5.webp",
      sectionName: "CKE",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/6.webp",
      sectionName: "CKE",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/7.webp",
      sectionName: "CKE",
      page: "/wolsey",
    },
    {
      src: "/signatureProjects/8.webp",
      sectionName: "CKE",
      page: "/wolsey",
    },

  ];

  return (
    <div className="w-full">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        preventClicks={true}
        autoplay={{
          delay: 2000, // Set autoplay delay in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        style={{ width: "90%" }}
        slidesPerView={2}
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
              <div className="overlay absolute inset-0  bg-black opacity-50 transition-opacity"></div>
              <img
                className="w-full scallUpOnHover  h-96 object-cover "
                src={img.src}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
