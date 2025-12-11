// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Mousewheel,
//   Pagination,
//   EffectFade,
//   Autoplay
// } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";

// import s1 from "../../../assets/homePage/slider/s1.webp";
// import s2 from "../../../assets/homePage/slider/s2.webp";
// import s3 from "../../../assets/homePage/slider/s3.webp";

// export default function ParallaxSlider() {
//   return (
//     <Swiper
//       direction="vertical"
//       mousewheel={true}
//       modules={[Mousewheel, Pagination, EffectFade, Autoplay]}
//       pagination={{ clickable: true }}
//       className="h-screen"
//       effect="fade"
//       fadeEffect={{ crossFade: true }}
//       speed={900}
//       loop={true}
//       autoplay={{
//         delay: 3500,
//         disableOnInteraction: false,
//       }}
//     >
//       {/* SLIDE 1 */}
//       <SwiperSlide>
//         <SlideContent
//           bgImage={s1}
//           title="For Founders & Teams"
//           items={[
//             "Freedom to keep leading",
//             "Structure to scale with confidence",
//             "Access to new markets and global expansion pathways",
//             "Advanced systems, technology, and operational support",
//             "Risk protection and governance excellence"
//           ]}
//         />
//       </SwiperSlide>

//       {/* SLIDE 2 */}
//       <SwiperSlide>
//         <SlideContent
//           bgImage={s2}
//           title="For Investors"
//           items={[
//             "Visibility into performance",
//             "Secure structures",
//             "Operational transparency",
//           ]}
//         />
//       </SwiperSlide>

//       {/* SLIDE 3 */}
//       <SwiperSlide>
//         <SlideContent
//           bgImage={s3}
//           title="Global Partners"
//           items={[
//             "International expansion support",
//             "Cross-market opportunity access"
//           ]}
//         />
//       </SwiperSlide>
//     </Swiper>
//   );
// }

// /* -------------------------------------------------------------------- */

// function SlideContent({ bgImage, title, items }) {
//   return (
//     <section
//       className="relative h-screen bg-cover bg-center flex items-center overflow-hidden"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Content */}
//       <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-16">

//         {/* LEFT — Title + Lines */}
//         <div className="relative text-white">

//           {/* Origin of both lines */}
//           <div className="absolute left-[22rem] top-1/2 -translate-y-1/2">

//             {/* Upper line */}
//             <div
//               className="absolute h-[2px] bg-white origin-left"
//               style={{ width: "200vh", transform: "rotate(-35deg)" }}
//             />

//             {/* Lower line */}
//             <div
//               className="absolute h-[2px] bg-white origin-left"
//               style={{ width: "200vh", transform: "rotate(35deg)" }}
//             />
//           </div>

//           <h4 className="text-5xl font-bold relative z-10">
//             {title}
//           </h4>
//         </div>

//         {/* RIGHT — Text list */}
//         <div className="text-white text-xl md:text-2xl space-y-4 max-w-lg mt-10 md:mt-0 leading-relaxed">
//           {items.map((e, i) => (
//             <p key={i}>{e}</p>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
/////////////////////////////////////////////////////////
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import s1 from "../../../assets/homePage/slider/s1.webp";
// import s2 from "../../../assets/homePage/slider/s2.webp";

// gsap.registerPlugin(ScrollTrigger);

// const data = [
//   {
//     bg1: s1,
//     bg2: s2,
//     title1: "For Founders & Teams",
//     list1: [
//       "Freedom to keep leading",
//       "Structure to scale with confidence",
//       "Access to new markets and global expansion pathways",
//       "Advanced systems, technology, and operational support",
//       "Risk protection and governance excellence",
//     ],
//     title2: "For Clients",
//     list2: [
//       "The same trusted people they already know",
//       "Faster, higher-quality delivery",
//       "Broader capabilities through the multi-industry Mosaic ecosystem",
//       "International expertise across architecture, engineering, real estate, energy, oil & gas, and marine sectors",
//       "Consistency and continuity — from first meeting to long-term support",
//     ],
//   },
// ];

// export default function ParallaxSections() {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     sectionsRef.current.forEach((sec, i) => {
//       const bg1 = sec.querySelector(".bg1");
//       const bg2 = sec.querySelector(".bg2");
//       const content1 = sec.querySelector(".content1");
//       const content2 = sec.querySelector(".content2");

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sec,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       });

//       // الخلفية 1 تصغر مع خفوت
//       tl.to(bg1, { scale: 0.9, opacity: 0.7, ease: "power1.out" })
//         // المحتوى 1 يختفي تدريجياً للأعلى
//         .to(content1, { opacity: 0, y: -30, ease: "power1.out" }, "<")
//         // الخلفية 2 تظهر تدريجياً مع تصغيرها قليلاً في البداية
//         .fromTo(
//           bg2,
//           { opacity: 0, scale: 1.1 },
//           { opacity: 1, scale: 1, ease: "power1.out" },
//           "<0.1"
//         )
//         // المحتوى 2 يظهر تدريجياً للأعلى مع fade in
//         .fromTo(
//           content2,
//           { opacity: 0, y: 30 },
//           { opacity: 1, y: 0, ease: "power1.out" },
//           "<0.1"
//         );
//     });
//   }, []);

//   return (
//     <div className="w-full">
//       {data.map((slide, i) => (
//         <section
//           key={i}
//           ref={(el) => (sectionsRef.current[i] = el)}
//           className="relative w-full h-[200vh]"
//         >
//           {/* Sticky container */}
//           <div className="sticky top-0 h-screen w-full overflow-hidden">
//             {/* Backgrounds */}
//             <div
//               className="absolute inset-0 bg-cover bg-center bg1"
//               style={{ backgroundImage: `url(${slide.bg1})` }}
//             />
//             <div
//               className="absolute inset-0 bg-cover bg-center bg2 opacity-0"
//               style={{ backgroundImage: `url(${slide.bg2})` }}
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/60 z-10">
//               {/* Lines Origin (moved here) */}
//               <div className="absolute left-[26rem] top-1/2 -translate-y-1/2">
//                 {/* Upper Line */}
//                 <div
//                   className="absolute h-[2px] bg-white origin-left rotate-[-35deg] opacity-70"
//                   style={{ width: "200vh" }}
//                 />

//                 {/* Lower Line */}
//                 <div
//                   className="absolute h-[2px] bg-white origin-left rotate-[35deg] opacity-70"
//                   style={{ width: "200vh" }}
//                 />
//               </div>
//             </div>

//             {/* Content 1 */}
//             <div className="absolute inset-0 content1 z-20 flex flex-col md:flex-row items-center justify-between px-16">
//               {/* LEFT — Title + Lines */}
//               <div className="relative text-white">
//                 <h4 className="heading-3 text-mainGold relative z-10">
//                   {slide.title1}
//                 </h4>
//               </div>

//               {/* RIGHT — List */}
//               <div className="text-white paragraph space-y-4 max-w-lg mt-10 md:mt-0 leading-relaxed">
//                 {slide.list1.map((e, i) => (
//                   <p key={i}>{e}</p>
//                 ))}
//               </div>
//             </div>

//             {/* Content 2 */}
//             <div className="absolute inset-0 content2 opacity-0 z-20 flex flex-col md:flex-row items-center justify-between px-16">
//               {/* LEFT — Title + Lines */}
//               <div className="relative text-white">
//                 <h4 className="heading-3 text-mainGold relative z-10">
//                   {slide.title2}
//                 </h4>
//               </div>

//               {/* RIGHT — List */}
//               <div className="text-white paragraph space-y-4 max-w-lg mt-10 md:mt-0 leading-relaxed">
//                 {slide.list2.map((e, i) => (
//                   <p key={i}>{e}</p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }
////////////////////////////////////////////////////////////////
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import s1 from "../../../assets/homePage/slider/s1.webp";
import s2 from "../../../assets/homePage/slider/s2.webp";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    bg1: s1,
    bg2: s2,
    title1: "For Founders & Teams",
    list1: [
      "Freedom to keep leading",
      "Structure to scale with confidence",
      "Access to new markets and global expansion pathways",
      "Advanced systems, technology, and operational support",
      "Risk protection and governance excellence",
    ],

    title2: "For Clients",
    list2: [
      "The same trusted people they already know",
      "Faster, higher-quality delivery",
      "Broader capabilities through the multi-industry Mosaic ecosystem",
      "International expertise across architecture, engineering, real estate, energy, oil & gas, and marine sectors",
      "Consistency and continuity — from first meeting to long-term support",
    ],
  },
];

export default function ParallaxSections() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((sec) => {
      const bg1 = sec.querySelector(".bg1");
      const bg2 = sec.querySelector(".bg2");
      const content1 = sec.querySelector(".content1");
      const content2 = sec.querySelector(".content2");

      gsap.timeline({
        scrollTrigger: {
          trigger: sec,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })
        .to(bg1, { scale: 0.9, opacity: 0.6, ease: "power1.out" })
        .to(content1, { opacity: 0, y: -40, ease: "power1.out" }, "<")
        .fromTo(
          bg2,
          { opacity: 0, scale: 1.1 },
          { opacity: 1, scale: 1, ease: "power1.out" },
          "<0.1"
        )
        .fromTo(
          content2,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: "power1.out" },
          "<0.1"
        );
    });
  }, []);

  return (
    <div className="w-full">
      {data.map((slide, i) => (
        <section
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className="relative w-full h-[300vh]"
        >
          {/* Sticky container */}
          <div className="sticky top-0 h-screen w-full overflow-hidden">

            {/* Backgrounds */}
            <div
              className="absolute inset-0 bg-cover bg-center bg1"
              style={{ backgroundImage: `url(${slide.bg1})` }}
            />
            <div
              className="absolute inset-0 bg-cover bg-center bg2 opacity-0"
              style={{ backgroundImage: `url(${slide.bg2})` }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-10">
              <div className="absolute left-[26rem] top-1/2 -translate-y-1/2">
                <div
                  className="absolute h-[2px] bg-white origin-left rotate-[-35deg] opacity-70"
                  style={{ width: "200vh" }}
                />
                <div
                  className="absolute h-[2px] bg-white origin-left rotate-[35deg] opacity-70"
                  style={{ width: "200vh" }}
                />
              </div>
            </div>

            {/* Content 1 */}
            <div className="absolute inset-0 content1 z-20 flex flex-col md:flex-row items-center justify-between px-16">
              <div className="relative text-white">
                <h4 className="heading-3 font-bold text-mainGold relative z-10">
                  {slide.title1}
                </h4>
              </div>

              <div className="text-white paragraph space-y-4 max-w-lg mt-10 md:mt-0 leading-relaxed">
                {slide.list1.map((e, i) => (
                  <p key={i}><span className="text-mainGold text-xl">•</span>{" "} {e}</p>
                ))}
              </div>
            </div>

            {/* Content 2 */}
            <div className="absolute inset-0 content2 opacity-0 z-20 flex flex-col md:flex-row items-center justify-between px-16">
              <div className="relative text-white">
                <h4 className="heading-3 font-bold text-mainGold relative z-10">
                  {slide.title2}
                </h4>
              </div>

              <div className="text-white paragraph space-y-4 max-w-lg mt-10 md:mt-0 leading-relaxed">
                {slide.list2.map((e, i) => (
                  <p key={i}><span className="text-mainGold text-xl">•</span>{" "}{e}</p>
                ))}
              </div>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
}

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import s1 from "../../../assets/homePage/slider/s1.webp";
// import s2 from "../../../assets/homePage/slider/s2.webp";

// gsap.registerPlugin(ScrollTrigger);

// const data = [
//   {
//     bg1: s1,
//     bg2: s2,
//     title1: "For Founders & Teams",
//     list1: [
//       "Freedom to keep leading",
//       "Structure to scale with confidence",
//       "Access to new markets",
//       "Advanced technology",
//       "Risk protection & governance",
//     ],
//     title2: "For Investors",
//     list2: [
//       "High-growth portfolio expansion",
//       "Due-diligence intelligence",
//       "Stronger market positioning",
//       "Scalable operational models",
//     ],
//   },
// ];

// export default function ParallaxSections() {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     sectionsRef.current.forEach((sec, i) => {
//       const bg1 = sec.querySelector(".bg1");
//       const bg2 = sec.querySelector(".bg2");
//       const content1 = sec.querySelector(".content1");
//       const content2 = sec.querySelector(".content2");

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sec,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       });

//       // تحسين التحريك: scale + fade + slight translateY
//       tl.to(bg1, { scale: 0.8, opacity: 0.7 })
//         .to(content1, { opacity: 0, y: -40, scale: 0.95 }, "<")
//         .fromTo(bg2, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1 }, "<")
//         .fromTo(content2, { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1 }, "<");
//     });
//   }, []);

//   return (
//     <div className="w-full">
//       {data.map((slide, i) => (
//         <section
//           key={i}
//           ref={(el) => (sectionsRef.current[i] = el)}
//           className="relative w-full h-[200vh]"
//         >
//           {/* Sticky container */}
//           <div className="sticky top-0 h-screen w-full overflow-hidden">
//             {/* Backgrounds */}
//             <div
//               className="absolute inset-0 bg-cover bg-center bg1"
//               style={{ backgroundImage: `url(${slide.bg1})` }}
//             />
//             <div
//               className="absolute inset-0 bg-cover bg-center bg2 opacity-0"
//               style={{ backgroundImage: `url(${slide.bg2})` }}
//             />

//             {/* Overlay جميل */}
//             <div className="absolute inset-0 bg-black/50 z-10" />

//             {/* محتوى الأول */}
//             <div className="absolute inset-0 flex items-center justify-center content1 z-20">
//               <div className="text-center text-white space-y-4">
//                 <h2 className="text-5xl font-bold">{slide.title1}</h2>
//                 {slide.list1.map((l, idx) => (
//                   <p key={idx} className="text-xl">{l}</p>
//                 ))}
//               </div>
//             </div>

//             {/* محتوى الثاني */}
//             <div className="absolute inset-0 flex items-center justify-center content2 opacity-0 z-20">
//               <div className="text-center text-white space-y-4">
//                 <h2 className="text-5xl font-bold">{slide.title2}</h2>
//                 {slide.list2.map((l, idx) => (
//                   <p key={idx} className="text-xl">{l}</p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import s1 from "../../../assets/homePage/slider/s1.webp";
// import s2 from "../../../assets/homePage/slider/s2.webp";

// gsap.registerPlugin(ScrollTrigger);

// const data = [
//   {
//     bg1: s1,
//     bg2: s2,
//     title1: "For Founders & Teams",
//     list1: [
//       "Freedom to keep leading",
//       "Structure to scale with confidence",
//       "Access to new markets",
//       "Advanced technology",
//       "Risk protection & governance",
//     ],
//     title2: "For Investors",
//     list2: [
//       "High-growth portfolio expansion",
//       "Due-diligence intelligence",
//       "Stronger market positioning",
//       "Scalable operational models",
//     ],
//   },

// ];

// export default function ParallaxSections() {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     sectionsRef.current.forEach((sec, i) => {
//       const bg1 = sec.querySelector(".bg1");
//       const bg2 = sec.querySelector(".bg2");
//       const content1 = sec.querySelector(".content1");
//       const content2 = sec.querySelector(".content2");

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sec,
//           start: "top top",
//           end: "bottom top", // طول السكشن يسمح بالانتقال التدريجي
//           scrub: true,
//         },
//       });

//       tl.to(bg1, { scale: 0.7, opacity: 0 })
//         .to(content1, { opacity: 0, y: -50 }, "<")
//         .fromTo(bg2, { scale: 1.4, opacity: 0 }, { scale: 1, opacity: 1 }, "<")
//         .fromTo(content2, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "<");
//     });
//   }, []);

//   return (
//     <div className="w-full">
//       {data.map((slide, i) => (
//         <section
//           key={i}
//           ref={(el) => (sectionsRef.current[i] = el)}
//           className="relative w-full h-[200vh]" // يعطي مجال للانتقال التدريجي
//         >
//           {/* Sticky container */}
//           <div className="sticky top-0 h-screen w-full overflow-hidden">
//   {/* Backgrounds */}
//   <div
//     className="absolute inset-0 bg-cover bg-center bg1"
//     style={{ backgroundImage: `url(${slide.bg1})` }}
//   />
//   <div
//     className="absolute inset-0 bg-cover bg-center bg2 opacity-0"
//     style={{ backgroundImage: `url(${slide.bg2})` }}
//   />

//   {/* Overlay */}
//   <div className="absolute inset-0 bg-black/50 z-10" />

//   {/* Content 1 */}
//   <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold content1 z-20">
//     <div>
//       <h2>{slide.title1}</h2>
//       {slide.list1.map((l, idx) => (
//         <p key={idx} className="text-xl">{l}</p>
//       ))}
//     </div>
//   </div>

//   {/* Content 2 */}
//   <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold content2 opacity-0 z-20">
//     <div>
//       <h2>{slide.title2}</h2>
//       {slide.list2.map((l, idx) => (
//         <p key={idx} className="text-xl">{l}</p>
//       ))}
//     </div>
//   </div>
// </div>

//         </section>
//       ))}
//     </div>
//   );
// }

{
  /* Content 1 */
}
{
  /* <div className="absolute inset-0 flex flex-col items-center justify-center text-white content1 z-20 text-center space-y-4">
              <h4 className="heading-3 font-bold text-mainGold">
                {slide.title1}
              </h4>
              {slide.list1.map((l, idx) => (
                <p key={idx} className="paragraph">{l}</p>
              ))}
            </div> */
}

{
  /* Content 2 */
}
{
  /* <div className="absolute inset-0 flex flex-col items-center justify-center text-white content2 opacity-0 z-20 text-center space-y-4">
              <h4 className="heading-3 font-bold text-mainGold">
                {slide.title2}
              </h4>
              {slide.list2.map((l, idx) => (
                <p key={idx} className="paragraph">{l}</p>
              ))}
            </div> */
}
