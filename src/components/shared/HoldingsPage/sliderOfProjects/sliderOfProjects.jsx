// import React, { useState } from "react";
// import "./sliderOfProjects.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import {
//   EffectCoverflow,
//   Navigation,
//   Pagination,
//   Autoplay,
// } from "swiper/modules";
// import useNavigateWithScroll from "../../../../Hooks/useNavigateWithScroll";
// const SliderOfProjects = () => {
//   const [style, setStyle] = useState({});

//   const handleMouseMove = (event) => {
//     const rect = event.currentTarget.getBoundingClientRect();
//     const x = event.clientX - rect.left - rect.width / 2; // X offset from center
//     const y = event.clientY - rect.top - rect.height / 2; // Y offset from center

//     // Set rotation based on the mouse's distance from the center
//     setStyle({
//       transform: `perspective(500px) rotateX(${-y / 10}deg) rotateY(${
//         x / 10
//       }deg)`,
//     });
//   };

//   const handleMouseLeave = () => {
//     // Reset the effect when the mouse leaves
//     setStyle({
//       transform: `perspective(500px) rotateX(0deg) rotateY(0deg)`,
//     });
//   };
//   const navigateWithScroll = useNavigateWithScroll();
//   const images = [
//     {
//       src: "/signatureProjects/arup-datta/p12.webp",
//       sectionName: "walden",
//       page: "/arup",
//     },
//     {
//       src: "/signatureProjects/arup-datta/p32.webp",
//       sectionName: "Callaghan",
//       page: "/arup",
//     },
//     {
//       src: "/signatureProjects/arup-datta/p42.webp",
//       sectionName: "Lexus",
//       page: "/arup",
//     },
//     {
//       src: "/signatureProjects/arup-datta/p43.webp",
//       sectionName: "Lexus",
//       page: "/arup",
//     },
//     {
//       src: "/signatureProjects/arup-datta/p13.webp",
//       sectionName: "walden",
//       page: "/arup",
//     },
//     {
//       src: "/signatureProjects/arup-datta/p12.webp",
//       sectionName: "walden",
//       page: "/arup",
//     },
//     {
//       src: "/signatureProjects/arup-datta/p32.webp",
//       sectionName: "Callaghan",
//       page: "/arup",
//     },
//     {
//       src: "/signatureProjects/arup-datta/p42.webp",
//       sectionName: "Lexus",
//       page: "/arup",
//     },
//     {
//       src: "/signatureProjects/arup-datta/p43.webp",
//       sectionName: "Lexus",
//       page: "/arup",
//     },
//     {
//       src: "/signatureProjects/wolsey/p11.webp",
//       sectionName: "Aqsarniit",
//       page: "/wolsey",
//     },
//     {
//       src: "/signatureProjects/wolsey/p12.webp",
//       sectionName: "Aqsarniit",
//       page: "/wolsey",
//     },
//     {
//       src: "/signatureProjects/wolsey/p14.webp",
//       sectionName: "Aqsarniit",
//       page: "/wolsey",
//     },
//     {
//       src: "/signatureProjects/wolsey/p15.webp",
//       sectionName: "Aqsarniit",
//       page: "/wolsey",
//     },

//     {
//       src: "/signatureProjects/wolsey/p22.webp",
//       sectionName: "CKE",
//       page: "/wolsey",
//     },
//     {
//       src: "/signatureProjects/wolsey/p29.webp",

//       sectionName: "CKE",
//       page: "/wolsey",
//     },
//     {
//       src: "/signatureProjects/wolsey/p28.webp",
//       sectionName: "CKE",
//       page: "/wolsey",
//     },

//     {
//       src: "/signatureProjects/wolsey/p26.webp",
//       sectionName: "CKE",
//       page: "/wolsey",
//     },
//   ];

//   return (
//     <div className="w-full">
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         preventClicks={true}
//         autoplay={{
//           delay: 2500, // Set autoplay delay in milliseconds (3 seconds)
//           disableOnInteraction: false, // Continue autoplay even after user interaction
//         }}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 80,
//           depth: 500,
//           modifier: 1,
//           slideShadows: false,
//         }}
//         style={{ width: "80%" }}
//         slidesPerView={2}
//         loop={true}
//         breakpoints={{
//           0: {
//             slidesPerView: 1, // for small screens (e.g., 640px and up)
//           },
//           768: {
//             slidesPerView: 1, // for medium screens (e.g., 768px and up)
//           },
//           992: {
//             slidesPerView: 3, // for larger screens (e.g., 1024px and up)
//           },
//           1024: {
//             slidesPerView: 3, // for larger screens (e.g., 1024px and up)
//           },
//         }}
//         modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index} style={{ padding: "10px" }}>
//             {/* Padding to make space for the thick border */}
//             <div
//               onClick={() => {
//                 navigateWithScroll(img.page, img.sectionName);
//               }}
//               className="relative border-x-[8px] border-white rounded-lg overflow-hidden"
//             >
//               {/* Thicker white border */}
//               <div className="overlay absolute inset-0  bg-black opacity-50 transition-opacity"></div>
//               <img
//                 className="w-full signatureProjectImg object-cover "
//                 src={img.src}
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SliderOfProjects;
