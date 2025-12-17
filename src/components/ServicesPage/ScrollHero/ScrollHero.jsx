
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
//     const mm = gsap.matchMedia();

//     const ctx = gsap.context(() => {
//       mm.add(
//         {
//           mobile: "(max-width: 767px)",
//           desktop: "(min-width: 768px)",
//         },
//         (context) => {
//           const { mobile, desktop } = context.conditions;

//           const tl = gsap.timeline({
//             scrollTrigger: {
//               trigger: sectionRef.current,
//               start: "top top",
//               end: "+=5000",
//               scrub: true,
//               pin: true,
//               anticipatePin: 1,
//             },
//           });

//           /* ================= TITLE ================= */
//           tl.fromTo(
//             titleRef.current,
//             { y: -250, opacity: 0 },
//             { y: 0, opacity: 1, duration: 1 }
//           );

//           /* ================= LOGO ================= */
//           tl.fromTo(
//             logoWrapRef.current,
//             { y: 200, opacity: 0 },
//             { y: 0, opacity: 1, duration: 1 },
//             "<"
//           );

//           gsap.to(logoRef.current, {
//             rotate: 360,
//             duration: 6,
//             repeat: -1,
//             ease: "linear",
//           });

//           /* ================= BLOCKS ================= */
//           // blocksRef.current.forEach((el, i) => {
//           //   const isEven = i % 2 === 0;

//           //   tl.fromTo(
//           //     el,
//           //     {
//           //       // 📱 Mobile (ثابت)
//           //       // 💻 Desktop (أصلي)
//           //       x: mobile ? 0 : isEven ? 140 : -140,
//           //       y: mobile ? 0 : 30,
//           //       opacity: 0,
//           //     },
//           //     {
//           //       x: 0,
//           //       y: 0,
//           //       opacity: 1,
//           //       duration: 0.6,
//           //       ease: "power2.out",
//           //     },
//           //     desktop ? "-=0.4" : undefined
//           //   ).to(
//           //     el,
//           //     {
//           //       y: mobile ? 0 : -50,
//           //       opacity: 0,
//           //       duration: 0.6,
//           //       ease: "power2.in",
//           //     },
//           //     "+=0.1"
//           //   );
//           // });
//           blocksRef.current.forEach((el, i) => {
//   const isEven = i % 2 === 0;

//   tl.fromTo(
//     el,
//     {
//       // 📱 Mobile: ثابت
//       // 💻 Desktop: يدخل ناحية النص
//       x: mobile ? 0 : isEven ? -80 : 80,
//       y: mobile ? 0 : 30,
//       opacity: 0,
//     },
//     {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       duration: 0.6,
//       ease: "power2.out",
//     },
//     desktop ? "-=0.4" : undefined
//   ).to(
//     el,
//     {
//       y: mobile ? 0 : -50,
//       opacity: 0,
//       duration: 0.6,
//       ease: "power2.in",
//     },
//     "+=0.1"
//   );
// });

//         }
//       );
//     }, sectionRef);

//     return () => {
//       mm.revert();
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{ overflowX: "clip" }}
//       className="relative min-h-screen bg-white overflow-y-hidden flex items-center justify-center"
//     >
//       {/* ================= TITLE ================= */}
//       <h3
//         ref={titleRef}
//         className="absolute top-[18%] heading-3 font-bold text-gray-800 text-center leading-tight"
//       >
//         We Take Companies Further
//         <br />
//         and Clients All the Way.
//       </h3>

//       {/* ================= LOGO ================= */}
//       <div
//         ref={logoWrapRef}
//         className="absolute top-[35%] md:top-[58%] flex items-center justify-center"
//       >
//         <div className="absolute w-[220px] h-[220px] border border-dashed border-gray-400 rounded-full" />

//         <img
//           ref={logoRef}
//           src={logo}
//           alt="logo"
//           className="w-[90px] h-[90px] object-contain z-10 bg-white"
//         />
//       </div>

//       {/* ================= BLOCKS ================= */}
//       {contentService.map((block, i) => (
//         <div
//           key={i}
//           ref={(el) => (blocksRef.current[i] = el)}
//           className={`
//             absolute
//             opacity-0

//             /* 📱 Mobile */
//             left-1/2
//             -translate-x-1/2
//             top-[56%]
//             text-center
//             max-w-[360px]

//             /* 💻 Desktop (أصلي 100%) */
//             md:top-[50%]
//             md:-translate-y-1/2
//             md:max-w-[360px]
//             md:text-center
//             ${i % 2 === 0 ? "md:right-[-3%] md:left-auto" : "md:left-[24%]"}
//           `}
//         >
//           <h3 className="text-xl text-mainGold font-semibold mb-4">
//             {block.title}
//           </h3>

//           <ul className="text-gray-600 paragraph leading-relaxed">
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
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add(
        {
          mobile: "(max-width: 829px)",   // 📱 موبايل + iPad
          desktop: "(min-width: 830px)",  // 💻 Desktop فقط
        },
        (context) => {
          const { mobile, desktop } = context.conditions;

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

          /* ================= TITLE ================= */
          tl.fromTo(
            titleRef.current,
            { y: -250, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
          );

          /* ================= LOGO ================= */
          tl.fromTo(
            logoWrapRef.current,
            { y: 200, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "<"
          );

          gsap.to(logoRef.current, {
            rotate: 360,
            duration: 6,
            repeat: -1,
            ease: "linear",
          });

          /* ================= BLOCKS ================= */
          blocksRef.current.forEach((el, i) => {
            const isEven = i % 2 === 0;

            tl.fromTo(
              el,
              {
                // 📱 Mobile + iPad (ثابت)
                // 💻 Desktop (حركة جانبية)
                x: mobile ? 0 : isEven ? -80 : 80,
                y: mobile ? 0 : 30,
                opacity: 0,
              },
              {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
              },
              desktop ? "-=0.4" : undefined
            ).to(
              el,
              {
                y: mobile ? 0 : -50,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
              },
              "+=0.1"
            );
          });
        }
      );
    }, sectionRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ overflowX: "clip" }}
      className="relative min-h-screen bg-white overflow-y-hidden flex items-center justify-center"
    >
      {/* ================= TITLE ================= */}
      <h3
        ref={titleRef}
        className="absolute top-[18%] heading-3 font-bold text-gray-800 text-center leading-tight"
      >
        We Take Companies Further <br />
        and Clients All the Way.
      </h3>

      {/* ================= LOGO ================= */}
      <div
        ref={logoWrapRef}
        className="absolute top-[35%] lg:top-[58%] flex items-center justify-center"
      >
        <div className="absolute w-[220px] h-[220px] border border-dashed border-gray-400 rounded-full" />
        <img
          ref={logoRef}
          src={logo}
          alt="logo"
          className="w-[90px] h-[90px] object-contain z-10 bg-white"
        />
      </div>

      {/* ================= BLOCKS ================= */}
      {contentService.map((block, i) => (
        <div
          key={i}
          ref={(el) => (blocksRef.current[i] = el)}
          className={`
            absolute opacity-0
            left-1/2 -translate-x-1/2 top-[56%]
            text-center max-w-[360px]

            /* 💻 Desktop فقط */
            lg:top-[50%]
            lg:-translate-y-1/2
            lg:max-w-[360px]
            lg:text-center
            ${
              i % 2 === 0
                ? "lg:right-[-3%] lg:left-auto"
                : "lg:left-[24%]"
            }
          `}
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
