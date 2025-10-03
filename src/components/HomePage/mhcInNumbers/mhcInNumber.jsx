import React from "react";
import { useInView } from "react-intersection-observer";
import useCountUp from "../../../Hooks/useCountUp";

function MhcInNumber() {
  const { ref, inView } = useInView({ triggerOnce: true }); // Detects if in view once
  const five = useCountUp(5, inView, 3000);
  const twinty = useCountUp(20, inView, 3000);
  const threeThouthan = useCountUp(3000, inView, 3000);
  const numbersDetails = [
    {
      text: "Continents",
      number: five,
    },
    {
      text: "Countries",
      number: twinty,
      icon: "+",
    },
    {
      text: "Projects",
      number: threeThouthan,
      icon: "+",
    },
  ];
  return (
    <>
      <div className="md:p-8 p-5 bg-mainGold mb-14 text-white">
        <h2 className="text-xLarge font-bold mb-10">MHC in Numbers</h2>
        <div ref={ref} className="grid grid-cols-3 gap-4  ">
          {numbersDetails.map(({ icon, text, number }, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 text-center ">
                <p className="md:text-large">{text}</p>
                <div className="flex justify-center lg:text-[90px] md:text-[60px] text-[30px]  font-bold">
                  <p>{number}</p>
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

export default MhcInNumber;
