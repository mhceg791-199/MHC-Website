import { useInView } from "react-intersection-observer";
import useCountUp from "../../../Hooks/useCountUp";
import NumbersSection from "../../shared/NumbersSection/NumbersSection";
import { MHCNumbers } from "../../../data/numbers/numbersSection";

function MhcInNumber() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const five = useCountUp(5, inView, 3000);
  const twenty = useCountUp(20, inView, 3000);
  const threeThousand = useCountUp(3000, inView, 3000);

  const numbersDetails = [
    { text: "Continents", number: five, max: 5 },
    { text: "Countries", number: twenty, max: 20, icon: "+" },
    { text: "Projects", number: threeThousand, max: 3000, icon: "+" },
  ];

  return (
    <div>
    <NumbersSection
            title="MHC in Numbers"
            items={MHCNumbers}
            columns="sm:grid-cols-3"
          />
    </div>
    
    // <div className="bg-[#0c0c0c] text-white mt-3 mb-14">
    //   <h3 className="mb-3 font-bold  heading-3  md:text-left">
    //     MHC in Numbers
    //   </h3>

    //   <div
    //     ref={ref}
    //     className="grid grid-cols-1 sm:grid-cols-3 gap-2 "
    //   >
    //     {numbersDetails.map(({ text, number, max, icon }, index) => {
    //       const progress = Math.min((number / max) * 100, 100);

    //       return (
    //         <div key={index} className="flex flex-col items-center">
    //           <p className="md:text-lg text-base mb-2 text-gray-300">{text}</p>

    //           <div className="flex justify-center items-baseline heading-3 font-bold leading-none">
    //             <span>{number}</span>
    //             <span className=" ml-1">{icon}</span>
    //           </div>

            
    //           <div className="w-3/4 h-4 bg-gray-800 mt-4 overflow-hidden border border-gray-600">
    //             <div
    //               className="h-full bg-gradient-to-r from-mainGold to-yellow-400 transition-all duration-600 ease-linear"
    //               style={{ width: `${progress}%` }}
    //             ></div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}

export default MhcInNumber;
