import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";

function IndustryCard({
  img,
  firstWord,
  secondWord,
  type = "vertical",
  p,
  icon,
}) {
  return (
    <div className="">
      <img className="w-full lg:h-[70vh] object-cover" src={img} alt="" />
      <div className="bg-lightGray relative md:translate-y-[-20%] translate-y-[-3%]  sm:mx-10  p-8 md:px-14">
        <div className="flex items-center">
          <div className=" border-[3px] me-5 border-mainGold text-mainGold rounded-full flex justify-center  w-24 h-24 items-center ">
            <img className="w-[50%] " src={icon} alt="" />
          </div>
          <SectionHeader
            firstWord={firstWord}
            secondWord={secondWord}
            type={type}
          />
        </div>
        <Paragraph p={p} />
        <br />
  
        <div className="bg-gray-400 rounded-xl w-full h-[1px] mt-5"></div>
      </div>
    </div>
  );
}

export default IndustryCard;
