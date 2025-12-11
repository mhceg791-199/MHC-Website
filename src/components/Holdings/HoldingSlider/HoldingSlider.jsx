// import SectionHeader from "../../shared/sectionHeader/sectionHeader";
// import homeSlider from "../../../data/homeSlider";

// export default function HoldingSlider() {
//   return (
//     <section className="py-16 overflow-hidden bg-[#faf9f7] relative">
//       {/* عنوان السيكشن */}
//       <div className="heading-3 font-bold mb-8 leading-tight md:px-12 px-5">
//         <SectionHeader firstWord="The MHC" secondWord="Way" />
//       </div>

//       {/* الضباب الجانبي */}
//       <div className="absolute left-0 top-0 h-full w-72 bg-gradient-to-r from-[#faf9f7] to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 h-full w-72 bg-gradient-to-l from-[#faf9f7] to-transparent z-10 pointer-events-none" />

//       {/* السلايدر */}
//       <div className="slider-wrapper">
//         <div className="slider-track">
//           {[...homeSlider, ...homeSlider].map((h, i) => (
//             <div
//               key={i}
//               className="
//     slide-card group 
//     shadow-sm hover:shadow-md transition-all 
//     bg-white/60 backdrop-blur-md 
//     flex flex-col items-center justify-center 
//     p-6 
//     rounded-xl  
//   "
//               style={{
//                 width: "260px", // العرض
//                 height: "140px", // الارتفاع
//               }}
//             >
//               {/* العنوان */}
//               <div className=" mt-2 text-mainGold font-bold text-xl text-center">
//                 {h.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// import SectionHeader from "../../shared/sectionHeader/sectionHeader";
// import homeSlider from "../../../data/homeSlider";
// import SliderAnimatedCard from "./SliderAnimatedCard"; // ← أضف هذا

// export default function HoldingSlider() {
//   return (
//     <section className="py-16 overflow-hidden bg-[#faf9f7] relative">
//       <div className="heading-3 font-bold mb-8 leading-tight md:px-12 px-5">
//         <SectionHeader firstWord="The MHC" secondWord="Way" />
//       </div>

//       {/* الضباب */}
//       <div className="absolute left-0 top-0 h-full w-72 bg-gradient-to-r from-[#faf9f7] to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 h-full w-72 bg-gradient-to-l from-[#faf9f7] to-transparent z-10 pointer-events-none" />

//       {/* السلايدر */}
//       <div className="slider-wrapper">
//         <div className="slider-track">
//           {[...homeSlider, ...homeSlider].map((h, i) => (
//             <SliderAnimatedCard key={i} title={h.title} />
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .slider-wrapper {
//           width: 100%;
//           overflow: hidden;
//         }

//         .slider-track {
//           display: flex;
//           gap: 32px;
//           animation: scroll 22s linear infinite;
//         }

//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style>
//     </section>
//   );
// }
import industriesHoldings from "../../../data/industriesHoldings";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
// import homeSlider from "../../../data/homeSlider";
import SliderAnimatedCard from "./SliderAnimatedCard";

export default function HoldingSlider() {
  return (
    <section className="py-6 md:py-16 overflow-hidden bg-[#faf9f7] relative text-center">
      <h3 className="heading-3 mb-4  text-center">
        <SectionHeader firstWord="OUR INDUSTRIES" />
      </h3>

      {/* محتوى قبل الكاردس */} 
      <h4 className="text-lg font-semibold text-gray-600">
        We invest where the world is built.
      </h4>
      <p className="mb-8 text-center max-w-3xl mx-auto paragraph text-gray-600">
        MHC focuses on sectors that shape economies and define nations:
      </p>

      {/* الضباب */}
      <div className="absolute left-0 top-0 h-full w-16 md:w-72 bg-gradient-to-r from-[#f9ecd2] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 md:w-72 bg-gradient-to-l from-[#f9ecd2] to-transparent z-10 pointer-events-none" />

      {/* السلايدر */}
      <div className="slider-wrapper mb-8">
        <div className="slider-track">
          {[...industriesHoldings, ...industriesHoldings].map((h, i) => (
            <SliderAnimatedCard key={i} title={h.title} />
          ))}
        </div>
      </div>

      {/* محتوى بعد الكاردس */}
      <div className="text-center max-w-3xl mx-auto text-lg text-gray-800">
        Together, they form a strategic network — connected, agile, and built for global expansion.
      </div>

      <style>{`
        .slider-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .slider-track {
          display: flex;
          gap: 32px;
          animation: scroll 22s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
