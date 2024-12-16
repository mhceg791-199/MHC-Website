import React from "react";
import { useInView } from "react-intersection-observer";
import useCountUp from "../../../Hooks/useCountUp";

function ArupInNumber() {
  const { ref, inView } = useInView({ triggerOnce: true }); // Detects if in view once
  const fourty = useCountUp(40, inView, 6000);
  const ninteenEightyEight = useCountUp(1988, inView, 30000);
  const ten = useCountUp(10, inView, 2000);
  const oneThouthan = useCountUp(1000, inView, 20000);
  const numbersDetails = [
    {
      text: "ESTABLISHED",
      number: ninteenEightyEight,
    },
    {
      text: "YEARS OF EXPERTISE",
      number: fourty,
      icon: "+",
    },
    {
      text: "COUNTRIES",
      number: ten,
      icon: "+",
    },
    {
      text: "PROJECTS",
      number: oneThouthan,
      icon: "+",
    },
  ];
  return (
    <>
      <div className="md:p-8 p-5 bg-mainGold mb-14 text-white">
        <h2 className="text-xLarge font-bold mb-10">Arup in Numbers</h2>
        <div ref={ref} className="grid lg:grid-cols-4 gap-4 grid-cols-2 ">
          {numbersDetails.map(({ icon, text, number }, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 text-center ">
                <p className="text-lg">{text}</p>
                <div className="flex justify-center lg:text-[60px] md:text-[30px] font-bold">
                  <p>{icon}</p>
                  <p>{number}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
/*
         <div className="col-span-1 flex justify-center items-center">
                <div className="grid grid-cols-3  md:m-auto me-auto">
                  <div className="col-span-1 flex justify-end  items-end">
                    <p className="text-white lg:text-[50px] md:text-[30px] text-[40px] h-auto text-center font-extrabold">
                      {icon}
                    </p>
                  </div>
                  <div className="col-span-2 flex">
                    <div className="text-white text-start flex items-center flex-col ">
                      <span className="py-0 w-full lg:text-xl md:text-sm text-xs bg-">
                        {text}
                      </span>
                      <span className="font-bold text-5xl md:text-6xl lg:text-[90px]">
                        {number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>*/

export default ArupInNumber;
