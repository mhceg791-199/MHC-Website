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
