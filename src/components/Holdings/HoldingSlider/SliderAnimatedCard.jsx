import { motion } from "framer-motion";
import { useState } from "react";

export default function SliderAnimatedCard({ title }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className="relative rounded-2xl w-[260px] h-[140px]"
    >
      {/* Border الأساسي */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none "></div>

      {/* Hover Border Animation */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-20">
        {/* top */}
        <motion.span
          variants={{ initial: { scaleX: 0 }, hover: { scaleX: 1 } }}
          animate={isHover ? "hover" : "initial"}
          transition={{ duration: 0.35 }}
          className="origin-left absolute top-0 left-0 h-[4px] w-full bg-mainGold"
        />

        {/* bottom */}
        <motion.span
          variants={{ initial: { scaleX: 0 }, hover: { scaleX: 1 } }}
          animate={isHover ? "hover" : "initial"}
          transition={{ duration: 0.35 }}
          className="origin-right absolute bottom-0 right-0 h-[4px] w-full bg-mainGold"
        />

        {/* left */}
        <motion.span
          variants={{ initial: { scaleY: 0 }, hover: { scaleY: 1 } }}
          animate={isHover ? "hover" : "initial"}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="origin-bottom absolute bottom-0 left-0 w-[4px] h-full bg-mainGold"
        />

        {/* right */}
        <motion.span
          variants={{ initial: { scaleY: 0 }, hover: { scaleY: 1 } }}
          animate={isHover ? "hover" : "initial"}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="origin-top absolute top-0 right-0 w-[4px] h-full bg-mainGold"
        />
      </div>

      {/* محتوى الكارد */}
      <div
        className="
          bg-black 
          backdrop-blur-md 
          rounded-2xl 
          w-full h-full 
          flex items-center justify-center 
          text-center p-4
          relative z-10
        "
      >
        <div className="font-bold text-mainGold text-lg tracking-wide">
          {title}
        </div>
      </div>
    </motion.div>
  );
}
