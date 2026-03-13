import { motion } from "framer-motion";
import clients from "../../../data/clients";
import founders from "../../../data/founders";
import DeliverSlider from "./DeliverSlider";


export default function RotatingLogosSection() {
  return (
    <section className="relative w-full py-12 md:py-32 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 overflow-hidden">

      {/* --------------- BLOCK 1 --------------- */}
      <div
        className="
        relative 
        w-[390px] h-[390px]
        sm:w-[360px] sm:h-[360px]
        md:w-[450px] md:h-[450px]
        lg:w-[520px] lg:h-[520px]
        text-white
        overflow-visible
      "
      >

        <motion.img
          src="/logo-c.png"
          alt="logo"
          className="absolute inset-0 w-full h-full opacity-80"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        />

        {/* TEXT BLOCK */}
        <div
          className="
          absolute inset-0 
          flex flex-col items-center justify-center
          text-center px-4
          z-20 w-[14rem]
          md:max-w-[22rem]
          mx-auto
        "
        >
          <h3 className="text-[1.1rem] md:heading-3 text-mainGold font-bold mb-2 text-xl md:text-2xl">
            For Founders & Teams
          </h3>

          <div className="w-full md:w-[16rem]">
            <DeliverSlider displayData={founders} />
          </div>
        </div>
      </div>

      {/* --------------- BLOCK 2 --------------- */}
      <div
        className="
        relative 
        w-[390px] h-[390px]
        sm:w-[360px] sm:h-[360px]
        md:w-[450px] md:h-[450px]
        lg:w-[520px] lg:h-[520px]
        text-white
        overflow-visible
      "
      >

        <motion.img
          src="/logo-c.png"
          alt="logo"
          className="absolute inset-0 w-full h-full opacity-80"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        />

        <div
          className="
          absolute inset-0 
          flex flex-col items-center justify-center
          text-center px-4
          z-20 w-[14rem]
          md:max-w-[22rem]
          mx-auto
        "
        >
          <h3 className="text-[1.1rem] md:heading-3 text-mainGold font-bold mb-2 text-xl md:text-2xl">
            For Clients
          </h3>

          <div className="w-full md:w-[16rem]">
            <DeliverSlider displayData={clients} />
          </div>
        </div>
      </div>

    </section>
  );
}
