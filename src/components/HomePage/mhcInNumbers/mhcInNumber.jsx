import React from "react";
import useCountUp from "../../../Hooks/useCountUp";
import { useInView } from "react-intersection-observer";

function MhcInNumber() {
  const { ref, inView } = useInView({ triggerOnce: true }); // Detects if in view once
  const five = useCountUp(5, inView);
  const twenty = useCountUp(20, inView);
  const threeThouthan = useCountUp(3000, inView);
  return (
    <>
      <div ref={ref} className="md:p-10 p-5 bg-mainGold text-white">
        <h2 className="text-large font-bold">MHC in Numbers</h2>
        <div ref={ref} className="grid grid-cols-3">
          <div className="col-span-1 flex justify-center items-center">
            <div className="grid grid-cols-6 m-auto">
              <div className="col-span-6 flex">
                <div className="text-white text-center flex items-center relative">
                  <span className="absolute top-[49%] py-0 w-full lg:text-base md:text-sm text-xs bg-mainGold">
                    Continents
                  </span>
                  <span className="font-bold text-5xl md:text-6xl lg:text-[120px]">
                    0<span>{five}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <div className="grid grid-cols-3 md:m-auto me-auto">
              <div className="col-span-1 flex justify-end items-center">
                <p className="text-white lg:text-[70px] md:text-[50px] text-[40px] h-auto text-center font-extrabold">
                  +
                </p>
              </div>
              <div className="col-span-2 flex">
                <div className="text-white text-center flex items-center relative">
                  <span className="absolute top-[49%] py-0 w-full lg:text-base md:text-sm text-xs bg-mainGold">
                    Countries
                  </span>
                  <span className="font-bold text-5xl md:text-6xl lg:text-[120px]">
                    {twenty}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <div className="grid grid-cols-6 m-auto">
              <div className="col-span-1 flex justify-end items-center">
                <p className="text-white lg:text-[70px] md:text-[50px] text-[40px] h-auto text-center font-extrabold">
                  +
                </p>
              </div>
              <div className="col-span-5 flex">
                <div className="text-white text-center flex items-center relative">
                  <span className="absolute top-[49%] py-0 w-full lg:text-base md:text-sm text-xs bg-mainGold">
                    Projects
                  </span>
                  <span className="font-bold text-5xl md:text-6xl lg:text-[120px]">
                    {threeThouthan}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MhcInNumber;
