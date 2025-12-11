import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden bg-[rgba(0,0,0,0.8)]">
      
      {/* OUTER BIG RING (rotating left - counter clockwise) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <img 
          src="/logo-c.png"
          className="w-[400px] h-[400px] md:w-[1000px] md:h-[1000px] opacity-60"
        />
      </motion.div>

      {/* INNER SMALL RING (rotating right - clockwise) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <img 
          src="/logo-c.png"
          className="w-[250px] h-[250px] md:w-[550px] md:h-[550px] opacity-70"
        />
      </motion.div>

      {/* TEXT ON TOP */}
      <div className="absolute w-full top-[25%] text-center px-6 text-mainGold z-20">
        <h3 className="text-xl tracking-wide opacity-80">WHAT WE DO</h3>

        <h4 className="heading-3 font-bold mt-3 leading-snug">
          We Acquire. We Elevate. <br /> We Multiply Impact.
        </h4>

        <p className="max-w-2xl mx-auto mt-5 text-lg text-gray-300 leading-relaxed">
          We partner with exceptional family businesses, founder-led firms, and 
          mid-cap companies — giving them the strategy, technology, and global 
          reach to scale across North America and the Middle East.<br /><br />
          Through modern digital systems, AI-driven operations, global market 
          entry, and risk-managed execution, we transform strong companies into 
          industry leaders.
        </p>

        <button 
          className="inline-block mt-6 bg-mainGold text-white py-3 px-6 rounded-lg font-semibold"
        >
          Learn More About Our Services →
        </button>
      </div>

    </section>
  );
}










// import { motion } from "framer-motion";

// export default function WhatWeDoSection() {
//   return (
//     <section className="relative w-full min-h-screen bg-black overflow-hidden py-20 px-6 md:px-20">

//       {/* Floating particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="particle-bg"></div>
//       </div>

//       {/* Left Side Title */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 max-w-xl"
//       >
//         <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
//           WHAT <span className="text-mainGold">WE DO</span>
//         </h2>

//         <p className="text-lightGray mt-6 leading-relaxed text-lg">
//           We Acquire. We Elevate. We Multiply Impact.
//         </p>

//         <p className="text-gray-300 mt-4 leading-relaxed">
//           We partner with exceptional family businesses, founder-led firms, and
//           mid-cap companies — giving them the strategy, technology, and global
//           reach to scale across North America and the Middle East.
//         </p>

//         <p className="text-gray-300 mt-4 leading-relaxed">
//           Through modern digital systems, AI-driven operations, global market
//           entry, and risk-managed execution, we transform strong companies into
//           industry leaders.
//         </p>

//         <button className="mt-8 px-6 py-3 text-black font-bold bg-mainGold rounded-md hover:bg-secondGold transition-all duration-300">
//           → Learn More About Our Services
//         </button>
//       </motion.div>

//       {/* Right Side Panels */}
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] hidden md:block">
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//           className="grid gap-6"
//         >
//           {[
//             "Acquire",
//             "Elevate",
//             "Multiply Impact",
//             "Transform Through AI",
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.3, duration: 0.6 }}
//               className="neon-card p-5 border border-mainGold bg-black/40 rounded-xl shadow-lg"
//             >
//               <p className="text-mainGold text-xl font-semibold">{item}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Cyber Lines */}
//       <svg
//         className="absolute right-[38%] top-1/2 -translate-y-1/2 w-[40vw] opacity-70 hidden md:block"
//         viewBox="0 0 600 300"
//       >
//         <motion.path
//           d="M0 150 C 150 150, 250 40, 600 40"
//           stroke="#C5A363"
//           strokeWidth="3"
//           fill="none"
//           strokeLinecap="round"
//           initial={{ strokeDashoffset: 2000 }}
//           animate={{ strokeDashoffset: 0 }}
//           transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
//         />
//         <motion.path
//           d="M0 200 C 150 200, 250 260, 600 260"
//           stroke="#C5A363"
//           strokeWidth="3"
//           fill="none"
//           strokeLinecap="round"
//           initial={{ strokeDashoffset: 2000 }}
//           animate={{ strokeDashoffset: 0 }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             repeatType: "mirror",
//           }}
//         />
//       </svg>
//     </section>
//   );
// }
