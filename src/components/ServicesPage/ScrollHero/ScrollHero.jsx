// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import logo from "/logo-c.png";

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollHero() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const logoWrapRef = useRef(null);
//   const logoRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {

//       // الحركة الأساسية المرتبطة بالسكرول
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//         },
//       });

//       // النص ينزل من فوق
//       tl.fromTo(
//         titleRef.current,
//         { y: -300, opacity: 0 },
//         { y: 0, opacity: 1, ease: "power2.out" }
//       );

//       // اللوجو يطلع من تحت
//       tl.fromTo(
//         logoWrapRef.current,
//         { y: 180, opacity: 0 },
//         { y: 0, opacity: 1, ease: "power2.out" },
//         "<"
//       );

//       // ❗ بعد ما اللوجو يوصل مكانه → يبدأ الدوران الحر
//       gsap.to(logoRef.current, {
//         rotate: 360,
//         duration: 4,
//         repeat: -1,
//         ease: "linear",
//       });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
//     >
//       {/* العنوان */}
//       <h2
//         ref={titleRef}
//         className="text-[48px] font-serif text-gray-800 text-center mb-16"
//       >
//         India: A dynamic
//         <br />
//         powerhouse of opportunity
//       </h2>

//       {/* اللوجو + الدائرة */}
//       <div
//         ref={logoWrapRef}
//         className="relative flex items-center justify-center"
//       >
//         <div className="absolute w-[160px] h-[160px] border border-dashed border-gray-400 rounded-full" />

//         <img
//           ref={logoRef}
//           src={logo}
//           alt="logo"
//           className="w-[80px] h-[80px] object-contain z-10 bg-white"
//         />
//       </div>
//     </section>
//   );
// }

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "/logo-c.png";
import contentService from "../../../data/contentService";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const logoWrapRef = useRef(null);
  const logoRef = useRef(null);
  const blocksRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=5000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // حركة العنوان
      tl.fromTo(
        titleRef.current,
        { y: -250, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );

      // دخول اللوجو من تحت
      tl.fromTo(
        logoWrapRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "<"
      );

      // دوران اللوجو
      gsap.to(logoRef.current, {
        rotate: 360,
        duration: 6,
        repeat: -1,
        ease: "linear",
      });

      // عرض البلوكات يمين/شمال
      blocksRef.current.forEach((el, i) => {
        const isEven = i % 2 === 0;
        tl.fromTo(
          el,
          {
            x: isEven ? 140 : -140, // كان 200
            y: 30, // كان 80
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.6, // كان 1
            ease: "power2.out",
          },
          "-=0.4" // يبدأ قبل اللي قبله يخلص
        ).to(
          el,
          {
            y: -50, // كان -120
            opacity: 0,
            duration: 0.6, // كان 1
            ease: "power2.in",
          },
          "+=0.1" // مسافة صغيرة جدًا قبل الخروج
        );
      });

      // blocksRef.current.forEach((el, i) => {
      //   const isEven = i % 2 === 0;

      //   tl.fromTo(
      //     el,
      //     {
      //       x: isEven ? 200 : -200,
      //       y: 80,
      //       opacity: 0,
      //     },
      //     {
      //       x: 0,
      //       y: 0,
      //       opacity: 1,
      //       duration: 1,
      //     }
      //   ).to(el, {
      //     y: -120,
      //     opacity: 0,
      //     duration: 1,
      //   });
      // });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ overflowX: "clip" }}
      className="relative min-h-[80vh] md:min-h-screen bg-white overflow-y-hidden flex items-center justify-center"
    >
      <h3
        ref={titleRef}
        className="absolute top-[18%] heading-3 font-bold text-gray-800 text-center leading-tight"
      >
        We Take Companies Further
        <br />
        and Clients All the Way.
      </h3>

      {/* اللوجو + الدائرة */}
      <div
        ref={logoWrapRef}
        className="absolute top-[58%] flex items-center justify-center"
      >
        {/* الدائرة */}
        <div className="absolute w-[220px] h-[220px] border border-dashed border-gray-400 rounded-full" />

        {/* اللوجو */}
        <img
          ref={logoRef}
          src={logo}
          alt="logo"
          className="w-[90px] h-[90px] object-contain z-10 bg-white"
        />
      </div>

      {/* البلوكات يمين/شمال */}
      {contentService.map((block, i) => (
        <div
          key={i}
          ref={(el) => (blocksRef.current[i] = el)}
          className={`absolute top-[50%] text-center -translate-y-1/2 max-w-[360px] ${
            i % 2 === 0 ? "right-[12%] " : "left-[12%] "
          }`}
          style={{ opacity: 0 }}
        >
          <h3 className="text-xl text-mainGold font-semibold mb-4">
            {block.title}
          </h3>

          <ul className=" text-gray-600 paragraph leading-relaxed">
            {block.points.map((p, idx) => (
              <li key={idx}>• {p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import logo from "/logo-c.png";

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollHero() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const logoWrapRef = useRef(null);
//   const logoRef = useRef(null);
//   const blocksRef = useRef([]);

//   const content = [
//     {
//       title: "ACQUISITION & ELEVATION",
//       points: [
//         "Strong family businesses",
//         "Founder-led firms",
//         "High-performing mid-cap companies",
//         "Global expansion strategy",
//         "Corporate-level governance",
//       ],
//     },
//     {
//       title: "PROJECT DELIVERY SUPPORT",
//       points: [
//         "Initial consultation",
//         "Strategic planning",
//         "Design & engineering",
//         "Implementation oversight",
//         "Lifecycle delivery",
//       ],
//     },
//     {
//       title: "INDUSTRY CAPABILITIES",
//       points: [
//         "Architecture & Engineering",
//         "Structural systems",
//         "Real estate development",
//         "Oil & gas engineering",
//         "Energy infrastructure",
//       ],
//     },
//     {
//       title: "TECHNOLOGY TRANSFORMATION",
//       points: [
//         "AI project management",
//         "ERP systems",
//         "Cyber security",
//         "Predictive analytics",
//         "Automation workflows",
//       ],
//     },
//     {
//       title: "GLOBAL EXPANSION",
//       points: [
//         "USA & Canada",
//         "MENA region",
//         "Gulf expansion",
//         "Compliance systems",
//         "Leadership deployment",
//       ],
//     },
//   ];

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=5000",
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       // حركة العنوان
//       tl.fromTo(
//         titleRef.current,
//         { y: -300, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1 }
//       );

//       // حركة اللوجو
//       tl.fromTo(
//         logoWrapRef.current,
//         { y: 300, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1 },
//         "<"
//       );

//       // دوران اللوجو المستمر
//       gsap.to(logoRef.current, {
//         rotate: 360,
//         duration: 6,
//         repeat: -1,
//         ease: "linear",
//       });

//       // ظهور المقاطع بالتبادل يمين/شمال
//       blocksRef.current.forEach((el, i) => {
//         const isEven = i % 2 === 0;

//         tl.fromTo(
//           el,
//           {
//             x: isEven ? 300 : -300,
//             y: 100,
//             opacity: 0,
//           },
//           {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             duration: 1,
//           }
//         )
//           .to(el, {
//             y: -150,
//             opacity: 0,
//             duration: 1,
//           });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//   className="relative min-h-screen bg-white overflow-x-hidden overflow-y-hidden flex items-center justify-center"
//     >
//       {/* العنوان الرئيسي */}
//       <h2
//         ref={titleRef}
//         className="absolute top-[20%] text-[52px] font-serif text-gray-800 text-center"
//       >
//         India: A dynamic<br />powerhouse of opportunity
//       </h2>

//       {/* اللوجو + الدائرة */}
//       <div
//         ref={logoWrapRef}
//         className="absolute top-[55%] flex items-center justify-center"
//       >
//         {/* الدائرة */}
//         <div className="absolute w-[220px] h-[220px] border border-dashed border-gray-400 rounded-full" />

//         {/* اللوجو */}
//         <img
//           ref={logoRef}
//           src={logo}
//           alt="logo"
//           className="w-[90px] h-[90px] object-contain z-10 bg-white"
//         />
//       </div>

//       {/* المقاطع النصية يمين/شمال */}
//       {content.map((block, i) => (
//         <div
//           key={i}
//           ref={(el) => (blocksRef.current[i] = el)}
//           className={`absolute top-[50%] -translate-y-1/2 max-w-[380px] ${
//             i % 2 === 0 ? "right-[8%] text-left" : "left-[8%] text-right"
//           }`}
//           style={{ opacity: 0 }}
//         >
//           <h3 className="text-[26px] font-semibold text-gray-800 mb-4">
//             {block.title}
//           </h3>

//           <ul className="space-y-2 text-gray-600 text-[17px] leading-relaxed">
//             {block.points.map((p, idx) => (
//               <li key={idx}>• {p}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </section>
//   );
// }
