// /* HeroScroll.js */
// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import MiniSpheres from "./MiniSpheres";
// import EndText from "./EndText";
// import StartText from "./StartText";
// import world_mask from "../../../assets/Uniform_Gold_World_Dots.png";
// import Deliver from "./Deliver";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroScroll() {
//   const sectionRef = useRef(null);
//   const sphereRef = useRef(null);
//   const ringsRef = useRef([]);
//   const textRef = useRef(null);
//   const centerTitleRef = useRef(null);
//   const leftMiniRef = useRef(null);
//   const rightMiniRef = useRef(null);
//   const worldRef = useRef(null);
//   const logoRef = useRef(null); // Logo reference
//   const logoTextRef = useRef(null); // Text above logo

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       /*---------------------------------------------------
//         PHASE 1 — حركة الكورة من فوق → أسفل يسار
//       ---------------------------------------------------*/
//       gsap.to(sphereRef.current, {
//         x: "-80%",
//         y: () => {
//           const textRect = textRef.current.getBoundingClientRect();
//           const sectionRect = sectionRef.current.getBoundingClientRect();
//           const sphereHeight = sphereRef.current.offsetHeight;
//           return (
//             textRect.top -
//             sectionRect.top +
//             textRect.height / 2 -
//             sphereHeight / 2 + 280
//           );
//         },
//         scale: 1.1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           endTrigger: textRef.current,
//           end: "top center",
//           scrub: 1,
//         },
//       });

//       /* Mini Spheres */
//       gsap.to(leftMiniRef.current, {
//         x: "-200%",
//         opacity: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "30% top",
//           scrub: 1,
//         },
//       });
//       gsap.to(rightMiniRef.current, {
//         x: "200%",
//         opacity: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "30% top",
//           scrub: 1,
//         },
//       });

//       /* Rings */
//       ringsRef.current.forEach((ring, i) => {
//         gsap.to(ring, {
//           x: "-140%",
//           y: () => {
//             const textRect = textRef.current.getBoundingClientRect();
//             const sectionRect = sectionRef.current.getBoundingClientRect();
//             const ringHeight = ring.offsetHeight;
//             return (
//               textRect.top -
//               sectionRect.top +
//               textRect.height / 2 -
//               ringHeight / 2 +
//               50 * i
//             );
//           },
//           scale: 0.55 + i * 0.05,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top",
//             endTrigger: textRef.current,
//             end: "top center",
//             scrub: 1,
//           },
//         });

//         gsap.to(ring, {
//           rotate: 360,
//           duration: 40,
//           ease: "linear",
//           repeat: -1,
//         });
//       });

//       /* Hide initial text */
//       gsap.to(centerTitleRef.current, {
//         opacity: 0,
//         y: -40,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "80% top",
//           scrub: 1,
//         },
//       });

//       /* Show EndText بدون fade-in */
//       gsap.set(textRef.current, { opacity: 1 });

//       /*---------------------------------------------------
//         PHASE 2 — Zoom-Out للصورة الدائرية بعد تثبيت الكورة
//       ---------------------------------------------------*/
//       // gsap
//       //   .timeline({
//       //     scrollTrigger: {
//       //       trigger: sectionRef.current,
//       //       start: () => {
//       //         const endPos =
//       //           textRef.current.getBoundingClientRect().top + window.scrollY;
//       //         return endPos - window.innerHeight / 2;
//       //       },
//       //       end: "+=100%",
//       //       scrub: 1,
//       //     },
//       //   })
//       //   .to(worldRef.current, {
//       //     position: "fixed",
//       //     top: "50%",
//       //     left: "50%",
//       //     x: "-50%",
//       //     y: "-50%",
//       //     scale: 6,
//       //     zIndex: 1000,
//       //     borderRadius: "50%",
//       //     ease: "power2.out",
//       //   })
//       //   .to(worldRef.current, {
//       //     opacity: 0,
//       //     ease: "power2.out",
//       //   });

//       /*---------------------------------------------------
//         PHASE 3 — حركة الـ Logo (تكبير + دوران + تصغير)
//       ---------------------------------------------------*/
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: logoRef.current,
//             start: "top 80%",
//             end: "bottom 20%",
//             scrub: 1,
//           },
//         })
//         .fromTo(
//           logoRef.current,
//           { scale: 1, rotate: 0 },
//           { scale: 4, rotate: 360, ease: "power2.out" } // حجم أكبر كما طلبت
//         )
//         .to(logoRef.current, {
//           scale: 1, // تصغير تدريجي بعد التكبير
//           rotate: 720,
//           ease: "power2.out",
//         });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-[270vh] bg-black overflow-hidden"
//     >
//       <MiniSpheres leftSphereRef={leftMiniRef} rightSphereRef={rightMiniRef} />
//       <StartText centerTitleRef={centerTitleRef} />

//       {/* Big Sphere */}
//       <div
//         ref={sphereRef}
//         className="absolute left-1/2 top-0 -translate-x-1/2 
//                    -translate-y-1/2 w-[480px] h-[480px] rounded-full 
//                    bg-gradient-to-b from-[#c5a363] to-[#7e632d]
//                    shadow-2xl z-20"
//       >
//         <div className="w-full h-full rounded-full overflow-hidden relative">
//           <img
//             ref={worldRef}
//             src={world_mask}
//             className="absolute top-0 left-0 w-full h-full 
//                        object-cover scale-100 origin-center rounded-full"
//             alt="world"
//           />
//         </div>
//       </div>

//       {/* Rings */}
//       {[620, 760, 890].map((size, i) => (
//         <div
//           key={i}
//           ref={(el) => (ringsRef.current[i] = el)}
//           className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2
//                      rounded-full border border-white/20"
//           style={{ width: size, height: size }}
//         />
//       ))}

//       {/* End Text */}
//       <EndText textRef={textRef} />

//       {/* Logo + Text */}
//       <Deliver logoTextRef={logoTextRef} logoRef={logoRef}/>
//     </section>
//   );
// }
/* HeroScroll.js */
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MiniSpheres from "./MiniSpheres";
import EndText from "./EndText";
import StartText from "./StartText";
import world_mask from "../../../assets/Uniform_Gold_World_Dots.png";
import Deliver from "./Deliver";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScroll() {
  const sectionRef = useRef(null);
  const sphereRef = useRef(null);
  const ringsRef = useRef([]);
  const textRef = useRef(null);
  const centerTitleRef = useRef(null);
  const leftMiniRef = useRef(null);
  const rightMiniRef = useRef(null);
  const worldRef = useRef(null);
  const logoRef = useRef(null);
  const logoTextRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sphereSize = isMobile ? 260 : 480;
      const ringSizes = isMobile ? [340, 430, 520] : [620, 760, 890];
      const sphereOffsetY = isMobile ? 450 : 300;

      /*------------------------------------------
        PHASE 1 — حركة الكورة
      ------------------------------------------*/
      gsap.to(sphereRef.current, {
        x: isMobile ? "0%" : "-80%",
        y: () => {
          const textRect = textRef.current.getBoundingClientRect();
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const sphereHeight = sphereSize;

          return (
            textRect.top -
            sectionRect.top +
            textRect.height / 2 -
            sphereHeight / 2 +
            sphereOffsetY
          );
        },
        scale: isMobile ? 1 : 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          endTrigger: textRef.current,
          end: "top center",
          scrub: 1,
        },
      });

      /* Hide Mini Spheres on mobile */
      if (!isMobile) {
        gsap.to(leftMiniRef.current, {
          x: "-200%",
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "30% top",
            scrub: 1,
          },
        });
        gsap.to(rightMiniRef.current, {
          x: "200%",
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "30% top",
            scrub: 1,
          },
        });
      }

      /*------------------------------------------
        RINGS
      ------------------------------------------*/
      ringsRef.current.forEach((ring, i) => {
        gsap.set(ring, {
          width: ringSizes[i],
          height: ringSizes[i],
        });

        gsap.to(ring, {
          x: isMobile ? "-60%" : "-140%",
          y: () => {
            const textRect = textRef.current.getBoundingClientRect();
            const sectionRect = sectionRef.current.getBoundingClientRect();
            return (
              textRect.top -
              sectionRect.top +
              textRect.height / 2 -
              ringSizes[i] / 2 +
              40 * i
            );
          },
          scale: isMobile ? 0.7 : 0.55 + i * 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            endTrigger: textRef.current,
            end: "top center",
            scrub: 1,
          },
        });

        gsap.to(ring, {
          rotate: 360,
          duration: 40,
          ease: "linear",
          repeat: -1,
        });
      });

      /*------------------------------------------
        Hide start text
      ------------------------------------------*/
      gsap.to(centerTitleRef.current, {
        opacity: 0,
        y: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "80% top",
          scrub: 1,
        },
      });

      gsap.set(textRef.current, { opacity: 1 });

      /*------------------------------------------
        LOGO ANIMATION (responsive doesn't change)
      ------------------------------------------*/
      gsap.timeline({
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      })
      .fromTo(
        logoRef.current,
        { scale: 1, rotate: 0 },
        { scale: 4, rotate: 360, ease: "power2.out" }
      )
      .to(logoRef.current, {
        scale: 1,
        rotate: 720,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sphereSize = isMobile ? "w-[260px] h-[260px]" : "w-[480px] h-[480px]";

  return (
    <section
      ref={sectionRef}
      className={`relative bg-black overflow-hidden 
                  ${isMobile ? "h-[200vh]" : "h-[270vh]"}`}
    >
      {/* Hide MiniSpheres completely on mobile */}
      {!isMobile && (
        <MiniSpheres
          leftSphereRef={leftMiniRef}
          rightSphereRef={rightMiniRef}
        />
      )}

      <StartText centerTitleRef={centerTitleRef} />

      {/* Big Sphere */}
      <div
        ref={sphereRef}
        className={`absolute left-1/2 top-0 -translate-x-1/2 
                    -translate-y-1/2 rounded-full bg-gradient-to-b
                    from-[#c5a363] to-[#7e632d] shadow-2xl z-20
                    ${sphereSize}`}
      >
        <div className="w-full h-full rounded-full overflow-hidden relative">
          <img
            ref={worldRef}
            src={world_mask}
            className="absolute top-0 left-0 w-full h-full 
                       object-cover rounded-full"
            alt="world"
          />
        </div>
      </div>

      {/* Rings */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          ref={(el) => (ringsRef.current[i] = el)}
          className="absolute left-1/2 top-0 -translate-x-1/2 
                     -translate-y-1/2 rounded-full border border-white/20"
        />
      ))}

      <EndText textRef={textRef} />

      <Deliver logoTextRef={logoTextRef} logoRef={logoRef} />
    </section>
  );
}
