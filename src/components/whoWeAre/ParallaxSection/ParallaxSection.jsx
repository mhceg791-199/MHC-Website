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
