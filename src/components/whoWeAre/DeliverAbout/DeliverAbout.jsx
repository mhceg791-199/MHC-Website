// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register plugin
// gsap.registerPlugin(ScrollTrigger);

// // Images
// import MHC1 from "../../../assets/whoWeAre/deliver/MHC-1.png";
// import MHC2 from "../../../assets/whoWeAre/deliver/MHC-2.png";
// import MHC3 from "../../../assets/whoWeAre/deliver/MHC-3.png";

// export default function DeliverAbout() {
//   const shapesRef = useRef([]);

//   useEffect(() => {
//     shapesRef.current.forEach((shape, i) => {
//       // Rotation animation (slow)
//       gsap.to(shape, {
//         rotate: 360,
//         duration: 30 + i * 8,
//         repeat: -1,
//         ease: "none",
//       });

//       // Scroll movement (accelerate on scroll)
//       gsap.to(shape, {
//         y: i % 2 === 0 ? -150 : 150,
//         x: i % 2 === 0 ? 80 : -80,
//         scrollTrigger: {
//           trigger: shape,
//           start: "top bottom",
//           scrub: 2,
//         },
//       });
//     });
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen bg-[#A0A0A0] overflow-hidden px-10 py-20">
//       {/* TEXT LEFT SIDE */}
//       <div className="max-w-xl text-white text-left leading-relaxed">
//         <h2 className="text-xl font-semibold uppercase mb-6">For Founders & Teams</h2>
//         <ul className="space-y-2 mb-10">
//           <li>• Freedom to keep leading</li>
//           <li>• Structure to scale with confidence</li>
//           <li>• Access to new markets and global expansion pathways</li>
//           <li>• Advanced systems, technology, and operational support</li>
//           <li>• Risk protection and governance excellence</li>
//         </ul>

//         <h2 className="text-xl font-semibold uppercase mb-6">For Clients</h2>
//         <ul className="space-y-2">
//           <li>• The same trusted people they already know</li>
//           <li>• Faster, higher-quality delivery</li>
//           <li>• Broader capabilities through the multi-industry Mosaic ecosystem</li>
//           <li>• International expertise across architecture, engineering,
//             real estate, energy, oil & gas, and marine sectors</li>
//           <li>• Consistency and continuity — from first meeting to long-term support</li>
//         </ul>
//       </div>

//       {/* TRIANGLE IMAGES (RIGHT SIDE) */}
//       <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
//         {/* shape 1 */}
//         <img
//           src={MHC1}
//           ref={(el) => (shapesRef.current[0] = el)}
//           className="absolute w-48 drop-shadow-xl opacity-90"
//           style={{ top: "10%", right: "5%" }}
//         />

//         {/* shape 2 */}
//         <img
//           src={MHC2}
//           ref={(el) => (shapesRef.current[1] = el)}
//           className="absolute w-64 drop-shadow-xl opacity-90"
//           style={{ top: "35%", right: "20%" }}
//         />

//         {/* shape 3 */}
//         <img
//           src={MHC3}
//           ref={(el) => (shapesRef.current[2] = el)}
//           className="absolute w-52 drop-shadow-xl opacity-90"
//           style={{ top: "65%", right: "8%" }}
//         />
//       </div>
//     </section>
//   );
// }

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // Images
// import MHC1 from "../../../assets/whoWeAre/deliver/MHC-1.png";
// import MHC2 from "../../../assets/whoWeAre/deliver/MHC-2.png";
// import MHC3 from "../../../assets/whoWeAre/deliver/MHC-3.png";
// import MHC4 from "../../../assets/whoWeAre/deliver/MHC-1.png";
// import MHC5 from "../../../assets/whoWeAre/deliver/MHC-2.png";
// import MHC6 from "../../../assets/whoWeAre/deliver/MHC-3.png";

// export default function AboutSection() {
//   const shapesRef = useRef([]);

//   useEffect(() => {
//     shapesRef.current.forEach((shape, i) => {
//       // Slow rotation
//       gsap.to(shape, {
//         rotate: 360,
//         duration: 25 + i * 10,
//         repeat: -1,
//         ease: "none",
//       });

//       // Floating movement
//       gsap.to(shape, {
//         y: i % 2 === 0 ? -40 : 40,
//         duration: 4 + i,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       // Scroll reaction
//       gsap.to(shape, {
//         y: i % 3 === 0 ? -180 : 180,
//         x: i % 3 === 0 ? 80 : -80,
//         scrollTrigger: {
//           trigger: shape,
//           start: "top bottom",
//           scrub: 2.2,
//         },
//       });
//     });
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen bg-[#A0A0A0] overflow-hidden px-10 py-24">

//       {/* LEFT TEXT BLOCK */}
//       <div className="max-w-2xl text-left text-white leading-relaxed space-y-16">

//         {/* ---- BLOCK 1 ---- */}
//         <div>
//           <h2 className="text-3xl font-bold tracking-wide mb-2">
//             For Founders & Teams
//           </h2>
//           <div className="w-20 h-[2px] bg-white/40 mb-6"></div>

//           <ul className="space-y-3 text-[18px] text-white/90">
//             {[
//               "Freedom to keep leading",
//               "Structure to scale with confidence",
//               "Access to new markets & global expansion pathways",
//               "Advanced systems, technology & operational support",
//               "Risk protection & governance excellence",
//             ].map((item, idx) => (
//               <li key={idx} className="flex gap-3 items-start">
//                 <span className="w-2 h-2 mt-[7px] rounded-full bg-white/90"></span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ---- BLOCK 2 ---- */}
//         <div>
//           <h2 className="text-3xl font-bold tracking-wide mb-2">
//             For Clients
//           </h2>
//           <div className="w-20 h-[2px] bg-white/40 mb-6"></div>

//           <ul className="space-y-3 text-[18px] text-white/90">
//             {[
//               "The same trusted people they already know",
//               "Faster, higher-quality delivery",
//               "Broader capabilities through the multi-industry Mosaic ecosystem",
//               "International expertise across multiple sectors",
//               "Consistency & continuity — from first meeting to long-term support",
//             ].map((item, idx) => (
//               <li key={idx} className="flex gap-3 items-start">
//                 <span className="w-2 h-2 mt-[7px] rounded-full bg-white/90"></span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//       </div>

//       {/* RANDOM FLOATING SHAPES */}
//       <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">

//         {[MHC1, MHC2, MHC3, MHC4, MHC5, MHC6].map((img, i) => {
//           const positions = [
//             { top: "15%", right: "18%", w: "w-40" },
//             { top: "18%", right: "25%", w: "w-56" },
//             { top: "40%", right: "10%", w: "w-48" },
//             { top: "60%", right: "30%", w: "w-40" },
//             { top: "75%", right: "12%", w: "w-52" },
//             { top: "85%", right: "28%", w: "w-40" },
//           ];

//           return (
//             <img
//               key={i}
//               src={img}
//               ref={(el) => (shapesRef.current[i] = el)}
//               className={`absolute opacity-[0.92] drop-shadow-xl ${positions[i].w}`}
//               style={{
//                 top: positions[i].top,
//                 right: positions[i].right,
//               }}
//             />
//           );
//         })}

//       </div>
//     </section>
//   );
// }
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // Images
// import MHC1 from "../../../assets/whoWeAre/deliver/MHC-1.png";
// import MHC2 from "../../../assets/whoWeAre/deliver/MHC-2.png";
// import MHC3 from "../../../assets/whoWeAre/deliver/MHC-3.png";
// import MHC4 from "../../../assets/whoWeAre/deliver/MHC-1.png";
// import MHC5 from "../../../assets/whoWeAre/deliver/MHC-2.png";
// import MHC6 from "../../../assets/whoWeAre/deliver/MHC-3.png";

// export default function AboutSection() {
//   const shapesRef = useRef([]);

//   useEffect(() => {
//     shapesRef.current.forEach((shape, i) => {
//       // Slow rotation
//       gsap.to(shape, {
//         rotate: 360,
//         duration: 25 + i * 10,
//         repeat: -1,
//         ease: "none",
//       });

//       // Floating movement
//       gsap.to(shape, {
//         y: i % 2 === 0 ? -40 : 40,
//         duration: 4 + i,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       // Scroll reaction
//       gsap.to(shape, {
//         y: i % 3 === 0 ? -180 : 180,
//         x: i % 3 === 0 ? 80 : -80,
//         scrollTrigger: {
//           trigger: shape,
//           start: "top bottom",
//           scrub: 2.2,
//         },
//       });
//     });
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen bg-[#A0A0A0] overflow-hidden px-10 py-24">

//       {/* LEFT TEXT BLOCK */}
//       <div className="max-w-2xl text-left text-white leading-relaxed space-y-16">

//         {/* ---- BLOCK 1 ---- */}
//         <div>
//           <h2 className="text-3xl font-bold tracking-wide mb-2">
//             For Founders & Teams
//           </h2>
//           <div className="w-20 h-[2px] bg-white/40 mb-6"></div>

//           <ul className="space-y-3 text-[18px] text-white/90">
//             {[
//               "Freedom to keep leading",
//               "Structure to scale with confidence",
//               "Access to new markets & global expansion pathways",
//               "Advanced systems, technology & operational support",
//               "Risk protection & governance excellence",
//             ].map((item, idx) => (
//               <li key={idx} className="flex gap-3 items-start">
//                 <span className="w-2 h-2 mt-[7px] rounded-full bg-white/90"></span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ---- BLOCK 2 ---- */}
//         <div>
//           <h2 className="text-3xl font-bold tracking-wide mb-2">
//             For Clients
//           </h2>
//           <div className="w-20 h-[2px] bg-white/40 mb-6"></div>

//           <ul className="space-y-3 text-[18px] text-white/90">
//             {[
//               "The same trusted people they already know",
//               "Faster, higher-quality delivery",
//               "Broader capabilities through the multi-industry Mosaic ecosystem",
//               "International expertise across multiple sectors",
//               "Consistency & continuity — from first meeting to long-term support",
//             ].map((item, idx) => (
//               <li key={idx} className="flex gap-3 items-start">
//                 <span className="w-2 h-2 mt-[7px] rounded-full bg-white/90"></span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//       </div>

//       {/* RANDOM FLOATING SHAPES */}
//       <div className="absolute right-0 top-0 w-1/2 h-[75%] pointer-events-none">

//         {[MHC1, MHC2, MHC3, MHC4, MHC5, MHC6].map((img, i) => {
//           const positions = [
//             { top: "22%", right: "20%", w: "w-40" },
//             { top: "18%", right: "25%", w: "w-56" },
//             { top: "40%", right: "10%", w: "w-48" },
//             { top: "60%", right: "30%", w: "w-40" },
//             { top: "75%", right: "12%", w: "w-52" },
//             { top: "85%", right: "28%", w: "w-40" },
//           ];

//           return (
//             <img
//               key={i}
//               src={img}
//               ref={(el) => (shapesRef.current[i] = el)}
//               className={`absolute opacity-[0.92] drop-shadow-xl ${positions[i].w}`}
//               style={{
//                 top: positions[i].top,
//                 right: positions[i].right,
//               }}
//             />
//           );
//         })}

//       </div>
//     </section>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import MHC1 from "../../../assets/whoWeAre/deliver/MHC-1.png";
// import MHC2 from "../../../assets/whoWeAre/deliver/MHC-2.png";
// import MHC3 from "../../../assets/whoWeAre/deliver/MHC-3.png";

// const baseImages = [MHC1, MHC2, MHC3];
// const images = Array.from({ length: 6 }, (_, i) => baseImages[i % 3]);

// export default function HeroSection() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const triangles = gsap.utils.toArray(".triangle");

//     triangles.forEach((el) => {
//       gsap.set(el, {
//         x: gsap.utils.random(-150, 150),
//         y: gsap.utils.random(-150, 150),
//         rotation: gsap.utils.random(0, 360),
//         scale: gsap.utils.random(0.7, 1.1),
//         opacity: 0.9,
//       });

//       // ✔ دوران فقط — الصورة لا تتحرك
//       gsap.to(el, {
//         rotation: "+=360",
//         duration: gsap.utils.random(20, 32),
//         repeat: -1,
//         ease: "linear",
//       });
//     });
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full h-[75%] bg-white overflow-hidden flex items-center justify-between px-7 md:px-20 py-14"
//     >
//       <div className="max-w-2xl text-left text-white leading-relaxed space-y-4">
//         {/* ---- BLOCK 1 ---- */}
//         <div>
//           <h5 className="heading-3 text-mainGold font-semibold tracking-wide mb-2">
//             For Founders & Teams
//           </h5>
//           <div className="w-20 h-[2px] bg-mainGold/40 mb-6"></div>

//           <ul className="space-y-3 paragraph text-black/90">
//             {[
//               "Freedom to keep leading",
//               "Structure to scale with confidence",
//               "Access to new markets & global expansion pathways",
//               "Advanced systems, technology & operational support",
//               "Risk protection & governance excellence",
//             ].map((item, idx) => (
//               <li key={idx} className="flex gap-3 items-start">
//                 <span className="w-2 h-2 mt-[7px] rounded-full bg-white/90"></span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ---- BLOCK 2 ---- */}
//         <div>
//           <h5 className="heading-3 text-mainGold font-semibold tracking-wide mb-2">
//             For Clients
//           </h5>
//           <div className="w-20 h-[2px] bg-mainGold/40 mb-6"></div>

//           <ul className="space-y-3 paragraph text-black/90">
//             {[
//               "The same trusted people they already know",
//               "Faster, higher-quality delivery",
//               "Broader capabilities through the multi-industry Mosaic ecosystem",
//               "International expertise across multiple sectors",
//               "Consistency & continuity — from first meeting to long-term support",
//             ].map((item, idx) => (
//               <li key={idx} className="flex gap-3 items-start">
//                 <span className="w-2 h-2 mt-[7px] rounded-full bg-white/90"></span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {/* صور المثلثات — ثابتة + دوران */}
//       {images.map((src, i) => (
//         <img
//           key={i}
//           src={src}
//           className="triangle absolute z-0 w-40 pointer-events-none"
//           style={{
//             top: `${gsap.utils.random(0, 58)}%`,
//             left: `${gsap.utils.random(60, 85)}%`,
//           }}
//         />
//       ))}
//     </section>
//   );
// }
/////////////////////////////////////////////////////////////////////////

// import { motion } from "framer-motion";

// export default function RotatingLogosSection() {
//   const text1 = [
//     "Freedom to keep leading",
//     "Structure to scale with confidence",
//     "Access to new markets and global expansion pathways",
//     "Advanced systems, technology, and operational support",
//     "Risk protection and governance excellence",
//   ];

//   const text2 = [
//     "The same trusted people they already know",
//     "Faster, higher-quality delivery",
//     "Broader capabilities through the multi-industry Mosaic ecosystem",
//     "International expertise across architecture, engineering, real estate, energy, oil & gas, and marine sectors",
//     "Consistency and continuity — from first meeting to long-term support",
//   ];

//   return (
//     <section className="relative w-full  py-32 flex flex-col md:flex-row justify-center items-center gap-20 overflow-hidden">

//       {/* --------------- BLOCK 1 --------------- */}
//       <div className="relative w-[260px] h-[260px] flex flex-col items-center text-white">
        
//         {/* Rotating Background Logo */}
//         <motion.img
//           src="/logo-c.png"
//           alt="logo"
//           className="absolute inset-0 w-full h-full"
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
//         />

//         {/* TEXT CONTENT */}
//         <div className="relative z-10 mt-4 text-center">
//           <h3 className="text-xl font-semibold mb-4">For Founders & Teams</h3>
//           <ul className="text-sm space-y-2 text-gray-300">
//             {text1.map((line, idx) => (
//               <li key={idx}>• {line}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* --------------- BLOCK 2 --------------- */}
//       <div className="relative w-[260px] h-[260px] flex flex-col items-center text-white">
        
//         {/* Rotating Background Logo */}
//         <motion.img
//           src="/logo-c.png"
//           alt="logo"
//           className="absolute inset-0 w-full h-full"
//           animate={{ rotate: -360 }}
//           transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
//         />

//         {/* TEXT CONTENT */}
//         <div className="relative z-10 mt-4 text-center">
//           <h3 className="heading-3 text-mainGold font-bold mb-4">For Clients</h3>
//           <ul className="paragraph space-y-2 text-gray-800">
//             {text2.map((line, idx) => (
//               <li key={idx}>• {line}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//     </section>
//   );
// }


import { motion } from "framer-motion";
import clients from "../../../data/clients";
import founders from "../../../data/founders";
import DeliverSlider from "./DeliverSlider";


export default function RotatingLogosSection() {
  return (
    <section className="relative w-full py-12 md:py-32 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 overflow-hidden">

      {/* --------------- BLOCK 1 --------------- */}
      <div
        className="
        relative 
        w-[390px] h-[390px]
        sm:w-[360px] sm:h-[360px]
        md:w-[450px] md:h-[450px]
        lg:w-[520px] lg:h-[520px]
        text-white
        overflow-visible
      "
      >

        <motion.img
          src="/logo-c.png"
          alt="logo"
          className="absolute inset-0 w-full h-full opacity-80"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        />

        {/* TEXT BLOCK */}
        <div
          className="
          absolute inset-0 
          flex flex-col items-center justify-center
          text-center px-4
          z-20 w-[14rem]
          md:max-w-[22rem]
          mx-auto
        "
        >
          <h3 className="text-[1.1rem] md:heading-3 text-mainGold font-bold mb-2 text-xl md:text-2xl">
            For Founders & Teams
          </h3>

          <div className="w-full md:w-[16rem]">
            <DeliverSlider displayData={founders} />
          </div>
        </div>
      </div>

      {/* --------------- BLOCK 2 --------------- */}
      <div
        className="
        relative 
        w-[390px] h-[390px]
        sm:w-[360px] sm:h-[360px]
        md:w-[450px] md:h-[450px]
        lg:w-[520px] lg:h-[520px]
        text-white
        overflow-visible
      "
      >

        <motion.img
          src="/logo-c.png"
          alt="logo"
          className="absolute inset-0 w-full h-full opacity-80"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        />

        <div
          className="
          absolute inset-0 
          flex flex-col items-center justify-center
          text-center px-4
          z-20 w-[14rem]
          md:max-w-[22rem]
          mx-auto
        "
        >
          <h3 className="text-[1.1rem] md:heading-3 text-mainGold font-bold mb-2 text-xl md:text-2xl">
            For Clients
          </h3>

          <div className="w-full md:w-[16rem]">
            <DeliverSlider displayData={clients} />
          </div>
        </div>
      </div>

    </section>
  );
}
// export default function RotatingLogosSection() {
//   const text1 = [
//     "Freedom to keep leading",
//     "Structure to scale with confidence",
//     "Access to new markets and global expansion pathways",
//     "Advanced systems, technology, and operational support",
//     "Risk protection and governance excellence",
//   ];

//   const text2 = [
//     "The same trusted people they already know",
//     "Faster, higher-quality delivery",
//     "Broader capabilities through the multi-industry Mosaic ecosystem",
//     "International expertise across architecture, engineering, real estate, energy, oil & gas, and marine sectors",
//     "Consistency and continuity — from first meeting to long-term support",
//   ];

//   return (
//     <section className="relative w-full  py-32 flex flex-col md:flex-row justify-center items-center gap-20 overflow-hidden">

//       {/* --------------- BLOCK 1 --------------- */}
//       <div className="relative w-[260px] h-[260px] flex flex-col items-center text-white">
        
//         {/* Rotating Background Logo */}
//         <motion.img
//           src="/logo-c.png"
//           alt="logo"
//           className="absolute inset-0 w-full h-full"
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
//         />

//         {/* TEXT CONTENT */}
//         <div className="relative z-10 mt-4 text-center">
//           <h3 className="text-xl font-semibold mb-4">For Founders & Teams</h3>
//           <ul className="text-sm space-y-2 text-gray-300">
//             {text1.map((line, idx) => (
//               <li key={idx}>• {line}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* --------------- BLOCK 2 --------------- */}
//       <div className="relative w-[260px] h-[260px] flex flex-col items-center text-white">
        
//         {/* Rotating Background Logo */}
//         <motion.img
//           src="/logo-c.png"
//           alt="logo"
//           className="absolute inset-0 w-full h-full"
//           animate={{ rotate: -360 }}
//           transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
//         />

//         {/* TEXT CONTENT */}
//         <div className="relative z-10 mt-4 text-center">
//           <h3 className="heading-3 text-mainGold font-bold mb-4">For Clients</h3>
//           <ul className="paragraph space-y-2 text-gray-800">
//             {text2.map((line, idx) => (
//               <li key={idx}>• {line}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//     </section>
//   );
// }