import React from "react";
import { useInView } from "react-intersection-observer";
import useCountUp from "../../../Hooks/useCountUp";

function MTArchInNumber() {
  const { ref, inView } = useInView({ triggerOnce: true }); // Detects if in view once
  const eighteen = useCountUp(18, inView, 3000);
  const twoThouthanandfive = useCountUp(2005, inView, 3000);
  const twintytwo = useCountUp(22, inView, 3000);
  const oneandHalfThouthan = useCountUp(1500, inView, 3000);
  const numbersDetails = [
    {
      text: "ESTABLISHED",
      number: twoThouthanandfive,
    },
    {
      text: "YEARS OF EXPERTISE",
      number: eighteen,
      icon: "+",
    },
    {
      text: "TEAM SIZE",
      number: twintytwo,
      icon: "+",
    },
    {
      text: "PROJECTS",
      number: oneandHalfThouthan,
      icon: "+",
    },
  ];
  return (
    <>
      <div className="md:p-8 p-5 bg-mainGold mb-14 text-white">
        <h2 className="text-xLarge font-bold mb-10">MT-Arch in Numbers</h2>
        <div ref={ref} className="grid lg:grid-cols-4 gap-4 grid-cols-2 ">
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


export default MTArchInNumber;
