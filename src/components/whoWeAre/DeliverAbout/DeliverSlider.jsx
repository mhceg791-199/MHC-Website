import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DeliverSlider({ displayData }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % displayData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const item = displayData[index];

  return (
    <div className="relative h-[95px] overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          exit={{ y: -50, opacity: 0 }} 
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute w-full text-center"
        >
          <div className="p-2">
            <div className="text-base md:text-lg font-medium text-black">
              {item.value}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
