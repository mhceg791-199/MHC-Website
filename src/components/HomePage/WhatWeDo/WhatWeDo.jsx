import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const nav = useNavigate();
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
        className="absolute inset-0 hidden md:flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <img
          src="/logo-c.png"
          className="w-[250px] h-[250px] md:w-[550px] md:h-[550px] opacity-70"
        />
      </motion.div>

      {/* TEXT ON TOP */}
      <div className="absolute w-full top-[7%] md:top-[25%] text-center px-6 text-mainGold z-20">
        <h3 className="text-xl tracking-wide opacity-80">WHAT WE DO</h3>

        <h4 className="heading-3 font-bold mt-3 leading-snug">
          We Acquire. We Elevate. <br /> We Multiply Impact.
        </h4>

        <p className="max-w-2xl mx-auto mt-5 text-lg text-gray-300 leading-relaxed">
          We partner with exceptional family businesses, founder-led firms, and
          mid-cap companies — giving them the strategy, technology, and global
          reach to scale across North America and the Middle East.
          <br />
          <br />
          Through modern digital systems, AI-driven operations, global market
          entry, and risk-managed execution, we transform strong companies into
          industry leaders.
        </p>

        <button
          onClick={() => nav("services")}
          className="inline-block mt-6 bg-mainGold text-white py-3 px-6 rounded-lg font-semibold"
        >
          Learn More About Our Services
        </button>
      </div>
    </section>
  );
}
