import React from "react";
import { useInView } from "react-intersection-observer";
import useCountUp from "../../../Hooks/useCountUp";

function KallerInNumbers() {
  const { ref, inView } = useInView({ triggerOnce: true }); // Detects if in view once
  const oneHundred = useCountUp(100, inView, 3000);
  const nintyFive = useCountUp(95, inView, 3000);
  const ninteenEightyFour = useCountUp(1984, inView, 3000);
  const ten = useCountUp(10, inView, 3000);
  const twenty = useCountUp(20, inView, 3000);
  const oneThouthan = useCountUp(1000, inView, 3000);

  const numbersDetails = [
    {
      number: nintyFive,
      icon: "%",
      text: "Recurring Clients",
    },
    {
      number: ten,
      icon: "+",
      text: "Team Members",
    },
    {
      number: ninteenEightyFour,
      text: "Established ",
    },
    {
      number: oneThouthan,
      icon: "+",
      text: "Projects",
    },
  ];
  return (
    <>
      <div className="md:p-8 p-5 bg-mainGold mb-14 text-white">
        <h2 className="text-xLarge font-bold mb-10">Kaller in Numbers</h2>
        <div
          ref={ref}
          className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-2"
        >
          {numbersDetails.map(({ icon, text, number }, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 text-center ">
                <p className="md:text-large">{text}</p>
                <div className="flex justify-center lg:text-[50px] md:text-[30px] font-bold">
                  <p className="pe-1">{number}</p>
                  <p>{icon}</p>
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

export default KallerInNumbers;
