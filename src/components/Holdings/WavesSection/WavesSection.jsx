// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function WavesSection() {
//   const wavesRef = useRef([]);

//   useEffect(() => {
//     wavesRef.current.forEach((wave, index) => {
//       gsap.fromTo(
//         wave,
//         { x: index % 2 === 0 ? -150 : 150 }, // كل خط يبدأ في اتجاه مختلف
//         {
//           x: index % 2 === 0 ? 150 : -150, // يتحرك في الاتجاه العكسي
//           ease: "none",
//           scrollTrigger: {
//             trigger: wave,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1.5, // الحركة تتماشى مع الاسكرول
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div className="relative w-full h-[450px] bg-[#F4FAFC] overflow-hidden flex items-center justify-center">

//       {/* Text */}
//       <div className="absolute z-20 text-center">
//         <h1 className="text-4xl font-semibold text-[#0082A8]">
//           Talk to Our Team!
//         </h1>
//         <p className="text-gray-700 mt-2 w-[70%] mx-auto">
//           Looking to distribute PAPs or oxygen concentrators in LATAM?
//         </p>
//         <button className="mt-5 px-6 py-2 border border-black rounded-full flex items-center gap-2">
//           <span>→</span> Inquire Now
//         </button>
//       </div>

//       {/* Waves SVG */}
//       <svg className="absolute bottom-0 w-full" height="260" viewBox="0 0 2000 260" fill="none">

//         <path
//           ref={(el) => (wavesRef.current[0] = el)}
//           d="M -200 40 C 200 40, 400 40, 800 120 C 900 150, 1100 150, 1200 120 C 1500 40, 1700 40, 2200 40"
//           stroke="#D4DCE1"
//           strokeWidth="3"
//           fill="none"
//         />

//         <path
//           ref={(el) => (wavesRef.current[1] = el)}
//           d="M -200 80 C 200 80, 400 80, 800 130 C 900 150, 1100 150, 1200 130 C 1500 80, 1700 80, 2200 80"
//           stroke="#C8E9F8"
//           strokeWidth="3"
//           fill="none"
//           opacity="0.6"
//         />

//         <path
//           ref={(el) => (wavesRef.current[2] = el)}
//           d="M -200 130 C 200 130, 400 130, 800 150 C 850 155, 900 160, 950 150 C 1000 140, 1050 155, 1100 150 C 1150 145, 1200 140, 1300 150 C 1500 130, 1700 130, 2200 130"
//           stroke="#82E8F9"
//           strokeWidth="3"
//           fill="none"
//         />

//         <path
//           ref={(el) => (wavesRef.current[3] = el)}
//           d="M -200 170 C 200 170, 400 170, 800 150 C 900 140, 1100 140, 1200 150 C 1500 170, 1700 170, 2200 170"
//           stroke="#BDEFFF"
//           strokeWidth="3"
//           fill="none"
//           opacity="0.6"
//         />

//         <path
//           ref={(el) => (wavesRef.current[4] = el)}
//           d="M -200 210 C 200 210, 400 210, 800 160 C 900 150, 1100 150, 1200 160 C 1500 210, 1700 210, 2200 210"
//           stroke="#A2F2F3"
//           strokeWidth="3"
//           fill="none"
//         />

//       </svg>
//     </div>
//   );
// }

// export default function WavesSection() {
//   return (
//     <div className="relative w-full h-[450px] bg-[#F4FAFC] overflow-hidden flex items-center justify-center">

//       {/* Text */}
//       <div className="absolute z-20 text-center">
//         <h1 className="text-4xl font-semibold text-[#0082A8]">
//           Talk to Our Team!
//         </h1>
//         <p className="text-gray-700 mt-2 w-[70%] mx-auto">
//           Looking to distribute PAPs or oxygen concentrators in LATAM?
//         </p>
//         <button className="mt-5 px-6 py-2 border border-black rounded-full flex items-center gap-2">
//           <span>→</span> Inquire Now
//         </button>
//       </div>

//       {/* Waves SVG */}
//       <svg className="absolute bottom-0 w-full" height="260" viewBox="0 0 2000 260" fill="none">

//         <path
//           d="M -200 40 C 200 40, 400 40, 800 120 C 900 150, 1100 150, 1200 120 C 1500 40, 1700 40, 2200 40"
//           stroke="#D4DCE1"
//           strokeWidth="3"
//           fill="none"
//         />

//         <path
//           d="M -200 80 C 200 80, 400 80, 800 130 C 900 150, 1100 150, 1200 130 C 1500 80, 1700 80, 2200 80"
//           stroke="#C8E9F8"
//           strokeWidth="3"
//           fill="none"
//           opacity="0.6"
//         />

//         <path
//           d="M -200 130 C 200 130, 400 130, 800 150 C 850 155, 900 160, 950 150 C 1000 140, 1050 155, 1100 150 C 1150 145, 1200 140, 1300 150 C 1500 130, 1700 130, 2200 130"
//           stroke="#82E8F9"
//           strokeWidth="3"
//           fill="none"
//         />

//         <path
//           d="M -200 170 C 200 170, 400 170, 800 150 C 900 140, 1100 140, 1200 150 C 1500 170, 1700 170, 2200 170"
//           stroke="#BDEFFF"
//           strokeWidth="3"
//           fill="none"
//           opacity="0.6"
//         />

//         <path
//           d="M -200 210 C 200 210, 400 210, 800 160 C 900 150, 1100 150, 1200 160 C 1500 210, 1700 210, 2200 210"
//           stroke="#A2F2F3"
//           strokeWidth="3"
//           fill="none"
//         />

//       </svg>
//     </div>
//   );
// }


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

export default function WavesSection() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const mainPaths = svg.querySelectorAll(".main-line");

    mainPaths.forEach((path, index) => {
      const totalLength = path.getTotalLength();

      // نسخة الخط المتحرك
      const movingLine = path.cloneNode();
      movingLine.classList.add("moving-line");

      // اللون المناسب للخط المتحرك (دهبي قوي)
      movingLine.setAttribute("stroke", "#C5A363");
      movingLine.setAttribute("stroke-width", "4");
      movingLine.setAttribute("opacity", "1");

      svg.appendChild(movingLine);

      gsap.set(movingLine, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      });

      gsap.to(movingLine, {
        strokeDashoffset: 0,
        duration: 5,
        ease: "none",
        repeat: -1,
        delay: index * 0.7
      });
    });
  }, []);

  return (
    <>
    <div className="relative w-full h-[290px] md:h-[450px]  overflow-hidden flex items-center justify-center">
      {/* TEXT */}
      <div className="text-center">
        <h3 className="heading-3 mb-4">
          <SectionHeader firstWord="Our Holdings" />
        </h3>

        <h4 className="text-lg font-semibold text-gray-600">
          We don’t collect companies. We build an ecosystem.
        </h4>

        <p className="max-w-3xl mx-auto paragraph text-gray-600 mb-24 px-2">
          Each company within Mosaic Holding Corporation represents a piece of a larger vision —
          a global investment ecosystem of industry leaders shaping cities, communities, and economies.
        </p>
      </div>

      {/* WAVES */}
      <svg
        ref={svgRef}
        className="absolute bottom-[-70px] md:bottom-0 w-full"
        height="260"
        viewBox="0 0 2000 260"
        fill="none"
      >
        {/* كل المسارات الثابتة لونها دهبي فاتح (secondGold) */}
        <path
          className="main-line"
          d="M -200 40 C 200 40, 400 40, 800 120 C 900 150, 1100 150, 1200 120 C 1500 40, 1700 40, 2200 40"
          stroke="rgba(197, 163, 99, 0.5)"
          strokeWidth="3"
        />

        <path
          className="main-line"
          d="M -200 80 C 200 80, 400 80, 800 130 C 900 150, 1100 150, 1200 130 C 1500 80, 1700 80, 2200 80"
          stroke="rgba(197, 163, 99, 0.5)"
          strokeWidth="3"
        />

        <path
          className="main-line"
          d="M -200 130 C 200 130, 400 130, 800 150 C 850 155, 900 160, 950 150 C 1000 140, 1050 155, 1100 150 C 1150 145, 1200 140, 1300 150 C 1500 130, 1700 130, 2200 130"
          stroke="rgba(197, 163, 99, 0.5)"
          strokeWidth="3"
        />

        <path
          className="main-line"
          d="M -200 170 C 200 170, 400 170, 800 150 C 900 140, 1100 140, 1200 150 C 1500 170, 1700 170, 2200 170"
          stroke="rgba(197, 163, 99, 0.5)"
          strokeWidth="3"
        />

        <path
          className="main-line"
          d="M -200 210 C 200 210, 400 210, 800 160 C 900 150, 1100 150, 1200 160 C 1500 210, 1700 210, 2200 210"
          stroke="rgba(197, 163, 99, 0.5)"
          strokeWidth="3"
        />
      </svg>
    </div>

    <div className="text-center">
        <p className="max-w-3xl mx-auto paragraph text-gray-600 mb-6 md:mb-24 px-2">
          We acquire businesses with strong histories and proven excellence, then elevate them with modern investment strategy, advanced technology, operational discipline, and global reach.
          <br/>
          Every company keeps its identity.
          <br/>
          Every company gains Mosaic’s power.
        </p>
      </div>
    </>
  );
}



// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import SectionHeader from "../../shared/sectionHeader/sectionHeader";

// export default function WavesSection() {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     const svg = svgRef.current;
//     const mainPaths = svg.querySelectorAll(".main-line");

//     mainPaths.forEach((path, index) => {
//       const totalLength = path.getTotalLength();

//       // 1) عمل نسخة ثانية من الخط
//       const movingLine = path.cloneNode();
//       movingLine.classList.add("moving-line");

//       // تغيير اللون فقط للخط المتحرك
//       movingLine.setAttribute("stroke", "#00CFFF");
//       movingLine.setAttribute("stroke-width", "4");
//       movingLine.setAttribute("opacity", "1");

//       svg.appendChild(movingLine);

//       // 2) نحدد الـ dash بحيث يظهر الخط كامل لكنه متحرك
//       gsap.set(movingLine, {
//         strokeDasharray: totalLength,
//         strokeDashoffset: totalLength,
//       });

//       // 3) الحركة الأساسية (يمشي على الخط الأساسي)
//       gsap.to(movingLine, {
//         strokeDashoffset: 0,
//         duration: 5,
//         ease: "none",
//         repeat: -1,
//         delay: index * 0.7, // تحريك خط وراء الثاني
//       });
//     });
//   }, []);

//   return (
//     <div className="relative w-full h-[450px] bg-[#F4FAFC] overflow-hidden flex items-center justify-center">
//       {/* TEXT */}
//       <div className=" text-center">
//         <h3 className="heading-3 mb-4"><SectionHeader firstWord="Our Holdings"/></h3>
//         <h4 className="text-lg font-semibold text-gray-600">
//           We don’t collect companies. We build an ecosystem.
//         </h4>
//         <p className="max-w-3xl mx-auto paragraph text-gray-600 mb-24">
//           Each company within Mosaic Holding Corporation represents a piece of a larger vision — a global investment ecosystem of industry leaders shaping cities, communities, and economies.
//         </p>
//       </div>

//       {/* WAVES */}
//       <svg
//         ref={svgRef}
//         className="absolute bottom-0 w-full"
//         height="260"
//         viewBox="0 0 2000 260"
//         fill="none"
//       >
//         <path
//           className="main-line"
//           d="M -200 40 C 200 40, 400 40, 800 120 C 900 150, 1100 150, 1200 120 C 1500 40, 1700 40, 2200 40"
//           stroke="#D4DCE1"
//           strokeWidth="3"
//         />

//         <path
//           className="main-line"
//           d="M -200 80 C 200 80, 400 80, 800 130 C 900 150, 1100 150, 1200 130 C 1500 80, 1700 80, 2200 80"
//           stroke="#C8E9F8"
//           strokeWidth="3"
//           opacity="0.6"
//         />

//         <path
//           className="main-line"
//           d="M -200 130 C 200 130, 400 130, 800 150 C 850 155, 900 160, 950 150 C 1000 140, 1050 155, 1100 150 C 1150 145, 1200 140, 1300 150 C 1500 130, 1700 130, 2200 130"
//           stroke="#82E8F9"
//           strokeWidth="3"
//         />

//         <path
//           className="main-line"
//           d="M -200 170 C 200 170, 400 170, 800 150 C 900 140, 1100 140, 1200 150 C 1500 170, 1700 170, 2200 170"
//           stroke="#BDEFFF"
//           strokeWidth="3"
//           opacity="0.6"
//         />

//         <path
//           className="main-line"
//           d="M -200 210 C 200 210, 400 210, 800 160 C 900 150, 1100 150, 1200 160 C 1500 210, 1700 210, 2200 210"
//           stroke="#A2F2F3"
//           strokeWidth="3"
//         />
//       </svg>
//     </div>
//   );
// }
