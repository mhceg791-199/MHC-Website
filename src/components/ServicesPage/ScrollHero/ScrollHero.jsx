// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import logo from "/logo-c.png";
// import contentService from "../../../data/contentService";

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollHero() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const logoWrapRef = useRef(null);
//   const logoRef = useRef(null);
//   const blocksRef = useRef([]);

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
//         { y: -250, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1 }
//       );

//       // دخول اللوجو من تحت
//       tl.fromTo(
//         logoWrapRef.current,
//         { y: 200, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1 },
//         "<"
//       );

//       // دوران اللوجو
//       gsap.to(logoRef.current, {
//         rotate: 360,
//         duration: 6,
//         repeat: -1,
//         ease: "linear",
//       });

//       // عرض البلوكات يمين/شمال
//       blocksRef.current.forEach((el, i) => {
//         const isEven = i % 2 === 0;
//         tl.fromTo(
//           el,
//           {
//             x: isEven ? 140 : -140, // كان 200
//             y: 30, // كان 80
//             opacity: 0,
//           },
//           {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             duration: 0.6, // كان 1
//             ease: "power2.out",
//           },
//           "-=0.4" // يبدأ قبل اللي قبله يخلص
//         ).to(
//           el,
//           {
//             y: -50, // كان -120
//             opacity: 0,
//             duration: 0.6, // كان 1
//             ease: "power2.in",
//           },
//           "+=0.1" // مسافة صغيرة جدًا قبل الخروج
//         );
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{ overflowX: "clip" }}
//       className="relative min-h-[100vh] md:min-h-screen bg-white overflow-y-hidden flex items-center justify-center"
//     >
//       <h3
//         ref={titleRef}
//         className="absolute top-[18%] heading-3 font-bold text-gray-800 text-center leading-tight"
//       >
//         We Take Companies Further
//         <br />
//         and Clients All the Way.
//       </h3>

//       {/* اللوجو + الدائرة */}
//       <div
//         ref={logoWrapRef}
//         className="absolute top-[35%] md:top-[58%] flex items-center justify-center"
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

//       {/* البلوكات يمين/شمال */}
//       {contentService.map((block, i) => (
//         <div
//           key={i}
//           ref={(el) => (blocksRef.current[i] = el)}
//           className={`absolute top-[50%] text-center -translate-y-1/2 max-w-[360px] ${
//             i % 2 === 0 ? "right-[12%] " : "left-[12%] "
//           }`}
//           style={{ opacity: 0 }}
//         >
//           <h3 className="text-xl text-mainGold font-semibold mb-4">
//             {block.title}
//           </h3>

//           <ul className=" text-gray-600 paragraph leading-relaxed">
//             {block.points.map((p, idx) => (
//               <li key={idx}>• {p}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
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

      // 1) حركة العنوان
      tl.fromTo(
        titleRef.current,
        { y: -250, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );

      // 2) دخول اللوجو من تحت
      tl.fromTo(
        logoWrapRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "<"
      );

      // 3) دوران اللوجو
      gsap.to(logoRef.current, {
        rotate: 360,
        duration: 6,
        repeat: -1,
        ease: "linear",
      });

      // 4) عرض مقاطع المحتوى واحد ورا التاني
      blocksRef.current.forEach((el, i) => {
        const isEven = i % 2 === 0;

        tl.fromTo(
          el,
          {
            x: isEven ? 140 : -140,
            y: 30,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        ).to(
          el,
          {
            y: -50,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
          },
          "+=0.1"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ overflowX: "clip" }}
      className="relative min-h-[100vh] md:min-h-screen bg-white overflow-y-hidden flex items-center justify-center"
    >
      {/* ---------------------- TITLE ---------------------- */}
      <h3
        ref={titleRef}
        className="absolute top-[18%] heading-3 font-bold text-gray-800 text-center leading-tight"
      >
        We Take Companies Further
        <br />
        and Clients All the Way.
      </h3>

      {/* ---------------------- LOGO ---------------------- */}
      <div
        ref={logoWrapRef}
        className="absolute top-[35%] md:top-[58%] flex items-center justify-center"
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

      {/* ---------------------- BLOCKS ---------------------- */}
      {contentService.map((block, i) => (
        <div
          key={i}
          ref={(el) => (blocksRef.current[i] = el)}
          className={`
            absolute 
            text-center 
            -translate-y-1/2 
            max-w-[360px]
            left-1/2
            -translate-x-1/2 
            md:translate-x-0

            /* موبايل: كل البلوكات تحت اللوجو */
            ${i === 2 ? "top-[65%]" : "top-[72%]"}

            /* ديسكتوب: يمين/شمال */
            md:top-[50%]
            ${i % 2 === 0 ? "md:right-[12%]" : "md:left-[12%]"}
          `}
          style={{ opacity: 0 }}
        >
          <h3 className="text-xl text-mainGold font-semibold mb-4">
            {block.title}
          </h3>

          <ul className="text-gray-600 paragraph leading-relaxed">
            {block.points.map((p, idx) => (
              <li key={idx}>• {p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

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


