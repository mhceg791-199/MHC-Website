
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import blocks from "../../../data/blocks";
import "react-lazy-load-image-component/src/effects/blur.css";


const AnimatedBlock = React.memo(function AnimatedBlock({
  block,
  index,
  isCentered,
  phase,
}) {
  return (
    <motion.div
      key={index}
      initial={false}
      animate={{
        top: isCentered ? "50%" : block.top,
        left: isCentered ? "50%" : block.left,
        x: isCentered ? "-50%" : "0%",
        y: isCentered ? "-50%" : "0%",
        scale: isCentered ? 0.9 : 1,
        zIndex: isCentered ? 10 + index : 1,
        opacity: phase === "return" ? [0, 1] : 1,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay:
          phase === "gather"
            ? index * 0.1
            : phase === "return"
            ? index * 0.06
            : 0,
      }}
      className="absolute bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center
                 w-32 h-32 transition-transform duration-300 hover:scale-110 cursor-pointer group 
                 will-change-transform will-change-opacity"
    >
      <LazyLoadImage
        src={block.img}
        alt={block.name}
        loading="lazy"
        effect="blur"
        className="w-14 h-14 filter grayscale group-hover:grayscale-0 transition duration-300"
      />
      <p className="text-sm text-gray-800 text-center mt-2">{block.name}</p>
    </motion.div>
  );
});

function BlockInfo() {
  const [phase, setPhase] = useState("spread"); // spread | gather | logo | return
  const [isMobile, setIsMobile] = useState(false);

  // ✅ detect screen size efficiently
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ animation cycle optimized
  useEffect(() => {
    if (isMobile) return;

    let timeouts = [];

    const runAnimation = () => {
      setPhase("gather");
      timeouts.push(setTimeout(() => setPhase("logo"), 1500));
      timeouts.push(setTimeout(() => setPhase("return"), 3500));
      timeouts.push(setTimeout(() => setPhase("spread"), 6500));
    };

    runAnimation();
    const interval = setInterval(runAnimation, 7000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [isMobile]);

  const isCentered = phase === "gather" || phase === "logo";

  
  const visibleBlocks = useMemo(() => blocks.slice(0, 16), []);

  return (
    <div className="relative w-full md:w-1/2 h-[500px] flex items-center justify-center overflow-hidden">
      {/* ✅ main logo */}
      <AnimatePresence>
        {!isMobile && phase === "logo" && (
          <motion.div
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute z-30 flex flex-col items-center justify-center"
          >
            <div className="w-96 h-72 rounded-2xl bg-[#FCFCFE] shadow-lg flex flex-col items-center justify-center">
              <LazyLoadImage
                src="/images/mhc.jpg"
                alt="Main Holding Company"
                effect="blur"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* blocks */}
      {isMobile ? (
        //  phone screen
        <div className="grid grid-cols-2 gap-3 w-full px-6">
          {visibleBlocks.map((block, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center w-full aspect-square cursor-pointer hover:scale-105 transition"
            >
              <LazyLoadImage
                src={block.img}
                alt={block.name}
                effect="blur"
                className="w-10 h-10 filter grayscale hover:grayscale-0 transition duration-300"
              />
              <p className="text-sm text-gray-800 text-center mt-2">
                {block.name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        //  big screen
        <div className="absolute w-full h-full">
          {visibleBlocks.map((block, index) => (
            <AnimatedBlock
              key={index}
              block={block}
              index={index}
              isCentered={isCentered}
              phase={phase}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BlockInfo;
// import { motion } from "framer-motion";
// import blocks from "../../../data/blocks";

// export default function Acquisition() {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center p-10  overflow-hidden">
//       {/* ==== Main Company (MHC) ==== */}
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="relative z-10 bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center mb-16 hover:scale-105 transition-all duration-500"
//       >
//         <img
//           src="/images/mhc.jpg"
//           alt="MHC"
//           className="w-24 h-24 object-contain rounded-full mb-3 border-4 border-[#C5A363]"
//         />
//         <h2 className="text-xl font-bold text-[#1a3442]">MHC Holding</h2>
//         <p className="text-gray-500 text-sm mt-1">
//           Parent company overseeing the following brands
//         </p>
//       </motion.div>

//       {/* ==== Connecting Lines Animation ==== */}
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: 100, opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="w-[2px] bg-[#C5A363] absolute top-[35%] left-1/2 transform -translate-x-1/2"
//       ></motion.div>

//       {/* ==== Sub Companies ==== */}
//       <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 z-10">
//         {blocks.map((company, index) => (
//           <motion.div
//             key={company.name}
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{
//               duration: 0.7,
//               delay: 1 + index * 0.2,
//               ease: "easeOut",
//             }}
//             whileHover={{ scale: 1.08 }}
//             className="relative bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center group cursor-pointer transition-all duration-500"
//           >
//             {/* subtle glow on hover */}
//             <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#C5A363] group-hover:shadow-[0_0_15px_#C5A36388] transition-all duration-500"></div>

//             <img
//               src={company.img}
//               alt={company.name}
//               className="w-16 h-16 object-contain mb-3"
//             />
//             <h3 className="text-[#1a3442] font-semibold">{company.name}</h3>
//           </motion.div>
//         ))}
//       </div>

//       {/* ==== Animated Background Circles (for depth) ==== */}
//       {/* <motion.div
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{ scale: 1.5, opacity: 0.1 }}
//         transition={{ duration: 2, delay: 0.3 }}
//         className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-[#C5A363] rounded-full blur-3xl"
//       ></motion.div> */}
//     </div>
//   );
// }