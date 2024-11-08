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
  icon: Icon,
}) {
  return (
    <div className="">
      <img className="w-full lg:h-[70vh] object-cover" src={img} alt="" />
      <div className="bg-lightGray relative translate-y-[-20%]  sm:mx-10  p-8 md:px-14">
        <div className="flex items-stretch">
          <Icon className="text-[65px] border-[3px] me-5 border-mainGold text-mainGold rounded-full p-3" />
          <SectionHeader
            firstWord={firstWord}
            secondWord={secondWord}
            type={type}
          />
        </div>
        <Paragraph p={p} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="bg-gray-400 rounded-xl w-full h-[1px] mt-5"></div>
      </div>
    </div>
  );
}

export default IndustryCard;
