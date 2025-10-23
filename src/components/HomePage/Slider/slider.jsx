// import Marquee from "react-fast-marquee";
// import SectionHeader from "../../shared/sectionHeader/sectionHeader";
// import homeSlider from "../../../data/homeSlider";

// function SignatureSlider() {
  

//   return (
//     <section>
//       <div className="heading-3 font-bold mb-6 mt-8 leading-tight md:px-12 px-5">
//         <SectionHeader firstWord="The MHC" secondWord="Way" />
//       </div>
//       <Marquee speed={50} pauseOnHover gradient={false}>
//         {homeSlider.map((h, i) => (
//           <div
//             key={i}
//             className="relative group w-80 h-80 m-4 rounded-2xl overflow-hidden shadow-lg bg-black"
//           >
//             <img
//               src={h.logo}
//               alt={h.title}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />

//             <div className="absolute bottom-0 left-0 w-full bg-black/20 text-white text-center py-2 backdrop-blur-sm">
//               <h4 className="font-semibold text-lg line-clamp-1">{h.title}</h4>
//             </div>

//             {/* overlay hover */}
//             <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-5 text-white">
//               <h4 className="font-semibold text-xl mb-2 text-mainGold">{h.title}</h4>
//               <p className="text-sm mb-3 paragraph">{h.text}</p>
              
//             </div>
//           </div>
//         ))}
//       </Marquee>
//     </section>
//   );
// }

// export default SignatureSlider;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import homeSlider from "../../../data/homeSlider";

function SignatureSlider() {
  return (
    <section className="py-10 overflow-hidden">
      <div className="heading-3 font-bold mb-6 leading-tight md:px-12 px-5">
        <SectionHeader firstWord="The MHC" secondWord="Way" />
      </div>

      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        freeMode={true}
        speed={6000} // سرعة التحرك
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false, // لو عايز الاتجاه العكسي خليه true
        }}
        allowTouchMove={false}
        className="flex items-center"
      >
        {homeSlider.map((h, i) => (
          <SwiperSlide
            key={i}
            className="!w-80 !h-80 rounded-2xl overflow-hidden shadow-lg bg-black group relative"
          >
            <img
              src={h.logo}
              alt={h.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black/30 text-white text-center py-2 backdrop-blur-sm">
              <h4 className="font-semibold text-lg line-clamp-1">{h.title}</h4>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-5 text-white">
              <h4 className="font-semibold text-xl mb-2 text-mainGold">
                {h.title}
              </h4>
              <p className="text-sm mb-3 paragraph">{h.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SignatureSlider;
