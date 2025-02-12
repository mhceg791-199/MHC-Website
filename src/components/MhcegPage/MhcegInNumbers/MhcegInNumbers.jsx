import React from "react";
import { useInView } from "react-intersection-observer";
import useCountUp from "../../../Hooks/useCountUp";

function MhcegInNumbers() {
  const { ref, inView } = useInView({ triggerOnce: true }); // Detects if in view once
  const oneHundred = useCountUp(100, inView, 6000);
  const nintyFive = useCountUp(95, inView, 5900);
  const ten = useCountUp(10, inView, 2000);
  const twenty = useCountUp(20, inView, 4000);
  const oneThouthan = useCountUp(1000, inView, 20000);
  const numbersDetails = [
    {
      number: twenty,
      icon: "+",
      text: "Engineers",
    },
    {
      number: ten,
      icon: "+",
      text: "Industries Served",
    },
    {
      number: oneHundred,
      icon: "+",
      text: "Years of Expertise",
    },
    {
      number: oneHundred,
      icon: "+",
      text: "Projects",
    },
  ];
  return (
    <>
      <div className="md:p-8 p-5 bg-mainGold mb-14 text-white">
        <h2 className="text-xLarge font-bold mb-10">MHCEG in Numbers</h2>
        <div
          ref={ref}
          className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 grid-cols-2"
        >
          {numbersDetails.map(({ icon, text, number }, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 text-center ">
                <p className="text-xl">{text}</p>
                <div className="flex justify-center lg:text-[60px] md:text-[30px]  font-bold">
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

export default MhcegInNumbers;
